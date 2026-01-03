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
      className="group relative mt-10 md:mt-14 active:scale-[0.92] transition-transform duration-150 ease-out"
      style={{
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {/* Outer glow */}
      <div
        className={`absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl ${mode === 'institutional'
          ? 'bg-institutional/20'
          : 'bg-creator/20'
          }`}
      />

      {/* Button */}
      <div
        className={`relative flex items-center gap-3 px-7 py-3.5 md:px-9 md:py-4 rounded-full backdrop-blur-xl bg-white/[0.03] border transition-all duration-500 group-hover:scale-[1.02] ${mode === 'institutional'
          ? 'border-institutional/20 group-hover:border-institutional/40 group-hover:shadow-[0_0_40px_rgba(234,179,8,0.15)]'
          : 'border-creator/20 group-hover:border-creator/40 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]'
          }`}
      >
        {/* Text */}
        <span
          className={`font-display text-xs md:text-sm tracking-[0.15em] uppercase font-medium transition-colors duration-500 ${mode === 'institutional'
            ? 'text-institutional'
            : 'text-creator'
            }`}
        >
          {t('enter')}
        </span>

        {/* Arrow */}
        <ArrowRight
          className={`w-4 h-4 transition-all duration-500 group-hover:translate-x-0.5 ${mode === 'institutional'
            ? 'text-institutional'
            : 'text-creator'
            }`}
          strokeWidth={2}
        />
      </div>
    </button>
  );
};

export default EnterButton;
