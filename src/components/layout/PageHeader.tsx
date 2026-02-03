import { ReactNode } from 'react';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
    children?: ReactNode;
}

/**
 * PageHeader - Standardized Page Header Component
 * 
 * Enforces consistent header design across all inner pages:
 * - Centered layout
 * - Large bold title (Space Grotesk)
 * - Subtle subtitle with reduced opacity
 * - Consistent spacing and responsive sizing
 * 
 * Usage:
 * ```tsx
 * <PageHeader 
 *   title="About Us" 
 *   subtitle="Learn more about our mission" 
 * />
 * ```
 */
const PageHeader = ({ title, subtitle, className = '', children }: PageHeaderProps) => {
    return (
        <div className={`text-center mb-12 md:mb-16 max-w-4xl mx-auto ${className}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                {title}
            </h1>
            {subtitle && (
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                    {subtitle}
                </p>
            )}
            {children}
        </div>
    );
};

export default PageHeader;
