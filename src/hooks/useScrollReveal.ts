import { useEffect, useRef, useState } from 'react';

interface ScrollRevealOptions {
    threshold?: number;
    margin?: string;
    once?: boolean;
}

/**
 * Elite scroll-triggered reveal hook
 * Triggers animations when element enters viewport
 * 
 * @param options - Configuration for intersection observer
 * @returns [ref, isVisible] - Ref to attach and visibility state
 */
export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
    const ref = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (options.once !== false) {
                        // Disconnect by default for performance
                        observer.disconnect();
                    }
                } else if (options.once === false) {
                    setIsVisible(false);
                }
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.margin || '-50px'
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options.threshold, options.margin, options.once]);

    return [ref, isVisible] as const;
};
