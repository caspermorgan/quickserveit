import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import { Quote, Heart, Target, Eye } from 'lucide-react';

const Founder = () => {
  const { mode, setHasEntered } = useMode();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleReturn = () => {
    setHasEntered(false);
    navigate('/');
  };

  return (
    <>
      <Helmet>
        <title>Founder's Message | quickserveit</title>
        <meta name="description" content="A personal message from the founder of quickserveit about our mission, values, and commitment to calm digital execution." />
      </Helmet>

      <CursorLight mode={mode} />
      <FilmGrain />

      <FloatingNavbar
        mode={mode}
        onReturn={handleReturn}
        isVisible={true}
      />

      <main id="main-content" className="min-h-screen bg-background pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-24 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display mb-4">
              A Note from the <span className={mode === 'institutional' ? 'text-institutional' : 'text-creator'}>Founder</span>
            </h1>
            <p className="text-foreground/50">
              The story behind quickserveit
            </p>
          </div>

          {/* Founder Image */}
          <div className="flex justify-center mb-12">
            <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden glass-card border border-border/20">
              <img
                src="https://placehold.co/400x500/1a1a1a/gold?text=Casper"
                alt="Casper Morgan - Founder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Opening Quote */}
          <div className={`p-8 rounded-2xl mb-12 ${mode === 'institutional' ? 'bg-institutional/5 border border-institutional/20' : 'bg-creator/5 border border-creator/20'}`}>
            <Quote className={`w-8 h-8 mb-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
            <p className="text-lg md:text-xl italic text-foreground/70 leading-relaxed">
              "I built quickserveit because I saw a gap — institutions drowning in digital chaos, creators struggling with inconsistent quality. Both needed a partner who understood their world, not just their tasks."
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-display mb-4 flex items-center gap-3">
                <Heart className={`w-5 h-5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                Why I Started This
              </h2>
              <p className="text-foreground/60 leading-relaxed">
                <strong>Dual Expertise:</strong> As a BCA graduate, I understand the code. As a Documentary Filmmaker, I understand the story. This unique combination allows me to serve two distinct worlds with equal depth.
              </p>
              <p className="text-foreground/60 leading-relaxed mt-4">
                Working with schools across rural Gorakhpur, I witnessed principals and teachers drowning in digital paperwork — UDISE+ forms, examination records, scholarship applications. Essential work that pulled them away from what they do best: educating. My technical background (BCA) gave me the tools to digitize these processes efficiently.
              </p>
              <p className="text-foreground/60 leading-relaxed mt-4">
                Simultaneously, through my documentary filmmaking journey, I saw talented creators with powerful stories but limited post-production resources. Their content deserved cinematic polish, professional sound design, and strategic editing — but access was the barrier. My storytelling expertise became their bridge to professional-grade content.
              </p>
              <p className="text-foreground/60 leading-relaxed mt-4">
                I bridge the gap between technical compliance and creative expression. quickserveit exists to serve both worlds with precision, discretion, and calm execution — powered by a founder who genuinely understands both domains.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display mb-4 flex items-center gap-3">
                <Target className={`w-5 h-5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                What We Believe
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="p-6 rounded-xl glass-card border border-border/20">
                  <h3 className="font-medium mb-2">Calm Over Chaos</h3>
                  <p className="text-sm text-foreground/50">
                    We don't add to your stress. Every interaction is designed to reduce anxiety, not increase it.
                  </p>
                </div>
                <div className="p-6 rounded-xl glass-card border border-border/20">
                  <h3 className="font-medium mb-2">Clarity Over Confusion</h3>
                  <p className="text-sm text-foreground/50">
                    Clear expectations, honest timelines, no hidden surprises. You always know where things stand.
                  </p>
                </div>
                <div className="p-6 rounded-xl glass-card border border-border/20">
                  <h3 className="font-medium mb-2">Confidentiality is Sacred</h3>
                  <p className="text-sm text-foreground/50">
                    Your data, your documents, your content — treated with the discretion they deserve.
                  </p>
                </div>
                <div className="p-6 rounded-xl glass-card border border-border/20">
                  <h3 className="font-medium mb-2">Quality Without Ego</h3>
                  <p className="text-sm text-foreground/50">
                    We don't need credit. We need your work to succeed. That's our satisfaction.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display mb-4 flex items-center gap-3">
                <Eye className={`w-5 h-5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                The Vision Ahead
              </h2>
              <p className="text-foreground/60 leading-relaxed">
                quickserveit is not trying to be everything to everyone. We're building a focused practice — deep expertise in institutional documentation and creator production. No distractions, no dilution.
              </p>
              <p className="text-foreground/60 leading-relaxed mt-4">
                Whether you're a school administrator processing scholarship records or a YouTuber crafting your next video, I want quickserveit to feel like having a trusted colleague who just handles things quietly and well.
              </p>
            </section>
          </div>

          {/* Closing */}
          <div className="mt-16 text-center">
            <div className={`inline-block p-8 rounded-2xl glass-card border ${mode === 'institutional' ? 'border-institutional/20' : 'border-creator/20'}`}>
              <p className="text-foreground/60 mb-4">
                Thank you for considering quickserveit.
              </p>
              <p className={`font-display text-lg ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>
                — Casper Morgan
              </p>
              <p className="text-sm text-foreground/40 mt-2">
                Founder, quickserveit
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer mode={mode} />
    </>
  );
};

export default Founder;
