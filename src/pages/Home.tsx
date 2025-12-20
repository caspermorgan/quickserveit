import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import HeroSection from '@/components/HeroSection';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { mode, setMode, setHasEntered } = useMode();
  const navigate = useNavigate();

  const handleReturn = () => {
    setHasEntered(false);
    navigate('/');
  };

  return (
    <>
      <Helmet>
        <title>QuickServe - {mode === 'institutional' ? 'Enterprise Solutions' : 'Creator Studio'}</title>
        <meta name="description" content="Premium IT solutions and creative services for businesses and creators." />
      </Helmet>
      
      <CursorLight mode={mode} />
      <FilmGrain />
      
      <FloatingNavbar 
        mode={mode} 
        onReturn={handleReturn}
        isVisible={true}
      />
      
      <main className="min-h-screen bg-background">
        <HeroSection mode={mode} />
      </main>
      
      <Footer mode={mode} />
    </>
  );
};

export default Home;
