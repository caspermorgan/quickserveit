import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import { Shield, Target, Clock, Briefcase, CheckCircle, TrendingUp } from 'lucide-react';
import { H1, H2 } from '@/components/Typography';

const About = () => {
  const { mode, setHasEntered, setCurrentSection } = useMode();
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

      <main className="min-h-screen bg-background pt-24 sm:pt-28 md:pt-32 pb-28 sm:pb-28 md:pb-20 relative overflow-hidden">
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
              About <span className={mode === 'institutional' ? 'text-institutional' : 'text-creator'}>QuickServe IT</span>
            </H1>
            <p className="text-foreground/70 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              {mode === 'institutional'
                ? "This is not a hobby blog or generic agency. This is a professional freelancing and portfolio platform built for serious institutional work — data systems, documentation workflows, and measurable outcomes."
                : "This is not a hobby blog or generic agency. This is a professional freelancing and portfolio platform built for serious creator production — documentary editing, content series, and high-quality deliverables."}
            </p>
          </div>

          {/* Purpose Section */}
          <div
            ref={purposeRef}
            id="purpose"
            className={`max-w-4xl mx-auto mb-12 sm:mb-14 md:mb-16 transition-all duration-700 ease-out delay-100 ${visibleSections.has('purpose') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <H2 className="mb-8 text-center">Why This Platform Exists</H2>
            <div className={`glass-card rounded-2xl p-8 sm:p-10 border ${mode === 'institutional' ? 'border-institutional/30' : 'border-creator/30'
              }`}>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'
                    }`}>
                    <Target className={`w-6 h-6 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Showcase Expertise</h3>
                    <p className="text-foreground/60 leading-relaxed">
                      This platform demonstrates capabilities through selected work, clear service definitions, and transparent processes. It's a living portfolio that reflects real execution standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'
                    }`}>
                    <Briefcase className={`w-6 h-6 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Professional Gateway</h3>
                    <p className="text-foreground/60 leading-relaxed">
                      This is where serious projects begin. Clients who value professionalism, clarity, and execution find a partner who understands scope, timelines, and deliverables.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'
                    }`}>
                    <TrendingUp className={`w-6 h-6 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Long-Term Partnerships</h3>
                    <p className="text-foreground/60 leading-relaxed">
                      Built for repeat collaboration. Smart businesses, startups, and individuals who want reliable execution return because the work is consistent, documented, and delivered as promised.
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
            <H2 className="mb-8 text-center">Working Principles</H2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-2xl glass-card border ${mode === 'institutional' ? 'border-institutional/20' : 'border-creator/20'
                }`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'
                  }`}>
                  <Shield className={`w-6 h-6 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Confidentiality by Default</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  Client data is never shared, stored unnecessarily, or reused. Every project is treated as confidential unless explicitly agreed otherwise.
                </p>
              </div>

              <div className={`p-6 rounded-2xl glass-card border ${mode === 'institutional' ? 'border-institutional/20' : 'border-creator/20'
                }`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'
                  }`}>
                  <Clock className={`w-6 h-6 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Realistic Timelines</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  No false promises. Deadlines are set based on actual capacity, complexity, and quality standards. Late changes are communicated immediately.
                </p>
              </div>

              <div className={`p-6 rounded-2xl glass-card border ${mode === 'institutional' ? 'border-institutional/20' : 'border-creator/20'
                }`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'
                  }`}>
                  <CheckCircle className={`w-6 h-6 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Scope-Based Execution</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  Only what is agreed upon is delivered. Scope creep is addressed transparently. Changes are documented and priced separately.
                </p>
              </div>

              <div className={`p-6 rounded-2xl glass-card border ${mode === 'institutional' ? 'border-institutional/20' : 'border-creator/20'
                }`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'
                  }`}>
                  <Target className={`w-6 h-6 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Focused Expertise</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {mode === 'institutional'
                    ? "Specialized in institutional documentation, data systems, and educational workflows. Not a generalist — a specialist."
                    : "Specialized in video production, documentary editing, and content creation. Not a generalist — a specialist."}
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
            <H2 className="mb-8 text-center">Who This Platform Serves</H2>
            <div className={`glass-card rounded-2xl p-8 sm:p-10 border ${mode === 'institutional' ? 'border-institutional/30' : 'border-creator/30'
              }`}>
              <p className="text-foreground/70 leading-relaxed mb-6">
                This platform is built for clients who understand that quality work requires clear communication, realistic timelines, and mutual respect. It's for:
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
                    Not for everyone:
                  </span>{' '}
                  This platform is not for clients seeking shortcuts, rock-bottom prices, or unrealistic turnarounds. It's for those who understand that professional work requires professional terms.
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
              <h3 className="text-xl font-semibold mb-3">Working Hours</h3>
              <p className="text-2xl font-display mb-2">10:00 AM – 4:00 PM IST</p>
              <p className="text-foreground/60 mb-4">Monday – Saturday</p>
              <p className="text-sm text-foreground/50 leading-relaxed">
                Messages sent outside working hours will be answered the next business day. This ensures focused work during active hours and prevents burnout.
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
