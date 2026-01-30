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

            {/* Main Content - 50/50 Mobile-First Layout */}
            <div
                className={`relative z-40 w-full h-full flex flex-col transition-all duration-slowest ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
            >
                {/* TOP 60% - HERO SECTION (Rule of Thirds) */}
                <div className="flex-[0.6] flex items-center justify-center px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-6xl w-full">
                        {/* Brand Name - MASSIVE & BOLD */}
                        <h1
                            className="font-display font-black text-foreground tracking-tighter mb-3 sm:mb-4"
                            style={{
                                fontSize: 'clamp(3.5rem, 15vw, 10rem)',
                                lineHeight: '0.95',
                                letterSpacing: '-0.04em',
                                background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0.95) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                textShadow: '0 0 80px rgba(255, 255, 255, 0.2)',
                                filter: 'drop-shadow(0 0 40px rgba(255, 255, 255, 0.15))',
                                fontWeight: 900,
                            }}
                        >
                            Quickserve IT
                        </h1>

                        {/* Tagline - TINY & GENIUS MINIMALIST */}
                        <p
                            className="font-serif text-foreground/50 italic tracking-widest font-light transition-all duration-normal"
                            style={{
                                fontSize: 'clamp(0.65rem, 1.5vw, 0.85rem)',
                                fontFamily: "'Playfair Display', 'Georgia', serif",
                                textShadow: '0 1px 10px rgba(255, 255, 255, 0.05)',
                                fontWeight: 300,
                                letterSpacing: '0.15em',
                                textTransform: 'lowercase',
                            }}
                        >
                            {hoveredCard ? cards.find(c => c.id === hoveredCard)?.tagline : 'your personal tech partner'}
                        </p>
                    </div>
                </div>

                {/* BOTTOM 40% - CARDS & FOOTER (Rule of Thirds) */}
                <div className="flex-[0.4] flex flex-col justify-between px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
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
                                    className={`group relative px-4 py-5 sm:px-6 sm:py-7 md:px-7 md:py-9 rounded-xl sm:rounded-2xl border transition-all duration-slow ease-out text-left overflow-hidden min-h-[140px] sm:min-h-[180px] md:min-h-[200px] ${isHovered
                                        ? card.color === 'institutional'
                                            ? 'border-institutional/70 bg-institutional/[0.18] -translate-y-2 shadow-2xl shadow-institutional/40 scale-[1.03]'
                                            : card.color === 'creator'
                                                ? 'border-creator/70 bg-creator/[0.18] -translate-y-2 shadow-2xl shadow-creator/40 scale-[1.03]'
                                                : card.color === 'purple'
                                                    ? 'border-purple-400/70 bg-purple-500/[0.18] -translate-y-2 shadow-2xl shadow-purple-500/40 scale-[1.03]'
                                                    : 'border-white/50 bg-white/[0.15] -translate-y-2 shadow-2xl shadow-white/25 scale-[1.03]'
                                        : 'border-white/[0.18] bg-white/[0.06] hover:border-white/30'
                                        }`}
                                    style={{
                                        backdropFilter: 'blur(32px)',
                                        WebkitBackdropFilter: 'blur(32px)',
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
                                        <div className="absolute top-3 right-3 z-20">
                                            <div className="px-3 py-1.5 rounded-full bg-purple-500/30 border border-purple-400/50 backdrop-blur-md">
                                                <span className="text-[10px] font-bold text-purple-100 uppercase tracking-widest">
                                                    Soon
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    <div className="relative z-10 flex flex-col h-full">
                                        {/* Icon - Premium Animation */}
                                        <div className="mb-3 sm:mb-4">
                                            <div
                                                className={`inline-flex p-2.5 sm:p-3 rounded-xl transition-all duration-slow ease-out ${isHovered
                                                    ? card.color === 'institutional'
                                                        ? 'bg-institutional/35 text-institutional scale-110 rotate-3 shadow-lg shadow-institutional/25'
                                                        : card.color === 'creator'
                                                            ? 'bg-creator/35 text-creator scale-110 rotate-3 shadow-lg shadow-creator/25'
                                                            : card.color === 'purple'
                                                                ? 'bg-purple-500/35 text-purple-200 scale-110 rotate-3 shadow-lg shadow-purple-500/25'
                                                                : 'bg-white/25 text-white scale-110 rotate-3 shadow-lg shadow-white/15'
                                                    : 'bg-white/[0.1] text-foreground/70'
                                                    }`}
                                            >
                                                <Icon size={24} className="sm:w-7 sm:h-7" />
                                            </div>
                                        </div>

                                        {/* Title - Enhanced */}
                                        <h3 className="text-base sm:text-lg font-bold text-foreground mb-1 sm:mb-2 leading-tight">
                                            {card.title}
                                        </h3>

                                        {/* Subtitle - Readable */}
                                        <p className="text-xs sm:text-sm text-foreground/65 mb-3 sm:mb-4 flex-grow">
                                            {card.subtitle}
                                        </p>

                                        {/* CTA - Touch-Friendly */}
                                        <div
                                            className={`inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold transition-all duration-normal ${isHovered
                                                ? card.color === 'institutional'
                                                    ? 'translate-x-2 text-institutional'
                                                    : card.color === 'creator'
                                                        ? 'translate-x-2 text-creator'
                                                        : card.color === 'purple'
                                                            ? 'translate-x-2 text-purple-200'
                                                            : 'translate-x-2 text-white'
                                                : 'text-foreground/55'
                                                }`}
                                        >
                                            {card.id === 4 ? 'Join Waitlist' : 'Get Started'}
                                            <ArrowRight className={`w-4 h-4 transition-transform duration-normal ${isHovered ? 'translate-x-1' : ''}`} />
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
                    <div className="mt-6 sm:mt-8 text-center border-t border-white/[0.1] pt-6 sm:pt-8">
                        <p className="text-xs text-foreground/45 font-mono tracking-wider">
                            QuickServe IT © {new Date().getFullYear()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingView;
