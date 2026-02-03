import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface SystemBootProps {
    onBootComplete: () => void;
}

const SystemBoot = ({ onBootComplete }: SystemBootProps) => {
    const [progress, setProgress] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Simulate boot sequence with smooth progress
        const duration = 2500; // 2.5 seconds total
        const interval = 20; // Update every 20ms
        const steps = duration / interval;
        const increment = 100 / steps;

        let currentProgress = 0;
        const timer = setInterval(() => {
            currentProgress += increment;
            if (currentProgress >= 100) {
                currentProgress = 100;
                clearInterval(timer);
                // Start exit animation after reaching 100%
                setTimeout(() => {
                    setIsExiting(true);
                    // Call onBootComplete after split animation starts
                    setTimeout(() => {
                        onBootComplete();
                    }, 800); // Match split animation duration
                }, 300); // Brief pause at 100%
            }
            setProgress(currentProgress);
        }, interval);

        return () => clearInterval(timer);
    }, [onBootComplete]);

    return (
        <AnimatePresence>
            {!isExiting ? (
                <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden">
                    {/* Counter */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-16">
                        <motion.div
                            className="font-mono text-4xl md:text-5xl font-bold tracking-wider"
                            style={{
                                background: 'linear-gradient(90deg, #EAB308 0%, #06B6D4 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {Math.floor(progress).toString().padStart(2, '0')}
                        </motion.div>
                    </div>

                    {/* Loading Line Container */}
                    <div className="w-full max-w-md px-8">
                        <motion.div
                            className="h-0.5 relative overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {/* Background line */}
                            <div className="absolute inset-0 bg-white/5" />

                            {/* Progress line with gradient */}
                            <motion.div
                                className="absolute inset-y-0 left-0"
                                style={{
                                    background: 'linear-gradient(90deg, #EAB308 0%, #06B6D4 100%)',
                                    boxShadow: '0 0 20px rgba(234, 179, 8, 0.5), 0 0 40px rgba(6, 182, 212, 0.3)',
                                }}
                                initial={{ width: '0%' }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.1, ease: 'linear' }}
                            />
                        </motion.div>

                        {/* Subtle glow effect */}
                        <motion.div
                            className="h-8 -mt-4 blur-xl opacity-30"
                            style={{
                                background: 'linear-gradient(90deg, #EAB308 0%, #06B6D4 100%)',
                            }}
                            initial={{ width: '0%' }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.1, ease: 'linear' }}
                        />
                    </div>

                    {/* System text */}
                    <motion.div
                        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <div className="font-mono text-xs text-white/30 uppercase tracking-[0.3em]">
                            Initializing System
                        </div>
                    </motion.div>
                </div>
            ) : (
                // Split screen exit animation
                <>
                    {/* Left half */}
                    <motion.div
                        className="fixed top-0 left-0 bottom-0 w-1/2 bg-black z-[9999]"
                        initial={{ x: 0 }}
                        animate={{ x: '-100%' }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    />
                    {/* Right half */}
                    <motion.div
                        className="fixed top-0 right-0 bottom-0 w-1/2 bg-black z-[9999]"
                        initial={{ x: 0 }}
                        animate={{ x: '100%' }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    />
                </>
            )}
        </AnimatePresence>
    );
};

export default SystemBoot;
