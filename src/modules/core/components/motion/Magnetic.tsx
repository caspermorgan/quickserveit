import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import { useMagneticHover } from '@/hooks/useMagneticHover';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface MagneticProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
    children: ReactNode;
    strength?: number;
    maxDistance?: number;
    className?: string;
}

/**
 * Elite magnetic interaction component
 * Creates cursor-following attraction effect
 * 
 * Usage:
 * <Magnetic strength={0.3}>
 *   <button>Hover me</button>
 * </Magnetic>
 */
export const Magnetic = ({
    children,
    strength = 0.25,
    maxDistance = 100,
    className,
    ...props
}: MagneticProps) => {
    const { ref, style, handleMouseMove, handleMouseLeave } = useMagneticHover(strength, maxDistance);
    const prefersReducedMotion = useReducedMotion();

    // Disable magnetic effect if user prefers reduced motion
    if (prefersReducedMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            ref={ref as any}
            style={style}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};
