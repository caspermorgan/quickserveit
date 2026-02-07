import { Clock, Mail, MapPin, MessageCircle } from 'lucide-react';

interface DirectLineInfoProps {
    mode: 'institutional' | 'creator' | 'portfolio';
}

const DirectLineInfo = ({ mode }: DirectLineInfoProps) => {
    const whatsappNumber = '916388224877';
    const whatsappMessage = mode === 'institutional'
        ? 'Hello quickserveit, I need institutional documentation services.'
        : 'Hello quickserveit, I need creator production services.';

    const handleWhatsApp = () => {
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const handleEmailCopy = async () => {
        try {
            await navigator.clipboard.writeText('letsquickserveit@gmail.com');
        } catch (error) {
            // Silent fail - user can still see the email
        }
    };

    return (
        <div
            className={`backdrop-blur-xl bg-white/[0.02] border rounded-2xl p-6 sm:p-8 h-full ${mode === 'institutional'
                    ? 'border-institutional/20'
                    : 'border-creator/20'
                }`}
            style={{
                boxShadow:
                    mode === 'institutional'
                        ? '0 20px 60px rgba(234, 179, 8, 0.08)'
                        : '0 20px 60px rgba(34, 211, 238, 0.08)',
            }}
        >
            <h3 className="text-xl sm:text-2xl font-display mb-6">
                Direct <span className={mode === 'institutional' ? 'text-institutional' : 'text-creator'}>Contact</span>
            </h3>

            <div className="space-y-5">
                {/* Email */}
                <div className="flex items-start gap-4">
                    <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'
                            }`}
                    >
                        <Mail className={`w-5 h-5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground/60 mb-1">Email</p>
                        <button
                            onClick={handleEmailCopy}
                            className="text-sm font-mono text-foreground hover:text-institutional transition-colors break-all text-left"
                        >
                            letsquickserveit@gmail.com
                        </button>
                    </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                    <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'
                            }`}
                    >
                        <MessageCircle className={`w-5 h-5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-foreground/60 mb-1">WhatsApp</p>
                        <button
                            onClick={handleWhatsApp}
                            className={`text-sm font-medium transition-colors ${mode === 'institutional'
                                    ? 'text-institutional hover:text-institutional/80'
                                    : 'text-creator hover:text-creator/80'
                                }`}
                        >
                            Chat on WhatsApp →
                        </button>
                    </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                    <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'
                            }`}
                    >
                        <MapPin className={`w-5 h-5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-foreground/60 mb-1">Location</p>
                        <p className="text-sm text-foreground">Gorakhpur, Uttar Pradesh, India</p>
                    </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                    <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'
                            }`}
                    >
                        <Clock className={`w-5 h-5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-foreground/60 mb-1">Working Hours</p>
                        <p className="text-sm text-foreground">Mon-Sat: 10 AM - 4 PM IST</p>
                        <p className="text-xs text-foreground/50 mt-1">We respond within 2-4 hours</p>
                    </div>
                </div>
            </div>

            {/* Trust Badge */}
            <div className={`mt-6 pt-6 border-t ${mode === 'institutional' ? 'border-institutional/10' : 'border-creator/10'}`}>
                <p className="text-xs text-foreground/50 text-center italic">
                    All communications are encrypted and confidential
                </p>
            </div>
        </div>
    );
};

export default DirectLineInfo;
