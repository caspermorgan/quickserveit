/**
 * Layout Persistence Hook - v3.1 Phase 3
 * Save and restore card layout to localStorage
 */

import { useState, useEffect, useCallback } from 'react';
import { CardState, CardMode, CardPriority } from '@/types/card';
import { AutoCollapseSettings } from '@/modules/core/components/AutoCollapseSettings';

const STORAGE_KEY = 'quickserveit_card_layout_v3.1';
const STORAGE_VERSION = '3.1';

export interface SavedLayout {
    version: string;
    timestamp: number;
    cards: Array<{
        id: string;
        order: number;
        mode: CardMode;
        priority: CardPriority;
    }>;
    gridColumns: number;
    autoCollapseSettings?: AutoCollapseSettings;
}

export interface UseLayoutPersistenceOptions {
    cards: CardState[];
    gridColumns: number;
    autoCollapseSettings?: AutoCollapseSettings;
    onLayoutRestore?: (layout: SavedLayout) => void;
    autoSave?: boolean;
    autoSaveDelay?: number;
}

/**
 * Hook to persist card layout to localStorage
 */
export const useLayoutPersistence = (options: UseLayoutPersistenceOptions) => {
    const {
        cards,
        gridColumns,
        autoCollapseSettings,
        onLayoutRestore,
        autoSave = true,
        autoSaveDelay = 1000, // 1 second debounce
    } = options;

    const [isSaving, setIsSaving] = useState(false);
    const [lastSaved, setLastSaved] = useState<number | null>(null);

    /**
     * Save layout to localStorage
     */
    const saveLayout = useCallback(() => {
        try {
            const layout: SavedLayout = {
                version: STORAGE_VERSION,
                timestamp: Date.now(),
                cards: cards.map(card => ({
                    id: card.id,
                    order: card.order || 0,
                    mode: card.mode,
                    priority: card.priority,
                })),
                gridColumns,
                autoCollapseSettings,
            };

            localStorage.setItem(STORAGE_KEY, JSON.stringify(layout));
            setLastSaved(Date.now());
            setIsSaving(false);

            return true;
        } catch (error) {
            // Silent fail - layout save is not critical
            setIsSaving(false);
            return false;
        }
    }, [cards, gridColumns, autoCollapseSettings]);

    /**
     * Load layout from localStorage
     */
    const loadLayout = useCallback((): SavedLayout | null => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (!stored) return null;

            const layout: SavedLayout = JSON.parse(stored);

            // Version check
            if (layout.version !== STORAGE_VERSION) {
                console.warn('Layout version mismatch, skipping restore');
                return null;
            }

            return layout;
        } catch (error) {
            // Silent fail - return null
            return null;
        }
    }, []);

    /**
     * Reset layout to default (clear localStorage)
     */
    const resetLayout = useCallback(() => {
        try {
            localStorage.removeItem(STORAGE_KEY);
            setLastSaved(null);
            return true;
        } catch (error) {
            // Silent fail
            return false;
        }
    }, []);

    /**
     * Export layout as JSON file
     */
    const exportLayout = useCallback(() => {
        try {
            const layout: SavedLayout = {
                version: STORAGE_VERSION,
                timestamp: Date.now(),
                cards: cards.map(card => ({
                    id: card.id,
                    order: card.order || 0,
                    mode: card.mode,
                    priority: card.priority,
                })),
                gridColumns,
                autoCollapseSettings,
            };

            const blob = new Blob([JSON.stringify(layout, null, 2)], {
                type: 'application/json',
            });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `card-layout-${Date.now()}.json`;
            link.click();
            URL.revokeObjectURL(url);

            return true;
        } catch (error) {
            // Silent fail
            return false;
        }
    }, [cards, gridColumns, autoCollapseSettings]);

    /**
     * Import layout from JSON file
     */
    const importLayout = useCallback((file: File): Promise<SavedLayout | null> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (e) => {
                try {
                    const content = e.target?.result as string;
                    const layout: SavedLayout = JSON.parse(content);

                    // Validate layout structure
                    if (!layout.version || !layout.cards || !Array.isArray(layout.cards)) {
                        throw new Error('Invalid layout file structure');
                    }

                    // Save to localStorage
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(layout));
                    setLastSaved(Date.now());

                    // Notify parent
                    if (onLayoutRestore) {
                        onLayoutRestore(layout);
                    }

                    resolve(layout);
                } catch (error) {
                    // Silent fail
                    reject(error);
                }
            };

            reader.onerror = () => {
                reject(new Error('Failed to read file'));
            };

            reader.readAsText(file);
        });
    }, [onLayoutRestore]);

    /**
     * Check if layout exists in localStorage
     */
    const hasStoredLayout = useCallback((): boolean => {
        return localStorage.getItem(STORAGE_KEY) !== null;
    }, []);

    /**
     * Auto-save with debounce
     */
    useEffect(() => {
        if (!autoSave) return;

        setIsSaving(true);
        const timer = setTimeout(() => {
            saveLayout();
        }, autoSaveDelay);

        return () => clearTimeout(timer);
    }, [cards, gridColumns, autoCollapseSettings, autoSave, autoSaveDelay, saveLayout]);

    /**
     * Listen for storage events (sync across tabs)
     */
    useEffect(() => {
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === STORAGE_KEY && e.newValue) {
                try {
                    const layout: SavedLayout = JSON.parse(e.newValue);
                    if (onLayoutRestore) {
                        onLayoutRestore(layout);
                    }
                } catch (error) {
                    // Silent fail - sync not critical
                }
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, [onLayoutRestore]);

    return {
        saveLayout,
        loadLayout,
        resetLayout,
        exportLayout,
        importLayout,
        hasStoredLayout,
        isSaving,
        lastSaved,
    };
};

/**
 * Migrate old card state to new format
 */
export const migrateCardState = (
    card: CardState & { position?: { row: number; col: number } },
    gridColumns: number
): CardState => {
    // If card has old position format, convert to order
    if ('position' in card && card.position && !('order' in card)) {
        const order = card.position.row * gridColumns + card.position.col;
        const { position, ...rest } = card;
        return {
            ...rest,
            order,
        } as CardState;
    }

    return card as CardState;
};
