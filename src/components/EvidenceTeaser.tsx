import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface EvidenceTeaserProps {
    mode: 'institutional' | 'creator';
}

const EvidenceTeaser = ({ mode }: EvidenceTeaserProps) => {
    const navigate = useNavigate();
    const ref = useRef(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percentage);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging) {
            handleMove(e.clientX);
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (isDragging && e.touches[0]) {
            handleMove(e.touches[0].clientX);
        }
    };

    const handleStart = () => {
        setIsDragging(true);
    };

    const handleEnd = () => {
        setIsDragging(false);
    };

    const handleViewPortfolio = () => {
        navigate('/portfolio');
    };

    return (
        <section ref={ref} className="px-6 py-12 md:py-20">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="max-w-5xl mx-auto"
            >
                {/* Section Title */}
                <div className="text-center mb-8 md:mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={`
                            text-3xl md:text-4xl lg:text-5xl font-bold mb-4
                            ${mode === 'institutional' ? 'text-gradient-institutional' : 'text-gradient-creator'}
                        `}
                    >
                        From Chaos to Clarity
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-foreground/60 text-base md:text-lg"
                    >
                        Drag to see the transformation
                    </motion.p>
                </div>

                {/* Comparison Slider */}
                <div
                    ref={containerRef}
                    className="relative w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden cursor-ew-resize select-none"
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleEnd}
                    onMouseLeave={handleEnd}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleEnd}
                >
                    {/* Before Image (Raw/Chaotic) - Red Tint */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-background to-red-900/30">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center p-8">
                                <div className="text-red-400/60 text-sm md:text-base font-medium mb-2">BEFORE</div>
                                <div className="text-foreground/40 text-xs md:text-sm max-w-xs">
                                    {mode === 'institutional'
                                        ? 'Unorganized data, manual errors, time-consuming processes'
                                        : 'Raw footage, inconsistent pacing, basic editing'
                                    }
                                </div>
                            </div>
                        </div>
                        {/* Chaotic pattern overlay */}
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmVkIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] bg-repeat" />
                        </div>
                    </div>

                    {/* After Image (Polished) - Gold/Cyan Tint */}
                    <div
                        className={`
                            absolute inset-0 
                            ${mode === 'institutional'
                                ? 'bg-gradient-to-br from-yellow-950/40 via-background to-yellow-600/20'
                                : 'bg-gradient-to-br from-cyan-950/40 via-background to-cyan-500/20'
                            }
                        `}
                        style={{
                            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                        }}
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center p-8">
                                <div className={`
                                    text-sm md:text-base font-medium mb-2
                                    ${mode === 'institutional' ? 'text-institutional/80' : 'text-creator/80'}
                                `}>
                                    AFTER
                                </div>
                                <div className="text-foreground/70 text-xs md:text-sm max-w-xs">
                                    {mode === 'institutional'
                                        ? 'Streamlined workflows, 100% accuracy, instant results'
                                        : 'Professional edits, engaging pacing, premium quality'
                                    }
                                </div>
                            </div>
                        </div>
                        {/* Clean pattern overlay */}
                        <div className="absolute inset-0 opacity-10">
                            <div className={`
                                absolute inset-0 
                                ${mode === 'institutional'
                                    ? 'bg-[radial-gradient(circle_at_50%_50%,_rgba(234,179,8,0.1)_0%,_transparent_50%)]'
                                    : 'bg-[radial-gradient(circle_at_50%_50%,_rgba(34,211,238,0.1)_0%,_transparent_50%)]'
                                }
                            `} />
                        </div>
                    </div>

                    {/* Slider Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-1 cursor-ew-resize z-10"
                        style={{ left: `${sliderPosition}%` }}
                        onMouseDown={handleStart}
                        onTouchStart={handleStart}
                    >
                        {/* Vertical Line */}
                        <div className={`
                            absolute inset-0 
                            ${mode === 'institutional' ? 'bg-institutional' : 'bg-creator'}
                            shadow-lg
                        `} />

                        {/* Handle Circle - Large for mobile */}
                        <div
                            className={`
                                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                w-12 h-12 md:w-14 md:h-14
                                rounded-full
                                ${mode === 'institutional'
                                    ? 'bg-institutional shadow-[0_0_20px_rgba(234,179,8,0.5)]'
                                    : 'bg-creator shadow-[0_0_20px_rgba(34,211,238,0.5)]'
                                }
                                flex items-center justify-center
                                transition-transform duration-200
                                ${isDragging ? 'scale-110' : 'scale-100'}
                                hover:scale-110
                                touch-none
                            `}
                        >
                            {/* Arrows */}
                            <div className="flex items-center gap-0.5 text-background">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                </svg>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Teaser Text Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isDragging ? 0 : 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
                    >
                        <div className="backdrop-blur-md bg-background/60 px-4 py-2 rounded-full border border-foreground/10">
                            <p className="text-xs md:text-sm text-foreground/80 font-medium whitespace-nowrap">
                                👆 Drag to see the magic
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* View Portfolio Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-8 md:mt-12"
                >
                    <button
                        onClick={handleViewPortfolio}
                        className={`
                            group inline-flex items-center gap-3
                            px-6 md:px-8 py-3 md:py-4
                            rounded-full font-medium text-base md:text-lg
                            transition-all duration-500
                            hover:scale-105 active:scale-95
                            ${mode === 'institutional'
                                ? 'bg-institutional text-background hover:shadow-[0_8px_30px_rgba(234,179,8,0.3)]'
                                : 'bg-creator text-background hover:shadow-[0_8px_30px_rgba(34,211,238,0.3)]'
                            }
                        `}
                    >
                        View Full Portfolio
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default EvidenceTeaser;
