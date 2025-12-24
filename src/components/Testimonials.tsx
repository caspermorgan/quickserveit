import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Quote, ChevronDown } from 'lucide-react';

interface TestimonialsProps {
    mode: 'institutional' | 'creator';
}

const Testimonials = ({ mode }: TestimonialsProps) => {
    const { t } = useTranslation();

    return (
        <div className="max-w-6xl mx-auto">
            {/* Institutional Feedback Section */}
            <div className="mb-20">
                <h2 className="text-2xl md:text-3xl font-display mb-10 text-center">
                    {t('testimonialInstHeading')}
                </h2>
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <TestimonialCard
                        text={t('testimonialInst1Text')}
                        name={t('testimonialInst1Name')}
                        location={t('testimonialInst1Location')}
                        mode={mode}
                        type="institutional"
                    />
                    <TestimonialCard
                        text={t('testimonialInst2Text')}
                        name={t('testimonialInst2Name')}
                        location={t('testimonialInst2Location')}
                        mode={mode}
                        type="institutional"
                    />
                </div>
            </div>

            {/* Creator Feedback Section */}
            <div>
                <h2 className="text-2xl md:text-3xl font-display mb-10 text-center">
                    {t('testimonialCreatorHeading')}
                </h2>
                <div className="max-w-2xl mx-auto">
                    <TestimonialCard
                        text={t('testimonialCreator1Text')}
                        name={t('testimonialCreator1Name')}
                        location={t('testimonialCreator1Location')}
                        mode={mode}
                        type="creator"
                    />
                </div>
            </div>
        </div>
    );
};

interface TestimonialCardProps {
    text: string;
    name: string;
    location: string;
    mode: 'institutional' | 'creator';
    type: 'institutional' | 'creator';
}

const TestimonialCard = ({ text, name, location, mode, type }: TestimonialCardProps) => {
    const { t } = useTranslation();
    const [isExpanded, setIsExpanded] = useState(false);

    const accentColor = type === 'institutional'
        ? 'text-institutional'
        : 'text-creator';

    return (
        <div className="p-6 md:p-8 rounded-2xl glass-card border border-border/20 flex flex-col h-full">
            {/* Quote Icon */}
            <Quote className={`w-8 h-8 mb-4 ${accentColor} opacity-40`} />

            {/* Testimonial Text */}
            <div className="flex-grow mb-6">
                <p className={`text-sm md:text-base text-foreground/70 leading-relaxed transition-all duration-300 ${!isExpanded ? 'line-clamp-3' : ''}`}>
                    "{text}"
                </p>

                {/* Read More/Less Button */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`mt-3 text-xs md:text-sm font-medium ${accentColor} hover:opacity-70 transition-opacity flex items-center gap-1`}
                >
                    {isExpanded ? t('showLess') : t('readMore')}
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
            </div>

            {/* Attribution */}
            <div className="border-t border-border/20 pt-4">
                <div className={`font-medium text-sm md:text-base ${accentColor}`}>
                    {name}
                </div>
                <div className="text-xs md:text-sm text-foreground/40 mt-1">
                    {location}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
