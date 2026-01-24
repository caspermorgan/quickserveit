import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';
import TypewriterText from '@/components/TypewriterText';
import CreatorModeNotice from '@/components/CreatorModeNotice';
import ServicesTeaser from '@/components/ServicesTeaser';
import HowWeWork from '@/components/HowWeWork';
import TechTicker from '@/components/TechTicker';
import ValueProposition from '@/components/ValueProposition';
import TrustIndicators from '@/components/TrustIndicators';
import { DisplayText, BodyLarge } from '@/components/Typography';
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
      <FilmGrain />

      <FloatingNavbar
        mode={mode}
        onReturn={handleReturn}
        isVisible={true}
      />

      {/* Floating Contact Button - Appears on scroll */}
      <FloatingContactButton mode={mode} />

      <main className="min-h-screen bg-background">
        {/* Hero Section - Premium Redesign */}
        <section className={`relative min-h-screen flex items-center justify-center px-6 pt-24 md:pt-32 pb-20 md:pb-32 overflow-hidden ${mode === 'institutional' ? 'mesh-gradient-institutional' : 'mesh-gradient-creator'}`}>

          {/* Gradient Orb Background - Optimized Size */}
          <div className={`gradient-orb ${mode === 'institutional' ? 'gradient-orb-institutional' : 'gradient-orb-creator'} w-[500px] h-[500px] top-1/4 left-1/2 -translate-x-1/2`} />

          <div className="relative max-w-5xl mx-auto text-center z-10">
            {/* Main Heading - Typography System: DisplayText - Optimized hierarchy */}
            <DisplayText className={`mt-4 md:mt-0 mb-8 tracking-tight md:tracking-normal animate-fade-in-up ${mode === 'institutional' ? 'text-gradient-institutional' : 'text-gradient-creator'}`}>
              {mode === 'institutional' ? t('institutionalServices') : t('creatorStudio')}
            </DisplayText>

            {/* Compact Typewriter Subtitle - Fixed height to prevent layout shift - Reduced weight for hierarchy */}
            <div className="mb-12 flex justify-center animate-fade-in-up min-h-[3.5rem] md:min-h-[2rem] items-center" style={{ animationDelay: '200ms' }}>
              <TypewriterText
                anchorText={t('ourServices')}
                phrases={typewriterSentences}
                anchorClassName={`text-lg md:text-xl font-medium mr-1.5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}
                className="text-lg md:text-xl text-foreground/70"
                speed={120}
                pauseDuration={2800}
              />
            </div>

            {/* Description - Typography System: BodyLarge - Optimized max-width for mobile */}
            <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <BodyLarge className="mb-12 max-w-xl md:max-w-2xl mx-auto">
                {description}
              </BodyLarge>
            </div>

            {/* Trust indicators - Icon-only with tooltips */}
            <TrustIndicators mode={mode} />

            {/* CTAs - Premium Styling */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-6 animate-fade-in-up mb-16" style={{ animationDelay: '500ms' }}>
              <Link
                to="/services"
                className={`group inline-flex items-center gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-medium text-base sm:text-lg text-background transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 min-h-[44px] sm:min-h-[48px] md:min-h-[56px] ${mode === 'institutional'
                  ? 'bg-institutional hover:bg-institutional/90 shadow-[0_4px_20px_rgba(234,179,8,0.25),0_8px_40px_rgba(234,179,8,0.15)]'
                  : 'bg-creator hover:bg-creator/90 shadow-[0_4px_20px_rgba(34,211,238,0.25),0_8px_40px_rgba(34,211,238,0.15)]'
                  }`}
              >
                {mode === 'institutional' ? t('viewServices') : t('viewServices')}
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className={`inline-flex items-center gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-medium text-base sm:text-lg border-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 min-h-[44px] sm:min-h-[48px] md:min-h-[56px] ${mode === 'institutional'
                  ? 'border-institutional/40 text-institutional hover:bg-institutional/10 hover:border-institutional/60'
                  : 'border-creator/40 text-creator hover:bg-creator/10 hover:border-creator/60'
                  }`}
              >
                {t('contactUs')}
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator opacity-40">
              <ChevronDown className="w-6 h-6 text-foreground/60" />
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
            <Link
              to="/contact"
              className={`group inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-6 rounded-full font-medium text-lg text-background transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${mode === 'institutional'
                ? 'bg-institutional hover:bg-institutional/90 shadow-premium-glow-institutional'
                : 'bg-creator hover:bg-creator/90 shadow-premium-glow-creator'
                }`}
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

      </main>

      <Footer mode={mode} />
    </>
  );
};

export default Home;

