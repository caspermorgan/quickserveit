import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SpeedInsights } from "@/components/SpeedInsights";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { ModeProvider, useMode } from "@/context/ModeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import SkipToContent from "@/components/SkipToContent";
import PageTransition from "@/components/motion/PageTransition";
import ErrorBoundary from "@/components/ErrorBoundary";
import PageSkeletonLoader from "@/components/SkeletonLoader";
import { initGA, logPageView } from "@/utils/analytics";

// Lazy load all page components for better performance
const Landing = lazy(() => import("./pages/Landing"));
const Home = lazy(() => import("./modules/institutional/pages/Home"));
const Services = lazy(() => import("./modules/institutional/pages/Services"));
const Pricing = lazy(() => import("./modules/institutional/pages/Pricing"));
const About = lazy(() => import("./modules/institutional/pages/About"));
const Founder = lazy(() => import("./modules/portfolio/pages/Founder"));
const Contact = lazy(() => import("./modules/institutional/pages/Contact"));
const Portfolio = lazy(() => import("./modules/portfolio/pages/Portfolio"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const FAQ = lazy(() => import("./pages/FAQ"));
const CardDemo = lazy(() => import("./pages/CardDemo"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Premium glassmorphism loader matching brand language
const PageLoader = () => {
  return <PageSkeletonLoader />;
};

const queryClient = new QueryClient();

// Scroll to top component with analytics
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Track page view
    logPageView(pathname);
  }, [pathname]);

  return null;
};

// Smart landing route that only shows for root visits
const LandingRoute = () => {
  const { hasEntered, setHasEntered, setMode } = useMode();
  const location = useLocation();

  // If user has already entered, redirect to home
  if (hasEntered) {
    return <Navigate to="/home" replace />;
  }

  return <Landing />;
};

// Intelligent route wrapper that auto-enters for deep links
const SmartRoute = ({ children, defaultMode }: { children: React.ReactNode; defaultMode?: 'institutional' | 'creator' }) => {
  const { hasEntered, setHasEntered, setMode } = useMode();
  const location = useLocation();

  // Auto-enter for deep links (any non-root path)
  // This respects user intent from ads, shared links, bookmarks
  useEffect(() => {
    if (!hasEntered && location.pathname !== '/') {
      // Set mode based on URL context or default to institutional
      const mode = defaultMode || 'institutional';
      setMode(mode);
      setHasEntered(true);
    }
  }, [hasEntered, location.pathname, setHasEntered, setMode, defaultMode]);

  // If not entered yet and on root, this shouldn't happen
  // but redirect to landing as fallback
  if (!hasEntered && location.pathname === '/') {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Landing page - only for root visits */}
          <Route path="/" element={<LandingRoute />} />

          {/* All content pages - auto-enter for deep links */}
          <Route path="/home" element={<SmartRoute><PageTransition><Home /></PageTransition></SmartRoute>} />
          <Route path="/services" element={<SmartRoute><PageTransition><Services /></PageTransition></SmartRoute>} />
          <Route path="/pricing" element={<SmartRoute><PageTransition><Pricing /></PageTransition></SmartRoute>} />
          <Route path="/about" element={<SmartRoute><PageTransition><About /></PageTransition></SmartRoute>} />
          <Route path="/founder" element={<SmartRoute><PageTransition><Founder /></PageTransition></SmartRoute>} />
          <Route path="/contact" element={<SmartRoute><PageTransition><Contact /></PageTransition></SmartRoute>} />
          <Route path="/portfolio" element={<SmartRoute><PageTransition><Portfolio /></PageTransition></SmartRoute>} />
          <Route path="/terms" element={<SmartRoute><PageTransition><Terms /></PageTransition></SmartRoute>} />
          <Route path="/privacy" element={<SmartRoute><PageTransition><Privacy /></PageTransition></SmartRoute>} />
          <Route path="/disclaimer" element={<SmartRoute><PageTransition><Disclaimer /></PageTransition></SmartRoute>} />
          <Route path="/faq" element={<SmartRoute><PageTransition><FAQ /></PageTransition></SmartRoute>} />
          <Route path="/card-demo" element={<SmartRoute><PageTransition><CardDemo /></PageTransition></SmartRoute>} />

          {/* 404 - no gate needed */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

const App = () => {
  // Initialize Google Analytics on mount
  useEffect(() => {
    initGA(); // Replace 'G-XXXXXXXXXX' in analytics.ts with your actual GA4 Measurement ID
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <LanguageProvider>
          <ModeProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <SpeedInsights />
              <BrowserRouter>
                <SkipToContent />
                <ErrorBoundary>
                  <AppRoutes />
                </ErrorBoundary>
              </BrowserRouter>
            </TooltipProvider>
          </ModeProvider>
        </LanguageProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
