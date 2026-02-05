import { Link, useLocation } from 'react-router-dom';
import { Home, Layers, CreditCard, User, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface MobileNavProps {
    mode: 'institutional' | 'creator' | 'portfolio';
}

/**
 * MobileNav - Mobile Bottom Dock Navigation
 * 
 * A futuristic bottom bar with icon-only navigation.
 * Features:
 * - Heavy frosted glass effect
 * - Icon-only navigation (Home, Layers, CreditCard, User, Mail)
 * - "Lamp effect" with light cone on active icon
 * - Theme-aware gradient glow at bottom edge
 */
const MobileNav = ({ mode }: MobileNavProps) => {
    const location = useLocation();

    // Navigation items
    const navItems = [
        { icon: Home, href: '/home', label: 'Home' },
        { icon: Layers, href: '/services', label: 'Services' },
        { icon: CreditCard, href: '/pricing', label: 'Pricing' },
        { icon: User, href: '/about', label: 'About' },
        { icon: Mail, href: '/contact', label: 'Contact' },
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

    const themeGradient = mode === 'institutional'
        ? 'linear-gradient(to top, rgba(234, 179, 8, 0.2), transparent)'
        : mode === 'creator'
            ? 'linear-gradient(to top, rgba(34, 211, 238, 0.2), transparent)'
            : 'linear-gradient(to top, rgba(168, 85, 247, 0.2), transparent)';

    return (
        <nav className="fixed bottom-6 left-4 right-4 z-50 flex md:hidden">
            <div
                className="relative w-full flex items-center justify-around px-4 py-3 rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/10 shadow-2xl"
                style={{
                    boxShadow: `0 20px 60px rgba(0, 0, 0, 0.6), 0 0 40px ${themeGlow}`,
                }}
            >
                {/* Theme-colored gradient glow at bottom */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-16 rounded-2xl pointer-events-none"
                    style={{
                        background: themeGradient,
                        opacity: 0.5,
                    }}
                />

                {/* Navigation Icons */}
                {navItems.map((item) => {
                    const isActive = location.pathname === item.href;
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            to={item.href}
                            className="relative flex flex-col items-center justify-center w-14 h-14 group"
                            aria-label={item.label}
                        >
                            {/* Lamp Effect - Light Cone from bottom */}
                            {isActive && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="absolute bottom-0 w-12 h-12 rounded-full blur-xl pointer-events-none"
                                    style={{
                                        background: `radial-gradient(ellipse at bottom, ${themeGlow} 0%, transparent 70%)`,
                                    }}
                                />
                            )}

                            {/* Icon */}
                            <motion.div
                                animate={{
                                    scale: isActive ? 1.1 : 1,
                                    y: isActive ? -2 : 0,
                                }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="relative z-10"
                            >
                                <Icon
                                    className={`w-6 h-6 transition-colors duration-300 ${isActive
                                            ? 'text-white'
                                            : 'text-white/50'
                                        }`}
                                    style={{
                                        filter: isActive ? `drop-shadow(0 0 8px ${themeGlow})` : 'none',
                                    }}
                                />
                            </motion.div>

                            {/* Active Indicator Dot */}
                            {isActive && (
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="absolute -bottom-1 w-1 h-1 rounded-full"
                                    style={{
                                        backgroundColor: themeColor,
                                        boxShadow: `0 0 8px ${themeGlow}`,
                                    }}
                                />
                            )}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default MobileNav;
