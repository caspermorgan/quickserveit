import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import Header from '@/components/professional/Header';
import Footer from '@/components/professional/Footer';
import ContactSection from '@/components/professional/ContactSection';

const Contact = () => {
  const { mode } = useMode();
  return (
    <>
      <Helmet><title>Contact - QuickServe</title><meta name="description" content="Get in touch with QuickServe" /></Helmet>
      <div className={`min-h-screen ${mode === 'institutional' ? 'mode-institutional' : 'mode-creator'}`}>
        <Header />
        <main><ContactSection /></main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;