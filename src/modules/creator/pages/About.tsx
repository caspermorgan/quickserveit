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
import VipButton from '@/components/ui/VipButton';
import { Monitor, Cpu, TrendingUp, Sparkles } from 'lucide-react';

const CrAbout = () => {
    const { setHasEntered, setCurrentSection } = useMode();
    const { t } = useTranslation();
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
                <title>{t('crAboutHeaderTitle')} | QuickServe IT - Creator Studio</title>
                <meta
                    name="description"
                    content={t('crAboutHeaderSubtitle')}
                />
            </Helmet>

            {/* Keep Cinematic Effects for Creator */}
            <CursorLight mode="creator" />
            <FilmGrain />
            <FloatingNavbar mode="creator" onReturn={handleReturn} isVisible={true} />

            {/* Force Dark Mode Wrapper */}
            <div className="min-h-screen bg-black">
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
                            <div className="bg-gradient-to-br from-cyan-950/30 to-black border border-cyan-500/30 rounded-2xl p-8 md:p-10 shadow-2xl shadow-cyan-500/10">
                                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
                                    {t('crAboutPhilosophyTitle')}
                                </h2>
                                <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                                    {t('crAboutPhilosophyContent')}
                                </p>
                            </div>
                        </motion.div>

                        {/* Section B: The Creative Arsenal - 3-Grid Layout */}
                        <motion.div variants={itemVariants}>
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
                                {t('crAboutTechStackTitle')}
                            </h2>

                            <div className="grid md:grid-cols-3 gap-6">
                                {/* Card 1: Software */}
                                <div className="bg-gradient-to-br from-cyan-950/20 to-black border border-cyan-500/20 rounded-xl p-6 md:p-8 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
                                    <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 ring-1 ring-cyan-400/30">
                                        <Monitor className="w-7 h-7 text-cyan-400" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                                        {t('crAboutSoftwareTitle')}
                                    </h3>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        {t('crAboutSoftwareDesc')}
                                    </p>
                                </div>

                                {/* Card 2: Hardware */}
                                <div className="bg-gradient-to-br from-cyan-950/20 to-black border border-cyan-500/20 rounded-xl p-6 md:p-8 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
                                    <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 ring-1 ring-cyan-400/30">
                                        <Cpu className="w-7 h-7 text-cyan-400" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                                        {t('crAboutHardwareTitle')}
                                    </h3>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        {t('crAboutHardwareDesc')}
                                    </p>
                                </div>

                                {/* Card 3: Strategy */}
                                <div className="bg-gradient-to-br from-cyan-950/20 to-black border border-cyan-500/20 rounded-xl p-6 md:p-8 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
                                    <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 ring-1 ring-cyan-400/30">
                                        <TrendingUp className="w-7 h-7 text-cyan-400" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                                        {t('crAboutStrategyTitle')}
                                    </h3>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        {t('crAboutStrategyDesc')}
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Section C: Creative Director (Upgraded Founder Section) */}
                        <motion.div variants={itemVariants}>
                            <div className="relative bg-gradient-to-br from-cyan-950/30 to-black border border-cyan-500/30 rounded-2xl p-8 md:p-12 shadow-2xl shadow-cyan-500/20">
                                {/* Background Glow Effect */}
                                <div className="absolute inset-0 bg-cyan-400/5 rounded-2xl blur-3xl -z-10"></div>

                                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-cyan-400 flex items-center justify-center gap-3">
                                    <Sparkles className="w-8 h-8" />
                                    {t('crAboutCreativeDirectorTitle')}
                                </h2>

                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    {/* Left: Square Cinematic Frame with Glow */}
                                    <div className="flex-shrink-0 relative">
                                        {/* Outer Glow */}
                                        <div className="absolute inset-0 bg-cyan-400/20 rounded-xl blur-2xl scale-110"></div>
                                        {/* Image Container */}
                                        <div className="relative w-48 h-48 rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/50 ring-2 ring-cyan-400/50 bg-black">
                                            <img
                                                src="/founder.jpg"
                                                alt={t('crAboutCreativeDirectorName')}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Right: Creative Messaging */}
                                    <div className="flex-1 text-center md:text-left">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                            {t('crAboutCreativeDirectorName')}
                                        </h3>
                                        <p className="text-lg text-cyan-400 font-semibold mb-4 flex items-center justify-center md:justify-start gap-2">
                                            <Sparkles className="w-5 h-5" />
                                            {t('crAboutCreativeDirectorRole')}
                                        </p>
                                        <p className="text-base text-gray-300 leading-relaxed mb-6">
                                            {t('crAboutCreativeDirectorDesc')}
                                        </p>
                                        <VipButton
                                            variant="secondary"
                                            colorScheme="cyan"
                                            size="lg"
                                            onClick={handleFounderClick}
                                            className="shadow-lg shadow-cyan-500/30"
                                        >
                                            {t('crAboutFounderTeaserButton')}
                                        </VipButton>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </PageWrapper>
            </div>
        </>
    );
};

export default CrAbout;
