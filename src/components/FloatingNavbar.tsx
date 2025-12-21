import { ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import WorkingHoursIndicator from './WorkingHoursIndicator';

interface FloatingNavbarProps {
  mode: 'institutional' | 'creator';
  onReturn: () => void;
  isVisible: boolean;
}

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

      {/* Working Hours Indicator - Desktop Center */}
      <div className="fixed top-6 md:top-8 left-1/2 -translate-x-1/2 z-40 hidden lg:block">
        <WorkingHoursIndicator />
      </div>

      {/* Brand - Top Right */}
      <div className="fixed top-6 right-6 md:top-8 md:right-8 z-50">
        <span className={`text-xs font-mono tracking-widest lowercase ${mode === 'institutional' ? 'text-institutional/60' : 'text-creator/60'}`}>
          quickserveit
        </span>
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
