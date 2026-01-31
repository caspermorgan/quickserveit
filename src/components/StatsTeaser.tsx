import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, Users, Target } from 'lucide-react';

interface StatsTeaserProps {
    mode: 'institutional' | 'creator';
}

interface StatItem {
    value: number;
    suffix: string;
    label: string;
    tooltip: string;
    icon: React.ReactNode;
}

const StatsTeaser = ({ mode }: StatsTeaserProps) => {
    const navigate = useNavigate();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    // Mode-specific stats
    const institutionalStats: StatItem[] = [
        {
            value: 160,
            suffix: '+',
            label: 'Papers Typed',
            tooltip: 'See our track record',
            icon: <TrendingUp className="w-5 h-5" />
        },
        {
            value: 2,
            suffix: '+',
            label: 'School Partners',
            tooltip: 'See our track record',
            icon: <Users className="w-5 h-5" />
        },
        {
            value: 100,
            suffix: '%',
            label: 'Accuracy',
            tooltip: 'See our track record',
            icon: <Target className="w-5 h-5" />
        },
    ];

    const creatorStats: StatItem[] = [
        {
            value: 0,
            suffix: '',
            label: 'Studio Active',
            tooltip: 'See our portfolio',
            icon: <TrendingUp className="w-5 h-5" />
        },
        {
            value: 0,
            suffix: '',
            label: 'Beta Access Open',
            tooltip: 'See our portfolio',
            icon: <Users className="w-5 h-5" />
        },
        {
            value: 24,
            suffix: 'h',
            label: 'Turnaround',
            tooltip: 'See our portfolio',
            icon: <Target className="w-5 h-5" />
        },
    ];

    const stats = mode === 'institutional' ? institutionalStats : creatorStats;
    const targetPath = mode === 'institutional' ? '/about' : '/portfolio';

    const handleClick = () => {
        navigate(targetPath);
    };

    return (
        <section ref={ref} className="px-6 py-12 md:py-16">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                onClick={handleClick}
                className={`
                    group relative max-w-5xl mx-auto
                    backdrop-blur-xl bg-background/40 
                    border border-foreground/10
                    rounded-2xl md:rounded-3xl
                    p-6 md:p-8
                    cursor-pointer
                    transition-all duration-500
                    hover:scale-[1.02]
                    hover:shadow-2xl
                    ${mode === 'institutional'
                        ? 'hover:shadow-institutional/20 hover:border-institutional/30'
                        : 'hover:shadow-creator/20 hover:border-creator/30'
                    }
                `}
            >
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent rounded-2xl md:rounded-3xl pointer-events-none" />

                {/* Stats Grid */}
                <div className="relative grid grid-cols-3 gap-4 md:gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="group/stat relative text-center"
                        >
                            {/* Tooltip */}
                            <div className={`
                                absolute -top-12 left-1/2 -translate-x-1/2
                                px-3 py-1.5 rounded-lg
                                bg-background/95 backdrop-blur-sm
                                border ${mode === 'institutional' ? 'border-institutional/30' : 'border-creator/30'}
                                text-xs font-medium whitespace-nowrap
                                opacity-0 group-hover/stat:opacity-100
                                transition-opacity duration-300
                                pointer-events-none
                                z-10
                            `}>
                                {stat.tooltip}
                                <div className={`
                                    absolute -bottom-1 left-1/2 -translate-x-1/2
                                    w-2 h-2 rotate-45
                                    ${mode === 'institutional' ? 'bg-institutional/30' : 'bg-creator/30'}
                                    border-r border-b
                                    ${mode === 'institutional' ? 'border-institutional/30' : 'border-creator/30'}
                                `} />
                            </div>

                            {/* Icon */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : {}}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 200
                                }}
                                className={`
                                    inline-flex items-center justify-center
                                    w-10 h-10 md:w-12 md:h-12
                                    rounded-full mb-3
                                    ${mode === 'institutional'
                                        ? 'bg-institutional/10 text-institutional'
                                        : 'bg-creator/10 text-creator'
                                    }
                                    group-hover/stat:scale-110
                                    transition-transform duration-300
                                `}
                            >
                                {stat.icon}
                            </motion.div>

                            {/* Counter */}
                            <StatCounter
                                value={stat.value}
                                suffix={stat.suffix}
                                isInView={isInView}
                                mode={mode}
                                delay={index * 0.1}
                                label={stat.label}
                            />

                            {/* Label */}
                            <p className="text-xs md:text-sm text-foreground/60 mt-2 leading-tight">
                                {stat.label}
                            </p>

                            {/* Hover glow */}
                            <div className={`
                                absolute inset-0 rounded-lg
                                ${mode === 'institutional'
                                    ? 'bg-institutional/5'
                                    : 'bg-creator/5'
                                }
                                opacity-0 group-hover/stat:opacity-100
                                transition-opacity duration-500
                                pointer-events-none
                            `} />
                        </div>
                    ))}
                </div>

                {/* Click hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-2 right-4 text-xs text-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    Click to explore →
                </motion.div>
            </motion.div>
        </section>
    );
};

interface StatCounterProps {
    value: number;
    suffix: string;
    isInView: boolean;
    mode: 'institutional' | 'creator';
    delay: number;
    label: string;
}

const StatCounter = ({ value, suffix, isInView, mode, delay, label }: StatCounterProps) => {
    const [count, setCount] = useState(0);

    // Special handling for "Studio Active" and "Beta Access Open"
    const isSpecialLabel = label === 'Studio Active' || label === 'Beta Access Open';

    useEffect(() => {
        if (!isInView || isSpecialLabel) return;

        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = value / steps;
        const stepDuration = duration / steps;

        let currentStep = 0;
        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                currentStep++;
                setCount(Math.min(Math.floor(increment * currentStep), value));

                if (currentStep >= steps) {
                    clearInterval(interval);
                    setCount(value);
                }
            }, stepDuration);

            return () => clearInterval(interval);
        }, delay * 1000);

        return () => clearTimeout(timer);
    }, [isInView, value, delay, isSpecialLabel]);

    return (
        <div
            className={`
                text-2xl md:text-3xl lg:text-4xl font-bold
                ${mode === 'institutional' ? 'text-gradient-institutional' : 'text-gradient-creator'}
            `}
        >
            {isSpecialLabel ? label : `${count}${suffix}`}
        </div>
    );
};

export default StatsTeaser;
