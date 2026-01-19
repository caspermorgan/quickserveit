import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslation } from '@/hooks/useTranslation';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';

const Disclaimer = () => {
    const { mode, setHasEntered } = useMode();
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleReturn = () => {
        setHasEntered(false);
        navigate('/');
    };

    // Centralized scroll-triggered animations
    useScrollAnimation({ staggerDelay: 100 });

    return (
        <>
            <Helmet>
                <title>{t('brandName')} | Disclaimer</title>
                <meta name="description" content="Important disclaimers about QuickServe IT services. Understand our service scope, limitations, and responsibilities." />
            </Helmet>

            <CursorLight mode={mode} />
            <FilmGrain />

            <FloatingNavbar
                mode={mode}
                onReturn={handleReturn}
                isVisible={true}
            />

            <main className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl md:text-5xl font-display tracking-wide mb-4 text-foreground">
                            {t('disclaimerTitle')}
                        </h1>
                        <p className="text-base md:text-lg text-foreground/50 max-w-2xl mx-auto leading-relaxed">
                            {t('disclaimerPageSubtitle')}
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="pb-32 px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="prose prose-sm md:prose-base max-w-none space-y-8 text-foreground/80">
                            <p className="text-foreground/50 text-sm">
                                {t('disclaimerLastUpdated')}
                            </p>

                            <section className="space-y-3">
                                <h2 className={`text-lg sm:text-xl md:text-2xl font-display transition-colors ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
                                    }`}>
                                    {mode === 'institutional' ? t('disclaimerSection1TitleInstitutional') : t('disclaimerSection1TitleCreator')}
                                </h2>
                                <p className="leading-relaxed text-sm sm:text-base">
                                    {mode === 'institutional' ? t('disclaimerSection1ContentInstitutional') : t('disclaimerSection1ContentCreator')}
                                </p>
                            </section>

                            <section className="space-y-3">
                                <h2 className={`text-lg sm:text-xl md:text-2xl font-display transition-colors ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
                                    }`}>
                                    {t('disclaimerSection2Title')}
                                </h2>
                                <p className="leading-relaxed text-sm sm:text-base">{t('disclaimerSection2Content')}</p>
                            </section>

                            <section className="space-y-3">
                                <h2 className={`text-lg sm:text-xl md:text-2xl font-display transition-colors ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
                                    }`}>
                                    {t('disclaimerSection3Title')}
                                </h2>
                                <p className="leading-relaxed text-sm sm:text-base">
                                    {mode === 'institutional' ? t('disclaimerSection3ContentInstitutional') : t('disclaimerSection3ContentCreator')}
                                </p>
                            </section>

                            <section className="space-y-3">
                                <h2 className={`text-lg sm:text-xl md:text-2xl font-display transition-colors ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
                                    }`}>
                                    {t('disclaimerSection4Title')}
                                </h2>
                                <p className="leading-relaxed text-sm sm:text-base">{t('disclaimerSection4Content')}</p>
                            </section>

                            <section className="space-y-3">
                                <h2 className={`text-lg sm:text-xl md:text-2xl font-display transition-colors ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
                                    }`}>
                                    {t('disclaimerSection5Title')}
                                </h2>
                                <p className="leading-relaxed text-sm sm:text-base">{t('disclaimerSection5Content')}</p>
                            </section>

                            {/* Contact CTA */}
                            <div className="mt-16 text-center pt-8 border-t border-border">
                                <p className="text-foreground/50 mb-6">
                                    {t('questionsAboutDisclaimer')}
                                </p>
                                <a
                                    href={`https://wa.me/916388224877?text=${encodeURIComponent('Hello quickserveit, I have a question about your disclaimer.')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${mode === 'institutional'
                                        ? 'bg-institutional text-black hover:bg-institutional/90'
                                        : 'bg-creator text-black hover:bg-creator/90'
                                        }`}
                                >
                                    {t('contactWhatsApp')}
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer mode={mode} />
        </>
    );
};

export default Disclaimer;
