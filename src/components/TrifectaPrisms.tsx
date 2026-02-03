import { useState } from 'react';
import { motion } from 'framer-motion';
import { Landmark, Zap, User } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

interface TrifectaPrismsProps {
    onEnter: (mode: 'institutional' | 'creator') => void;
}

const TrifectaPrisms = ({ onEnter }: TrifectaPrismsProps) => {
    const { t } = useTranslation();
    const [hoveredPrism, setHoveredPrism] = useState<'institutional' | 'creator' | 'portfolio' | null>(null);

    const prisms = [
        {
            id: 'institutional' as const,
            label: t('instituteGateTitle'),
            subtitle: t('instituteGateDesc'),
            icon: Landmark,
            borderColor: 'border-amber-500/10',
            hoverBorderColor: 'border-amber-500/60',
            glowColor: 'rgba(251, 191, 36, 0.4)',
            iconColor: 'text-amber-400',
            textColor: 'text-amber-300',
        },
        {
            id: 'creator' as const,
            label: t('creatorGateTitle'),
            subtitle: t('creatorGateDesc'),
            icon: Zap,
            borderColor: 'border-cyan-500/10',
            hoverBorderColor: 'border-cyan-500/60',
            glowColor: 'rgba(6, 182, 212, 0.4)',
            iconColor: 'text-cyan-400',
            textColor: 'text-cyan-300',
        },
        {
            id: 'portfolio' as const,
            label: t('founderGateTitle'),
            subtitle: t('founderGateDesc'),
            icon: User,
            borderColor: 'border-violet-500/10',
            hoverBorderColor: 'border-violet-500/60',
            glowColor: 'rgba(139, 92, 246, 0.4)',
            iconColor: 'text-violet-400',
            textColor: 'text-violet-300',
        },
    ];

    const handlePrismClick = (id: 'institutional' | 'creator' | 'portfolio') => {
        if (id === 'institutional' || id === 'creator') {
            onEnter(id);
        } else {
            // For portfolio, we could navigate to a different route or show a message
            console.log('Portfolio clicked - implement navigation');
        }
    };

    return (
        <div className="w-full max-w-lg mx-auto">
            {/* Vertical Stack with Breathing Room */}
            <div className="flex flex-col gap-4">
                {prisms.map((prism, index) => {
                    const isHovered = hoveredPrism === prism.id;
                    const Icon = prism.icon;

                    return (
                        <motion.button
                            key={prism.id}
                            onClick={() => handlePrismClick(prism.id)}
                            onMouseEnter={() => setHoveredPrism(prism.id)}
                            onMouseLeave={() => setHoveredPrism(null)}
                            className={`
                                relative overflow-hidden
                                bg-black/40 backdrop-blur-xl
                                border ${isHovered ? prism.hoverBorderColor : prism.borderColor}
                                transition-all duration-300 ease-out
                                h-24 lg:h-32
                                group
                                rounded-sm
                            `}
                            style={{
                                boxShadow: isHovered
                                    ? `inset 0 0 40px ${prism.glowColor}, 0 0 30px ${prism.glowColor}`
                                    : 'none',
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            {/* Content Container - Flex Row, Centered & Balanced */}
                            <div className="relative h-full w-full flex items-center justify-between px-6 lg:px-8">
                                {/* Icon - Left Aligned */}
                                <motion.div
                                    animate={{
                                        scale: isHovered ? 1.15 : 1,
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Icon
                                        className={`${prism.iconColor} transition-all duration-300`}
                                        size={32}
                                        strokeWidth={1.5}
                                    />
                                </motion.div>

                                {/* Text - Right Side, Stacked */}
                                <div className="flex flex-col items-end justify-center gap-1 flex-1 ml-6">
                                    {/* Title */}
                                    <motion.h3
                                        className={`
                                            font-display font-bold text-xl lg:text-2xl tracking-wide
                                            ${prism.textColor}
                                            transition-all duration-300
                                            text-right
                                        `}
                                        style={{
                                            fontFamily: 'Space Grotesk, sans-serif',
                                        }}
                                        animate={{
                                            x: isHovered ? -2 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {prism.label}
                                    </motion.h3>

                                    {/* Subtitle */}
                                    <p className="text-white/60 text-sm lg:text-base font-light text-right">
                                        {prism.subtitle}
                                    </p>
                                </div>
                            </div>

                            {/* Subtle Particle Effect on Hover */}
                            {isHovered && (
                                <motion.div
                                    className="absolute inset-0 pointer-events-none"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    {[...Array(6)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className={`absolute w-1 h-1 rounded-full ${prism.iconColor.replace('text-', 'bg-')}`}
                                            style={{
                                                left: `${20 + Math.random() * 60}%`,
                                                top: `${20 + Math.random() * 60}%`,
                                            }}
                                            animate={{
                                                y: [0, -15, 0],
                                                opacity: [0, 0.8, 0],
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                delay: i * 0.25,
                                            }}
                                        />
                                    ))}
                                </motion.div>
                            )}
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
};

export default TrifectaPrisms;
