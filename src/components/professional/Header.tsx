import { Link, useLocation } from 'react-router-dom';
import { useMode } from '@/context/ModeContext';

const Header = () => {
  const { mode, setMode } = useMode();
  const location = useLocation();

  const institutionalLinks = [
    { name: 'Home', path: '/home' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const creatorLinks = [
    { name: 'Home', path: '/home' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  const links = mode === 'institutional' ? institutionalLinks : creatorLinks;

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="container-professional">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/home" className="flex flex-col">
            <span className="font-display text-lg md:text-xl font-bold text-foreground tracking-wide">
              QUICKSERVE
            </span>
            <span className="text-[10px] md:text-xs text-muted-foreground tracking-widest">
              The 50M Standard
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-md trans-smooth ${
                  location.pathname === link.path
                    ? 'text-mode bg-mode-soft'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mode Toggle */}
          <div className="flex items-center gap-2 bg-secondary rounded-lg p-1">
            <button
              onClick={() => setMode('institutional')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md trans-smooth ${
                mode === 'institutional'
                  ? 'bg-card text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Institution
            </button>
            <button
              onClick={() => setMode('creator')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md trans-smooth ${
                mode === 'creator'
                  ? 'bg-card text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Creator
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex md:hidden items-center gap-1 pb-3 overflow-x-auto no-scrollbar">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap trans-smooth ${
                location.pathname === link.path
                  ? 'text-mode bg-mode-soft'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
