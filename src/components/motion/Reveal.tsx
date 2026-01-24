import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface RevealProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
    children: ReactNode;
    delay?: number;
    duration?: number;
    y?: number;
    blur?: boolean;
    stagger?: boolean;
    staggerDelay?: number;
    className?: string;
}

/**
 * Elite scroll-triggered reveal component
 * Animates children when they enter viewport
 * 
 * Usage:
 * <Reveal delay={0.2}>
 *   <YourContent />
 * </Reveal>
 */
export const Reveal = ({
    children,
    delay = 0,
    duration = 0.6,
    y = 20,
    blur = false,
    className,
    ...props
}: RevealProps) => {
    const [ref, isVisible] = useScrollReveal({ threshold: 0.1, once: true });
    const prefersReducedMotion = useReducedMotion();

    const variants = {
        hidden: {
            opacity: 0,
            y: prefersReducedMotion ? 0 : y,
            filter: blur && !prefersReducedMotion ? 'blur(10px)' : 'blur(0px)'
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)'
        }
    };

    return (
        <motion.div
            ref={ref as any}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={variants}
            transition={{
                duration: prefersReducedMotion ? 0.01 : duration,
                delay: prefersReducedMotion ? 0 : delay,
                ease: [0.16, 1, 0.3, 1]
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

/**
 * Staggered reveal for lists
 * 
 * Usage:
 * <StaggeredReveal staggerDelay={0.1}>
 *   {items.map((item, i) => (
 *     <StaggeredReveal.Item key={i} index={i}>
 *       <Card />
 *     </StaggeredReveal.Item>
 *   ))}
 * </StaggeredReveal>
 */
export const StaggeredReveal = ({ children, className }: { children: ReactNode; className?: string }) => {
    return <div className={className}>{children}</div>;
};

StaggeredReveal.Item = ({
    children,
    index = 0,
    staggerDelay = 0.1,
    className
}: {
    children: ReactNode;
    index?: number;
    staggerDelay?: number;
    className?: string;
}) => {
    return (
        <Reveal delay={index * staggerDelay} className={className}>
            {children}
        </Reveal>
    );
};
