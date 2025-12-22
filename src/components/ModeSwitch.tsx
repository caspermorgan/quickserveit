import { useState, useEffect } from 'react';

interface ModeSwitchProps {
  mode: 'institutional' | 'creator';
  onModeChange: (mode: 'institutional' | 'creator') => void;
}

const ModeSwitch = ({ mode, onModeChange }: ModeSwitchProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleToggle = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    onModeChange(mode === 'institutional' ? 'creator' : 'institutional');
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 600);
    return () => clearTimeout(timer);
  }, [mode]);

  return (
    <div className="flex flex-col items-center">
      {/* Glass morphism container */}
      <div className="relative">
        {/* Outer glow based on mode */}
        <div 
          className={`absolute -inset-4 rounded-3xl blur-2xl transition-all duration-1000 ${
            mode === 'institutional'
              ? 'bg-institutional/10'
              : 'bg-creator/10'
          }`}
        />
        
        {/* Main glass container */}
        <div 
          className="relative flex items-center gap-1 p-1.5 rounded-full backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]"
        >
          {/* Institute option */}
          <button
            onClick={() => mode !== 'institutional' && handleToggle()}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            onMouseLeave={() => setIsPressed(false)}
            onTouchStart={() => setIsPressed(true)}
            onTouchEnd={() => setIsPressed(false)}
            className={`relative px-5 py-3 md:px-7 md:py-3.5 rounded-full transition-all duration-500 ease-out ${
              mode === 'institutional' 
                ? 'text-background' 
                : 'text-foreground/40 hover:text-foreground/60 active:scale-95'
            }`}
          >
            {/* Active background */}
            {mode === 'institutional' && (
              <div className="absolute inset-0 rounded-full bg-institutional shadow-[0_0_30px_rgba(234,179,8,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] animate-scale-in" />
            )}
            <span className={`relative z-10 font-display text-xs md:text-sm tracking-[0.15em] uppercase font-medium ${
              isPressed && mode !== 'institutional' ? 'scale-95' : ''
            } transition-transform duration-150`}>
              Institute
            </span>
          </button>
          
          {/* Divider */}
          <div className="w-px h-6 bg-white/[0.06]" />
          
          {/* Creator option */}
          <button
            onClick={() => mode !== 'creator' && handleToggle()}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            onMouseLeave={() => setIsPressed(false)}
            onTouchStart={() => setIsPressed(true)}
            onTouchEnd={() => setIsPressed(false)}
            className={`relative px-5 py-3 md:px-7 md:py-3.5 rounded-full transition-all duration-500 ease-out ${
              mode === 'creator' 
                ? 'text-background' 
                : 'text-foreground/40 hover:text-foreground/60 active:scale-95'
            }`}
          >
            {/* Active background */}
            {mode === 'creator' && (
              <div className="absolute inset-0 rounded-full bg-creator shadow-[0_0_30px_rgba(34,211,238,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] animate-scale-in" />
            )}
            <span className={`relative z-10 font-display text-xs md:text-sm tracking-[0.15em] uppercase font-medium ${
              isPressed && mode !== 'creator' ? 'scale-95' : ''
            } transition-transform duration-150`}>
              Creator
            </span>
          </button>
        </div>
        
        {/* Inner glow overlay */}
        <div className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-b from-white/[0.02] to-transparent" />
      </div>
      
      {/* Mode indicator text */}
      <p className={`mt-6 text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase transition-colors duration-500 ${
        mode === 'institutional' ? 'text-institutional/40' : 'text-creator/40'
      }`}>
        {mode === 'institutional' ? 'For Institutions' : 'For Creators'}
      </p>
    </div>
  );
};

export default ModeSwitch;
