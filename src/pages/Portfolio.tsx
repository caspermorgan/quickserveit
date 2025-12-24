import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useTranslation } from '@/hooks/useTranslation';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import LockedPortfolioItem from '@/components/LockedPortfolioItem';
import PortfolioAccessDialog from '@/components/PortfolioAccessDialog';
import { useNavigate } from 'react-router-dom';
import { Play, Image, Video, Palette, Film, Sparkles } from 'lucide-react';
import { useState } from 'react';

const portfolioItems = [
  { title: 'Brand Film - TechCorp', category: 'Video Production', icon: Video, description: 'Cinematic brand storytelling for enterprise tech company' },
  { title: 'Social Campaign - FashionX', category: 'Content Creation', icon: Image, description: 'Viral social media campaign with 10M+ reach' },
  { title: 'Product Launch - StartupY', category: 'Motion Graphics', icon: Play, description: 'Dynamic product reveal animation sequence' },
  { title: 'Rebrand - FinanceZ', category: 'Visual Identity', icon: Palette, description: 'Complete visual identity overhaul' },
  { title: 'Documentary - EcoLife', category: 'Video Production', icon: Film, description: 'Environmental awareness documentary series' },
  { title: 'AR Experience - RetailMax', category: 'Interactive Media', icon: Sparkles, description: 'Immersive augmented reality shopping experience' },
];

const Portfolio = () => {
  const { mode, setHasEntered } = useMode();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isAccessDialogOpen, setIsAccessDialogOpen] = useState(false);

  const handleReturn = () => {
    setHasEntered(false);
    navigate('/');
  };

  const handleUnlock = () => {
    setIsAccessDialogOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>{t('portfolio')} | {t('brandName')} {t('creatorStudio')}</title>
        <meta name="description" content="Explore our creative portfolio of video production, content creation, and visual design work" />
      </Helmet>

      <CursorLight mode={mode} />
      <FilmGrain />
      <FloatingNavbar mode={mode} onReturn={handleReturn} isVisible={true} />

      <main className="min-h-screen bg-background pt-32 pb-20">
        <section className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display mb-4">
              <span className="text-creator">Creative</span> {t('portfolio')}
            </h1>
            <p className="text-foreground/50 max-w-xl mx-auto">A showcase of our finest work across video production and visual design.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <LockedPortfolioItem
                key={index}
                title={item.title}
                category={item.category}
                description={item.description}
                icon={item.icon}
                onUnlock={handleUnlock}
              />
            ))}
          </div>
        </section>
      </main>

      <PortfolioAccessDialog
        isOpen={isAccessDialogOpen}
        onClose={() => setIsAccessDialogOpen(false)}
      />

      <Footer mode={mode} />
    </>
  );
};

export default Portfolio;
