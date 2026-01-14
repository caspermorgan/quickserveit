import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import TypewriterText from '@/components/TypewriterText';
import CreatorModeNotice from '@/components/CreatorModeNotice';
import ServicesTeaser from '@/components/ServicesTeaser';
import HowWeWork from '@/components/HowWeWork';
import TechTicker from '@/components/TechTicker';
import ValueProposition from '@/components/ValueProposition';
import MagneticButton from '@/components/MagneticButton';
import { DisplayText, BodyLarge } from '@/components/Typography';
import { ArrowRight, Shield, Clock, CheckCircle, ChevronDown } from 'lucide-react';

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

  const whatsappNumber = '916388224877';
  const whatsappMessage = mode === 'institutional'
    ? `${t('contactUs')} ${t('brandName')}, I am from an educational institution and would like to discuss your services.`
    : `${t('contactUs')} ${t('brandName')}, I am a content creator and would like to discuss video editing services.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <Helmet>
        <title>{t('brandName')} | {mode === 'institutional' ? t('institutionalServices') : t('creatorStudio')}</title>
        <meta name="description" content={description} />

        {/* JSON-LD Organization Schema for SEO */}
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
      <FilmGrain mode={mode} />

      <FloatingNavbar
        mode={mode}
        onReturn={handleReturn}
        isVisible={true}
      />

      <main className="min-h-screen bg-background relative">
        {/* Hero Section - Minimal & Professional */}
        <section className={`relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-24 sm:py-28 md:py-32 overflow-hidden ${mode === 'institutional' ? 'mesh-gradient-institutional' : 'mesh-gradient-creator'}`}>

          {/* Gradient Orb Background - Subtle */}
          <div className={`gradient-orb ${mode === 'institutional' ? 'gradient-orb-institutional' : 'gradient-orb-creator'} w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] top-1/4 left-1/2 -translate-x-1/2 opacity-15`} />

          <div className="relative max-w-4xl mx-auto text-center z-10">
            {/* Main Heading - Typography System: DisplayText */}
            <DisplayText className={`mb-6 sm:mb-7 md:mb-8 animate-fade-in-up ${mode === 'institutional' ? 'text-gradient-institutional' : 'text-gradient-creator'}`}>
              {mode === 'institutional' ? t('institutionalServices') : t('creatorStudio')}
            </DisplayText>

            {/* Compact Typewriter Subtitle */}
            <div className="mb-8 sm:mb-9 md:mb-10 flex justify-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <TypewriterText
                anchorText={t('ourServices')}
                phrases={typewriterSentences}
                anchorClassName={`text-base sm:text-lg md:text-xl font-semibold mr-1.5 ${mode === 'institutional' ? 'text-institutional-readable' : 'text-creator'}`}
                className="text-base sm:text-lg md:text-xl text-foreground/60"
                speed={120}
                pauseDuration={2800}
              />
            </div>

            {/* Description - Typography System: BodyLarge */}
            <BodyLarge className="mb-10 sm:mb-11 md:mb-12 max-w-2xl mx-auto animate-fade-in-up px-4" style={{ animationDelay: '300ms' }}>
              {description}
            </BodyLarge>

            {/* Trust indicators - Enhanced */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-13 md:mb-14 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-foreground/50">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{t('confidentialityTitle')}</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-foreground/50">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{t('realisticTimelinesTitle')}</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-foreground/50">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>10 AM - 4 PM IST</span>
              </div>
            </div>

            {/* CTAs - Premium Styling */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 md:gap-6 animate-fade-in-up mb-12 sm:mb-14 md:mb-16" style={{ animationDelay: '500ms' }}>
              <Link
                to="/services"
                className={`group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-medium text-sm sm:text-base md:text-lg text-background transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 min-h-[44px] sm:min-h-[48px] md:min-h-[56px] ${mode === 'institutional'
                  ? 'bg-institutional hover:bg-institutional/90 shadow-premium-glow-institutional'
                  : 'bg-creator hover:bg-creator/90 shadow-premium-glow-creator'
                  }`}
              >
                {mode === 'institutional' ? t('viewServices') : t('viewServices')}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-medium text-sm sm:text-base md:text-lg border-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 min-h-[44px] sm:min-h-[48px] md:min-h-[56px] ${mode === 'institutional'
                  ? 'border-institutional/50 text-institutional hover:bg-institutional/10 hover:border-institutional'
                  : 'border-creator/50 text-creator hover:bg-creator/10 hover:border-creator'
                  }`}
              >
                {t('contactUs')}
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator opacity-40">
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-foreground/60" />
            </div>
          </div>
        </section>

        {/* Creator Mode Notice */}
        {mode === 'creator' && (
          <section className="px-6 pb-16">
            <CreatorModeNotice />
          </section>
        )}

        {/* Value Proposition - Why Choose Us */}
        <ValueProposition mode={mode} />

        {/* Services Teaser - Top 3 Only */}
        <ServicesTeaser mode={mode} />

        {/* How We Work - Process Overview */}
        <HowWeWork mode={mode} />

        {/* Tech Ticker - Trust Signal */}
        <TechTicker mode={mode} />

        {/* Bottom CTA - Start Your Project */}
        <section className="px-4 sm:px-6 py-16 sm:py-20 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 sm:mb-5 md:mb-6 ${mode === 'institutional' ? 'text-gradient-institutional' : 'text-gradient-creator'}`}>
              Ready to {mode === 'institutional' ? 'Digitize Your Institution' : 'Elevate Your Content'}?
            </h2>
            <p className="text-foreground/60 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-9 md:mb-10 max-w-2xl mx-auto px-4">
              {mode === 'institutional'
                ? 'Let\'s discuss how we can streamline your digital processes and free up your time for what matters most.'
                : 'Let\'s transform your creative vision into professional, high-retention content that captivates your audience.'}
            </p>
            <MagneticButton mode={mode}>
              <Link
                to="/contact"
                className={`group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-medium text-sm sm:text-base md:text-lg text-background transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 min-h-[44px] sm:min-h-[48px] md:min-h-[56px] ${mode === 'institutional'
                  ? 'bg-institutional hover:bg-institutional/90 shadow-premium-glow-institutional'
                  : 'bg-creator hover:bg-creator/90 shadow-premium-glow-creator'
                  }`}
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </MagneticButton>
          </div>
        </section>

      </main>

      <Footer mode={mode} />
    </>
  );
};

export default Home;

