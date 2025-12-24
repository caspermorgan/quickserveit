import { useTranslation } from '@/hooks/useTranslation';

const Disclaimer = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-background pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-3xl md:text-4xl font-display mb-8">
                    {t('disclaimerTitle')}
                </h1>

                <div className="prose prose-sm md:prose-base max-w-none space-y-6 text-foreground/80">
                    <p className="text-foreground/60 text-sm">
                        {t('disclaimerLastUpdated')}
                    </p>

                    <section>
                        <h2 className="text-xl md:text-2xl font-display text-foreground mb-3">
                            {t('disclaimerSection1Title')}
                        </h2>
                        <p className="leading-relaxed">{t('disclaimerSection1Content')}</p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-display text-foreground mb-3">
                            {t('disclaimerSection2Title')}
                        </h2>
                        <p className="leading-relaxed">{t('disclaimerSection2Content')}</p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-display text-foreground mb-3">
                            {t('disclaimerSection3Title')}
                        </h2>
                        <p className="leading-relaxed">{t('disclaimerSection3Content')}</p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-display text-foreground mb-3">
                            {t('disclaimerSection4Title')}
                        </h2>
                        <p className="leading-relaxed">{t('disclaimerSection4Content')}</p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-display text-foreground mb-3">
                            {t('disclaimerSection5Title')}
                        </h2>
                        <p className="leading-relaxed">{t('disclaimerSection5Content')}</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Disclaimer;
