import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TwinMonolithsProps {
    onEnter: (mode: 'institutional' | 'creator') => void;
}

const TwinMonoliths = ({ onEnter }: TwinMonolithsProps) => {
    const [hoveredMonolith, setHoveredMonolith] = useState<'institutional' | 'creator' | null>(null);
    const institutionalRef = useRef<HTMLButtonElement>(null);
    const creatorRef = useRef<HTMLButtonElement>(null);

    // Magnetic cursor effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const institutionalX = useSpring(0, { stiffness: 150, damping: 15 });
    const institutionalY = useSpring(0, { stiffness: 150, damping: 15 });
    const creatorX = useSpring(0, { stiffness: 150, damping: 15 });
    const creatorY = useSpring(0, { stiffness: 150, damping: 15 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            // Magnetic pull for institutional monolith
            if (institutionalRef.current && hoveredMonolith === 'institutional') {
                const rect = institutionalRef.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const distanceX = e.clientX - centerX;
                const distanceY = e.clientY - centerY;
                const pullStrength = 0.15;
                institutionalX.set(distanceX * pullStrength);
                institutionalY.set(distanceY * pullStrength);
            } else {
                institutionalX.set(0);
                institutionalY.set(0);
            }

            // Magnetic pull for creator monolith
            if (creatorRef.current && hoveredMonolith === 'creator') {
                const rect = creatorRef.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const distanceX = e.clientX - centerX;
                const distanceY = e.clientY - centerY;
                const pullStrength = 0.15;
                creatorX.set(distanceX * pullStrength);
                creatorY.set(distanceY * pullStrength);
            } else {
                creatorX.set(0);
                creatorY.set(0);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [hoveredMonolith, mouseX, mouseY, institutionalX, institutionalY, creatorX, creatorY]);

    return (
        <div className="w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
            {/* Desktop: Side-by-side | Mobile: Stacked */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full max-w-7xl justify-center items-stretch">

                {/* INSTITUTIONAL MONOLITH - Brushed Antique Gold */}
                <motion.button
                    ref={institutionalRef}
                    onClick={() => onEnter('institutional')}
                    onMouseEnter={() => setHoveredMonolith('institutional')}
                    onMouseLeave={() => setHoveredMonolith(null)}
                    className="relative group flex-1 overflow-hidden rounded-lg"
                    style={{
                        height: 'clamp(400px, 60vh, 700px)',
                        x: institutionalX,
                        y: institutionalY,
                    }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    whileHover={{ scale: 1.02 }}
                >
                    {/* Base Material - Brushed Gold Metal */}
                    <div
                        className="absolute inset-0 transition-all duration-700"
                        style={{
                            background: hoveredMonolith === 'institutional'
                                ? 'linear-gradient(135deg, #B8860B 0%, #DAA520 50%, #B8860B 100%)'
                                : 'linear-gradient(135deg, #6B5D1F 0%, #8B7355 50%, #6B5D1F 100%)',
                        }}
                    />

                    {/* Brushed Metal Texture */}
                    <div
                        className="absolute inset-0 opacity-30"
                        style={{
                            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
                        }}
                    />

                    {/* Warm Glass Panel Overlay */}
                    <div
                        className="absolute inset-0 transition-all duration-700"
                        style={{
                            background: hoveredMonolith === 'institutional'
                                ? 'radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.4), transparent 70%)'
                                : 'radial-gradient(circle at 50% 50%, rgba(184, 134, 11, 0.1), transparent 70%)',
                            backdropFilter: 'blur(1px)',
                        }}
                    />

                    {/* Gear/Data Pattern (visible on hover) */}
                    {hoveredMonolith === 'institutional' && (
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.div
                                className="w-32 h-32 border-4 border-amber-300/30 rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                            >
                                <div className="absolute inset-0 border-t-4 border-amber-200/40 rounded-full" />
                                <div className="absolute inset-4 border-4 border-amber-400/20 rounded-full" />
                            </motion.div>
                        </motion.div>
                    )}

                    {/* Ambient Warm Glow */}
                    <div
                        className="absolute inset-0 transition-opacity duration-700"
                        style={{
                            boxShadow: hoveredMonolith === 'institutional'
                                ? '0 0 80px rgba(218, 165, 32, 0.6), inset 0 0 80px rgba(255, 215, 0, 0.2)'
                                : '0 0 30px rgba(184, 134, 11, 0.2), inset 0 0 30px rgba(139, 115, 85, 0.1)',
                        }}
                    />

                    {/* Light Spill Effect */}
                    {hoveredMonolith === 'institutional' && (
                        <motion.div
                            className="absolute -inset-8 -z-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                background: 'radial-gradient(circle at 50% 50%, rgba(218, 165, 32, 0.3), transparent 60%)',
                                filter: 'blur(40px)',
                            }}
                        />
                    )}

                    {/* Vibration Effect on Hover */}
                    {hoveredMonolith === 'institutional' && (
                        <motion.div
                            className="absolute inset-0"
                            animate={{
                                scale: [1, 1.002, 1],
                            }}
                            transition={{
                                duration: 0.1,
                                repeat: Infinity,
                                repeatType: 'reverse',
                            }}
                        />
                    )}

                    {/* Title - INSTITUTIONAL WING */}
                    <div className="absolute inset-0 flex items-end justify-center pb-12 lg:pb-16">
                        <motion.h2
                            className="font-serif text-3xl lg:text-4xl font-bold tracking-wider text-center transition-all duration-700"
                            style={{
                                color: hoveredMonolith === 'institutional' ? '#FFF' : '#D4AF37',
                                textShadow: hoveredMonolith === 'institutional'
                                    ? '0 0 30px rgba(255, 215, 0, 0.8), 0 4px 20px rgba(0, 0, 0, 0.5)'
                                    : '0 2px 10px rgba(0, 0, 0, 0.3)',
                                fontFamily: "'Playfair Display', serif",
                                letterSpacing: '0.1em',
                            }}
                            animate={{
                                y: hoveredMonolith === 'institutional' ? -10 : 0,
                            }}
                        >
                            INSTITUTIONAL<br />WING
                        </motion.h2>
                    </div>
                </motion.button>

                {/* CREATOR MONOLITH - Polished Dark Chrome + Cyan Neon */}
                <motion.button
                    ref={creatorRef}
                    onClick={() => onEnter('creator')}
                    onMouseEnter={() => setHoveredMonolith('creator')}
                    onMouseLeave={() => setHoveredMonolith(null)}
                    className="relative group flex-1 overflow-hidden rounded-lg"
                    style={{
                        height: 'clamp(400px, 60vh, 700px)',
                        x: creatorX,
                        y: creatorY,
                    }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                >
                    {/* Base Material - Dark Chrome */}
                    <div
                        className="absolute inset-0 transition-all duration-700"
                        style={{
                            background: hoveredMonolith === 'creator'
                                ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)'
                                : 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
                        }}
                    />

                    {/* Chrome Reflection */}
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)',
                        }}
                    />

                    {/* Cyan Light Strips */}
                    <div className="absolute inset-0 flex flex-col justify-around p-8">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="h-1 rounded-full transition-all duration-700"
                                style={{
                                    background: hoveredMonolith === 'creator'
                                        ? 'linear-gradient(90deg, transparent, #06b6d4, transparent)'
                                        : 'linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.2), transparent)',
                                    boxShadow: hoveredMonolith === 'creator'
                                        ? '0 0 20px rgba(6, 182, 212, 0.8)'
                                        : '0 0 5px rgba(6, 182, 212, 0.2)',
                                }}
                                animate={{
                                    opacity: hoveredMonolith === 'creator' ? [0.6, 1, 0.6] : 0.3,
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                }}
                            />
                        ))}
                    </div>

                    {/* Digital Glitch Effect (on hover) */}
                    {hoveredMonolith === 'creator' && (
                        <motion.div
                            className="absolute inset-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 0.3, 0] }}
                            transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 1 }}
                        >
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6, 182, 212, 0.1) 2px, rgba(6, 182, 212, 0.1) 4px)',
                                }}
                            />
                        </motion.div>
                    )}

                    {/* Faint Blue Pulse (dormant) */}
                    {hoveredMonolith !== 'creator' && (
                        <motion.div
                            className="absolute inset-0"
                            animate={{
                                opacity: [0.1, 0.2, 0.1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            style={{
                                background: 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.2), transparent 70%)',
                            }}
                        />
                    )}

                    {/* Electric Cyan Flare (awakened) */}
                    {hoveredMonolith === 'creator' && (
                        <motion.div
                            className="absolute inset-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                background: 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.4), transparent 60%)',
                                boxShadow: '0 0 100px rgba(6, 182, 212, 0.6), inset 0 0 100px rgba(6, 182, 212, 0.3)',
                            }}
                        />
                    )}

                    {/* Light Spill Effect */}
                    {hoveredMonolith === 'creator' && (
                        <motion.div
                            className="absolute -inset-8 -z-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                background: 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.3), transparent 60%)',
                                filter: 'blur(40px)',
                            }}
                        />
                    )}

                    {/* Vibration Effect on Hover */}
                    {hoveredMonolith === 'creator' && (
                        <motion.div
                            className="absolute inset-0"
                            animate={{
                                scale: [1, 1.002, 1],
                            }}
                            transition={{
                                duration: 0.1,
                                repeat: Infinity,
                                repeatType: 'reverse',
                            }}
                        />
                    )}

                    {/* Title - CREATOR STUDIO */}
                    <div className="absolute inset-0 flex items-end justify-center pb-12 lg:pb-16">
                        <motion.h2
                            className="font-display text-3xl lg:text-4xl font-bold tracking-wider text-center transition-all duration-700"
                            style={{
                                color: hoveredMonolith === 'creator' ? '#FFF' : '#06b6d4',
                                textShadow: hoveredMonolith === 'creator'
                                    ? '0 0 30px rgba(6, 182, 212, 0.8), 0 4px 20px rgba(0, 0, 0, 0.5)'
                                    : '0 2px 10px rgba(0, 0, 0, 0.3)',
                                letterSpacing: '0.15em',
                            }}
                            animate={{
                                y: hoveredMonolith === 'creator' ? -10 : 0,
                            }}
                        >
                            CREATOR<br />STUDIO
                        </motion.h2>
                    </div>
                </motion.button>
            </div>
        </div>
    );
};

export default TwinMonoliths;
