import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const RotatingGlobe = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation((prev) => (prev + 0.5) % 360);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hidden lg:block relative w-64 h-64 mx-auto">
            <div
                className="absolute inset-0"
                style={{
                    perspective: '1000px',
                }}
            >
                <div
                    className="w-full h-full relative"
                    style={{
                        transformStyle: 'preserve-3d',
                        transform: `rotateY(${rotation}deg)`,
                        transition: 'transform 0.05s linear',
                    }}
                >
                    <svg
                        viewBox="0 0 200 200"
                        className="w-full h-full"
                        style={{
                            filter: 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.3))',
                        }}
                    >
                        {/* Outer circle */}
                        <circle
                            cx="100"
                            cy="100"
                            r="90"
                            fill="none"
                            stroke="rgba(34, 211, 238, 0.3)"
                            strokeWidth="0.5"
                        />

                        {/* Latitude lines */}
                        {[30, 60, 90, 120, 150].map((y) => (
                            <ellipse
                                key={`lat-${y}`}
                                cx="100"
                                cy="100"
                                rx="90"
                                ry={Math.abs(90 - y) * 0.6}
                                fill="none"
                                stroke="rgba(34, 211, 238, 0.2)"
                                strokeWidth="0.3"
                                strokeDasharray="2,2"
                            />
                        ))}

                        {/* Longitude lines */}
                        {[0, 30, 60, 90, 120, 150].map((angle) => (
                            <ellipse
                                key={`lon-${angle}`}
                                cx="100"
                                cy="100"
                                rx="90"
                                ry="90"
                                fill="none"
                                stroke="rgba(34, 211, 238, 0.2)"
                                strokeWidth="0.3"
                                strokeDasharray="2,2"
                                transform={`rotate(${angle} 100 100)`}
                            />
                        ))}

                        {/* Center point (Gorakhpur HQ) */}
                        <motion.circle
                            cx="100"
                            cy="100"
                            r="3"
                            fill="#22D3EE"
                            animate={{
                                r: [3, 5, 3],
                                opacity: [1, 0.6, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />

                        {/* Connection lines radiating from center */}
                        {[
                            { x: 40, y: 50 },   // North America
                            { x: 160, y: 60 },  // Asia
                            { x: 120, y: 140 }, // Australia
                            { x: 60, y: 130 },  // South America
                            { x: 110, y: 70 },  // Europe
                        ].map((point, i) => (
                            <g key={`connection-${i}`}>
                                <motion.line
                                    x1="100"
                                    y1="100"
                                    x2={point.x}
                                    y2={point.y}
                                    stroke="#22D3EE"
                                    strokeWidth="0.5"
                                    strokeDasharray="2,2"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{
                                        pathLength: [0, 1],
                                        opacity: [0, 0.6, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: i * 0.6,
                                        ease: 'easeInOut',
                                    }}
                                />
                                {/* Traveling dot */}
                                <motion.circle
                                    r="1.5"
                                    fill="#22D3EE"
                                    animate={{
                                        cx: [100, point.x],
                                        cy: [100, point.y],
                                        opacity: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: i * 0.6,
                                        ease: 'easeInOut',
                                    }}
                                />
                            </g>
                        ))}

                        {/* Glow effect */}
                        <circle
                            cx="100"
                            cy="100"
                            r="90"
                            fill="none"
                            stroke="rgba(34, 211, 238, 0.1)"
                            strokeWidth="10"
                            filter="blur(5px)"
                        />
                    </svg>
                </div>
            </div>

            {/* Label */}
            <div className="absolute -bottom-8 left-0 right-0 text-center">
                <p className="text-xs text-creator/60 font-mono">GORAKHPUR HQ</p>
            </div>
        </div>
    );
};

export default RotatingGlobe;
