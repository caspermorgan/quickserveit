import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

// ============================================
// GLOBAL PAGE TITLE & SUBTITLE SYSTEM
// V6 CENTRALIZED ARCHITECTURE
// ============================================

/**
 * PageTitle - GLOBAL page title component (V6 System)
 * 
 * ABSOLUTE RULES:
 * - Pages ONLY pass content (text)
 * - Pages CANNOT override font, size, color, spacing, weight
 * - ONE consistent hierarchy across ALL pages
 * - No raw classes, no inline styles allowed
 * 
 * Usage: <PageTitle>About Us</PageTitle>
 */

interface PageTitleProps {
    children: ReactNode;
    mode?: 'institutional' | 'creator';
}

export const PageTitle = ({ children, mode }: PageTitleProps) => {
    return (
        <h1 className={cn(
            // V6 LOCKED: Page title sizing
            'text-3xl sm:text-4xl md:text-5xl',
            // V6 LOCKED: Font family and weight
            'font-display font-bold',
            // V6 LOCKED: Tracking and leading
            'tracking-tight leading-[1.1]',
            // V6 LOCKED: Spacing
            'mb-6 sm:mb-8',
            // V6 LOCKED: Text wrapping
            'text-balance',
            // V6 LOCKED: Color (pure white, no opacity)
            'text-foreground',
            // Optional mode-specific accent color for specific words
            mode && 'page-title-with-mode'
        )}>
            {children}
        </h1>
    );
};

/**
 * PageSubtitle - GLOBAL page subtitle component (V6 System)
 * 
 * ABSOLUTE RULES:
 * - Subtitle color is ALWAYS pure white (no opacity reduction)
 * - No gray, no foreground/60, no mode-based dulling
 * - Pages ONLY pass content (text)
 * - If contrast needs adjustment → fix background, not subtitle
 * 
 * Usage: <PageSubtitle>Learn more about our services</PageSubtitle>
 */

interface PageSubtitleProps {
    children: ReactNode;
    className?: string;
}

export const PageSubtitle = ({ children, className }: PageSubtitleProps) => {
    return (
        <p className={cn(
            // V6 LOCKED: Subtitle sizing
            'text-base sm:text-lg md:text-xl',
            // V6 LOCKED: Font weight
            'font-normal',
            // V6 LOCKED: Enhanced leading for multi-line readability
            'leading-[1.75]',
            // V6 LOCKED: Spacing - consistent across all pages
            'mb-10 sm:mb-12',
            // V6 LOCKED: Horizontal padding
            'px-4 sm:px-6',
            // V6 LOCKED: Text wrapping and max width for 2-3 lines
            'text-balance max-w-[65ch] mx-auto',
            // V6 CRITICAL: Pure white, NO opacity reduction
            'text-foreground',
            // V6 LOCKED: Minimum height to ensure 2-3 line space
            'min-h-[4.5rem] sm:min-h-[5rem]',
            className
        )}>
            {children}
        </p>
    );
};

/**
 * PageTitleAccent - Helper for mode-specific accent words
 * 
 * Usage: 
 * <PageTitle>
 *   About <PageTitleAccent mode="institutional">Us</PageTitleAccent>
 * </PageTitle>
 */

interface PageTitleAccentProps {
    children: ReactNode;
    mode: 'institutional' | 'creator';
}

export const PageTitleAccent = ({ children, mode }: PageTitleAccentProps) => {
    return (
        <span className={mode === 'institutional' ? 'text-institutional' : 'text-creator'}>
            {children}
        </span>
    );
};
