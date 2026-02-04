import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { motion } from 'framer-motion';
import PageWrapper from '@/components/layout/PageWrapper';
import PageHeader from '@/components/layout/PageHeader';
import GlassCard from '@/components/ui/GlassCard';
import VipButton from '@/components/ui/VipButton';
import { Lock, Gauge, Languages } from 'lucide-react';

const InstAbout = () => {
    const { setHasEntered, setCurrentSection } = useMode();
    const { t, language } = useTranslation();
    const navigate = useNavigate();

    const handleReturn = () => {
        setHasEntered(false);
        setCurrentSection('institutional');
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
                <title>About | QuickServe IT - Institutional Standard</title>
                <meta
                    name="description"
                    content="We are not just typists; we are data custodians. Our mission is to digitize every educational institute with 0% error rate and 100% compliance."
                />
            </Helmet>

            <PageWrapper mode="institutional" onReturn={handleReturn}>
                {/* Header */}
                <PageHeader
                    title="About The Mission"
                    subtitle="Founded to modernize Gorakhpur's education system. We combine technical speed with military-grade data confidentiality."
                    variant="gold"
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-12 md:space-y-16"
                >
                    {/* Section A: The Mission */}
                    <motion.div variants={itemVariants}>
                        <GlassCard variant="gold" className="p-8 md:p-10">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-amber-400">
                                {t('instAboutMissionTitle')}
                            </h2>
                            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-4">
                                {t('instAboutMissionContent')}
                            </p>
                            <p className="text-base md:text-lg text-foreground/60 italic">
                                {t('instAboutMissionContentHindi')}
                            </p>
                        </GlassCard>
                    </motion.div>

                    {/* Section B: Why Us? - 3-Grid Layout */}
                    <motion.div variants={itemVariants}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                            {t('instAboutWhyUsTitle')}
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Card 1: Privacy */}
                            <GlassCard variant="gold" className="p-6 md:p-8 hover:scale-105 transition-transform duration-300">
                                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6">
                                    <Lock className="w-7 h-7 text-amber-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-amber-400">
                                    {t('instAboutPrivacyTitle')}
                                </h3>
                                <p className="text-sm text-foreground/60 mb-3">
                                    {t('instAboutPrivacyDesc')}
                                </p>
                                <p className="text-xs text-foreground/50 italic">
                                    {t('instAboutPrivacyTitleHindi')}
                                </p>
                            </GlassCard>

                            {/* Card 2: Speed */}
                            <GlassCard variant="gold" className="p-6 md:p-8 hover:scale-105 transition-transform duration-300">
                                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6">
                                    <Gauge className="w-7 h-7 text-amber-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-amber-400">
                                    {t('instAboutSpeedTitle')}
                                </h3>
                                <p className="text-sm text-foreground/60 mb-3">
                                    {t('instAboutSpeedDesc')}
                                </p>
                                <p className="text-xs text-foreground/50 italic">
                                    {t('instAboutSpeedTitleHindi')}
                                </p>
                            </GlassCard>

                            {/* Card 3: Format */}
                            <GlassCard variant="gold" className="p-6 md:p-8 hover:scale-105 transition-transform duration-300">
                                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6">
                                    <Languages className="w-7 h-7 text-amber-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-amber-400">
                                    {t('instAboutFormatTitle')}
                                </h3>
                                <p className="text-sm text-foreground/60 mb-3">
                                    {t('instAboutFormatDesc')}
                                </p>
                                <p className="text-xs text-foreground/50 italic">
                                    {t('instAboutFormatTitleHindi')}
                                </p>
                            </GlassCard>
                        </div>
                    </motion.div>

                    {/* Section C: The Founder Teaser (The Bridge) */}
                    <motion.div variants={itemVariants}>
                        <GlassCard
                            variant="gold"
                            className="p-8 md:p-10 bg-white/[0.03] border-amber-500/20"
                        >
                            <div className="text-center max-w-2xl mx-auto">
                                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-amber-400">
                                    {t('instAboutFounderTeaserTitle')}
                                </h3>
                                <p className="text-foreground/70 mb-6 leading-relaxed">
                                    {t('instAboutFounderTeaserSubtext')}
                                </p>
                                <VipButton
                                    variant="secondary"
                                    colorScheme="gold"
                                    size="lg"
                                    onClick={handleFounderClick}
                                    className="mx-auto"
                                >
                                    {t('instAboutFounderTeaserButton')}
                                </VipButton>
                            </div>
                        </GlassCard>
                    </motion.div>
                </motion.div>
            </PageWrapper>
        </>
    );
};

export default InstAbout;
