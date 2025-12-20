import { useState, useEffect } from 'react';
import ParticleCanvas from './ParticleCanvas';
import FilmGrain from './FilmGrain';
import CursorLight from './CursorLight';
import ModeSwitch from './ModeSwitch';
import EnterButton from './EnterButton';

interface LandingViewProps {
  mode: 'institutional' | 'creator';
  onModeChange: (mode: 'institutional' | 'creator') => void;
  onEnter: () => void;
  isExiting: boolean;
}

const LandingView = ({ mode, onModeChange, onEnter, isExiting }: LandingViewProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const philosophyText = mode === 'institutional'
    ? 'Calm Digital Execution for Institutions'
    : 'Premium Visual Storytelling for Creators';

  return (
    <div 
      className={`fixed inset-0 z-30 flex flex-col items-center justify-center transition-all duration-1000 ${
        isExiting 
          ? 'opacity-0 scale-105 blur-lg pointer-events-none' 
          : 'opacity-100 scale-100 blur-0'
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Ambient light */}
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl transition-all duration-1000 ${
          mode === 'institutional' 
            ? 'bg-institutional/5' 
            : 'bg-creator/5'
        }`}
      />
      
      {/* Cursor Light */}
      <CursorLight mode={mode} />
      
      {/* Particles */}
      <ParticleCanvas mode={mode} isDusting={isExiting} />
      
      {/* Film Grain */}
      <FilmGrain />
      
      {/* Content */}
      <div className={`relative z-40 flex flex-col items-center text-center px-6 ${
        isLoaded ? 'animate-fade-in-up' : 'opacity-0'
      }`}>
        {/* Brand Name */}
        <h1 
          className="font-display text-3xl md:text-5xl lg:text-6xl tracking-[0.3em] md:tracking-[0.4em] uppercase text-foreground mb-4 md:mb-6"
          style={{ animationDelay: '200ms' }}
        >
          QuickServe
        </h1>
        
        {/* Tagline */}
        <p 
          className={`font-display text-[10px] md:text-xs tracking-[0.5em] uppercase mb-12 md:mb-16 transition-colors duration-700 ${
            mode === 'institutional' ? 'text-institutional/60' : 'text-creator/60'
          }`}
          style={{ animationDelay: '400ms' }}
        >
          The 50M Standard
        </p>
        
        {/* Philosophy line */}
        <p 
          className="text-sm md:text-base text-foreground/40 max-w-md mb-10 md:mb-14 font-light tracking-wide transition-all duration-700"
          style={{ animationDelay: '600ms' }}
        >
          {philosophyText}
        </p>
        
        {/* Mode Switch */}
        <div style={{ animationDelay: '800ms' }}>
          <ModeSwitch mode={mode} onModeChange={onModeChange} />
        </div>
        
        {/* Enter Button */}
        <div style={{ animationDelay: '1000ms' }}>
          <EnterButton mode={mode} onClick={onEnter} />
        </div>
      </div>
      
      {/* Footer - subtle */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center gap-4 text-[10px] md:text-xs text-foreground/20 font-mono tracking-wider">
          <span className="flex items-center gap-2">
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${
              mode === 'institutional' ? 'bg-institutional' : 'bg-creator'
            }`} />
            SYSTEM OPTIMAL
          </span>
          <span className="text-foreground/10">|</span>
          <span>LAT: 12ms</span>
          <span className="text-foreground/10">|</span>
          <span>LOC: INDIA</span>
        </div>
      </div>
      
      {/* Corner branding */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 z-20">
        <div className="text-[10px] text-foreground/10 font-mono tracking-widest">
          QS-SECURE
        </div>
      </div>
      
      <div className="absolute top-6 right-6 md:top-10 md:right-10 z-20">
        <div className="text-[10px] text-foreground/10 font-mono tracking-widest">
          QuickServe // 2025
        </div>
      </div>
    </div>
  );
};

export default LandingView;
