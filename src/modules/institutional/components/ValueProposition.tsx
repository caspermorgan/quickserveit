import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Shield, Clock, Heart, Zap } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { H2, BodyLarge, H4, BodySmall } from '@/modules/core/components/Typography';
import { useRef, useState } from 'react';

interface ValuePropositionProps {
    mode: 'institutional' | 'creator';
}

const ValueProposition = ({ mode }: ValuePropositionProps) => {
    const { t } = useTranslation();

    const values = mode === 'institutional'
        ? [
            {
                icon: Shield,
                titleKey: 'valueSecurityTitle',
                descKey: 'valueSecurityDesc',
            },
            {
                icon: Clock,
                titleKey: 'valueTimelyTitle',
                descKey: 'valueTimelyDesc',
            },
            {
                icon: Heart,
                titleKey: 'valuePersonalTitle',
                descKey: 'valuePersonalDesc',
            },
            {
                icon: Zap,
                titleKey: 'valueReliableTitle',
                descKey: 'valueReliableDesc',
            }
        ]
        : [
            {
                icon: Zap,
                titleKey: 'valueQualityTitle',
                descKey: 'valueQualityDesc',
            },
            {
                icon: Clock,
                titleKey: 'valueFastTitle',
                descKey: 'valueFastDesc',
            },
            {
                icon: Heart,
                titleKey: 'valueCreativeTitle',
                descKey: 'valueCreativeDesc',
            },
            {
                icon: Shield,
                titleKey: 'valueCommittedTitle',
                descKey: 'valueCommittedDesc',
            }
        ];

    return (
        <section className="py-16 md:py-32 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Brand Name & Tagline Header - Mobile Only */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:hidden"
                >
                    <h2 className={`text-2xl font-display font-semibold mb-2 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>
                        {t('brandName')}
                    </h2>
                    <p className="text-sm text-foreground/50">
                        {mode === 'institutional' ? t('brandTaglineInstitutional') : t('brandTaglineCreator')}
                    </p>
                </motion.div>

                {/* Section Header - Desktop */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16 hidden md:block"
                >
                    <H2 className="mb-4">
                        {t('whyChooseUsTitle')}
                    </H2>
                    <BodyLarge className="text-foreground/60 max-w-2xl mx-auto">
                        {t('whyChooseUsSubtitle')}
                    </BodyLarge>
                </motion.div>

                {/* Mobile: List Format */}
                <div className="md:hidden space-y-4">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <motion.div
                                key={value.titleKey}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                            >
                                <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${mode === 'institutional'
                                    ? 'bg-institutional/10'
                                    : 'bg-creator/10'
                                    }`}>
                                    <Icon className={`w-6 h-6 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-base font-semibold text-foreground mb-1">
                                        {t(value.titleKey as any)}
                                    </h4>
                                    <p className="text-sm text-foreground/60 leading-relaxed">
                                        {t(value.descKey as any)}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Desktop: 2x2 Grid */}
                <div className="hidden md:grid grid-cols-2 gap-5 md:gap-6">
                    {values.map((value, index) => {
                        const Icon = value.icon;

                        return (
                            <motion.div
                                key={value.titleKey}
                                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                            >
                                <ValueCard
                                    icon={Icon}
                                    title={t(value.titleKey as any)}
                                    description={t(value.descKey as any)}
                                    mode={mode}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

// Separate card component with 3D tilt effect - Desktop Only
interface ValueCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
    mode: 'institutional' | 'creator';
}

const ValueCard = ({ icon: Icon, title, description, mode }: ValueCardProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Motion values for 3D rotation
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    // Spring configuration for smooth motion
    const springConfig = { stiffness: 300, damping: 30 };
    const springRotateX = useSpring(rotateX, springConfig);
    const springRotateY = useSpring(rotateY, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        // Subtle tilt - max 3 degrees for consistency
        const maxRotation = 3;
        const rotX = -(mouseY / (rect.height / 2)) * maxRotation;
        const rotY = (mouseX / (rect.width / 2)) * maxRotation;

        rotateX.set(rotX);
        rotateY.set(rotY);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        rotateX.set(0);
        rotateY.set(0);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            style={{
                rotateX: springRotateX,
                rotateY: springRotateY,
                transformStyle: 'preserve-3d',
            }}
            className="relative h-full min-h-[240px] group"
        >
            {/* Glass card background */}
            <div className={`absolute inset-0 rounded-2xl glass-2 transition-all duration-300 ${isHovered ? 'scale-[1.02]' : 'scale-100'
                }`} />

            {/* Glow effect on hover */}
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at center, hsl(var(--mode-h), var(--mode-s), var(--mode-l), 0.2), transparent 70%)`,
                        filter: 'blur(30px)',
                        zIndex: -1,
                    }}
                />
            )}

            {/* Card Content */}
            <div
                className="relative p-6 h-full flex flex-col"
                style={{ transform: 'translateZ(20px)' }}
            >
                {/* Icon */}
                <motion.div
                    animate={{
                        scale: isHovered ? 1.1 : 1,
                        rotate: isHovered ? 5 : 0,
                    }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-12 h-12 mb-4 rounded-xl flex items-center justify-center transition-all duration-300 ${mode === 'institutional'
                        ? 'bg-institutional/10 group-hover:bg-institutional/20'
                        : 'bg-creator/10 group-hover:bg-creator/20'
                        }`}
                >
                    <Icon className={`w-6 h-6 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
                        }`} />
                </motion.div>

                {/* Title */}
                <H4 className="mb-2 text-foreground">
                    {title}
                </H4>

                {/* Description */}
                <BodySmall className="text-foreground/60 leading-relaxed">
                    {description}
                </BodySmall>
            </div>
        </motion.div>
    );
};

export default ValueProposition;
