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

interface ServicesSectionProps {
  mode: 'institutional' | 'creator';
}

const ServicesSection = ({ mode }: ServicesSectionProps) => {
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

  const services = mode === 'institutional' ? institutionalServices : creatorServices;
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
      </div>
    </section>
  );
};

export default ServicesSection;
