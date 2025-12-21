import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { Play, Image, Video, Palette } from 'lucide-react';

const portfolioItems = [
  { title: 'Brand Film - TechCorp', category: 'Video Production', icon: Video, description: 'Cinematic brand storytelling for enterprise tech company' },
  { title: 'Social Campaign - FashionX', category: 'Content Creation', icon: Image, description: 'Viral social media campaign with 10M+ reach' },
  { title: 'Product Launch - StartupY', category: 'Motion Graphics', icon: Play, description: 'Dynamic product reveal animation sequence' },
  { title: 'Rebrand - FinanceZ', category: 'Visual Identity', icon: Palette, description: 'Complete visual identity overhaul' },
  { title: 'Documentary - EcoLife', category: 'Video Production', icon: Video, description: 'Environmental awareness documentary series' },
  { title: 'AR Experience - RetailMax', category: 'Interactive Media', icon: Play, description: 'Immersive augmented reality shopping experience' },
];

const Portfolio = () => {
  const { mode, setHasEntered } = useMode();
  const navigate = useNavigate();

  const handleReturn = () => {
    setHasEntered(false);
    navigate('/');
  };

  return (
    <>
      <Helmet>
        <title>Portfolio | quickserveit Creator Studio</title>
        <meta name="description" content="Explore our creative portfolio of video production, content creation, and visual design work" />
      </Helmet>
      
      <CursorLight mode={mode} />
      <FilmGrain />
      <FloatingNavbar mode={mode} onReturn={handleReturn} isVisible={true} />
      
      <main className="min-h-screen bg-background pt-32 pb-20">
        <section className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display mb-4">
              <span className="text-creator">Creative</span> Portfolio
            </h1>
            <p className="text-foreground/50 max-w-xl mx-auto">A showcase of our finest work across video production and visual design.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="group p-6 rounded-2xl glass-card border border-border/20 hover:border-creator/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-creator/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-creator" />
                  </div>
                  <span className="text-xs font-medium text-creator uppercase tracking-wider">{item.category}</span>
                  <h3 className="text-lg font-medium mt-2 mb-2 group-hover:text-creator transition-colors">{item.title}</h3>
                  <p className="text-sm text-foreground/50">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      
      <Footer mode={mode} />
    </>
  );
};

export default Portfolio;
