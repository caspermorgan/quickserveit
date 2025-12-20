import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  mode: 'institutional' | 'creator';
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, mode, delay = 0 }: ServiceCardProps) => {
  return (
    <div 
      className="group relative glass-card rounded-2xl p-6 md:p-8 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Hover glow */}
      <div 
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          mode === 'institutional'
            ? 'shadow-[inset_0_0_30px_rgba(234,179,8,0.05)]'
            : 'shadow-[inset_0_0_30px_rgba(34,211,238,0.05)]'
        }`}
      />
      
      {/* Icon */}
      <div 
        className={`relative w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 ${
          mode === 'institutional'
            ? 'bg-institutional/10 group-hover:bg-institutional/20'
            : 'bg-creator/10 group-hover:bg-creator/20'
        }`}
      >
        <Icon 
          className={`w-6 h-6 md:w-7 md:h-7 transition-all duration-500 ${
            mode === 'institutional'
              ? 'text-institutional'
              : 'text-creator'
          }`}
        />
      </div>
      
      {/* Title */}
      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 group-hover:translate-x-1 transition-transform duration-500">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-sm md:text-base text-foreground/50 leading-relaxed">
        {description}
      </p>
      
      {/* Bottom accent line */}
      <div 
        className={`absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-all duration-500 ${
          mode === 'institutional'
            ? 'bg-gradient-to-r from-transparent via-institutional/30 to-transparent'
            : 'bg-gradient-to-r from-transparent via-creator/30 to-transparent'
        }`}
      />
    </div>
  );
};

export default ServiceCard;
