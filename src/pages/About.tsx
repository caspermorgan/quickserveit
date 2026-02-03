import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import PageWrapper from '@/components/layout/PageWrapper';
import PageHeader from '@/components/layout/PageHeader';
import { Shield, Zap, Lock, Gauge } from 'lucide-react';
import { H2 } from '@/components/Typography';

const About = () => {
  const { mode, setHasEntered, setCurrentSection } = useMode();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [expandedCore, setExpandedCore] = useState<'institute' | 'creator' | null>(null);

  const dualCoreRef = useRef<HTMLDivElement>(null);
  const arsenalRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

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

    const sections = [dualCoreRef, arsenalRef, valuesRef];
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
        <title>About | QuickServe IT - The Blueprint</title>
        <meta name="description" content="We Engineer Flow. Bridging the gap between Rural Education and Global Content Standards." />
      </Helmet>

      <PageWrapper mode={mode} onReturn={handleReturn}>
        <PageHeader
          title={t('aboutBlueprintHero')}
          subtitle={t('aboutBlueprintSubtext')}
        />

        {/* TASK 2: Dual Core Engine */}
        <div
          ref={dualCoreRef}
          id="dual-core"
          className={`mb-16 sm:mb-20 md:mb-24 transition-all duration-700 ease-out delay-100 ${visibleSections.has('dual-core') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <H2 className="mb-4 text-center">{t('aboutDualCoreTitle')}</H2>
          <p className="text-center text-foreground/60 mb-10 max-w-2xl mx-auto">{t('aboutDualCoreSubtitle')}</p>

          <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-foreground/10">
            {/* Left Side - Institutional */}
            <div
              className={`relative p-8 sm:p-10 transition-all duration-500 cursor-pointer group ${expandedCore === 'institute' ? 'md:col-span-2' : ''
                } ${mode === 'institutional' ? 'bg-institutional/5' : 'bg-foreground/5'}`}
              onMouseEnter={() => setExpandedCore('institute')}
              onMouseLeave={() => setExpandedCore(null)}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-institutional/10 flex items-center justify-center">
                    <Shield className="w-7 h-7 text-institutional" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-institutional">{t('aboutInstituteCore')}</h3>
                </div>
                <p className={`text-foreground/70 leading-relaxed transition-all duration-500 ${expandedCore === 'institute' ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden md:opacity-100 md:max-h-96'
                  }`}>
                  {t('aboutInstitutePhilosophy')}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-institutional/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Right Side - Creator */}
            <div
              className={`relative p-8 sm:p-10 transition-all duration-500 cursor-pointer group ${expandedCore === 'creator' ? 'md:col-span-2' : ''
                } ${mode === 'creator' ? 'bg-creator/5' : 'bg-foreground/5'}`}
              onMouseEnter={() => setExpandedCore('creator')}
              onMouseLeave={() => setExpandedCore(null)}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-creator/10 flex items-center justify-center">
                    <Zap className="w-7 h-7 text-creator" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-creator">{t('aboutCreatorCore')}</h3>
                </div>
                <p className={`text-foreground/70 leading-relaxed transition-all duration-500 ${expandedCore === 'creator' ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden md:opacity-100 md:max-h-96'
                  }`}>
                  {t('aboutCreatorPhilosophy')}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-creator/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>

        {/* TASK 3: The Arsenal - Tools Orbit */}
        <div
          ref={arsenalRef}
          id="arsenal"
          className={`max-w-4xl mx-auto mb-16 sm:mb-20 md:mb-24 transition-all duration-700 ease-out delay-200 ${visibleSections.has('arsenal') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <H2 className="mb-4 text-center">{t('aboutArsenalTitle')}</H2>
          <p className="text-center text-foreground/60 mb-12">{t('aboutArsenalCaption')}</p>

          <div className="relative h-[300px] sm:h-[400px] flex items-center justify-center">
            {/* Center - The Operator */}
            <div className={`absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center z-10 ${mode === 'institutional' ? 'bg-institutional/20 border-2 border-institutional' : 'bg-creator/20 border-2 border-creator'
              }`}>
              <span className="text-xs sm:text-sm font-semibold text-center">QuickServe</span>
            </div>

            {/* Orbiting Tools */}
            <div className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] animate-[spin_20s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-foreground/5 border border-foreground/10 flex items-center justify-center backdrop-blur-sm">
                <span className="text-xs font-medium">Premiere</span>
              </div>
            </div>

            <div className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] animate-[spin_25s_linear_infinite]">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-foreground/5 border border-foreground/10 flex items-center justify-center backdrop-blur-sm">
                <span className="text-xs font-medium">Excel</span>
              </div>
            </div>

            <div className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] animate-[spin_30s_linear_infinite]">
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-foreground/5 border border-foreground/10 flex items-center justify-center backdrop-blur-sm">
                <span className="text-xs font-medium">After FX</span>
              </div>
            </div>

            <div className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] animate-[spin_35s_linear_infinite]">
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-foreground/5 border border-foreground/10 flex items-center justify-center backdrop-blur-sm">
                <span className="text-xs font-medium">UDISE</span>
              </div>
            </div>

            {/* Orbit Ring */}
            <div className={`absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] rounded-full border border-dashed opacity-20 ${mode === 'institutional' ? 'border-institutional' : 'border-creator'
              }`} />
          </div>
        </div>

        {/* TASK 4: Core Values Cards */}
        <div
          ref={valuesRef}
          id="values"
          className={`transition-all duration-700 ease-out delay-300 ${visibleSections.has('values') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <H2 className="mb-12 text-center">{t('aboutCoreValuesTitle')}</H2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Value 1: Precision */}
            <div className={`glass-2 rounded-2xl p-8 border transition-all duration-500 hover:scale-105 hover:shadow-2xl group ${mode === 'institutional' ? 'border-institutional/20 hover:shadow-institutional/20' : 'border-creator/20 hover:shadow-creator/20'
              }`}>
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'
                }`}>
                <Gauge className={`w-7 h-7 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('aboutValuePrecisionTitle')}</h3>
              <p className="text-foreground/60 leading-relaxed text-sm">
                {t('aboutValuePrecisionDesc')}
              </p>
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${mode === 'institutional' ? 'shadow-[inset_0_0_20px_rgba(217,119,6,0.3)]' : 'shadow-[inset_0_0_20px_rgba(6,182,212,0.3)]'
                }`} />
            </div>

            {/* Value 2: Confidentiality */}
            <div className={`glass-2 rounded-2xl p-8 border transition-all duration-500 hover:scale-105 hover:shadow-2xl group ${mode === 'institutional' ? 'border-institutional/20 hover:shadow-institutional/20' : 'border-creator/20 hover:shadow-creator/20'
              }`}>
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'
                }`}>
                <Lock className={`w-7 h-7 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('aboutValueConfidentialityTitle')}</h3>
              <p className="text-foreground/60 leading-relaxed text-sm">
                {t('aboutValueConfidentialityDesc')}
              </p>
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${mode === 'institutional' ? 'shadow-[inset_0_0_20px_rgba(217,119,6,0.3)]' : 'shadow-[inset_0_0_20px_rgba(6,182,212,0.3)]'
                }`} />
            </div>

            {/* Value 3: Speed */}
            <div className={`glass-2 rounded-2xl p-8 border transition-all duration-500 hover:scale-105 hover:shadow-2xl group ${mode === 'institutional' ? 'border-institutional/20 hover:shadow-institutional/20' : 'border-creator/20 hover:shadow-creator/20'
              }`}>
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'
                }`}>
                <Zap className={`w-7 h-7 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('aboutValueSpeedTitle')}</h3>
              <p className="text-foreground/60 leading-relaxed text-sm">
                {t('aboutValueSpeedDesc')}
              </p>
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${mode === 'institutional' ? 'shadow-[inset_0_0_20px_rgba(217,119,6,0.3)]' : 'shadow-[inset_0_0_20px_rgba(6,182,212,0.3)]'
                }`} />
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default About;
