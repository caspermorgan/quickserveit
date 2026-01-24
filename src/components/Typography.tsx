import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
    children: ReactNode;
    className?: string;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

// Display Text - Hero headings only - v2.1 Refined
export const DisplayText = ({ children, className, as: Component = 'h1' }: TypographyProps) => {
    return (
        <Component className={cn(
            'text-5xl md:text-6xl lg:text-7xl',
            'font-display font-semibold',
            'leading-[1.1] tracking-[-0.03em]',
            className
        )}>
            {children}
        </Component>
    );
};

// H1 - Page titles - v2.1 Refined
export const H1 = ({ children, className, as: Component = 'h1' }: TypographyProps) => {
    return (
        <Component
            className={cn(
                'text-3xl md:text-4xl lg:text-5xl',
                'font-display font-semibold',
                'leading-[1.2] tracking-[-0.02em]',
                className
            )}
        >
            {children}
        </Component>
    );
};

// H2 - Section headings - v2.1 Refined
export const H2 = ({ children, className, as: Component = 'h2' }: TypographyProps) => {
    return (
        <Component className={cn(
            'text-2xl md:text-3xl lg:text-4xl',
            'font-display font-semibold',
            'leading-[1.2] tracking-[-0.02em]',
            className
        )}>
            {children}
        </Component>
    );
};

// H3 - Subsection headings - v2.1 Refined
export const H3 = ({ children, className, as: Component = 'h3' }: TypographyProps) => {
    return (
        <Component className={cn(
            'text-xl md:text-2xl lg:text-3xl',
            'font-display font-semibold',
            'leading-[1.25] tracking-[-0.015em]',
            className
        )}>
            {children}
        </Component>
    );
};

// H4 - Card/Component titles - v2.1 Refined
export const H4 = ({ children, className, as: Component = 'h4' }: TypographyProps) => {
    return (
        <Component className={cn(
            'text-lg md:text-xl lg:text-2xl',
            'font-sans font-semibold',
            'leading-[1.3] tracking-[-0.01em]',
            className
        )}>
            {children}
        </Component>
    );
};

// H5 - Small headings - v2.1 Refined
export const H5 = ({ children, className, as: Component = 'h5' }: TypographyProps) => {
    return (
        <Component className={cn(
            'text-lg md:text-xl',
            'font-sans font-semibold',
            'leading-[1.3]',
            className
        )}>
            {children}
        </Component>
    );
};

// H6 - Micro headings - v2.1 Refined
export const H6 = ({ children, className, as: Component = 'h6' }: TypographyProps) => {
    return (
        <Component className={cn(
            'text-base md:text-lg',
            'font-sans font-medium',
            'leading-[1.4]',
            className
        )}>
            {children}
        </Component>
    );
};

// Body Large - Lead text - v2.1 Refined
export const BodyLarge = ({ children, className, as: Component = 'p' }: TypographyProps) => {
    return (
        <Component className={cn(
            'text-lg md:text-xl',
            'font-sans font-normal',
            'leading-[1.6] tracking-[-0.01em]',
            'text-foreground/85',
            'max-w-[65ch]',
            className
        )}>
            {children}
        </Component>
    );
};

// Body Text - Regular content - v2.1 Refined
export const BodyText = ({ children, className, as: Component = 'p' }: TypographyProps) => {
    return (
        <Component className={cn(
            'text-base md:text-lg',
            'font-sans font-normal',
            'leading-[1.6]',
            'text-foreground/80',
            className
        )}>
            {children}
        </Component>
    );
};

// Body Small - Secondary content - v2.1 Refined
export const BodySmall = ({ children, className, as: Component = 'p' }: TypographyProps) => {
    return (
        <Component className={cn(
            'text-sm md:text-base',
            'font-sans font-normal',
            'leading-[1.5]',
            'text-foreground/70',
            className
        )}>
            {children}
        </Component>
    );
};

// Caption - Meta text - v2.1 Refined
export const Caption = ({ children, className, as: Component = 'span' }: TypographyProps) => {
    return (
        <Component className={cn(
            'text-xs md:text-sm',
            'font-sans font-normal',
            'leading-[1.4]',
            'text-foreground/60',
            className
        )}>
            {children}
        </Component>
    );
};

// Label - Uppercase labels - NEW v2.1
export const Label = ({ children, className, as: Component = 'span' }: TypographyProps) => {
    return (
        <Component className={cn(
            'text-xs md:text-sm',
            'font-sans font-medium',
            'leading-[1.4] tracking-[0.05em]',
            'text-foreground/60',
            'uppercase',
            className
        )}>
            {children}
        </Component>
    );
};
