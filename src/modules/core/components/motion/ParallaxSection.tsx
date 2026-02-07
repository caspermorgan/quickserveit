import { ReactNode, useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ParallaxSectionProps {
    children: ReactNode;
    speed?: number; // 0.1 (slow) to 1 (fast)
    direction?: 'up' | 'down';
    className?: string;
    disabled?: boolean; // Disable on mobile for performance
}

/**
 * ParallaxSection - Smooth scroll-linked parallax effect
 * 
 * Features:
 * - Configurable speed and direction
 * - GPU-accelerated with transform
 * - Spring physics for smooth motion
 * - Intersection observer optimization
 * - Auto-disabled on mobile devices
 */
export const ParallaxSection = ({
    children,
    speed = 0.5,
    direction = 'up',
    className = '',
    disabled = false
}: ParallaxSectionProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    // Scroll progress for this section
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    });

    // Transform scroll progress to parallax movement
    const multiplier = direction === 'up' ? -1 : 1;
    const range = 100 * speed * multiplier;

    const y = useTransform(scrollYProgress, [0, 1], [range, -range]);

    // Add spring physics for smoother motion
    const smoothY = useSpring(y, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Intersection observer for performance
    useEffect(() => {
        if (!ref.current || disabled) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { rootMargin: '100px' }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [disabled]);

    // Disable parallax on mobile or when explicitly disabled
    if (disabled || typeof window !== 'undefined' && window.innerWidth < 768) {
        return (
            <div ref={ref} className={className}>
                {children}
            </div>
        );
    }

    return (
        <motion.div
            ref={ref}
            style={{ y: isInView ? smoothY : 0 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ParallaxSection;
