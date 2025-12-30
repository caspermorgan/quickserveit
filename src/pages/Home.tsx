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
import ClientWorkSummary from '@/components/ClientWorkSummary';
import ServicesSection from '@/components/ServicesSection';
import { ArrowRight, Shield, Clock, CheckCircle } from 'lucide-react';

const Home = () => {
  const { mode, setHasEntered } = useMode();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleReturn = () => {
    setHasEntered(false);
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

  const whatsappNumber = '919876543210';
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
              "addressLocality": "Gorakhpur",
              "addressRegion": "Uttar Pradesh",
              "addressCountry": "IN"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Gorakhpur, Uttar Pradesh, India"
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

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display tracking-wide mb-6 text-foreground">
              {mode === 'institutional' ? t('institutionalServices') : t('creatorStudio')}
            </h1>

            {/* Compact Typewriter Subtitle */}
            <div className="mb-10 flex justify-center">
              <TypewriterText
                anchorText={t('ourServices')}
                phrases={typewriterSentences}
                anchorClassName={mode === 'institutional' ? 'text-institutional font-semibold mr-1.5' : 'text-creator font-semibold mr-1.5'}
                className="text-base md:text-lg text-foreground/60"
                speed={120}
                pauseDuration={2800}
              />
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-foreground/50 max-w-2xl mx-auto mb-14 leading-relaxed animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              {description}
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 mb-14 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center gap-2 text-sm text-foreground/40">
                <Shield className="w-4 h-4" />
                <span>{t('confidentialityTitle')}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/40">
                <CheckCircle className="w-4 h-4" />
                <span>{t('realisticTimelinesTitle')}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-6 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <Link
                to="/services"
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-background transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 min-h-[48px] ${mode === 'institutional'
                  ? 'bg-institutional hover:bg-institutional/90'
                  : 'bg-creator hover:bg-creator/90'
                  }`}
              >
                {mode === 'institutional' ? t('viewServices') : t('seePortfolio')}
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium border border-border hover:bg-foreground/5 hover:border-border/60 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 min-h-[48px]"
              >
                {t('contactUs')}
              </a>
            </div>
          </div>
        </section>

        {/* Creator Mode Notice */}
        {mode === 'creator' && (
          <section className="px-6 pb-16">
            <CreatorModeNotice />
          </section>
        )}


        {/* Services Section - Teaser Mode (Top 3 Only) */}
        <ServicesSection mode={mode} isTeaser={true} />

        {/* Client Work Summary Section */}
        <section className="py-32 px-6 border-t border-border bg-black">
          <ClientWorkSummary mode={mode} />
        </section>
      </main>

      <Footer mode={mode} />
    </>
  );
};

interface StatBlockProps {
  value: string;
  label: string;
  mode: 'institutional' | 'creator';
}

const StatBlock = ({ value, label, mode }: StatBlockProps) => (
  <div className="text-center">
    <div className={`text-xl md:text-4xl font-display tracking-wide mb-1 md:mb-2 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
      }`}>
      {value}
    </div>
    <div className="text-[10px] md:text-sm text-foreground/40 tracking-wide leading-tight">
      {label}
    </div>
  </div>
);

export default Home;
