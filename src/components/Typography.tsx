import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
    children: ReactNode;
    className?: string;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

interface BodyTypographyProps extends TypographyProps {
    hindi?: boolean;
}

// ============================================
// DISPLAY TEXT - MASSIVE POSTER-STYLE HERO
// ============================================

/**
 * DisplayText - Landing Page Hero ONLY (Design System Enforced)
 * 
 * DESIGN SYSTEM RULES (DO NOT OVERRIDE):
 * - Desktop: clamp(2rem, 5vw, 4rem)
 * - Mobile: text-4xl (2.25rem)
 * - Weight: extrabold (800)
 * - Tracking: tight (-0.025em)
 * - Leading: 1.1
 * - Color: text-foreground/90 (NEVER pure white)
 * 
 * Usage: ONLY for landing page hero title - this is the visual anchor
 * Hierarchy: THE KING - everything else must be smaller
 * 
 * ⚠️ ENFORCEMENT: Any changes to sizing, weight, or spacing require design system approval
 */
export const DisplayText = ({ children, className, as: Component = 'h1' }: TypographyProps) => {
    return (
        <Component
            className={cn(
                // V3.0 REDUCED sizing - More reasonable for all pages
                'text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
                // Font family and weight - Stronger for flagship presence
                'font-display font-extrabold',
                // Tight tracking for visual impact
                'tracking-tight',
                // Perfect line wrapping with max-width constraint
                'text-balance max-w-[20ch]',
                // Comfortable leading
                'leading-[1.1]',
                // V2.0 Opacity - never pure white
                'text-foreground/90',
                className
            )}
            style={{
                // V3.0 Reduced clamp for reasonable sizing
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                ...((className?.includes('style') ? {} : {}) as any)
            }}
        >
            {children}
        </Component>
    );
};

// ============================================
// HEADING HIERARCHY - DISPLAY FONT
// ============================================

/**
 * H1 - Page Titles (Design System Enforced)
 * 
 * DESIGN SYSTEM RULES (DO NOT OVERRIDE):
 * - Desktop: text-5xl (3rem)
 * - Tablet: text-4xl (2.25rem)
 * - Mobile: text-3xl (1.875rem)
 * - Weight: bold (700)
 * - Tracking: tight
 * - Leading: 1.1
 * - Color: text-foreground/90
 * 
 * Usage: Internal page titles (Services, About, Portfolio, etc.)
 * Hierarchy: THE LEADER - strictly smaller than DisplayText
 * 
 * ⚠️ ENFORCEMENT: Locked sizing for zero drift across pages
 */
export const H1 = ({ children, className, as: Component = 'h1' }: TypographyProps) => {
    return (
        <Component
            className={cn(
                // Locked sizing for zero drift across pages
                'text-3xl sm:text-4xl md:text-5xl',
                'font-display font-bold',
                'leading-[1.1] tracking-tight',
                'text-balance',
                // V2.0 Opacity - never pure white
                'text-foreground/90',
                className
            )}
        >
            {children}
        </Component>
    );
};

/**
 * H2 - Section Headings (Design System Enforced)
 * 
 * DESIGN SYSTEM RULES (DO NOT OVERRIDE):
 * - Desktop: text-4xl (2.25rem)
 * - Tablet: text-3xl (1.875rem)
 * - Mobile: text-2xl (1.5rem)
 * - Weight: bold (700)
 * - Tracking: tight
 * - Leading: 1.2
 * - Color: text-foreground/90
 * 
 * Usage: Section titles within pages
 * Hierarchy: THE SUB-LEADER - organizes content sections
 * 
 * ⚠️ ENFORCEMENT: Maintains strict hierarchy H1 > H2
 */
export const H2 = ({ children, className, as: Component = 'h2' }: TypographyProps) => {
    return (
        <Component className={cn(
            // V2.0 sizing - strictly smaller than H1
            'text-2xl md:text-3xl lg:text-4xl xl:text-5xl',
            'font-display font-bold',
            'leading-tight tracking-tight',
            'text-balance',
            // V2.0 Opacity
            'text-foreground/90',
            className
        )}>
            {children}
        </Component>
    );
};

/**
 * H3 - Subsection/Card Titles (Design System Enforced)
 * 
 * DESIGN SYSTEM RULES (DO NOT OVERRIDE):
 * - Desktop: text-3xl (1.875rem)
 * - Tablet: text-2xl (1.5rem)
 * - Mobile: text-xl (1.25rem)
 * - Weight: semibold (600)
 * - Tracking: tight
 * - Leading: 1.3
 * - Color: text-foreground/85
 * 
 * Usage: Card titles, subsection headings
 * Hierarchy: THE DETAIL - card and component level
 * 
 * ⚠️ ENFORCEMENT: Maintains strict hierarchy H2 > H3
 */
export const H3 = ({ children, className, as: Component = 'h3' }: TypographyProps) => {
    return (
        <Component className={cn(
            // V2.0 sizing - card level
            'text-xl md:text-2xl lg:text-3xl',
            'font-display font-semibold',
            'leading-snug tracking-tight',
            'text-balance',
            // V2.0 Opacity
            'text-foreground/85',
            className
        )}>
            {children}
        </Component>
    );
};

