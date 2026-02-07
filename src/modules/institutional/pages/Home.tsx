import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { motion } from 'framer-motion';
import FloatingNavbar from '@/modules/core/components/FloatingNavbar';
import CursorLight from '@/modules/core/components/CursorLight';
import FilmGrain from '@/modules/core/components/FilmGrain';
import Footer from '@/modules/core/components/Footer';
import FloatingContactButton from '@/modules/core/components/FloatingContactButton';
import TypewriterText from '@/modules/core/components/TypewriterText';
import CreatorModeNotice from '@/modules/creator/components/CreatorModeNotice';
import ServicesTeaser from '@/modules/institutional/components/ServicesTeaser';
import HowWeWork from '@/modules/institutional/components/HowWeWork';
import TechTicker from '@/modules/core/components/TechTicker';
import ValueProposition from '@/modules/institutional/components/ValueProposition';
import TrustIndicators from '../components/TrustIndicators';
import InstitutionalStats from '../components/InstitutionalStats';
import SEO from '@/modules/core/components/SEO';
import { DisplayText, BodyLarge } from '@/modules/core/components/Typography';
import { Reveal, Magnetic } from '@/modules/core/components/motion';
import ParallaxSection from '@/modules/core/components/motion/ParallaxSection';
import ProofOfWorkSlider from '../components/ProofOfWorkSlider';
import { ArrowRight, ChevronDown } from 'lucide-react';


