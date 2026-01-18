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

// Smart landing route that bypasses for returning users
const LandingRoute = () => {
  const { hasEntered } = useMode();
  const location = useLocation();

  // If user has already entered and is on landing page, redirect to home
  // Allow explicit navigation to landing page via state flag
  const isExplicitNavigation = location.state?.explicit === true;

  if (hasEntered && !isExplicitNavigation) {
    return <Navigate to="/home" replace />;
  }

  return <Landing />;
};

// Protected route wrapper that redirects to landing if not entered
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { hasEntered } = useMode();

  if (!hasEntered) {
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
          <Route path="/" element={<LandingRoute />} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/services" element={<ProtectedRoute><Services /></ProtectedRoute>} />
          <Route path="/pricing" element={<ProtectedRoute><Pricing /></ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path="/founder" element={<ProtectedRoute><Founder /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
          <Route path="/portfolio" element={<ProtectedRoute><Portfolio /></ProtectedRoute>} />
          <Route path="/terms" element={<ProtectedRoute><Terms /></ProtectedRoute>} />
          <Route path="/privacy" element={<ProtectedRoute><Privacy /></ProtectedRoute>} />
          <Route path="/disclaimer" element={<ProtectedRoute><Disclaimer /></ProtectedRoute>} />
          <Route path="/faq" element={<ProtectedRoute><FAQ /></ProtectedRoute>} />
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
