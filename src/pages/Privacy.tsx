import { useTranslation } from '@/hooks/useTranslation';

const Privacy = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-background pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-3xl md:text-4xl font-display mb-8">
                    {t('privacyTitle')}
                </h1>

                <div className="prose prose-sm md:prose-base max-w-none space-y-6 text-foreground/80">
                    <p className="text-foreground/60 text-sm">
                        {t('privacyLastUpdated')}
                    </p>

                    <section>
                        <h2 className="text-xl md:text-2xl font-display text-foreground mb-3">
                            {t('privacySection1Title')}
                        </h2>
                        <p className="leading-relaxed mb-3">{t('privacySection1Content')}</p>
                        <ul className="list-disc pl-6 space-y-2">
                            {t('privacySection1List').split('|').map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-display text-foreground mb-3">
                            {t('privacySection2Title')}
                        </h2>
                        <p className="leading-relaxed">{t('privacySection2Content')}</p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-display text-foreground mb-3">
                            {t('privacySection3Title')}
                        </h2>
                        <p className="leading-relaxed mb-3">{t('privacySection3Content')}</p>
                        <ul className="list-disc pl-6 space-y-2">
                            {t('privacySection3List').split('|').map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-display text-foreground mb-3">
                            {t('privacySection4Title')}
                        </h2>
                        <p className="leading-relaxed">{t('privacySection4Content')}</p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-display text-foreground mb-3">
                            {t('privacySection5Title')}
                        </h2>
                        <p className="leading-relaxed">{t('privacySection5Content')}</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
