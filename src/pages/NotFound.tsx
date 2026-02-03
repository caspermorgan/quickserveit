import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { useMode } from "@/context/ModeContext";
import { Home, ArrowRight } from "lucide-react";
import ParticleCanvas from "@/components/ParticleCanvas";
import FilmGrain from "@/components/FilmGrain";

const NotFound = () => {
  const { t } = useTranslation();
  const { mode } = useMode();

  useEffect(() => {
    console.error("404 Error: User ventured into the unknown");
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Particle Background */}
      <ParticleCanvas mode={mode} />
      <FilmGrain />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* 404 Title */}
        <div className="mb-12 animate-fade-in">
          <h1
            className="text-[12rem] md:text-[16rem] font-bold leading-none mb-4 tracking-tighter"
            style={{
              background: mode === 'institutional'
                ? 'linear-gradient(135deg, hsl(var(--mode-institutional-h), var(--mode-institutional-s), var(--mode-institutional-l)), hsl(var(--mode-institutional-h), var(--mode-institutional-s), calc(var(--mode-institutional-l) + 20%)))'
                : 'linear-gradient(135deg, hsl(var(--mode-creator-h), var(--mode-creator-s), var(--mode-creator-l)), hsl(var(--mode-creator-h), var(--mode-creator-s), calc(var(--mode-creator-l) + 20%)))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 40px hsl(var(--mode-h), var(--mode-s), var(--mode-l), 0.3))',
            }}
          >
            404
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Looks like you ventured too far into the unknown.
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            This page doesn't exist. But don't worry—even the best explorers get lost sometimes.
            Let's get you back to familiar territory.
          </p>
        </div>

        {/* Return to Base Button */}
        <Link
          to="/home"
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95"
          style={{
            background: mode === 'institutional'
              ? 'linear-gradient(135deg, hsl(var(--mode-institutional-h), var(--mode-institutional-s), var(--mode-institutional-l)), hsl(var(--mode-institutional-h), var(--mode-institutional-s), calc(var(--mode-institutional-l) - 10%)))'
              : 'linear-gradient(135deg, hsl(var(--mode-creator-h), var(--mode-creator-s), var(--mode-creator-l)), hsl(var(--mode-creator-h), var(--mode-creator-s), calc(var(--mode-creator-l) - 10%)))',
            boxShadow: `0 0 30px hsl(var(--mode-h), var(--mode-s), var(--mode-l), 0.5), 0 10px 40px rgba(0,0,0,0.3)`,
            color: 'black',
          }}
        >
          <Home className="w-6 h-6" />
          Return to Base
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>

        {/* Founder's Note */}
        <p className="mt-12 text-sm text-white/40 italic">
          — If you think this page should exist, let me know. I'm always listening.
        </p>
      </div>
    </div>
  );
};

export default NotFound;

