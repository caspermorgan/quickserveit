import { useEffect, useState, useRef } from 'react';

interface CursorLightProps {
  mode: 'institutional' | 'creator';
}

const CursorLight = ({ mode }: CursorLightProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Use refs for smooth interpolation without re-renders
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const elementRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number>();

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) return;

    // Magnetic lerp animation loop
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      // Lerp factor: 0.12 for smooth, premium magnetic feel
      // Lower = smoother but slower, Higher = faster but less smooth
      const lerpFactor = 0.12;

      currentPos.current.x = lerp(currentPos.current.x, targetPos.current.x, lerpFactor);
      currentPos.current.y = lerp(currentPos.current.y, targetPos.current.y, lerpFactor);

      // Update DOM directly for better performance (avoid React re-renders)
      if (elementRef.current) {
        elementRef.current.style.transform = `translate3d(${currentPos.current.x - 150}px, ${currentPos.current.y - 150}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Start animation loop
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      ref={elementRef}
      className={`pointer-events-none fixed top-0 left-0 z-50 rounded-full blur-3xl transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      style={{
        width: 300,
        height: 300,
        background: mode === 'institutional'
          ? 'radial-gradient(circle, hsl(40 50% 55% / 0.08) 0%, transparent 70%)'
          : 'radial-gradient(circle, hsl(180 100% 65% / 0.08) 0%, transparent 70%)',
        willChange: 'transform',
      }}
    />
  );
};

export default CursorLight;
