import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import Header from '@/components/professional/Header';
import Footer from '@/components/professional/Footer';
import PricingSection from '@/components/professional/PricingSection';

const Pricing = () => {
  const { mode } = useMode();
  return (
    <>
      <Helmet><title>Pricing - QuickServe</title><meta name="description" content="Transparent pricing for professional IT and creative services" /></Helmet>
      <div className={`min-h-screen ${mode === 'institutional' ? 'mode-institutional' : 'mode-creator'}`}>
        <Header />
        <main><PricingSection /></main>
        <Footer />
      </div>
    </>
  );
};

export default Pricing;