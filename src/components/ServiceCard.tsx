import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

interface ServiceCardProps {
  icon: React.FC<IconProps>;
  title: string;
  subtitle?: string;
  description: string;
  mode: 'institutional' | 'creator';
  delay?: number;
  onClick?: () => void;
}

const ServiceCard = ({ icon: Icon, title, subtitle, description, mode, delay = 0, onClick }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse position tracking for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animations for smooth tilt
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseXPos = (e.clientX - centerX) / (rect.width / 2);
    const mouseYPos = (e.clientY - centerY) / (rect.height / 2);

    mouseX.set(mouseXPos);
    mouseY.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative rounded-2xl p-5 md:p-7 ${onClick ? 'cursor-pointer' : ''
        }`}
      transition={{ duration: 0.3 }}
    >
      {/* Enhanced Glassmorphism Background - v2.1 */}
      <div
        className="absolute inset-0 rounded-2xl glass-2"
        style={{
          boxShadow: isHovered
            ? mode === 'institutional'
              ? '0 0 50px rgba(234, 179, 8, 0.15), inset 0 0 25px rgba(234, 179, 8, 0.04)'
              : '0 0 50px rgba(34, 211, 238, 0.15), inset 0 0 25px rgba(34, 211, 238, 0.04)'
            : 'var(--shadow-directional-md), var(--shadow-ambient-md)',
          transition: 'all 0.4s ease',
        }}
      />

      {/* Glow Effect on Hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            mode === 'institutional'
              ? 'radial-gradient(circle at 50% 0%, rgba(234, 179, 8, 0.12), transparent 70%)'
              : 'radial-gradient(circle at 50% 0%, rgba(34, 211, 238, 0.12), transparent 70%)',
        }}
      />

      {/* Content Container with 3D depth */}
      <div className="relative" style={{ transform: 'translateZ(20px)' }}>
        {/* Icon with Premium Glow - v2.1 Refined */}
        <div
          className={`relative w-11 h-11 md:w-13 md:h-13 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:rotate-2 ${mode === 'institutional'
            ? 'bg-institutional/10 group-hover:bg-institutional/15'
            : 'bg-creator/10 group-hover:bg-creator/15'
            }`}
          style={{
            boxShadow:
              mode === 'institutional'
                ? '0 0 15px rgba(234, 179, 8, 0.08)'
                : '0 0 15px rgba(34, 211, 238, 0.08)',
          }}
        >
          <Icon
            className={`w-6 h-6 md:w-6.5 md:h-6.5 transition-all duration-500 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
              }`}
            style={{
              filter:
                mode === 'institutional'
                  ? 'drop-shadow(0 0 6px rgba(234, 179, 8, 0.25))'
                  : 'drop-shadow(0 0 6px rgba(34, 211, 238, 0.25))',
            }}
          />
        </div>

        {/* Title - v2.1 Refined */}
        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:translate-x-0.5 transition-transform duration-400">
          {title}
        </h3>

        {/* Subtitle */}
        {subtitle && (
          <p
            className={`text-sm md:text-base font-medium mb-3 ${mode === 'institutional' ? 'text-institutional/80' : 'text-creator/80'
              }`}
          >
            {subtitle}
          </p>
        )}

        {/* Description - v2.1 Refined */}
        <p className="text-sm md:text-base text-foreground/70 leading-[1.6]">
          {description}
        </p>
      </div>

      {/* Bottom Gradient Accent Line - v2.1 Refined */}
      <div
        className="absolute bottom-0 left-5 right-5 h-0.5 opacity-0 group-hover:opacity-100 transition-all duration-400"
        style={{
          background:
            mode === 'institutional'
              ? 'linear-gradient(90deg, transparent 0%, rgba(234, 179, 8, 0.3) 50%, transparent 100%)'
              : 'linear-gradient(90deg, transparent 0%, rgba(34, 211, 238, 0.3) 50%, transparent 100%)',
        }}
      />
    </motion.div>
  );
};

export default ServiceCard;
