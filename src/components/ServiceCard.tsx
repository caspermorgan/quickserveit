import React from 'react';

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
}

const ServiceCard = ({ icon: Icon, title, subtitle, description, mode, delay = 0 }: ServiceCardProps) => {
  return (
    <div
      className="group relative glass-card rounded-2xl p-6 md:p-8 animate-fade-in-up trans-premium"
      style={{
        animationDelay: `${delay}ms`,
        border: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* Premium Hover Glow Effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: mode === 'institutional'
            ? '0 0 60px hsl(43, 96%, 56%, 0.15), inset 0 0 30px hsl(43, 96%, 56%, 0.05)'
            : '0 0 60px hsl(187, 100%, 42%, 0.15), inset 0 0 30px hsl(187, 100%, 42%, 0.05)'
        }}
      />

      {/* Icon with Premium Glow */}
      <div
        className={`relative w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 ${mode === 'institutional'
          ? 'bg-institutional/10 group-hover:bg-institutional/20'
          : 'bg-creator/10 group-hover:bg-creator/20'
          }`}
        style={{
          boxShadow: mode === 'institutional'
            ? '0 0 20px hsl(43, 96%, 56%, 0.1)'
            : '0 0 20px hsl(187, 100%, 42%, 0.1)'
        }}
      >
        <Icon
          className={`w-6 h-6 md:w-7 md:h-7 transition-all duration-500 ${mode === 'institutional'
            ? 'text-institutional'
            : 'text-creator'
            }`}
          style={{
            filter: mode === 'institutional'
              ? 'drop-shadow(0 0 8px hsl(43, 96%, 56%, 0.3))'
              : 'drop-shadow(0 0 8px hsl(187, 100%, 42%, 0.3))'
          }}
        />
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:translate-x-1 transition-transform duration-500">
        {title}
      </h3>

      {/* Subtitle */}
      {subtitle && (
        <p className={`text-sm md:text-base font-medium mb-3 ${mode === 'institutional' ? 'text-institutional/80' : 'text-creator/80'}`}>
          {subtitle}
        </p>
      )}

      {/* Description */}
      <p className="text-sm md:text-base text-foreground/60 leading-relaxed">
        {description}
      </p>

      {/* Bottom Gradient Accent Line */}
      <div
        className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-all duration-500"
        style={{
          background: mode === 'institutional'
            ? 'linear-gradient(90deg, transparent 0%, hsl(43, 96%, 56%, 0.4) 50%, transparent 100%)'
            : 'linear-gradient(90deg, transparent 0%, hsl(187, 100%, 42%, 0.4) 50%, transparent 100%)'
        }}
      />
    </div>
  );
};

export default ServiceCard;
