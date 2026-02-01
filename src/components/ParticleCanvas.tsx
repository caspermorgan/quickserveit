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

  // Mode colors: Rich Gold for institutional, Neon Cyan for creator
  // Institutional: hsl(43, 96%, 56%) = rgb(234, 179, 8)
  // Creator: hsl(187, 100%, 42%) = rgb(0, 214, 214) ≈ (34, 211, 238)
  const modeColor = mode === 'institutional' ? '234, 179, 8' : '34, 211, 238';

  const createParticle = useCallback((canvas: HTMLCanvasElement): Particle => {
    const isMobile = window.innerWidth < 768;
    // Slightly larger particles on mobile for visibility
    const sizeMin = isMobile ? 0.6 : 0.4;
    const sizeMax = isMobile ? 1.4 : 1.2;
    const size = Math.random() * sizeMax + sizeMin;
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;

    // Mode-specific particle speeds
    // Institute: 60% slower (0.06 base), Creator: 40% faster (0.21 base)
    const baseSpeed = mode === 'institutional' ? 0.06 : 0.21;
    const directionX = (Math.random() * baseSpeed * 2) - baseSpeed;
    const directionY = (Math.random() * baseSpeed * 2) - baseSpeed;

    const density = Math.random() * 30 + 1;
    return { x, y, directionX, directionY, size, density };
  }, [mode]);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    particlesRef.current = [];
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    // Lower divisor = MORE particles (mobile needs denser field)
    // Account for device pixel ratio on high-DPI screens
    const pixelRatio = window.devicePixelRatio || 1;
    const dpiMultiplier = Math.min(pixelRatio, 2); // Cap at 2x to avoid performance issues

    const densityFactor = isMobile
      ? 10000  // Mobile: reduced by 40% for less clutter (was 6000)
      : isTablet
        ? 8000  // Tablet: medium density
        : 10000; // Desktop: baseline

    const baseParticles = (canvas.height * canvas.width) / densityFactor;
    const numberOfParticles = Math.floor(baseParticles * dpiMultiplier);

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

      // Dramatically increased particle counts for smooth effect
      const dustCount = isMobile ? 350 : (isTablet ? 450 : 600);

      for (let i = 0; i < dustCount; i++) {
        // Smaller, more varied particle sizes for a finer dust effect
        // Use same sizing logic as regular particles for consistency
        const sizeMin = isMobile ? 0.6 : 0.3;
        const sizeMax = isMobile ? 1.4 : 1.2;
        const size = Math.random() * sizeMax + sizeMin;

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
        // Boundary bounces
        if (p.x > canvas.width || p.x < 0) p.directionX = -p.directionX;
        if (p.y > canvas.height || p.y < 0) p.directionY = -p.directionY;

        // Mouse interaction (enhancement, not requirement)
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

        // Subtle ambient drift (always active) - Brownian-motion-like organic movement
        const ambientDriftX = (Math.random() - 0.5) * 0.15; // Very subtle random drift
        const ambientDriftY = (Math.random() - 0.5) * 0.15;

        // Base movement + ambient drift
        p.x += p.directionX + ambientDriftX;
        p.y += p.directionY + ambientDriftY;
      }
      drawParticle(p);
    };

    const connect = () => {
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

      // Smaller screens need CLOSER connections, not farther
      // Use absolute pixel distances instead of proportional
      const connectDist = isMobile
        ? 80 * 80      // 80px radius on mobile (was ~26px)
        : isTablet
          ? 100 * 100  // 100px radius on tablet
          : (canvas.width / 9) * (canvas.height / 9); // Desktop: keep proportional

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
              // Mode-specific connection styles
              // Institute: Faint connections (0.06), Creator: Pulsating (0.14 with oscillation)
              let baseOpacity = isMobile ? 0.15 : 0.12;

              if (mode === 'institutional') {
                baseOpacity = isMobile ? 0.08 : 0.06; // Faint
              } else {
                // Creator mode: pulsating effect
                const pulse = Math.sin(Date.now() * 0.001) * 0.03 + 1;
                baseOpacity = (isMobile ? 0.16 : 0.14) * pulse;
              }

              ctx.strokeStyle = `rgba(${modeColor}, ${opacity * baseOpacity})`;
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
      className="fixed inset-0 z-10 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleCanvas;
