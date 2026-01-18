import { useState, useEffect, lazy, Suspense } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import HeaderStatusBadge from './HeaderStatusBadge';
import { ArrowRight, Building2, Clapperboard } from 'lucide-react';

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
            className={`fixed inset-0 z-30 flex flex-col items-center justify-center overflow-hidden transition-all duration-1000 ease-out ${isExiting
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
            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-40">
                <HeaderStatusBadge mode={mode} />
            </div>

            {/* Main Content Area */}
            <div className={`relative z-40 flex flex-col items-center text-center px-5 md:px-4 w-full max-w-6xl pt-20 md:pt-0 transition-all duration-700 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'
                }`}>

                {/* 1. Brand Identity - Fixed Size & Position */}
                <div className="mb-8 md:mb-12 mt-[-5vh]"> {/* Slight negative margin to pull up */}
                    <h1
                        className="font-display font-bold text-foreground tracking-tight mb-2"
                        style={{
                            fontSize: 'clamp(2rem, 5vw, 4.5rem)', // Reduced from 7rem
                            lineHeight: '1.1',
                            textShadow: '0 2px 20px rgba(255, 255, 255, 0.1)',
                        }}
                    >
                        QuickServe IT
                    </h1>
                    <p className="font-sans text-foreground/60 text-sm md:text-lg tracking-[0.2em] font-light">
                        YOUR PERSONAL TECH PARTNER
                    </p>
                </div>

                {/* 2. Compact Selection Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-3xl">

                    {/* Institutional Card - Compact */}
                    <button
                        onClick={() => { onModeChange('institutional'); setTimeout(() => onEnter(), 300); }}
                        onMouseEnter={() => setHoveredCard('institutional')}
                        onMouseLeave={() => setHoveredCard(null)}
                        className={`group relative p-6 rounded-xl border transition-all duration-300 text-left overflow-hidden ${mode === 'institutional'
                            ? 'border-institutional/50 bg-institutional/5'
                            : 'border-white/10 bg-white/[0.02] hover:border-institutional/30'
                            }`}
                        style={{
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                        }}
                    >
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-institutional/10 to-transparent`} />

                        <div className="relative z-10 flex items-start justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className={`p-2 rounded-lg ${mode === 'institutional' ? 'bg-institutional/20 text-institutional' : 'bg-white/5 text-foreground/70 group-hover:text-institutional'}`}>
                                        <Building2 size={20} />
                                    </div>
                                    <span className="text-xs font-mono uppercase tracking-wider text-foreground/50">For Schools & NGOs</span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">Compliance & Scale</h3>
                                <p className="text-sm text-foreground/60 leading-relaxed max-w-[280px]">
                                    Reliable IT systems, documentation, and operational efficiency.
                                </p>
                            </div>
                            <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${hoveredCard === 'institutional' ? 'translate-x-1 text-institutional' : 'text-foreground/20'}`} />
                        </div>
                    </button>

                    {/* Creator Card - Compact */}
                    <button
                        onClick={() => { onModeChange('creator'); setTimeout(() => onEnter(), 300); }}
                        onMouseEnter={() => setHoveredCard('creator')}
                        onMouseLeave={() => setHoveredCard(null)}
                        className={`group relative p-6 rounded-xl border transition-all duration-300 text-left overflow-hidden ${mode === 'creator'
                            ? 'border-creator/50 bg-creator/5'
                            : 'border-white/10 bg-white/[0.02] hover:border-creator/30'
                            }`}
                        style={{
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                        }}
                    >
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-creator/10 to-transparent`} />

                        <div className="relative z-10 flex items-start justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className={`p-2 rounded-lg ${mode === 'creator' ? 'bg-creator/20 text-creator' : 'bg-white/5 text-foreground/70 group-hover:text-creator'}`}>
                                        <Clapperboard size={20} />
                                    </div>
                                    <span className="text-xs font-mono uppercase tracking-wider text-foreground/50">For Creators & Brands</span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">Growth & Impact</h3>
                                <p className="text-sm text-foreground/60 leading-relaxed max-w-[280px]">
                                    Video editing, storytelling, and digital reach expansion.
                                </p>
                            </div>
                            <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${hoveredCard === 'creator' ? 'translate-x-1 text-creator' : 'text-foreground/20'}`} />
                        </div>
                    </button>

                </div>

                {/* 3. Future Proofing Area (Sub-nav for Blog/Resources) */}
                <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-foreground/40 font-mono">
                    <button className="hover:text-foreground transition-colors">About Founder</button>
                    <span>•</span>
                    <button className="hover:text-foreground transition-colors">Resources (Coming Soon)</button>
                    <span>•</span>
                    <button className="hover:text-foreground transition-colors">Contact</button>
                </div>

            </div>

            {/* Corner Info */}
            <div className="absolute bottom-6 w-full px-8 flex justify-between text-[10px] text-foreground/20 font-mono tracking-widest uppercase">
                <span>Secure • India</span>
                <span>QS © 2025</span>
            </div>
        </div>
    );
};

export default LandingView;
