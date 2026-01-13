import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
    children: ReactNode;
    className?: string;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

// Display Text - Hero headings only
export const DisplayText = ({ children, className, as: Component = 'h1' }: TypographyProps) => {
    return (
        <Component className={cn(
            'text-5xl md:text-6xl lg:text-7xl',
            'font-display font-bold',
            'leading-normal tracking-tight',
            className
        )}>
            {children}
        </Component>
    );
};

// H1 - Page titles (slightly thicker than homepage hero)
export const H1 = ({ children, className, as: Component = 'h1' }: TypographyProps) => {
    return (
        <Component
            className={cn(
                'text-4xl md:text-5xl',
                'font-display',
                'leading-normal',
                className
            )}
            style={{ fontWeight: 800 }}
        >
            {children}
        </Component>
    );
};

// H2 - Section headings
export const H2 = ({ children, className, as: Component = 'h2' }: TypographyProps) => {
    return (
        <Component className={cn(
            'text-3xl md:text-4xl',
            'font-display font-bold',
            'leading-normal',
            className
        )}>
            {children}
        </Component>
    );
};

// H3 - Subsection headings
export const H3 = ({ children, className, as: Component = 'h3' }: TypographyProps) => {
    return (
        <Component className={cn(
            'text-2xl md:text-3xl',
            'font-display font-semibold',
            'leading-relaxed',
            className
        )}>
            {children}
        </Component>
    );
};

// H4 - Card/Component titles
export const H4 = ({ children, className, as: Component = 'h4' }: TypographyProps) => {
    return (
        <Component className={cn(
            'text-xl md:text-2xl',
            'font-sans font-semibold',
            'leading-normal',
            className
        )}>
            {children}
        </Component>
    );
};

// H5 - Small headings
export const H5 = ({ children, className, as: Component = 'h5' }: TypographyProps) => {
    return (
        <Component className={cn(
            'text-lg md:text-xl',
            'font-sans font-semibold',
            'leading-normal',
            className
        )}>
            {children}
        </Component>
    );
};

// H6 - Micro headings
export const H6 = ({ children, className, as: Component = 'h6' }: TypographyProps) => {
    return (
        <Component className={cn(
            'text-base md:text-lg',
            'font-sans font-medium',
            'leading-normal',
            className
        )}>
            {children}
        </Component>
    );
};

// Body Large - Lead text
export const BodyLarge = ({ children, className, as: Component = 'p' }: TypographyProps) => {
    return (
        <Component className={cn(
            'text-lg md:text-xl',
            'font-sans font-normal',
            'leading-relaxed',
            'text-foreground/80',
            className
        )}>
            {children}
        </Component>
    );
};

// Body Text - Regular content
export const BodyText = ({ children, className, as: Component = 'p' }: TypographyProps) => {
    return (
        <Component className={cn(
            'text-base md:text-lg',
            'font-sans font-normal',
            'leading-relaxed',
            'text-foreground/70',
            className
        )}>
            {children}
        </Component>
    );
};

// Body Small - Secondary content
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

// Caption - Meta text
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
