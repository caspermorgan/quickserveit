import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useTranslation } from '@/hooks/useTranslation';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Clock, Rocket } from 'lucide-react';

const Portfolio = () => {
  const { mode, setHasEntered } = useMode();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleReturn = () => {
    setHasEntered(false);
    navigate('/');
  };

  return (
    <>
      <Helmet>
        <title>{t('portfolio')} | {t('brandName')}</title>
        <meta name="description" content="Our portfolio showcase is coming soon. We're preparing to share our best work with you." />
      </Helmet>

      <CursorLight mode={mode} />
      <FilmGrain />
      <FloatingNavbar mode={mode} onReturn={handleReturn} isVisible={true} />

      <main className="min-h-screen bg-background pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20 md:pb-24 relative overflow-hidden">
        {/* Background Gradient Orbs */}
        <div className={`gradient-orb ${mode === 'institutional' ? 'gradient-orb-institutional' : 'gradient-orb-creator'} w-[500px] h-[500px] top-0 right-0 opacity-20`} />
        <div className={`gradient-orb ${mode === 'institutional' ? 'gradient-orb-institutional' : 'gradient-orb-creator'} w-[400px] h-[400px] bottom-0 left-0 opacity-15`} />

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
          {/* Hero Section */}
          <div className="min-h-[60vh] flex flex-col justify-center items-center text-center">
            {/* Icon */}
            <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center mb-8 sm:mb-10 backdrop-blur-sm ${mode === 'institutional'
                ? 'bg-institutional/15 ring-2 ring-institutional/30'
                : 'bg-creator/15 ring-2 ring-creator/30'
              }`}>
              <Rocket className={`w-10 h-10 sm:w-12 sm:h-12 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.1] mb-6 sm:mb-8">
              Portfolio <span className={mode === 'institutional' ? 'text-institutional' : 'text-creator'}>Coming Soon</span>
            </h1>

            {/* Description */}
            <p className="text-foreground/65 text-base sm:text-lg md:text-xl leading-relaxed mb-10 sm:mb-12 max-w-[60ch] mx-auto font-light px-4">
              {mode === 'institutional'
                ? 'We\'re preparing a showcase of our institutional work. Check back soon to see how we\'ve helped educational institutions digitize and streamline their processes.'
                : 'We\'re curating our best creator projects. Check back soon to see our video editing, content creation, and production work.'}
            </p>

            {/* Status Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full max-w-2xl mb-10 sm:mb-12">
              {/* In Progress */}
              <div className={`p-6 sm:p-7 rounded-2xl glass-card border-2 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${mode === 'institutional'
                  ? 'border-institutional/30 hover:border-institutional/40'
                  : 'border-creator/30 hover:border-creator/40'
                }`}>
                <div className="flex items-center gap-3 mb-3">
                  <Clock className={`w-5 h-5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                  <h3 className="font-display font-semibold text-lg">In Progress</h3>
                </div>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  We're documenting our projects and preparing case studies to share with you.
                </p>
              </div>

              {/* Coming Soon */}
              <div className={`p-6 sm:p-7 rounded-2xl glass-card border-2 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${mode === 'institutional'
                  ? 'border-institutional/30 hover:border-institutional/40'
                  : 'border-creator/30 hover:border-creator/40'
                }`}>
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className={`w-5 h-5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                  <h3 className="font-display font-semibold text-lg">Available Soon</h3>
                </div>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  Portfolio showcase will be live soon. Stay tuned for updates!
                </p>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => navigate('/contact')}
              className={`inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold transition-all duration-300 hover:scale-105 active:scale-95 ${mode === 'institutional'
                  ? 'bg-institutional hover:shadow-institutional/40'
                  : 'bg-creator hover:shadow-creator/40'
                } text-background hover:shadow-2xl text-base sm:text-lg`}
            >
              Get in Touch
            </button>
            <p className="text-sm text-foreground/50 mt-4 font-medium">
              💬 Interested in our work? Let's discuss your project
            </p>
          </div>
        </section>
      </main>

      <Footer mode={mode} />
    </>
  );
};

export default Portfolio;
