import { ReactNode, forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    variant?: 'default' | 'glass' | 'premium';
    hoverable?: boolean;
    clickable?: boolean;
    mode?: 'institutional' | 'creator';
}

/**
 * Unified Card Component - Design System Enforcement
 * 
 * This component enforces the flagship-level card identity system:
 * - Glass morphism with noise texture overlay
 * - Unified hover/active/focus states
 * - Mode-dependent accent colors
 * - Responsive padding and spacing
 * - Accessibility features (focus rings, ARIA)
 * 
 * ENFORCEMENT RULES:
 * - Border radius: ALWAYS 0.75rem (12px)
 * - Backdrop blur: 20px desktop / 12px mobile
 * - Hover transform: translateY(-4px) scale(1.01)
 * - Active transform: scale(0.98)
 * - Transition: 400ms ease-out-premium
 * 
 * DO NOT override these values without design system approval.
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
    (
        {
            children,
            className,
            variant = 'glass',
            hoverable = true,
            clickable = false,
            mode,
            ...props
        },
        ref
    ) => {
        const baseClasses = cn(
            // Base structure
            'rounded-2xl', // 0.75rem - LOCKED by design system
            'border',
            'transition-all',

            // Variant-specific styles
            variant === 'glass' && [
                'glass-card', // Uses design system glass-card class
                hoverable && 'hover-standard', // Uses design system hover tier
            ],

            variant === 'premium' && [
                'glass-premium', // Uses design system premium glass
                hoverable && 'hover-emphasis', // Uses design system emphasis tier
            ],

            variant === 'default' && [
                'bg-surface-1',
                'border-border/25',
                hoverable && 'hover:border-border/40 hover:-translate-y-1 hover:shadow-xl',
            ],

            // Clickable states
            clickable && [
                'cursor-pointer',
                'focus:outline-none',
                'focus:ring-2',
                'focus:ring-ring',
                'focus:ring-offset-2',
                'focus:ring-offset-background',
            ],

            // Mode-dependent accents (when hoverable)
            hoverable && mode === 'institutional' && 'hover:border-institutional/40',
            hoverable && mode === 'creator' && 'hover:border-creator/40',

            // Custom classes
            className
        );

        return (
            <div
                ref={ref}
                className={baseClasses}
                role={clickable ? 'button' : undefined}
                tabIndex={clickable ? 0 : undefined}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = 'Card';

/**
 * CardHeader - Consistent card header with optional icon
 */
interface CardHeaderProps {
    children: ReactNode;
    className?: string;
    icon?: ReactNode;
    mode?: 'institutional' | 'creator';
}

export const CardHeader = ({ children, className, icon, mode }: CardHeaderProps) => {
    return (
        <div className={cn('flex items-start gap-4 sm:gap-5', className)}>
            {icon && (
                <div
                    className={cn(
                        'w-14 h-14 sm:w-16 sm:h-16',
                        'rounded-full',
                        'flex items-center justify-center',
                        'shrink-0',
                        'trans-card',
                        mode === 'institutional' && 'bg-institutional/12 ring-1 ring-institutional/25',
                        mode === 'creator' && 'bg-creator/12 ring-1 ring-creator/25',
                        !mode && 'bg-foreground/10 ring-1 ring-foreground/20'
                    )}
                >
                    {icon}
                </div>
            )}
            <div className="flex-1 min-w-0">{children}</div>
        </div>
    );
};

/**
 * CardTitle - Enforces H3 typography for card titles
 */
interface CardTitleProps {
    children: ReactNode;
    className?: string;
}

export const CardTitle = ({ children, className }: CardTitleProps) => {
    return (
        <h3 className={cn('text-lg sm:text-xl font-display font-semibold mb-2', className)}>
            {children}
        </h3>
    );
};

/**
 * CardDescription - Enforces body text hierarchy
 */
interface CardDescriptionProps {
    children: ReactNode;
    className?: string;
}

export const CardDescription = ({ children, className }: CardDescriptionProps) => {
    return (
        <p className={cn('text-sm sm:text-base text-foreground/70 leading-relaxed', className)}>
            {children}
        </p>
    );
};

/**
 * CardContent - Consistent card content padding
 */
interface CardContentProps {
    children: ReactNode;
    className?: string;
}

export const CardContent = ({ children, className }: CardContentProps) => {
    return (
        <div className={cn('p-5 sm:p-6 md:p-7', className)}>
            {children}
        </div>
    );
};

/**
 * CardFooter - Consistent card footer with actions
 */
interface CardFooterProps {
    children: ReactNode;
    className?: string;
}

export const CardFooter = ({ children, className }: CardFooterProps) => {
    return (
        <div className={cn('px-5 sm:px-6 md:px-7 pb-5 sm:pb-6 md:pb-7 pt-0', className)}>
            {children}
        </div>
    );
};

export default Card;
