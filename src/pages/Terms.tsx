import { useTranslation } from '@/hooks/useTranslation';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Terms = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background pt-20 pb-16">
            <div className="max-w-4xl mx-auto px-5 sm:px-6">
                {/* Navigation Buttons - Sticky on mobile */}
                <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm py-4 -mx-5 px-5 sm:-mx-6 sm:px-6 mb-6 border-b border-border/10">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors duration-200 min-h-[44px] px-3 -ml-3 rounded-lg hover:bg-foreground/5 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                            aria-label="Go back"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span className="hidden sm:inline">{t('back') || 'Back'}</span>
                        </button>
                        <button
                            onClick={() => navigate('/privacy')}
                            className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors duration-200 min-h-[44px] px-3 -mr-3 rounded-lg hover:bg-foreground/5 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                            aria-label="Go to Privacy Policy"
                        >
                            <span className="hidden sm:inline">{t('next') || 'Next'}:</span> {t('privacyPolicy')}
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-display mb-6 sm:mb-8">
                    {t('termsTitle')}
                </h1>

                <div className="prose prose-sm md:prose-base max-w-none space-y-8 text-foreground/80">
                    <p className="text-foreground/50 text-sm">
                        {t('termsLastUpdated')}
                    </p>

                    <section className="space-y-3">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-display text-foreground">
                            {t('termsSection1Title')}
                        </h2>
                        <p className="leading-relaxed text-sm sm:text-base">{t('termsSection1Content')}</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-display text-foreground">
                            {t('termsSection2Title')}
                        </h2>
                        <p className="leading-relaxed text-sm sm:text-base">{t('termsSection2Content')}</p>
                        <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                            {t('termsSection2List').split('|').map((item, index) => (
                                <li key={index} className="leading-relaxed">{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-display text-foreground">
                            {t('termsSection3Title')}
                        </h2>
                        <p className="leading-relaxed text-sm sm:text-base">{t('termsSection3Content')}</p>
                        <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                            {t('termsSection3List').split('|').map((item, index) => (
                                <li key={index} className="leading-relaxed">{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-display text-foreground">
                            {t('termsSection4Title')}
                        </h2>
                        <p className="leading-relaxed text-sm sm:text-base">{t('termsSection4Content')}</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-display text-foreground">
                            {t('termsSection5Title')}
                        </h2>
                        <p className="leading-relaxed text-sm sm:text-base">{t('termsSection5Content')}</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-display text-foreground">
                            {t('termsSection6Title')}
                        </h2>
                        <p className="leading-relaxed text-sm sm:text-base">{t('termsSection6Content')}</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-display text-foreground">
                            {t('termsSection7Title')}
                        </h2>
                        <p className="leading-relaxed text-sm sm:text-base">{t('termsSection7Content')}</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Terms;
