import { useTranslation } from '@/hooks/useTranslation';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Terms = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-6">
                {/* Navigation Buttons */}
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                    </button>
                    <button
                        onClick={() => navigate('/privacy')}
                        className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
                    >
                        Next: Privacy Policy
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                <h1 className="text-3xl md:text-4xl font-display mb-8">
                    {t('termsTitle')}
                </h1>

                <div className="prose prose-sm md:prose-base max-w-none space-y-6 text-foreground/80">
                    <p className="text-foreground/60 text-sm">
                        {t('termsLastUpdated')}
                    </p>

                    <section>
                        <h2 className="text-xl md:text-2xl font-display text-foreground mb-3">
                            {t('termsSection1Title')}
                        </h2>
                        <p className="leading-relaxed">{t('termsSection1Content')}</p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-display text-foreground mb-3">
                            {t('termsSection2Title')}
                        </h2>
                        <p className="leading-relaxed mb-3">{t('termsSection2Content')}</p>
                        <ul className="list-disc pl-6 space-y-2">
                            {t('termsSection2List').split('|').map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-display text-foreground mb-3">
                            {t('termsSection3Title')}
                        </h2>
                        <p className="leading-relaxed mb-3">{t('termsSection3Content')}</p>
                        <ul className="list-disc pl-6 space-y-2">
                            {t('termsSection3List').split('|').map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-display text-foreground mb-3">
                            {t('termsSection4Title')}
                        </h2>
                        <p className="leading-relaxed">{t('termsSection4Content')}</p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-display text-foreground mb-3">
                            {t('termsSection5Title')}
                        </h2>
                        <p className="leading-relaxed">{t('termsSection5Content')}</p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-display text-foreground mb-3">
                            {t('termsSection6Title')}
                        </h2>
                        <p className="leading-relaxed">{t('termsSection6Content')}</p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-display text-foreground mb-3">
                            {t('termsSection7Title')}
                        </h2>
                        <p className="leading-relaxed">{t('termsSection7Content')}</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Terms;
