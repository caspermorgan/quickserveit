import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AudioWaveform = () => {
    const [bars] = useState(() => Array.from({ length: 30 }, (_, i) => i));

    return (
        <div className="fixed bottom-0 left-0 right-0 h-24 pointer-events-none overflow-hidden z-0">
            <div className="absolute inset-0 flex items-end justify-around gap-1 px-4">
                {bars.map((bar) => (
                    <motion.div
                        key={bar}
                        className="w-1 rounded-t-full"
                        style={{
                            background: 'linear-gradient(to top, #22D3EE, #06B6D4, #0EA5E9)',
                            boxShadow: '0 0 10px rgba(34, 211, 238, 0.5)',
                        }}
                        animate={{
                            height: ['20%', `${Math.random() * 80 + 20}%`, '20%'],
                        }}
                        transition={{
                            duration: 1.5 + Math.random() * 1,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: bar * 0.05,
                        }}
                    />
                ))}
            </div>

            {/* Glow effect at bottom */}
            <div
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{
                    background: 'linear-gradient(90deg, transparent, #22D3EE, transparent)',
                    boxShadow: '0 0 20px rgba(34, 211, 238, 0.6)',
                }}
            />
        </div>
    );
};

export default AudioWaveform;
