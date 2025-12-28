import {
  DocumentIcon,
  GraduationIcon,
  DatabaseIcon,
  ShieldIcon,
  ChatIcon,
  VideoIcon,
  PaletteIcon,
  WandIcon,
  TrendingIcon,
  SparklesIcon,
  LayersIcon
} from './IconSystem';
import ServiceCard from './ServiceCard';
import { useTranslation } from '@/hooks/useTranslation';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  mode: 'institutional' | 'creator';
  isTeaser?: boolean;
}

const ServicesSection = ({ mode, isTeaser = false }: ServicesSectionProps) => {
  const { t } = useTranslation();

  const institutionalServices = [
    {
      icon: DocumentIcon,
      title: t('examDocCardTitle'),
      description: t('examDocCardDesc'),
    },
    {
      icon: GraduationIcon,
      title: t('scholarshipCardTitle'),
      description: t('scholarshipCardDesc'),
    },
    {
      icon: DatabaseIcon,
      title: t('udiseCardTitle'),
      description: t('udiseCardDesc'),
    },
    {
      icon: ShieldIcon,
      title: t('govProjectsTitle'),
      description: t('govProjectsDesc'),
    },
    {
      icon: ChatIcon,
      title: t('dailySupportCardTitle'),
      description: t('dailySupportCardDesc'),
    },
    {
      icon: LayersIcon,
      title: t('subscriptionTitle'),
      description: t('subscriptionDesc'),
    },
  ];

  const creatorServices = [
    {
      icon: VideoIcon,
      title: t('videoCardTitle'),
      description: t('videoCardDesc'),
    },
    {
      icon: PaletteIcon,
      title: t('brandingCardTitle'),
      description: t('brandingCardDesc'),
    },
    {
      icon: WandIcon,
      title: t('motionCardTitle'),
      description: t('motionCardDesc'),
    },
    {
      icon: TrendingIcon,
      title: t('strategyCardTitle'),
      description: t('strategyCardDesc'),
    },
    {
      icon: SparklesIcon,
      title: t('aiCampaignsTitle'),
      description: t('aiCampaignsDesc'),
    },
    {
      icon: LayersIcon,
      title: t('studioSpaceTitle'),
      description: t('studioSpaceDesc'),
    },
  ];

  const allServices = mode === 'institutional' ? institutionalServices : creatorServices;
  // In teaser mode, show only top 3 services
  const services = isTeaser ? allServices.slice(0, 3) : allServices;

  const sectionTitle = mode === 'institutional' ? t('institutionalServices') : t('creativeStudio');
  const sectionSubtitle = mode === 'institutional'
    ? t('servicesInstSubtitle')
    : t('servicesCreatorSubtitle');

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 px-6 overflow-hidden"
      style={{
        background: mode === 'institutional'
          ? 'linear-gradient(180deg, rgba(43, 96, 56, 0.03) 0%, rgba(0, 0, 0, 0) 50%, rgba(30, 85, 35, 0.02) 100%)'
          : 'linear-gradient(180deg, rgba(187, 100, 42, 0.03) 0%, rgba(0, 0, 0, 0) 50%, rgba(195, 100, 55, 0.02) 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2
            className={`font-display text-2xl md:text-4xl tracking-wide mb-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}
            style={{
              textShadow: mode === 'institutional'
                ? '0 0 30px hsl(43, 96%, 56%, 0.2)'
                : '0 0 30px hsl(187, 100%, 42%, 0.2)'
            }}
          >
            {sectionTitle}
          </h2>
          <p className="text-foreground/60 max-w-lg mx-auto">
            {sectionSubtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              mode={mode}
              delay={index * 100}
            />
          ))}
        </div>

        {/* "View All Services" Call to Adventure Button (Teaser Mode Only) */}
        {isTeaser && (
          <div className="flex justify-center mt-16 md:mt-20">
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
              <span className="relative z-10">View All Services</span>
              <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />

              {/* Animated background gradient on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${mode === 'institutional'
                  ? 'bg-gradient-to-r from-institutional/5 via-institutional/10 to-institutional/5'
                  : 'bg-gradient-to-r from-creator/5 via-creator/10 to-creator/5'
                }`} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
