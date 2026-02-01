import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import DirectLineInfo from '@/components/DirectLineInfo';
import {
  Clock, Mail, MapPin, Shield, CheckCircle, MessageCircle,
  Zap, X, Sparkles, ChevronDown, ChevronUp, Send
} from 'lucide-react';
import { H1, H2 } from '@/components/Typography';
import { toast } from 'sonner';

const Contact = () => {
  const { mode, setHasEntered, setCurrentSection } = useMode();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [showContextBadge, setShowContextBadge] = useState(false);
  const [contextLabel, setContextLabel] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  const heroRef = useRef<HTMLDivElement>(null);
  const contactMethodsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const infoCardsRef = useRef<HTMLDivElement>(null);

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

    const sections = [heroRef, contactMethodsRef, formRef, faqRef, infoCardsRef];
    sections.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Detect context from navigation state
  useEffect(() => {
    const state = location.state as { intent?: string; serviceName?: string; plan?: string } | null;

    if (state?.intent) {
      let label = '';

      switch (state.intent) {
        case 'general_project':
          label = 'General Project Inquiry';
          break;
        case 'service':
          if (state.serviceName) {
            label = `Topic: ${state.serviceName}`;
          }
          break;
        case 'pricing':
          if (state.plan) {
            label = `Topic: ${state.plan} Plan`;
          }
          break;
        default:
          break;
      }

      if (label) {
        setContextLabel(label);
        setShowContextBadge(true);
      }
    }
  }, [location.state]);

  const handleReturn = () => {
    setHasEntered(false);
    setCurrentSection(mode);
    navigate('/');
  };

  const handleEmailCopy = async () => {
    try {
      await navigator.clipboard.writeText('letsquickserveit@gmail.com');
      toast.success('Email copied to clipboard!', {
        description: 'You can now paste it in your email client.',
      });
    } catch (error) {
      toast.error('Failed to copy email', {
        description: 'Please try again or use the contact form below.',
      });
    }
  };

  const whatsappNumber = '916388224877';
  const whatsappMessage = mode === 'institutional'
    ? 'Hello quickserveit, I need institutional documentation services.'
    : 'Hello quickserveit, I need creator production services.';

  const faqs = [
    {
      question: 'How quickly will I receive a response?',
      answer: 'We typically respond within 2-4 hours during business hours (Mon-Sat, 10 AM-4 PM IST). Messages sent outside business hours are answered first thing the next working day.'
    },
    {
      question: 'What information should I include in my inquiry?',
      answer: 'Please include: your name, organization/channel name, type of service needed, project timeline, and any specific requirements. The more details you provide, the better we can assist you.'
    },
    {
      question: 'Is my information kept confidential?',
      answer: 'Absolutely. We treat all client communications as strictly confidential. Your data is never shared with third parties, and we follow rigorous data protection protocols.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | QuickServe IT</title>
        <meta name="description" content="Get in touch with QuickServe IT for institutional documentation or creator production services. We respond within 24 hours." />
      </Helmet>

      <CursorLight mode={mode} />
      <FilmGrain />
      <FloatingNavbar mode={mode} onReturn={handleReturn} isVisible={true} />

      <main id="main-content" className="min-h-screen bg-background pt-24 sm:pt-28 md:pt-32 pb-28 sm:pb-28 md:pb-20 relative overflow-hidden">
        {/* Dark Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Background Gradient Orbs */}
        <div className={`gradient-orb ${mode === 'institutional' ? 'gradient-orb-institutional' : 'gradient-orb-creator'} w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] top-0 right-0 opacity-20`} />
        <div className={`gradient-orb ${mode === 'institutional' ? 'gradient-orb-institutional' : 'gradient-orb-creator'} w-[350px] sm:w-[450px] md:w-[500px] h-[350px] sm:h-[450px] md:h-[500px] bottom-0 left-0 opacity-15`} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Section */}
          <div
            ref={heroRef}
            id="hero"
            className={`text-center mb-12 sm:mb-14 md:mb-16 max-w-4xl mx-auto transition-all duration-slower ease-out ${visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <H1 className="mb-5 sm:mb-6 md:mb-7 px-4 md:px-0">
              The <span className={mode === 'institutional' ? 'text-institutional' : 'text-creator'}>Secure Uplink</span>
            </H1>
            <p className="text-foreground/75 text-base sm:text-lg md:text-xl leading-loose mb-6 sm:mb-7 md:mb-8 px-5 md:px-4">
              Direct line to the founder. Not a form—a connection.
            </p>

            {/* Response Time Badge */}
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full glass-card border border-border/30 mb-6 sm:mb-7 md:mb-8 transition-all duration-normal hover:scale-105">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium">Usually responds in 2-4 hours</span>
            </div>
          </div>

          {/* 2-Column Layout: Direct Line Info + Form */}
          <div
            ref={formRef}
            id="form"
            className={`max-w-7xl mx-auto mb-12 sm:mb-14 md:mb-16 transition-all duration-slower ease-out delay-100 ${visibleSections.has('form') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {/* Context Badge */}
            {showContextBadge && contextLabel && (
              <div className="mb-6 sm:mb-8 flex items-center justify-center">
                <div className={`relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full border backdrop-blur-md ${mode === 'institutional'
                  ? 'bg-institutional/10 border-institutional/30'
                  : 'bg-creator/10 border-creator/30'
                  }`}
                  style={{
                    boxShadow: mode === 'institutional'
                      ? '0 0 30px rgba(234, 179, 8, 0.15)'
                      : '0 0 30px rgba(34, 211, 238, 0.15)'
                  }}
                >
                  <Sparkles className={`w-3 h-3 sm:w-4 sm:h-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                  <span className={`text-xs sm:text-sm font-medium ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>
                    {contextLabel}
                  </span>
                  <button
                    onClick={() => setShowContextBadge(false)}
                    className={`ml-1 sm:ml-2 p-1 rounded-full transition-all duration-fast hover:bg-white/10 active:scale-90 ${mode === 'institutional' ? 'text-institutional/60 hover:text-institutional' : 'text-creator/60 hover:text-creator'
                      }`}
                    aria-label="Dismiss context badge"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* LEFT: Direct Line Info Panel */}
              <div className="order-2 lg:order-1">
                <DirectLineInfo mode={mode} />
              </div>

              {/* RIGHT: Holographic Glass Tablet (Form) */}
              <div className="order-1 lg:order-2">
                <div
                  className={`backdrop-blur-xl bg-white/[0.03] border rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl transition-all duration-300 ${mode === 'institutional'
                    ? 'border-institutional/20 hover:border-institutional/30'
                    : 'border-creator/20 hover:border-creator/30'
                    }`}
                  style={{
                    boxShadow: mode === 'institutional'
                      ? '0 20px 60px rgba(234, 179, 8, 0.1), 0 0 0 1px rgba(234, 179, 8, 0.05)'
                      : '0 20px 60px rgba(34, 211, 238, 0.1), 0 0 0 1px rgba(34, 211, 238, 0.05)',
                  }}
                >
                  <div className="mb-6 sm:mb-8 text-center">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-display mb-2 sm:mb-3">
                      Send <span className={mode === 'institutional' ? 'text-institutional' : 'text-creator'}>Secure</span> Message
                    </h2>
                    <p className="text-foreground/60 text-xs sm:text-sm font-mono">
                      Encrypted • Confidential • Direct to Founder
                    </p>
                  </div>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div
            ref={faqRef}
            id="faq"
            className={`max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16 transition-all duration-slower ease-out delay-200 ${visibleSections.has('faq') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <H2 className="text-center mb-6 sm:mb-7 md:mb-8">Frequently Asked Questions</H2>
            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`glass-card rounded-xl border overflow-hidden transition-all duration-normal ${expandedFaq === index
                    ? mode === 'institutional'
                      ? 'border-institutional/40'
                      : 'border-creator/40'
                    : 'border-border/20 hover:border-border/40'
                    }`}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                    willChange: 'transform'
                  }}
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-foreground/[0.02] transition-colors active:bg-foreground/[0.04] min-h-[60px]"
                  >
                    <span className="font-medium pr-4 text-sm sm:text-base">{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className={`w-5 h-5 shrink-0 transition-transform ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                    ) : (
                      <ChevronDown className="w-5 h-5 shrink-0 text-foreground/40 transition-transform" />
                    )}
                  </button>
                  <div
                    className={`grid transition-all duration-normal ease-out ${expandedFaq === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-2 text-foreground/60 text-xs sm:text-sm leading-relaxed border-t border-border/10">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Note */}
          <div className={`max-w-3xl mx-auto transition-all duration-slower ease-out delay-300 ${visibleSections.has('faq') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <div className={`p-5 sm:p-6 rounded-xl border-l-4 text-center ${mode === 'institutional'
              ? 'bg-institutional/5 border-institutional/40'
              : 'bg-creator/5 border-creator/40'
              }`}>
              <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed italic">
                "We treat every client relationship as confidential by default. Your data, your trust, our responsibility."
              </p>
              <div className="flex items-center justify-center gap-2 mt-2 sm:mt-3">
                <Shield className={`w-3 h-3 sm:w-4 sm:h-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                <span className={`text-xs font-medium ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>
                  100% Privacy Guaranteed
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer mode={mode} />
    </>
  );
};

export default Contact;
