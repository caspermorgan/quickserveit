import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
}

interface ParticleFieldProps {
  mode?: "corporate" | "cinematic";
  className?: string;
}

export function ParticleField({ mode = "corporate", className = "" }: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>();
  const reducedMotion = useRef(false);

  const getParticleCount = useCallback(() => {
    const isMobile = window.innerWidth < 768;
    const baseCount = mode === "corporate" ? 40 : 80;
    return isMobile ? Math.floor(baseCount * 0.45) : baseCount;
  }, [mode]);

  const createParticle = useCallback((width: number, height: number): Particle => {
    const colors = mode === "corporate" 
      ? ["rgba(255, 213, 65, 0.4)", "rgba(234, 199, 111, 0.3)", "rgba(255, 255, 255, 0.2)"]
      : ["rgba(80, 135, 255, 0.5)", "rgba(255, 213, 65, 0.4)", "rgba(255, 255, 255, 0.3)"];
    
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * (mode === "corporate" ? 0.3 : 0.8),
      vy: (Math.random() - 0.5) * (mode === "corporate" ? 0.3 : 0.8),
      size: Math.random() * 2 + 1,
      alpha: Math.random() * 0.5 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    };
  }, [mode]);

  const initParticles = useCallback((width: number, height: number) => {
    const count = getParticleCount();
    particlesRef.current = Array.from({ length: count }, () => createParticle(width, height));
  }, [getParticleCount, createParticle]);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    const canvas = canvasRef.current;
    if (!canvas || reducedMotion.current) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      initParticles(rect.width, rect.height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const friction = mode === "corporate" ? 0.98 : 0.96;
    const repelDistance = mode === "corporate" ? 80 : 120;
    const repelStrength = mode === "corporate" ? 0.5 : 1.2;

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      particlesRef.current.forEach((particle) => {
        const dx = particle.x - mouseRef.current.x;
        const dy = particle.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < repelDistance && dist > 0) {
          const force = (repelDistance - dist) / repelDistance;
          const angle = Math.atan2(dy, dx);
          particle.vx += Math.cos(angle) * force * repelStrength;
          particle.vy += Math.sin(angle) * force * repelStrength;
        }

        particle.vx *= friction;
        particle.vy *= friction;
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x = rect.width;
        if (particle.x > rect.width) particle.x = 0;
        if (particle.y < 0) particle.y = rect.height;
        if (particle.y > rect.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mode, initParticles]);

  if (reducedMotion.current) {
    return (
      <div 
        className={`absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto ${className}`}
      aria-hidden="true"
      data-testid="particle-field"
    />
  );
}
