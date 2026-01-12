import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useTranslation } from '@/hooks/useTranslation';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { FileText, Database, Film, Video, Palette, Sparkles } from 'lucide-react';

// Real portfolio projects - visible to all users
const portfolioItems = [
  // Institutional Projects
  {
    title: 'Rural Education Data System',
    category: 'Institutional',
    icon: Database,
    description: 'Digitizing UDISE+ records for 50+ schools across rural Gorakhpur, ensuring compliance and accuracy.',
    type: 'institutional'
  },
  {
    title: 'Examination Record Portal',
    category: 'Institutional',
    icon: FileText,
    description: 'Secure, compliant student data management system for examination records and scholarship verification.',
    type: 'institutional'
  },
  {
    title: 'Scholarship Verification System',
    category: 'Institutional',
    icon: Database,
    description: 'Streamlined biometric verification and scholarship application processing for educational institutions.',
    type: 'institutional'
  },
  // Creator Projects
  {
    title: 'The Dark History of Witch Trials',
    category: 'Creator',
    icon: Film,
    description: '3-Part Documentary Series with professional editing, sound design, and historical narrative storytelling.',
    type: 'creator'
  },
  {
    title: 'Mera Gaav Mera Desh',
    category: 'Creator',
    icon: Video,
    description: 'Rural storytelling series capturing authentic Indian village stories with cinematic color grading.',
    type: 'creator'
  },
  {
    title: 'Tech Review Content',
    category: 'Creator',
    icon: Palette,
    description: 'High-retention editing for tech YouTubers with dynamic pacing, motion graphics, and engaging transitions.',
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

      <main className="min-h-screen bg-background pt-32 pb-20">
        <section className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display mb-4">
              <span className={mode === 'institutional' ? 'text-institutional' : 'text-creator'}>Real</span> {t('portfolio')}
            </h1>
            <p className="text-foreground/50 max-w-2xl mx-auto">
              {mode === 'institutional'
                ? 'Proven track record of digitizing educational records and streamlining institutional processes across rural Gorakhpur.'
                : 'Professional video editing and content creation work spanning documentaries, storytelling, and high-retention content.'}
            </p>
          </div>

          {/* Portfolio Grid - Show ALL projects */}
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
