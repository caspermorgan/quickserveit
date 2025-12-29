import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

const FAQ = () => {
    const { mode, setHasEntered } = useMode();
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleReturn = () => {
        setHasEntered(false);
        navigate('/');
    };

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData: FAQItem[] = mode === 'institutional'
        ? [
            { question: t('faqInstQuestion1'), answer: t('faqInstAnswer1') },
            { question: t('faqInstQuestion2'), answer: t('faqInstAnswer2') },
            { question: t('faqInstQuestion3'), answer: t('faqInstAnswer3') },
            { question: t('faqInstQuestion4'), answer: t('faqInstAnswer4') },
            { question: t('faqInstQuestion5'), answer: t('faqInstAnswer5') }
        ]
        : [
            { question: t('faqCreatorQuestion1'), answer: t('faqCreatorAnswer1') },
            { question: t('faqCreatorQuestion2'), answer: t('faqCreatorAnswer2') },
            { question: t('faqCreatorQuestion3'), answer: t('faqCreatorAnswer3') },
            { question: t('faqCreatorQuestion4'), answer: t('faqCreatorAnswer4') },
            { question: t('faqCreatorQuestion5'), answer: t('faqCreatorAnswer5') }
        ];


    return (
        <>
            <Helmet>
                <title>{t('brandName')} | FAQ - Frequently Asked Questions</title>
                <meta name="description" content="Find answers to common questions about QuickServe IT services, document requirements, operating hours, and confidentiality policies." />
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
                            {t('faqPageTitle')}
                        </h1>
                        <p className="text-base md:text-lg text-foreground/50 max-w-2xl mx-auto leading-relaxed">
                            {t('faqPageSubtitle')}
                        </p>
                    </div>
                </section>

                {/* FAQ Accordion Section */}
                <section className="pb-32 px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-4">
                            {faqData.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`border rounded-lg transition-all duration-300 ${mode === 'institutional'
                                        ? 'border-institutional/20 hover:border-institutional/40'
                                        : 'border-creator/20 hover:border-creator/40'
                                        }`}
                                    style={{
                                        background: openIndex === index
                                            ? mode === 'institutional'
                                                ? 'linear-gradient(135deg, rgba(43, 96%, 56%, 0.03) 0%, rgba(0, 0, 0, 0) 100%)'
                                                : 'linear-gradient(135deg, rgba(187, 100%, 42%, 0.03) 0%, rgba(0, 0, 0, 0) 100%)'
                                            : 'transparent'
                                    }}
                                >
                                    {/* Question */}
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full px-6 py-5 flex items-center justify-between text-left group"
                                        aria-expanded={openIndex === index}
                                    >
                                        <h3 className={`text-base md:text-lg font-medium text-foreground pr-4 transition-colors ${openIndex === index
                                            ? mode === 'institutional'
                                                ? 'text-institutional'
                                                : 'text-creator'
                                            : 'group-hover:text-foreground/80'
                                            }`}>
                                            {faq.question}
                                        </h3>
                                        <ChevronDown
                                            className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${openIndex === index
                                                ? mode === 'institutional'
                                                    ? 'text-institutional rotate-180'
                                                    : 'text-creator rotate-180'
                                                : 'text-foreground/40'
                                                }`}
                                        />
                                    </button>

                                    {/* Answer */}
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="px-6 pb-5 pt-0">
                                            <p className="text-sm md:text-base text-foreground/60 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Contact CTA */}
                        <div className="mt-16 text-center">
                            <p className="text-foreground/50 mb-6">
                                {t('stillHaveQuestions')}
                            </p>
                            <a
                                href={`https://wa.me/919876543210?text=${encodeURIComponent('Hello quickserveit, I have a question about your services.')}`}
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
                </section>
            </main>

            <Footer mode={mode} />
        </>
    );
};

export default FAQ;
