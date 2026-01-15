import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useTranslation } from '@/hooks/useTranslation';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { Sparkles, Clock, Rocket } from 'lucide-react';

const Portfolio = () => {
  const { mode, setHasEntered } = useMode();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set(prev).add(entry.target.id));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = [heroRef, cardsRef, ctaRef];
    sections.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

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
          <div
            ref={heroRef}
            id="hero"
            className={`hero-feature text-center transition-all duration-700 ease-out ${visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight leading-[1.1] mb-6 sm:mb-8">
              Portfolio <span className={mode === 'institutional' ? 'text-institutional' : 'text-creator'}>Coming Soon</span>
            </h1>

            {/* Description */}
            <p className="text-foreground/80 text-base sm:text-lg md:text-xl leading-relaxed mb-10 sm:mb-12 max-w-[60ch] mx-auto font-light px-4">
              {mode === 'institutional'
                ? 'We\'re preparing a showcase of our institutional work. Check back soon to see how we\'ve helped educational institutions digitize and streamline their processes.'
                : 'We\'re curating our best creator projects. Check back soon to see our video editing, content creation, and production work.'}
            </p>

            {/* Status Cards */}
            <div
              ref={cardsRef}
              id="cards"
              className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full max-w-2xl mb-10 sm:mb-12 transition-all duration-700 ease-out delay-100 ${visibleSections.has('cards') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
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
            <div
              ref={ctaRef}
              id="cta"
              className={`transition-all duration-700 ease-out delay-200 ${visibleSections.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
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
          </div>
        </section>
      </main>

      <Footer mode={mode} />
    </>
  );
};

export default Portfolio;
