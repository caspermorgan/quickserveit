/**
 * Sortable Card Wrapper - v3.1 Phase 3
 * Wraps SmartCard with drag-and-drop functionality
 */

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SmartCard } from './SmartCard';
import { CardState, CardContent, CardMode, SmartCardProps } from '@/types/card';

export interface SortableCardProps extends Omit<SmartCardProps, 'state'> {
    card: CardState;
    isCustomizing: boolean;
}

export const SortableCard = ({
    card,
    content,
    isCustomizing,
    onModeChange,
    onStateChange,
    className,
}: SortableCardProps) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
        isOver,
    } = useSortable({
        id: card.id,
        disabled: !isCustomizing,
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className={cn(
                'relative',
                isDragging && 'z-50',
                isOver && isCustomizing && 'ring-2 ring-creator ring-offset-2 ring-offset-background',
                className
            )}
        >
            {/* Drag Handle - only visible in customization mode */}
            {isCustomizing && (
                <button
                    {...attributes}
                    {...listeners}
                    className={cn(
                        'absolute top-2 left-2 z-10',
                        'p-1.5 rounded-lg',
                        'bg-background/80 backdrop-blur-sm border border-white/20',
                        'hover:bg-white/10 hover:border-white/40',
                        'cursor-grab active:cursor-grabbing',
                        'transition-all duration-200',
                        'touch-none' // Prevent touch scroll
                    )}
                    aria-label="Drag to reorder"
                >
                    <GripVertical size={16} className="text-foreground/60" />
                </button>
            )}

            {/* SmartCard Component */}
            <SmartCard
                state={card}
                content={content}
                onModeChange={onModeChange}
                onStateChange={onStateChange}
                isEditMode={isCustomizing}
                className={cn(
                    isCustomizing && 'cursor-default',
                    isDragging && 'scale-105 rotate-2'
                )}
            />

            {/* Drop Indicator - shows where card will be dropped */}
            {isOver && isCustomizing && !isDragging && (
                <div
                    className={cn(
                        'absolute inset-0 pointer-events-none',
                        'border-2 border-dashed border-creator',
                        'rounded-xl',
                        'animate-pulse'
                    )}
                />
            )}
        </div>
    );
};
