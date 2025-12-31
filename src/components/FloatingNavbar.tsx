import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';
import HeaderStatusBadge from './HeaderStatusBadge';

interface FloatingNavbarProps {
  mode: 'institutional' | 'creator';
  onReturn: () => void;
  isVisible: boolean;
}

const LanguageSwitch = ({ mode }: { mode: 'institutional' | 'creator' }) => {
  const { language, toggleLanguage } = useLanguage();
  const isEnglish = language === 'en';

  return (
    <button
      onClick={toggleLanguage}
      className={`
        relative flex items-center h-7 md:h-8 px-1 rounded-full
        backdrop-blur-md bg-background/20 border border-foreground/10
        shadow-[0_2px_10px_rgba(0,0,0,0.1)] 
        transition-all duration-300 ease-out
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
          absolute top-0.5 h-6 md:h-7 w-8 md:w-9 rounded-full
          transition-all duration-300 ease-out
          ${mode === 'institutional'
            ? 'bg-institutional/20 shadow-[inset_0_0_8px_rgba(234,179,8,0.2)]'
            : 'bg-creator/20 shadow-[inset_0_0_8px_rgba(34,211,238,0.2)]'
          }
          ${isEnglish ? 'left-0.5' : 'left-[calc(100%-2.375rem)] md:left-[calc(100%-2.625rem)]'}
        `}
      />

      {/* EN option */}
      <span
        className={`
          relative z-10 px-2 md:px-2.5 py-1 text-[10px] md:text-xs font-medium
          transition-colors duration-300
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
          relative z-10 px-2 md:px-2.5 py-1 text-[10px] md:text-xs font-medium
          transition-colors duration-300
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

  const institutionalLinks = [
    { label: t('home'), href: '/home' },
    { label: t('services'), href: '/services' },
    { label: t('about'), href: '/about' },
    { label: t('founder'), href: '/founder' },
    { label: t('pricing'), href: '/pricing' },
    { label: t('contact'), href: '/contact' },
  ];

  const creatorLinks = [
    { label: t('home'), href: '/home' },
    { label: t('studio'), href: '/services' },
    { label: t('portfolio'), href: '/portfolio' },
    { label: t('about'), href: '/about' },
    { label: t('pricing'), href: '/pricing' },
    { label: t('contact'), href: '/contact' },
  ];

  const links = mode === 'institutional' ? institutionalLinks : creatorLinks;

  // Close menu on outside click
  const handleOverlayClick = () => {
    setIsMenuOpen(false);
  };

  const combinedVisible = isVisible && navVisible;

  return (
    <>
      {/* Dark Overlay when menu is focused */}
      <div
        className={`fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={handleOverlayClick}
      />

      {/* Logo Pill - Anti-Gravity Style */}
      <div
        className={`
          fixed top-6 left-6 md:top-8 md:left-8 z-50 
          animate-float
          ${combinedVisible
            ? 'opacity-100 translate-y-0 transition-all duration-200 ease-in'
            : 'opacity-0 -translate-y-2 transition-all duration-[350ms] ease-out'
          }
        `}
      >
        <button
          onClick={onReturn}
          className={`
            group flex items-center gap-0 overflow-visible
            pr-0 rounded-full 
            glass-nav
            transition-all duration-500 ease-out
            group-hover:pr-3 md:group-hover:pr-4
            ${mode === 'institutional'
              ? 'hover:border-institutional/30 hover:shadow-[0_0_20px_rgba(234,179,8,0.2)]'
              : 'hover:border-creator/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]'
            }
          `}
          aria-label="Return to landing"
        >
          {/* Perfect Circle Logo Container */}
          <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex-shrink-0 bg-background/10 p-0.5 md:p-1">
            <img
              src="/quickserve-logo.png"
              alt="QuickServe IT"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Text - Hidden by default, expands on hover */}
          <span
            className={`
              inline-block whitespace-nowrap overflow-hidden
              font-display font-medium text-sm md:text-base tracking-wide
              transition-all duration-500 ease-out
              max-w-0 opacity-0
              group-hover:max-w-[200px] group-hover:opacity-100
              group-hover:ml-2 md:group-hover:ml-3
              ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}
            `}
          >
            QuickServe IT
          </span>
        </button>
      </div>


      {/* Language Switch - Top Right */}
      <div className={`fixed top-6 right-6 md:top-8 md:right-8 z-50 ${combinedVisible
        ? 'opacity-100 translate-y-0 transition-all duration-200 ease-in'
        : 'opacity-0 -translate-y-2 transition-all duration-[350ms] ease-out'
        }`}>
        <LanguageSwitch mode={mode} />
      </div>

      {/* Navigation Bar - Bottom */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 ${combinedVisible
          ? 'opacity-100 translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.4,0,1,1)]'
          : 'opacity-0 translate-y-10 pointer-events-none transition-all duration-[400ms] ease-[cubic-bezier(0,0,0.2,1)]'
          }`}
      >
        <nav className="flex items-center gap-1 md:gap-2 px-4 py-3 md:px-6 md:py-4 rounded-full glass-nav overflow-x-auto no-scrollbar max-w-[90vw]">
          {links.map((link, index) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`relative px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium tracking-wide transition-all duration-300 whitespace-nowrap group ${isActive
                  ? mode === 'institutional' ? 'text-institutional' : 'text-creator'
                  : 'text-foreground/60 hover:text-foreground'
                  }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}

                {/* Active/Hover underline */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px transition-all duration-300 ${isActive ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                    } ${mode === 'institutional' ? 'bg-institutional' : 'bg-creator'
                    }`}
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default FloatingNavbar;
