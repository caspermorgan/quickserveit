import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { motion } from 'framer-motion';
import FloatingNavbar from '@/modules/core/components/FloatingNavbar';
import CursorLight from '@/modules/core/components/CursorLight';
import FilmGrain from '@/modules/core/components/FilmGrain';
import PageWrapper from '@/modules/core/layouts/PageWrapper';
import PageHeader from '@/modules/core/layouts/PageHeader';
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
                <title>Beyond the Cut | QuickServe IT - Creator Studio</title>
                <meta
                    name="description"
                    content="I don't just edit videos — I engineer attention. Every frame, sound effect, and transition is designed to keep your viewers hooked."
                />
            </Helmet>

            <CursorLight mode="creator" />
            <FilmGrain />
            <FloatingNavbar mode="creator" onReturn={handleReturn} isVisible={true} />
            <PageWrapper mode="creator" onReturn={handleReturn}>
                {/* Header */}
                <PageHeader
                    title={t('crAboutHeaderTitle')}
                    subtitle={t('crAboutHeaderSubtitle')}
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

                    {/* Section B: The Creative Arsenal - 3-Grid Layout */}
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

                    {/* Section C: The Founder Teaser (Split Layout) */}
                    <motion.div variants={itemVariants}>
                        <GlassCard
                            variant="cyan"
                            className="p-8 md:p-10 bg-white/[0.03] border-cyan-500/20"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-cyan-400">
                                {t('crAboutFounderTeaserTitle')}
                            </h3>

                            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                                {/* Left: Founder Image */}
                                <div className="flex-shrink-0">
                                    <div className="w-32 h-32 rounded-2xl overflow-hidden bg-cyan-500/10 shadow-lg shadow-cyan-500/30">
                                        <img
                                            src="/founder.jpg"
                                            alt="Founder"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Right: Text */}
                                <div className="flex-1 text-center md:text-left">
                                    <p className="text-lg text-foreground/80 leading-relaxed">
                                        {t('crAboutFounderTeaserSubtext')}
                                    </p>
                                </div>
                            </div>

                            <div className="text-center">
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
