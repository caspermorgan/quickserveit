import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMode } from '@/context/ModeContext';
import Header from '@/components/professional/Header';
import HeroSection from '@/components/professional/HeroSection';
import FeaturesSection from '@/components/professional/FeaturesSection';
import PricingSection from '@/components/professional/PricingSection';
import ContactSection from '@/components/professional/ContactSection';
import Footer from '@/components/professional/Footer';

const Home = () => {
  const { mode, hasEntered, setHasEntered } = useMode();
  const navigate = useNavigate();

  // Auto-enter for professional layout (no landing page gate)
  useEffect(() => {
    if (!hasEntered) {
      setHasEntered(true);
    }
  }, [hasEntered, setHasEntered]);

  return (
    <>
      <Helmet>
        <title>QuickServe - {mode === 'institutional' ? 'Enterprise Solutions' : 'Creator Studio'}</title>
        <meta name="description" content="Professional IT solutions and creative services for businesses and creators. The 50M Standard." />
      </Helmet>

      <div className={`min-h-screen ${mode === 'institutional' ? 'mode-institutional' : 'mode-creator'}`}>
        <Header />
        
        <main>
          <HeroSection />
          <FeaturesSection />
          <PricingSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;
