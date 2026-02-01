import { useState, useEffect, lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import HeaderStatusBadge from './HeaderStatusBadge';
import GatewayCards from './GatewayCards';
import { SkeletonLoader } from './SkeletonLoader';
import { motion } from 'framer-motion';

// Lazy load decorative components for better initial load performance
const ParticleCanvas = lazy(() => import('./ParticleCanvas'));
const FilmGrain = lazy(() => import('./FilmGrain'));
const CursorLight = lazy(() => import('./CursorLight'));

interface LandingViewProps {
    mode: 'institutional' | 'creator';
    onModeChange: (mode: 'institutional' | 'creator') => void;
    onEnter: () => void;
    isExiting: boolean;
}

const LandingView = ({ mode, onModeChange, onEnter, isExiting }: LandingViewProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleGateEnter = (gateMode: 'institutional' | 'creator') => {
        onModeChange(gateMode);
        setTimeout(() => onEnter(), 300);
    };

    return (
        <div
            className={`fixed inset-0 z-30 flex items-center justify-center overflow-x-hidden overflow-y-auto transition-all duration-slowest ease-out ${isExiting
                ? 'opacity-0 scale-[1.02] blur-md pointer-events-none'
                : 'opacity-100 scale-100 blur-0'
                }`}
        >
            {/* Background */}
            <div className="absolute inset-0 bg-background" />

            {/* Cursor Light */}
            <Suspense fallback={null}>
                <CursorLight mode={mode} />
            </Suspense>

            {/* Particles */}
            <Suspense fallback={null}>
                <ParticleCanvas mode={mode} isDusting={isExiting} />
            </Suspense>

            {/* Film Grain */}
            <Suspense fallback={null}>
                <FilmGrain />
            </Suspense>

            {/* Floating Online Header - Top */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 z-40">
                <HeaderStatusBadge mode={mode} />
            </div>

            {/* Main Content - Golden Ratio Mobile Layout */}
            <div className="relative z-40 w-full h-full flex flex-col">
                {/* TOP 40% - HERO SECTION (Brand Name & Tagline) */}
                <div className="flex-[0.40] flex items-center justify-center px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center max-w-6xl w-full px-2"
                        initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                    >
                        {/* Brand Name - MASSIVE & BOLD - v5.1 */}
                        <h1
                            className="font-display font-black text-foreground mb-2 sm:mb-3"
                            style={{
                                fontSize: 'clamp(2.8rem, 13vw, 10rem)',
                                lineHeight: '0.95',
                                letterSpacing: '-0.02em',
                                whiteSpace: 'nowrap',
                                background: 'linear-gradient(135deg, rgba(234,179,8,1) 0%, rgba(255,255,255,0.95) 50%, rgba(234,179,8,1) 100%)',
                                backgroundSize: '200% 200%',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                textShadow: '0 0 100px rgba(234, 179, 8, 0.25)',
                                filter: 'drop-shadow(0 0 50px rgba(234, 179, 8, 0.2))',
                                fontWeight: 900,
                                animation: 'gradient-shift 8s ease-in-out infinite',
                            }}
                        >
                            Quickserve IT
                        </h1>

                        {/* Tagline - TINY & GENIUS MINIMALIST - v5.1 */}
                        <p
                            className="font-serif text-foreground/55 italic tracking-widest font-light transition-all duration-slow"
                            style={{
                                fontSize: 'clamp(0.65rem, 1.5vw, 0.85rem)',
                                fontFamily: "'Playfair Display', 'Georgia', serif",
                                textShadow: '0 2px 15px rgba(255, 255, 255, 0.08)',
                                fontWeight: 300,
                                letterSpacing: '0.18em',
                                textTransform: 'lowercase',
                            }}
                        >
                            your personal tech partner
                        </p>
                    </motion.div>
                </div>

                {/* BOTTOM 60% - GATEWAY CARDS & FOOTER */}
                <div className="flex-[0.60] flex flex-col justify-center px-0 pb-0">
                    {/* Gateway Cards - Compact Jewel Cards */}
                    <div className="w-full flex-1 flex items-center">
                        <GatewayCards onEnter={handleGateEnter} />
                    </div>

                    {/* Footer - Compact & Professional */}
                    <div className="mt-4 sm:mt-8 text-center border-t border-white/[0.1] pt-4 sm:pt-8">
                        <p className="text-[10px] sm:text-xs text-foreground/45 font-mono tracking-wider">
                            QuickServe IT © {new Date().getFullYear()}
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default LandingView;
