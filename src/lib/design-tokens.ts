/**
 * QuickServeIT Design Tokens
 * Centralized design system values to eliminate magic numbers
 * and ensure consistency across the application.
 */

/**
 * Spacing Scale (8px base unit)
 * Use these instead of hardcoded rem/px values
 */
export const spacing = {
    xs: '0.5rem',   // 8px
    sm: '0.75rem',  // 12px
    md: '1rem',     // 16px
    lg: '1.5rem',   // 24px
    xl: '2rem',     // 32px
    '2xl': '3rem',  // 48px
    '3xl': '4rem',  // 64px
    '4xl': '6rem',  // 96px
    '5xl': '8rem',  // 128px
} as const;

/**
 * Animation Durations (milliseconds)
 * Standardized timing for all transitions and animations
 */
export const duration = {
    instant: 150,   // Very quick feedback
    fast: 200,      // Quick transitions
    normal: 300,    // Standard transitions
    slow: 500,      // Deliberate animations
    slower: 700,    // Emphasis animations
    slowest: 1000,  // Page transitions
} as const;

/**
 * Opacity Scale
 * Consistent transparency values for backgrounds, overlays, etc.
 */
export const opacity = {
    subtle: 0.05,   // Very light tint
    light: 0.10,    // Light overlay
    medium: 0.20,   // Medium overlay
    strong: 0.40,   // Strong overlay
    intense: 0.60,  // Heavy overlay
    opaque: 0.80,   // Nearly solid
} as const;

/**
 * Border Opacity Scale
 * For glass effects and subtle borders
 */
export const borderOpacity = {
    subtle: 0.04,
    light: 0.08,
    medium: 0.15,
    strong: 0.20,
    intense: 0.30,
} as const;

/**
 * Z-Index Scale
 * Layering system for stacking contexts
 */
export const zIndex = {
    base: 0,
    dropdown: 10,
    sticky: 20,
    overlay: 30,
    modal: 40,
    popover: 50,
    toast: 60,
} as const;

/**
 * Breakpoints (matches Tailwind config)
 * Use for responsive design logic
 */
export const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
} as const;

/**
 * Touch Target Sizes
 * Minimum sizes for interactive elements
 */
export const touchTarget = {
    min: '44px',      // Minimum for accessibility
    comfortable: '48px',  // Comfortable size
    large: '52px',    // Large touch target
} as const;

/**
 * Icon Sizes
 * Standardized icon dimensions
 */
export const iconSize = {
    xs: 'w-3 h-3',    // 12px
    sm: 'w-4 h-4',    // 16px
    md: 'w-5 h-5',    // 20px
    lg: 'w-6 h-6',    // 24px
    xl: 'w-8 h-8',    // 32px
    '2xl': 'w-10 h-10', // 40px
} as const;

/**
 * Section Spacing
 * Vertical spacing for page sections
 */
export const sectionSpacing = {
    mobile: 'py-16',      // Mobile sections
    tablet: 'py-20',      // Tablet sections
    desktop: 'py-24',     // Desktop sections
    large: 'py-32',       // Large sections
    responsive: 'py-16 md:py-20 lg:py-24', // Fully responsive
    responsiveLarge: 'py-20 md:py-24 lg:py-32', // Large responsive
} as const;

/**
 * Container Padding
 * Horizontal padding for content containers
 */
export const containerPadding = {
    mobile: 'px-4',
    tablet: 'px-6',
    desktop: 'px-8',
    responsive: 'px-4 sm:px-6 lg:px-8',
} as const;

/**
 * Glass Surface Levels
 * Consolidated glassmorphism variants (reduced from 7 to 3)
 */
export const glassSurface = {
    1: 'glass-1',  // Floating elements (nav, modals) - highest elevation
    2: 'glass-2',  // Primary cards - medium elevation
    3: 'glass-3',  // Nested content - lowest elevation
} as const;

/**
 * Type-safe helper to get duration in CSS format
 */
export const getDuration = (key: keyof typeof duration): string => {
    return `${duration[key]}ms`;
};

/**
 * Type-safe helper to get spacing value
 */
export const getSpacing = (key: keyof typeof spacing): string => {
    return spacing[key];
};

/**
 * Type exports for TypeScript
 */
export type SpacingKey = keyof typeof spacing;
export type DurationKey = keyof typeof duration;
export type OpacityKey = keyof typeof opacity;
export type GlassSurfaceLevel = 1 | 2 | 3;
