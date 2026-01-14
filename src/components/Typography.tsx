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
 * DisplayText - MASSIVE, poster-style hero headings (V2.0 - THE KING)
 * 
 * Features:
 * - ULTRA-AGGRESSIVE sizing: text-5xl on mobile → text-9xl on desktop
 * - Custom clamp for perfect scaling: clamp(3rem, 10vw, 10rem)
 * - Tight letter-spacing (tracking-tighter) for maximum impact
 * - text-balance for perfect line wrapping
 * - font-display family for premium aesthetic
 * 
 * Usage: ONLY for landing page hero title - this is the visual anchor
 * Hierarchy: This is THE KING - everything else must be smaller
 * Mobile: Still large (text-5xl) to maintain dominance, but controlled
 */
export const DisplayText = ({ children, className, as: Component = 'h1' }: TypographyProps) => {
    return (
        <Component
            className={cn(
                // V2.0 MASSIVE sizing - THE KING of typography
                'text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl',
                // Font family and weight
                'font-display font-bold',
                // Tight tracking for visual impact
                'tracking-tighter',
                // Perfect line wrapping
                'text-balance',
                // Tight leading for poster aesthetic
                'leading-[0.95]',
                // V2.0 Opacity - never pure white
                'text-foreground/90',
                className
            )}
            style={{
                // Custom clamp for perfect control
                fontSize: 'clamp(3rem, 10vw, 10rem)',
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
 * H1 - Page titles (V2.0 - THE LEADER)
 * Strictly smaller than DisplayText, used for inner page headers
 * 
 * Hierarchy: THE LEADER - commands attention but respects THE KING
 * Usage: Services, About, Portfolio page titles
 */
export const H1 = ({ children, className, as: Component = 'h1' }: TypographyProps) => {
    return (
        <Component
            className={cn(
                // V2.0 sizing - strictly smaller than DisplayText
                'text-3xl md:text-4xl lg:text-5xl xl:text-6xl',
                'font-display font-extrabold',
                'leading-tight tracking-tight',
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
 * H2 - Section headings (V2.0 - THE SUB-LEADER)
 * 
 * Hierarchy: THE SUB-LEADER - organizes content sections
 * Usage: Section titles within pages
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
 * H3 - Subsection headings (V2.0 - THE DETAIL)
 * 
 * Hierarchy: THE DETAIL - card and component titles
 * Usage: Service cards, feature sections
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
 * H4 - Card/Component titles (V2.0 - THE MICRO)
 * 
 * Hierarchy: THE MICRO - small headings
 * Usage: Small cards, list headers
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
 * BodyLarge - Lead text with Hindi support (V2.0 - THE SUBTITLE)
 * 
 * Features:
 * - V2.0 mobile reduction: text-sm on mobile (whisper vs shout)
 * - Hindi prop: When true, uses 2.0 line-height for script clarity
 * - Accommodates Hindi script ascenders/descenders
 * - font-sans family for body content
 * 
 * Usage: Lead paragraphs, hero subtitles, introductions
 * Hierarchy: THE SUBTITLE - supports THE KING/LEADER, never competes
 * Mobile: Drastically reduced for clear hierarchy (3:1 ratio with DisplayText)
 */
export const BodyLarge = ({ children, className, as: Component = 'p', hindi = false }: BodyTypographyProps) => {
    return (
        <Component className={cn(
            // V2.0 mobile reduction: text-sm on mobile for subtitle hierarchy
            'text-sm md:text-base lg:text-lg',
            'font-sans font-normal',
            // V2.0 Hindi-aware line-height: 2.0 for Hindi, relaxed for English
            hindi ? 'leading-[2.0]' : 'leading-relaxed',
            // V2.0 Opacity - subtitles are whispers, not shouts
            'text-foreground/60',
            // Better text wrapping
            'text-balance',
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
