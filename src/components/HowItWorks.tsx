import { MessageCircle, FileText, CheckCircle } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

interface HowItWorksProps {
    mode: 'institutional' | 'creator';
}

const HowItWorks = ({ mode }: HowItWorksProps) => {
    const { t } = useTranslation();

    const steps = [
        {
            step: '01',
            title: t('processStep1Title'), // Contact
            description: t('processStep1Desc'),
            icon: MessageCircle
        },
        {
            step: '02',
            title: t('processStep2Title'), // Requirement Discussion
            description: t('processStep2Desc'),
            icon: FileText
        },
        {
            step: '03',
            title: t('processStep3Title'), // Delivery
            description: t('processStep3Desc'),
            icon: CheckCircle
        }
    ];

    return (
        <section className="py-24 px-6 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-display mb-4">
                        {t('howItWorks')}
                    </h2>
                    <p className="text-foreground/50 max-w-xl mx-auto">
                        {mode === 'institutional'
                            ? t('servicesInstSubtitle')
                            : t('servicesCreatorSubtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {steps.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl glass-card border border-border/20 group hover:border-white/20 transition-all duration-300"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className={`text-sm font-mono ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>
                                    {item.step}
                                </span>
                                <item.icon className="w-5 h-5 text-foreground/20 group-hover:text-foreground/40 transition-colors" />
                            </div>

                            <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                            <p className="text-sm text-foreground/50 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
