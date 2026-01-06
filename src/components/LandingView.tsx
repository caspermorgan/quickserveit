import { useState, useEffect, lazy, Suspense } from 'react';
import ModeSwitch from './ModeSwitch';
import EnterButton from './EnterButton';
import HeaderStatusBadge from './HeaderStatusBadge';
import { useTranslation } from '@/hooks/useTranslation';

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
    const [isLoaded, setIsLoaded] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`fixed inset-0 z-30 flex flex-col items-center justify-center transition-all duration-1000 ease-out ${isExiting
                ? 'opacity-0 scale-[1.02] blur-md pointer-events-none'
                : 'opacity-100 scale-100 blur-0'
                }`}
        >
            {/* Background */}
            <div className="absolute inset-0 bg-background" />



            {/* Cursor Light - Lazy loaded */}
            <Suspense fallback={null}>
                <CursorLight mode={mode} />
            </Suspense>

            {/* Particles - no dusting on load, only on exit */}
            <Suspense fallback={null}>
                <ParticleCanvas mode={mode} isDusting={isExiting} />
            </Suspense>

            {/* Film Grain - Lazy loaded */}
            <Suspense fallback={null}>
                <FilmGrain />
            </Suspense>

            {/* Status Badge - Top */}
            <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 z-40">
                <HeaderStatusBadge mode={mode} />
            </div>

            {/* Content */}
            <div className={`relative z-40 flex flex-col items-center text-center px-6 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'
                }`}>
                {/* Brand Name */}
                <h1
                    className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight md:tracking-tight text-foreground mb-4 md:mb-6 font-black uppercase"
                    style={{ animationDelay: '200ms' }}
                >
                    {t('brandName')}
                </h1>

                {/* Minimal tagline */}
                <p
                    className={`font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase mb-12 md:mb-16 transition-colors duration-700 ${mode === 'institutional' ? 'text-institutional/50' : 'text-creator/50'
                        }`}
                    style={{ animationDelay: '400ms' }}
                >
                    {t('brandTagline')}
                </p>

                {/* Mode Switch */}
                <div style={{ animationDelay: '600ms' }}>
                    <ModeSwitch mode={mode} onModeChange={onModeChange} />
                </div>

                {/* Enter Button */}
                <div style={{ animationDelay: '800ms' }}>
                    <EnterButton mode={mode} onClick={onEnter} />
                </div>
            </div>

            {/* Footer - ultra minimal */}
            <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20">
                <div className="flex items-center gap-3 md:gap-4 text-[9px] md:text-[10px] text-foreground/15 font-mono tracking-widest uppercase">
                    <span className="flex items-center gap-1.5">
                        <span className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full ${mode === 'institutional' ? 'bg-institutional/60' : 'bg-creator/60'
                            }`} />
                        {t('secure')}
                    </span>
                    <span className="text-foreground/10">·</span>
                    <span>{t('india')}</span>
                </div>
            </div>

            {/* Corner branding - minimal */}
            <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20">
                <div className="text-[9px] md:text-[10px] text-foreground/10 font-mono tracking-widest">
                    QS
                </div>
            </div>

            <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20">
                <div className="text-[9px] md:text-[10px] text-foreground/10 font-mono tracking-widest">
                    2025
                </div>
            </div>
        </div>
    );
};

export default LandingView;
