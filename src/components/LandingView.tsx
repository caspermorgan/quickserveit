import { useState, useEffect, lazy, Suspense } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import HeaderStatusBadge from './HeaderStatusBadge';
import { ArrowRight, Building2, User, Code, Sparkles } from 'lucide-react';

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
            window.location.href = '/founder';
        } else if (cardNumber === 4) {
            window.location.href = '/contact';
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
        },
        {
            id: 2,
            icon: User,
            title: 'Creator Portfolio',
            subtitle: 'Freelancers & Brands',
            mode: 'creator' as const,
            color: 'creator',
        },
        {
            id: 3,
            icon: Code,
            title: 'Personal Work',
            subtitle: 'Founder Projects',
            mode: 'institutional' as const,
            color: 'white',
        },
        {
            id: 4,
            icon: Sparkles,
            title: 'AI & Automation',
            subtitle: 'Coming Soon',
            mode: 'institutional' as const,
            color: 'purple',
            badge: true,
        },
    ];

    return (
        <div
            className={`fixed inset-0 z-30 flex items-center justify-center overflow-hidden transition-all duration-1000 ease-out ${isExiting
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
                className={`relative z-40 w-full h-full flex flex-col transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
            >
                {/* TOP 50% - HERO SECTION */}
                <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 min-h-[50vh]">
                    <div className="text-center max-w-4xl w-full">
                        {/* Brand Name - Premium Sized */}
                        <h1
                            className="font-display font-black text-foreground tracking-tighter mb-6 sm:mb-8"
                            style={{
                                fontSize: 'clamp(2.5rem, 10vw, 6.5rem)',
                                lineHeight: '1.05',
                                letterSpacing: '-0.02em',
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.75) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                textShadow: '0 0 60px rgba(255, 255, 255, 0.15)',
                                filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.1))',
                            }}
                        >
                            Quickserve IT
                        </h1>

                        {/* Tagline - Prominent & Elegant */}
                        <p
                            className="font-serif text-foreground/80 text-lg sm:text-xl md:text-2xl italic tracking-wide font-light"
                            style={{
                                fontFamily: "'Playfair Display', 'Georgia', serif",
                                textShadow: '0 2px 20px rgba(255, 255, 255, 0.08)',
                                fontWeight: 300,
                            }}
                        >
                            Your Personal Tech Partner
                        </p>
                    </div>
                </div>

                {/* BOTTOM 50% - CARDS & FOOTER */}
                <div className="flex-1 flex flex-col justify-between px-4 sm:px-6 lg:px-8 pb-8 min-h-[50vh]">
                    {/* Cards Grid - Premium Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 max-w-7xl w-full mx-auto">
                        {cards.map((card, index) => {
                            const Icon = card.icon;
                            const isHovered = hoveredCard === card.id;

                            return (
                                <button
                                    key={card.id}
                                    onClick={() => handleCardClick(card.mode, card.id)}
                                    onMouseEnter={() => setHoveredCard(card.id)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                    className={`group relative px-3 py-3 sm:px-5 sm:py-7 md:px-7 md:py-9 rounded-xl sm:rounded-2xl border transition-all duration-500 ease-out text-left overflow-hidden min-h-[100px] sm:min-h-[180px] ${isHovered
                                        ? card.color === 'institutional'
                                            ? 'border-institutional/60 bg-institutional/[0.15] -translate-y-2 shadow-2xl shadow-institutional/30 scale-[1.02]'
                                            : card.color === 'creator'
                                                ? 'border-creator/60 bg-creator/[0.15] -translate-y-2 shadow-2xl shadow-creator/30 scale-[1.02]'
                                                : card.color === 'purple'
                                                    ? 'border-purple-400/60 bg-purple-500/[0.15] -translate-y-2 shadow-2xl shadow-purple-500/30 scale-[1.02]'
                                                    : 'border-white/40 bg-white/[0.12] -translate-y-2 shadow-2xl shadow-white/20 scale-[1.02]'
                                        : 'border-white/[0.15] bg-white/[0.05] hover:border-white/25'
                                        }`}
                                    style={{
                                        backdropFilter: 'blur(24px)',
                                        WebkitBackdropFilter: 'blur(24px)',
                                        transitionDelay: `${index * 60}ms`,
                                        transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                                    }}
                                >
                                    {/* Multi-layer gradient overlay */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''
                                            } ${card.color === 'institutional'
                                                ? 'from-institutional/25 via-institutional/15 to-transparent'
                                                : card.color === 'creator'
                                                    ? 'from-creator/25 via-creator/15 to-transparent'
                                                    : card.color === 'purple'
                                                        ? 'from-purple-500/25 via-purple-500/15 to-transparent'
                                                        : 'from-white/20 via-white/10 to-transparent'
                                            }`}
                                    />

                                    {/* Edge highlight */}
                                    <div
                                        className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''
                                            }`}
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)',
                                        }}
                                    />

                                    {/* Badge */}
                                    {card.badge && (
                                        <div className="absolute top-3 right-3 z-20">
                                            <div className="px-2.5 py-1 rounded-full bg-purple-500/25 border border-purple-400/40 backdrop-blur-md">
                                                <span className="text-[9px] font-semibold text-purple-200 uppercase tracking-widest">
                                                    Soon
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    <div className="relative z-10 flex flex-col h-full">
                                        {/* Icon - Premium Animation */}
                                        <div className="mb-3 sm:mb-5">
                                            <div
                                                className={`inline-flex p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-500 ease-out ${isHovered
                                                    ? card.color === 'institutional'
                                                        ? 'bg-institutional/30 text-institutional scale-110 rotate-3 shadow-lg shadow-institutional/20'
                                                        : card.color === 'creator'
                                                            ? 'bg-creator/30 text-creator scale-110 rotate-3 shadow-lg shadow-creator/20'
                                                            : card.color === 'purple'
                                                                ? 'bg-purple-500/30 text-purple-200 scale-110 rotate-3 shadow-lg shadow-purple-500/20'
                                                                : 'bg-white/20 text-white scale-110 rotate-3 shadow-lg shadow-white/10'
                                                    : 'bg-white/[0.08] text-foreground/70'
                                                    }`}
                                            >
                                                <Icon size={24} className="sm:w-7 sm:h-7" />
                                            </div>
                                        </div>

                                        {/* Title - Enhanced */}
                                        <h3 className="text-sm sm:text-lg font-bold text-foreground mb-1 sm:mb-2 leading-tight">
                                            {card.title}
                                        </h3>

                                        {/* Subtitle - Readable */}
                                        <p className="text-xs sm:text-sm text-foreground/60 mb-3 sm:mb-4 flex-grow">
                                            {card.subtitle}
                                        </p>

                                        {/* CTA - Touch-Friendly */}
                                        <div
                                            className={`inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold transition-all duration-300 min-h-[44px] sm:min-h-[48px] ${isHovered
                                                ? card.color === 'institutional'
                                                    ? 'translate-x-2 text-institutional'
                                                    : card.color === 'creator'
                                                        ? 'translate-x-2 text-creator'
                                                        : card.color === 'purple'
                                                            ? 'translate-x-2 text-purple-200'
                                                            : 'translate-x-2 text-white'
                                                : 'text-foreground/50'
                                                }`}
                                        >
                                            {card.id === 4 ? 'Join Waitlist' : 'Get Started'}
                                            <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                                        </div>
                                    </div>

                                    {/* Ambient glow */}
                                    <div
                                        className={`absolute inset-0 rounded-2xl transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'
                                            }`}
                                        style={{
                                            background:
                                                card.color === 'institutional'
                                                    ? 'radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.15), transparent 70%)'
                                                    : card.color === 'creator'
                                                        ? 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.15), transparent 70%)'
                                                        : card.color === 'purple'
                                                            ? 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15), transparent 70%)'
                                                            : 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.12), transparent 70%)',
                                        }}
                                    />
                                </button>
                            );
                        })}
                    </div>

                    {/* Footer - Compact & Professional */}
                    <div className="mt-8 text-center border-t border-white/[0.08] pt-8">
                        <p className="text-xs text-foreground/40 font-mono tracking-wide">
                            Quickserve IT © 2026
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingView;
