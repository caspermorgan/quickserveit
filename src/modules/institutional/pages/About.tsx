import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { motion } from 'framer-motion';
import FloatingNavbar from '@/modules/core/components/FloatingNavbar';
import PageWrapper from '@/modules/core/layouts/PageWrapper';
import PageHeader from '@/modules/core/layouts/PageHeader';
import GlassCard from '@/components/ui/GlassCard';
import VipButton from '@/components/ui/VipButton';
import { Lock, Gauge, Languages, MapPin, Shield } from 'lucide-react';

const InstAbout = () => {
    const { setHasEntered, setCurrentSection } = useMode();
    const { t } = useTranslation();
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
                <title>{t('instAboutHeaderTitle')} | QuickServe IT - Institutional</title>
                <meta
                    name="description"
                    content={t('instAboutHeaderSubtitle')}
                />
            </Helmet>

            <FloatingNavbar mode="institutional" onReturn={handleReturn} isVisible={true} />

            <PageWrapper mode="institutional" onReturn={handleReturn}>
                {/* Header */}
                <PageHeader
                    title={t('instAboutHeaderTitle')}
                    subtitle={t('instAboutHeaderSubtitle')}
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
                        <GlassCard variant="gold" className="p-8 md:p-10 bg-amber-500/5 border-amber-500/30">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-amber-400">
                                {t('instAboutMissionTitle')}
                            </h2>
                            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                                {t('instAboutMissionContent')}
                            </p>
                        </GlassCard>
                    </motion.div>

                    {/* Section B: Local Promise */}
                    <motion.div variants={itemVariants}>
                        <GlassCard variant="gold" className="p-6 md:p-8 bg-amber-500/5 border-amber-500/30">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 border border-amber-500/30">
                                    <MapPin className="w-6 h-6 text-amber-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-amber-400">
                                        {t('instAboutLocalPromiseTitle')}
                                    </h3>
                                    <p className="text-foreground/70 leading-relaxed">
                                        {t('instAboutLocalPromiseText')}
                                    </p>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* Section C: How I Work - 3-Grid Layout */}
                    <motion.div variants={itemVariants}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                            {t('instAboutWhyUsTitle')}
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Card 1: Privacy */}
                            <GlassCard variant="gold" className="p-6 md:p-8 hover:scale-105 transition-transform duration-300 bg-amber-500/5 border-amber-500/20">
                                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6">
                                    <Lock className="w-7 h-7 text-amber-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-amber-400">
                                    {t('instAboutPrivacyTitle')}
                                </h3>
                                <p className="text-sm text-foreground/60 leading-relaxed">
                                    {t('instAboutPrivacyDesc')}
                                </p>
                            </GlassCard>

                            {/* Card 2: Speed */}
                            <GlassCard variant="gold" className="p-6 md:p-8 hover:scale-105 transition-transform duration-300 bg-amber-500/5 border-amber-500/20">
                                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6">
                                    <Gauge className="w-7 h-7 text-amber-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-amber-400">
                                    {t('instAboutSpeedTitle')}
                                </h3>
                                <p className="text-sm text-foreground/60 leading-relaxed">
                                    {t('instAboutSpeedDesc')}
                                </p>
                            </GlassCard>

                            {/* Card 3: Format */}
                            <GlassCard variant="gold" className="p-6 md:p-8 hover:scale-105 transition-transform duration-300 bg-amber-500/5 border-amber-500/20">
                                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6">
                                    <Languages className="w-7 h-7 text-amber-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-amber-400">
                                    {t('instAboutFormatTitle')}
                                </h3>
                                <p className="text-sm text-foreground/60 leading-relaxed">
                                    {t('instAboutFormatDesc')}
                                </p>
                            </GlassCard>
                        </div>
                    </motion.div>

                    {/* Section D: Leadership (Upgraded Founder Section) */}
                    <motion.div variants={itemVariants}>
                        <GlassCard
                            variant="gold"
                            className="p-8 md:p-12 bg-amber-500/5 border-amber-500/30"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-amber-400 flex items-center justify-center gap-3">
                                <Shield className="w-8 h-8" />
                                {t('instAboutLeadershipTitle')}
                            </h2>

                            <div className="flex flex-col md:flex-row items-center gap-8">
                                {/* Left: Circular Founder Image */}
                                <div className="flex-shrink-0">
                                    <div className="w-40 h-40 rounded-full border-4 border-amber-500 overflow-hidden shadow-2xl shadow-amber-500/20 bg-amber-500/10">
                                        <img
                                            src="/founder.jpg"
                                            alt={t('instAboutLeadershipName')}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Right: Professional Details */}
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                        {t('instAboutLeadershipName')}
                                    </h3>
                                    <p className="text-lg text-amber-400 font-semibold mb-4 flex items-center justify-center md:justify-start gap-2">
                                        <Shield className="w-5 h-5" />
                                        {t('instAboutLeadershipRole')}
                                    </p>
                                    <p className="text-base text-foreground/70 leading-relaxed mb-6">
                                        {t('instAboutLeadershipDesc')}
                                    </p>
                                    <VipButton
                                        variant="secondary"
                                        colorScheme="gold"
                                        size="lg"
                                        onClick={handleFounderClick}
                                    >
                                        {t('instAboutFounderTeaserButton')}
                                    </VipButton>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                </motion.div>
            </PageWrapper>
        </>
    );
};

export default InstAbout;
