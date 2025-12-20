import { ArrowLeft } from 'lucide-react';

interface FloatingNavbarProps {
  mode: 'institutional' | 'creator';
  onReturn: () => void;
  isVisible: boolean;
}

const FloatingNavbar = ({ mode, onReturn, isVisible }: FloatingNavbarProps) => {
  const institutionalLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];
  
  const creatorLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Studio', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
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
      
      {/* Navigation Bar */}
      <div 
        className={`fixed top-6 md:top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        <nav className="flex items-center gap-1 md:gap-2 px-4 py-3 md:px-6 md:py-4 rounded-full glass-nav overflow-x-auto no-scrollbar max-w-[90vw]">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium tracking-wide text-foreground/60 hover:text-foreground transition-all duration-300 whitespace-nowrap group`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.label}
              
              {/* Hover underline */}
              <span 
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px transition-all duration-300 group-hover:w-3/4 ${
                  mode === 'institutional' ? 'bg-institutional' : 'bg-creator'
                }`}
              />
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default FloatingNavbar;
