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

            {/* Main Content - Perfectly Centered & Spaced */}
            <div
                className={`relative z-40 w-full max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
            >
                {/* Brand Section - Large, Highlighted, Alive */}
                <div className="text-center mb-16 sm:mb-20 lg:mb-24">
                    {/* Brand Name - Extra Large, Highlighted, Alive Feel */}
                    <h1
                        className="font-display font-black text-foreground tracking-tighter mb-4 sm:mb-5 animate-pulse-subtle"
                        style={{
                            fontSize: 'clamp(3.5rem, 10vw, 7rem)',
                            lineHeight: '0.95',
                            textShadow:
                                '0 0 40px rgba(255, 255, 255, 0.3), 0 0 80px rgba(255, 255, 255, 0.15), 0 4px 60px rgba(255, 255, 255, 0.1)',
                            letterSpacing: '-0.03em',
                        }}
                    >
                        Quickserve IT
                    </h1>

                    {/* Tagline - Creative Font, Just Below */}
                    <p
                        className="font-serif text-foreground/75 text-base sm:text-lg md:text-xl italic tracking-wide font-light"
                        style={{
                            fontFamily: "'Playfair Display', 'Georgia', serif",
                            textShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
                        }}
                    >
                        Your Personal Tech Partner
                    </p>
                </div>

                {/* Cards Grid - Thin, Horizontal */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    {cards.map((card, index) => {
                        const Icon = card.icon;
                        const isHovered = hoveredCard === card.id;

                        return (
                            <button
                                key={card.id}
                                onClick={() => handleCardClick(card.mode, card.id)}
                                onMouseEnter={() => setHoveredCard(card.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                                className={`group relative px-4 py-5 sm:px-5 sm:py-6 rounded-xl border transition-all duration-500 text-left overflow-hidden ${isHovered
                                        ? card.color === 'institutional'
                                            ? 'border-institutional/50 bg-institutional/10 -translate-y-3 shadow-2xl shadow-institutional/25 scale-105'
                                            : card.color === 'creator'
                                                ? 'border-creator/50 bg-creator/10 -translate-y-3 shadow-2xl shadow-creator/25 scale-105'
                                                : card.color === 'purple'
                                                    ? 'border-purple-400/50 bg-purple-500/10 -translate-y-3 shadow-2xl shadow-purple-500/25 scale-105'
                                                    : 'border-white/30 bg-white/[0.08] -translate-y-3 shadow-2xl shadow-white/15 scale-105'
                                        : 'border-white/10 bg-white/[0.03]'
                                    }`}
                                style={{
                                    backdropFilter: 'blur(20px)',
                                    WebkitBackdropFilter: 'blur(20px)',
                                    transitionDelay: `${index * 80}ms`,
                                }}
                            >
                                {/* Gradient overlay */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''
                                        } ${card.color === 'institutional'
                                            ? 'from-institutional/20 via-institutional/10 to-transparent'
                                            : card.color === 'creator'
                                                ? 'from-creator/20 via-creator/10 to-transparent'
                                                : card.color === 'purple'
                                                    ? 'from-purple-500/20 via-purple-500/10 to-transparent'
                                                    : 'from-white/15 via-white/8 to-transparent'
                                        }`}
                                />

                                {/* Badge */}
                                {card.badge && (
                                    <div className="absolute top-2 right-2 z-20">
                                        <div className="px-2 py-0.5 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                                            <span className="text-[8px] font-medium text-purple-300 uppercase tracking-wider">
                                                Soon
                                            </span>
                                        </div>
                                    </div>
                                )}

                                <div className="relative z-10">
                                    {/* Icon - Alive Animation */}
                                    <div className="mb-4">
                                        <div
                                            className={`inline-flex p-2.5 rounded-xl transition-all duration-500 ${isHovered
                                                    ? card.color === 'institutional'
                                                        ? 'bg-institutional/20 text-institutional scale-110 rotate-6'
                                                        : card.color === 'creator'
                                                            ? 'bg-creator/20 text-creator scale-110 rotate-6'
                                                            : card.color === 'purple'
                                                                ? 'bg-purple-500/20 text-purple-300 scale-110 rotate-6'
                                                                : 'bg-white/15 text-white scale-110 rotate-6'
                                                    : 'bg-white/5 text-foreground/60'
                                                }`}
                                        >
                                            <Icon size={20} className="sm:w-6 sm:h-6" />
                                        </div>
                                    </div>

                                    {/* Title - Compact */}
                                    <h3 className="text-sm sm:text-base font-bold text-foreground mb-1 leading-tight">
                                        {card.title}
                                    </h3>

                                    {/* Subtitle - Small */}
                                    <p className="text-[11px] sm:text-xs text-foreground/50 mb-3">
                                        {card.subtitle}
                                    </p>

                                    {/* CTA - Minimal */}
                                    <div
                                        className={`inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-medium transition-all duration-300 ${isHovered
                                                ? card.color === 'institutional'
                                                    ? 'translate-x-1 text-institutional'
                                                    : card.color === 'creator'
                                                        ? 'translate-x-1 text-creator'
                                                        : card.color === 'purple'
                                                            ? 'translate-x-1 text-purple-300'
                                                            : 'translate-x-1 text-white'
                                                : 'text-foreground/40'
                                            }`}
                                    >
                                        {card.id === 4 ? 'Waitlist' : 'Start'}
                                        <ArrowRight className="w-3 h-3" />
                                    </div>
                                </div>

                                {/* Pulse glow */}
                                <div
                                    className={`absolute inset-0 rounded-xl transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'
                                        }`}
                                    style={{
                                        background:
                                            card.color === 'institutional'
                                                ? 'radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.1), transparent 70%)'
                                                : card.color === 'creator'
                                                    ? 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.1), transparent 70%)'
                                                    : card.color === 'purple'
                                                        ? 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.1), transparent 70%)'
                                                        : 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08), transparent 70%)',
                                    }}
                                />
                            </button>
                        );
                    })}
                </div>

                {/* Footer - Professional */}
                <div className="mt-16 sm:mt-20 lg:mt-24 text-center">
                    <p className="text-xs text-foreground/30 font-mono">
                        Quickserve IT © 2026
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LandingView;
