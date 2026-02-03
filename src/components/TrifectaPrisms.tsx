import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Video, User } from 'lucide-react';
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
            icon: Building2,
            borderColor: 'border-amber-500/20',
            hoverBorderColor: 'border-amber-500/60',
            glowColor: 'rgba(251, 191, 36, 0.3)',
            iconColor: 'text-amber-400',
            textColor: 'text-amber-200',
        },
        {
            id: 'creator' as const,
            label: t('creatorGateTitle'),
            subtitle: t('creatorGateDesc'),
            icon: Video,
            borderColor: 'border-cyan-500/20',
            hoverBorderColor: 'border-cyan-500/60',
            glowColor: 'rgba(6, 182, 212, 0.3)',
            iconColor: 'text-cyan-400',
            textColor: 'text-cyan-200',
        },
        {
            id: 'portfolio' as const,
            label: t('founderGateTitle'),
            subtitle: t('founderGateDesc'),
            icon: User,
            borderColor: 'border-violet-500/20',
            hoverBorderColor: 'border-violet-500/60',
            glowColor: 'rgba(139, 92, 246, 0.3)',
            iconColor: 'text-violet-400',
            textColor: 'text-violet-200',
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
        <div className="w-full max-w-5xl mx-auto px-4">
            {/* Desktop: 3 Columns | Mobile: Stacked */}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
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
                                bg-black/30 backdrop-blur-lg
                                border ${isHovered ? prism.hoverBorderColor : prism.borderColor}
                                transition-all duration-300 ease-out
                                h-20 lg:h-28
                                flex-1
                                group
                                rounded-lg
                            `}
                            style={{
                                boxShadow: isHovered
                                    ? `0 0 30px ${prism.glowColor}`
                                    : 'none',
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            {/* Desktop: Centered Column Layout */}
                            <div className="hidden lg:flex flex-col items-center justify-center h-full gap-3 px-4">
                                {/* Icon */}
                                <motion.div
                                    animate={{
                                        scale: isHovered ? 1.1 : 1,
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Icon
                                        className={`${prism.iconColor} transition-all duration-300`}
                                        size={28}
                                        strokeWidth={1.5}
                                    />
                                </motion.div>

                                {/* Text */}
                                <div className="flex flex-col items-center gap-1">
                                    <h3 className={`font-display font-semibold text-base ${prism.textColor} transition-all duration-300 text-center`}>
                                        {prism.label}
                                    </h3>
                                    <p className="text-white/50 text-xs font-light text-center">
                                        {prism.subtitle}
                                    </p>
                                </div>
                            </div>

                            {/* Mobile: Row Layout */}
                            <div className="flex lg:hidden items-center h-full gap-4 px-6">
                                {/* Icon */}
                                <Icon
                                    className={`${prism.iconColor} transition-all duration-300`}
                                    size={24}
                                    strokeWidth={1.5}
                                />

                                {/* Text */}
                                <div className="flex flex-col gap-0.5">
                                    <h3 className={`font-display font-semibold text-sm ${prism.textColor} transition-all duration-300`}>
                                        {prism.label}
                                    </h3>
                                    <p className="text-white/50 text-xs font-light">
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
                                    {[...Array(4)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className={`absolute w-0.5 h-0.5 rounded-full ${prism.iconColor.replace('text-', 'bg-')}`}
                                            style={{
                                                left: `${30 + Math.random() * 40}%`,
                                                top: `${30 + Math.random() * 40}%`,
                                            }}
                                            animate={{
                                                y: [0, -12, 0],
                                                opacity: [0, 0.6, 0],
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                delay: i * 0.3,
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
