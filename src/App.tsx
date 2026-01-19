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

// Lazy load all page components for better performance
const Landing = lazy(() => import("./pages/Landing"));
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Pricing = lazy(() => import("./pages/Pricing"));
const About = lazy(() => import("./pages/About"));
const Founder = lazy(() => import("./pages/Founder"));
const Contact = lazy(() => import("./pages/Contact"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const FAQ = lazy(() => import("./pages/FAQ"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Premium glassmorphism loader matching brand language
const PageLoader = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-foreground/5 via-transparent to-transparent opacity-30" />

      {/* Premium glassmorphism loader */}
      <div className="relative">
        {/* Animated particles container */}
        <div className="relative w-20 h-20 md:w-24 md:h-24">
          {/* Outer rotating ring */}
          <div
            className="absolute inset-0 rounded-full border border-foreground/10"
            style={{
              animation: 'spin-slow 3s linear infinite'
            }}
          />

          {/* Inner pulsing core */}
          <div
            className="absolute inset-4 rounded-full glass-card border border-foreground/20 flex items-center justify-center"
            style={{
              animation: 'pulse-slow 2s ease-in-out infinite'
            }}
          >
            {/* Center dot */}
            <div className="w-2 h-2 rounded-full bg-foreground/40 animate-glow-pulse" />
          </div>

          {/* Orbiting particles */}
          <div
            className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-foreground/60"
            style={{
              transformOrigin: '-2rem 0',
              animation: 'orbit-1 4s linear infinite'
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-foreground/40"
            style={{
              transformOrigin: '-2.5rem 0',
              animation: 'orbit-2 5s linear infinite'
            }}
          />
        </div>
      </div>
    </div>
  );
};

const queryClient = new QueryClient();

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
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
          <Route path="/home" element={<SmartRoute><Home /></SmartRoute>} />
          <Route path="/services" element={<SmartRoute><Services /></SmartRoute>} />
          <Route path="/pricing" element={<SmartRoute><Pricing /></SmartRoute>} />
          <Route path="/about" element={<SmartRoute><About /></SmartRoute>} />
          <Route path="/founder" element={<SmartRoute><Founder /></SmartRoute>} />
          <Route path="/contact" element={<SmartRoute><Contact /></SmartRoute>} />
          <Route path="/portfolio" element={<SmartRoute><Portfolio /></SmartRoute>} />
          <Route path="/terms" element={<SmartRoute><Terms /></SmartRoute>} />
          <Route path="/privacy" element={<SmartRoute><Privacy /></SmartRoute>} />
          <Route path="/disclaimer" element={<SmartRoute><Disclaimer /></SmartRoute>} />
          <Route path="/faq" element={<SmartRoute><FAQ /></SmartRoute>} />

          {/* 404 - no gate needed */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

const App = () => {
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
                <AppRoutes />
              </BrowserRouter>
            </TooltipProvider>
          </ModeProvider>
        </LanguageProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
