import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Shield, Clock, Heart, Zap } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { H2, BodyLarge, H4, BodySmall } from '@/components/Typography';
import { BentoGrid, BentoItem } from '@/components/layouts/BentoGrid';
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
                featured: true, // First card is featured
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
                featured: true, // First card is featured
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
        <section className="py-20 md:py-32 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <H2 className="mb-4">
                        {t('whyChooseUsTitle')}
                    </H2>
                    <BodyLarge className="text-foreground/60 max-w-2xl mx-auto">
                        {t('whyChooseUsSubtitle')}
                    </BodyLarge>
                </motion.div>

                {/* Bento Grid Layout */}
                <BentoGrid variant="asymmetric">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        const isFeatured = value.featured;

                        return (
                            <BentoItem
                                key={value.titleKey}
                                span={isFeatured ? 2 : 1}
                                rowSpan={isFeatured ? 2 : 1}
                                delay={index * 0.1}
                            >
                                <ValueCard
                                    icon={Icon}
                                    title={t(value.titleKey as any)}
                                    description={t(value.descKey as any)}
                                    mode={mode}
                                    featured={isFeatured}
                                />
                            </BentoItem>
                        );
                    })}
                </BentoGrid>
            </div>
        </section>
    );
};

// Separate card component with 3D tilt effect
interface ValueCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
    mode: 'institutional' | 'creator';
    featured?: boolean;
}

const ValueCard = ({ icon: Icon, title, description, mode, featured = false }: ValueCardProps) => {
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

        // Subtle tilt - max 5 degrees
        const maxRotation = 5;
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
            className="relative h-full group"
        >
            {/* Glass card background */}
            <div className={`absolute inset-0 rounded-2xl glass-surface-premium transition-all duration-300 ${isHovered ? 'scale-[1.02]' : 'scale-100'
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
                className={`relative p-6 md:p-8 ${featured ? 'md:p-10' : ''} h-full flex flex-col`}
                style={{ transform: 'translateZ(20px)' }}
            >
                {/* Icon */}
                <motion.div
                    animate={{
                        scale: isHovered ? 1.1 : 1,
                        rotate: isHovered ? 5 : 0,
                    }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className={`${featured ? 'w-16 h-16 mb-6' : 'w-12 h-12 mb-4'} rounded-xl flex items-center justify-center transition-all duration-300 ${mode === 'institutional'
                        ? 'bg-institutional/10 group-hover:bg-institutional/20'
                        : 'bg-creator/10 group-hover:bg-creator/20'
                        }`}
                >
                    <Icon className={`${featured ? 'w-8 h-8' : 'w-6 h-6'} ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
                        }`} />
                </motion.div>

                {/* Title */}
                <H4 className={`mb-2 text-foreground ${featured ? 'md:text-3xl' : ''}`}>
                    {title}
                </H4>

                {/* Description */}
                <BodySmall className={`text-foreground/60 ${featured ? 'md:text-base' : ''}`}>
                    {description}
                </BodySmall>
            </div>
        </motion.div>
    );
};

export default ValueProposition;
