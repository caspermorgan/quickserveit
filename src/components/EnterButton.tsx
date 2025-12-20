import { ChevronRight } from 'lucide-react';

interface EnterButtonProps {
  mode: 'institutional' | 'creator';
  onClick: () => void;
}

const EnterButton = ({ mode, onClick }: EnterButtonProps) => {
  const label = mode === 'institutional' ? 'Enter Dashboard' : 'Enter Studio';
  
  return (
    <button
      onClick={onClick}
      className="group relative mt-12 md:mt-16"
    >
      {/* Outer glow ring */}
      <div 
        className={`absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl ${
          mode === 'institutional' 
            ? 'bg-institutional/30' 
            : 'bg-creator/30'
        }`}
      />
      
      {/* Button container */}
      <div 
        className={`relative flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-full glass-premium border transition-all duration-500 group-hover:scale-105 ${
          mode === 'institutional'
            ? 'border-institutional/30 group-hover:border-institutional/60 group-hover:shadow-[0_0_40px_rgba(234,179,8,0.3)]'
            : 'border-creator/30 group-hover:border-creator/60 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]'
        }`}
      >
        {/* Text */}
        <span 
          className={`font-display text-sm md:text-base tracking-[0.2em] uppercase transition-colors duration-500 ${
            mode === 'institutional'
              ? 'text-institutional'
              : 'text-creator'
          }`}
        >
          {label}
        </span>
        
        {/* Arrow icon */}
        <ChevronRight 
          className={`w-5 h-5 transition-all duration-500 group-hover:translate-x-1 ${
            mode === 'institutional'
              ? 'text-institutional'
              : 'text-creator'
          }`}
        />
      </div>
      
      {/* Animated border gradient */}
      <div 
        className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${
          mode === 'institutional'
            ? 'shadow-[inset_0_0_20px_rgba(234,179,8,0.1)]'
            : 'shadow-[inset_0_0_20px_rgba(34,211,238,0.1)]'
        }`}
      />
    </button>
  );
};

export default EnterButton;
