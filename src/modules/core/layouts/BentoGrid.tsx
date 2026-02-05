import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface BentoGridProps {
    children: ReactNode;
    className?: string;
    variant?: 'default' | 'asymmetric' | 'featured';
}

interface BentoItemProps {
    children: ReactNode;
    className?: string;
    span?: 1 | 2 | 3;
    rowSpan?: 1 | 2;
    delay?: number;
}

/**
 * BentoGrid - Asymmetric grid layout system for premium, magazine-style designs
 * 
 * Features:
 * - Responsive grid with configurable spans
 * - Auto-layout for mobile (single column)
 * - Smooth reveal animations
 * - GPU-accelerated performance
 */
export const BentoGrid = ({ children, className = '', variant = 'default' }: BentoGridProps) => {
    const gridClasses = {
        default: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6',
        asymmetric: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6',
        featured: 'grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6',
    };

    return (
        <div className={`${gridClasses[variant]} ${className}`}>
            {children}
        </div>
    );
};

/**
 * BentoItem - Individual grid item with configurable spanning
 */
export const BentoItem = ({
    children,
    className = '',
    span = 1,
    rowSpan = 1,
    delay = 0
}: BentoItemProps) => {
    const spanClasses = {
        1: 'col-span-1',
        2: 'md:col-span-2',
        3: 'lg:col-span-3',
    };

    const rowSpanClasses = {
        1: 'row-span-1',
        2: 'md:row-span-2',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.16, 1, 0.3, 1], // Premium easing curve
            }}
            className={`${spanClasses[span]} ${rowSpanClasses[rowSpan]} ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default BentoGrid;
