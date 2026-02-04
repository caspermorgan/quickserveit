import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';
import SwitchModeButton from './SwitchModeButton';

interface FloatingNavbarProps {
  mode: 'institutional' | 'creator' | 'portfolio';
  onReturn: () => void;
  isVisible: boolean;
}

const LanguageSwitch = ({ mode }: { mode: 'institutional' | 'creator' | 'portfolio' }) => {
  const { language, toggleLanguage } = useLanguage();
  const isEnglish = language === 'en';

  return (
    <button
      onClick={toggleLanguage}
      className={`
        relative flex items-center h-11 px-1 rounded-full
        glass-1
        transition-all duration-normal ease-out
        hover:bg-background/30 hover:border-foreground/20
        ${mode === 'institutional'
          ? 'hover:shadow-[0_0_15px_rgba(234,179,8,0.15)]'
          : 'hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]'
        }
      `}
      aria-label="Toggle language"
    >
      {/* Sliding indicator */}
      <span
        className={`
          absolute top-1 h-9 w-[2rem] rounded-full
          transition-all duration-normal ease-out
          ${mode === 'institutional'
            ? 'bg-institutional/20 shadow-[inset_0_0_8px_rgba(234,179,8,0.2)]'
            : 'bg-creator/20 shadow-[inset_0_0_8px_rgba(34,211,238,0.2)]'
          }
          ${isEnglish ? 'left-1' : 'left-[calc(100%-2.25rem)]'}
        `}
      />

      {/* EN option */}
      <span
        className={`
          relative z-10 px-2.5 py-1.5 text-sm font-medium
          transition-colors duration-normal
          ${isEnglish
            ? mode === 'institutional' ? 'text-institutional' : 'text-creator'
            : 'text-foreground/50'
          }
        `}
      >
        EN
      </span>

      {/* Hindi option */}
      <span
        className={`
          relative z-10 px-2.5 py-1.5 text-sm font-medium
          transition-colors duration-normal
          ${!isEnglish
            ? mode === 'institutional' ? 'text-institutional' : 'text-creator'
            : 'text-foreground/50'
          }
        `}
      >
        हिंदी
      </span>
    </button>
  );
};

