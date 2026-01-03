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
                    }, 800); // Match animation duration
                }, 300); // Brief pause at 100%
            }
        }, 80); // Update every 80ms

        return () => {
            clearInterval(progressInterval);
        };
    }, [onComplete]);

    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: isExiting ? '-100%' : 0 }}
            transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
            }}
            className="fixed inset-0 z-[100] bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center"
        >
            <div className="relative z-10 flex flex-col items-center gap-6">
                {/* Clean Percentage Counter */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                >
                    <h1 className="text-[clamp(4rem,12vw,9rem)] font-bold tracking-tight leading-none">
                        <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
                            {progress}
                        </span>
                        <span className="text-gray-500">%</span>
                    </h1>
                </motion.div>

                {/* Simple Progress Bar */}
                <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: '16rem' }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="h-1 bg-white/10 rounded-full relative overflow-hidden"
                >
                    <motion.div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-white/60 to-white rounded-full"
                        style={{
                            width: `${progress}%`,
                        }}
                        transition={{ duration: 0.15 }}
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};
