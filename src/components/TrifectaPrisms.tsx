import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Play, Crown } from 'lucide-react';

interface TrifectaPrismsProps {
    onEnter: (mode: 'institutional' | 'creator') => void;
}

const TrifectaPrisms = ({ onEnter }: TrifectaPrismsProps) => {
    const [hoveredPrism, setHoveredPrism] = useState<'institutional' | 'creator' | 'portfolio' | null>(null);

    const prisms = [
        {
            id: 'institutional' as const,
            label: 'INSTITUTIONAL',
            icon: Building2,
            borderColor: 'border-amber-500/30',
            glowColor: 'rgba(251, 191, 36, 0.4)',
            shadowColor: 'rgba(251, 191, 36, 0.6)',
            iconColor: 'text-amber-400',
            textColor: 'text-amber-300',
        },
        {
            id: 'creator' as const,
            label: 'CREATOR STUDIO',
            icon: Play,
            borderColor: 'border-cyan-500/30',
            glowColor: 'rgba(6, 182, 212, 0.4)',
            shadowColor: 'rgba(6, 182, 212, 0.6)',
            iconColor: 'text-cyan-400',
            textColor: 'text-cyan-300',
        },
        {
            id: 'portfolio' as const,
            label: 'FOUNDER VISION',
            icon: Crown,
            borderColor: 'border-violet-500/30',
            glowColor: 'rgba(139, 92, 246, 0.4)',
            shadowColor: 'rgba(139, 92, 246, 0.6)',
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
        <div className="w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
            {/* Desktop: 3 Columns Side-by-Side | Mobile: 3 Rows Stacked */}
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 w-full max-w-7xl h-full">
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
                                bg-black/40 backdrop-blur-md
                                ${prism.borderColor.replace('/30', '/50')}
                                border-t-2
                                transition-all duration-500 ease-out
                                flex-1
                                h-20 lg:h-full
                                group
                                hover:bg-black/60
                            `}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                        >
                            {/* Ambient Glow on Hover */}
                            {isHovered && (
                                <motion.div
                                    className="absolute inset-0 -z-10"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        background: `radial-gradient(circle at 50% 0%, ${prism.glowColor}, transparent 70%)`,
                                        boxShadow: `0 -4px 40px ${prism.shadowColor}, inset 0 2px 40px ${prism.glowColor}`,
                                    }}
                                />
                            )}

                            {/* Content Container */}
                            <div className="relative h-full w-full flex items-center justify-center">
                                {/* Desktop: Icon + Title Centered Vertically */}
                                <div className="hidden lg:flex flex-col items-center justify-center gap-4">
                                    {/* Icon */}
                                    <motion.div
                                        animate={{
                                            scale: isHovered ? 1.15 : 1,
                                            y: isHovered ? -4 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Icon
                                            className={`${prism.iconColor} transition-all duration-300`}
                                            size={isHovered ? 56 : 48}
                                            strokeWidth={1.5}
                                        />
                                    </motion.div>

                                    {/* Title */}
                                    <motion.h3
                                        className={`
                                            font-display font-bold text-base tracking-[0.25em]
                                            ${prism.textColor}
                                            transition-all duration-300
                                            text-center
                                        `}
                                        style={{
                                            textShadow: isHovered
                                                ? `0 0 20px ${prism.shadowColor}`
                                                : 'none',
                                        }}
                                        animate={{
                                            y: isHovered ? 4 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {prism.label}
                                    </motion.h3>
                                </div>

                                {/* Mobile: Icon Left + Title Right (Row Layout) */}
                                <div className="flex lg:hidden items-center justify-start gap-4 px-6 w-full">
                                    {/* Icon */}
                                    <motion.div
                                        animate={{
                                            scale: isHovered ? 1.1 : 1,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Icon
                                            className={`${prism.iconColor} transition-all duration-300`}
                                            size={32}
                                            strokeWidth={1.5}
                                        />
                                    </motion.div>

                                    {/* Title */}
                                    <motion.h3
                                        className={`
                                            font-display font-bold text-sm tracking-[0.15em]
                                            ${prism.textColor}
                                            transition-all duration-300
                                        `}
                                        style={{
                                            textShadow: isHovered
                                                ? `0 0 20px ${prism.shadowColor}`
                                                : 'none',
                                        }}
                                        animate={{
                                            x: isHovered ? 4 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {prism.label}
                                    </motion.h3>
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
                                            className={`absolute w-0.5 h-0.5 rounded-full ${prism.iconColor.replace('text-', 'bg-')}`}
                                            style={{
                                                left: `${Math.random() * 100}%`,
                                                top: `${Math.random() * 100}%`,
                                            }}
                                            animate={{
                                                y: [0, -15, 0],
                                                opacity: [0, 0.8, 0],
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                delay: i * 0.2,
                                            }}
                                        />
                                    ))}
                                </motion.div>
                            )}

                            {/* Top Border Highlight on Hover */}
                            <motion.div
                                className={`absolute top-0 left-0 right-0 h-0.5 ${prism.iconColor.replace('text-', 'bg-')}`}
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: isHovered ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                style={{ transformOrigin: 'center' }}
                            />
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
};

export default TrifectaPrisms;
