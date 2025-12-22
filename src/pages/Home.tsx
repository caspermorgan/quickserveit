import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate, Link } from 'react-router-dom';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import TypewriterText from '@/components/TypewriterText';
import { ArrowRight, Shield, Clock, CheckCircle } from 'lucide-react';

const Home = () => {
  const { mode, setHasEntered } = useMode();
  const navigate = useNavigate();

  const handleReturn = () => {
    setHasEntered(false);
    navigate('/');
  };

  const institutionalPhrases = [
    "Calm Digital Execution",
    "Structured Academic Support",
    "Quiet Progress, Clear Files",
    "Trusted Institutional Partner"
  ];
  
  const creatorPhrases = [
    "Premium Visual Storytelling",
    "Cinematic Content Creation",
    "Retention-Style Editing",
    "World-Class Production"
  ];
  
  const phrases = mode === 'institutional' ? institutionalPhrases : creatorPhrases;
  
  const description = mode === 'institutional'
    ? "We transform chaotic digital workloads into organized, confidential, and deadline-calm execution. From examination documentation to government compliance, your institution deserves peace."
    : "We transform raw footage into premium content designed for retention and impact. From YouTube long-form to cinematic documentaries, your vision deserves world-class polish.";

  const whatsappNumber = '919876543210';
  const whatsappMessage = mode === 'institutional'
    ? 'Hello Quickserve IT, I am from an educational institution and would like to discuss your services.'
    : 'Hello Quickserve IT, I am a content creator and would like to discuss video editing services.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <Helmet>
        <title>Quickserve IT | {mode === 'institutional' ? 'Institutional Services' : 'Creator Studio'}</title>
        <meta name="description" content={description} />
      </Helmet>
      
      <CursorLight mode={mode} />
      <FilmGrain />
      
      <FloatingNavbar 
        mode={mode} 
        onReturn={handleReturn}
        isVisible={true}
      />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Typewriter Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display tracking-wide mb-8 min-h-[1.5em] md:min-h-[1.3em]">
              <TypewriterText 
                phrases={phrases}
                className={mode === 'institutional' ? 'text-institutional' : 'text-creator'}
                speed={100}
                pauseDuration={2500}
              />
            </h1>
            
            {/* Description */}
            <p className="text-base md:text-lg text-foreground/50 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              {description}
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center gap-2 text-sm text-foreground/40">
                <Shield className="w-4 h-4" />
                <span>Confidential Handling</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/40">
                <Clock className="w-4 h-4" />
                <span>10AM–3PM IST</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/40">
                <CheckCircle className="w-4 h-4" />
                <span>Clear Expectations</span>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <Link 
                to="/services"
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-background transition-all duration-300 ${
                  mode === 'institutional' 
                    ? 'bg-institutional hover:bg-institutional/90' 
                    : 'bg-creator hover:bg-creator/90'
                }`}
              >
                {mode === 'institutional' ? 'View Services' : 'See Studio'}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium border border-border hover:bg-foreground/5 transition-all duration-300"
              >
                Start a Conversation
              </a>
            </div>
            
            {/* Stats strip */}
            <div className="mt-16 md:mt-20 grid grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
              <StatBlock 
                value={mode === 'institutional' ? '50+' : '200+'}
                label={mode === 'institutional' ? 'Schools Served' : 'Projects Delivered'}
                mode={mode}
              />
              <StatBlock 
                value="100%"
                label="Confidential"
                mode={mode}
              />
              <StatBlock 
                value={mode === 'institutional' ? '5000+' : '1M+'}
                label={mode === 'institutional' ? 'Documents Processed' : 'Views Generated'}
                mode={mode}
              />
            </div>
          </div>
        </section>

        {/* Quick Overview Section */}
        <section className="py-20 px-6 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-display mb-4">
                How We Work
              </h2>
              <p className="text-foreground/50 max-w-xl mx-auto">
                {mode === 'institutional' 
                  ? 'Structured support designed for educational institutions.'
                  : 'Premium production designed for modern creators.'}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {mode === 'institutional' ? (
                <>
                  <ProcessCard 
                    step="01"
                    title="Share Requirements"
                    description="Send your documentation needs via WhatsApp with clear specifications and deadlines."
                    mode={mode}
                  />
                  <ProcessCard 
                    step="02"
                    title="Calm Execution"
                    description="We process your files with accuracy and confidentiality, keeping you updated throughout."
                    mode={mode}
                  />
                  <ProcessCard 
                    step="03"
                    title="Timely Delivery"
                    description="Receive organized, verified deliverables within the agreed timeline."
                    mode={mode}
                  />
                </>
              ) : (
                <>
                  <ProcessCard 
                    step="01"
                    title="Share Your Vision"
                    description="Send your raw footage and creative brief via WeTransfer or Google Drive."
                    mode={mode}
                  />
                  <ProcessCard 
                    step="02"
                    title="Premium Production"
                    description="We craft retention-focused edits with professional color grading and sound design."
                    mode={mode}
                  />
                  <ProcessCard 
                    step="03"
                    title="Review & Refine"
                    description="Review the edit, request revisions, and receive your final export."
                    mode={mode}
                  />
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer mode={mode} />
    </>
  );
};

interface StatBlockProps {
  value: string;
  label: string;
  mode: 'institutional' | 'creator';
}

const StatBlock = ({ value, label, mode }: StatBlockProps) => (
  <div className="text-center">
    <div className={`text-2xl md:text-4xl font-display tracking-wide mb-2 ${
      mode === 'institutional' ? 'text-institutional' : 'text-creator'
    }`}>
      {value}
    </div>
    <div className="text-xs md:text-sm text-foreground/40 tracking-wide">
      {label}
    </div>
  </div>
);

interface ProcessCardProps {
  step: string;
  title: string;
  description: string;
  mode: 'institutional' | 'creator';
}

const ProcessCard = ({ step, title, description, mode }: ProcessCardProps) => (
  <div className="p-6 rounded-2xl glass-card border border-border/20">
    <span className={`text-sm font-mono ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>
      {step}
    </span>
    <h3 className="text-lg font-medium mt-3 mb-2">{title}</h3>
    <p className="text-sm text-foreground/50 leading-relaxed">{description}</p>
  </div>
);

export default Home;
