import { useRef, useState, ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    href?: string;
    mode?: 'institutional' | 'creator';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

/**
 * MagneticButton - Premium physics-based button component
 * 
 * Features:
 * - Magnetic cursor attraction with spring physics
 * - Liquid sheen animation (light reflection sweep)
 * - Spring compression on click/tap
 * - Sound design infrastructure (commented out for future)
 */
const MagneticButton = ({
    children,
    className = '',
    onClick,
    href,
    mode = 'institutional',
    disabled = false,
    type = 'button',
}: MagneticButtonProps) => {
    const buttonRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Motion values for magnetic effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring physics configuration - smooth and natural
    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    // Handle mouse movement for magnetic effect
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!buttonRef.current || disabled) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate distance from center
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        // Apply magnetic pull with limits (max 30px displacement)
        // Multiply by 0.3 for subtle effect
        x.set(Math.max(-30, Math.min(30, distanceX * 0.3)));
        y.set(Math.max(-30, Math.min(30, distanceY * 0.3)));
    };

    // Reset position when mouse leaves
    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    // Handle click with optional sound (prepared for future)
    const handleClick = () => {
        if (disabled) return;

        // TODO: Future sound implementation
        // playSound('pop', { volume: 0.1 });

        if (onClick) {
            onClick();
        }
    };

    return (
        <motion.div
            ref={buttonRef}
            className={`magnetic-button-wrapper inline-block ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            style={{
                x: springX,
                y: springY,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileTap={disabled ? {} : { scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
            <div
                className={`liquid-sheen relative overflow-hidden ${className}`}
                onClick={handleClick}
                role={href ? 'link' : 'button'}
                tabIndex={disabled ? -1 : 0}
                onKeyDown={(e) => {
                    if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
                        e.preventDefault();
                        handleClick();
                    }
                }}
            >
                {/* Liquid Sheen Effect - Diagonal light reflection */}
                <div
                    className={`absolute inset-0 pointer-events-none sheen-overlay ${isHovered ? 'sheen-active' : ''
                        }`}
                    style={{
                        background: `linear-gradient(
              120deg,
              transparent 0%,
              ${mode === 'institutional'
                                ? 'rgba(234, 179, 8, 0.15)'
                                : 'rgba(34, 211, 238, 0.15)'
                            } 50%,
              transparent 100%
            )`,
                    }}
                />

                {/* Button Content */}
                <div className="relative z-10">
                    {children}
                </div>
            </div>
        </motion.div>
    );
};

export default MagneticButton;
