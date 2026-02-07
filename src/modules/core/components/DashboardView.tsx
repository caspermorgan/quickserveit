import { useState, useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import FloatingNavbar from '@/modules/core/components/FloatingNavbar';
import ServicesSection from './ServicesSection';
import CredibilitySection from './CredibilitySection';
import PricingSection from './PricingSection';
import ContactSection from './ContactSection';
import Footer from '@/modules/core/components/Footer';
import FilmGrain from './FilmGrain';
import CursorLight from './CursorLight';

interface DashboardViewProps {
  mode: 'institutional' | 'creator';
  onReturn: () => void;
  isEntering: boolean;
}

const DashboardView = ({ mode, onReturn, isEntering }: DashboardViewProps) => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const lastScrollY = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const currentScrollY = container.scrollTop;

      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }

      // Show back to top button
      setShowBackToTop(currentScrollY > 500);

      lastScrollY.current = currentScrollY;
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed inset-0 z-40 bg-background transition-all duration-1000 ${isEntering
        ? 'opacity-100 scale-100 blur-0'
        : 'opacity-0 scale-95 blur-lg pointer-events-none'
        }`}
    >
      {/* Cursor Light - Desktop Only */}
      {!isMobile && <CursorLight mode={mode} />}

      {/* Film Grain - Desktop Only */}
      {!isMobile && <FilmGrain />}

      {/* Navbar */}
      <FloatingNavbar mode={mode} onReturn={onReturn} isVisible={isNavVisible} />

      {/* Scrollable Content */}
      <div
        ref={containerRef}
        className="h-full overflow-y-auto no-scrollbar scroll-smooth"
      >
        <ServicesSection mode={mode} />
        <CredibilitySection mode={mode} />
        <PricingSection mode={mode} />
        <ContactSection mode={mode} />
        <Footer />
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full glass-nav flex items-center justify-center transition-all duration-700 ${showBackToTop
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10 pointer-events-none'
          } ${mode === 'institutional'
            ? 'hover:border-institutional/30 hover:shadow-[0_0_20px_rgba(234,179,8,0.2)]'
            : 'hover:border-creator/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]'
          }`}
        aria-label="Back to top"
      >
        <ArrowUp className={`w-5 h-5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
          }`} />
      </button>
    </div>
  );
};

export default DashboardView;
