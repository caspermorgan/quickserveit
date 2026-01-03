import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';

const Terms = () => {
    const { mode, setHasEntered } = useMode();
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleReturn = () => {
        setHasEntered(false);
        navigate('/');
    };

    return (
        <>
            <Helmet>
                <title>{t('brandName')} | Terms & Conditions</title>
                <meta name="description" content="Read the terms and conditions for using QuickServe IT services. Understand your rights, responsibilities, and our service commitments." />
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
                <section className="pt-32 pb-16 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl md:text-5xl font-display tracking-wide mb-4 text-foreground">
                            {t('termsTitle')}
                        </h1>
                        <p className="text-base md:text-lg text-foreground/50 max-w-2xl mx-auto leading-relaxed">
                            {t('termsPageSubtitle')}
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="pb-32 px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="prose prose-sm md:prose-base max-w-none space-y-8 text-foreground/80">
                            <p className="text-foreground/50 text-sm">
                                {t('termsLastUpdated')}
                            </p>

                            <section className="space-y-3">
                                <h2 className={`text-lg sm:text-xl md:text-2xl font-display transition-colors ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
                                    }`}>
                                    {t('termsSection1Title')}
                                </h2>
                                <p className="leading-relaxed text-sm sm:text-base">
                                    {mode === 'institutional' ? t('termsSection1ContentInstitutional') : t('termsSection1ContentCreator')}
                                </p>
                            </section>

                            <section className="space-y-3">
                                <h2 className={`text-lg sm:text-xl md:text-2xl font-display transition-colors ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
                                    }`}>
                                    {t('termsSection2Title')}
                                </h2>
                                <p className="leading-relaxed text-sm sm:text-base">{t('termsSection2Content')}</p>
                                <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                                    {(mode === 'institutional' ? t('termsSection2ListInstitutional') : t('termsSection2ListCreator')).split('|').map((item, index) => (
                                        <li key={index} className="leading-relaxed">{item}</li>
                                    ))}
                                </ul>
                            </section>

                            <section className="space-y-3">
                                <h2 className={`text-lg sm:text-xl md:text-2xl font-display transition-colors ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
                                    }`}>
                                    {mode === 'institutional' ? t('termsSection3TitleInstitutional') : t('termsSection3TitleCreator')}
                                </h2>
                                <p className="leading-relaxed text-sm sm:text-base">
                                    {mode === 'institutional' ? t('termsSection3ContentInstitutional') : t('termsSection3ContentCreator')}
                                </p>
                                <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                                    {(mode === 'institutional' ? t('termsSection3ListInstitutional') : t('termsSection3ListCreator')).split('|').map((item, index) => (
                                        <li key={index} className="leading-relaxed">{item}</li>
                                    ))}
                                </ul>
                            </section>

                            <section className="space-y-3">
                                <h2 className={`text-lg sm:text-xl md:text-2xl font-display transition-colors ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
                                    }`}>
                                    {t('termsSection4Title')}
                                </h2>
                                <p className="leading-relaxed text-sm sm:text-base">{t('termsSection4Content')}</p>
                            </section>

                            <section className="space-y-3">
                                <h2 className={`text-lg sm:text-xl md:text-2xl font-display transition-colors ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
                                    }`}>
                                    {t('termsSection5Title')}
                                </h2>
                                <p className="leading-relaxed text-sm sm:text-base">
                                    {mode === 'institutional' ? t('termsSection5ContentInstitutional') : t('termsSection5ContentCreator')}
                                </p>
                            </section>

                            <section className="space-y-3">
                                <h2 className={`text-lg sm:text-xl md:text-2xl font-display transition-colors ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
                                    }`}>
                                    {t('termsSection6Title')}
                                </h2>
                                <p className="leading-relaxed text-sm sm:text-base">
                                    {mode === 'institutional' ? t('termsSection6ContentInstitutional') : t('termsSection6ContentCreator')}
                                </p>
                            </section>

                            <section className="space-y-3">
                                <h2 className={`text-lg sm:text-xl md:text-2xl font-display transition-colors ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
                                    }`}>
                                    {t('termsSection7Title')}
                                </h2>
                                <p className="leading-relaxed text-sm sm:text-base">{t('termsSection7Content')}</p>
                            </section>

                            {/* Contact CTA */}
                            <div className="mt-16 text-center pt-8 border-t border-border">
                                <p className="text-foreground/50 mb-6">
                                    {t('questionsAboutTerms')}
                                </p>
                                <a
                                    href={`https://wa.me/916388224877?text=${encodeURIComponent('Hello quickserveit, I have a question about your terms and conditions.')}`}
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

export default Terms;
