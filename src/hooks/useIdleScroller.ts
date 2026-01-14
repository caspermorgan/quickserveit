import { useState, useEffect } from 'react';

/**
 * Custom hook for managing immersive mode on mobile devices.
 * Tracks scroll activity and automatically hides UI after 1.5s of inactivity.
 * UI reappears on any touch, click, or scroll event.
 * 
 * @returns {boolean} isImmersive - Whether the UI should be in immersive (hidden) mode
 */
export const useIdleScroller = (): boolean => {
    const [isImmersive, setIsImmersive] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if we're on mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        // Only activate on mobile
        if (!isMobile) {
            return () => {
                window.removeEventListener('resize', checkMobile);
            };
        }

        let scrollTimeout: NodeJS.Timeout;
        let isScrolling = false;

        // Handle scroll events
        const handleScroll = () => {
            // Show UI immediately when scrolling starts
            setIsImmersive(false);
            isScrolling = true;

            // Clear existing timeout
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }

            // Set timeout to hide UI after 1.5s of scroll inactivity
            scrollTimeout = setTimeout(() => {
                if (window.scrollY > 100) {
                    setIsImmersive(true);
                }
                isScrolling = false;
            }, 1500);
        };

        // Wake triggers - bring UI back on any interaction
        const handleWake = () => {
            setIsImmersive(false);

            // Clear auto-hide timeout when user interacts
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
        };

        // Attach event listeners
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('touchstart', handleWake, { passive: true });
        window.addEventListener('click', handleWake);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('touchstart', handleWake);
            window.removeEventListener('click', handleWake);
            window.removeEventListener('resize', checkMobile);

            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
        };
    }, [isMobile]);

    // Only return true if we're on mobile
    return isMobile && isImmersive;
};
