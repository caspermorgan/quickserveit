import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useMode } from '@/context/ModeContext';
import LandingView from './components/LandingView';

type Mode = 'institutional' | 'creator';

const LandingPage = () => {
    const navigate = useNavigate();
    const { setMode, setHasEntered } = useMode();
    const [localMode, setLocalMode] = useState<Mode>('institutional');
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Apply mode class to root for CSS variable updates
    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove('mode-institutional', 'mode-creator');
        root.classList.add(`mode-${localMode}`);
    }, [localMode]);

    const handleEnter = (selectedMode: Mode) => {
        if (isTransitioning) return;
        setIsTransitioning(true);

        // Set the mode in context
        setMode(selectedMode);
        setHasEntered(true);

        // Navigate to appropriate module home page
        setTimeout(() => {
            if (selectedMode === 'institutional') {
                navigate('/institutional/home');
            } else if (selectedMode === 'creator') {
                navigate('/creator/home');
            }
        }, 800);
    };

    const handlePortfolioEnter = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);

        setTimeout(() => {
            navigate('/portfolio');
        }, 800);
    };

    const handleModeChange = (newMode: Mode) => {
        setLocalMode(newMode);
    };

    const pageTitle = localMode === 'institutional'
        ? 'QuickServe IT | Premium Institutional Digital Support'
        : 'QuickServe IT | Premium Creative Studio Services';

    const pageDescription = localMode === 'institutional'
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

            <main className="h-screen bg-background overflow-hidden">
                {/* Landing View */}
                <LandingView
                    mode={localMode}
                    onModeChange={handleModeChange}
                    onEnter={handleEnter}
                    isExiting={isTransitioning}
                />
            </main>
        </>
    );
};

export default LandingPage;
