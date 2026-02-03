import { useState, useEffect, lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import HeaderStatusBadge from './HeaderStatusBadge';
import TwinMonoliths from './TwinMonoliths';
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

            {/* Main Content - Twin Monoliths Layout */}
            <div className="relative z-40 w-full h-full flex flex-col">
                {/* TOP SECTION - HERO (Brand Name & Tagline) */}
                <div className="flex-[0.25] flex items-center justify-center px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center max-w-6xl w-full px-2"
                        initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                    >
                        {/* Brand Name - MASSIVE, PURE WHITE, CARVED INTO SPACE */}
                        <h1
                            className="font-display font-black text-white text-7xl md:text-9xl tracking-tight mb-4 sm:mb-6"
                            style={{
                                lineHeight: '0.9',
                                textShadow: '0 4px 40px rgba(255, 255, 255, 0.1), 0 0 80px rgba(255, 255, 255, 0.05)',
                                fontWeight: 900,
                            }}
                        >
                            QUICKSERVE IT
                        </h1>

                        {/* Tagline - THE WHISPER */}
                        <p
                            className="text-neutral-500 text-sm font-light tracking-wider"
                            style={{
                                letterSpacing: '0.2em',
                            }}
                        >
                            Your Personal Tech Partner
                        </p>
                    </motion.div>
                </div>

                {/* BOTTOM SECTION - THE TWIN MONOLITHS */}
                <div className="flex-[0.75] flex flex-col justify-center px-0 pb-8">
                    <TwinMonoliths onEnter={handleGateEnter} />
                </div>
            </div>
        </div >
    );
};

export default LandingView;
