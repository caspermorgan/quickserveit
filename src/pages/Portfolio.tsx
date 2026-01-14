import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useTranslation } from '@/hooks/useTranslation';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { FileText, Database, Film, Video, Palette, Sparkles } from 'lucide-react';

// Real portfolio projects - V2 Production Assets
const portfolioItems = [
  // Institutional Projects
  {
    title: 'Rural Education Data System',
    category: 'Institutional',
    icon: Database,
    description: 'Digitizing UDISE+ records for 50+ schools.',
    type: 'institutional'
  },
  {
    title: 'Examination Record Portal',
    category: 'Institutional',
    icon: FileText,
    description: 'Secure, compliant student data management.',
    type: 'institutional'
  },
  // Creator Projects
  {
    title: 'The Dark History of Witch Trials',
    category: 'Creator',
    icon: Film,
    description: '3-Part Documentary Series (Editing & Sound Design).',
    type: 'creator'
  },
  {
    title: 'Mera Gaav Mera Desh',
    category: 'Creator',
    icon: Video,
    description: 'Rural storytelling series capturing real Indian stories.',
    type: 'creator'
  },
  {
    title: 'Tech Review Content',
    category: 'Creator',
    icon: Palette,
    description: 'High-retention editing for tech YouTubers.',
    type: 'creator'
  },
  {
    title: 'Lifestyle Vlogs',
    category: 'Creator',
    icon: Sparkles,
    description: 'Cinematic color grading for influencers.',
    type: 'creator'
  },
];

interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  mode: 'institutional' | 'creator';
}

const PortfolioCard = ({ title, category, description, icon: Icon, mode }: PortfolioCardProps) => {
  return (
    <div className="group relative p-6 rounded-2xl glass-card border border-border/20 hover:border-creator/30 transition-all duration-300 h-full flex flex-col">
      {/* FIXED BADGE - Top Right Absolute Position */}
      <span className={`absolute top-4 right-4 text-xs font-medium uppercase tracking-wider px-2.5 py-1 rounded-full ${mode === 'institutional'
        ? 'bg-institutional/10 text-institutional'
        : 'bg-creator/10 text-creator'
        }`}>
        {category}
      </span>

      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'
        }`}>
        <Icon className={`w-6 h-6 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
      </div>

      {/* Title */}
      <h3 className={`text-lg font-medium mb-2 transition-colors pr-20 ${mode === 'institutional' ? 'group-hover:text-institutional' : 'group-hover:text-creator'
        }`}>
        {title}
      </h3>

      {/* FLEX-GROW Description - Pushes footer to bottom */}
      <p className="text-sm text-foreground/50 leading-relaxed flex-grow">
        {description}
      </p>

      {/* PINNED FOOTER - Always at bottom */}
      <div className="mt-4 pt-4 border-t border-border/10">
        <button className={`text-xs font-medium uppercase tracking-wider transition-colors ${mode === 'institutional'
          ? 'text-institutional/70 hover:text-institutional'
          : 'text-creator/70 hover:text-creator'
          }`}>
          View Project →
        </button>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const { mode, setHasEntered } = useMode();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleReturn = () => {
    setHasEntered(false);
    navigate('/');
  };

  // Filter projects based on mode
  const displayedProjects = portfolioItems.filter(item => item.type === mode);

  return (
    <>
      <Helmet>
        <title>{t('portfolio')} | {t('brandName')} - Real Projects</title>
        <meta name="description" content="Explore our portfolio of real projects - from educational institution data systems to documentary filmmaking and content creation." />
      </Helmet>

      <CursorLight mode={mode} />
      <FilmGrain />
      <FloatingNavbar mode={mode} onReturn={handleReturn} isVisible={true} />

      <main className="min-h-screen bg-background pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative z-0 scroll-mask">
        <section className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-14">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display mb-4 sm:mb-5 md:mb-6">
              <span className={mode === 'institutional' ? 'text-institutional' : 'text-creator'}>Real</span> {t('portfolio')}
            </h1>
            <p className="text-foreground/60 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto px-4">
              {mode === 'institutional'
                ? 'Proven track record of digitizing educational records and streamlining institutional processes across rural Gorakhpur.'
                : 'Professional video editing and content creation work spanning documentaries, storytelling, and high-retention content.'}
            </p>
          </div>

          {/* STRICT MATHEMATICAL GRID - Equal Heights with gap-6 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProjects.map((item, index) => (
              <PortfolioCard
                key={index}
                title={item.title}
                category={item.category}
                description={item.description}
                icon={item.icon}
                mode={mode}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer mode={mode} />
    </>
  );
};

export default Portfolio;
