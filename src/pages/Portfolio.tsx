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
    <div className="group p-6 rounded-2xl glass-card border border-border/20 hover:border-creator/30 transition-all duration-300">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'
        }`}>
        <Icon className={`w-6 h-6 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
      </div>
      <span className={`text-xs font-medium uppercase tracking-wider ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
        }`}>
        {category}
      </span>
      <h3 className={`text-lg font-medium mt-2 mb-2 transition-colors ${mode === 'institutional' ? 'group-hover:text-institutional' : 'group-hover:text-creator'
        }`}>
        {title}
      </h3>
      <p className="text-sm text-foreground/50 leading-relaxed">{description}</p>
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

      <main className="min-h-screen bg-background pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
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

          {/* Portfolio Grid - Show ALL projects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
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
