import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const WorkingHoursIndicator = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    const checkWorkingHours = () => {
      const now = new Date();
      const istOffset = 5.5 * 60; // IST is UTC+5:30
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istTime = new Date(utc + (istOffset * 60000));
      
      const hours = istTime.getHours();
      
      // Working hours: 10:00 AM - 3:00 PM IST
      const isWithinHours = hours >= 10 && hours < 15;
      setIsActive(isWithinHours);
      
      const timeStr = istTime.toLocaleTimeString('en-IN', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      });
      setCurrentTime(timeStr);
    };

    checkWorkingHours();
    const interval = setInterval(checkWorkingHours, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-3 px-4 py-2 rounded-full glass-card border border-border/20">
      <div className={`flex items-center gap-2 ${isActive ? 'text-green-400' : 'text-foreground/40'}`}>
        <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-green-400 animate-pulse' : 'bg-foreground/30'}`} />
        <span className="text-xs font-medium tracking-wide">
          {isActive ? t('available') : t('offline')}
        </span>
      </div>
      <span className="text-foreground/20">|</span>
      <div className="flex items-center gap-1.5 text-foreground/40">
        <Clock className="w-3 h-3" />
        <span className="text-xs font-mono">{currentTime} IST</span>
      </div>
      <span className="text-foreground/20">|</span>
      <span className="text-xs text-foreground/30">10AM–3PM</span>
    </div>
  );
};

export default WorkingHoursIndicator;
