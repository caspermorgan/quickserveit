import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Shield,
  Zap,
  Users
} from "lucide-react";
import { SiWhatsapp, SiYoutube, SiInstagram } from "react-icons/si";

const footerLinks = {
  services: [
    { label: "Exam Documentation", href: "/institute-services#exam-documentation" },
    { label: "UP Scholarship", href: "/institute-services#scholarship" },
    { label: "UDISE+ Management", href: "/institute-services#udise" },
    { label: "Video Editing", href: "/creative-studio#video-editing" },
    { label: "Branding & Design", href: "/creative-studio#branding" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Terms & Conditions", href: "/legal/terms" },
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Disclaimer", href: "/legal/disclaimer" },
  ],
};

const trustBadges = [
  { icon: Shield, label: "Confidential" },
  { icon: Zap, label: "Urgent Ready" },
  { icon: Users, label: "IT Staff Friendly" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="lg:col-span-1">
              <Link href="/">
                <div className="flex items-center gap-2 cursor-pointer mb-4">
                  <div className="w-10 h-10 rounded-md flex items-center justify-center font-serif font-bold text-lg bg-primary text-primary-foreground">
                    Q
                  </div>
                  <span className="font-serif font-semibold text-xl tracking-tight text-foreground">
                    Quickserve IT
                  </span>
                </div>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                A private technology & cinematic production operation for serious institutions and elite creators. We remove risk and engineer digital dominance.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                {trustBadges.map((badge) => (
                  <div 
                    key={badge.label}
                    className="flex items-center gap-1.5 text-xs text-muted-foreground"
                  >
                    <badge.icon className="w-3.5 h-3.5 text-primary" />
                    <span>{badge.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <motion.a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-md bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid="link-footer-whatsapp"
                >
                  <SiWhatsapp className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-md bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid="link-footer-youtube"
                >
                  <SiYoutube className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-md bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid="link-footer-instagram"
                >
                  <SiInstagram className="w-4 h-4" />
                </motion.a>
              </div>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-foreground mb-4">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <span 
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                        data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <span 
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                        data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <h4 className="font-serif font-semibold text-foreground mb-3 mt-4">Legal</h4>
                  <ul className="space-y-3">
                    {footerLinks.legal.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href}>
                          <span 
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                            data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                          >
                            {link.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-foreground mb-4">Contact</h3>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="tel:+919876543210"
                    className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                    data-testid="link-footer-phone"
                  >
                    <Phone className="w-4 h-4 mt-0.5 text-primary" />
                    <span>+91 98765 43210</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:contact@quickserveit.online"
                    className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                    data-testid="link-footer-email"
                  >
                    <Mail className="w-4 h-4 mt-0.5 text-primary" />
                    <span>contact@quickserveit.online</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                    data-testid="link-footer-whatsapp-direct"
                  >
                    <MessageCircle className="w-4 h-4 mt-0.5 text-primary" />
                    <span>Secure WhatsApp Channel</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                    <span>Uttar Pradesh, India</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground text-center sm:text-left">
              &copy; {new Date().getFullYear()} Quickserve IT. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground text-center sm:text-right">
              Engineered for institutions. Crafted for creators.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
