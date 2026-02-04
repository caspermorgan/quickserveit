import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { motion } from 'framer-motion';
import PageWrapper from '@/components/layout/PageWrapper';
import PageHeader from '@/components/layout/PageHeader';
import GlassCard from '@/components/ui/GlassCard';
import VipButton from '@/components/ui/VipButton';
import { Monitor, Cpu, TrendingUp } from 'lucide-react';

const CrAbout = () => {
    const { setHasEntered, setCurrentSection } = useMode();
    const { t, language } = useTranslation();
    const navigate = useNavigate();

    const handleReturn = () => {
        setHasEntered(false);
        setCurrentSection('creator');
        navigate('/');
    };

    const handleFounderClick = () => {
        navigate('/founder');
    };

    // Staggered animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' }
        }
    };

    return (
        <>
            <Helmet>
                <title>About | QuickServe IT - Behind The Engine</title>
                <meta
                    name="description"
                    content="We don't just edit videos; we engineer attention. In an era of 3-second attention spans, our studio focuses on pacing, sound design, and color psychology to keep viewers hooked."
                />
            </Helmet>

            <PageWrapper mode="creator" onReturn={handleReturn}>
                {/* Header */}
                <PageHeader
                    title="About The Studio"
                    subtitle="Where creativity meets technical speed. We use high-performance hardware and viewer psychology to drive channel growth."
                    variant="cyan"
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-12 md:space-y-16"
                >
                    {/* Section A: The Philosophy */}
                    <motion.div variants={itemVariants}>
                        <GlassCard variant="cyan" className="p-8 md:p-10">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
                                {t('crAboutPhilosophyTitle')}
                            </h2>
                            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-4">
                                {t('crAboutPhilosophyContent')}
                            </p>
                            <p className="text-base md:text-lg text-foreground/60 italic">
                                {t('crAboutPhilosophyContentHindi')}
                            </p>
                        </GlassCard>
                    </motion.div>

                    {/* Section B: The Tech Stack - 3-Grid Layout */}
                    <motion.div variants={itemVariants}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                            {t('crAboutTechStackTitle')}
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Card 1: Software */}
                            <GlassCard variant="cyan" className="p-6 md:p-8 hover:scale-105 transition-transform duration-300">
                                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6">
                                    <Monitor className="w-7 h-7 text-cyan-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                                    {t('crAboutSoftwareTitle')}
                                </h3>
                                <p className="text-sm text-foreground/60">
                                    {t('crAboutSoftwareDesc')}
                                </p>
                            </GlassCard>

                            {/* Card 2: Hardware */}
                            <GlassCard variant="cyan" className="p-6 md:p-8 hover:scale-105 transition-transform duration-300">
                                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6">
                                    <Cpu className="w-7 h-7 text-cyan-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                                    {t('crAboutHardwareTitle')}
                                </h3>
                                <p className="text-sm text-foreground/60">
                                    {t('crAboutHardwareDesc')}
                                </p>
                            </GlassCard>

                            {/* Card 3: Strategy */}
                            <GlassCard variant="cyan" className="p-6 md:p-8 hover:scale-105 transition-transform duration-300">
                                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6">
                                    <TrendingUp className="w-7 h-7 text-cyan-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                                    {t('crAboutStrategyTitle')}
                                </h3>
                                <p className="text-sm text-foreground/60">
                                    {t('crAboutStrategyDesc')}
                                </p>
                            </GlassCard>
                        </div>
                    </motion.div>

                    {/* Section C: The Founder Teaser (The Bridge) */}
                    <motion.div variants={itemVariants}>
                        <GlassCard
                            variant="cyan"
                            className="p-8 md:p-10 bg-white/[0.03] border-cyan-500/20"
                        >
                            <div className="text-center max-w-2xl mx-auto">
                                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-cyan-400">
                                    {t('crAboutFounderTeaserTitle')}
                                </h3>
                                <p className="text-foreground/70 mb-6 leading-relaxed">
                                    {t('crAboutFounderTeaserSubtext')}
                                </p>
                                <VipButton
                                    variant="secondary"
                                    colorScheme="cyan"
                                    size="lg"
                                    onClick={handleFounderClick}
                                    className="mx-auto"
                                >
                                    {t('crAboutFounderTeaserButton')}
                                </VipButton>
                            </div>
                        </GlassCard>
                    </motion.div>
                </motion.div>
            </PageWrapper>
        </>
    );
};

export default CrAbout;
