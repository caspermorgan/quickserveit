import { useState, useEffect, lazy, Suspense } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import HeaderStatusBadge from './HeaderStatusBadge';

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
    const [isLoaded, setIsLoaded] = useState(false);

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
            <div className={`relative z-40 flex flex-col items-center text-center px-6 -mt-12 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'
                }`}>
                {/* Brand Name - Premium Typography */}
                <h1
                    className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-foreground mb-3 tracking-[-0.02em]"
                    style={{
                        animationDelay: '200ms',
                        letterSpacing: '-0.02em',
                        fontWeight: 700
                    }}
                >
                    QuickServe IT
                </h1>

                {/* Tagline - Minimal & Spaced */}
                <p
                    className="font-sans text-sm md:text-base tracking-wide mb-16 md:mb-20 text-foreground/50 font-light"
                    style={{
                        animationDelay: '400ms',
                        letterSpacing: '0.15em'
                    }}
                >
                    Your Personal Tech Partner
                </p>

                {/* Decision Cards */}
                <div
                    className="flex flex-col md:flex-row gap-6 md:gap-8 w-full max-w-4xl"
                    style={{ animationDelay: '600ms' }}
                >
                    {/* Institutional Card */}
                    <button
                        onClick={() => {
                            onModeChange('institutional');
                            setTimeout(() => onEnter(), 300);
                        }}
                        className={`group relative flex-1 p-8 md:p-10 rounded-2xl transition-all duration-500 ease-out ${mode === 'institutional'
                            ? 'scale-[1.02]'
                            : 'hover:scale-[1.02]'
                            }`}
                        style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            backdropFilter: 'blur(40px)',
                            WebkitBackdropFilter: 'blur(40px)',
                            border: mode === 'institutional'
                                ? '1px solid rgba(234, 179, 8, 0.3)'
                                : '1px solid rgba(255, 255, 255, 0.08)',
                            boxShadow: mode === 'institutional'
                                ? '0 0 0 1px rgba(0, 0, 0, 0.5), 0 30px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(234, 179, 8, 0.15), inset 0 0 40px rgba(234, 179, 8, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                                : '0 0 0 1px rgba(0, 0, 0, 0.5), 0 30px 80px rgba(0, 0, 0, 0.6), 0 0 40px rgba(234, 179, 8, 0.05), inset 0 0 20px rgba(255, 255, 255, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                        }}
                    >
                        {/* Radial ambient glow */}
                        <div
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                            style={{
                                background: 'radial-gradient(circle at 50% 50%, rgba(234, 179, 8, 0.08) 0%, transparent 70%)'
                            }}
                        />

                        <div className="relative z-10 text-left">
                            <div className="text-xs font-mono tracking-[0.2em] uppercase text-institutional/60 mb-3">
                                Institutional
                            </div>
                            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-3 tracking-tight">
                                Compliance & Scale
                            </h3>
                            <p className="text-sm md:text-base text-foreground/60 leading-relaxed font-light">
                                Built for institutions that require reliability, compliance,<br className="hidden md:block" />
                                and scalable IT systems.
                            </p>
                        </div>
                    </button>

                    {/* Creator Card */}
                    <button
                        onClick={() => {
                            onModeChange('creator');
                            setTimeout(() => onEnter(), 300);
                        }}
                        className={`group relative flex-1 p-8 md:p-10 rounded-2xl transition-all duration-500 ease-out ${mode === 'creator'
                            ? 'scale-[1.02]'
                            : 'hover:scale-[1.02]'
                            }`}
                        style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            backdropFilter: 'blur(40px)',
                            WebkitBackdropFilter: 'blur(40px)',
                            border: mode === 'creator'
                                ? '1px solid rgba(34, 211, 238, 0.3)'
                                : '1px solid rgba(255, 255, 255, 0.08)',
                            boxShadow: mode === 'creator'
                                ? '0 0 0 1px rgba(0, 0, 0, 0.5), 0 30px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(34, 211, 238, 0.15), inset 0 0 40px rgba(34, 211, 238, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                                : '0 0 0 1px rgba(0, 0, 0, 0.5), 0 30px 80px rgba(0, 0, 0, 0.6), 0 0 40px rgba(34, 211, 238, 0.05), inset 0 0 20px rgba(255, 255, 255, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                        }}
                    >
                        {/* Radial ambient glow */}
                        <div
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                            style={{
                                background: 'radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.08) 0%, transparent 70%)'
                            }}
                        />

                        <div className="relative z-10 text-left">
                            <div className="text-xs font-mono tracking-[0.2em] uppercase text-creator/60 mb-3">
                                Creator
                            </div>
                            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-3 tracking-tight">
                                Growth & Impact
                            </h3>
                            <p className="text-sm md:text-base text-foreground/60 leading-relaxed font-light">
                                For creators, studios, and modern brands focused on reach,<br className="hidden md:block" />
                                storytelling, and digital impact.
                            </p>
                        </div>
                    </button>
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
