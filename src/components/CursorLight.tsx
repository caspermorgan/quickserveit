import { useEffect, useRef } from 'react';

interface CursorLightProps {
  mode: 'institutional' | 'creator';
}

const CursorLight = ({ mode }: CursorLightProps) => {
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!lightRef.current) return;
      
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      
      lightRef.current.style.left = `${x}%`;
      lightRef.current.style.top = `${y}%`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const gradientColor = mode === 'institutional' 
    ? 'rgba(234, 179, 8, 0.04)'
    : 'rgba(34, 211, 238, 0.04)';

  return (
    <div
      ref={lightRef}
      className="cursor-light hidden md:block"
      style={{
        background: `radial-gradient(circle, ${gradientColor} 0%, transparent 70%)`
      }}
    />
  );
};

export default CursorLight;
