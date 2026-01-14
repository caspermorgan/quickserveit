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
import {
  Clock, Mail, MapPin, Shield, CheckCircle, MessageCircle,
  Zap, X, Sparkles, ChevronDown, ChevronUp, Send, HelpCircle
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
      toast.success(t('emailCopied'), {
        description: t('emailCopiedDesc'),
      });
    } catch (error) {
      toast.error(t('emailCopyFailed'), {
        description: t('emailCopyFailedDesc'),
      });
    }
  };

  const whatsappNumber = '916388224877';
  const whatsappMessage = mode === 'institutional'
    ? t('whatsappMessageInst')
    : t('whatsappMessageCreator');

  const faqs = [
    {
      question: t('faqQuestion1'),
      answer: t('faqAnswer1')
    },
    {
      question: t('faqQuestion2'),
      answer: mode === 'institutional' ? t('faqAnswer2Inst') : t('faqAnswer2Creator')
    },
    {
      question: t('faqQuestion3'),
      answer: t('faqAnswer3')
    },
    {
      question: t('faqQuestion4'),
      answer: t('faqAnswer4')
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('contactPageTitle')} | QuickServe IT</title>
        <meta name="description" content={t('contactPageDesc')} />
      </Helmet>

      <CursorLight mode={mode} />
      <FilmGrain />
      <FloatingNavbar mode={mode} onReturn={handleReturn} isVisible={true} />

      <main className="min-h-screen bg-background pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20 md:pb-24 relative overflow-hidden">
        {/* Background Gradient Orbs */}
        <div className={`gradient-orb ${mode === 'institutional' ? 'gradient-orb-institutional' : 'gradient-orb-creator'} w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] top-0 right-0 opacity-20`} />
        <div className={`gradient-orb ${mode === 'institutional' ? 'gradient-orb-institutional' : 'gradient-orb-creator'} w-[350px] sm:w-[450px] md:w-[500px] h-[350px] sm:h-[450px] md:h-[500px] bottom-0 left-0 opacity-15`} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Section */}
          <div
            ref={heroRef}
            id="hero"
            className={`min-h-[50vh] flex flex-col justify-center text-center mb-12 sm:mb-16 md:mb-20 max-w-4xl mx-auto transition-all duration-700 ease-out ${visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.1] mb-6 sm:mb-8 animate-fade-in">
              {t('letsConnect').split(' ')[0]} <span className={mode === 'institutional' ? 'text-institutional' : 'text-creator'}>{t('letsConnect').split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-foreground/65 text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10 px-4 max-w-[60ch] mx-auto font-light animate-fade-in" style={{ animationDelay: '100ms' }}>
              {t('shareProjectDetails')}
            </p>

            {/* Response Time Badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full glass-card border border-border/30 mb-8 sm:mb-10 transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold">{t('usuallyResponds')}</span>
            </div>
          </div>

          {/* Quick Contact Methods */}
          <div
            ref={contactMethodsRef}
            id="contact-methods"
            className={`max-w-2xl mx-auto mb-16 sm:mb-20 md:mb-24 transition-all duration-700 ease-out delay-100 ${visibleSections.has('contact-methods') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <div className="flex flex-col gap-4 sm:gap-5">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 sm:gap-5 p-5 sm:p-6 md:p-7 rounded-2xl glass-card border-2 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] ${mode === 'institutional'
                  ? 'border-institutional/30 hover:border-institutional/50 hover:shadow-institutional/20'
                  : 'border-creator/30 hover:border-creator/50 hover:shadow-creator/20'
                  }`}
                style={{ willChange: 'transform' }}
              >
                <div className={`shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${mode === 'institutional'
                  ? 'bg-institutional/12 group-hover:bg-institutional'
                  : 'bg-creator/12 group-hover:bg-creator'
                  }`}>
                  <MessageCircle className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors ${mode === 'institutional'
                    ? 'text-institutional group-hover:text-background'
                    : 'text-creator group-hover:text-background'
                    }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold text-lg sm:text-xl mb-1">WhatsApp</h3>
                  <p className="text-foreground/65 text-sm sm:text-base truncate">Instant messaging • Quick responses</p>
                </div>
                <div className={`shrink-0 flex items-center gap-2 text-sm sm:text-base font-semibold transition-transform group-hover:translate-x-2 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
                  }`}>
                  <span className="hidden sm:inline">Chat</span>
                  <Zap className="w-5 h-5" />
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:letsquickserveit@gmail.com?subject=${encodeURIComponent(
                  mode === 'institutional'
                    ? 'Institutional Service Inquiry - QuickServe IT'
                    : 'Creator Production Inquiry - QuickServe IT'
                )}&body=${encodeURIComponent(
                  mode === 'institutional'
                    ? 'Hello QuickServe IT Team,\n\nI am interested in your institutional documentation services.\n\nInstitution Name: \nService Needed: \nProject Details: \n\nBest Regards'
                    : 'Hello QuickServe IT Team,\n\nI am interested in your creator production services.\n\nChannel/Brand Name: \nContent Type: \nProject Details: \n\nBest Regards'
                )}`}
                className={`group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 md:p-5 rounded-xl glass-card border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] ${mode === 'institutional'
                  ? 'border-institutional/30 hover:border-institutional/50 hover:shadow-institutional/20'
                  : 'border-creator/30 hover:border-creator/50 hover:shadow-creator/20'
                  }`}
                style={{ willChange: 'transform' }}
              >
                <div className={`shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${mode === 'institutional'
                  ? 'bg-institutional/10 group-hover:bg-institutional'
                  : 'bg-creator/10 group-hover:bg-creator'
                  }`}>
                  <Mail className={`w-6 h-6 sm:w-7 sm:h-7 transition-colors ${mode === 'institutional'
                    ? 'text-institutional group-hover:text-background'
                    : 'text-creator group-hover:text-background'
                    }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-base sm:text-lg mb-0.5">Email</h3>
                  <p className="text-foreground/60 text-xs sm:text-sm truncate">Open in your mail app</p>
                </div>
                <div className={`shrink-0 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium transition-transform group-hover:translate-x-1 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
                  }`}>
                  <span className="hidden sm:inline">Send</span>
                  <Send className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div
            ref={formRef}
            id="form"
            className={`max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16 transition-all duration-700 ease-out delay-200 ${visibleSections.has('form') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {/* Context Badge */}
            {showContextBadge && contextLabel && (
              <div className="mb-4 sm:mb-5 md:mb-6 flex items-center justify-center">
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
                    className={`ml-1 sm:ml-2 p-1 rounded-full transition-all duration-200 hover:bg-white/10 active:scale-90 ${mode === 'institutional' ? 'text-institutional/60 hover:text-institutional' : 'text-creator/60 hover:text-creator'
                      }`}
                    aria-label="Dismiss context badge"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}

            <div className={`glass-card p-6 sm:p-8 md:p-10 rounded-2xl border ${mode === 'institutional' ? 'border-institutional/30' : 'border-creator/30'
              }`}>
              <div className="mb-6 sm:mb-7 md:mb-8 text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-display mb-2 sm:mb-3">Send an Inquiry</h2>
                <p className="text-foreground/60 text-xs sm:text-sm">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>

          {/* FAQ Section */}
          <div
            ref={faqRef}
            id="faq"
            className={`max-w-3xl mx-auto mb-16 sm:mb-20 md:mb-24 transition-all duration-700 ease-out delay-300 ${visibleSections.has('faq') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-center mb-8 sm:mb-10 md:mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4 sm:gap-5">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`glass-card rounded-xl border overflow-hidden transition-all duration-300 ${expandedFaq === index
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
                    className={`grid transition-all duration-300 ease-out ${expandedFaq === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
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

          {/* Contact Info Cards */}
          <div
            ref={infoCardsRef}
            id="info-cards"
            className={`grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-12 sm:mb-14 md:mb-16 max-w-3xl mx-auto transition-all duration-700 ease-out delay-400 ${visibleSections.has('info-cards') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {/* Working Hours */}
            <div className={`flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border glass-card transition-all duration-300 hover:scale-[1.01] hover:shadow-lg active:scale-[0.99] ${mode === 'institutional' ? 'border-institutional/20 hover:border-institutional/30' : 'border-creator/20 hover:border-creator/30'
              }`}
              style={{ willChange: 'transform' }}
            >
              <div className={`shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center ${mode === 'institutional' ? 'bg-institutional/10 text-institutional' : 'bg-creator/10 text-creator'
                }`}>
                <Clock className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm sm:text-base mb-0.5">Mon–Sat • 10 AM–4 PM IST</h3>
                <p className="text-xs text-foreground/50 truncate">Messages accepted 24/7</p>
              </div>
            </div>

            {/* Email */}
            <a
              href="mailto:letsquickserveit@gmail.com"
              className={`flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border glass-card transition-all duration-300 hover:scale-[1.01] hover:shadow-lg active:scale-[0.99] group ${mode === 'institutional' ? 'border-institutional/20 hover:border-institutional/30' : 'border-creator/20 hover:border-creator/30'
                }`}
              style={{ willChange: 'transform' }}
            >
              <div className={`shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center transition-colors ${mode === 'institutional'
                ? 'bg-institutional/10 text-institutional group-hover:bg-institutional/20'
                : 'bg-creator/10 text-creator group-hover:bg-creator/20'
                }`}>
                <Mail className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm sm:text-base mb-0.5">letsquickserveit@gmail.com</h3>
                <p className="text-xs text-foreground/50 truncate">Click to compose email</p>
              </div>
            </a>

            {/* Location */}
            <div className={`flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border glass-card transition-all duration-300 hover:scale-[1.01] hover:shadow-lg active:scale-[0.99] ${mode === 'institutional' ? 'border-institutional/20 hover:border-institutional/30' : 'border-creator/20 hover:border-creator/30'
              }`}
              style={{ willChange: 'transform' }}
            >
              <div className={`shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center ${mode === 'institutional' ? 'bg-institutional/10 text-institutional' : 'bg-creator/10 text-creator'
                }`}>
                <MapPin className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm sm:text-base mb-0.5">Gorakhpur, UP</h3>
                <p className="text-xs text-foreground/50 truncate">Remote-first service</p>
              </div>
            </div>

            {/* Confidentiality */}
            <div className={`flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border glass-card transition-all duration-300 hover:scale-[1.01] hover:shadow-lg active:scale-[0.99] ${mode === 'institutional' ? 'border-institutional/20 hover:border-institutional/30' : 'border-creator/20 hover:border-creator/30'
              }`}
              style={{ willChange: 'transform' }}
            >
              <div className={`shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center ${mode === 'institutional' ? 'bg-institutional/10 text-institutional' : 'bg-creator/10 text-creator'
                }`}>
                <Shield className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm sm:text-base mb-0.5">100% Confidential</h3>
                <p className="text-xs text-foreground/50 truncate">Strict data protocol</p>
              </div>
            </div>
          </div>

          {/* Trust Note */}
          <div className={`max-w-3xl mx-auto transition-all duration-700 ease-out delay-500 ${visibleSections.has('info-cards') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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
