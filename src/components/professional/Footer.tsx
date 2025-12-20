import { Link } from 'react-router-dom';

const Footer = () => {
  const productLinks = [
    { name: 'Features', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Portfolio', path: '/portfolio' },
  ];

  const companyLinks = [
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '#' },
  ];

  const supportLinks = [
    { name: 'Help Center', path: '#' },
    { name: 'FAQ', path: '#' },
    { name: 'Status', path: '#' },
  ];

  const legalLinks = [
    { name: 'Privacy', path: '#' },
    { name: 'Terms', path: '#' },
    { name: 'Cookies', path: '#' },
  ];

  return (
    <footer className="footer-dark">
      <div className="container-professional py-12 md:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-display text-xl font-bold text-card tracking-wide mb-2">
              QUICKSERVE
            </div>
            <p className="text-sm text-muted-foreground">
              The 50M Standard
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-card mb-4">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-card trans-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-card mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-card trans-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-card mb-4">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-card trans-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-card mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-card trans-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-muted-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © 2025 QuickServe IT. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground text-center max-w-xl">
              QuickServe provides technical assistance and documentation services only. 
              Academic correctness and final record authenticity remain the sole responsibility of the institution.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
