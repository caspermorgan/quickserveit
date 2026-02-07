import { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

const AvailabilityIndicator = () => {
    const [isWithinHours, setIsWithinHours] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        const checkAvailability = () => {
            const now = new Date();
            const istOffset = 5.5 * 60; // IST is UTC+5:30
            const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
            const istTime = new Date(utc + (istOffset * 60000));

            const hours = istTime.getHours();

            // Support hours: 10:00 AM - 4:00 PM IST
            const isActive = hours >= 10 && hours < 16;
            setIsWithinHours(isActive);
        };

        checkAvailability();
        const interval = setInterval(checkAvailability, 60000); // Check every minute
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="space-y-2">
            {/* Primary availability indicator */}
            <div className="flex items-center gap-2">
                <span
                    className={`w-2 h-2 rounded-full ${isWithinHours
                            ? 'bg-green-500 animate-slow-pulse'
                            : 'bg-foreground/20'
                        }`}
                    style={{
                        animationDuration: isWithinHours ? '3s' : '0s'
                    }}
                />
                <span className="text-sm text-foreground/60 font-normal">
                    {t('available')}
                </span>
            </div>

            {/* Secondary support hours text */}
            <p className="text-xs text-foreground/40 font-normal leading-relaxed">
                {t('workingHoursInfo')}
            </p>

            {/* Tertiary messages accepted text */}
            <p className="text-xs text-foreground/30 font-normal leading-relaxed">
                {t('messagesAccepted')}
            </p>
        </div>
    );
};

export default AvailabilityIndicator;
