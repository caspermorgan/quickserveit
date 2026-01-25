import { ReactNode, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface FloatingCardProps {
    children: ReactNode;
    className?: string;
    tiltIntensity?: number; // 0-1, default 0.1 (10 degrees max)
    glowIntensity?: number; // 0-1, default 0.3
    disabled?: boolean; // Disable on touch devices
}

/**
 * FloatingCard - 3D floating card with mouse-tracking tilt effect
 * 
 * Features:
 * - Smooth 3D rotation following mouse position
 * - Spring physics for natural motion
 * - Glow effect that intensifies on hover
 * - GPU-accelerated transforms
 * - Auto-disabled on touch devices
 */
export const FloatingCard = ({
    children,
    className = '',
    tiltIntensity = 0.1,
    glowIntensity = 0.3,
    disabled = false
}: FloatingCardProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Motion values for rotation
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    // Spring configuration for smooth motion
    const springConfig = { stiffness: 300, damping: 30 };
    const springRotateX = useSpring(rotateX, springConfig);
    const springRotateY = useSpring(rotateY, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (disabled || !ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate mouse position relative to card center
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        // Convert to rotation angles (max 10 degrees by default)
        const maxRotation = 10 * tiltIntensity;
        const rotX = -(mouseY / (rect.height / 2)) * maxRotation;
        const rotY = (mouseX / (rect.width / 2)) * maxRotation;

        rotateX.set(rotX);
        rotateY.set(rotY);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        rotateX.set(0);
        rotateY.set(0);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    // Disable on touch devices
    if (disabled || (typeof window !== 'undefined' && 'ontouchstart' in window)) {
        return (
            <div ref={ref} className={className}>
                {children}
            </div>
        );
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            style={{
                rotateX: springRotateX,
                rotateY: springRotateY,
                transformStyle: 'preserve-3d',
                transformPerspective: 1000,
            }}
            animate={{
                scale: isHovered ? 1.02 : 1,
            }}
            transition={{
                scale: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
            }}
            className={`relative ${className}`}
        >
            {/* Glow effect */}
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: glowIntensity }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 rounded-inherit pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle at center, hsl(var(--mode-h), var(--mode-s), var(--mode-l), 0.2), transparent 70%)',
                        filter: 'blur(20px)',
                        zIndex: -1,
                    }}
                />
            )}

            {/* Content */}
            <div style={{ transform: 'translateZ(20px)' }}>
                {children}
            </div>
        </motion.div>
    );
};

export default FloatingCard;
