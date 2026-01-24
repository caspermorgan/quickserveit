import { useEffect, useState } from 'react';

/**
 * Elite reduced motion detection hook
 * Respects user's accessibility preferences
 * 
 * @returns boolean - true if user prefers reduced motion
 */
export const useReducedMotion = (): boolean => {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(mediaQuery.matches);

        const handleChange = (event: MediaQueryListEvent) => {
            setPrefersReducedMotion(event.matches);
        };

        // Modern browsers
        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', handleChange);
            return () => mediaQuery.removeEventListener('change', handleChange);
        }
        // Legacy browsers
        else {
            mediaQuery.addListener(handleChange);
            return () => mediaQuery.removeListener(handleChange);
        }
    }, []);

    return prefersReducedMotion;
};

/**
 * Get animation duration based on reduced motion preference
 * 
 * @param normalDuration - Duration in seconds for normal motion
 * @returns Adjusted duration (instant if reduced motion)
 */
export const useAnimationDuration = (normalDuration: number = 0.3): number => {
    const prefersReducedMotion = useReducedMotion();
    return prefersReducedMotion ? 0.01 : normalDuration;
};
