import { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import LandingView from '../components/LandingView';
import DashboardView from '../components/DashboardView';

type Mode = 'institutional' | 'creator';
type View = 'landing' | 'dashboard';

const Index = () => {
  const [mode, setMode] = useState<Mode>('institutional');
  const [view, setView] = useState<View>('landing');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Apply mode class to root for CSS variable updates
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('mode-institutional', 'mode-creator');
    root.classList.add(`mode-${mode}`);
  }, [mode]);

  const handleEnter = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    // Delay view change for exit animation
    setTimeout(() => {
      setView('dashboard');
      setTimeout(() => setIsTransitioning(false), 500);
    }, 800);
  }, [isTransitioning]);

  const handleReturn = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    // Delay view change for exit animation
    setTimeout(() => {
      setView('landing');
      setTimeout(() => setIsTransitioning(false), 500);
    }, 600);
  }, [isTransitioning]);

  const handleModeChange = useCallback((newMode: Mode) => {
    setMode(newMode);
  }, []);

  const pageTitle = mode === 'institutional' 
    ? 'QuickServe IT | Premium Institutional Digital Support'
    : 'QuickServe IT | Premium Creative Studio Services';
  
  const pageDescription = mode === 'institutional'
    ? 'Calm digital execution for schools and institutions. Exam documentation, scholarship processing, UDISE+ management, and confidential support.'
    : 'World-class video editing, motion graphics, and content strategy for creators. Premium visual storytelling that drives engagement.';

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="QuickServe, digital services, institutional support, video editing, content creation, India" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <link rel="canonical" href="https://quickserve.in" />
      </Helmet>

      <main className="min-h-screen bg-background overflow-hidden">
        {/* Landing View */}
        <LandingView 
          mode={mode}
          onModeChange={handleModeChange}
          onEnter={handleEnter}
          isExiting={view === 'dashboard' || isTransitioning}
        />
        
        {/* Dashboard View */}
        <DashboardView 
          mode={mode}
          onReturn={handleReturn}
          isEntering={view === 'dashboard'}
        />
      </main>
    </>
  );
};

export default Index;