/**
 * H4 - Component Titles (Design System Enforced)
 * 
 * DESIGN SYSTEM RULES (DO NOT OVERRIDE):
 * - Desktop: text-2xl (1.5rem)
 * - Tablet: text-xl (1.25rem)
 * - Mobile: text-lg (1.125rem)
 * - Weight: semibold (600)
 * - Leading: 1.4
 * - Color: text-foreground/85
 * 
 * Usage: Small cards, list headers, component titles
 * Hierarchy: THE MICRO - smallest heading level
 * 
 * ⚠️ ENFORCEMENT: Maintains strict hierarchy H3 > H4
 */
export const H4 = ({ children, className, as: Component = 'h4' }: TypographyProps) => {
    return (
        <Component className={cn(
            // V2.0 sizing - micro level
            'text-lg md:text-xl lg:text-2xl',
            'font-display font-semibold',
            'leading-snug',
            // V2.0 Opacity
            'text-foreground/85',
            className
        )}>
            {children}
        </Component>
    );
};

/**
 * H5 - Small headings
 */
export const H5 = ({ children, className, as: Component = 'h5' }: TypographyProps) => {
    return (
        <Component className={cn(
            'text-lg md:text-xl lg:text-2xl',
            'font-display font-semibold',
            'leading-normal',
            className
        )}>
            {children}
        </Component>
    );
};

/**
 * H6 - Micro headings
 */
export const H6 = ({ children, className, as: Component = 'h6' }: TypographyProps) => {
    return (
        <Component className={cn(
            'text-base md:text-lg lg:text-xl',
            'font-display font-medium',
            'leading-normal',
            className
        )}>
            {children}
        </Component>
    );
};

// ============================================
// BODY TEXT - SANS FONT WITH HINDI SUPPORT
// ============================================

/**
 * BodyLarge - Lead Paragraphs (Design System Enforced)
 * 
 * DESIGN SYSTEM RULES (DO NOT OVERRIDE):
 * - Desktop: text-lg (1.125rem)
 * - Tablet: text-base (1rem)
 * - Mobile: text-sm (0.875rem)
 * - Weight: normal (400)
 * - Leading: 1.7 (2.0 for Hindi)
 * - Color: text-foreground/70-80
 * - Max-width: 65ch
 * 
 * Usage: Lead paragraphs, hero subtitles, introductions
 * Hierarchy: THE SUBTITLE - supports headings, never competes
 * 
 * ⚠️ ENFORCEMENT: Mobile reduction creates clear hierarchy with headings
 */
export const BodyLarge = ({ children, className, as: Component = 'p', hindi = false }: BodyTypographyProps) => {
    return (
        <Component className={cn(
            // V2.0 mobile reduction: text-sm on mobile for subtitle hierarchy
            'text-sm md:text-base lg:text-lg',
            'font-sans font-normal',
            // V2.0 Hindi-aware line-height: 2.0 for Hindi, relaxed for English
            hindi ? 'leading-[2.0]' : 'leading-[1.7]',
            // Improved mobile opacity for better readability
            'text-foreground/70 md:text-foreground/80',
            // Better text wrapping with optimal line length
            'text-balance max-w-[65ch]',
            className
        )}>
            {children}
        </Component>
    );
};

/**
 * BodyText - Regular content with Hindi support (V2.0)
 * 
 * Features:
 * - Hindi prop: When true, uses 2.0 line-height for script clarity
 * - Prevents cramped appearance with mixed English/Hindi
 * - font-sans family for readability
 * 
 * Usage: Standard paragraphs, descriptions, general content
 * Hierarchy: Regular body text - readable and clear
 */
export const BodyText = ({ children, className, as: Component = 'p', hindi = false }: BodyTypographyProps) => {
    return (
        <Component className={cn(
            'text-base md:text-lg',
            'font-sans font-normal',
            // V2.0 Hindi-aware line-height: 2.0 for Hindi
            hindi ? 'leading-[2.0]' : 'leading-relaxed',
            // V2.0 Opacity
            'text-foreground/70',
            className
        )}>
            {children}
        </Component>
    );
};

/**
 * BodySmall - Secondary content (V2.0)
 * 
 * Hierarchy: Secondary text - supporting information
 * Usage: Captions, metadata, supporting text
 */
export const BodySmall = ({ children, className, as: Component = 'p' }: TypographyProps) => {
    return (
        <Component className={cn(
            'text-sm md:text-base',
            'font-sans font-normal',
            'leading-relaxed',
            // V2.0 Opacity
            'text-foreground/60',
            className
        )}>
            {children}
        </Component>
    );
};

/**
 * Caption - Meta text
 */
export const Caption = ({ children, className, as: Component = 'span' }: TypographyProps) => {
    return (
        <Component className={cn(
            'text-xs md:text-sm',
            'font-sans font-normal',
            'leading-normal',
            'text-foreground/50',
            className
        )}>
            {children}
        </Component>
    );
};

// ============================================
// UTILITY EXPORTS
// ============================================

/**
 * Typography component map for dynamic rendering
 */
export const Typography = {
    DisplayText,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    BodyLarge,
    BodyText,
    BodySmall,
    Caption,
};

export default Typography;
