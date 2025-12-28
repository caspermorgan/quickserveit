import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import LandingView from '@/components/LandingView';

const Landing = () => {
  const { mode, setMode, setHasEntered } = useMode();
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
        <title>Quickserve IT | Your Personal Tech Partner</title>
        <meta name="description" content="Premium IT documentation and creative services for institutions and creators. Calm, confidential, deadline-driven execution." />
        <link rel="canonical" href="https://www.quickserveit.online" />
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
