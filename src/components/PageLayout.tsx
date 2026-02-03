import { ReactNode } from 'react';

interface PageLayoutProps {
    title: string;
    subtitle?: string;
    children: ReactNode;
    mode: 'institutional' | 'creator';
    showGradientOrbs?: boolean;
    titleClassName?: string;
    subtitleClassName?: string;
}

/**
 * PageLayout - Universal wrapper for all inner pages
 * Enforces consistent structure, spacing, and typography across the site
 */
const PageLayout = ({
    title,
    subtitle,
    children,
    mode,
    showGradientOrbs = true,
    titleClassName = '',
    subtitleClassName = ''
}: PageLayoutProps) => {
    return (
        <main
            id="main-content"
            className="min-h-screen bg-[#050505] pt-24 sm:pt-28 md:pt-32 pb-20 relative overflow-hidden"
        >
            {/* Unified Deep Black Background with Subtle Radial Gradient Glows */}
            {showGradientOrbs && (
                <>
                    <div
                        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10 pointer-events-none"
                        style={{
                            background: mode === 'institutional'
                                ? 'radial-gradient(circle, rgba(234, 179, 8, 0.15) 0%, transparent 70%)'
                                : 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)'
                        }}
                    />
                    <div
                        className="absolute bottom-0 left-0 w-[450px] h-[450px] opacity-8 pointer-events-none"
                        style={{
                            background: mode === 'institutional'
                                ? 'radial-gradient(circle, rgba(234, 179, 8, 0.12) 0%, transparent 70%)'
                                : 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)'
                        }}
                    />
                </>
            )}

            {/* Standard Content Container */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Standard Title Block */}
                <div className="text-center mb-12 sm:mb-14 md:mb-16 max-w-4xl mx-auto">
                    <h1
                        className={`text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight ${titleClassName || ''
                            }`}
                    >
                        {title}
                    </h1>
                    {subtitle && (
                        <p
                            className={`text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto ${subtitleClassName || ''
                                }`}
                        >
                            {subtitle}
                        </p>
                    )}
                </div>

                {/* Page Content */}
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </div>
        </main>
    );
};

export default PageLayout;
