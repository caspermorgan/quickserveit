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

    const faqData: FAQItem[] = [
        {
            question: "What documents do I need for online forms?",
            answer: "For institutional services, you'll typically need scanned copies of relevant certificates, ID proofs, and any specific documents required by the form. For quick assistance, you can share documents directly via WhatsApp, and we'll guide you through the process. All documents are handled with strict confidentiality."
        },
        {
            question: "What are your operating hours?",
            answer: "Our support hours are 10:00 AM to 4:00 PM IST, Monday through Saturday. However, you can send us a message anytime via WhatsApp, and we'll respond during our next available support window. For urgent requests, please mention 'urgent' in your message."
        },
        {
            question: "Can I send documents via WhatsApp for printing?",
            answer: "Yes! WhatsApp is our preferred communication channel. You can send your documents directly to our WhatsApp number, and we'll handle printing, formatting, or any required processing. We'll confirm receipt and provide realistic timelines based on your requirements."
        },
        {
            question: "How long does it take to process my request?",
            answer: "Processing time varies based on the service complexity. Simple tasks like printing or basic form filling can be completed within a few hours during support hours. More complex projects like exam documentation or scholarship applications may take 1-3 business days. We always provide realistic timelines upfront—no false promises."
        },
        {
            question: "Is my data kept confidential?",
            answer: "Absolutely. Data confidentiality is our top priority. All documents and information you share with us are handled with strict confidentiality protocols. We do not store, share, or use your data for any purpose other than completing your requested service. Your trust is paramount to us."
        }
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
                            Frequently Asked Questions
                        </h1>
                        <p className="text-base md:text-lg text-foreground/50 max-w-2xl mx-auto leading-relaxed">
                            Quick answers to common questions about our services
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
                                Still have questions? We're here to help.
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
                                Contact Us on WhatsApp
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
