import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
    children: ReactNode;
    variant?: 'gold' | 'cyan' | 'purple' | 'neutral';
    className?: string;
    onClick?: () => void;
    isPopular?: boolean;
}

/**
 * Universal Glass Card - The VVIP Component
 * 
 * Enforces consistent "Heavy Glass" aesthetic across all pages.
 * Replaces all existing divs used for services, pricing, or features.
 * 
 * Features:
 * - Consistent transparency (bg-white/5)
 * - Heavy premium blur (backdrop-blur-xl)
 * - Subtle edge border (border-white/10)
 * - Modern smooth corners (rounded-2xl)
 * - Mode-aware hover effects (gold/cyan/purple/neutral)
 * - Optional "Popular" badge for pricing cards
 * 
 * Usage:
 * ```tsx
 * <GlassCard variant="gold">
 *   <h3>Service Title</h3>
 *   <p>Description</p>
 * </GlassCard>
 * ```
 */
const GlassCard = ({
    children,
    variant = 'neutral',
    className = '',
    onClick,
    isPopular = false
}: GlassCardProps) => {

    // Variant-specific hover styles
    const variantStyles = {
        gold: 'hover:border-amber-500/50 hover:shadow-[0_0_30px_-10px_rgba(245,158,11,0.3)]',
        cyan: 'hover:border-cyan-500/50 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.3)]',
        purple: 'hover:border-violet-500/50 hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.3)]',
        neutral: 'hover:border-white/20 hover:shadow-[0_0_20px_-10px_rgba(255,255,255,0.1)]'
    };

    // Popular badge border color
    const popularBorderColor = {
        gold: 'border-amber-500/40',
        cyan: 'border-cyan-500/40',
        purple: 'border-violet-500/40',
        neutral: 'border-white/30'
    };

    return (
        <div
            onClick={onClick}
            className={cn(
                // Base styling - The Heavy Glass Foundation
                'relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl',
                'transition-all duration-300 group',

                // Variant-specific hover effects
                variantStyles[variant],

                // Popular card enhancement
                isPopular && [
                    'ring-2 ring-offset-2 ring-offset-black',
                    popularBorderColor[variant]
                ],

                // Interactive cursor if onClick provided
                onClick && 'cursor-pointer active:scale-[0.98]',

                // Custom classes
                className
            )}
        >
            {/* Popular Badge */}
            {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className={cn(
                        'px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest',
                        'bg-gradient-to-r backdrop-blur-md border',
                        variant === 'gold' && 'from-amber-500/20 to-amber-600/20 border-amber-500/40 text-amber-400',
                        variant === 'cyan' && 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/40 text-cyan-400',
                        variant === 'purple' && 'from-violet-500/20 to-violet-600/20 border-violet-500/40 text-violet-400',
                        variant === 'neutral' && 'from-white/10 to-white/5 border-white/30 text-white'
                    )}>
                        Popular
                    </div>
                </div>
            )}

            {/* Card Content */}
            {children}

            {/* Subtle noise texture overlay for tactile glass feel */}
            <div
                className="absolute inset-0 rounded-2xl opacity-[0.015] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />
        </div>
    );
};

export default GlassCard;