const FloatingNavbar = ({ mode, onReturn, isVisible }: FloatingNavbarProps) => {
  const location = useLocation();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Smart scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Handle visibility
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }

      // Handle shadow/sticky state
      setIsScrolled(currentScrollY > 20);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Focus trap and keyboard navigation for mobile menu
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape key closes menu
      if (e.key === 'Escape') {
        e.preventDefault();
        setIsMenuOpen(false);
        hamburgerButtonRef.current?.focus();
        return;
      }

      // Tab key focus trap
      if (e.key === 'Tab' && mobileMenuRef.current) {
        const focusableElements = Array.from(
          mobileMenuRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), input:not([disabled])'
          )
        );

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          // Shift+Tab: If on first element, go to last
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          // Tab: If on last element, go to first
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Focus first element when menu opens
  useEffect(() => {
    if (isMenuOpen && mobileMenuRef.current) {
      const focusableElements = Array.from(
        mobileMenuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled])'
        )
      );
      focusableElements[0]?.focus();
    }
  }, [isMenuOpen]);

  // STRICT MENU LOGIC - 5 items per mode (4 for portfolio)

  // INSTITUTIONAL MODE: Home, Services, Pricing, About, Contact
  const institutionalLinks = [
    { label: t('home'), href: '/home' },
    { label: t('services'), href: '/services' },
    { label: t('pricing'), href: '/pricing' },
    { label: t('about'), href: '/about' },
    { label: t('contact'), href: '/contact' },
  ];

  // CREATOR MODE: Home, Studio, Pricing, About, Contact
  const creatorLinks = [
    { label: t('home'), href: '/home' },
    { label: t('studio'), href: '/services' },
    { label: t('pricing'), href: '/pricing' },
    { label: t('about'), href: '/about' },
    { label: t('contact'), href: '/contact' },
  ];

  // PORTFOLIO MODE: Home, Projects, Vision, Contact (4 items only)
  const portfolioLinks = [
    { label: t('home'), href: '/home' },
    { label: t('projects'), href: '/portfolio' },
    { label: t('vision'), href: '/about' },
    { label: t('contact'), href: '/contact' },
  ];

  const links = mode === 'institutional'
    ? institutionalLinks
    : mode === 'creator'
      ? creatorLinks
      : portfolioLinks;

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const combinedVisible = isVisible && navVisible;

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-sm transition-all duration-normal md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsMenuOpen(false)}
        role="dialog"
        aria-label="Mobile navigation menu"
        aria-modal="true"
      >
        {/* Mobile Menu Content - SLIDE DOWN from top */}
        <div
          ref={mobileMenuRef}
          className={`absolute top-0 left-0 w-full bg-black/80 backdrop-blur-xl border-b ${mode === 'institutional' ? 'border-amber-500/20' : 'border-cyan-500/20'
            } transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-foreground/10">
            <h2 className="text-lg font-display font-semibold text-foreground">{t('menu')}</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-foreground/5 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-foreground/70" />
            </button>
          </div>

          {/* Mobile Navigation Links - Large & Centered */}
          <nav className="flex flex-col p-6 space-y-3">
            {links.map((link, index) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`
                    relative px-6 py-4 text-xl font-medium tracking-wide text-center
                    transition-all duration-normal rounded-full
                    min-h-[56px] flex items-center justify-center
                    animate-fade-in-up
                    ${isActive
                      ? mode === 'institutional'
                        ? 'text-amber-500 bg-amber-500/10 border border-amber-500/20'
                        : 'text-cyan-500 bg-cyan-500/10 border border-cyan-500/20'
                      : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5 border border-transparent'
                    }
                  `}
                  style={{ animationDelay: isMenuOpen ? `${index * 50}ms` : '0ms' }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Bottom Controls - Language & Mode Switch */}
            <div className="pt-6 mt-4 border-t border-foreground/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground/60">{t('language')}</span>
                <LanguageSwitch mode={mode} />
              </div>

              <SwitchModeButton variant="minimal" className="w-full justify-center" />
            </div>
          </nav>
        </div>
      </div>

      {/* Logo Pill - Top Left */}
      <div
        className={`
          fixed top-6 left-6 md:top-8 md:left-8 z-50 
          animate-float opacity-90
          ${combinedVisible
            ? 'translate-y-0 transition-all duration-fast ease-in'
            : '-translate-y-2 opacity-0 transition-all duration-[350ms] ease-out'
          }
        `}
      >
        <button
          onClick={onReturn}
          className={`
            group flex items-center gap-0 overflow-hidden
            h-11 md:h-12 pl-0 pr-0 rounded-full 
            glass-nav
            transition-all duration-slow ease-out
            hover:pr-4 md:hover:pr-5
            ${mode === 'institutional'
              ? 'hover:border-institutional/30 hover:shadow-[0_0_20px_rgba(234,179,8,0.2)]'
              : 'hover:border-creator/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]'
            }
          `}
          aria-label="Return to landing"
        >
          {/* Perfect Circle Logo Container */}
          <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={mode === 'institutional' ? '/quickserve-logo-gold.png' : '/quickserve-logo-cyan.png'}
              alt="QuickServe IT"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Text - Hidden by default, expands on hover */}
          <span
            className={`
              flex items-center h-full
              whitespace-nowrap overflow-hidden
              font-display font-medium text-sm md:text-base tracking-wide
              transition-all duration-slow ease-out
              max-w-0 opacity-0 pl-0
              group-hover:max-w-[150px] group-hover:opacity-100 group-hover:pl-3
              ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}
            `}
          >
            QuickServe IT
          </span>
        </button>
      </div>

      {/* Mobile: Hamburger Menu Button (Top Right) */}
      <div
        className={`
          fixed top-6 right-6 z-50 md:hidden
          ${combinedVisible
            ? 'opacity-100 translate-y-0 transition-all duration-fast ease-in'
            : 'opacity-0 -translate-y-2 transition-all duration-[350ms] ease-out'
          }
        `}
      >
        <button
          ref={hamburgerButtonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`
            p-0 rounded-full glass-nav
            transition-all duration-normal
            w-11 h-11 min-h-[44px] flex items-center justify-center
            ${mode === 'institutional'
              ? 'hover:hover:border-institutional/20 hover:hover:shadow-[0_0_12px_rgba(234,179,8,0.12)]'
              : 'hover:hover:border-creator/20 hover:hover:shadow-[0_0_12px_rgba(34,211,238,0.12)]'
            }
          `}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <Menu className={`w-5 h-5 transition-colors opacity-90 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
            }`} />
        </button>
      </div>

      {/* Desktop: Language Switch (Top Right) */}
      <div
        className={`
          fixed top-6 right-6 md:top-8 md:right-8 z-50 hidden md:block
          ${combinedVisible
            ? 'opacity-100 translate-y-0 transition-all duration-fast ease-in'
            : 'opacity-0 -translate-y-2 transition-all duration-[350ms] ease-out'
          }
        `}
      >
        <LanguageSwitch mode={mode} />
      </div>

      {/* Desktop: VIP CAPSULE - Centered Floating Pill at BOTTOM */}
      <div
        className={`
          fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex
          ${combinedVisible
            ? 'opacity-100 translate-y-0 transition-all duration-normal ease-[cubic-bezier(0.4,0,1,1)]'
            : 'opacity-0 translate-y-10 pointer-events-none transition-all duration-[400ms] ease-[cubic-bezier(0,0,0.2,1)]'
          }
        `}
      >
        <nav
          className={`
            flex items-center gap-2 px-6 py-3 rounded-full 
            bg-black/60 backdrop-blur-xl
            max-w-4xl
            transition-all duration-300
            ${mode === 'institutional'
              ? 'border border-amber-500/30 hover:shadow-[0_0_30px_rgba(234,179,8,0.2)]'
              : 'border border-cyan-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]'
            }
          `}
        >
          {/* Navigation Links with GLOW PILL active states */}
          {links.map((link, index) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`
                  relative px-4 py-2 text-sm font-medium tracking-wide 
                  transition-all duration-normal whitespace-nowrap rounded-full
                  min-h-[44px] flex items-center
                  ${isActive
                    ? mode === 'institutional'
                      ? 'text-amber-500 bg-amber-500/10'
                      : 'text-cyan-500 bg-cyan-500/10'
                    : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                  }
                `}
                style={{ animationDelay: `${index * 50}ms` }}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default FloatingNavbar;
