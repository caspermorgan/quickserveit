import { ReactNode } from 'react';
import Navbar from '@/modules/core/components/Navbar';
import MobileNav from '@/modules/core/components/MobileNav';
import Footer from '@/modules/core/components/Footer';
import CursorLight from '@/modules/core/components/CursorLight';
import FilmGrain from '@/modules/core/components/FilmGrain';
import ParticleCanvas from '@/modules/landing/components/ParticleCanvas';

interface PageWrapperProps {
    children: ReactNode;
    mode: 'institutional' | 'creator' | 'portfolio';
    onReturn: () => void;
}

/**
 * PageWrapper - Master Page Layout Component
 * 
 * Enforces consistent structure across all inner pages:
 * - Fixed FloatingNavbar at top
 * - Automatic navbar spacing (prevents content hiding)
 * - Standardized max-width container
 * - Responsive padding system
 * - Footer at bottom
 * - Atmospheric effects (CursorLight, FilmGrain, ParticleCanvas)
 * - Vignette overlay for visual depth
 * 
 * Usage:
 * ```tsx
 * <PageWrapper mode={mode} onReturn={handleReturn}>
 *   <PageHeader title="..." subtitle="..." />
 *   {/* Page content *\/}
 * </PageWrapper>
 * ```
 */
const PageWrapper = ({ children, mode, onReturn }: PageWrapperProps) => {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-x-hidden selection:bg-gray-800">
            {/* Particle Background - Subtle for inner pages */}
            {mode !== 'portfolio' && <ParticleCanvas mode={mode} />}

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

            {/* Desktop Navigation - Floating Island */}
            {/* <Navbar mode={mode} onReturn={onReturn} /> */}

            {/* Mobile Navigation - Bottom Dock */}
            {/* <MobileNav mode={mode} /> */}

            {/* Navbar Spacer - Ensures content never hides behind the navbar */}
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
