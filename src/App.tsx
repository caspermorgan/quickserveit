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
import { ThemeProvider } from "@/contexts/ThemeContext";

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

// Minimal loading fallback for page transitions
const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center">
      <p className="font-mono text-sm tracking-[0.3em] text-muted-foreground uppercase animate-pulse">
        Loading
      </p>
    </div>
  </div>
);

const queryClient = new QueryClient();

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
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
          <Route path="/" element={<Landing />} />
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
          <ThemeProvider>
            <ModeProvider>
              <TooltipProvider>
                <Toaster />
                <Sonner />
                <SpeedInsights />
                <BrowserRouter>
                  {/* Fixed Gradient Overlays - Viewport Edge Fade Effect */}
                  {/* Top Fade Layer - Content emerges from darkness */}
                  <div
                    className="fixed top-0 left-0 right-0 h-[150px] pointer-events-none z-40"
                    style={{
                      background: 'linear-gradient(to bottom, hsl(var(--background)) 10%, transparent 100%)'
                    }}
                  />

                  {/* Bottom Fade Layer - Content disappears into darkness */}
                  <div
                    className="fixed bottom-0 left-0 right-0 h-[150px] pointer-events-none z-40"
                    style={{
                      background: 'linear-gradient(to top, hsl(var(--background)) 10%, transparent 100%)'
                    }}
                  />

                  <AppRoutes />
                </BrowserRouter>
              </TooltipProvider>
            </ModeProvider>
          </ThemeProvider>
        </LanguageProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
