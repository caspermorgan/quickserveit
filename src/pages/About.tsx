import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import CredibilitySection from '@/components/CredibilitySection';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const { mode, setHasEntered } = useMode();
  const navigate = useNavigate();

  const handleReturn = () => {
    setHasEntered(false);
    navigate('/');
  };

  return (
    <>
      <Helmet>
        <title>About - QuickServe</title>
        <meta name="description" content="Learn about QuickServe's mission, architecture, and technical excellence" />
      </Helmet>
      
      <CursorLight mode={mode} />
      <FilmGrain />
      
      <FloatingNavbar 
        mode={mode} 
        onReturn={handleReturn}
        isVisible={true}
      />
      
      <main className="min-h-screen bg-background pt-32">
        <CredibilitySection mode={mode} />
      </main>
      
      <Footer mode={mode} />
    </>
  );
};

export default About;
