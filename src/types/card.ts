/**
 * Card System Types - v3.1 Smart Space Arrangement
 * Phase 1: Core Expansion System
 */

export type CardMode = 'compact' | 'standard' | 'expanded';
export type CardPriority = 'pinned' | 'high' | 'normal' | 'low';
export type CardType = 'institutional' | 'creator' | 'personal' | 'ai';

export interface CardPosition {
    row: number;
    col: number;
}

export interface CardSize {
    width: 1 | 2;
    height: 1 | 2;
}

export interface CardState {
    id: string;
    type: CardType;
    mode: CardMode;
    position: CardPosition; // Legacy - will be migrated to order
    size: CardSize;
    priority: CardPriority;
    lastInteraction: number;
    order?: number; // NEW: For drag-and-drop (0-indexed)
    customData?: Record<string, any>;
}

export interface CardContent {
    icon: React.ComponentType<any>; // Lucide icons accept any props
    title: string;
    subtitle?: string;
    description?: string;
    metrics?: Array<{
        label: string;
        value: string;
    }>;
    primaryAction?: {
        label: string;
        onClick: () => void;
    };
    secondaryAction?: {
        label: string;
        onClick: () => void;
    };
    badge?: {
        text: string;
        variant?: 'default' | 'success' | 'warning' | 'info';
    };
}

export interface SmartCardProps {
    state: CardState;
    content: CardContent;
    onModeChange?: (mode: CardMode) => void;
    onStateChange?: (state: Partial<CardState>) => void;
    isEditMode?: boolean;
    className?: string;
}
