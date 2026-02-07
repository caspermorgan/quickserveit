/**
 * Grid Layout Manager - v3.1 Phase 3
 * Manages grid layout with drag-and-drop support
 */

import React from 'react';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import { cn } from '@/lib/utils';
import { useDragAndDrop, getCardIds } from '@/hooks/useDragAndDrop';
import { CardState } from '@/types/card';

export interface GridLayoutManagerProps {
    cards: CardState[];
    onCardsReorder: (cards: CardState[]) => void;
    gridColumns: number;
    isCustomizing: boolean;
    gap?: number;
    children: React.ReactNode;
    renderDragOverlay?: (activeCard: CardState | null) => React.ReactNode;
    className?: string;
}

export const GridLayoutManager = ({
    cards,
    onCardsReorder,
    gridColumns,
    isCustomizing,
    gap = 16,
    children,
    renderDragOverlay,
    className,
}: GridLayoutManagerProps) => {
    const {
        sensors,
        dragState,
        activeCard,
        handleDragStart,
        handleDragOver,
        handleDragEnd,
        handleDragCancel,
        collisionDetection,
        sortingStrategy,
    } = useDragAndDrop({
        cards,
        onCardsReorder,
        enabled: isCustomizing,
    });

    const cardIds = getCardIds(cards);

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={collisionDetection}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
            onDragCancel={handleDragCancel}
        >
            <SortableContext items={cardIds} strategy={sortingStrategy}>
                <div
                    className={cn(
                        'grid transition-all duration-300',
                        className
                    )}
                    style={{
                        gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
                        gap: `${gap}px`,
                    }}
                >
                    {children}
                </div>
            </SortableContext>

            {/* Drag Overlay - shows dragged card */}
            <DragOverlay
                dropAnimation={{
                    duration: 200,
                    easing: 'cubic-bezier(0.18, 0.67, 0.6, 1.22)',
                }}
            >
                {dragState.isDragging && renderDragOverlay
                    ? renderDragOverlay(activeCard)
                    : null}
            </DragOverlay>
        </DndContext>
    );
};
