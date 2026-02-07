import { useTranslation } from '@/hooks/useTranslation';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Shield, MessageCircle } from 'lucide-react';

interface PortfolioAccessDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

const PortfolioAccessDialog = ({ isOpen, onClose }: PortfolioAccessDialogProps) => {
    const { t } = useTranslation();

    const whatsappNumber = '916388224877';
    const whatsappMessage = `Hello QuickServe IT, I am interested in learning more about your services and would like to discuss your portfolio work.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-creator/10 flex items-center justify-center">
                            <Shield className="w-5 h-5 text-creator" />
                        </div>
                        <DialogTitle className="text-lg">{t('portfolioAccessTitle')}</DialogTitle>
                    </div>
                    <DialogDescription className="text-sm text-foreground/70 leading-relaxed pt-2">
                        {t('portfolioAccessMessage')}
                    </DialogDescription>
                </DialogHeader>

                <div className="mt-4 p-4 rounded-lg bg-foreground/5 border border-border/20">
                    <p className="text-xs text-foreground/60 leading-relaxed">
                        {t('portfolioAccessNote')}
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <button
                        onClick={onClose}
                        className="flex-1 px-4 py-2.5 rounded-lg border border-border hover:bg-foreground/5 transition-colors text-sm font-medium"
                    >
                        {t('portfolioUnderstand')}
                    </button>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-creator text-background hover:bg-creator/90 transition-colors text-sm font-medium"
                    >
                        <MessageCircle className="w-4 h-4" />
                        {t('portfolioContactUs')}
                    </a>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PortfolioAccessDialog;
