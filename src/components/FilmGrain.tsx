import { useEffect, useState } from 'react';

const FilmGrain = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(
        window.matchMedia('(max-width: 768px)').matches ||
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0
      );
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Disable on mobile to save battery
  if (isMobile) return null;

  return <div className="film-grain" aria-hidden="true" />;
};

export default FilmGrain;
