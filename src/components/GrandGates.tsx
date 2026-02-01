import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, LockOpen, Building2, Sparkles } from 'lucide-react';

interface GrandGatesProps {
    onEnter: (mode: 'institutional' | 'creator') => void;
}

const GrandGates = ({ onEnter }: GrandGatesProps) => {
    const [hoveredGate, setHoveredGate] = useState<'institutional' | 'creator' | null>(null);
    const [ripplePos, setRipplePos] = useState<{ x: number; y: number } | null>(null);

    const handleTouchStart = (e: React.TouchEvent, mode: 'institutional' | 'creator') => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const y = e.touches[0].clientY - rect.top;
        setRipplePos({ x, y });
        setTimeout(() => setRipplePos(null), 600);
    };

    return (
        <div className="w-full min-h-[50vh] md:min-h-[400px] flex flex-col md:flex-row relative">
            {/* GATE A: INSTITUTIONAL WING */}
            <motion.button
                onClick={() => onEnter('institutional')}
                onMouseEnter={() => setHoveredGate('institutional')}
                onMouseLeave={() => setHoveredGate(null)}
                onTouchStart={(e) => handleTouchStart(e, 'institutional')}
                className="relative overflow-hidden group cursor-pointer border-0 outline-none"
                style={{
                    flex: hoveredGate === 'institutional' ? 1.5 : hoveredGate === 'creator' ? 0.5 : 1,
                    transition: 'all 700ms cubic-bezier(0.25, 1, 0.5, 1)',
                }}
            >
                {/* Brushed Gold Base */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-950" />

                {/* Frosted Smart Glass Overlay */}
                <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-t from-black/40 via-transparent to-black/20" />

                {/* Warm Bottom-Up Glow */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                        boxShadow: '0 -20px 100px rgba(217, 119, 6, 0.2), inset 0 -50px 80px rgba(217, 119, 6, 0.1)',
                    }}
                />

                {/* Zoom Effect on Hover */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-amber-800/20 via-yellow-800/10 to-transparent"
                    animate={{
                        scale: hoveredGate === 'institutional' ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                />

                {/* Content Container */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center gap-6 md:gap-8 p-8">
                    {/* Lock Icon */}
                    <motion.div
                        animate={{
                            scale: hoveredGate === 'institutional' ? 1.1 : 1,
                            rotate: hoveredGate === 'institutional' ? 5 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                    >
                        {hoveredGate === 'institutional' ? (
                            <LockOpen
                                size={48}
                                className="text-amber-300 drop-shadow-[0_0_20px_rgba(251,191,36,0.6)]"
                                strokeWidth={1.5}
                            />
                        ) : (
                            <Lock
                                size={48}
                                className="text-amber-400/70"
                                strokeWidth={1.5}
                            />
                        )}
                    </motion.div>

                    {/* Typography - Serif, Wide Tracking */}
                    <div className="text-center space-y-2">
                        <h2
                            className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-b from-amber-200 via-yellow-100 to-amber-300 bg-clip-text text-transparent"
                            style={{
                                fontFamily: "'Playfair Display', 'Merriweather', serif",
                                letterSpacing: '0.15em',
                                textShadow: '0 0 40px rgba(251, 191, 36, 0.3)',
                            }}
                        >
                            INSTITUTIONAL
                        </h2>
                        <p className="text-amber-200/60 text-sm md:text-base tracking-wider font-light">
                            Schools & Organizations
                        </p>
                    </div>

                    {/* Icon Badge */}
                    <div className="absolute top-8 right-8 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                        <Building2 size={80} className="text-amber-300" strokeWidth={1} />
                    </div>
                </div>

                {/* Mobile Ripple Effect */}
                {ripplePos && (
                    <motion.div
                        className="absolute rounded-full bg-amber-300/30 pointer-events-none"
                        style={{
                            left: ripplePos.x,
                            top: ripplePos.y,
                            transform: 'translate(-50%, -50%)',
                        }}
                        initial={{ width: 0, height: 0, opacity: 0.6 }}
                        animate={{ width: 300, height: 300, opacity: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    />
                )}

                {/* Seam Glow (Left/Top Side) */}
                <div
                    className="absolute right-0 top-0 md:right-0 md:top-0 w-full md:w-1 h-1 md:h-full bg-gradient-to-r md:bg-gradient-to-b from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                        boxShadow: '0 0 20px rgba(251, 191, 36, 0.5)',
                    }}
                />
            </motion.button>

            {/* THE SEAM - Glowing Divider */}
            <div className="relative z-20">
                <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-1 h-1 md:h-full bg-gradient-to-r md:bg-gradient-to-b from-amber-400/30 via-white/50 to-cyan-400/30 transition-all duration-700"
                    style={{
                        width: hoveredGate ? '4px' : '2px',
                        boxShadow: hoveredGate
                            ? '0 0 30px rgba(255, 255, 255, 0.6)'
                            : '0 0 10px rgba(255, 255, 255, 0.3)',
                    }}
                />
            </div>

            {/* GATE B: CREATOR STUDIO */}
            <motion.button
                onClick={() => onEnter('creator')}
                onMouseEnter={() => setHoveredGate('creator')}
                onMouseLeave={() => setHoveredGate(null)}
                onTouchStart={(e) => handleTouchStart(e, 'creator')}
                className="relative overflow-hidden group cursor-pointer border-0 outline-none"
                style={{
                    flex: hoveredGate === 'creator' ? 1.5 : hoveredGate === 'institutional' ? 0.5 : 1,
                    transition: 'all 700ms cubic-bezier(0.25, 1, 0.5, 1)',
                }}
            >
                {/* Matte Carbon Fiber Base */}
                <div className="absolute inset-0 bg-neutral-950" />

                {/* Holographic Mesh Grid */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                    }}
                />

                {/* Sharp Top-Down Neon Cyan Spotlight */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                        boxShadow: '0 20px 100px rgba(6, 182, 212, 0.2), inset 0 50px 80px rgba(6, 182, 212, 0.1)',
                    }}
                />

                {/* Zoom Effect on Hover */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-cyan-800/10 to-transparent"
                    animate={{
                        scale: hoveredGate === 'creator' ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                />

                {/* Content Container */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center gap-6 md:gap-8 p-8">
                    {/* Lock Icon */}
                    <motion.div
                        animate={{
                            scale: hoveredGate === 'creator' ? 1.1 : 1,
                            rotate: hoveredGate === 'creator' ? -5 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                    >
                        {hoveredGate === 'creator' ? (
                            <LockOpen
                                size={48}
                                className="text-cyan-300 drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]"
                                strokeWidth={1.5}
                            />
                        ) : (
                            <Lock
                                size={48}
                                className="text-cyan-400/70"
                                strokeWidth={1.5}
                            />
                        )}
                    </motion.div>

                    {/* Typography - Sans Display, Tight Tracking */}
                    <div className="text-center space-y-2">
                        <h2
                            className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-b from-cyan-200 via-cyan-100 to-cyan-300 bg-clip-text text-transparent"
                            style={{
                                fontFamily: "'Space Grotesk', 'Syne', sans-serif",
                                letterSpacing: '-0.02em',
                                textShadow: '0 0 40px rgba(34, 211, 238, 0.3)',
                            }}
                        >
                            CREATOR STUDIO
                        </h2>
                        <p className="text-cyan-200/60 text-sm md:text-base tracking-wide font-light">
                            Portfolio & Personal Projects
                        </p>
                    </div>

                    {/* Icon Badge */}
                    <div className="absolute top-8 right-8 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                        <Sparkles size={80} className="text-cyan-300" strokeWidth={1} />
                    </div>
                </div>

                {/* Mobile Ripple Effect */}
                {ripplePos && (
                    <motion.div
                        className="absolute rounded-full bg-cyan-300/30 pointer-events-none"
                        style={{
                            left: ripplePos.x,
                            top: ripplePos.y,
                            transform: 'translate(-50%, -50%)',
                        }}
                        initial={{ width: 0, height: 0, opacity: 0.6 }}
                        animate={{ width: 300, height: 300, opacity: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    />
                )}

                {/* Seam Glow (Right/Bottom Side) */}
                <div
                    className="absolute left-0 bottom-0 md:left-0 md:bottom-0 w-full md:w-1 h-1 md:h-full bg-gradient-to-r md:bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                        boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)',
                    }}
                />
            </motion.button>
        </div>
    );
};

export default GrandGates;
