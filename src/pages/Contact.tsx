import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate } from 'react-router-dom';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import { MessageCircle, Clock, Mail, MapPin, Shield } from 'lucide-react';

const Contact = () => {
  const { mode, setHasEntered } = useMode();
  const navigate = useNavigate();

  const handleReturn = () => {
    setHasEntered(false);
    navigate('/');
  };

  const whatsappNumber = '919876543210';
  const generalTemplate = mode === 'institutional'
    ? 'Hello quickserveit, I am from [institution name] and would like to discuss your services.'
    : 'Hello quickserveit, I am a content creator and would like to discuss your services.';

  return (
    <>
      <Helmet>
        <title>Contact | quickserveit</title>
        <meta name="description" content="Get in touch with quickserveit for institutional documentation or creator production services." />
      </Helmet>
      
      <CursorLight mode={mode} />
      <FilmGrain />
      <FloatingNavbar mode={mode} onReturn={handleReturn} isVisible={true} />
      
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display mb-4">
              Get in <span className={mode === 'institutional' ? 'text-institutional' : 'text-creator'}>Touch</span>
            </h1>
            <p className="text-foreground/50">WhatsApp is our preferred communication channel for all inquiries.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className={`p-8 rounded-2xl ${mode === 'institutional' ? 'bg-institutional/5 border border-institutional/20' : 'bg-creator/5 border border-creator/20'}`}>
              <MessageCircle className={`w-10 h-10 mb-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
              <h2 className="text-xl font-medium mb-2">Start a Conversation</h2>
              <p className="text-foreground/50 text-sm mb-6">Click below to open WhatsApp with a pre-filled message.</p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(generalTemplate)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${mode === 'institutional' ? 'bg-institutional text-background hover:bg-institutional/90' : 'bg-creator text-background hover:bg-creator/90'}`}
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-foreground/40 mt-1" />
                <div>
                  <h3 className="font-medium">Working Hours</h3>
                  <p className="text-foreground/50 text-sm">Mon–Sat: 10:00 AM – 3:00 PM IST</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-foreground/40 mt-1" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-foreground/50 text-sm">hello@quickserveit.online</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-foreground/40 mt-1" />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-foreground/50 text-sm">Remote-first, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="w-5 h-5 text-foreground/40 mt-1" />
                <div>
                  <h3 className="font-medium">Confidentiality</h3>
                  <p className="text-foreground/50 text-sm">All communications and files handled with strict discretion.</p>
                </div>
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
