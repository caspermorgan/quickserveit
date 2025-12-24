import { useTranslation } from '@/hooks/useTranslation';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

const Disclaimer = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-6">
                {/* Navigation Buttons */}
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={() => navigate('/privacy')}
                        className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                    </button>
                    <button
                        onClick={() => navigate('/home')}
                        className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
                    >
                        Go to Menu
                        <Home className="w-4 h-4" />
                    </button>
                </div>

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
