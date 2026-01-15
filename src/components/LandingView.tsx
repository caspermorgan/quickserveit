import { useState, useEffect, lazy, Suspense } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import HeaderStatusBadge from './HeaderStatusBadge';
import { DisplayText } from '@/components/Typography';
import { ArrowRight, Building2, Sparkles, Wrench, Youtube, BookOpen, AlertCircle, Clock } from 'lucide-react';

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
            className={`fixed inset-0 z-30 flex items-center justify-center overflow-hidden transition-all duration-1000 ease-out ${isExiting
                ? 'opacity-0 scale-[1.02] blur-md pointer-events-none'
                : 'opacity-100 scale-100 blur-0'
                }`}
        >
            {/* Background Layer */}
            <div className="absolute inset-0 bg-background" />

            {/* Decorative Effects - Lazy Loaded */}
            <Suspense fallback={null}>
                <CursorLight mode={mode} />
            </Suspense>
            <Suspense fallback={null}>
                <ParticleCanvas mode={mode} isDusting={isExiting} />
            </Suspense>
            <Suspense fallback={null}>
                <FilmGrain />
            </Suspense>

            {/* Status Badge - Top Center */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-40">
                <HeaderStatusBadge mode={mode} />
            </div>

            {/* STRICT CENTRAL AXIS LAYOUT - Flexbox Column with Consistent Gaps */}
            <div className={`relative z-40 flex flex-col items-center justify-center text-center px-4 sm:px-6 w-full max-w-6xl transition-all duration-700 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'
                }`}>

                {/* V2.0 MASSIVE HERO TITLE - THE KING - Anchors the Page */}
                <div className="mb-16 sm:mb-20 md:mb-24">
                    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tight leading-[1.1] mb-4 sm:mb-6 text-balance">
                        QuickServe IT
                    </h1>
                    <p className="font-sans text-foreground/40 text-sm sm:text-base md:text-lg tracking-wider font-medium uppercase text-center max-w-md mx-auto">
                        Your Calm Digital Partner
                    </p>
                </div>

                {/* V2.0 GLASS TILES - Reduced Dominance, Sleek Entry Doors */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 w-full max-w-4xl mx-auto mb-12">

                    {/* Institutional Systems Card - Gold Theme */}
                    <button
                        onClick={() => {
                            onModeChange('institutional');
                            setTimeout(() => onEnter(), 300);
                        }}
                        onMouseEnter={() => setHoveredCard('institutional')}
                        onMouseLeave={() => setHoveredCard(null)}
                        className={`group relative p-4 md:p-5 rounded-3xl border transition-all duration-500 text-left overflow-hidden ${mode === 'institutional'
                            ? 'border-institutional/60 bg-institutional/8 scale-[1.02]'
                            : hoveredCard === 'creator'
                                ? 'border-white/5 bg-white/[0.01] opacity-40 scale-[0.98]'
                                : 'border-white/10 bg-white/[0.03] hover:border-institutional/40 hover:bg-institutional/5 hover:scale-[1.02]'
                            }`}
                        style={{
                            backdropFilter: 'blur(24px) saturate(150%)',
                            WebkitBackdropFilter: 'blur(24px) saturate(150%)',
                            boxShadow: mode === 'institutional'
                                ? '0 8px 32px rgba(234, 179, 8, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                                : '0 4px 16px rgba(0, 0, 0, 0.3)',
                        }}
                    >
                        {/* Glow Effect */}
                        <div className={`absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-institutional/20 to-transparent blur-sm`} style={{ zIndex: -1 }} />

                        <div className="relative z-10">
                            {/* Icon + Category Label */}
                            <div className="flex items-center gap-3 mb-3">
                                <div className={`p-2 rounded-lg transition-all duration-300 ${mode === 'institutional'
                                    ? 'bg-institutional/25 text-institutional'
                                    : 'bg-white/5 text-foreground/60 group-hover:bg-institutional/15 group-hover:text-institutional'
                                    }`}>
                                    <Building2 size={18} strokeWidth={1.5} />
                                </div>
                                <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.15em] text-foreground/40 group-hover:text-foreground/60 transition-colors">
                                    For Schools
                                </span>
                            </div>

                            {/* V2.0 DESCRIPTIVE TITLE - "Systems" not "Services" */}
                            <h3 className="text-lg md:text-xl font-display font-bold text-foreground mb-2 tracking-tight text-balance">
                                Institutional Systems
                            </h3>

                            {/* V2.0 ONE-LINE VALUE PROP - Instantly readable */}
                            <p className="text-xs md:text-sm text-foreground/50 leading-relaxed mb-3 text-balance">
                                Exam docs, UDISE+, scholarships & daily support
                            </p>

                            {/* CTA Arrow */}
                            <div className="flex items-center gap-2 text-institutional/70 group-hover:text-institutional transition-colors">
                                <span className="text-xs font-medium tracking-wide">Explore</span>
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
                            </div>
                        </div>
                    </button>

                    {/* Creator Studio Card - Cyan Theme */}
                    <button
                        onClick={() => {
                            onModeChange('creator');
                            setTimeout(() => onEnter(), 300);
                        }}
                        onMouseEnter={() => setHoveredCard('creator')}
                        onMouseLeave={() => setHoveredCard(null)}
                        className={`group relative p-4 md:p-5 rounded-3xl border transition-all duration-500 text-left overflow-hidden ${mode === 'creator'
                            ? 'border-creator/60 bg-creator/8 scale-[1.02]'
                            : hoveredCard === 'institutional'
                                ? 'border-white/5 bg-white/[0.01] opacity-40 scale-[0.98]'
                                : 'border-white/10 bg-white/[0.03] hover:border-creator/40 hover:bg-creator/5 hover:scale-[1.02]'
                            }`}
                        style={{
                            backdropFilter: 'blur(24px) saturate(150%)',
                            WebkitBackdropFilter: 'blur(24px) saturate(150%)',
                            boxShadow: mode === 'creator'
                                ? '0 8px 32px rgba(34, 211, 238, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                                : '0 4px 16px rgba(0, 0, 0, 0.3)',
                        }}
                    >
                        {/* Glow Effect */}
                        <div className={`absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-creator/20 to-transparent blur-sm`} style={{ zIndex: -1 }} />

                        <div className="relative z-10">
                            {/* Icon + Category Label */}
                            <div className="flex items-center gap-3 mb-3">
                                <div className={`p-2 rounded-lg transition-all duration-300 ${mode === 'creator'
                                    ? 'bg-creator/25 text-creator'
                                    : 'bg-white/5 text-foreground/60 group-hover:bg-creator/15 group-hover:text-creator'
                                    }`}>
                                    <Sparkles size={18} strokeWidth={1.5} />
                                </div>
                                <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.15em] text-foreground/40 group-hover:text-foreground/60 transition-colors">
                                    For Creators
                                </span>
                            </div>

                            {/* V2.0 DESCRIPTIVE TITLE */}
                            <h3 className="text-lg md:text-xl font-display font-bold text-foreground mb-2 tracking-tight text-balance">
                                Creator Studio
                            </h3>

                            {/* V2.0 ONE-LINE VALUE PROP - Instantly readable */}
                            <p className="text-xs md:text-sm text-foreground/50 leading-relaxed mb-3 text-balance">
                                Video editing, thumbnails, motion graphics & strategy
                            </p>

                            {/* CTA Arrow */}
                            <div className="flex items-center gap-2 text-creator/70 group-hover:text-creator transition-colors">
                                <span className="text-xs font-medium tracking-wide">Explore</span>
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
                            </div>
                        </div>
                    </button>

                </div>

                {/* ALIGNED GLASS DOCK - Locked to Central Axis */}
                <div
                    className="relative px-6 py-3 rounded-full border border-white/10 bg-white/[0.02] max-w-2xl w-full"
                    style={{
                        backdropFilter: 'blur(24px)',
                        WebkitBackdropFilter: 'blur(24px)',
                        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                    }}
                >
                    <div className="flex items-center justify-center gap-6 md:gap-8 text-xs font-mono">
                        <button className="text-foreground/40 hover:text-foreground/70 transition-colors duration-300 flex items-center gap-2">
                            <Wrench size={14} />
                            <span className="hidden sm:inline">AI Tools</span>
                        </button>
                        <span className="text-foreground/10">•</span>
                        <button className="text-foreground/40 hover:text-foreground/70 transition-colors duration-300 flex items-center gap-2">
                            <BookOpen size={14} />
                            <span className="hidden sm:inline">Resources</span>
                        </button>
                        <span className="text-foreground/10">•</span>
                        <button className="text-foreground/40 hover:text-foreground/70 transition-colors duration-300 flex items-center gap-2">
                            <Youtube size={14} />
                            <span className="hidden sm:inline">Channel</span>
                        </button>
                        <span className="text-foreground/10 hidden md:inline">•</span>
                        <button className="text-foreground/40 hover:text-foreground/70 transition-colors duration-300 hidden md:flex items-center gap-2">
                            <span>Coming Soon</span>
                        </button>
                    </div>
                </div>

            </div>

            {/* Corner Branding */}
            <div className="absolute bottom-6 w-full px-8 flex justify-between text-[10px] text-foreground/15 font-mono tracking-widest uppercase pointer-events-none">
                <span>Secure • India</span>
                <span>QS © 2025</span>
            </div>
        </div>
    );
};

export default LandingView;
