import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

interface StatsSectionProps {
    mode: 'institutional' | 'creator';
}

const StatsSection = ({ mode }: StatsSectionProps) => {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Mode-specific stats
    const institutionalStats = [
        { value: 500, suffix: '+', label: t('statsProjectsCompleted') },
        { value: 50, suffix: '+', label: t('statsInstitutionsServed') },
        { value: 98, suffix: '%', label: t('statsClientSatisfaction') },
        { value: 24, suffix: 'hr', label: t('statsResponseTime') },
    ];

    const creatorStats = [
        { value: 1000, suffix: '+', label: t('statsVideosEdited') },
        { value: 5, suffix: 'M+', label: t('statsWatchHours') },
        { value: 100, suffix: '+', label: t('statsCreatorsServed') },
        { value: 48, suffix: 'hr', label: t('statsTurnaroundTime') },
    ];

    const stats = mode === 'institutional' ? institutionalStats : creatorStats;

    return (
        <section
            ref={ref}
            className="relative py-20 md:py-24 px-6 overflow-hidden"
        >
            {/* Background gradient orb */}
            <div
                className={`gradient-orb ${mode === 'institutional' ? 'gradient-orb-institutional' : 'gradient-orb-creator'
                    } w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
            />

            <div className="relative max-w-7xl mx-auto">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                delay: index * 0.1
                            }}
                            className="text-center"
                        >
                            <StatCounter
                                value={stat.value}
                                suffix={stat.suffix}
                                isInView={isInView}
                                mode={mode}
                                delay={index * 0.1}
                            />
                            <p className="text-sm md:text-base text-foreground/50 mt-3 leading-tight">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

interface StatCounterProps {
    value: number;
    suffix: string;
    isInView: boolean;
    mode: 'institutional' | 'creator';
    delay: number;
}

const StatCounter = ({ value, suffix, isInView, mode, delay }: StatCounterProps) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

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
    }, [isInView, value, delay]);

    return (
        <div
            className={`stat-counter text-4xl md:text-5xl lg:text-6xl ${mode === 'institutional' ? 'text-gradient-institutional' : 'text-gradient-creator'
                }`}
        >
            {count}{suffix}
        </div>
    );
};

export default StatsSection;
