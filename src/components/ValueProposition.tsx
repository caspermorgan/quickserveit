import { motion } from 'framer-motion';
import { Shield, Clock, Heart, Zap } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { H2, BodyLarge, H4, BodySmall } from '@/components/Typography';

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
                descKey: 'valueSecurityDesc'
            },
            {
                icon: Clock,
                titleKey: 'valueTimelyTitle',
                descKey: 'valueTimelyDesc'
            },
            {
                icon: Heart,
                titleKey: 'valuePersonalTitle',
                descKey: 'valuePersonalDesc'
            },
            {
                icon: Zap,
                titleKey: 'valueReliableTitle',
                descKey: 'valueReliableDesc'
            }
        ]
        : [
            {
                icon: Zap,
                titleKey: 'valueQualityTitle',
                descKey: 'valueQualityDesc'
            },
            {
                icon: Clock,
                titleKey: 'valueFastTitle',
                descKey: 'valueFastDesc'
            },
            {
                icon: Heart,
                titleKey: 'valueCreativeTitle',
                descKey: 'valueCreativeDesc'
            },
            {
                icon: Shield,
                titleKey: 'valueCommittedTitle',
                descKey: 'valueCommittedDesc'
            }
        ];

    return (
        <section className="py-20 md:py-32 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header - Typography System */}
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

                {/* Value Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <motion.div
                                key={value.titleKey}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative group"
                            >
                                {/* Card Background */}
                                <div className="absolute inset-0 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 transition-all duration-300 group-hover:bg-white/10" />

                                {/* Card Content */}
                                <div className="relative p-6 md:p-8">
                                    {/* Icon */}
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${mode === 'institutional'
                                        ? 'bg-institutional/10 group-hover:bg-institutional/20'
                                        : 'bg-creator/10 group-hover:bg-creator/20'
                                        }`}>
                                        <Icon className={`w-6 h-6 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
                                            }`} />
                                    </div>

                                    {/* Title - Typography System: H4 */}
                                    <H4 className="mb-2 text-foreground">
                                        {t(value.titleKey)}
                                    </H4>

                                    {/* Description - Typography System: BodySmall */}
                                    <BodySmall className="text-foreground/60">
                                        {t(value.descKey)}
                                    </BodySmall>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ValueProposition;
