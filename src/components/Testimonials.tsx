import { useState, useRef, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Quote, ChevronDown } from 'lucide-react';

interface TestimonialsProps {
    mode: 'institutional' | 'creator';
}

const Testimonials = ({ mode }: TestimonialsProps) => {
    const { t } = useTranslation();

    const institutionalTestimonials = [
        {
            text: t('testimonialInst1Text'),
            name: t('testimonialInst1Name'),
            location: t('testimonialInst1Location'),
        },
        {
            text: t('testimonialInst2Text'),
            name: t('testimonialInst2Name'),
            location: t('testimonialInst2Location'),
        },
        {
            text: t('testimonialInst3Text'),
            name: t('testimonialInst3Name'),
            location: t('testimonialInst3Location'),
        },
    ];

    const creatorTestimonials = [
        {
            text: t('testimonialCreator1Text'),
            name: t('testimonialCreator1Name'),
            location: t('testimonialCreator1Location'),
        },
    ];

    return (
        <div className="max-w-7xl mx-auto">
            {/* Institutional Feedback Section */}
            <div className="mb-20">
                <h2 className="text-2xl md:text-3xl font-display mb-10 text-center">
                    {t('testimonialInstHeading')}
                </h2>
                <HorizontalScrollContainer>
                    {institutionalTestimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            text={testimonial.text}
                            name={testimonial.name}
                            location={testimonial.location}
                            mode={mode}
                            type="institutional"
                        />
                    ))}
                </HorizontalScrollContainer>
            </div>

            {/* Creator Feedback Section */}
            <div>
                <h2 className="text-2xl md:text-3xl font-display mb-10 text-center">
                    {t('testimonialCreatorHeading')}
                </h2>
                <HorizontalScrollContainer>
                    {creatorTestimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            text={testimonial.text}
                            name={testimonial.name}
                            location={testimonial.location}
                            mode={mode}
                            type="creator"
                        />
                    ))}
                </HorizontalScrollContainer>
            </div>
        </div>
    );
};

interface HorizontalScrollContainerProps {
    children: React.ReactNode;
}

const HorizontalScrollContainer = ({ children }: HorizontalScrollContainerProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (!scrollRef.current) return;
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

            e.preventDefault();
            scrollRef.current.scrollLeft += e.deltaY;
        };

        const scrollElement = scrollRef.current;
        if (scrollElement) {
            scrollElement.addEventListener('wheel', handleWheel, { passive: false });
        }

        return () => {
            if (scrollElement) {
                scrollElement.removeEventListener('wheel', handleWheel);
            }
        };
    }, []);

    return (
        <div
            ref={scrollRef}
            className="horizontal-scroll scroll-snap-x horizontal-scroll-peek touch-pan-x"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
            {children}
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
        <div className="testimonial-card scroll-snap-item p-6 md:p-8 rounded-2xl glass-card border border-border/20 flex flex-col min-h-[280px]">
            {/* Quote Icon */}
            <Quote className={`w-8 h-8 mb-4 ${accentColor} opacity-40`} />

            {/* Testimonial Text */}
            <div className="flex-grow mb-6">
                <p className={`text-sm md:text-base text-foreground/70 leading-relaxed transition-all duration-300 ${!isExpanded ? 'line-clamp-3' : ''}`}>
                    "{text}"
                </p>

                {/* Read More/Less Button */}
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
            </div>

            {/* Attribution */}
            <div className="border-t border-border/20 pt-4 mt-auto">
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
