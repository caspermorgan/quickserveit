import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { 
    href: "/institute-services", 
    label: "Institute Services",
    submenu: [
      { href: "/institute-services#exam-documentation", label: "Exam Documentation" },
      { href: "/institute-services#scholarship", label: "UP Scholarship Processing" },
      { href: "/institute-services#udise", label: "UDISE+ Management" },
      { href: "/institute-services#government-projects", label: "Government Projects" },
    ]
  },
  { 
    href: "/creative-studio", 
    label: "Creative Studio",
    submenu: [
      { href: "/creative-studio#video-editing", label: "Video Editing" },
      { href: "/creative-studio#branding", label: "Branding & Design" },
      { href: "/creative-studio#motion-graphics", label: "Motion Graphics" },
    ]
  },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
  }, [location]);

  const isCinematicMode = location === "/creative-studio" || location === "/portfolio";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/90 backdrop-blur-xl border-b border-border" 
          : "bg-transparent"
      )}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between gap-4 h-16 md:h-20">
          <Link href="/" data-testid="link-home-logo">
            <motion.div 
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className={cn(
                "w-10 h-10 rounded-md flex items-center justify-center font-serif font-bold text-lg",
                isCinematicMode 
                  ? "bg-[hsl(var(--ai-blue-rim))] text-white" 
                  : "bg-primary text-primary-foreground"
              )}>
                Q
              </div>
              <span className="font-serif font-semibold text-xl tracking-tight text-foreground">
                Quickserve IT
              </span>
            </motion.div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div 
                key={link.href}
                className="relative group"
                onMouseEnter={() => link.submenu && setActiveSubmenu(link.href)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link href={link.href}>
                  <span
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center gap-1 cursor-pointer",
                      location === link.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                    {link.submenu && <ChevronDown className="w-3 h-3" />}
                  </span>
                </Link>
                
                {link.submenu && (
                  <AnimatePresence>
                    {activeSubmenu === link.href && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-card border border-card-border rounded-md shadow-xl py-2"
                      >
                        {link.submenu.map((sublink) => (
                          <Link key={sublink.href} href={sublink.href}>
                            <span
                              className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 cursor-pointer transition-colors"
                              data-testid={`link-subnav-${sublink.label.toLowerCase().replace(/\s+/g, "-")}`}
                            >
                              {sublink.label}
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-gold text-foreground"
              data-testid="button-whatsapp"
              onClick={() => window.open("https://wa.me/919876543210", "_blank")}
            >
              WhatsApp
            </Button>
            <Link href="/contact">
              <Button
                size="sm"
                className={cn(
                  isCinematicMode 
                    ? "bg-[hsl(var(--ai-blue-rim))] hover:bg-[hsl(var(--ai-blue-rim))]/90 text-white" 
                    : ""
                )}
                data-testid="button-get-started"
              >
                Get Started
              </Button>
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </nav>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link href={link.href}>
                    <span
                      className={cn(
                        "block px-4 py-3 rounded-md text-base font-medium transition-colors cursor-pointer",
                        location === link.href
                          ? "bg-muted text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      )}
                      data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </div>
              ))}
              <div className="pt-4 flex flex-col gap-2">
                <Button
                  variant="outline"
                  className="w-full border-gold"
                  data-testid="button-mobile-whatsapp"
                  onClick={() => window.open("https://wa.me/919876543210", "_blank")}
                >
                  WhatsApp
                </Button>
                <Link href="/contact">
                  <Button className="w-full" data-testid="button-mobile-get-started">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
