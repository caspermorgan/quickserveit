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
    const [hoveredCard, setHoveredCard] = useState<'institutional' | 'creator' | null>(null);

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
            <div className={`relative z-40 flex flex-col items-center text-center px-5 sm:px-6 max-w-7xl w-full transition-all duration-700 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'
                }`}>
                {/* Brand Name - Enhanced Typography with Text Shadow */}
                <h1
                    className="font-display font-bold text-foreground mb-4 md:mb-6 tracking-tight"
                    style={{
                        fontSize: 'clamp(2.5rem, 8vw, 7rem)',
                        lineHeight: '1.1',
                        letterSpacing: '-0.03em',
                        fontWeight: 800,
                        textShadow: '0 2px 40px rgba(255, 255, 255, 0.1), 0 0 80px rgba(255, 255, 255, 0.05)',
                        animationDelay: '200ms'
                    }}
                >
                    QuickServe IT
                </h1>

                {/* Tagline - Enhanced Spacing and Readability */}
                <p
                    className="font-sans text-foreground/60 font-light mb-10 md:mb-14 lg:mb-20 max-w-2xl"
                    style={{
                        fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                        letterSpacing: '0.2em',
                        lineHeight: '1.6',
                        animationDelay: '400ms'
                    }}
                >
                    Your Personal Tech Partner
                </p>

                {/* Decision Cards - Enhanced Design */}
                <div
                    className="flex flex-col lg:flex-row gap-5 sm:gap-6 lg:gap-8 w-full max-w-5xl"
                    style={{ animationDelay: '600ms' }}
                >
                    {/* Institutional Card */}
                    <button
                        onClick={() => {
                            onModeChange('institutional');
                            setTimeout(() => onEnter(), 300);
                        }}
                        onMouseEnter={() => setHoveredCard('institutional')}
                        onMouseLeave={() => setHoveredCard(null)}
                        aria-label="Select Institutional Mode - For schools, colleges, and educational institutions"
                        className={`group relative flex-1 p-5 sm:p-7 md:p-9 lg:p-12 rounded-2xl sm:rounded-3xl transition-all duration-700 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-institutional/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${mode === 'institutional'
                            ? 'scale-[1.01] sm:scale-[1.02] lg:scale-[1.05]'
                            : hoveredCard === 'institutional'
                                ? 'scale-[1.005] sm:scale-[1.015] lg:scale-[1.03]'
                                : 'hover:scale-[1.01] lg:hover:scale-[1.02]'
                            }`}
                        style={{
                            background: mode === 'institutional'
                                ? 'linear-gradient(135deg, rgba(234, 179, 8, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)'
                                : 'rgba(255, 255, 255, 0.02)',
                            backdropFilter: 'blur(60px) saturate(180%)',
                            WebkitBackdropFilter: 'blur(60px) saturate(180%)',
                            border: mode === 'institutional'
                                ? '1.5px solid rgba(234, 179, 8, 0.4)'
                                : hoveredCard === 'institutional'
                                    ? '1.5px solid rgba(234, 179, 8, 0.2)'
                                    : '1px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: mode === 'institutional'
                                ? '0 0 0 1px rgba(0, 0, 0, 0.6), 0 40px 100px rgba(0, 0, 0, 0.7), 0 0 80px rgba(234, 179, 8, 0.2), inset 0 0 60px rgba(234, 179, 8, 0.08), inset 0 2px 0 rgba(255, 255, 255, 0.15), inset 0 -2px 0 rgba(0, 0, 0, 0.3)'
                                : hoveredCard === 'institutional'
                                    ? '0 0 0 1px rgba(0, 0, 0, 0.5), 0 30px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(234, 179, 8, 0.12), inset 0 0 40px rgba(234, 179, 8, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.12)'
                                    : '0 0 0 1px rgba(0, 0, 0, 0.5), 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(234, 179, 8, 0.03), inset 0 0 20px rgba(255, 255, 255, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                            minHeight: '240px',
                        }}
                    >
                        {/* Animated Border Gradient */}
                        <div
                            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                            style={{
                                background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.15) 0%, transparent 50%, rgba(234, 179, 8, 0.15) 100%)',
                                backgroundSize: '200% 200%',
                                animation: hoveredCard === 'institutional' ? 'gradient-shift 3s ease infinite' : 'none',
                            }}
                        />

                        {/* Radial ambient glow */}
                        <div
                            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                            style={{
                                background: 'radial-gradient(circle at 50% 50%, rgba(234, 179, 8, 0.12) 0%, transparent 70%)'
                            }}
                        />

                        {/* Icon Indicator */}
                        <div className="absolute top-5 right-5 sm:top-6 sm:right-6 md:top-8 md:right-8 opacity-40 group-hover:opacity-70 transition-opacity duration-500">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ color: 'rgb(234, 179, 8)' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                            </svg>
                        </div>

                        <div className="relative z-10 text-left flex flex-col h-full justify-between">
                            <div>
                                <div className="text-[10px] md:text-xs font-mono tracking-[0.25em] uppercase text-institutional/70 mb-4 md:mb-5 font-medium">
                                    Institutional
                                </div>
                                <h3 className="font-display font-bold text-foreground mb-3 md:mb-4 tracking-tight" style={{
                                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                                    lineHeight: '1.2',
                                    letterSpacing: '-0.02em'
                                }}>
                                    Compliance & Scale
                                </h3>
                                <p className="text-foreground/70 leading-relaxed font-light" style={{
                                    fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
                                    lineHeight: '1.7'
                                }}>
                                    Built for institutions that require reliability, compliance, and scalable IT systems.
                                </p>
                            </div>

                            {/* CTA Indicator */}
                            <div className="mt-6 md:mt-8 flex items-center gap-2 text-institutional/60 group-hover:text-institutional/80 transition-colors duration-500">
                                <span className="text-xs md:text-sm font-medium tracking-wide">Explore Services</span>
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </div>
                    </button>

                    {/* Creator Card */}
                    <button
                        onClick={() => {
                            onModeChange('creator');
                            setTimeout(() => onEnter(), 300);
                        }}
                        onMouseEnter={() => setHoveredCard('creator')}
                        onMouseLeave={() => setHoveredCard(null)}
                        aria-label="Select Creator Mode - For content creators, studios, and modern brands"
                        className={`group relative flex-1 p-5 sm:p-7 md:p-9 lg:p-12 rounded-2xl sm:rounded-3xl transition-all duration-700 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-creator/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${mode === 'creator'
                            ? 'scale-[1.01] sm:scale-[1.02] lg:scale-[1.05]'
                            : hoveredCard === 'creator'
                                ? 'scale-[1.005] sm:scale-[1.015] lg:scale-[1.03]'
                                : 'hover:scale-[1.01] lg:hover:scale-[1.02]'
                            }`}
                        style={{
                            background: mode === 'creator'
                                ? 'linear-gradient(135deg, rgba(34, 211, 238, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)'
                                : 'rgba(255, 255, 255, 0.02)',
                            backdropFilter: 'blur(60px) saturate(180%)',
                            WebkitBackdropFilter: 'blur(60px) saturate(180%)',
                            border: mode === 'creator'
                                ? '1.5px solid rgba(34, 211, 238, 0.4)'
                                : hoveredCard === 'creator'
                                    ? '1.5px solid rgba(34, 211, 238, 0.2)'
                                    : '1px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: mode === 'creator'
                                ? '0 0 0 1px rgba(0, 0, 0, 0.6), 0 40px 100px rgba(0, 0, 0, 0.7), 0 0 80px rgba(34, 211, 238, 0.2), inset 0 0 60px rgba(34, 211, 238, 0.08), inset 0 2px 0 rgba(255, 255, 255, 0.15), inset 0 -2px 0 rgba(0, 0, 0, 0.3)'
                                : hoveredCard === 'creator'
                                    ? '0 0 0 1px rgba(0, 0, 0, 0.5), 0 30px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(34, 211, 238, 0.12), inset 0 0 40px rgba(34, 211, 238, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.12)'
                                    : '0 0 0 1px rgba(0, 0, 0, 0.5), 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(34, 211, 238, 0.03), inset 0 0 20px rgba(255, 255, 255, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                            minHeight: '240px',
                        }}
                    >
                        {/* Animated Border Gradient */}
                        <div
                            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                            style={{
                                background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.15) 0%, transparent 50%, rgba(34, 211, 238, 0.15) 100%)',
                                backgroundSize: '200% 200%',
                                animation: hoveredCard === 'creator' ? 'gradient-shift 3s ease infinite' : 'none',
                            }}
                        />

                        {/* Radial ambient glow */}
                        <div
                            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                            style={{
                                background: 'radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.12) 0%, transparent 70%)'
                            }}
                        />

                        {/* Icon Indicator */}
                        <div className="absolute top-5 right-5 sm:top-6 sm:right-6 md:top-8 md:right-8 opacity-40 group-hover:opacity-70 transition-opacity duration-500">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ color: 'rgb(34, 211, 238)' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
                            </svg>
                        </div>

                        <div className="relative z-10 text-left flex flex-col h-full justify-between">
                            <div>
                                <div className="text-[10px] md:text-xs font-mono tracking-[0.25em] uppercase text-creator/70 mb-4 md:mb-5 font-medium">
                                    Creator
                                </div>
                                <h3 className="font-display font-bold text-foreground mb-3 md:mb-4 tracking-tight" style={{
                                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                                    lineHeight: '1.2',
                                    letterSpacing: '-0.02em'
                                }}>
                                    Growth & Impact
                                </h3>
                                <p className="text-foreground/70 leading-relaxed font-light" style={{
                                    fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
                                    lineHeight: '1.7'
                                }}>
                                    For creators, studios, and modern brands focused on reach, storytelling, and digital impact.
                                </p>
                            </div>

                            {/* CTA Indicator */}
                            <div className="mt-6 md:mt-8 flex items-center gap-2 text-creator/60 group-hover:text-creator/80 transition-colors duration-500">
                                <span className="text-xs md:text-sm font-medium tracking-wide">Explore Services</span>
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Footer - Enhanced with better spacing */}
            <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20">
                <div className="flex items-center gap-4 md:gap-5 text-[10px] md:text-[11px] text-foreground/20 font-mono tracking-[0.15em] uppercase">
                    <span className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${mode === 'institutional' ? 'bg-institutional/70' : 'bg-creator/70'
                            }`} />
                        {t('secure')}
                    </span>
                    <span className="text-foreground/10">•</span>
                    <span>{t('india')}</span>
                </div>
            </div>

            {/* Corner branding - Enhanced */}
            <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20">
                <div className="text-[10px] md:text-[11px] text-foreground/15 font-mono tracking-[0.2em] font-medium">
                    QS
                </div>
            </div>

            <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20">
                <div className="text-[10px] md:text-[11px] text-foreground/15 font-mono tracking-[0.2em] font-medium">
                    2025
                </div>
            </div>
        </div>
    );
};

export default LandingView;
