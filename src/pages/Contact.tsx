import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Clock, Mail, MapPin, Shield, CheckCircle, MessageCircle, Zap, X, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const { mode, setHasEntered, setCurrentSection } = useMode();
  const navigate = useNavigate();
  const location = useLocation();
  const [showContextBadge, setShowContextBadge] = useState(false);
  const [contextLabel, setContextLabel] = useState('');

  // Scroll to top when page loads to ensure contact form is visible
  useEffect(() => {
    window.scrollTo(0, 0);
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

  return (
    <>
      <Helmet>
        <title>Contact Us | QuickServe IT</title>
        <meta name="description" content="Get in touch with QuickServe IT for institutional documentation or creator production services. We respond within 24 hours." />
      </Helmet>

      <CursorLight mode={mode} />
      <FilmGrain />
      <FloatingNavbar mode={mode} onReturn={handleReturn} isVisible={true} />

      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${mode === 'institutional' ? 'bg-institutional/10 border border-institutional/20' : 'bg-creator/10 border border-creator/20'
              } mb-6 animate-fade-in`}>
              <MessageCircle className={`w-4 h-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
              <span className={`text-xs font-medium ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>
                Let's Talk
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display mb-5 animate-fade-in-up">
              Get in <span className={mode === 'institutional' ? 'text-institutional' : 'text-creator'}>Touch</span>
            </h1>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Share your requirements and we'll respond within working hours.<br />
              <span className="text-foreground/50 text-base">Professional, confidential, and reliable.</span>
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-foreground/50 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-2">
                <CheckCircle className={`w-4 h-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                <span>24hr Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className={`w-4 h-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className={`w-4 h-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                <span>Free Consultation</span>
              </div>
            </div>
          </div>

          {/* Contact Form - Top Section */}
          <div className="max-w-3xl mx-auto mb-16">
            {/* Context Badge - Shows user we're on the same page */}
            {showContextBadge && contextLabel && (
              <div
                className={`mb-6 animate-fade-in-up flex items-center justify-center`}
                style={{ animationDelay: '0.2s' }}
              >
                <div className={`relative inline-flex items-center gap-3 px-6 py-3 rounded-full border backdrop-blur-md ${mode === 'institutional'
                  ? 'bg-institutional/10 border-institutional/30'
                  : 'bg-creator/10 border-creator/30'
                  }`}
                  style={{
                    boxShadow: mode === 'institutional'
                      ? '0 0 30px rgba(234, 179, 8, 0.15)'
                      : '0 0 30px rgba(34, 211, 238, 0.15)'
                  }}
                >
                  <Sparkles className={`w-4 h-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                  <span className={`text-sm font-medium ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>
                    {contextLabel}
                  </span>
                  <button
                    onClick={() => setShowContextBadge(false)}
                    className={`ml-2 p-1 rounded-full transition-all duration-200 hover:bg-white/10 ${mode === 'institutional' ? 'text-institutional/60 hover:text-institutional' : 'text-creator/60 hover:text-creator'
                      }`}
                    aria-label="Dismiss context badge"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}

            <div className={`glass-card p-8 md:p-10 rounded-2xl border ${mode === 'institutional' ? 'border-institutional/30' : 'border-creator/30'
              } animate-fade-in`} style={{ animationDelay: '0.3s' }}>
              <div className="mb-8 text-center">
                <h2 className="text-2xl md:text-3xl font-display mb-3">Send an Inquiry</h2>
                <p className="text-foreground/60 text-sm">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>

          {/* Contact Info Cards - Below Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 max-w-5xl mx-auto">
            {/* Working Hours */}
            <div className={`p-6 rounded-2xl border bg-background/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${mode === 'institutional' ? 'border-institutional/10 hover:border-institutional/30' : 'border-creator/10 hover:border-creator/30'
              }`}>
              <div className="flex flex-col items-center text-center h-full">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${mode === 'institutional' ? 'bg-institutional/10 text-institutional' : 'bg-creator/10 text-creator'
                  }`}>
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-sm mb-1">Operating Hours</h3>
                <p className="text-sm font-medium mb-1">Mon–Sat, 10 AM – 4 PM</p>
                <span className="text-xs text-foreground/50">Messages accepted 24/7</span>
              </div>
            </div>

            {/* Email */}
            <button
              onClick={handleEmailCopy}
              className={`p-6 rounded-2xl border bg-background/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 w-full group ${mode === 'institutional' ? 'border-institutional/10 hover:border-institutional/30' : 'border-creator/10 hover:border-creator/30'
                }`}
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 transition-colors ${mode === 'institutional' ? 'bg-institutional/10 text-institutional group-hover:bg-institutional group-hover:text-background' : 'bg-creator/10 text-creator group-hover:bg-creator group-hover:text-background'
                  }`}>
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-sm mb-1">Email Inquiry</h3>
                <p className="text-sm font-medium mb-1 truncate w-full px-2">letsquickserveit@gmail.com</p>
                <span className={`text-xs ${mode === 'institutional' ? 'text-institutional' : 'text-creator'} opacity-0 group-hover:opacity-100 transition-opacity`}>Click to Copy</span>
              </div>
            </button>

            {/* Location */}
            <div className={`p-6 rounded-2xl border bg-background/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${mode === 'institutional' ? 'border-institutional/10 hover:border-institutional/30' : 'border-creator/10 hover:border-creator/30'
              }`}>
              <div className="flex flex-col items-center text-center h-full">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${mode === 'institutional' ? 'bg-institutional/10 text-institutional' : 'bg-creator/10 text-creator'
                  }`}>
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-sm mb-1">Operations Base</h3>
                <p className="text-sm font-medium mb-1">Gorakhpur, UP</p>
                <span className="text-xs text-foreground/50">Remote-First Service</span>
              </div>
            </div>

            {/* Confidentiality */}
            <div className={`p-6 rounded-2xl border bg-background/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${mode === 'institutional' ? 'border-institutional/10 hover:border-institutional/30' : 'border-creator/10 hover:border-creator/30'
              }`}>
              <div className="flex flex-col items-center text-center h-full">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${mode === 'institutional' ? 'bg-institutional/10 text-institutional' : 'bg-creator/10 text-creator'
                  }`}>
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-sm mb-1">Privacy Guarantee</h3>
                <p className="text-sm font-medium mb-1">Strict Data Protocol</p>
                <span className="text-xs text-foreground/50">100% Confidential Execution</span>
              </div>
            </div>
          </div>

          {/* Trust Note - Bottom */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className={`p-6 rounded-xl border-l-4 text-center ${mode === 'institutional'
              ? 'bg-institutional/5 border-institutional/40'
              : 'bg-creator/5 border-creator/40'
              } animate-fade-in`} style={{ animationDelay: '0.8s' }}>
              <p className="text-sm text-foreground/70 leading-relaxed italic">
                "We treat every client relationship as confidential by default. Your data, your trust, our responsibility."
              </p>
              <div className="flex items-center justify-center gap-2 mt-3">
                <Shield className={`w-4 h-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                <span className={`text-xs font-medium ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>
                  100% Privacy Guaranteed
                </span>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="max-w-4xl mx-auto">
            <div className={`glass-card rounded-2xl p-8 md:p-10 border text-center ${mode === 'institutional' ? 'border-institutional/20' : 'border-creator/20'
              } animate-fade-in`} style={{ animationDelay: '0.9s' }}>
              <h3 className="text-xl md:text-2xl font-display mb-3">
                Ready to Start Your Project?
              </h3>
              <p className="text-foreground/60 mb-6 max-w-2xl mx-auto">
                Whether you need institutional documentation or creator production services,
                we're here to help you achieve professional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${mode === 'institutional'
                    ? 'bg-institutional text-background hover:shadow-lg hover:shadow-institutional/30'
                    : 'bg-creator text-background hover:shadow-lg hover:shadow-creator/30'
                    }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  Start a Conversation
                </a>
                <p className="text-xs text-foreground/40">
                  💬 Instant response • No obligation
                </p>
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
