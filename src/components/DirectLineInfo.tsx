import { Mail, MessageCircle, MapPin, Clock } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import RotatingGlobe from './RotatingGlobe';

interface DirectLineInfoProps {
    mode: 'institutional' | 'creator';
}

const DirectLineInfo = ({ mode }: DirectLineInfoProps) => {
    const { t } = useTranslation();

    const handleEmailCopy = async () => {
        try {
            await navigator.clipboard.writeText('letsquickserveit@gmail.com');
        } catch (error) {
            console.error('Failed to copy email:', error);
        }
    };

    const whatsappNumber = '916388224877';
    const whatsappMessage = mode === 'institutional'
        ? 'Hello quickserveit, I need institutional documentation services.'
        : 'Hello quickserveit, I need creator production services.';

    return (
        <div className="space-y-6">
            {/* Direct Contact Methods */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-border/20">
                <h3 className={`text-xl sm:text-2xl font-display mb-6 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>
                    Direct Line
                </h3>

                <div className="space-y-4">
                    {/* WhatsApp */}
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${mode === 'institutional'
                            ? 'border-institutional/20 hover:border-institutional/40 hover:bg-institutional/5'
                            : 'border-creator/20 hover:border-creator/40 hover:bg-creator/5'
                            }`}
                    >
                        <MessageCircle className={`w-5 h-5 mt-0.5 shrink-0 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                        <div className="flex-1 min-w-0">
                            <div className="font-medium mb-1">WhatsApp</div>
                            <div className="text-sm text-foreground/60">+91 63882 24877</div>
                            <div className="text-xs text-foreground/40 mt-1">Fastest response</div>
                        </div>
                    </a>

                    {/* Email */}
                    <button
                        onClick={handleEmailCopy}
                        className={`w-full flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] text-left ${mode === 'institutional'
                            ? 'border-border/20 hover:border-institutional/40 hover:bg-institutional/5'
                            : 'border-border/20 hover:border-creator/40 hover:bg-creator/5'
                            }`}
                    >
                        <Mail className={`w-5 h-5 mt-0.5 shrink-0 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                        <div className="flex-1 min-w-0">
                            <div className="font-medium mb-1">Email</div>
                            <div className="text-sm text-foreground/60 truncate">letsquickserveit@gmail.com</div>
                            <div className="text-xs text-foreground/40 mt-1">Click to copy</div>
                        </div>
                    </button>
                </div>
            </div>

            {/* 3D Rotating Globe - Desktop Only */}
            <div className="my-8">
                <RotatingGlobe />
            </div>

            {/* Location & Hours */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-border/20">
                <h3 className="text-lg font-display mb-4">Information</h3>

                <div className="space-y-4">
                    {/* Location */}
                    <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-foreground/40" />
                        <div>
                            <div className="font-medium text-sm mb-1">Location</div>
                            <div className="text-sm text-foreground/60">Gorakhpur, Uttar Pradesh, India</div>
                        </div>
                    </div>

                    {/* Working Hours */}
                    <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 mt-0.5 shrink-0 text-foreground/40" />
                        <div>
                            <div className="font-medium text-sm mb-1">Working Hours</div>
                            <div className="text-sm text-foreground/60">Mon-Sat: 10:00 AM - 4:00 PM IST</div>
                            <div className="text-xs text-foreground/40 mt-1">Messages accepted 24/7</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trust Badge */}
            <div className={`p-4 rounded-xl border-l-4 ${mode === 'institutional'
                ? 'bg-institutional/5 border-institutional/40'
                : 'bg-creator/5 border-creator/40'
                }`}>
                <p className="text-xs text-foreground/70 leading-relaxed">
                    <span className="font-medium">Privacy Guaranteed:</span> All communications are confidential and handled with strict data protection protocols.
                </p>
            </div>
        </div>
    );
};

export default DirectLineInfo;
