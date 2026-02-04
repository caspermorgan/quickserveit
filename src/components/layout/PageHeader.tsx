import { ReactNode } from 'react';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    variant?: 'gold' | 'cyan' | 'purple';
    className?: string;
    children?: ReactNode;
}

/**
 * PageHeader - Universal "Liquid Metal" Header Component
 * 
 * Enforces pixel-perfect consistency across all inner pages:
 * - Strict positioning: pt-12 pb-16
 * - Typography: Space Grotesk (gradient title), Manrope (subtitle)
 * - 2-line subtitle constraint (max-w-2xl)
 * - Gradient "liquid metal" titles with variant-based colors
 * - VVIP accent line with variant-based colors
 * 
 * Usage:
 * ```tsx
 * <PageHeader 
 *   title="Academic Solutions" 
 *   subtitle="We deliver precision at scale."
 *   variant="gold"
 * />
 * ```
 */
const PageHeader = ({ title, subtitle, variant = 'gold', className = '', children }: PageHeaderProps) => {
    // Variant-based gradient colors for "Liquid Metal" effect
    const gradientColors = {
        gold: 'from-amber-600 via-yellow-400 to-amber-600',
        cyan: 'from-cyan-600 via-cyan-300 to-blue-600',
        purple: 'from-purple-700 via-fuchsia-400 to-violet-800'
    };

    // Variant-based accent line colors
    const accentColors = {
        gold: 'bg-amber-500',
        cyan: 'bg-cyan-500',
        purple: 'bg-purple-500'
    };

    return (
        <div className={`text-center pt-12 pb-16 max-w-4xl mx-auto ${className}`}>
            {/* The Title - Liquid Metal Gradient */}
            <h1 className={`font-space text-5xl md:text-6xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r ${gradientColors[variant]} drop-shadow-lg`}>
                {title}
            </h1>

            {/* The Subtitle - Strict 2-Line Rule */}
            {subtitle && (
                <p className="max-w-2xl mx-auto mt-6 font-manrope text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
                    {subtitle}
                </p>
            )}

            {/* The VVIP Accent Line */}
            <div className={`w-24 h-1 mx-auto mt-8 rounded-full ${accentColors[variant]}`} />

            {children}
        </div>
    );
};

export default PageHeader;
