import { ReactNode, ButtonHTMLAttributes } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VipButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary';
    colorScheme?: 'gold' | 'cyan' | 'purple';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    showArrow?: boolean;
}

/**
 * Signature VIP Button - The Premium Action Component
 * 
 * Replaces all standard button tags with a consistent, premium design.
 * 
 * Features:
 * - Primary: Solid gradient background with high contrast text
 * - Secondary: Glass background with visible border
 * - Space Grotesk font, uppercase, wide tracking
 * - Tactile feedback (active:scale-95)
 * - Animated arrow icon that slides right on hover
 * - Mode-aware color schemes (gold/cyan/purple)
 * 
 * Usage:
 * ```tsx
 * <VipButton variant="primary" colorScheme="gold">
 *   Get Started
 * </VipButton>
 * 
 * <VipButton variant="secondary" colorScheme="cyan" showArrow={false}>
 *   Learn More
 * </VipButton>
 * ```
 */
const VipButton = ({
    children,
    variant = 'primary',
    colorScheme = 'gold',
    size = 'md',
    fullWidth = false,
    showArrow = true,
    className = '',
    disabled = false,
    ...props
}: VipButtonProps) => {

    // Size variants
    const sizeStyles = {
        sm: 'px-4 py-2 text-xs min-h-[40px]',
        md: 'px-6 py-3 text-sm min-h-[48px]',
        lg: 'px-8 py-4 text-base min-h-[56px]'
    };

    // Primary variant - Solid gradient backgrounds
    const primaryStyles = {
        gold: cn(
            'bg-gradient-to-r from-amber-500 to-amber-600',
            'text-black font-bold',
            'hover:from-amber-400 hover:to-amber-500',
            'shadow-[0_0_30px_-5px_rgba(245,158,11,0.4)]',
            'hover:shadow-[0_0_40px_-5px_rgba(245,158,11,0.6)]'
        ),
        cyan: cn(
            'bg-gradient-to-r from-cyan-500 to-cyan-600',
            'text-black font-bold',
            'hover:from-cyan-400 hover:to-cyan-500',
            'shadow-[0_0_30px_-5px_rgba(6,182,212,0.4)]',
            'hover:shadow-[0_0_40px_-5px_rgba(6,182,212,0.6)]'
        ),
        purple: cn(
            'bg-gradient-to-r from-violet-500 to-violet-600',
            'text-white font-bold',
            'hover:from-violet-400 hover:to-violet-500',
            'shadow-[0_0_30px_-5px_rgba(139,92,246,0.4)]',
            'hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.6)]'
        )
    };

    // Secondary variant - Glass backgrounds
    const secondaryStyles = {
        gold: cn(
            'bg-white/10 backdrop-blur-md',
            'text-amber-400 border-2 border-amber-500/40',
            'hover:bg-amber-500/10 hover:border-amber-500/60',
            'shadow-[0_0_20px_-5px_rgba(245,158,11,0.2)]',
            'hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]'
        ),
        cyan: cn(
            'bg-white/10 backdrop-blur-md',
            'text-cyan-400 border-2 border-cyan-500/40',
            'hover:bg-cyan-500/10 hover:border-cyan-500/60',
            'shadow-[0_0_20px_-5px_rgba(6,182,212,0.2)]',
            'hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)]'
        ),
        purple: cn(
            'bg-white/10 backdrop-blur-md',
            'text-violet-400 border-2 border-violet-500/40',
            'hover:bg-violet-500/10 hover:border-violet-500/60',
            'shadow-[0_0_20px_-5px_rgba(139,92,246,0.2)]',
            'hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]'
        )
    };

    return (
        <button
            disabled={disabled}
            className={cn(
                // Base styling
                'relative inline-flex items-center justify-center gap-2',
                'rounded-full font-display uppercase tracking-widest',
                'transition-all duration-300 ease-out',
                'active:scale-95',
                'disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100',

                // Size
                sizeStyles[size],

                // Full width
                fullWidth && 'w-full',

                // Variant styles
                variant === 'primary' ? primaryStyles[colorScheme] : secondaryStyles[colorScheme],

                // Custom classes
                className
            )}
            {...props}
        >
            {/* Button Text */}
            <span className="relative z-10">{children}</span>

            {/* Animated Arrow */}
            {showArrow && (
                <ArrowRight
                    className={cn(
                        'w-4 h-4 transition-transform duration-300 ease-out',
                        'group-hover:translate-x-1'
                    )}
                />
            )}

            {/* Hover glow effect (subtle) */}
            <div className={cn(
                'absolute inset-0 rounded-full opacity-0 group-hover:opacity-100',
                'transition-opacity duration-300',
                'bg-gradient-to-r',
                variant === 'primary' && 'from-white/10 to-transparent',
                variant === 'secondary' && 'from-white/5 to-transparent'
            )} />
        </button>
    );
};

export default VipButton;
