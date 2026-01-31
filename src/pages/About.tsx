import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import { Shield, Target, Clock, Briefcase, CheckCircle, TrendingUp } from 'lucide-react';
import { H1, H2 } from '@/components/Typography';

const About = () => {
  const { mode, setHasEntered, setCurrentSection } = useMode();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  const heroRef = useRef<HTMLDivElement>(null);
  const purposeRef = useRef<HTMLDivElement>(null);
  const principlesRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);
  const hoursRef = useRef<HTMLDivElement>(null);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Intersection Observer for smooth scroll animations
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

    const sections = [heroRef, purposeRef, principlesRef, approachRef, hoursRef];
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
        <title>About | QuickServe IT - Professional Freelancing Platform</title>
        <meta name="description" content="A professional freelancing and portfolio platform for serious projects. Focused on execution, quality, and long-term partnerships." />
      </Helmet>

      <CursorLight mode={mode} />
      <FilmGrain />

      <FloatingNavbar
        mode={mode}
        onReturn={handleReturn}
        isVisible={true}
      />

      <main id="main-content" className="min-h-screen bg-background pt-24 sm:pt-28 md:pt-32 pb-28 sm:pb-28 md:pb-20 relative overflow-hidden">
        {/* Background Gradient Orbs */}
        <div className={`gradient-orb ${mode === 'institutional' ? 'gradient-orb-institutional' : 'gradient-orb-creator'} w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] top-0 right-0 opacity-20`} />
        <div className={`gradient-orb ${mode === 'institutional' ? 'gradient-orb-institutional' : 'gradient-orb-creator'} w-[350px] sm:w-[450px] md:w-[500px] h-[350px] sm:h-[450px] md:h-[500px] bottom-0 left-0 opacity-15`} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Section */}
          <div
            ref={heroRef}
            id="hero"
            className={`text-center mb-12 sm:mb-14 md:mb-16 max-w-4xl mx-auto transition-all duration-700 ease-out ${visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <H1 className="mb-6">
              {t('aboutHeroTitle').split(' ').slice(0, -2).join(' ')} <span className={mode === 'institutional' ? 'text-institutional' : 'text-creator'}>{t('aboutHeroTitle').split(' ').slice(-2).join(' ')}</span>
            </H1>
            <p className="text-foreground/70 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              {t('aboutHeroSubtitle')}
            </p>
          </div>

          {/* Purpose Section */}
          <div
            ref={purposeRef}
            id="purpose"
            className={`max-w-4xl mx-auto mb-12 sm:mb-14 md:mb-16 transition-all duration-700 ease-out delay-100 ${visibleSections.has('purpose') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <H2 className="mb-8 text-center">{t('aboutPurposeTitle')}</H2>
            <div className={`glass-card rounded-2xl p-8 sm:p-10 border ${mode === 'institutional' ? 'border-institutional/30' : 'border-creator/30'
              }`}>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'
                    }`}>
                    <Target className={`w-6 h-6 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t('aboutPurpose1Title')}</h3>
                    <p className="text-foreground/60 leading-relaxed">
                      {t('aboutPurpose1Desc')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'
                    }`}>
                    <Briefcase className={`w-6 h-6 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t('aboutPurpose2Title')}</h3>
                    <p className="text-foreground/60 leading-relaxed">
                      {t('aboutPurpose2Desc')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'
                    }`}>
                    <TrendingUp className={`w-6 h-6 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t('aboutPurpose3Title')}</h3>
                    <p className="text-foreground/60 leading-relaxed">
                      {t('aboutPurpose3Desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Working Principles */}
          <div
            ref={principlesRef}
            id="principles"
            className={`max-w-4xl mx-auto mb-12 sm:mb-14 md:mb-16 transition-all duration-700 ease-out delay-200 ${visibleSections.has('principles') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <H2 className="mb-8 text-center">{t('aboutPrinciplesTitle')}</H2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-2xl glass-card border ${mode === 'institutional' ? 'border-institutional/20' : 'border-creator/20'
                }`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'
                  }`}>
                  <Shield className={`w-6 h-6 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t('aboutPrinciple1Title')}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {t('aboutPrinciple1Desc')}
                </p>
              </div>

              <div className={`p-6 rounded-2xl glass-card border ${mode === 'institutional' ? 'border-institutional/20' : 'border-creator/20'
                }`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'
                  }`}>
                  <Clock className={`w-6 h-6 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t('aboutPrinciple2Title')}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {t('aboutPrinciple2Desc')}
                </p>
              </div>

              <div className={`p-6 rounded-2xl glass-card border ${mode === 'institutional' ? 'border-institutional/20' : 'border-creator/20'
                }`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'
                  }`}>
                  <CheckCircle className={`w-6 h-6 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t('aboutPrinciple3Title')}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {t('aboutPrinciple3Desc')}
                </p>
              </div>

              <div className={`p-6 rounded-2xl glass-card border ${mode === 'institutional' ? 'border-institutional/20' : 'border-creator/20'
                }`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'
                  }`}>
                  <Target className={`w-6 h-6 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t('aboutPrinciple4Title')}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {t('aboutPrinciple4Desc')}
                </p>
              </div>
            </div>
          </div>

          {/* Who This Is For */}
          <div
            ref={approachRef}
            id="approach"
            className={`max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16 transition-all duration-700 ease-out delay-300 ${visibleSections.has('approach') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <H2 className="mb-8 text-center">{t('aboutWhoWeServeTitle')}</H2>
            <div className={`glass-card rounded-2xl p-8 sm:p-10 border ${mode === 'institutional' ? 'border-institutional/30' : 'border-creator/30'
              }`}>
              <p className="text-foreground/70 leading-relaxed mb-6">
                {t('aboutWhoWeServeIntro')}
              </p>
              <ul className="space-y-3">
                {mode === 'institutional' ? (
                  <>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-institutional mt-0.5 shrink-0" />
                      <span className="text-foreground/60">Educational institutions managing UDISE+, scholarships, and examination data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-institutional mt-0.5 shrink-0" />
                      <span className="text-foreground/60">Schools and colleges needing professional documentation and typing services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-institutional mt-0.5 shrink-0" />
                      <span className="text-foreground/60">Organizations requiring secure, compliant data processing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-institutional mt-0.5 shrink-0" />
                      <span className="text-foreground/60">Clients who value accuracy, confidentiality, and zero-rejection guarantees</span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-creator mt-0.5 shrink-0" />
                      <span className="text-foreground/60">Documentary filmmakers needing professional editing and sound design</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-creator mt-0.5 shrink-0" />
                      <span className="text-foreground/60">YouTube creators building consistent, high-retention content</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-creator mt-0.5 shrink-0" />
                      <span className="text-foreground/60">Brands and startups requiring professional video production</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-creator mt-0.5 shrink-0" />
                      <span className="text-foreground/60">Clients who value cinematic quality, platform-ready delivery, and clear revisions</span>
                    </li>
                  </>
                )}
              </ul>

              <div className={`mt-8 p-5 rounded-xl border-l-4 ${mode === 'institutional' ? 'bg-institutional/5 border-institutional/40' : 'bg-creator/5 border-creator/40'
                }`}>
                <p className="text-foreground/70 leading-relaxed">
                  <span className={`font-semibold ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>
                    {t('aboutNotForTitle')}
                  </span>{' '}
                  {t('aboutNotForDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div
            ref={hoursRef}
            id="hours"
            className={`max-w-2xl mx-auto transition-all duration-700 ease-out delay-400 ${visibleSections.has('hours') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <div className={`glass-card rounded-2xl p-8 text-center border ${mode === 'institutional' ? 'border-institutional/30' : 'border-creator/30'
              }`}>
              <Clock className={`w-10 h-10 mx-auto mb-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
              <h3 className="text-xl font-semibold mb-3">{t('aboutWorkingHoursTitle')}</h3>
              <p className="text-2xl font-display mb-2">{t('aboutWorkingHoursTime')}</p>
              <p className="text-foreground/60 mb-4">{t('aboutWorkingHoursDays')}</p>
              <p className="text-sm text-foreground/50 leading-relaxed">
                {t('aboutWorkingHoursNote')}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer mode={mode} />
    </>
  );
};

export default About;
