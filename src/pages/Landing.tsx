import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import LandingView from '@/components/LandingView';

const Landing = () => {
  const { mode, setMode, hasEntered, setHasEntered } = useMode();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const handleEnter = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setHasEntered(true);
      navigate('/home');
    }, 800);
  };

  const handleModeChange = (newMode: 'institutional' | 'creator') => {
    setMode(newMode);
  };

  return (
    <>
      <Helmet>
        <title>QuickServe - Premium IT Solutions & Creative Services</title>
        <meta name="description" content="Enterprise-grade IT solutions and creative services. Choose your path: Institutional excellence or Creator innovation." />
      </Helmet>
      
      <LandingView 
        mode={mode}
        onModeChange={handleModeChange}
        onEnter={handleEnter}
        isExiting={isTransitioning}
      />
    </>
  );
};

export default Landing;
