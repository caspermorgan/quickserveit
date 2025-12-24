import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Quote, ChevronDown } from 'lucide-react';

interface TestimonialsProps {
    mode: 'institutional' | 'creator';
}

const Testimonials = ({ mode }: TestimonialsProps) => {
    const { t } = useTranslation();

    // STRICT SEGREGATION: Define testimonials separately
    const institutionalTestimonials = [
        {
            text: t('testimonialInst1Text'),
            preview: t('testimonialInst1Preview'),
            name: t('testimonialInst1Name'),
            location: t('testimonialInst1Location'),
        },
        {
            text: t('testimonialInst2Text'),
            preview: t('testimonialInst2Preview'),
            name: t('testimonialInst2Name'),
            location: t('testimonialInst2Location'),
        },
        {
            text: t('testimonialInst3Text'),
            preview: t('testimonialInst3Preview'),
            name: t('testimonialInst3Name'),
            location: t('testimonialInst3Location'),
        },
    ];

    const creatorTestimonials = [
        {
            text: t('testimonialCreator1Text'),
            name: t('testimonialCreator1Name'),
            role: t('testimonialCreator1Role'),
            location: t('testimonialCreator1Location'),
            preview: t('testimonialCreator1Preview'),
        },
        {
            text: t('testimonialCreator2Text'),
            name: t('testimonialCreator2Name'),
            role: t('testimonialCreator2Role'),
            location: t('testimonialCreator2Location'),
            preview: t('testimonialCreator2Preview'),
        },
        {
            text: t('testimonialCreator3Text'),
            name: t('testimonialCreator3Name'),
            role: t('testimonialCreator3Role'),
            location: t('testimonialCreator3Location'),
            preview: t('testimonialCreator3Preview'),
        },
    ];

    // STRICT CONDITIONAL RENDERING: Show only relevant testimonials
    const activeTestimonials = mode === 'institutional'
        ? institutionalTestimonials
        : creatorTestimonials;

    const heading = mode === 'institutional'
        ? t('testimonialInstHeading')
        : t('testimonialCreatorHeading');

    return (
        <div className="max-w-4xl mx-auto">
            {/* Single Heading - Mode Specific */}
            <h2 className="text-2xl md:text-3xl font-display mb-12 text-center">
                {heading}
            </h2>

            {/* Static Vertical Grid - No Horizontal Scroll */}
            <div className="grid grid-cols-1 gap-8 md:gap-10">
                {activeTestimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        text={testimonial.text}
                        preview={testimonial.preview}
                        name={testimonial.name}
                        role={testimonial.role}
                        location={testimonial.location}
                        mode={mode}
                    />
                ))}
            </div>
        </div>
    );
};

interface TestimonialCardProps {
    text: string;
    preview?: string;
    name: string;
    role?: string;
    location: string;
    mode: 'institutional' | 'creator';
}

const TestimonialCard = ({ text, preview, name, role, location, mode }: TestimonialCardProps) => {
    const { t } = useTranslation();
    const [isExpanded, setIsExpanded] = useState(false);

    const accentColor = mode === 'institutional'
        ? 'text-institutional'
        : 'text-creator';

    return (
        <div className="p-6 md:p-8 rounded-2xl glass-card border border-border/20 flex flex-col animate-fade-in-up">
            {/* Quote Icon */}
            <Quote className={`w-8 h-8 mb-4 ${accentColor} opacity-40`} />

            {/* Testimonial Text */}
            <div className="flex-grow mb-6">
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed transition-all duration-300">
                    "{isExpanded ? text : (preview || text)}"
                </p>

                {/* Read More/Less Button */}
                {preview && preview !== text && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsExpanded(!isExpanded);
                        }}
                        className={`mt-3 text-xs md:text-sm font-medium ${accentColor} hover:opacity-70 transition-opacity flex items-center gap-1`}
                    >
                        {isExpanded ? t('showLess') : t('readMore')}
                        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                )}
            </div>

            {/* Attribution */}
            <div className="border-t border-border/20 pt-4 mt-auto">
                <div className={`font-medium text-sm md:text-base ${accentColor}`}>
                    {name}
                </div>
                {role && (
                    <div className="text-xs md:text-sm text-foreground/50 mt-1">
                        {role}
                    </div>
                )}
                <div className="text-xs md:text-sm text-foreground/40 mt-1">
                    {location}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
