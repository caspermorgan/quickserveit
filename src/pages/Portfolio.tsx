import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useTranslation } from '@/hooks/useTranslation';
import { useState, useEffect, useRef } from 'react';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ExternalLink, Calendar, Shield, Award } from 'lucide-react';
import { H1 } from '@/components/Typography';

const Portfolio = () => {
  const { mode, setHasEntered, setCurrentSection } = useMode();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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

    const sections = [heroRef, contentRef, ctaRef];
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

  const linkedInUrl = 'https://www.linkedin.com/in/vinodkumar-singh-quickserveit';

  return (
    <>
      <Helmet>
        <title>Portfolio | {t('brandName')} - Work Showcase Coming Soon</title>
        <meta name="description" content="Detailed case studies and work samples launching soon. Follow us on LinkedIn for real-time updates and proof of work." />
      </Helmet>

      <CursorLight mode={mode} />
      <FilmGrain />
      <FloatingNavbar mode={mode} onReturn={handleReturn} isVisible={true} />

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
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${mode === 'institutional' ? 'bg-institutional/10 border border-institutional/20' : 'bg-creator/10 border border-creator/20'
              }`}>
              <Sparkles className={`w-4 h-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
              <span className={`text-sm font-medium ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>
                Portfolio Launching Soon
              </span>
            </div>

            <H1 className="mb-6">
              Work in <span className={mode === 'institutional' ? 'text-institutional' : 'text-creator'}>Progress</span>
            </H1>
            <p className="text-foreground/70 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              {mode === 'institutional'
                ? "We're currently documenting institutional projects with the same precision we bring to our work. Detailed case studies showcasing data systems, documentation workflows, and measurable outcomes will be published shortly."
                : "We're curating a portfolio that reflects the quality of our production work. Detailed case studies featuring documentary projects, content series, and creator collaborations will be released soon."}
            </p>
          </div>

          {/* Main Content */}
          <div
            ref={contentRef}
            id="content"
            className={`max-w-4xl mx-auto mb-12 sm:mb-14 md:mb-16 transition-all duration-700 ease-out delay-100 ${visibleSections.has('content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <div className={`glass-card rounded-2xl p-8 sm:p-10 md:p-12 border ${mode === 'institutional' ? 'border-institutional/30' : 'border-creator/30'
              }`}>
              <h2 className="text-2xl sm:text-3xl font-display mb-6 sm:mb-8">Why the Wait?</h2>

              <div className="space-y-6 mb-8 sm:mb-10">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'
                    }`}>
                    <Shield className={`w-6 h-6 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Client Confidentiality First</h3>
                    <p className="text-foreground/60 leading-relaxed">
                      {mode === 'institutional'
                        ? "Institutional data requires careful anonymization. We're preparing case studies that demonstrate our capabilities while protecting sensitive information."
                        : "Creator partnerships involve NDAs and content rights. We're securing permissions to showcase work that represents our production quality."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'
                    }`}>
                    <Award className={`w-6 h-6 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Quality Over Speed</h3>
                    <p className="text-foreground/60 leading-relaxed">
                      {"We're building a portfolio that reflects our standards — detailed, honest, and results-focused. No filler projects, no inflated claims."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'
                    }`}>
                    <Calendar className={`w-6 h-6 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Active Work in Progress</h3>
                    <p className="text-foreground/60 leading-relaxed">
                      {mode === 'institutional'
                        ? "Currently serving educational institutions across Gorakhpur with UDISE+ processing, examination typing, and data management. Work is ongoing, documentation is being prepared."
                        : "Actively producing content for documentary series, YouTube creators, and brand storytelling projects. Deliverables are in progress, case studies will follow."}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-5 sm:p-6 rounded-xl border-l-4 ${mode === 'institutional' ? 'bg-institutional/5 border-institutional/40' : 'bg-creator/5 border-creator/40'
                }`}>
                <p className="text-foreground/70 leading-relaxed">
                  <span className={`font-semibold ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>
                    Strategic Positioning:
                  </span>{' '}
                  {"We're not hiding a lack of work — we're curating proof of serious work. Detailed case studies, client testimonials, and project breakdowns will be released on LinkedIn first, where our professional network can engage directly."}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div
            ref={ctaRef}
            id="cta"
            className={`max-w-3xl mx-auto transition-all duration-700 ease-out delay-200 ${visibleSections.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <div className={`glass-card rounded-2xl p-8 sm:p-10 border text-center ${mode === 'institutional' ? 'border-institutional/30' : 'border-creator/30'
              }`}>
              <h2 className="text-2xl sm:text-3xl font-display mb-4">Follow the Work on LinkedIn</h2>
              <p className="text-foreground/60 mb-8 max-w-2xl mx-auto leading-relaxed">
                Real-time updates, project insights, and case study releases happen on LinkedIn. Connect with us to see proof of work as it unfolds.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${mode === 'institutional' ? 'bg-institutional hover:shadow-institutional/30' : 'bg-creator hover:shadow-creator/30'
                    } text-background hover:shadow-xl`}
                >
                  <ExternalLink className="w-5 h-5" />
                  View LinkedIn Profile
                </a>

                <button
                  onClick={() => navigate('/contact')}
                  className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border ${mode === 'institutional' ? 'border-institutional hover:bg-institutional' : 'border-creator hover:bg-creator'
                    } hover:text-background`}
                >
                  Discuss Your Project
                </button>
              </div>

              <p className="text-xs text-foreground/40 mt-6">
                Portfolio case studies releasing Q1 2026 • LinkedIn gets first access
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer mode={mode} />
    </>
  );
};

export default Portfolio;
