import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import PricingSection from '@/components/PricingSection';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const { mode, setHasEntered } = useMode();
  const navigate = useNavigate();

  const handleReturn = () => {
    setHasEntered(false);
    navigate('/');
  };

  return (
    <>
      <Helmet>
        <title>Pricing - QuickServe</title>
        <meta name="description" content="Transparent pricing for IT solutions and creative services" />
      </Helmet>
      
      <CursorLight mode={mode} />
      <FilmGrain />
      
      <FloatingNavbar 
        mode={mode} 
        onReturn={handleReturn}
        isVisible={true}
      />
      
      <main className="min-h-screen bg-background pt-32">
        <PricingSection mode={mode} />
      </main>
      
      <Footer mode={mode} />
    </>
  );
};

export default Pricing;
