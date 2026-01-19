import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslation } from '@/hooks/useTranslation';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';

const Privacy = () => {
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
                <title>{t('brandName')} | Privacy Policy</title>
                <meta name="description" content="Learn how QuickServe IT collects, uses, and protects your personal information. We prioritize data confidentiality and security in all our services." />
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
                            {t('privacyTitle')}
                        </h1>
                        <p className="text-base md:text-lg text-foreground/50 max-w-2xl mx-auto leading-relaxed">
                            {t('privacyPageSubtitle')}
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="pb-32 px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="prose prose-sm md:prose-base max-w-none space-y-8 text-foreground/80">
                            <p className="text-foreground/50 text-sm">
                                {t('privacyLastUpdated')}
                            </p>

                            <section className="space-y-3">
                                <h2 className={`text-lg sm:text-xl md:text-2xl font-display transition-colors ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
                                    }`}>
                                    {t('privacySection1Title')}
                                </h2>
                                <p className="leading-relaxed text-sm sm:text-base">{t('privacySection1Content')}</p>
                                <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                                    {(mode === 'institutional' ? t('privacySection1ListInstitutional') : t('privacySection1ListCreator')).split('|').map((item, index) => (
                                        <li key={index} className="leading-relaxed">{item}</li>
                                    ))}
                                </ul>
                            </section>

                            <section className="space-y-3">
                                <h2 className={`text-lg sm:text-xl md:text-2xl font-display transition-colors ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
                                    }`}>
                                    {t('privacySection2Title')}
                                </h2>
                                <p className="leading-relaxed text-sm sm:text-base">
                                    {mode === 'institutional' ? t('privacySection2ContentInstitutional') : t('privacySection2ContentCreator')}
                                </p>
                            </section>

                            <section className="space-y-3">
                                <h2 className={`text-lg sm:text-xl md:text-2xl font-display transition-colors ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
                                    }`}>
                                    {t('privacySection3Title')}
                                </h2>
                                <p className="leading-relaxed text-sm sm:text-base">{t('privacySection3Content')}</p>
                                <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                                    {t('privacySection3List').split('|').map((item, index) => (
                                        <li key={index} className="leading-relaxed">{item}</li>
                                    ))}
                                </ul>
                            </section>

                            <section className="space-y-3">
                                <h2 className={`text-lg sm:text-xl md:text-2xl font-display transition-colors ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
                                    }`}>
                                    {t('privacySection4Title')}
                                </h2>
                                <p className="leading-relaxed text-sm sm:text-base">
                                    {mode === 'institutional' ? t('privacySection4ContentInstitutional') : t('privacySection4ContentCreator')}
                                </p>
                            </section>

                            <section className="space-y-3">
                                <h2 className={`text-lg sm:text-xl md:text-2xl font-display transition-colors ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
                                    }`}>
                                    {t('privacySection5Title')}
                                </h2>
                                <p className="leading-relaxed text-sm sm:text-base">{t('privacySection5Content')}</p>
                            </section>

                            {/* Contact CTA */}
                            <div className="mt-16 text-center pt-8 border-t border-border">
                                <p className="text-foreground/50 mb-6">
                                    {t('questionsAboutPrivacy')}
                                </p>
                                <a
                                    href={`https://wa.me/916388224877?text=${encodeURIComponent('Hello quickserveit, I have a question about your privacy policy.')}`}
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

export default Privacy;
