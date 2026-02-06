import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircleIcon, ShieldIcon } from '@/components/IconSystem';
import AvailabilityIndicator from '@/components/AvailabilityIndicator';
import { useTranslation } from '@/hooks/useTranslation';
import { useMode } from '@/context/ModeContext';
import SwitchModeButton from '@/components/SwitchModeButton';

const Footer = () => {
  const { t } = useTranslation();
  const { mode } = useMode();
  const whatsappNumber = '916388224877';
  const whatsappMessage = encodeURIComponent('Hello quickserveit, I would like to inquire about your services.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const isInstitutional = mode === 'institutional';

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: isInstitutional ? '#0a0500' : '#00050a',
      }}
    >
      {/* Top Border with Mode-Specific Styling */}
      <div
        className={`absolute top-0 left-0 right-0 ${isInstitutional ? 'border-t-4 border-double border-amber-900' : 'border-t border-cyan-500'
          }`}
        style={{
          boxShadow: isInstitutional
            ? '0 0 20px rgba(234, 179, 8, 0.2)'
            : '0 0 20px rgba(6, 182, 212, 0.3)',
        }}
      />

      {/* System Ready Badge for Creator Mode */}
      {!isInstitutional && (
        <div className="absolute top-0 right-8 transform -translate-y-1/2">
          <div
            className="px-4 py-1 bg-[#00050a] border border-cyan-500 rounded-full text-xs font-mono text-cyan-400 uppercase tracking-wider"
            style={{
              boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)',
            }}
          >
            {t('footerSystemReady')}
          </div>
        </div>
      )}

      {/* Watermark - Institute Mode (Serif "EST. 2025") */}
      {isInstitutional && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
          <div
            className="text-[20rem] font-serif font-bold text-amber-900 select-none"
            style={{
              textShadow: '0 0 40px rgba(234, 179, 8, 0.3)',
            }}
          >
            EST. 2025
          </div>
        </div>
      )}

      {/* Grid Pattern Overlay - Creator Mode */}
      {!isInstitutional && (
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="rgba(6, 182, 212, 0.5)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      )}

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
        {/* Top Section - 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Left Block: Identity & Coordinates */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-mono text-foreground/40 uppercase tracking-wider mb-3">
                {t('footerIdentityTitle')}
              </h3>
              <div className="font-display text-2xl tracking-[0.1em] lowercase text-foreground mb-2">
                {t('footerBrandName')}
              </div>
              <p className="text-sm text-foreground/60 mb-4">
                {isInstitutional ? t('brandTaglineInstitutional') : t('brandTaglineCreator')}
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <div
                  className={`w-2 h-2 rounded-full ${isInstitutional ? 'bg-amber-500' : 'bg-cyan-500'
                    }`}
                  style={{
                    boxShadow: isInstitutional
                      ? '0 0 10px rgba(234, 179, 8, 0.6)'
                      : '0 0 10px rgba(6, 182, 212, 0.6)',
                  }}
                />
                <span className="font-medium">{t('footerLocation')}</span>
              </div>
              <div className="font-mono text-xs text-foreground/40 pl-4">
                {t('footerCoordinates')}
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-foreground/30 pt-4">
              <ShieldIcon className="w-3 h-3" />
              <span>{t('footerDataSecurity')}</span>
            </div>
          </div>

          {/* Center Block: Navigation Map */}
          <div>
            <h3 className="text-xs font-mono text-foreground/40 uppercase tracking-wider mb-4">
              {t('footerNavigationTitle')}
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              <Link
                to="/home"
                className="link-underline text-sm text-foreground/60 hover:text-foreground trans-premium"
              >
                {t('footerNavHome')}
              </Link>
              <Link
                to="/services"
                className="link-underline text-sm text-foreground/60 hover:text-foreground trans-premium"
              >
                {t('footerNavServices')}
              </Link>
              <Link
                to="/about"
                className="link-underline text-sm text-foreground/60 hover:text-foreground trans-premium"
              >
                {t('footerNavAbout')}
              </Link>
              <Link
                to="/pricing"
                className="link-underline text-sm text-foreground/60 hover:text-foreground trans-premium"
              >
                {t('footerNavPricing')}
              </Link>
              <Link
                to="/founder"
                className="link-underline text-sm text-foreground/60 hover:text-foreground trans-premium"
              >
                {t('footerNavFounder')}
              </Link>
              <Link
                to="/contact"
                className="link-underline text-sm text-foreground/60 hover:text-foreground trans-premium"
              >
                {t('footerNavContact')}
              </Link>
            </div>

            {/* Legal Links */}
            <div className="mt-8">
              <h3 className="text-xs font-mono text-foreground/40 uppercase tracking-wider mb-4">
                {t('footerLegalTitle')}
              </h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                <Link
                  to="/privacy"
                  className="link-underline text-sm text-foreground/60 hover:text-foreground trans-premium"
                >
                  {t('footerLegalPrivacy')}
                </Link>
                <Link
                  to="/terms"
                  className="link-underline text-sm text-foreground/60 hover:text-foreground trans-premium"
                >
                  {t('footerLegalTerms')}
                </Link>
                <Link
                  to="/disclaimer"
                  className="link-underline text-sm text-foreground/60 hover:text-foreground trans-premium"
                >
                  {t('footerLegalDisclaimer')}
                </Link>
                <Link
                  to="/faq"
                  className="link-underline text-sm text-foreground/60 hover:text-foreground trans-premium"
                >
                  {t('footerLegalFAQ')}
                </Link>
              </div>
            </div>
          </div>

          {/* Right Block: Communication Hub */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-mono text-foreground/40 uppercase tracking-wider mb-4">
                {t('footerCommunicationTitle')}
              </h3>
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium trans-premium ${isInstitutional
                  ? 'bg-institutional/10 text-institutional hover:bg-institutional/20'
                  : 'bg-creator/10 text-creator hover:bg-creator/20'
                  }`}
                style={{
                  boxShadow: isInstitutional
                    ? '0 0 20px hsl(43, 96%, 56%, 0.1)'
                    : '0 0 20px hsl(187, 100%, 42%, 0.1)',
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircleIcon className="w-4 h-4" />
                {t('footerWhatsAppCTA')}
              </motion.a>
              <p className="text-xs text-foreground/40 mt-3">{t('footerWhatsAppDesc')}</p>
            </div>

            <div>
              <h3 className="text-xs font-mono text-foreground/40 uppercase tracking-wider mb-4">
                {t('footerAvailability')}
              </h3>
              <AvailabilityIndicator />
            </div>

            {/* Mode Badge */}
            <div className="pt-4">
              <div
                className={`inline-block px-3 py-1 rounded text-xs font-mono uppercase tracking-wider ${isInstitutional
                  ? 'bg-amber-900/20 text-amber-500 border border-amber-900/40'
                  : 'bg-cyan-900/20 text-cyan-400 border border-cyan-900/40'
                  }`}
              >
                {isInstitutional ? t('footerEstablished') : t('footerSystemReady')}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-12"
          style={{
            background: isInstitutional
              ? 'linear-gradient(90deg, transparent, rgba(234, 179, 8, 0.2), transparent)'
              : 'linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.2), transparent)',
          }}
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <div className="text-xs text-foreground/30 font-mono tracking-wide">
              {t('footerCopyright')}
            </div>
            <div className="text-[10px] text-foreground/20 font-mono mt-1">
              <span className={isInstitutional ? 'text-institutional/40' : 'text-creator/40'}>
                {t('footerConfidential')}
              </span>
              {' • '}
              {t('india').toUpperCase()}
            </div>
          </div>

          {/* Switch Mode Button */}
          <div className="flex items-center">
            <SwitchModeButton variant="minimal" />
          </div>

          {/* All Rights Reserved */}
          <div className="text-xs text-foreground/30 font-mono">
            {t('footerAllRightsReserved')}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-border/30 text-center">
          <p className="text-[10px] text-foreground/20 max-w-4xl mx-auto leading-relaxed">
            <strong className="text-foreground/30">Important:</strong>{' '}
            {isInstitutional ? t('footerDisclaimerInstitutional') : t('footerDisclaimerCreator')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
