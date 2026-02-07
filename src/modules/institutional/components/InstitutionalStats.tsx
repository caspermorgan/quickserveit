import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, Building2, CheckCircle2, Users, Video, Sparkles, TrendingUp } from 'lucide-react';

interface StatItemProps {
    icon: React.ElementType;
    value: number;
    suffix?: string;
    label: string;
    delay: number;
    mode?: 'institutional' | 'creator' | 'portfolio';
}

const StatItem = ({ icon: Icon, value, suffix = '', label, delay, mode = 'institutional' }: StatItemProps) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = value / steps;
        const stepDuration = duration / steps;

        let currentStep = 0;
        const timer = setInterval(() => {
            currentStep++;
            if (currentStep <= steps) {
                setCount(Math.min(Math.floor(increment * currentStep), value));
            } else {
                setCount(value);
                clearInterval(timer);
            }
        }, stepDuration);

        return () => clearInterval(timer);
    }, [isInView, value]);

    const themeColor = mode === 'institutional' ? 'institutional' : 'creator';

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay }}
            className="group relative"
        >
            <div className={`relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:bg-white/[0.06] hover:border-${themeColor}/30 hover:shadow-lg hover:shadow-${themeColor}/10`}>
                {/* Icon */}
                <div className={`mb-4 inline-flex p-3 rounded-xl bg-${themeColor}/10 border border-${themeColor}/20 transition-all duration-500 group-hover:bg-${themeColor}/20 group-hover:scale-110`}>
                    <Icon className={`w-6 h-6 text-${themeColor}`} strokeWidth={1.5} />
                </div>

                {/* Value */}
                <div className="mb-2">
                    <span className="text-4xl sm:text-5xl font-bold text-foreground font-display tracking-tight">
                        {count}{suffix}
                    </span>
                </div>

                {/* Label */}
                <p className="text-sm sm:text-base text-foreground/60 font-medium">
                    {label}
                </p>

                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${themeColor}/5 via-transparent to-transparent`} />
                </div>
            </div>
        </motion.div>
    );
};

interface InstitutionalStatsProps {
    mode?: 'institutional' | 'creator' | 'portfolio';
}

const InstitutionalStats = ({ mode = 'institutional' }: InstitutionalStatsProps) => {
    // Mode-specific stats
    const institutionalStats = [
        {
            icon: Building2,
            value: 2,
            suffix: '+',
            label: 'Schools Served',
            delay: 0.1
        },
        {
            icon: FileText,
            value: 350,
            suffix: '+',
            label: 'Papers Typed',
            delay: 0.2
        },
        {
            icon: CheckCircle2,
            value: 170,
            suffix: '+',
            label: 'Daily Tasks Completed',
            delay: 0.3
        },
        {
            icon: Users,
            value: 100,
            suffix: '%',
            label: 'Client Satisfaction',
            delay: 0.4
        }
    ];

    const creatorStats = [
        {
            icon: Video,
            value: 50,
            suffix: '+',
            label: 'Videos Edited',
            delay: 0.1
        },
        {
            icon: Sparkles,
            value: 100,
            suffix: '+',
            label: 'Thumbnails Created',
            delay: 0.2
        },
        {
            icon: TrendingUp,
            value: 85,
            suffix: '%',
            label: 'Average CTR Boost',
            delay: 0.3
        },
        {
            icon: Users,
            value: 100,
            suffix: '%',
            label: 'Creator Satisfaction',
            delay: 0.4
        }
    ];

    const stats = mode === 'institutional' ? institutionalStats : creatorStats;
    const themeColor = mode === 'institutional' ? 'institutional' : 'creator';
    const title = mode === 'institutional' ? 'Trusted by Institutions' : 'Trusted by Creators';
    const subtitle = mode === 'institutional'
        ? 'Building confidence through consistent delivery and measurable results'
        : 'Helping content creators grow with professional video production';
    const badge = mode === 'institutional'
        ? 'Serving educational institutions since 2023'
        : 'Empowering content creators since 2023';

    return (
        <section className="relative px-6 py-16 sm:py-20 md:py-24 overflow-hidden">
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-b from-background via-${themeColor}/[0.02] to-background`} />

            {/* Decorative elements */}
            <div className={`absolute top-1/2 left-1/4 w-96 h-96 bg-${themeColor}/5 rounded-full blur-3xl opacity-30`} />
            <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-${themeColor}/5 rounded-full blur-3xl opacity-20`} />

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 text-gradient-${themeColor}`}>
                        {title}
                    </h2>
                    <p className="text-base sm:text-lg text-foreground/60 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {stats.map((stat, index) => (
                        <StatItem key={index} {...stat} mode={mode} />
                    ))}
                </div>

                {/* Trust Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-12 text-center"
                >
                    <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-${themeColor}/10 border border-${themeColor}/20`}>
                        <CheckCircle2 className={`w-4 h-4 text-${themeColor}`} />
                        <span className="text-sm font-medium text-foreground/80">
                            {badge}
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default InstitutionalStats;
