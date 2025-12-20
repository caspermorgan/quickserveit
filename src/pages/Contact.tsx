import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import ContactSection from '@/components/ContactSection';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const { mode, setHasEntered } = useMode();
  const navigate = useNavigate();

  const handleReturn = () => {
    setHasEntered(false);
    navigate('/');
  };

  return (
    <>
      <Helmet>
        <title>Contact - QuickServe</title>
        <meta name="description" content="Get in touch with QuickServe for IT solutions and creative services" />
      </Helmet>
      
      <CursorLight mode={mode} />
      <FilmGrain />
      
      <FloatingNavbar 
        mode={mode} 
        onReturn={handleReturn}
        isVisible={true}
      />
      
      <main className="min-h-screen bg-background pt-32">
        <ContactSection mode={mode} />
      </main>
      
      <Footer mode={mode} />
    </>
  );
};

export default Contact;
