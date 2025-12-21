import { useEffect, useState } from 'react';

interface CursorLightProps {
  mode: 'institutional' | 'creator';
}

const CursorLight = ({ mode }: CursorLightProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      className={`pointer-events-none fixed z-50 rounded-full blur-3xl transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        left: position.x - 150,
        top: position.y - 150,
        width: 300,
        height: 300,
        background: mode === 'institutional' 
          ? 'radial-gradient(circle, hsl(40 50% 55% / 0.08) 0%, transparent 70%)'
          : 'radial-gradient(circle, hsl(180 100% 65% / 0.08) 0%, transparent 70%)',
      }}
    />
  );
};

export default CursorLight;