const Home = () => {
  const { mode, setHasEntered, setCurrentSection } = useMode();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleReturn = () => {
    setHasEntered(false);
    setCurrentSection(mode); // Persist current section before returning
    navigate('/');
  };

  // Compact typewriter sentences
  const institutionalTypewriterSentences = [
    t('instTypewriter1'),
    t('instTypewriter2'),
    t('instTypewriter3'),
    t('instTypewriter4'),
    t('instTypewriter5')
  ];

  const creatorTypewriterSentences = [
    t('creatorTypewriter1'),
    t('creatorTypewriter2'),
    t('creatorTypewriter3'),
    t('creatorTypewriter4')
  ];

  const typewriterSentences = mode === 'institutional' ? institutionalTypewriterSentences : creatorTypewriterSentences;

  const description = mode === 'institutional'
    ? t('heroInstDesc')
    : t('heroCreatorDesc');

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '916388224877';
  const whatsappMessage = mode === 'institutional'
    ? `${t('contactUs')} ${t('brandName')}, I am from an educational institution and would like to discuss your services.`
    : `${t('contactUs')} ${t('brandName')}, I am a content creator and would like to discuss video editing services.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const pageTitle = `${t('brandName')} | ${mode === 'institutional' ? t('institutionalServices') : t('creatorStudio')}`;

  return (
    <>
      {/* SEO Component - Dynamic OG Images + Canonical URLs */}
      <SEO
        title={pageTitle}
        description={description}
        mode={mode}
        type="website"
      />

      {/* JSON-LD Schema for Rich Snippets */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "QuickServe IT",
            "url": "https://www.quickserveit.online",
            "logo": "https://www.quickserveit.online/logo.png",
            "description": mode === 'institutional'
              ? "Professional IT support services for educational institutions in Gorakhpur, Uttar Pradesh. Specializing in exam documentation, scholarship applications, UDISE+ data entry, and daily digital support for schools."
              : "Professional video editing and content creation services for YouTube creators. Specializing in video editing, thumbnail design, motion graphics, and content strategy.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Rural Gorakhpur",
              "addressRegion": "Uttar Pradesh",
              "addressCountry": "IN"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Rural Gorakhpur, Uttar Pradesh, India"
            }
          })}
        </script>
      </Helmet>

      <CursorLight mode={mode} />
      <FilmGrain />

      <FloatingNavbar
        mode={mode}
        onReturn={handleReturn}
        isVisible={true}
      />

      {/* Floating Contact Button - Appears on scroll */}
      <FloatingContactButton mode={mode} />

      <main id="main-content" className="min-h-screen bg-background">
        {/* Hero Section - v2.1 Enhanced with Parallax */}
        <section className={`relative min-h-screen flex items-center justify-center px-6 pt-20 md:pt-24 pb-16 md:pb-20 overflow-hidden ${mode === 'institutional' ? 'mesh-gradient-institutional' : 'mesh-gradient-creator'}`}>

          {/* Parallax Gradient Orbs - Multi-layer Depth */}
          <ParallaxSection speed={0.3} direction="up">
            <div className={`gradient-orb ${mode === 'institutional' ? 'gradient-orb-institutional' : 'gradient-orb-creator'} w-[500px] h-[500px] top-1/4 left-1/2 -translate-x-1/2`} />
          </ParallaxSection>

          <ParallaxSection speed={0.5} direction="down">
            <div className={`gradient-orb ${mode === 'institutional' ? 'gradient-orb-institutional' : 'gradient-orb-creator'} w-[300px] h-[300px] bottom-1/4 right-1/4 opacity-50`} />
          </ParallaxSection>

          <div className="relative max-w-5xl mx-auto text-center z-10">
            {/* Main Heading - Elite Motion */}
            <Reveal delay={0.1} duration={0.8} y={30} blur>
              <DisplayText className={`mt-4 md:mt-0 mb-7 ${mode === 'institutional' ? 'text-gradient-institutional' : 'text-gradient-creator'}`}>
                {mode === 'institutional' ? t('institutionalServices') : t('creatorStudio')}
              </DisplayText>
            </Reveal>

            {/* Typewriter Subtitle - Elite Motion */}
            <Reveal delay={0.25} duration={0.6} y={20}>
              <div className="mb-11 flex justify-center min-h-[3.5rem] md:min-h-[2rem] items-center">
                <TypewriterText
                  anchorText={t('ourServices')}
                  phrases={typewriterSentences}
                  anchorClassName={`text-base md:text-lg font-medium mr-1.5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}
                  className="text-base md:text-lg text-foreground/70"
                  speed={120}
                  pauseDuration={3200}
                />
              </div>
            </Reveal>

            {/* Description - Elite Motion */}
            <Reveal delay={0.35} duration={0.6} y={20}>
              <BodyLarge className="mb-12 max-w-xl md:max-w-2xl mx-auto">
                {description}
              </BodyLarge>
            </Reveal>

            {/* Trust indicators - Icon-only with tooltips */}
            <TrustIndicators mode={mode} />

            {/* CTAs - Elite Motion with Magnetic */}
            <Reveal delay={0.5} duration={0.5} y={20}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 mb-16">
                <Magnetic strength={0.3} maxDistance={80}>
                  <Link
                    to="/services"
                    className={`group inline-flex items-center gap-2.5 px-5 sm:px-7 md:px-9 py-3 sm:py-3.5 md:py-4.5 rounded-full font-medium text-base sm:text-lg text-background transition-all duration-normal hover:scale-[1.02] hover:shadow-lg active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 min-h-[44px] sm:min-h-[46px] md:min-h-[52px] ${mode === 'institutional'
                      ? 'bg-institutional hover:bg-institutional/90 shadow-[0_4px_20px_rgba(234,179,8,0.25),0_8px_40px_rgba(234,179,8,0.15)]'
                      : 'bg-creator hover:bg-creator/90 shadow-[0_4px_20px_rgba(34,211,238,0.25),0_8px_40px_rgba(34,211,238,0.15)]'
                      }`}
                  >
                    {mode === 'institutional' ? t('viewServices') : t('viewServices')}
                    <ArrowRight className="w-4.5 h-4.5 transition-transform duration-normal group-hover:translate-x-1" />
                  </Link>
                </Magnetic>
                <Magnetic strength={0.25} maxDistance={70}>
                  <Link
                    to="/contact"
                    className={`inline-flex items-center gap-2.5 px-5 sm:px-7 md:px-9 py-3 sm:py-3.5 md:py-4.5 rounded-full font-medium text-base sm:text-lg border-1.5 transition-all duration-normal hover:scale-[1.02] active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 min-h-[44px] sm:min-h-[46px] md:min-h-[52px] ${mode === 'institutional'
                      ? 'border-institutional/40 text-institutional hover:bg-institutional/10 hover:border-institutional/60'
                      : 'border-creator/40 text-creator hover:bg-creator/10 hover:border-creator/60'
                      }`}
                  >
                    {t('contactUs')}
                  </Link>
                </Magnetic>
              </div>
            </Reveal>

            {/* Scroll Indicator - Elite Motion */}
            <motion.div
              className="scroll-indicator opacity-40"
              animate={{
                y: [0, 10, 0],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.1, opacity: 0.8 }}
            >
              <ChevronDown className="w-6 h-6 text-foreground/60" />
            </motion.div>
          </div>
        </section>

        {/* Institutional Statistics - Trust Building */}
        <InstitutionalStats mode={mode} />

        {/* Creator Mode Notice */}
        {mode === 'creator' && (
          <section className="px-6 pb-12 md:pb-16">
            <CreatorModeNotice />
          </section>
        )}

        {/* Value Proposition - Why Choose Us */}
        <ValueProposition mode={mode} />

        {/* Proof of Work Slider - Only for Institutional Mode */}
        {mode === 'institutional' && (
          <ProofOfWorkSlider />
        )}

        {/* Services Teaser - Top 3 Only */}
        <ServicesTeaser mode={mode} />

        {/* How We Work - Process Overview */}
        <HowWeWork mode={mode} />

        {/* Tech Ticker - Trust Signal */}
        <TechTicker mode={mode} />

        {/* Bottom CTA - Start Your Project */}
        <section className="px-6 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display mb-6 ${mode === 'institutional' ? 'text-gradient-institutional' : 'text-gradient-creator'}`}>
              Ready to {mode === 'institutional' ? 'Digitize Your Institution' : 'Elevate Your Content'}?
            </h2>
            <p className="text-foreground/60 text-lg mb-10 max-w-2xl mx-auto">
              {mode === 'institutional'
                ? 'Let\'s discuss how we can streamline your digital processes and free up your time for what matters most.'
                : 'Let\'s transform your creative vision into professional, high-retention content that captivates your audience.'}
            </p>
            <Magnetic strength={0.35} maxDistance={100}>
              <Link
                to="/contact"
                className={`group inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-6 rounded-full font-medium text-lg text-background transition-all duration-normal hover:scale-[1.05] hover:shadow-2xl active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${mode === 'institutional'
                  ? 'bg-institutional hover:bg-institutional/90 shadow-premium-glow-institutional'
                  : 'bg-creator hover:bg-creator/90 shadow-premium-glow-creator'
                  }`}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 transition-transform duration-normal group-hover:translate-x-1" />
              </Link>
            </Magnetic>
          </div>
        </section>

      </main>

      <Footer mode={mode} />
    </>
  );
};

export default Home;

