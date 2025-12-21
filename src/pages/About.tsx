import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate } from 'react-router-dom';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import { Shield, Target, Users, Zap, Eye, Clock } from 'lucide-react';

const About = () => {
  const { mode, setHasEntered } = useMode();
  const navigate = useNavigate();

  const handleReturn = () => {
    setHasEntered(false);
    navigate('/');
  };

  return (
    <>
      <Helmet>
        <title>About & Philosophy | quickserveit</title>
        <meta name="description" content="Learn about quickserveit's mission to provide calm, confidential digital services for institutions and creators." />
      </Helmet>
      
      <CursorLight mode={mode} />
      <FilmGrain />
      
      <FloatingNavbar 
        mode={mode} 
        onReturn={handleReturn}
        isVisible={true}
      />
      
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6">
              About <span className={mode === 'institutional' ? 'text-institutional' : 'text-creator'}>quickserveit</span>
            </h1>
            <p className="text-lg text-foreground/50 leading-relaxed">
              We exist to reduce digital overwhelm for those who create meaningful work — whether that's educating the next generation or building audiences through content.
            </p>
          </div>

          {/* Philosophy Section */}
          <section className="max-w-4xl mx-auto mb-20">
            <h2 className="text-2xl font-display mb-8 text-center">Our Philosophy</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <PhilosophyCard 
                icon={Shield}
                title="Confidentiality First"
                description="Every file, every conversation, every piece of data is treated with discretion. We understand the sensitivity of institutional records and creator content alike."
                mode={mode}
              />
              <PhilosophyCard 
                icon={Clock}
                title="Realistic Timelines"
                description="We don't overpromise. Expect clear timelines upfront with honest communication about any delays. Rushed work is poor work."
                mode={mode}
              />
              <PhilosophyCard 
                icon={Eye}
                title="Calm Communication"
                description="No aggressive follow-ups, no pushy sales. We respond during working hours, keep messages clear, and respect your time."
                mode={mode}
              />
              <PhilosophyCard 
                icon={Target}
                title="Focused Expertise"
                description="We don't do everything. We do institutional documentation and creator production — deeply and well. That's our focus."
                mode={mode}
              />
            </div>
          </section>

          {/* Who We Serve */}
          <section className="max-w-4xl mx-auto mb-20">
            <h2 className="text-2xl font-display mb-8 text-center">Who We Serve</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Institutions */}
              <div className={`p-8 rounded-2xl glass-card border ${mode === 'institutional' ? 'border-institutional/30' : 'border-border/20'}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-institutional/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-institutional" />
                  </div>
                  <h3 className="text-xl font-medium">Institutions</h3>
                </div>
                <ul className="space-y-3 text-foreground/60">
                  <li className="flex items-start gap-2">
                    <span className="text-institutional mt-1">•</span>
                    <span>Schools and colleges needing documentation support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-institutional mt-1">•</span>
                    <span>Administrators managing UDISE+, exams, scholarships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-institutional mt-1">•</span>
                    <span>Educational trusts requiring compliance assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-institutional mt-1">•</span>
                    <span>Schools seeking reliable digital partners</span>
                  </li>
                </ul>
              </div>

              {/* Creators */}
              <div className={`p-8 rounded-2xl glass-card border ${mode === 'creator' ? 'border-creator/30' : 'border-border/20'}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-creator/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-creator" />
                  </div>
                  <h3 className="text-xl font-medium">Creators</h3>
                </div>
                <ul className="space-y-3 text-foreground/60">
                  <li className="flex items-start gap-2">
                    <span className="text-creator mt-1">•</span>
                    <span>YouTubers needing professional editing support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-creator mt-1">•</span>
                    <span>Educators building online course content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-creator mt-1">•</span>
                    <span>Podcasters requiring visual content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-creator mt-1">•</span>
                    <span>Brands seeking premium production quality</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* What We Don't Do */}
          <section className="max-w-3xl mx-auto mb-20">
            <h2 className="text-2xl font-display mb-8 text-center">What We Don't Do</h2>
            <div className="p-8 rounded-2xl glass-card border border-border/20">
              <p className="text-foreground/60 mb-6">
                Transparency is important to us. Here's what falls outside our scope:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2 text-foreground/50">
                  <span className="text-red-400/60">✗</span>
                  <span>Academic writing or content creation for students</span>
                </div>
                <div className="flex items-start gap-2 text-foreground/50">
                  <span className="text-red-400/60">✗</span>
                  <span>Guaranteed views, subscribers, or monetization</span>
                </div>
                <div className="flex items-start gap-2 text-foreground/50">
                  <span className="text-red-400/60">✗</span>
                  <span>Falsifying any institutional records</span>
                </div>
                <div className="flex items-start gap-2 text-foreground/50">
                  <span className="text-red-400/60">✗</span>
                  <span>24/7 availability or instant responses</span>
                </div>
                <div className="flex items-start gap-2 text-foreground/50">
                  <span className="text-red-400/60">✗</span>
                  <span>Web development or software projects</span>
                </div>
                <div className="flex items-start gap-2 text-foreground/50">
                  <span className="text-red-400/60">✗</span>
                  <span>Social media management or marketing</span>
                </div>
              </div>
            </div>
          </section>

          {/* Working Hours Notice */}
          <section className="max-w-2xl mx-auto text-center">
            <div className={`p-8 rounded-2xl ${mode === 'institutional' ? 'bg-institutional/5 border border-institutional/20' : 'bg-creator/5 border border-creator/20'}`}>
              <Clock className={`w-8 h-8 mx-auto mb-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
              <h3 className="text-xl font-medium mb-3">Working Hours</h3>
              <p className="text-2xl font-display mb-2">10:00 AM – 3:00 PM IST</p>
              <p className="text-foreground/50">Monday to Saturday</p>
              <p className="text-sm text-foreground/40 mt-4">
                Messages received outside these hours will be addressed the next working day.
              </p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer mode={mode} />
    </>
  );
};

interface PhilosophyCardProps {
  icon: any;
  title: string;
  description: string;
  mode: 'institutional' | 'creator';
}

const PhilosophyCard = ({ icon: Icon, title, description, mode }: PhilosophyCardProps) => (
  <div className="p-6 rounded-2xl glass-card border border-border/20">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'}`}>
      <Icon className={`w-6 h-6 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
    </div>
    <h3 className="text-lg font-medium mb-2">{title}</h3>
    <p className="text-sm text-foreground/50 leading-relaxed">{description}</p>
  </div>
);

export default About;
