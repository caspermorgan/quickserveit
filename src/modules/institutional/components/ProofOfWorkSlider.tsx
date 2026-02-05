import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const ProofOfWorkSlider = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = (x / rect.width) * 100;

        // Clamp between 0 and 100
        const clampedPercentage = Math.min(Math.max(percentage, 0), 100);
        setSliderPosition(clampedPercentage);
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (!isDragging) return;
        handleMove(e.touches[0].clientX);
    };

    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            document.addEventListener('touchmove', handleTouchMove);
            document.addEventListener('touchend', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <section className="relative py-20 md:py-24 px-6 overflow-hidden">
            {/* Background gradient orb */}
            <div className="gradient-orb gradient-orb-institutional w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />

            <div className="relative max-w-5xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        We turn chaos into clarity
                    </h2>
                    <p className="text-foreground/60 text-lg">
                        See the difference. Drag the slider to compare.
                    </p>
                </motion.div>

                {/* Comparison Slider */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    ref={containerRef}
                    className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-border/50 shadow-2xl cursor-col-resize select-none"
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleMouseDown}
                >
                    {/* After Image (Base Layer - Clean Typed PDF) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-6xl md:text-8xl mb-4">📄</div>
                            <p className="text-xl md:text-2xl font-semibold text-gray-800">
                                Clean Typed PDF
                            </p>
                            <p className="text-sm md:text-base text-gray-600 mt-2">
                                Professional, Print-Ready
                            </p>
                        </div>
                    </div>

                    {/* Before Image (Sliding Layer - Handwritten Rough Draft) */}
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center"
                        style={{
                            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                        }}
                    >
                        <div className="text-center">
                            <div className="text-6xl md:text-8xl mb-4">✍️</div>
                            <p className="text-xl md:text-2xl font-semibold text-white">
                                Handwritten Rough Draft
                            </p>
                            <p className="text-sm md:text-base text-gray-300 mt-2">
                                Raw, Unformatted
                            </p>
                        </div>
                    </div>

                    {/* Slider Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                        style={{ left: `${sliderPosition}%` }}
                    >
                        {/* Handle Circle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-primary/20 hover:border-primary/40 transition-all duration-300">
                            {/* Left/Right Arrows */}
                            <div className="flex items-center gap-1">
                                <svg
                                    className="w-4 h-4 md:w-5 md:h-5 text-primary"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                                <svg
                                    className="w-4 h-4 md:w-5 md:h-5 text-primary"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Labels */}
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                        <p className="text-white text-sm md:text-base font-medium">Before</p>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                        <p className="text-gray-800 text-sm md:text-base font-medium">After</p>
                    </div>
                </motion.div>

                {/* Bottom Caption */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-8"
                >
                    <p className="text-foreground/50 text-sm md:text-base">
                        <span className="text-gradient-institutional font-semibold">350+ exam papers</span> transformed from handwritten chaos to professional clarity
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ProofOfWorkSlider;
