import { useRef, useState, useCallback } from 'react';

interface Position {
    x: number;
    y: number;
}

/**
 * Elite magnetic hover effect hook
 * Creates cursor-following attraction on interactive elements
 * 
 * @param strength - Magnetic pull strength (0-1, default 0.25)
 * @param maxDistance - Maximum distance for effect (default 100px)
 * @returns Hook utilities for magnetic interaction
 */
export const useMagneticHover = (strength: number = 0.25, maxDistance: number = 100) => {
    const ref = useRef<HTMLElement>(null);
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        // Only apply effect within maxDistance
        if (distance < maxDistance) {
            const magneticX = deltaX * strength;
            const magneticY = deltaY * strength;
            setPosition({ x: magneticX, y: magneticY });
        }
    }, [strength, maxDistance]);

    const handleMouseLeave = useCallback(() => {
        setPosition({ x: 0, y: 0 });
    }, []);

    return {
        ref,
        position,
        style: {
            transform: `translate(${position.x}px, ${position.y}px)`,
            transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        },
        handleMouseMove,
        handleMouseLeave
    };
};
