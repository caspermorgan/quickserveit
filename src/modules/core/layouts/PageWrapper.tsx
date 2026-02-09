import { ReactNode } from 'react';
import Footer from '@/modules/core/components/Footer';
import CursorLight from '@/modules/core/components/CursorLight';
import FilmGrain from '@/modules/core/components/FilmGrain';

interface PageWrapperProps {
    children: ReactNode;
    mode: 'institutional' | 'creator' | 'portfolio';
    onReturn: () => void;
}

/**
 * PageWrapper - Content Layout Component
 * 
 * Provides consistent structure for inner pages:
 * - Atmospheric effects (CursorLight, FilmGrain)
 * - Standardized max-width container
 * - Responsive padding system
 * - Footer at bottom
 * - Vignette overlay for visual depth
 * 
 * NOTE: This component does NOT render navigation.
 * Pages must render FloatingNavbar separately before wrapping content.
 * 
 * Usage:
 * @example
 * <FloatingNavbar mode={mode} onReturn={handleReturn} isVisible={true} />
 * <PageWrapper mode={mode} onReturn={handleReturn}>
 *   <PageHeader title="..." subtitle="..." />
 *   {children}
 * </PageWrapper>
 */
const PageWrapper = ({ children, mode, onReturn }: PageWrapperProps) => {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-x-hidden selection:bg-gray-800">
            {/* Vignette Overlay - Darkens corners to make content pop */}
            <div
                className="fixed inset-0 pointer-events-none z-[5]"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.4) 100%)'
                }}
            />

            {/* Atmospheric Effects */}
            <CursorLight mode={mode} />
            <FilmGrain />

            {/* Navbar Spacer - Ensures content never hides behind floating navbar */}
            <div className="h-24 md:h-28 w-full" aria-hidden="true" />

            {/* Main Content Container */}
            <main
                id="main-content"
                className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 animate-fade-in"
            >
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default PageWrapper;
