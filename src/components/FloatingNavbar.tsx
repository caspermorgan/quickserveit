import { ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

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
  
  const institutionalLinks = [
    { label: 'Home', href: '/home' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Founder', href: '/founder' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ];
  
  const creatorLinks = [
    { label: 'Home', href: '/home' },
    { label: 'Studio', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ];
  
  const links = mode === 'institutional' ? institutionalLinks : creatorLinks;

  return (
    <>
      {/* Return Button */}
      <div className="fixed top-6 left-6 md:top-8 md:left-8 z-50">
        <button
          onClick={onReturn}
          className={`group flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full glass-nav transition-all duration-500 hover:scale-110 ${
            mode === 'institutional'
              ? 'hover:border-institutional/30 hover:shadow-[0_0_20px_rgba(234,179,8,0.2)]'
              : 'hover:border-creator/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]'
          }`}
          aria-label="Return to landing"
        >
          <ArrowLeft className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors duration-300" />
        </button>
      </div>


      {/* Language Switch - Top Right */}
    </div>
    </div>
      <div className="fixed top-6 right-6 md:top-8 md:right-8 z-50">
        <LanguageSwitch mode={mode} />
      </div>
      
      {/* Navigation Bar - Bottom */}
      <div 
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <nav className="flex items-center gap-1 md:gap-2 px-4 py-3 md:px-6 md:py-4 rounded-full glass-nav overflow-x-auto no-scrollbar max-w-[90vw]">
          {links.map((link, index) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`relative px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium tracking-wide transition-all duration-300 whitespace-nowrap group ${
                  isActive 
                    ? mode === 'institutional' ? 'text-institutional' : 'text-creator'
                    : 'text-foreground/60 hover:text-foreground'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
                
                {/* Active/Hover underline */}
                <span 
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px transition-all duration-300 ${
                    isActive ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                  } ${
                    mode === 'institutional' ? 'bg-institutional' : 'bg-creator'
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
