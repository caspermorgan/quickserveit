import { useMode } from '@/context/ModeContext';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { mode } = useMode();

  const content = {
    institutional: {
      headline: 'Calm Digital Execution for Institutions',
      subheadline: 'Professional, scalable digital infrastructure designed for educational and organizational excellence',
      audience: 'For Schools, Universities, Government, Enterprises',
      ctaPrimary: 'Get Started',
      ctaSecondary: 'Learn More',
    },
    creator: {
      headline: 'Premium Content Creation for Creators',
      subheadline: 'Cinematic editing and visual storytelling designed for maximum audience engagement and retention',
      audience: 'For Freelancers, Startups, Developers, Teams',
      ctaPrimary: 'Start Creating',
      ctaSecondary: 'View Portfolio',
    },
  };

  const c = content[mode];

  return (
    <section className="section-spacing bg-background">
      <div className="container-professional">
        <div className="max-w-3xl mx-auto text-center">
          {/* Audience Badge */}
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-mode-soft text-mode text-xs font-semibold tracking-wide animate-fade-in">
            {c.audience}
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight mb-6 animate-fade-in-up">
            {c.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 animate-fade-in-up delay-100">
            {c.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200">
            <Link to="/contact" className="btn-primary min-w-[160px]">
              {c.ctaPrimary}
            </Link>
            <Link 
              to={mode === 'creator' ? '/portfolio' : '/services'} 
              className="btn-outline min-w-[160px]"
            >
              {c.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
