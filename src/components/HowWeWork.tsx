import { useTranslation } from '@/hooks/useTranslation';
import {
    ChatIcon,
    DocumentIcon,
    CheckCircleIcon,
    RocketIcon,
    HeadphonesIcon,
    LightbulbIcon,
    PaletteIcon,
    TargetIcon,
    ZapIcon,
    AwardIcon
} from './IconSystem';

interface HowWeWorkProps {
    mode: 'institutional' | 'creator';
}

const HowWeWork = ({ mode }: HowWeWorkProps) => {
    const { t } = useTranslation();

    // Icons for institutional steps
    const institutionalIcons = [ChatIcon, DocumentIcon, PaletteIcon, CheckCircleIcon, RocketIcon];

    // Icons for creator steps
    const creatorIcons = [ChatIcon, LightbulbIcon, TargetIcon, ZapIcon, AwardIcon];

    // Define steps based on mode prop (no internal state)
    const steps = mode === 'institutional'
        ? [
            { title: t('instStep1Title'), desc: t('instStep1Desc'), icon: institutionalIcons[0] },
            { title: t('instStep2Title'), desc: t('instStep2Desc'), icon: institutionalIcons[1] },
            { title: t('instStep3Title'), desc: t('instStep3Desc'), icon: institutionalIcons[2] },
            { title: t('instStep4Title'), desc: t('instStep4Desc'), icon: institutionalIcons[3] },
            { title: t('instStep5Title'), desc: t('instStep5Desc'), icon: institutionalIcons[4] },
        ]
        : [
            { title: t('creatorStep1Title'), desc: t('creatorStep1Desc'), icon: creatorIcons[0] },
            { title: t('creatorStep2Title'), desc: t('creatorStep2Desc'), icon: creatorIcons[1] },
            { title: t('creatorStep3Title'), desc: t('creatorStep3Desc'), icon: creatorIcons[2] },
            { title: t('creatorStep4Title'), desc: t('creatorStep4Desc'), icon: creatorIcons[3] },
            { title: t('creatorStep5Title'), desc: t('creatorStep5Desc'), icon: creatorIcons[4] },
        ];

    const notes = mode === 'institutional'
        ? t('instWorkNotes')
        : t('creatorWorkNotes');

    return (
        <section className="w-full bg-background/30 py-12 md:py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-display mb-3 text-foreground">
                        {t('howWeWorkTitle')}
                    </h2>
                    <p className="text-sm md:text-base text-foreground/60 max-w-2xl mx-auto">
                        {t('howWeWorkSubtitle')}
                    </p>
                </div>

                {/* Horizontal Scrollable Steps */}
                <div className="relative -mx-6 px-6">
                    {/* Left Gradient Fade */}
                    <div className="absolute left-0 top-0 bottom-4 w-12 bg-gradient-to-r from-background/80 via-background/40 to-transparent pointer-events-none z-10"></div>

                    {/* Right Gradient Fade */}
                    <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-background/80 via-background/40 to-transparent pointer-events-none z-10"></div>

                    <div className="overflow-x-auto overflow-y-hidden pb-4 scrollbar-hide">
                        <div className="flex gap-5 md:gap-6 px-6">
                            {steps.map((step, index) => {
                                const Icon = step.icon;
                                const isInstitutional = mode === 'institutional';

                                return (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 w-72 md:w-80 group"
                                    >
                                        <div className="relative h-full bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border border-border/20 rounded-2xl p-6 hover:border-border/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                            {/* Gradient Accent - Only visible on hover */}
                                            <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isInstitutional
                                                ? 'from-institutional/60 via-institutional to-institutional/60'
                                                : 'from-creator/60 via-creator to-creator/60'
                                                }`}></div>

                                            {/* Icon and Number */}
                                            <div className="flex items-center gap-3 mb-5">
                                                <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${isInstitutional
                                                    ? 'from-institutional/20 to-institutional/5'
                                                    : 'from-creator/20 to-creator/5'
                                                    } border ${isInstitutional
                                                        ? 'border-institutional/20'
                                                        : 'border-creator/20'
                                                    } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                                    <Icon className={`w-6 h-6 ${isInstitutional
                                                        ? 'text-institutional'
                                                        : 'text-creator'
                                                        }`} />
                                                </div>

                                                <div className="flex-1 flex items-center gap-2">
                                                    <div className="h-px flex-1 bg-gradient-to-r from-border/40 via-border/20 to-transparent"></div>
                                                    <span className="text-xs font-mono text-foreground/30 font-medium">
                                                        {String(index + 1).padStart(2, '0')}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Step Content */}
                                            <h3 className="text-lg font-semibold text-foreground mb-3 leading-tight">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-foreground/60 leading-relaxed">
                                                {step.desc}
                                            </p>

                                            {/* Bottom Decoration */}
                                            <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-border/10 to-transparent"></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Notes Section */}
                <div className="max-w-4xl mx-auto mt-10 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent rounded-xl blur-xl"></div>
                    <div className="relative p-6 rounded-xl bg-foreground/5 border border-border/20 backdrop-blur-sm">
                        <div className="flex items-start gap-3">
                            <HeadphonesIcon className="w-5 h-5 text-foreground/40 flex-shrink-0 mt-0.5" />
                            <p className="text-xs md:text-sm text-foreground/50 leading-relaxed">
                                <span className="font-medium text-foreground/60">Note: </span>
                                {notes}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HowWeWork;
