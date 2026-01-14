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
 * DisplayText - Massive, poster-style hero headings
 * 
 * Features:
 * - Massive sizing: text-6xl to text-9xl (responsive)
 * - Tight letter-spacing (tracking-tighter) for impact
 * - text-balance for perfect line wrapping
 * - font-display family for premium aesthetic
 * 
 * Usage: Hero sections, landing pages, major announcements
 */
export const DisplayText = ({ children, className, as: Component = 'h1' }: TypographyProps) => {
    return (
        <Component className={cn(
            // Medium-sized heading for better readability on desktop
            'text-5xl sm:text-6xl md:text-7xl lg:text-7xl',
            // Font family and weight
            'font-display font-bold',
            // Tight tracking for visual impact
            'tracking-tighter',
            // Perfect line wrapping
            'text-balance',
            // Tight leading for poster aesthetic
            'leading-[0.95]',
            className
        )}>
            {children}
        </Component>
    );
};

// ============================================
// HEADING HIERARCHY - DISPLAY FONT
// ============================================

/**
 * H1 - Page titles
 * Slightly smaller than DisplayText, used for page headers
 */
export const H1 = ({ children, className, as: Component = 'h1' }: TypographyProps) => {
    return (
        <Component
            className={cn(
                'text-4xl md:text-5xl lg:text-6xl',
                'font-display font-extrabold',
                'leading-tight tracking-tight',
                'text-balance',
                className
            )}
        >
            {children}
        </Component>
    );
};

/**
 * H2 - Section headings
 */
export const H2 = ({ children, className, as: Component = 'h2' }: TypographyProps) => {
    return (
        <Component className={cn(
            'text-3xl md:text-4xl lg:text-5xl',
            'font-display font-bold',
            'leading-tight tracking-tight',
            'text-balance',
            className
        )}>
            {children}
        </Component>
    );
};

/**
 * H3 - Subsection headings
 */
export const H3 = ({ children, className, as: Component = 'h3' }: TypographyProps) => {
    return (
        <Component className={cn(
            'text-2xl md:text-3xl lg:text-4xl',
            'font-display font-semibold',
            'leading-snug tracking-tight',
            'text-balance',
            className
        )}>
            {children}
        </Component>
    );
};

/**
 * H4 - Card/Component titles
 */
export const H4 = ({ children, className, as: Component = 'h4' }: TypographyProps) => {
    return (
        <Component className={cn(
            'text-xl md:text-2xl lg:text-3xl',
            'font-display font-semibold',
            'leading-snug',
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
 * BodyLarge - Lead text with Hindi support
 * 
 * Features:
 * - Hindi prop: When true, uses looser line-height (leading-[1.8])
 * - Accommodates Hindi script ascenders/descenders
 * - font-sans family for body content
 * 
 * Usage: Lead paragraphs, introductions, important body text
 */
export const BodyLarge = ({ children, className, as: Component = 'p', hindi = false }: BodyTypographyProps) => {
    return (
        <Component className={cn(
            'text-base md:text-lg lg:text-xl',
            'font-sans font-normal',
            // Hindi-aware line-height
            hindi ? 'leading-[1.8]' : 'leading-relaxed',
            'text-foreground/80',
            // Better text wrapping
            'text-balance',
            className
        )}>
            {children}
        </Component>
    );
};

/**
 * BodyText - Regular content with Hindi support
 * 
 * Features:
 * - Hindi prop: When true, uses looser line-height (leading-[1.8])
 * - Prevents cramped appearance with mixed English/Hindi
 * - font-sans family for readability
 * 
 * Usage: Standard paragraphs, descriptions, general content
 */
export const BodyText = ({ children, className, as: Component = 'p', hindi = false }: BodyTypographyProps) => {
    return (
        <Component className={cn(
            'text-base md:text-lg',
            'font-sans font-normal',
            // Hindi-aware line-height
            hindi ? 'leading-[1.8]' : 'leading-relaxed',
            'text-foreground/70',
            className
        )}>
            {children}
        </Component>
    );
};

/**
 * BodySmall - Secondary content
 */
export const BodySmall = ({ children, className, as: Component = 'p' }: TypographyProps) => {
    return (
        <Component className={cn(
            'text-sm md:text-base',
            'font-sans font-normal',
            'leading-relaxed',
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
