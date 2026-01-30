import { useState, useEffect, lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import HeaderStatusBadge from './HeaderStatusBadge';
import { ArrowRight, Building2, User, Code, Sparkles } from 'lucide-react';
import { SkeletonLoader } from './SkeletonLoader';

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
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleCardClick = (cardMode: 'institutional' | 'creator', cardNumber: number) => {
        if (cardNumber === 1 || cardNumber === 2) {
            onModeChange(cardMode);
            setTimeout(() => onEnter(), 300);
        } else if (cardNumber === 3) {
            navigate('/founder');
        } else if (cardNumber === 4) {
            navigate('/contact');
        }
    };

    const cards = [
        {
            id: 1,
            icon: Building2,
            title: 'Institutional',
            subtitle: 'Schools & Organizations',
            mode: 'institutional' as const,
            color: 'institutional',
            tagline: 'your personal tech partner',
        },
        {
            id: 2,
            icon: User,
            title: 'Creator',
            subtitle: 'Portfolio',
            mode: 'creator' as const,
            color: 'creator',
            tagline: 'your personal creative partner',
        },
        {
            id: 3,
            icon: Code,
            title: 'Personal',
            subtitle: 'Projects',
            mode: 'institutional' as const,
            color: 'white',
            tagline: 'work that speaks for itself',
        },
        {
            id: 4,
            icon: Sparkles,
            title: 'AI & Auto',
            subtitle: 'Soon',
            mode: 'institutional' as const,
            color: 'purple',
            badge: true,
            tagline: 'smart automation. coming soon',
        },
    ];

    return (
        <div
            className={`fixed inset-0 z-30 flex items-center justify-center overflow-hidden transition-all duration-slowest ease-out ${isExiting
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
            <div
                className={`relative z-40 w-full h-full flex flex-col transition-all duration-slowest ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
            >
                {/* TOP 38% - HERO SECTION (Golden Ratio) */}
                <div className="flex-[0.38] flex items-start justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28">
                    <div className="text-center max-w-6xl w-full px-2">
                        {/* Brand Name - MASSIVE & BOLD - v5.1 */}
                        <h1
                            className="font-display font-black text-foreground tracking-tighter mb-2 sm:mb-3"
                            style={{
                                fontSize: 'clamp(2.8rem, 13vw, 10rem)',
                                lineHeight: '0.95',
                                letterSpacing: '-0.04em',
                                whiteSpace: 'nowrap',
                                background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,1) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                textShadow: '0 0 100px rgba(255, 255, 255, 0.25)',
                                filter: 'drop-shadow(0 0 50px rgba(255, 255, 255, 0.2))',
                                fontWeight: 900,
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
                            {hoveredCard ? cards.find(c => c.id === hoveredCard)?.tagline : 'your personal tech partner'}
                        </p>
                    </div>
                </div>

                {/* BOTTOM 62% - CARDS & FOOTER (Golden Ratio) */}
                <div className="flex-[0.62] flex flex-col justify-start px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 pt-8 sm:pt-12">
                    {/* Cards Grid - Perfect 2x2 Mobile, 1x4 Desktop */}
                    <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 max-w-7xl w-full mx-auto">
                        {cards.map((card, index) => {
                            const Icon = card.icon;
                            const isHovered = hoveredCard === card.id;

                            return (
                                <button
                                    key={card.id}
                                    onClick={() => handleCardClick(card.mode, card.id)}
                                    onMouseEnter={() => setHoveredCard(card.id)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                    className={`group relative px-3 py-3 sm:px-6 sm:py-7 md:px-7 md:py-9 rounded-xl sm:rounded-2xl border transition-all duration-slow ease-out text-left overflow-hidden min-h-[110px] sm:min-h-[180px] md:min-h-[200px] ${isHovered
                                        ? card.color === 'institutional'
                                            ? 'border-institutional/80 bg-institutional/[0.2] -translate-y-2 shadow-2xl shadow-institutional/50 scale-[1.03]'
                                            : card.color === 'creator'
                                                ? 'border-creator/80 bg-creator/[0.2] -translate-y-2 shadow-2xl shadow-creator/50 scale-[1.03]'
                                                : card.color === 'purple'
                                                    ? 'border-purple-400/80 bg-purple-500/[0.2] -translate-y-2 shadow-2xl shadow-purple-500/50 scale-[1.03]'
                                                    : 'border-white/60 bg-white/[0.18] -translate-y-2 shadow-2xl shadow-white/30 scale-[1.03]'
                                        : 'border-white/[0.2] bg-white/[0.07] hover:border-white/35'
                                        }`}
                                    style={{
                                        backdropFilter: 'blur(40px)',
                                        WebkitBackdropFilter: 'blur(40px)',
                                        transitionDelay: `${index * 50}ms`,
                                        transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                                    }}
                                >
                                    {/* Enhanced multi-layer gradient overlay */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-slow ${isHovered ? 'opacity-100' : ''
                                            } ${card.color === 'institutional'
                                                ? 'from-institutional/30 via-institutional/18 to-transparent'
                                                : card.color === 'creator'
                                                    ? 'from-creator/30 via-creator/18 to-transparent'
                                                    : card.color === 'purple'
                                                        ? 'from-purple-500/30 via-purple-500/18 to-transparent'
                                                        : 'from-white/25 via-white/12 to-transparent'
                                            }`}
                                    />

                                    {/* Premium edge highlight */}
                                    <div
                                        className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-slow ${isHovered ? 'opacity-100' : ''
                                            }`}
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%)',
                                        }}
                                    />

                                    {/* Badge */}
                                    {card.badge && (
                                        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20">
                                            <div className="px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-full bg-purple-500/30 border border-purple-400/50 backdrop-blur-md">
                                                <span className="text-[8px] sm:text-[10px] font-bold text-purple-100 uppercase tracking-widest">
                                                    Soon
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    {/* Horizontal Layout: Icon Left, Content Right */}
                                    <div className="relative z-10 flex items-center gap-3 sm:gap-4 h-full">
                                        {/* Icon - Left Side - v5.1 Enhanced */}
                                        <div className="flex-shrink-0">
                                            <div
                                                className={`inline-flex p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-slow ease-out ${isHovered
                                                    ? card.color === 'institutional'
                                                        ? 'bg-institutional/40 text-institutional scale-110 shadow-lg shadow-institutional/30'
                                                        : card.color === 'creator'
                                                            ? 'bg-creator/40 text-creator scale-110 shadow-lg shadow-creator/30'
                                                            : card.color === 'purple'
                                                                ? 'bg-purple-500/40 text-purple-200 scale-110 shadow-lg shadow-purple-500/30'
                                                                : 'bg-white/30 text-white scale-110 shadow-lg shadow-white/20'
                                                    : 'bg-white/[0.12] text-foreground/70'
                                                    }`}
                                            >
                                                <Icon size={24} className="sm:w-8 sm:h-8" />
                                            </div>
                                        </div>

                                        {/* Content - Right Side */}
                                        <div className="flex-1 min-w-0">
                                            {/* Title - Big & Bold */}
                                            <h3 className="text-base sm:text-xl font-bold text-foreground mb-1 leading-tight truncate">
                                                {card.title}
                                            </h3>

                                            {/* Subtitle - Small & Dull */}
                                            <p className="text-[11px] sm:text-sm text-foreground/45 leading-tight">
                                                {card.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Enhanced ambient glow */}
                                    <div
                                        className={`absolute inset-0 rounded-2xl transition-opacity duration-slower ${isHovered ? 'opacity-100' : 'opacity-0'
                                            }`}
                                        style={{
                                            background:
                                                card.color === 'institutional'
                                                    ? 'radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.2), transparent 70%)'
                                                    : card.color === 'creator'
                                                        ? 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.2), transparent 70%)'
                                                        : card.color === 'purple'
                                                            ? 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.2), transparent 70%)'
                                                            : 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.15), transparent 70%)',
                                        }}
                                    />
                                </button>
                            );
                        })}
                    </div>

                    {/* Footer - Compact & Professional */}
                    <div className="mt-4 sm:mt-8 text-center border-t border-white/[0.1] pt-4 sm:pt-8">
                        <p className="text-[10px] sm:text-xs text-foreground/45 font-mono tracking-wider">
                            QuickServe IT © {new Date().getFullYear()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingView;
