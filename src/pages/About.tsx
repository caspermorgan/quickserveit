import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import { Shield, Target, Users, Zap, Eye, Clock, Quote, ArrowRight, School, Building2, GraduationCap, BookOpen, Video, Palette, Mic, TrendingUp } from 'lucide-react';
import { H1, H2 } from '@/components/Typography';

const About = () => {
  const { mode, setHasEntered, setCurrentSection } = useMode();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  const heroRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLElement>(null);
  const founderRef = useRef<HTMLElement>(null);
  const serveRef = useRef<HTMLElement>(null);
  const dontDoRef = useRef<HTMLElement>(null);
  const hoursRef = useRef<HTMLElement>(null);

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

    const sections = [heroRef, philosophyRef, founderRef, serveRef, dontDoRef, hoursRef];
    sections.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleReturn = () => {
    setHasEntered(false);
    setCurrentSection(mode);
    navigate('/');
  };

  return (
    <>
      <Helmet>
        <title>{t('aboutPageTitle')} | {t('brandName')}</title>
        <meta name="description" content={t('aboutIntro')} />
      </Helmet>

      <CursorLight mode={mode} />
      <FilmGrain />

      <FloatingNavbar
        mode={mode}
        onReturn={handleReturn}
        isVisible={true}
      />

      <main className="min-h-screen bg-background pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20 md:pb-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header */}
          <div
            ref={heroRef}
            id="hero"
            className={`hero-anchor text-center section-gap-standard max-w-3xl mx-auto transition-all duration-700 ease-out ${visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight leading-[1.1] mb-6 sm:mb-8">
              About <span className={mode === 'institutional' ? 'text-institutional' : 'text-creator'}>Us</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed px-4 text-balance max-w-[60ch] mx-auto font-light">
              {t('aboutIntro')}
            </p>
          </div>

          {/* Philosophy Section */}
          <section
            ref={philosophyRef}
            id="philosophy"
            className={`max-w-3xl mx-auto section-gap-standard transition-all duration-700 ease-out delay-100 ${visibleSections.has('philosophy') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold tracking-tight mb-8 sm:mb-10 md:mb-12 text-center">{t('ourPhilosophy')}</h2>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              <PhilosophyCard
                icon={Shield}
                title={t('confidentialityTitle')}
                description={t('confidentialityDesc')}
                mode={mode}
              />
              <PhilosophyCard
                icon={Clock}
                title={t('realisticTimelinesTitle')}
                description={t('realisticTimelinesDesc')}
                mode={mode}
              />
              <PhilosophyCard
                icon={Eye}
                title={t('calmCommTitle')}
                description={t('calmCommDesc')}
                mode={mode}
              />
              <PhilosophyCard
                icon={Target}
                title={t('focusedExpertiseTitle')}
                description={t('focusedExpertiseDesc')}
                mode={mode}
              />
            </div>
          </section>

          {/* Founder's Message Teaser */}
          <section
            ref={founderRef}
            id="founder"
            className={`max-w-3xl mx-auto section-gap-standard transition-all duration-700 ease-out delay-200 ${visibleSections.has('founder') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <Link
              to="/founder"
              className={`
                block p-8 sm:p-9 md:p-10 rounded-3xl glass-card border-2 transition-all duration-500 hover:scale-[1.01]
                ${mode === 'institutional'
                  ? 'border-institutional/25 hover:border-institutional/50 hover:bg-institutional/8 hover:shadow-institutional/20'
                  : 'border-creator/25 hover:border-creator/50 hover:bg-creator/8 hover:shadow-creator/20'
                }
                group hover:shadow-2xl
              `}
            >
              <div className="flex items-start gap-5 mb-7">
                <Quote className={`w-9 h-9 flex-shrink-0 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-display font-bold mb-2">{t('aNoteFromFounder')} {t('theFounder')}</h2>
                  <p className="text-foreground/55 text-sm sm:text-base font-light">{t('theStoryBehindQuickserve')}</p>
                </div>
                <ArrowRight className={`w-6 h-6 transition-transform duration-300 group-hover:translate-x-2 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
              </div>

              <blockquote className="text-lg sm:text-xl italic text-foreground/75 leading-relaxed border-l-4 pl-6 mb-5 font-light" style={{ borderColor: mode === 'institutional' ? 'rgba(234,179,8,0.4)' : 'rgba(34,211,238,0.4)' }}>
                {t('founderOpeningQuote')}
              </blockquote>

              <p className={`text-sm sm:text-base font-semibold tracking-wide ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>
                {t('aboutTheFounder')} →
              </p>
            </Link>
          </section>

          {/* Who We Serve - Mode Specific */}
          <section
            ref={serveRef}
            id="serve"
            className={`max-w-3xl mx-auto section-gap-standard transition-all duration-700 ease-out delay-300 ${visibleSections.has('serve') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold tracking-tight mb-8 sm:mb-10 md:mb-12 text-center">{t('whoWeServe')}</h2>
            <div className="max-w-2xl mx-auto">
              {mode === 'institutional' ? (
                <div className="p-8 sm:p-9 md:p-10 rounded-3xl glass-card border-2 border-institutional/35 hover:border-institutional/50 transition-all duration-500 hover:shadow-2xl hover:shadow-institutional/10">
                  <div className="flex items-center gap-4 mb-7">
                    <div className="w-14 h-14 rounded-xl bg-institutional/15 flex items-center justify-center">
                      <Users className="w-7 h-7 text-institutional" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold">{t('institutions')}</h3>
                  </div>
                  <ul className="space-y-4 text-foreground/70">
                    {t('institutionsList').split('|').map((item, i) => {
                      const icons = [School, Building2, GraduationCap, BookOpen];
                      const IconComponent = icons[i % icons.length];
                      return (
                        <li key={i} className="flex items-start gap-3.5 group transition-all hover:translate-x-1">
                          <div className="bg-white/8 p-2.5 rounded-full shrink-0 group-hover:bg-institutional/15 transition-colors">
                            <IconComponent className="w-4.5 h-4.5 text-institutional" />
                          </div>
                          <span className="text-sm sm:text-base group-hover:text-foreground transition-colors">{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                <div className="p-8 sm:p-9 md:p-10 rounded-3xl glass-card border-2 border-creator/35 hover:border-creator/50 transition-all duration-500 hover:shadow-2xl hover:shadow-creator/10">
                  <div className="flex items-center gap-4 mb-7">
                    <div className="w-14 h-14 rounded-xl bg-creator/15 flex items-center justify-center">
                      <Zap className="w-7 h-7 text-creator" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold">{t('creators')}</h3>
                  </div>
                  <ul className="space-y-4 text-foreground/70">
                    {t('creatorsList').split('|').map((item, i) => {
                      const icons = [Video, Palette, Mic, TrendingUp];
                      const IconComponent = icons[i % icons.length];
                      return (
                        <li key={i} className="flex items-start gap-3.5 group transition-all hover:translate-x-1">
                          <div className="bg-white/8 p-2.5 rounded-full shrink-0 group-hover:bg-creator/15 transition-colors">
                            <IconComponent className="w-4.5 h-4.5 text-creator" />
                          </div>
                          <span className="text-sm sm:text-base group-hover:text-foreground transition-colors">{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </section>

          {/* What We Don't Do */}
          <section
            ref={dontDoRef}
            id="dont-do"
            className={`max-w-3xl mx-auto section-gap-standard transition-all duration-700 ease-out delay-400 ${visibleSections.has('dont-do') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold tracking-tight mb-8 sm:mb-10 md:mb-12 text-center">{t('whatWeDontDo')}</h2>
            <div className="p-8 sm:p-9 md:p-10 rounded-3xl glass-card border-2 border-border/25 hover:border-border/40 transition-all duration-500">
              <p className="text-foreground/70 mb-7 text-base sm:text-lg font-light leading-relaxed">
                {t('transparencyNote')}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {t('dontDoList').split('|').map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-foreground/60 text-sm sm:text-base">
                    <span className="text-red-400/70 text-lg">✗</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Working Hours Notice */}
          <section
            ref={hoursRef}
            id="hours"
            className={`max-w-2xl mx-auto text-center transition-all duration-700 ease-out delay-500 ${visibleSections.has('hours') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <div className={`p-8 rounded-2xl ${mode === 'institutional' ? 'bg-institutional/5 border border-institutional/20' : 'bg-creator/5 border border-creator/20'}`}>
              <Clock className={`w-8 h-8 mx-auto mb-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
              <h3 className="text-xl font-medium mb-3">{t('workingHours')}</h3>
              <p className="text-2xl font-display mb-2">10:00 AM – 4:00 PM IST</p>
              <p className="text-foreground/50">{t('workingDays')}</p>
              <p className="text-sm text-foreground/40 mt-4">
                {t('outsideHoursNote')}
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer mode={mode} />
    </>
  );
};

interface PhilosophyCardProps {
  icon: any;
  title: string;
  description: string;
  mode: 'institutional' | 'creator';
}

const PhilosophyCard = ({ icon: Icon, title, description, mode }: PhilosophyCardProps) => (
  <div className="p-6 sm:p-7 rounded-3xl glass-card border border-border/25 hover:border-border/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl group">
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${mode === 'institutional' ? 'bg-institutional/12 group-hover:bg-institutional/20' : 'bg-creator/12 group-hover:bg-creator/20'}`}>
      <Icon className={`w-7 h-7 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
    </div>
    <h3 className="text-lg sm:text-xl font-display font-semibold mb-3 group-hover:text-foreground transition-colors">{title}</h3>
    <p className="text-sm sm:text-base text-foreground/60 leading-relaxed group-hover:text-foreground/75 transition-colors">{description}</p>
  </div>
);

export default About;
