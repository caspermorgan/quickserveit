import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate } from 'react-router-dom';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Clock, Mail, MapPin, Shield, CheckCircle, MessageCircle, Zap } from 'lucide-react';

const Contact = () => {
  const { mode, setHasEntered } = useMode();
  const navigate = useNavigate();

  const handleReturn = () => {
    setHasEntered(false);
    navigate('/');
  };

  const whatsappNumber = '919876543210';
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
            <div className={`glass-card p-8 md:p-10 rounded-2xl border ${mode === 'institutional' ? 'border-institutional/30' : 'border-creator/30'
              } animate-fade-in`} style={{ animationDelay: '0.3s' }}>
              <div className="mb-8 text-center">
                <h2 className="text-2xl md:text-3xl font-display mb-3">Send an Inquiry</h2>
                <p className="text-foreground/60 text-sm">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
              <ContactForm />

              {/* WhatsApp Alternative */}
              <div className="mt-8 pt-8 border-t border-border/20 text-center">
                <p className="text-sm text-foreground/60 mb-4">Prefer instant messaging?</p>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${mode === 'institutional'
                    ? 'bg-institutional text-background hover:shadow-lg hover:shadow-institutional/30'
                    : 'bg-creator text-background hover:shadow-lg hover:shadow-creator/30'
                    }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  Contact via WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info Cards - Below Form */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
            {/* Working Hours */}
            <div className={`glass-card p-5 rounded-xl border ${mode === 'institutional' ? 'border-institutional/10 hover:border-institutional/30' : 'border-creator/10 hover:border-creator/30'
              } transition-all duration-300 animate-fade-in`} style={{ animationDelay: '0.4s' }}>
              <div className="text-center">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'
                  }`}>
                  <Clock className={`w-5 h-5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                </div>
                <h3 className="font-medium text-sm mb-2">Working Hours</h3>
                <p className="text-foreground/60 text-xs leading-relaxed mb-2">
                  Mon–Sat<br />10 AM – 4 PM IST
                </p>
                <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${mode === 'institutional' ? 'bg-institutional/10 text-institutional' : 'bg-creator/10 text-creator'
                  }`}>
                  <Zap className="w-3 h-3" />
                  <span>24hr response</span>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className={`glass-card p-5 rounded-xl border ${mode === 'institutional' ? 'border-institutional/10 hover:border-institutional/30' : 'border-creator/10 hover:border-creator/30'
              } transition-all duration-300 animate-fade-in`} style={{ animationDelay: '0.5s' }}>
              <div className="text-center">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'
                  }`}>
                  <Mail className={`w-5 h-5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                </div>
                <h3 className="font-medium text-sm mb-2">Email</h3>
                <a
                  href="mailto:hello@quickserveit.online"
                  className={`text-xs hover:underline block ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
                    }`}
                >
                  hello@quickserveit.online
                </a>
                <p className="text-foreground/40 text-xs mt-2">
                  Professional inquiries
                </p>
              </div>
            </div>

            {/* Location */}
            <div className={`glass-card p-5 rounded-xl border ${mode === 'institutional' ? 'border-institutional/10 hover:border-institutional/30' : 'border-creator/10 hover:border-creator/30'
              } transition-all duration-300 animate-fade-in`} style={{ animationDelay: '0.6s' }}>
              <div className="text-center">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'
                  }`}>
                  <MapPin className={`w-5 h-5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                </div>
                <h3 className="font-medium text-sm mb-2">Location</h3>
                <p className="text-foreground/60 text-xs leading-relaxed">
                  Gorakhpur, UP<br />Remote operations
                </p>
              </div>
            </div>

            {/* Confidentiality */}
            <div className={`glass-card p-5 rounded-xl border ${mode === 'institutional' ? 'border-institutional/10 hover:border-institutional/30' : 'border-creator/10 hover:border-creator/30'
              } transition-all duration-300 animate-fade-in`} style={{ animationDelay: '0.7s' }}>
              <div className="text-center">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'
                  }`}>
                  <Shield className={`w-5 h-5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                </div>
                <h3 className="font-medium text-sm mb-2">Confidential</h3>
                <p className="text-foreground/60 text-xs leading-relaxed">
                  Strict discretion<br />guaranteed
                </p>
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
