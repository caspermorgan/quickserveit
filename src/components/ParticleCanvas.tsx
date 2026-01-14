import { useEffect, useRef, useCallback } from 'react';

interface ParticleCanvasProps {
  mode: 'institutional' | 'creator';
  isDusting?: boolean;
}

interface Particle {
  x: number;
  y: number;
  directionX: number;
  directionY: number;
  size: number;
  density: number;
}

const ParticleCanvas = ({ mode, isDusting = false }: ParticleCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, radius: 150 });
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const isDustingRef = useRef(isDusting);

  // Mode colors: gold for institutional, cyan for creator
  const modeColor = mode === 'institutional' ? '234, 179, 8' : '34, 211, 238';

  const createParticle = useCallback((canvas: HTMLCanvasElement): Particle => {
    const size = Math.random() * 1.2 + 0.4;
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    // Mobile: 50% slower movement for smoother performance
    const isMobile = window.innerWidth < 768;
    const speedMultiplier = isMobile ? 0.5 : 1;
    const directionX = ((Math.random() * 0.4) - 0.2) * speedMultiplier;
    const directionY = ((Math.random() * 0.4) - 0.2) * speedMultiplier;
    const density = Math.random() * 30 + 1;
    return { x, y, directionX, directionY, size, density };
  }, []);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    particlesRef.current = [];
    const isMobile = window.innerWidth < 768;
    // Mobile: 60000 density = ~70% fewer particles for better GPU performance
    const densityFactor = isMobile ? 60000 : 10000;
    const numberOfParticles = (canvas.height * canvas.width) / densityFactor;

    for (let i = 0; i < numberOfParticles; i++) {
      particlesRef.current.push(createParticle(canvas));
    }
  }, [createParticle]);

  useEffect(() => {
    isDustingRef.current = isDusting;

    // Only spawn dust particles when exiting (isDusting becomes true)
    if (isDusting) {
      const canvas = canvasRef.current;
      if (!canvas) return;

      // Add MANY more dust particles for a smooth, premium disintegration effect
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

      // Mobile: Reduced to 100 particles for GPU performance
      const dustCount = isMobile ? 100 : (isTablet ? 450 : 600);

      for (let i = 0; i < dustCount; i++) {
        // Smaller, more varied particle sizes for a finer dust effect
        const size = Math.random() * 1.2 + 0.3;

        // More spread across the screen with concentrated center
        const spreadX = Math.random() < 0.7
          ? canvas.width * 0.15 + Math.random() * (canvas.width * 0.7)  // 70% center area
          : Math.random() * canvas.width;  // 30% full screen

        const spreadY = Math.random() < 0.7
          ? canvas.height * 0.15 + Math.random() * (canvas.height * 0.7)
          : Math.random() * canvas.height;

        // More varied, natural movement patterns
        const angleVariation = Math.random() * Math.PI * 2;
        const speedVariation = Math.random() * 1.5 + 0.5;

        particlesRef.current.push({
          x: spreadX,
          y: spreadY,
          directionX: Math.cos(angleVariation) * speedVariation,
          directionY: Math.sin(angleVariation) * speedVariation - (Math.random() * 0.5), // Slight upward bias
          size,
          density: Math.random() * 25 + 5
        });
      }
    }
  }, [isDusting]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.x;
      mouseRef.current.y = e.y;
    };

    const handleTouchMove = (e: TouchEvent) => {
      mouseRef.current.x = e.touches[0].clientX;
      mouseRef.current.y = e.touches[0].clientY;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const drawParticle = (p: Particle) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2, false);
      ctx.fillStyle = `rgba(${modeColor}, ${p.size < 1 ? 0.3 : 0.6})`;
      ctx.fill();
    };

    const updateParticle = (p: Particle) => {
      if (isDustingRef.current) {
        // Dust drift effect
        p.x += Math.random() * 8 + 2;
        p.y -= Math.random() * 8 + 2;
        p.size *= 0.96;
      } else {
        // Normal movement
        if (p.x > canvas.width || p.x < 0) p.directionX = -p.directionX;
        if (p.y > canvas.height || p.y < 0) p.directionY = -p.directionY;

        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRef.current.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouseRef.current.radius - distance) / mouseRef.current.radius;
          p.x -= forceDirectionX * force * p.density * 0.5;
          p.y -= forceDirectionY * force * p.density * 0.5;
        }

        p.x += p.directionX;
        p.y += p.directionY;
      }
      drawParticle(p);
    };

    const connect = () => {
      const isMobile = window.innerWidth < 768;
      const connectDist = isMobile
        ? (canvas.width / 15) * (canvas.height / 15)
        : (canvas.width / 9) * (canvas.height / 9);

      for (let a = 0; a < particlesRef.current.length; a++) {
        for (let b = a; b < particlesRef.current.length; b++) {
          const pA = particlesRef.current[a];
          const pB = particlesRef.current[b];
          const distance =
            (pA.x - pB.x) * (pA.x - pB.x) +
            (pA.y - pB.y) * (pA.y - pB.y);

          if (distance < connectDist) {
            const opacity = 1 - distance / connectDist;
            if (opacity > 0) {
              ctx.strokeStyle = `rgba(${modeColor}, ${opacity * 0.12})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(pA.x, pA.y);
              ctx.lineTo(pB.x, pB.y);
              ctx.stroke();
            }
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Filter out particles that are too small
      particlesRef.current = particlesRef.current.filter(p => p.size > 0.1);

      for (const particle of particlesRef.current) {
        updateParticle(particle);
      }

      if (!isDustingRef.current) {
        connect();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [modeColor, init]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-10 pointer-auto"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleCanvas;
