import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Sparkles } from 'lucide-react';

interface GatewayCardsProps {
    onEnter: (mode: 'institutional' | 'creator') => void;
}

const GatewayCards = ({ onEnter }: GatewayCardsProps) => {
    const [hoveredCard, setHoveredCard] = useState<'institutional' | 'creator' | null>(null);

    const cards = [
        {
            id: 'institutional' as const,
            icon: Building2,
            title: 'Institute',
            subtitle: 'Schools & Organizations',
            accentColor: 'amber',
            borderClass: 'border-b-amber-500/50',
            hoverGlow: 'shadow-[0_0_40px_rgba(251,191,36,0.4)]',
            hoverBg: 'bg-amber-500/10',
            iconGlow: 'drop-shadow-[0_0_15px_rgba(251,191,36,0.6)]',
        },
        {
            id: 'creator' as const,
            icon: Sparkles,
            title: 'Creator',
            subtitle: 'Portfolio & Projects',
            accentColor: 'cyan',
            borderClass: 'border-b-cyan-500/50',
            hoverGlow: 'shadow-[0_0_40px_rgba(6,182,212,0.4)]',
            hoverBg: 'bg-cyan-500/10',
            iconGlow: 'drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]',
        },
    ];

    return (
        <div className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row gap-8 max-w-4xl w-full justify-center">
                {cards.map((card, index) => {
                    const Icon = card.icon;
                    const isHovered = hoveredCard === card.id;

                    return (
                        <motion.button
                            key={card.id}
                            onClick={() => onEnter(card.id)}
                            onMouseEnter={() => setHoveredCard(card.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className={`
                                relative overflow-hidden group
                                w-full md:w-[300px] h-[200px]
                                rounded-2xl
                                border border-white/10 ${card.borderClass}
                                transition-all duration-500 ease-out
                                ${isHovered ? 'scale-105' : 'scale-100'}
                                ${isHovered ? card.hoverGlow : ''}
                            `}
                            style={{
                                backdropFilter: isHovered ? 'blur(16px)' : 'blur(12px)',
                                WebkitBackdropFilter: isHovered ? 'blur(16px)' : 'blur(12px)',
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                opacity: { duration: 0.6, delay: index * 0.1 },
                                y: { duration: 0.6, delay: index * 0.1 },
                            }}
                        >
                            {/* Floating Animation Container */}
                            <motion.div
                                className="absolute inset-0"
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.5,
                                }}
                            >
                                {/* Base Glass Layer */}
                                <div className="absolute inset-0 bg-black/20" />

                                {/* Hover Gradient Overlay */}
                                <div
                                    className={`
                                        absolute inset-0 
                                        opacity-0 transition-opacity duration-500
                                        ${isHovered ? 'opacity-100' : ''}
                                        ${card.hoverBg}
                                    `}
                                />

                                {/* Content */}
                                <div className="relative z-10 h-full flex flex-col items-center justify-center gap-4 p-6">
                                    {/* Icon */}
                                    <motion.div
                                        animate={{
                                            scale: isHovered ? 1.1 : 1,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Icon
                                            size={48}
                                            className={`
                                                transition-all duration-500
                                                ${isHovered
                                                    ? `text-${card.accentColor}-300 ${card.iconGlow}`
                                                    : 'text-white/60'
                                                }
                                            `}
                                            strokeWidth={1.5}
                                        />
                                    </motion.div>

                                    {/* Text */}
                                    <div className="text-center space-y-1">
                                        <h3
                                            className={`
                                                text-2xl font-bold tracking-wide
                                                transition-all duration-500
                                                ${isHovered
                                                    ? `text-${card.accentColor}-100`
                                                    : 'text-white/80'
                                                }
                                            `}
                                        >
                                            {card.title}
                                        </h3>
                                        <p className="text-sm text-white/50 tracking-wider">
                                            {card.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Ambient Glow */}
                                <div
                                    className={`
                                        absolute inset-0 rounded-2xl
                                        opacity-0 transition-opacity duration-500
                                        ${isHovered ? 'opacity-100' : ''}
                                    `}
                                    style={{
                                        background:
                                            card.accentColor === 'amber'
                                                ? 'radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.15), transparent 70%)'
                                                : 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.15), transparent 70%)',
                                    }}
                                />
                            </motion.div>
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
};

export default GatewayCards;
