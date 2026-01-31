/**
 * Card Animation Configurations - v3.1
 * Phase 1: Smooth expansion/collapse animations
 */

import { Variants } from 'framer-motion';
import { CardMode } from '@/types/card';

// Animation durations (ms)
export const ANIMATION_DURATION = {
    expand: 400,
    collapse: 300,
    drag: 200,
    stagger: 50,
} as const;

// Easing curves
export const EASING = {
    expand: [0.34, 1.56, 0.64, 1], // Elastic bounce
    collapse: [0.4, 0.0, 0.2, 1],   // Deceleration
    drag: [0.2, 0.0, 0.2, 1],       // Smooth drag
} as const;

// Card heights for different modes - using min-height for Hindi compatibility
export const CARD_HEIGHT = {
    compact: 56,
    standard: 180,
    expanded: 320,
} as const;

/**
 * Main card container animation variants
 * Using minHeight instead of height to accommodate Hindi text (30% wider)
 */
export const cardVariants: Variants = {
    compact: {
        minHeight: CARD_HEIGHT.compact,
        scale: 1,
        transition: {
            duration: ANIMATION_DURATION.collapse / 1000,
            ease: EASING.collapse,
        },
    },
    standard: {
        minHeight: CARD_HEIGHT.standard,
        scale: 1,
        transition: {
            duration: ANIMATION_DURATION.expand / 1000,
            ease: EASING.expand,
        },
    },
    expanded: {
        minHeight: CARD_HEIGHT.expanded,
        scale: 1,
        transition: {
            duration: ANIMATION_DURATION.expand / 1000,
            ease: EASING.expand,
        },
    },
    hover: {
        scale: 1.02,
        y: -4,
        transition: {
            duration: 0.2,
            ease: 'easeOut',
        },
    },
};

/**
 * Content fade-in animation with stagger
 */
export const contentVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 10,
    },
    visible: (custom: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2,
            delay: custom * ANIMATION_DURATION.stagger / 1000,
            ease: 'easeOut',
        },
    }),
};

/**
 * Icon animation variants
 */
export const iconVariants: Variants = {
    compact: {
        scale: 1,
        rotate: 0,
    },
    standard: {
        scale: 1.1,
        rotate: 0,
    },
    expanded: {
        scale: 1.2,
        rotate: 3,
    },
    hover: {
        scale: 1.15,
        rotate: 3,
        transition: {
            duration: 0.2,
            ease: 'easeOut',
        },
    },
};

/**
 * Glow effect animation
 */
export const glowVariants: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: 'easeOut',
        },
    },
    pulse: {
        opacity: [0.5, 1, 0.5],
        transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};

/**
 * Expansion indicator (chevron) animation
 */
export const indicatorVariants: Variants = {
    compact: {
        rotate: 0, // Down chevron
        opacity: 0.6,
    },
    standard: {
        rotate: 180, // Up chevron
        opacity: 0.5,
    },
    expanded: {
        rotate: 0, // Close icon (no rotation)
        opacity: 0.8,
    },
};

/**
 * Get animation config based on current and target mode
 */
export const getTransitionConfig = (from: CardMode, to: CardMode) => {
    const isExpanding =
        (from === 'compact' && to !== 'compact') ||
        (from === 'standard' && to === 'expanded');

    return {
        duration: isExpanding ? ANIMATION_DURATION.expand : ANIMATION_DURATION.collapse,
        ease: isExpanding ? EASING.expand : EASING.collapse,
    };
};

/**
 * Stagger children animation
 */
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: ANIMATION_DURATION.stagger / 1000,
            delayChildren: 0.1,
        },
    },
};
