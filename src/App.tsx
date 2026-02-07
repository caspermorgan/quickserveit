import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SpeedInsights } from "@/modules/core/components/SpeedInsights";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { ModeProvider, useMode } from "@/context/ModeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import SkipToContent from "@/modules/core/components/SkipToContent";
import PageTransition from "@/modules/core/components/motion/PageTransition";
import ErrorBoundary from "@/modules/core/components/ErrorBoundary";
import PageSkeletonLoader from "@/modules/core/components/SkeletonLoader";
import { initGA, logPageView } from "@/utils/analytics";

// Lazy load all page components for better performance
const Landing = lazy(() => import("@/modules/landing/LandingPage"));

// INSTITUTIONAL WORLD
const InstHome = lazy(() => import("./modules/institutional/pages/Home"));
const InstServices = lazy(() => import("./modules/institutional/pages/Services"));
const InstPricing = lazy(() => import("./modules/institutional/pages/Pricing"));
const InstAbout = lazy(() => import("./modules/institutional/pages/About"));
const InstContact = lazy(() => import("./modules/institutional/pages/Contact"));

// CREATOR WORLD
const CreatorAbout = lazy(() => import("./modules/creator/pages/About"));

// PORTFOLIO WORLD
const Founder = lazy(() => import("./modules/portfolio/pages/Founder"));
const Portfolio = lazy(() => import("./modules/portfolio/pages/Portfolio"));

// SHARED/LEGAL PAGES
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const FAQ = lazy(() => import("./pages/FAQ"));
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
  const { hasEntered } = useMode();

  // If user has already entered, redirect to institutional home
  if (hasEntered) {
    return <Navigate to="/institutional/home" replace />;
  }

  return <Landing />;
};

// Intelligent route wrapper that auto-enters for deep links
const SmartRoute = ({ children, defaultMode }: { children: React.ReactNode; defaultMode?: 'institutional' | 'creator' | 'portfolio' }) => {
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

          {/* INSTITUTIONAL WORLD */}
          <Route path="/institutional" element={<Navigate to="/institutional/home" replace />} />
          <Route path="/institutional/home" element={<SmartRoute defaultMode="institutional"><PageTransition><InstHome /></PageTransition></SmartRoute>} />
          <Route path="/institutional/services" element={<SmartRoute defaultMode="institutional"><PageTransition><InstServices /></PageTransition></SmartRoute>} />
          <Route path="/institutional/pricing" element={<SmartRoute defaultMode="institutional"><PageTransition><InstPricing /></PageTransition></SmartRoute>} />
          <Route path="/institutional/about" element={<SmartRoute defaultMode="institutional"><PageTransition><InstAbout /></PageTransition></SmartRoute>} />
          <Route path="/institutional/contact" element={<SmartRoute defaultMode="institutional"><PageTransition><InstContact /></PageTransition></SmartRoute>} />

          {/* CREATOR WORLD */}
          <Route path="/creator" element={<Navigate to="/creator/home" replace />} />
          <Route path="/creator/home" element={<SmartRoute defaultMode="creator"><PageTransition><InstHome /></PageTransition></SmartRoute>} />
          <Route path="/creator/services" element={<SmartRoute defaultMode="creator"><PageTransition><InstServices /></PageTransition></SmartRoute>} />
          <Route path="/creator/pricing" element={<SmartRoute defaultMode="creator"><PageTransition><InstPricing /></PageTransition></SmartRoute>} />
          <Route path="/creator/about" element={<SmartRoute defaultMode="creator"><PageTransition><CreatorAbout /></PageTransition></SmartRoute>} />
          <Route path="/creator/contact" element={<SmartRoute defaultMode="creator"><PageTransition><InstContact /></PageTransition></SmartRoute>} />

          {/* PORTFOLIO WORLD */}
          <Route path="/portfolio" element={<SmartRoute defaultMode="portfolio"><PageTransition><Portfolio /></PageTransition></SmartRoute>} />
          <Route path="/founder" element={<SmartRoute defaultMode="portfolio"><PageTransition><Founder /></PageTransition></SmartRoute>} />

          {/* SHARED/LEGAL PAGES */}
          <Route path="/terms" element={<SmartRoute><PageTransition><Terms /></PageTransition></SmartRoute>} />
          <Route path="/privacy" element={<SmartRoute><PageTransition><Privacy /></PageTransition></SmartRoute>} />
          <Route path="/disclaimer" element={<SmartRoute><PageTransition><Disclaimer /></PageTransition></SmartRoute>} />
          <Route path="/faq" element={<SmartRoute><PageTransition><FAQ /></PageTransition></SmartRoute>} />

          {/* LEGACY REDIRECTS (Keep these to prevent 404s for old links) */}
          <Route path="/home" element={<Navigate to="/institutional/home" replace />} />
          <Route path="/services" element={<Navigate to="/institutional/services" replace />} />
          <Route path="/pricing" element={<Navigate to="/institutional/pricing" replace />} />
          <Route path="/about" element={<Navigate to="/institutional/about" replace />} />
          <Route path="/contact" element={<Navigate to="/institutional/contact" replace />} />

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
