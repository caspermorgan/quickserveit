import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { ArrowRight } from 'lucide-react';
import {
    DocumentIcon,
    GraduationIcon,
    DatabaseIcon,
    VideoIcon,
    PaletteIcon,
    WandIcon,
} from '@/modules/core/components/IconSystem';
import ServiceCard from './ServiceCard';

interface ServicesTeaserProps {
    mode: 'institutional' | 'creator';
}

const ServicesTeaser = ({ mode }: ServicesTeaserProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleServiceClick = (serviceName: string) => {
        // Convert service name to kebab-case ID for hash navigation
        const serviceId = serviceName.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, '');
        navigate(`/services#${serviceId}`);
    };

    const institutionalServices = [
        {
            icon: DocumentIcon,
            title: t('examDocCardTitle'),
            subtitle: t('examDocCardSubtitle'),
            description: t('examDocCardDesc'),
        },
        {
            icon: GraduationIcon,
            title: t('scholarshipCardTitle'),
            subtitle: t('scholarshipCardSubtitle'),
            description: t('scholarshipCardDesc'),
        },
        {
            icon: DatabaseIcon,
            title: t('udiseCardTitle'),
            subtitle: t('udiseCardSubtitle'),
            description: t('udiseCardDesc'),
        },
    ];

    const creatorServices = [
        {
            icon: VideoIcon,
            title: t('videoCardTitle'),
            subtitle: t('videoCardSubtitle'),
            description: t('videoCardDesc'),
        },
        {
            icon: PaletteIcon,
            title: t('brandingCardTitle'),
            subtitle: t('brandingCardSubtitle'),
            description: t('brandingCardDesc'),
        },
        {
            icon: WandIcon,
            title: t('motionCardTitle'),
            subtitle: t('motionCardSubtitle'),
            description: t('motionCardDesc'),
        },
    ];

    const services = mode === 'institutional' ? institutionalServices : creatorServices;
    const sectionTitle = mode === 'institutional' ? t('institutionalServices') : t('creativeStudio');

    return (
        <section
            id="services-teaser"
            className="relative py-24 md:py-32 px-6 overflow-hidden"
            style={{
                background: mode === 'institutional'
                    ? 'linear-gradient(180deg, rgba(43, 96, 56, 0.03) 0%, rgba(0, 0, 0, 0) 50%, rgba(30, 85, 35, 0.02) 100%)'
                    : 'linear-gradient(180deg, rgba(187, 100, 42, 0.03) 0%, rgba(0, 0, 0, 0) 50%, rgba(195, 100, 55, 0.02) 100%)'
            }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-16 md:mb-20"
                >
                    <h2
                        className={`font-display text-2xl md:text-4xl tracking-wide mb-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
                            }`}
                        style={{
                            textShadow: mode === 'institutional'
                                ? '0 0 30px rgba(43, 96, 56, 0.2)'
                                : '0 0 30px rgba(187, 100, 42, 0.2)'
                        }}
                    >
                        {sectionTitle}
                    </h2>
                    <p className="text-foreground/60 max-w-lg mx-auto">
                        {mode === 'institutional' ? t('servicesInstSubtitle') : t('servicesCreatorSubtitle')}
                    </p>
                </motion.div>

                {/* Services Grid - Top 3 Only */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                delay: index * 0.1
                            }}
                        >
                            <ServiceCard
                                icon={service.icon}
                                title={service.title}
                                subtitle={service.subtitle}
                                description={service.description}
                                mode={mode}
                                delay={0}
                                onClick={() => handleServiceClick(service.title)}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* "Explore Full Arsenal" Button */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                    className="flex justify-center mt-16 md:mt-20"
                >
                    <Link
                        to="/services"
                        className={`group relative inline-flex items-center gap-3 px-10 py-5 rounded-full font-medium text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden ${mode === 'institutional'
                            ? 'bg-institutional/10 text-institutional border-2 border-institutional/30 hover:bg-institutional/20 hover:border-institutional/50 focus:ring-institutional/50'
                            : 'bg-creator/10 text-creator border-2 border-creator/30 hover:bg-creator/20 hover:border-creator/50 focus:ring-creator/50'
                            }`}
                        style={{
                            boxShadow: mode === 'institutional'
                                ? '0 0 20px rgba(43, 96, 56, 0.1)'
                                : '0 0 20px rgba(187, 100, 42, 0.1)'
                        }}
                    >
                        <span className="relative z-10">{t('exploreFullArsenal')}</span>
                        <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />

                        {/* Animated background gradient on hover */}
                        <div
                            className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${mode === 'institutional'
                                ? 'bg-gradient-to-r from-institutional/5 via-institutional/10 to-institutional/5'
                                : 'bg-gradient-to-r from-creator/5 via-creator/10 to-creator/5'
                                }`}
                        />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesTeaser;
