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
import Testimonials from '@/components/Testimonials';
import ServicesSection from '@/components/ServicesSection';
import HowItWorks from '@/components/HowItWorks';
import { ArrowRight, Shield, Clock, CheckCircle } from 'lucide-react';

const Home = () => {
  const { mode, setHasEntered } = useMode();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleReturn = () => {
    setHasEntered(false);
    navigate('/');
  };

  const institutionalPhrases = [
    t('heroInst1'),
    t('heroInst2'),
    t('heroInst3'),
    t('heroInst4')
  ];

  const creatorPhrases = [
    t('heroCreator1'),
    t('heroCreator2'),
    t('heroCreator3'),
    t('heroCreator1')
  ];

  const phrases = mode === 'institutional' ? institutionalPhrases : creatorPhrases;

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
            {/* Typewriter Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display tracking-wide mb-10 min-h-[1.5em] md:min-h-[1.3em]">
              <TypewriterText
                phrases={phrases}
                className={mode === 'institutional' ? 'text-institutional' : 'text-creator'}
                speed={100}
                pauseDuration={2500}
              />
            </h1>

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
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-background transition-all duration-300 ${mode === 'institutional'
                  ? 'bg-institutional hover:bg-institutional/90'
                  : 'bg-creator hover:bg-creator/90'
                  }`}
              >
                {mode === 'institutional' ? t('viewServices') : t('seePortfolio')}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium border border-border hover:bg-foreground/5 transition-all duration-300"
              >
                {t('contactUs')}
              </a>
            </div>

            {/* Stats strip */}
            <div className="mt-20 md:mt-20 grid grid-cols-3 gap-10 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
              <StatBlock
                value={mode === 'institutional' ? '50+' : '200+'}
                label={mode === 'institutional' ? t('schoolsServed') : t('projectsDelivered')}
                mode={mode}
              />
              <StatBlock
                value="100%"
                label={t('confidentialityTitle')}
                mode={mode}
              />
              <StatBlock
                value={mode === 'institutional' ? '5000+' : '1M+'}
                label={mode === 'institutional' ? t('documents') : t('viewsGenerated')}
                mode={mode}
              />
            </div>
          </div>
        </section>

        {/* Creator Mode Notice */}
        {mode === 'creator' && (
          <section className="px-6 pb-16">
            <CreatorModeNotice />
          </section>
        )}

        {/* Services Section */}
        <ServicesSection mode={mode} />

        {/* How It Works Section */}
        <HowItWorks mode={mode} />

        {/* Testimonials Section */}
        <section className="py-32 px-6 border-t border-border bg-white/5">
          <Testimonials mode={mode} />
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
    <div className={`text-2xl md:text-4xl font-display tracking-wide mb-2 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
      }`}>
      {value}
    </div>
    <div className="text-xs md:text-sm text-foreground/40 tracking-wide">
      {label}
    </div>
  </div>
);

export default Home;
