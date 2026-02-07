import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
    onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
    const [progress, setProgress] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Progressive counter increment
        let currentProgress = 0;
        const progressInterval = setInterval(() => {
            if (currentProgress < 100) {
                // Fast increment at start, slower near end for smooth feel
                const increment = currentProgress < 70
                    ? Math.random() * 8 + 5  // Fast: 5-13% jumps
                    : Math.random() * 3 + 0.5; // Slow: 0.5-3.5% near end

                currentProgress = Math.min(100, currentProgress + increment);
                setProgress(Math.floor(currentProgress));
            } else {
                clearInterval(progressInterval);

                // Trigger exit animation after reaching 100%
                setTimeout(() => {
                    setIsExiting(true);
                    // Complete callback after slide-up animation
                    setTimeout(() => {
                        onComplete();
                    }, 1000); // Match animation duration
                }, 400); // Brief pause at 100%
            }
        }, 80); // Update every 80ms

        return () => {
            clearInterval(progressInterval);
        };
    }, [onComplete]);

    // Generate particles
    const particles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
    }));

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{
                opacity: isExiting ? 0 : 1,
                scale: isExiting ? 1.1 : 1,
            }}
            transition={{
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
            }}
            className="fixed inset-0 z-[100] overflow-hidden"
        >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
                {/* Animated gradient orbs */}
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 80, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"
                />
            </div>

            {/* Floating particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    initial={{
                        opacity: 0,
                        x: `${particle.x}vw`,
                        y: `${particle.y}vh`,
                    }}
                    animate={{
                        opacity: [0, 0.6, 0],
                        y: [`${particle.y}vh`, `${particle.y - 30}vh`, `${particle.y - 60}vh`],
                        scale: [0, 1, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "easeOut",
                    }}
                    className="absolute w-1 h-1 bg-white rounded-full"
                />
            ))}

            {/* Main content */}
            <div className="relative z-10 h-full flex items-center justify-center">
                <div className="flex flex-col items-center gap-8">
                    {/* Rotating rings around the counter */}
                    <div className="relative">
                        {/* Outer ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute inset-0 -m-20"
                        >
                            <div className="w-full h-full rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40 bg-clip-border"
                                style={{
                                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                    WebkitMaskComposite: 'xor',
                                    maskComposite: 'exclude',
                                    padding: '2px',
                                }}
                            />
                        </motion.div>

                        {/* Middle ring */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute inset-0 -m-14"
                        >
                            <div className="w-full h-full rounded-full border border-transparent bg-gradient-to-l from-cyan-500/30 via-blue-500/30 to-purple-500/30 bg-clip-border"
                                style={{
                                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                    WebkitMaskComposite: 'xor',
                                    maskComposite: 'exclude',
                                    padding: '1px',
                                }}
                            />
                        </motion.div>

                        {/* Pulsing glow effect */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute inset-0 -m-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"
                        />

                        {/* Percentage Counter */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.6,
                                type: "spring",
                                stiffness: 200,
                            }}
                            className="relative z-10"
                        >
                            <h1 className="text-[clamp(5rem,15vw,10rem)] font-bold tracking-tight leading-none">
                                <motion.span
                                    className="bg-gradient-to-br from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
                                    animate={{
                                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    style={{
                                        backgroundSize: '200% 200%',
                                    }}
                                >
                                    {progress}
                                </motion.span>
                                <span className="text-gray-400/60">%</span>
                            </h1>
                        </motion.div>
                    </div>

                    {/* Enhanced Progress Bar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="relative"
                    >
                        {/* Progress bar container */}
                        <div className="w-80 max-w-[90vw] h-2 bg-white/5 rounded-full relative overflow-hidden backdrop-blur-sm border border-white/10">
                            {/* Animated shimmer effect */}
                            <motion.div
                                animate={{
                                    x: ['-100%', '200%'],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            />

                            {/* Progress fill */}
                            <motion.div
                                className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                                style={{
                                    width: `${progress}%`,
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                }}
                            >
                                {/* Glow effect on progress */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-md opacity-60" />
                            </motion.div>
                        </div>

                        {/* Loading text */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="text-center mt-6 text-sm tracking-[0.3em] uppercase text-gray-400 font-light"
                        >
                            Loading Experience
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};
