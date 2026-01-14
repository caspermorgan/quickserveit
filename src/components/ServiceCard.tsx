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
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative rounded-2xl p-5 md:p-6 lg:p-8 h-auto min-h-[280px] md:min-h-[320px] ${onClick ? 'cursor-pointer' : ''
        }`}
      transition={{ duration: 0.3 }}
    >
      {/* Enhanced Glassmorphism Background */}
      <div
        className="absolute inset-0 rounded-2xl backdrop-blur-xl"
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: isHovered
            ? mode === 'institutional'
              ? '0 0 60px rgba(43, 96, 56, 0.2), inset 0 0 30px rgba(43, 96, 56, 0.05)'
              : '0 0 60px rgba(187, 100, 42, 0.2), inset 0 0 30px rgba(187, 100, 42, 0.05)'
            : '0 4px 20px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.5s ease',
        }}
      />

      {/* Glow Effect on Hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            mode === 'institutional'
              ? 'radial-gradient(circle at 50% 0%, rgba(43, 96, 56, 0.15), transparent 70%)'
              : 'radial-gradient(circle at 50% 0%, rgba(187, 100, 42, 0.15), transparent 70%)',
        }}
      />

      {/* Content Container with 3D depth */}
      <div className="relative" style={{ transform: 'translateZ(20px)' }}>
        {/* Icon with Premium Glow */}
        <div
          className={`relative w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 ${mode === 'institutional'
            ? 'bg-institutional/10 group-hover:bg-institutional/20'
            : 'bg-creator/10 group-hover:bg-creator/20'
            }`}
          style={{
            boxShadow:
              mode === 'institutional'
                ? '0 0 20px rgba(43, 96, 56, 0.1)'
                : '0 0 20px rgba(187, 100, 42, 0.1)',
          }}
        >
          <Icon
            className={`w-6 h-6 md:w-7 md:h-7 transition-all duration-500 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
              }`}
            style={{
              filter:
                mode === 'institutional'
                  ? 'drop-shadow(0 0 8px rgba(43, 96, 56, 0.3))'
                  : 'drop-shadow(0 0 8px rgba(187, 100, 42, 0.3))',
            }}
          />
        </div>

        {/* Title - Responsive sizing */}
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground mb-2 group-hover:translate-x-1 transition-transform duration-500">
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

        {/* Description - Line clamp on mobile for compactness */}
        <p className="text-sm md:text-base text-foreground/60 leading-relaxed line-clamp-3 md:line-clamp-none">
          {description}
        </p>
      </div>

      {/* Bottom Gradient Accent Line */}
      <div
        className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-all duration-500"
        style={{
          background:
            mode === 'institutional'
              ? 'linear-gradient(90deg, transparent 0%, rgba(43, 96, 56, 0.4) 50%, transparent 100%)'
              : 'linear-gradient(90deg, transparent 0%, rgba(187, 100, 42, 0.4) 50%, transparent 100%)',
        }}
      />
    </motion.div>
  );
};

export default ServiceCard;
