/**
 * Space Detection Hook - v3.1 Phase 2
 * Detects available viewport space and determines if cards need auto-collapse
 */

import { useState, useEffect, useCallback } from 'react';
import { CardState, CardMode } from '@/types/card';

export interface SpaceInfo {
    viewportWidth: number;
    viewportHeight: number;
    availableCardSpace: number;
    gridColumns: number;
    shouldAutoCollapse: boolean;
    spaceUtilization: number; // 0-1 (percentage)
}

export interface UseSpaceDetectionOptions {
    cardCount: number;
    minCardWidth?: number;
    minCardHeight?: number;
    gap?: number;
    enabled?: boolean;
}

/**
 * Hook to detect viewport space and calculate if auto-collapse is needed
 */
export const useSpaceDetection = (options: UseSpaceDetectionOptions): SpaceInfo => {
    const {
        cardCount,
        minCardWidth = 280, // Minimum card width in px
        minCardHeight = 180, // Standard card height
        gap = 16, // Gap between cards
        enabled = true,
    } = options;

    const [spaceInfo, setSpaceInfo] = useState<SpaceInfo>({
        viewportWidth: window.innerWidth,
        viewportHeight: window.innerHeight,
        availableCardSpace: 0,
        gridColumns: 2,
        shouldAutoCollapse: false,
        spaceUtilization: 0,
    });

    const calculateSpace = useCallback(() => {
        if (!enabled) return;

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Determine grid columns based on viewport width
        let gridColumns = 2; // Mobile default
        if (viewportWidth >= 1024) {
            gridColumns = 4; // Desktop
        } else if (viewportWidth >= 640) {
            gridColumns = 3; // Tablet
        }

        // Calculate available space per card
        const containerPadding = viewportWidth < 640 ? 16 : viewportWidth < 1024 ? 24 : 32;
        const availableWidth = viewportWidth - (containerPadding * 2);
        const totalGaps = (gridColumns - 1) * gap;
        const availableCardSpace = (availableWidth - totalGaps) / gridColumns;

        // Calculate rows needed
        const rowsNeeded = Math.ceil(cardCount / gridColumns);
        const totalHeightNeeded = rowsNeeded * (minCardHeight + gap);
        const availableHeight = viewportHeight - 200; // Account for header/footer

        // Determine if auto-collapse is needed
        const shouldAutoCollapse =
            availableCardSpace < minCardWidth || // Cards too narrow
            totalHeightNeeded > availableHeight || // Too many rows
            cardCount > 6; // More than 6 cards

        // Calculate space utilization (0-1)
        const idealSpace = cardCount * minCardWidth * minCardHeight;
        const actualSpace = availableWidth * availableHeight;
        const spaceUtilization = Math.min(idealSpace / actualSpace, 1);

        setSpaceInfo({
            viewportWidth,
            viewportHeight,
            availableCardSpace,
            gridColumns,
            shouldAutoCollapse,
            spaceUtilization,
        });
    }, [cardCount, minCardWidth, minCardHeight, gap, enabled]);

    useEffect(() => {
        calculateSpace();

        // Recalculate on window resize
        const handleResize = () => {
            calculateSpace();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [calculateSpace]);

    return spaceInfo;
};

/**
 * Hook to manage auto-collapse behavior
 */
export interface UseAutoCollapseOptions {
    cards: CardState[];
    spaceInfo: SpaceInfo;
    enabled?: boolean;
    onCardsUpdate?: (cards: CardState[]) => void;
    onNotification?: (message: string, action?: () => void) => void;
}

export interface AutoCollapseState {
    isAutoCollapsing: boolean;
    collapsedCardIds: string[];
    canUndo: boolean;
    previousStates: Map<string, CardMode>;
}

export const useAutoCollapse = (options: UseAutoCollapseOptions) => {
    const {
        cards,
        spaceInfo,
        enabled = true,
        onCardsUpdate,
        onNotification,
    } = options;

    const [state, setState] = useState<AutoCollapseState>({
        isAutoCollapsing: false,
        collapsedCardIds: [],
        canUndo: false,
        previousStates: new Map(),
    });

    /**
     * Determine which cards should be auto-collapsed based on priority
     */
    const getCardsToCollapse = useCallback((cards: CardState[]): CardState[] => {
        // Sort by priority (low priority first) and last interaction (oldest first)
        const priorityOrder = { low: 0, normal: 1, high: 2, pinned: 3 };

        return [...cards]
            .filter(card => card.mode !== 'compact' && card.priority !== 'pinned')
            .sort((a, b) => {
                // First by priority
                const priorityDiff = priorityOrder[a.priority] - priorityOrder[b.priority];
                if (priorityDiff !== 0) return priorityDiff;

                // Then by last interaction (older first)
                return a.lastInteraction - b.lastInteraction;
            });
    }, []);

    /**
     * Auto-collapse cards when space is limited
     */
    const autoCollapse = useCallback(() => {
        if (!enabled || !spaceInfo.shouldAutoCollapse) return;

        const cardsToCollapse = getCardsToCollapse(cards);

        if (cardsToCollapse.length === 0) return;

        // Save previous states for undo
        const previousStates = new Map<string, CardMode>();
        const collapsedIds: string[] = [];

        // Determine how many cards to collapse
        const collapseCount = Math.min(
            cardsToCollapse.length,
            Math.ceil(cards.length * 0.4) // Collapse up to 40% of cards
        );

        const updatedCards = cards.map(card => {
            const shouldCollapse = cardsToCollapse
                .slice(0, collapseCount)
                .some(c => c.id === card.id);

            if (shouldCollapse && card.mode !== 'compact') {
                previousStates.set(card.id, card.mode);
                collapsedIds.push(card.id);
                return { ...card, mode: 'compact' as CardMode };
            }

            return card;
        });

        if (collapsedIds.length > 0) {
            setState({
                isAutoCollapsing: true,
                collapsedCardIds: collapsedIds,
                canUndo: true,
                previousStates,
            });

            onCardsUpdate?.(updatedCards);

            onNotification?.(
                `${collapsedIds.length} card${collapsedIds.length > 1 ? 's' : ''} minimized to save space`,
                () => undoCollapse()
            );

            // Reset auto-collapsing flag after animation
            setTimeout(() => {
                setState(prev => ({ ...prev, isAutoCollapsing: false }));
            }, 500);
        }
    }, [enabled, spaceInfo.shouldAutoCollapse, cards, getCardsToCollapse, onCardsUpdate, onNotification]);

    /**
     * Undo the last auto-collapse operation
     */
    const undoCollapse = useCallback(() => {
        if (!state.canUndo || state.previousStates.size === 0) return;

        const updatedCards = cards.map(card => {
            const previousMode = state.previousStates.get(card.id);
            if (previousMode) {
                return { ...card, mode: previousMode };
            }
            return card;
        });

        setState({
            isAutoCollapsing: false,
            collapsedCardIds: [],
            canUndo: false,
            previousStates: new Map(),
        });

        onCardsUpdate?.(updatedCards);
        onNotification?.('Auto-collapse undone');
    }, [state, cards, onCardsUpdate, onNotification]);

    /**
     * Manually trigger auto-collapse
     */
    const triggerAutoCollapse = useCallback(() => {
        autoCollapse();
    }, [autoCollapse]);

    // Auto-collapse when space becomes limited
    useEffect(() => {
        if (spaceInfo.shouldAutoCollapse && !state.isAutoCollapsing) {
            // Debounce to avoid rapid collapses during resize
            const timer = setTimeout(() => {
                autoCollapse();
            }, 300);

            return () => clearTimeout(timer);
        }
    }, [spaceInfo.shouldAutoCollapse, state.isAutoCollapsing, autoCollapse]);

    return {
        ...state,
        undoCollapse,
        triggerAutoCollapse,
        spaceInfo,
    };
};
