import { useState, useEffect, lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import HeaderStatusBadge from './HeaderStatusBadge';
import TrifectaPrisms from './TrifectaPrisms';
import { SkeletonLoader } from './SkeletonLoader';
import { motion } from 'framer-motion';

// Lazy load decorative components for better initial load performance
const ParticleCanvas = lazy(() => import('./ParticleCanvas'));
const FilmGrain = lazy(() => import('./FilmGrain'));
const CursorLight = lazy(() => import('./CursorLight'));

interface LandingViewProps {
    mode: 'institutional' | 'creator';
    onModeChange: (mode: 'institutional' | 'creator') => void;
    onEnter: (mode: 'institutional' | 'creator') => void;
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
        setTimeout(() => onEnter(gateMode), 300);
    };

    return (
        <div
            className={`h-[100dvh] overflow-hidden z-30 transition-all duration-slowest ease-out ${isExiting
                ? 'opacity-0 scale-[1.02] blur-md pointer-events-none'
                : 'opacity-100 scale-100 blur-0'
                }`}
        >
            {/* Background - Fixed at the back */}
            <div className="absolute inset-0 bg-background -z-10" />

            {/* Cursor Light - Behind content */}
            <Suspense fallback={null}>
                <CursorLight mode={mode} />
            </Suspense>

            {/* Particles - Fixed background layer */}
            <Suspense fallback={null}>
                <ParticleCanvas mode={mode} isDusting={isExiting} />
            </Suspense>

            {/* Film Grain */}
            <Suspense fallback={null}>
                <FilmGrain />
            </Suspense>

            {/* Floating Online Header - Absolute at top */}
            <div className="absolute top-6 md:top-8 left-1/2 -translate-x-1/2 z-50">
                <HeaderStatusBadge mode={mode} />
            </div>

            {/* MASTER CONTAINER - Perfect Vertical Distribution */}
            <div className="relative z-40 h-full flex flex-col justify-between">
                {/* ========== UPPER ATMOSPHERE (Header + Brand) ========== */}
                <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
                    <motion.div
                        className="text-center max-w-6xl w-full -mt-16 md:-mt-20"
                        initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                    >
                        {/* Brand Name - MASSIVE, PURE WHITE, CARVED INTO SPACE */}
                        <h1
                            className="font-display font-black text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight mb-3 sm:mb-4"
                            style={{
                                lineHeight: '0.9',
                                textShadow: '0 4px 40px rgba(255, 255, 255, 0.1), 0 0 80px rgba(255, 255, 255, 0.05)',
                                fontWeight: 900,
                            }}
                        >
                            QUICKSERVE IT
                        </h1>

                        {/* Tagline - THE WHISPER (Dull/Faded) */}
                        <p
                            className="text-white/40 text-xs sm:text-sm font-light tracking-[0.5em] uppercase"
                            style={{
                                letterSpacing: '0.5em',
                            }}
                        >
                            Your Personal Tech Partner
                        </p>
                    </motion.div>
                </div>

                {/* ========== CONTROL DOCK (The Gates) ========== */}
                <div className="px-4 sm:px-6 lg:px-8 pb-16 md:pb-20">
                    <TrifectaPrisms onEnter={handleGateEnter} />
                </div>

                {/* ========== THE ANCHOR (Footer Signature) ========== */}
                <div className="pb-4 md:pb-6">
                    {/* Divider Line */}
                    <div className="h-[1px] w-[90%] bg-white/10 mx-auto mb-3" />

                    {/* Signature */}
                    <p className="font-mono text-[10px] uppercase tracking-widest text-white/30 text-center">
                        QUICKSERVE IT @ 2025
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LandingView;
