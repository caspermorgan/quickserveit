import { Link } from 'react-router-dom';
import { MessageCircleIcon, ShieldIcon } from '@/components/IconSystem';
import AvailabilityIndicator from './AvailabilityIndicator';
import { useTranslation } from '@/hooks/useTranslation';
import SwitchModeButton from './SwitchModeButton';

interface FooterProps {
  mode: 'institutional' | 'creator';
}

const Footer = ({ mode }: FooterProps) => {
  const { t } = useTranslation();
  const whatsappNumber = '916388224877';
  const whatsappMessage = encodeURIComponent('Hello quickserveit, I would like to inquire about your services.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer
      className="relative py-12 md:py-16 px-6 border-t overflow-hidden"
      style={{
        borderColor: mode === 'institutional'
          ? 'hsl(43, 96%, 56%, 0.1)'
          : 'hsl(187, 100%, 42%, 0.1)',
        background: mode === 'institutional'
          ? 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(43, 96%, 56%, 0.02) 100%)'
          : 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(187, 100%, 42%, 0.02) 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-display text-xl tracking-[0.1em] lowercase text-foreground mb-3">
              quickserveit
            </div>
            <p className="text-sm text-foreground/50 mb-4 leading-relaxed">
              {mode === 'institutional' ? t('brandTaglineInstitutional') : t('brandTaglineCreator')}
            </p>
            <div className="flex items-center gap-2 text-xs text-foreground/40">
              <ShieldIcon className="w-3 h-3" />
              <span>All data handled with strict confidentiality</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Navigation</h4>
            <div className="flex flex-col gap-2">
              <Link to="/home" className="link-underline text-sm text-foreground/50 hover:text-foreground transition-colors">Home</Link>
              <Link to="/services" className="link-underline text-sm text-foreground/50 hover:text-foreground transition-colors">Services</Link>
              <Link to="/about" className="link-underline text-sm text-foreground/50 hover:text-foreground transition-colors">About</Link>
              <Link to="/pricing" className="link-underline text-sm text-foreground/50 hover:text-foreground transition-colors">Pricing</Link>
              <Link to="/contact" className="link-underline text-sm text-foreground/50 hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>

          {/* Availability Status */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Availability</h4>
            <div className="space-y-2">
              <AvailabilityIndicator />
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Get in Touch</h4>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium trans-premium ${mode === 'institutional'
                ? 'bg-institutional/10 text-institutional hover:bg-institutional/20'
                : 'bg-creator/10 text-creator hover:bg-creator/20'
                }`}
              style={{
                boxShadow: mode === 'institutional'
                  ? '0 0 20px hsl(43, 96%, 56%, 0.1)'
                  : '0 0 20px hsl(187, 100%, 42%, 0.1)'
              }}
            >
              <MessageCircleIcon className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <p className="text-xs text-foreground/40 mt-3">
              Preferred communication channel for all inquiries.
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <div className="text-xs text-foreground/20 font-mono tracking-wide">
              © 2025 quickserveit
            </div>
            <div className="text-[10px] text-foreground/10 font-mono mt-1">
              <span className={mode === 'institutional' ? 'text-institutional/40' : 'text-creator/40'}>
                CONFIDENTIAL
              </span>
              {' • '}
              INDIA
            </div>
          </div>

          {/* Switch Mode Button */}
          <div className="flex items-center">
            <SwitchModeButton variant="minimal" />
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-foreground/40">
            <Link to="/privacy" className="link-underline hover:text-foreground transition-colors duration-normal">
              Privacy
            </Link>
            <Link to="/terms" className="link-underline hover:text-foreground transition-colors duration-normal">
              Terms
            </Link>
            <Link to="/disclaimer" className="link-underline hover:text-foreground transition-colors duration-normal">
              Disclaimer
            </Link>
            <Link to="/faq" className="link-underline hover:text-foreground transition-colors duration-normal">
              FAQ
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-[10px] text-foreground/20 max-w-3xl mx-auto leading-relaxed">
            <strong className="text-foreground/30">Important:</strong> {mode === 'institutional' ? t('footerDisclaimerInstitutional') : t('footerDisclaimerCreator')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
