import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
    onComplete: () => void;
}

const LOADING_WORDS = ['INITIALIZING', 'ASSETS', 'SYSTEM', 'READY'];

export const Preloader = ({ onComplete }: PreloaderProps) => {
    const [progress, setProgress] = useState(0);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Cycle through loading words
        const wordInterval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % LOADING_WORDS.length);
        }, 200); // Fast word cycling

        // Progressive counter increment
        let currentProgress = 0;
        const progressInterval = setInterval(() => {
            if (currentProgress < 100) {
                // Fast increment at start, slower near end for realistic feel
                const increment = currentProgress < 70
                    ? Math.random() * 8 + 5  // Fast: 5-13% jumps
                    : Math.random() * 3 + 0.5; // Slow: 0.5-3.5% near end

                currentProgress = Math.min(100, currentProgress + increment);
                setProgress(Math.floor(currentProgress));
            } else {
                clearInterval(progressInterval);
                clearInterval(wordInterval);

                // Trigger exit animation after reaching 100%
                setTimeout(() => {
                    setIsExiting(true);
                    // Complete callback after slide-up animation
                    setTimeout(() => {
                        onComplete();
                    }, 800); // Match animation duration
                }, 300); // Brief pause at 100%
            }
        }, 80); // Update every 80ms

        return () => {
            clearInterval(progressInterval);
            clearInterval(wordInterval);
        };
    }, [onComplete]);

    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: isExiting ? '-100%' : 0 }}
            transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1], // Cubic-bezier as requested
            }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
            {/* Film grain overlay for premium feel */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuNSIvPjwvc3ZnPg==')]" />

            <div className="relative z-10 flex flex-col items-center gap-8">
                {/* Large Percentage Counter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <h1 className="text-[clamp(3rem,10vw,8rem)] font-display font-bold tracking-tighter leading-none">
                        <span className="bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent">
                            {progress}
                        </span>
                        <span className="bg-gradient-to-b from-gray-400 to-gray-600 bg-clip-text text-transparent">
                            %
                        </span>
                    </h1>

                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-r from-white/20 to-transparent -z-10" />
                </motion.div>

                {/* Cycling Loading Text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="relative h-8 overflow-hidden"
                >
                    <div className="flex flex-col items-center">
                        {LOADING_WORDS.map((word, index) => (
                            <motion.p
                                key={word}
                                initial={{ y: 0 }}
                                animate={{
                                    y: -(currentWordIndex * 32), // 32px = h-8
                                }}
                                transition={{
                                    duration: 0.15,
                                    ease: 'easeOut',
                                }}
                                className="h-8 flex items-center font-mono text-sm tracking-[0.3em] text-gray-400 uppercase"
                            >
                                {word}
                            </motion.p>
                        ))}
                    </div>
                </motion.div>

                {/* Minimalist Progress Bar */}
                <div className="w-64 h-px bg-white/10 mt-4 relative overflow-hidden">
                    <motion.div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-white/50 to-white"
                        style={{
                            width: `${progress}%`,
                        }}
                        transition={{ duration: 0.1 }}
                    />
                </div>
            </div>
        </motion.div>
    );
};
