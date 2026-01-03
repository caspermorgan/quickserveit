import { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

interface HeaderStatusBadgeProps {
    mode: 'institutional' | 'creator';
    showText?: boolean; // New prop to control text visibility
}

const HeaderStatusBadge = ({ mode, showText = true }: HeaderStatusBadgeProps) => {
    const [isWithinHours, setIsWithinHours] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const { t } = useTranslation();

    // Update current time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const checkAvailability = () => {
            const now = new Date();
            const istOffset = 5.5 * 60; // IST is UTC+5:30
            const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
            const istTime = new Date(utc + (istOffset * 60000));

            const hours = istTime.getHours();

            // Working hours: 10:00 AM - 4:00 PM IST
            const isActive = hours >= 10 && hours < 16;
            setIsWithinHours(isActive);
        };

        checkAvailability();
        // Check every hour (no need for minute-level tracking)
        const interval = setInterval(checkAvailability, 60 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    // Format time in user's local timezone
    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    };

    // If showText is false, return just the dot
    if (!showText) {
        return (
            <div
                className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full backdrop-blur-md bg-background/20 border border-foreground/10 shadow-[0_2px_10px_rgba(0,0,0,0.1)] transition-all duration-300"
            >
                <span
                    className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${isWithinHours
                        ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]'
                        : 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.4)]'
                        }`}
                />
            </div>
        );
    }

    // Full badge with text and live clock (for landing page)
    return (
        <div
            className={`
        inline-flex items-center gap-2 px-3 py-1.5 rounded-full
        backdrop-blur-md bg-background/20 border border-foreground/10
        shadow-[0_2px_10px_rgba(0,0,0,0.1)]
        transition-all duration-300 ease-out
        ${mode === 'institutional'
                    ? 'hover:border-institutional/20'
                    : 'hover:border-creator/20'
                }
      `}
        >
            {/* Status dot with soft blink animation - color based on mode and availability */}
            <span
                className={`w-1.5 h-1.5 rounded-full transition-colors animate-[softBlink_5s_ease-in-out_infinite] ${isWithinHours
                    ? 'bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.6)]'
                    : mode === 'institutional'
                        ? 'bg-yellow-500 shadow-[0_0_6px_rgba(234,179,8,0.6)]'
                        : 'bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.6)]'
                    }`}
            />

            {/* Status text with live clock */}
            <span
                className="text-[10px] md:text-xs font-medium text-foreground/60 tracking-wide whitespace-nowrap"
            >
                {isWithinHours ? t('availableNow') : t('onRequest')} | {formatTime(currentTime)}
            </span>
        </div>
    );
};

export default HeaderStatusBadge;
