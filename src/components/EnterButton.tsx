import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

interface EnterButtonProps {
  mode: 'institutional' | 'creator';
  onClick: () => void;
}

const EnterButton = ({ mode, onClick }: EnterButtonProps) => {
  const { t } = useTranslation();

  return (
    <button
      onClick={onClick}
      className="group relative mt-10 md:mt-14 active:scale-[0.95] transition-transform duration-150 ease-out"
      style={{
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {/* Outer glow - Enhanced */}
      <div
        className={`absolute -inset-4 md:-inset-6 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl ${mode === 'institutional'
          ? 'bg-institutional/30'
          : 'bg-creator/30'
          }`}
      />

      {/* Pulsing glow effect */}
      <div
        className={`absolute -inset-2 md:-inset-3 rounded-full animate-pulse transition-opacity duration-700 blur-xl ${mode === 'institutional'
          ? 'bg-institutional/10'
          : 'bg-creator/10'
          }`}
      />

      {/* Button */}
      <div
        className={`relative flex items-center gap-3 md:gap-4 px-8 py-4 md:px-12 md:py-5 rounded-full backdrop-blur-xl bg-white/[0.04] border-2 transition-all duration-500 group-hover:scale-[1.05] min-h-[52px] md:min-h-[60px] ${mode === 'institutional'
          ? 'border-institutional/30 group-hover:border-institutional/60 group-hover:shadow-[0_0_60px_rgba(234,179,8,0.25),inset_0_0_20px_rgba(234,179,8,0.1)]'
          : 'border-creator/30 group-hover:border-creator/60 group-hover:shadow-[0_0_60px_rgba(34,211,238,0.25),inset_0_0_20px_rgba(34,211,238,0.1)]'
          }`}
      >
        {/* Inner glow on hover */}
        <div
          className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${mode === 'institutional'
            ? 'bg-gradient-to-r from-institutional/5 via-institutional/10 to-institutional/5'
            : 'bg-gradient-to-r from-creator/5 via-creator/10 to-creator/5'
            }`}
        />

        {/* Text */}
        <span
          className={`relative font-display text-sm md:text-base tracking-[0.2em] uppercase font-bold transition-all duration-500 ${mode === 'institutional'
            ? 'text-institutional group-hover:text-institutional/90'
            : 'text-creator group-hover:text-creator/90'
            }`}
        >
          {t('enter')}
        </span>

        {/* Arrow - Enhanced */}
        <ArrowRight
          className={`relative w-4 h-4 md:w-5 md:h-5 transition-all duration-500 group-hover:translate-x-1 ${mode === 'institutional'
            ? 'text-institutional group-hover:text-institutional/90'
            : 'text-creator group-hover:text-creator/90'
            }`}
          strokeWidth={2.5}
        />
      </div>
    </button>
  );
};

export default EnterButton;
