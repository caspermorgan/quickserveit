import TypewriterText from './TypewriterText';
import { useTranslation } from '@/hooks/useTranslation';

interface HeroSectionProps {
  mode: 'institutional' | 'creator';
}

const HeroSection = ({ mode }: HeroSectionProps) => {
  const { t } = useTranslation();

  const institutionalPhrases = [
    t('heroInst1'),
    t('heroInst2'),
    t('heroInst3'),
    t('heroInst4')
  ];

  const creatorPhrases = [
    t('heroCreator1'),
    t('heroCreator2'),
    t('heroCreator3')
  ];

  const phrases = mode === 'institutional' ? institutionalPhrases : creatorPhrases;
  const description = mode === 'institutional' ? t('heroInstDesc') : t('heroCreatorDesc');

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 md:py-32 overflow-hidden"
    >
      {/* Premium Gradient Background Overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: mode === 'institutional'
            ? 'radial-gradient(ellipse at top, hsl(43, 96%, 56%, 0.15) 0%, transparent 50%), radial-gradient(ellipse at bottom, hsl(30, 85%, 35%, 0.1) 0%, transparent 50%)'
            : 'radial-gradient(ellipse at top, hsl(187, 100%, 42%, 0.15) 0%, transparent 50%), radial-gradient(ellipse at bottom, hsl(195, 100%, 55%, 0.1) 0%, transparent 50%)'
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Typewriter Headline with Premium Glow */}
        <h2
          className={`text-3xl md:text-5xl lg:text-6xl font-display tracking-wide mb-8 min-h-[1.5em] md:min-h-[1.3em] ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
            }`}
          style={{
            textShadow: mode === 'institutional'
              ? '0 0 40px hsl(43, 96%, 56%, 0.3), 0 0 80px hsl(43, 96%, 56%, 0.15)'
              : '0 0 40px hsl(187, 100%, 42%, 0.3), 0 0 80px hsl(187, 100%, 42%, 0.15)'
          }}
        >
          <TypewriterText
            phrases={phrases}
            speed={100}
            pauseDuration={2500}
          />
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          {description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <button className="btn-premium w-full sm:w-auto">
            {mode === 'institutional' ? t('getStarted') : t('startCreating')}
          </button>
          <button className="btn-outline-premium w-full sm:w-auto">
            {mode === 'institutional' ? t('viewServices') : t('seePortfolio')}
          </button>
        </div>

        {/* Stats strip with Premium Styling */}
        <div className="mt-16 md:mt-20 grid grid-cols-3 gap-6 md:gap-8 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
          <StatBlock
            value={mode === 'institutional' ? '50+' : '200+'}
            label={mode === 'institutional' ? t('schoolsServed') : t('projectsDelivered')}
            mode={mode}
          />
          <StatBlock
            value="99.9%"
            label={t('uptimeGuarantee')}
            mode={mode}
          />
          <StatBlock
            value={mode === 'institutional' ? '5000+' : '1M+'}
            label={mode === 'institutional' ? t('documents') : t('viewsGenerated')}
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
  <div
    className="relative text-center p-3 md:p-6 rounded-xl trans-premium group"
    style={{
      background: 'rgba(255, 255, 255, 0.02)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      boxShadow: mode === 'institutional'
        ? '0 4px 16px rgba(0, 0, 0, 0.3), 0 0 20px hsl(43, 96%, 56%, 0.05)'
        : '0 4px 16px rgba(0, 0, 0, 0.3), 0 0 20px hsl(187, 100%, 42%, 0.05)'
    }}
  >
    <div
      className={`text-xl md:text-4xl font-display tracking-wide mb-1 md:mb-2 trans-premium ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
        }`}
      style={{
        textShadow: mode === 'institutional'
          ? '0 0 20px hsl(43, 96%, 56%, 0.2)'
          : '0 0 20px hsl(187, 100%, 42%, 0.2)'
      }}
    >
      {value}
    </div>
    <div className="text-[10px] md:text-sm text-foreground/50 tracking-wide uppercase leading-tight">
      {label}
    </div>
  </div>
);

export default HeroSection;
