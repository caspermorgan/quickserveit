interface FooterProps {
  mode: 'institutional' | 'creator';
}

const Footer = ({ mode }: FooterProps) => {
  return (
    <footer className="py-12 md:py-16 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="font-display text-xl tracking-[0.2em] text-foreground mb-2">
              QUICKSERVE
            </div>
            <div className={`text-xs tracking-widest ${
              mode === 'institutional' ? 'text-institutional/60' : 'text-creator/60'
            }`}>
              The 50M Standard
            </div>
          </div>
          
          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-foreground/40">
            <a href="#" className="hover:text-foreground transition-colors duration-300">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors duration-300">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors duration-300">
              Support
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center md:text-right">
            <div className="text-xs text-foreground/20 font-mono tracking-wide">
              © 2025 QuickServe IT
            </div>
            <div className="text-[10px] text-foreground/10 font-mono mt-1">
              <span className={mode === 'institutional' ? 'text-institutional/40' : 'text-creator/40'}>
                ENCRYPTED
              </span>
              {' • '}
              LOC: INDIA
            </div>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-[10px] text-foreground/20 max-w-2xl mx-auto leading-relaxed">
            QuickServe provides technical assistance and documentation services only. 
            Academic correctness, student eligibility, and final record authenticity remain 
            the sole responsibility of the institution. Reach, monetization, and performance 
            depend on platform algorithms; editing quality is our focus.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
