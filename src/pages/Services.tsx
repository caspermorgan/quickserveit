import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import ServicesSection from '@/components/ServicesSection';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const { mode, setHasEntered } = useMode();
  const navigate = useNavigate();

  const handleReturn = () => {
    setHasEntered(false);
    navigate('/');
  };

  return (
    <>
      <Helmet>
        <title>{mode === 'institutional' ? 'Services' : 'Studio'} - QuickServe</title>
        <meta name="description" content={mode === 'institutional' ? 'Enterprise IT solutions and services' : 'Creative studio services for content creators'} />
      </Helmet>
      
      <CursorLight mode={mode} />
      <FilmGrain />
      
      <FloatingNavbar 
        mode={mode} 
        onReturn={handleReturn}
        isVisible={true}
      />
      
      <main className="min-h-screen bg-background pt-32">
        <ServicesSection mode={mode} />
      </main>
      
      <Footer mode={mode} />
    </>
  );
};

export default Services;
