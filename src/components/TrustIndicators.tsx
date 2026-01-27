import { useState } from 'react';
import { Shield, CheckCircle, Clock, LucideIcon } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

interface TrustIndicatorProps {
    mode: 'institutional' | 'creator';
}

interface IndicatorItemProps {
    icon: LucideIcon;
    label: string;
    mode: 'institutional' | 'creator';
    isActive: boolean;
    onActivate: () => void;
    onDeactivate: () => void;
}

const IndicatorItem = ({ icon: Icon, label, mode, isActive, onActivate, onDeactivate }: IndicatorItemProps) => {
    return (
        <div className="relative opacity-60 scale-90 transition-all duration-normal hover:opacity-100 hover:scale-100">
            {/* Icon with subtle glow - v2.1 Refined */}
            <button
                onMouseEnter={onActivate}
                onMouseLeave={onDeactivate}
                onTouchStart={onActivate}
                onTouchEnd={onDeactivate}
                className={`
          group relative p-2.5 rounded-full
          glass-surface-3
          transition-all duration-fast ease-out
          min-h-[44px] min-w-[44px] flex items-center justify-center
          ${isActive
                        ? mode === 'institutional'
                            ? 'bg-background/10 border-institutional/20'
                            : 'bg-background/10 border-creator/20'
                        : 'hover:bg-background/8 hover:border-foreground/8'
                    }
        `}
                aria-label={label}
            >
                <Icon
                    className={`
            w-4 h-4 sm:w-4.5 sm:h-4.5 transition-all duration-fast
            ${mode === 'institutional' ? 'text-institutional/70' : 'text-creator/70'}
          `}
                    style={{
                        filter: mode === 'institutional'
                            ? 'drop-shadow(0 0 3px rgba(234, 179, 8, 0.15))'
                            : 'drop-shadow(0 0 3px rgba(34, 211, 238, 0.15))'
                    }}
                />
            </button>

            {/* Tooltip - only shows when active - v2.1 Refined */}
            <div
                className={`
          absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2
          rounded-lg glass-surface-1 border
          whitespace-nowrap text-xs font-medium
          transition-all duration-fast ease-out pointer-events-none
          ${isActive
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-2 invisible'
                    }
          ${mode === 'institutional'
                        ? 'border-institutional/30 text-institutional shadow-[0_0_12px_rgba(234,179,8,0.15)]'
                        : 'border-creator/30 text-creator shadow-[0_0_12px_rgba(34,211,238,0.15)]'
                    }
        `}
            >
                {label}
                {/* Tooltip arrow */}
                <div
                    className={`
            absolute top-full left-1/2 -translate-x-1/2 -mt-px
            w-2 h-2 rotate-45 border-r border-b
            ${mode === 'institutional'
                            ? 'bg-background/95 border-institutional/30'
                            : 'bg-background/95 border-creator/30'
                        }
          `}
                />
            </div>
        </div>
    );
};

const TrustIndicators = ({ mode }: TrustIndicatorProps) => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const indicators = [
        { icon: Shield, label: t('confidentialityTitle') },
        { icon: CheckCircle, label: t('realisticTimelinesTitle') },
        { icon: Clock, label: '10 AM - 4 PM IST' },
    ];

    return (
        <div className="flex items-center justify-center gap-3 sm:gap-5 md:gap-7 mb-14 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            {indicators.map((indicator, index) => (
                <IndicatorItem
                    key={index}
                    icon={indicator.icon}
                    label={indicator.label}
                    mode={mode}
                    isActive={activeIndex === index}
                    onActivate={() => setActiveIndex(index)}
                    onDeactivate={() => setActiveIndex(null)}
                />
            ))}
        </div>
    );
};

export default TrustIndicators;
