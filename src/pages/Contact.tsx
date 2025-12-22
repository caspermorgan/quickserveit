import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate } from 'react-router-dom';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Clock, Mail, MapPin, Shield } from 'lucide-react';

const Contact = () => {
  const { mode, setHasEntered } = useMode();
  const navigate = useNavigate();

  const handleReturn = () => {
    setHasEntered(false);
    navigate('/');
  };

  return (
    <>
      <Helmet>
        <title>Contact | quickserveit</title>
        <meta name="description" content="Get in touch with quickserveit for institutional documentation or creator production services." />
      </Helmet>
      
      <CursorLight mode={mode} />
      <FilmGrain />
      <FloatingNavbar mode={mode} onReturn={handleReturn} isVisible={true} />
      
      <main className="min-h-screen bg-background pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          {/* Header */}
          <div className="text-center mb-10 md:mb-14">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-medium mb-3 md:mb-4 tracking-tight">
              Get in <span className={mode === 'institutional' ? 'text-institutional' : 'text-creator'}>Touch</span>
            </h1>
            <p className="text-foreground/50 text-sm md:text-base max-w-md mx-auto leading-relaxed">
              Share your requirements. We respond within working hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Form - Takes 3 cols */}
            <div className="lg:col-span-3">
              <div className={`p-6 md:p-8 rounded-2xl backdrop-blur-xl border ${
                mode === 'institutional' 
                  ? 'bg-institutional/[0.02] border-institutional/10' 
                  : 'bg-creator/[0.02] border-creator/10'
              }`}>
                <h2 className="text-lg md:text-xl font-display font-medium mb-6">
                  Send an Inquiry
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info - Takes 2 cols */}
            <div className="lg:col-span-2 space-y-4 md:space-y-5">
              {/* Working Hours */}
              <div className="p-5 md:p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-start gap-4">
                  <div className={`p-2.5 rounded-lg ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'}`}>
                    <Clock className={`w-4 h-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm mb-1">Working Hours</h3>
                    <p className="text-foreground/50 text-sm leading-relaxed">
                      Mon–Sat: 10:00 AM – 3:00 PM IST
                    </p>
                    <p className="text-foreground/30 text-xs mt-1">
                      Responses within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 md:p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-start gap-4">
                  <div className={`p-2.5 rounded-lg ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'}`}>
                    <Mail className={`w-4 h-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm mb-1">Email</h3>
                    <p className="text-foreground/50 text-sm">
                      hello@quickserveit.online
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="p-5 md:p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-start gap-4">
                  <div className={`p-2.5 rounded-lg ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'}`}>
                    <MapPin className={`w-4 h-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm mb-1">Location</h3>
                    <p className="text-foreground/50 text-sm">
                      Remote-first, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Confidentiality */}
              <div className="p-5 md:p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-start gap-4">
                  <div className={`p-2.5 rounded-lg ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'}`}>
                    <Shield className={`w-4 h-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm mb-1">Confidentiality</h3>
                    <p className="text-foreground/50 text-sm leading-relaxed">
                      All communications and files handled with strict discretion.
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust note */}
              <div className={`p-4 rounded-xl border-l-2 ${
                mode === 'institutional' 
                  ? 'bg-institutional/[0.03] border-institutional/30' 
                  : 'bg-creator/[0.03] border-creator/30'
              }`}>
                <p className="text-xs text-foreground/40 leading-relaxed">
                  "We treat every client relationship as confidential by default. Your data, your trust."
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
