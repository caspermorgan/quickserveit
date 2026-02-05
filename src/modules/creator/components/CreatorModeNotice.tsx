import { useTranslation } from '@/hooks/useTranslation';
import { Info } from 'lucide-react';

interface CreatorModeNoticeProps {
    className?: string;
}

const CreatorModeNotice = ({ className = '' }: CreatorModeNoticeProps) => {
    const { t } = useTranslation();

    return (
        <div className={`max-w-3xl mx-auto p-4 sm:p-5 rounded-xl border border-creator/20 bg-creator/5 backdrop-blur-sm ${className}`}>
            <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-creator shrink-0 mt-0.5" />
                <div className="flex-1">
                    <h3 className="text-sm font-medium text-foreground/90 mb-1">
                        {t('creatorModeStatusTitle')}
                    </h3>
                    <p className="text-xs text-foreground/70 leading-relaxed mb-2">
                        {t('creatorModeStatusMessage')}
                    </p>
                    <p className="text-xs text-foreground/50 leading-relaxed">
                        {t('creatorModeStatusNote')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CreatorModeNotice;
