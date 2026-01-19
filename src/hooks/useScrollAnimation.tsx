import { useEffect } from 'react';

interface ScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    animationClass?: string;
    staggerDelay?: number;
}

/**
 * Centralized scroll animation hook using IntersectionObserver
 * Replaces duplicated observer code across 9 pages
 * 
 * @param threshold - Percentage of element visibility to trigger (default: 0.1)
 * @param rootMargin - Margin around root for early/late triggering (default: '0px 0px -100px 0px')
 * @param animationClass - CSS class to add when element enters viewport (default: 'animate-fade-in-up')
 * @param staggerDelay - Delay in ms between each element animation (default: 100)
 */
export const useScrollAnimation = ({
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    animationClass = 'animate-fade-in-up',
    staggerDelay = 100
}: ScrollAnimationOptions = {}) => {
    useEffect(() => {
        const observerOptions = {
            threshold,
            rootMargin
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add stagger delay for natural visual hierarchy
                    setTimeout(() => {
                        entry.target.classList.add(animationClass);
                    }, index * staggerDelay);

                    // Stop observing once animated
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const elements = document.querySelectorAll('.observe-on-scroll');

        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, [threshold, rootMargin, animationClass, staggerDelay]);
};
