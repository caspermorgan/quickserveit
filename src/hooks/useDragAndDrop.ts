/**
 * Drag-and-Drop Hook - v3.1 Phase 3
 * Manages card reordering with @dnd-kit
 */

import { useState, useCallback } from 'react';
import {
    DndContext,
    DragEndEvent,
    DragStartEvent,
    DragOverlay,
    useSensor,
    useSensors,
    PointerSensor,
    KeyboardSensor,
    TouchSensor,
    closestCenter,
    DragOverEvent,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
    rectSortingStrategy,
} from '@dnd-kit/sortable';
import { CardState } from '@/types/card';

export interface UseDragAndDropOptions {
    cards: CardState[];
    onCardsReorder: (cards: CardState[]) => void;
    enabled?: boolean;
}

export interface DragState {
    activeId: string | null;
    overId: string | null;
    isDragging: boolean;
}

/**
 * Hook to manage drag-and-drop functionality for cards
 */
export const useDragAndDrop = (options: UseDragAndDropOptions) => {
    const { cards, onCardsReorder, enabled = true } = options;

    const [dragState, setDragState] = useState<DragState>({
        activeId: null,
        overId: null,
        isDragging: false,
    });

    // Configure sensors for different input methods
    const sensors = useSensors(
        // Mouse sensor - for desktop drag
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8, // 8px movement before drag starts (prevents accidental drags)
            },
        }),
        // Touch sensor - for mobile drag
        useSensor(TouchSensor, {
            activationConstraint: {
                delay: 250, // 250ms delay to prevent conflict with scroll
                tolerance: 5, // 5px tolerance
            },
        }),
        // Keyboard sensor - for accessibility
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    /**
     * Handle drag start - save active card
     */
    const handleDragStart = useCallback((event: DragStartEvent) => {
        const { active } = event;

        setDragState({
            activeId: active.id as string,
            overId: null,
            isDragging: true,
        });

        // Haptic feedback on mobile
        if (navigator.vibrate) {
            navigator.vibrate(10); // 10ms vibration
        }
    }, []);

    /**
     * Handle drag over - track which card we're over
     */
    const handleDragOver = useCallback((event: DragOverEvent) => {
        const { over } = event;

        setDragState(prev => ({
            ...prev,
            overId: over ? (over.id as string) : null,
        }));
    }, []);

    /**
     * Handle drag end - reorder cards
     */
    const handleDragEnd = useCallback((event: DragEndEvent) => {
        const { active, over } = event;

        if (!over || active.id === over.id) {
            setDragState({
                activeId: null,
                overId: null,
                isDragging: false,
            });
            return;
        }

        // Find indices
        const oldIndex = cards.findIndex(card => card.id === active.id);
        const newIndex = cards.findIndex(card => card.id === over.id);

        if (oldIndex !== -1 && newIndex !== -1) {
            // Reorder array
            const reorderedCards = arrayMove(cards, oldIndex, newIndex);

            // Update order property for each card
            const updatedCards = reorderedCards.map((card, index) => ({
                ...card,
                order: index,
                lastInteraction: Date.now(),
            }));

            onCardsReorder(updatedCards);

            // Haptic feedback on successful drop
            if (navigator.vibrate) {
                navigator.vibrate([10, 50, 10]); // Pattern: short-pause-short
            }
        }

        setDragState({
            activeId: null,
            overId: null,
            isDragging: false,
        });
    }, [cards, onCardsReorder]);

    /**
     * Handle drag cancel - reset state
     */
    const handleDragCancel = useCallback(() => {
        setDragState({
            activeId: null,
            overId: null,
            isDragging: false,
        });
    }, []);

    /**
     * Get the currently dragged card
     */
    const getActiveCard = useCallback(() => {
        if (!dragState.activeId) return null;
        return cards.find(card => card.id === dragState.activeId) || null;
    }, [dragState.activeId, cards]);

    return {
        sensors,
        dragState,
        activeCard: getActiveCard(),
        handleDragStart,
        handleDragOver,
        handleDragEnd,
        handleDragCancel,
        collisionDetection: closestCenter,
        sortingStrategy: rectSortingStrategy,
    };
};

/**
 * Helper to get card IDs in order
 */
export const getCardIds = (cards: CardState[]): string[] => {
    return cards
        .sort((a, b) => (a.order || 0) - (b.order || 0))
        .map(card => card.id);
};
