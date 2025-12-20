import TypewriterText from './TypewriterText';

interface HeroSectionProps {
  mode: 'institutional' | 'creator';
}

const HeroSection = ({ mode }: HeroSectionProps) => {
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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        {/* Typewriter Headline */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display tracking-wide mb-8 min-h-[1.5em] md:min-h-[1.3em]">
          <TypewriterText 
            phrases={phrases}
            className={mode === 'institutional' ? 'text-institutional' : 'text-creator'}
            speed={100}
            pauseDuration={2500}
          />
        </h2>
        
        {/* Description */}
        <p className="text-base md:text-lg text-foreground/50 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          {description}
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <button className="btn-premium w-full sm:w-auto">
            {mode === 'institutional' ? 'Get Started' : 'Start Creating'}
          </button>
          <button className="btn-outline-premium w-full sm:w-auto">
            {mode === 'institutional' ? 'View Services' : 'See Portfolio'}
          </button>
        </div>
        
        {/* Stats strip */}
        <div className="mt-16 md:mt-20 grid grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
          <StatBlock 
            value={mode === 'institutional' ? '50+' : '200+'}
            label={mode === 'institutional' ? 'Schools Served' : 'Projects Delivered'}
            mode={mode}
          />
          <StatBlock 
            value="99.9%"
            label="Uptime Guarantee"
            mode={mode}
          />
          <StatBlock 
            value={mode === 'institutional' ? '5000+' : '1M+'}
            label={mode === 'institutional' ? 'Documents' : 'Views Generated'}
            mode={mode}
          />
        </div>
      </div>
    </section>
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

export default HeroSection;
