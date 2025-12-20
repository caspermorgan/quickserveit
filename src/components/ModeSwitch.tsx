import { useState, useEffect } from 'react';

interface ModeSwitchProps {
  mode: 'institutional' | 'creator';
  onModeChange: (mode: 'institutional' | 'creator') => void;
}

const ModeSwitch = ({ mode, onModeChange }: ModeSwitchProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    onModeChange(mode === 'institutional' ? 'creator' : 'institutional');
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [mode]);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Labels */}
      <div className="flex items-center gap-6 text-xs md:text-sm tracking-[0.3em] uppercase font-display">
        <span 
          className={`transition-all duration-500 ${
            mode === 'institutional' 
              ? 'text-institutional opacity-100' 
              : 'text-foreground/30'
          }`}
        >
          Institute
        </span>
        
        {/* Switch Container */}
        <button
          onClick={handleToggle}
          className="relative w-20 h-10 md:w-24 md:h-11 rounded-full glass-premium cursor-pointer group focus:outline-none"
          aria-label={`Switch to ${mode === 'institutional' ? 'creator' : 'institutional'} mode`}
        >
          {/* Glow effect */}
          <div 
            className={`absolute inset-0 rounded-full transition-all duration-700 ${
              mode === 'institutional'
                ? 'shadow-[0_0_30px_rgba(234,179,8,0.3)]'
                : 'shadow-[0_0_30px_rgba(34,211,238,0.3)]'
            }`}
          />
          
          {/* Track highlight */}
          <div 
            className={`absolute inset-1 rounded-full transition-all duration-700 ${
              mode === 'institutional'
                ? 'bg-gradient-to-r from-institutional/10 to-transparent'
                : 'bg-gradient-to-l from-creator/10 to-transparent'
            }`}
          />
          
          {/* Slider knob */}
          <div 
            className={`absolute top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              mode === 'institutional'
                ? 'left-1.5 bg-institutional shadow-[0_0_20px_rgba(234,179,8,0.6)]'
                : 'left-[calc(100%-2.125rem)] md:left-[calc(100%-2.375rem)] bg-creator shadow-[0_0_20px_rgba(34,211,238,0.6)]'
            }`}
          >
            {/* Inner glow */}
            <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-white/40 to-transparent" />
          </div>
          
          {/* Hover effect */}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/5" />
        </button>
        
        <span 
          className={`transition-all duration-500 ${
            mode === 'creator' 
              ? 'text-creator opacity-100' 
              : 'text-foreground/30'
          }`}
        >
          Creator
        </span>
      </div>
    </div>
  );
};

export default ModeSwitch;
