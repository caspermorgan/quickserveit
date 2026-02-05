import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Grid3x3, Home, Briefcase, CreditCard, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
    mode: 'institutional' | 'creator' | 'portfolio';
    onReturn: () => void;
}

/**
 * Navbar - Desktop Floating Island Navigation
 * 
 * A sleek, floating glass pill at the top center of the screen.
 * Features:
 * - QS monogram logo on left
 * - Navigation links in center with glow dot hover
 * - Grid icon button on right for world switching
 * - Theme-aware colors (gold/cyan/purple)
 */
const Navbar = ({ mode, onReturn }: NavbarProps) => {
    const location = useLocation();
    const [showReturnMenu, setShowReturnMenu] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Slide down animation on mount
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // Navigation links based on mode
    const links = mode === 'institutional'
        ? [
            { label: 'Home', href: '/home', icon: Home },
            { label: 'Services', href: '/services', icon: Briefcase },
            { label: 'Pricing', href: '/pricing', icon: CreditCard },
            { label: 'About', href: '/about', icon: Info },
        ]
        : mode === 'creator'
            ? [
                { label: 'Home', href: '/home', icon: Home },
                { label: 'Studio', href: '/services', icon: Briefcase },
                { label: 'Pricing', href: '/pricing', icon: CreditCard },
                { label: 'About', href: '/about', icon: Info },
            ]
            : [
                { label: 'Home', href: '/home', icon: Home },
                { label: 'Projects', href: '/portfolio', icon: Briefcase },
                { label: 'Vision', href: '/about', icon: Info },
                { label: 'Contact', href: '/contact', icon: CreditCard },
            ];

    // Theme colors
    const themeColor = mode === 'institutional'
        ? 'var(--theme-institutional)'
        : mode === 'creator'
            ? 'var(--theme-creator)'
            : 'var(--theme-portfolio)';

    const themeGlow = mode === 'institutional'
        ? 'rgba(234, 179, 8, 0.3)'
        : mode === 'creator'
            ? 'rgba(34, 211, 238, 0.3)'
            : 'rgba(168, 85, 247, 0.3)';

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex"
        >
            <div
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-black/20 backdrop-blur-xl border border-white/10 shadow-2xl"
                style={{
                    boxShadow: `0 20px 60px rgba(0, 0, 0, 0.4), 0 0 40px ${themeGlow}`,
                }}
            >
                {/* Left: QS Monogram Logo */}
                <button
                    onClick={onReturn}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:scale-110 transition-transform duration-300"
                    aria-label="QuickServe IT"
                >
                    <span
                        className="text-sm font-display font-bold tracking-tight"
                        style={{ color: themeColor }}
                    >
                        QS
                    </span>
                </button>

                {/* Center: Navigation Links */}
                <div className="flex items-center gap-1 px-4">
                    {links.map((link) => {
                        const isActive = location.pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                to={link.href}
                                className="relative group px-4 py-2"
                            >
                                <span
                                    className={`text-sm font-medium tracking-wide transition-colors duration-300 ${isActive
                                            ? 'text-white'
                                            : 'text-white/50 group-hover:text-white'
                                        }`}
                                >
                                    {link.label}
                                </span>

                                {/* Glow Dot - appears on hover or active */}
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{
                                        scale: isActive ? 1 : 0,
                                        opacity: isActive ? 1 : 0,
                                    }}
                                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                                    style={{
                                        backgroundColor: themeColor,
                                        boxShadow: `0 0 8px ${themeGlow}, 0 0 16px ${themeGlow}`,
                                    }}
                                />

                                {/* Hover Glow Dot */}
                                <div
                                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        backgroundColor: themeColor,
                                        boxShadow: `0 0 8px ${themeGlow}, 0 0 16px ${themeGlow}`,
                                    }}
                                />
                            </Link>
                        );
                    })}
                </div>

                {/* Right: Grid Icon Button */}
                <div className="relative">
                    <button
                        onClick={() => setShowReturnMenu(!showReturnMenu)}
                        onBlur={() => setTimeout(() => setShowReturnMenu(false), 200)}
                        className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/10 transition-colors duration-300 group"
                        aria-label="Return to Hub"
                        title="Return to Hub"
                    >
                        <Grid3x3
                            className="w-4 h-4 text-white/50 group-hover:text-white transition-colors duration-300"
                        />
                    </button>

                    {/* Return Menu Dropdown */}
                    <AnimatePresence>
                        {showReturnMenu && (
                            <motion.div
                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-12 right-0 w-48 p-2 rounded-xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl"
                            >
                                <button
                                    onClick={onReturn}
                                    className="w-full px-4 py-2 text-sm text-left text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
                                >
                                    ← Return to Landing
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
