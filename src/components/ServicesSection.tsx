import {
  FileText,
  GraduationCap,
  Database,
  Shield,
  MessageCircle,
  Video,
  Palette,
  Wand2,
  TrendingUp,
  Sparkles,
  Layers
} from 'lucide-react';
import ServiceCard from './ServiceCard';
import { useTranslation } from '@/hooks/useTranslation';

interface ServicesSectionProps {
  mode: 'institutional' | 'creator';
}

const ServicesSection = ({ mode }: ServicesSectionProps) => {
  const { t } = useTranslation();

  const institutionalServices = [
    {
      icon: FileText,
      title: t('examDocCardTitle'),
      description: t('examDocCardDesc'),
    },
    {
      icon: GraduationCap,
      title: t('scholarshipCardTitle'),
      description: t('scholarshipCardDesc'),
    },
    {
      icon: Database,
      title: t('udiseCardTitle'),
      description: t('udiseCardDesc'),
    },
    {
      icon: Shield,
      title: t('govProjectsTitle'),
      description: t('govProjectsDesc'),
    },
    {
      icon: MessageCircle,
      title: t('dailySupportCardTitle'),
      description: t('dailySupportCardDesc'),
    },
    {
      icon: Layers,
      title: t('subscriptionTitle'),
      description: t('subscriptionDesc'),
    },
  ];

  const creatorServices = [
    {
      icon: Video,
      title: t('videoCardTitle'),
      description: t('videoCardDesc'),
    },
    {
      icon: Palette,
      title: t('brandingCardTitle'),
      description: t('brandingCardDesc'),
    },
    {
      icon: Wand2,
      title: t('motionCardTitle'),
      description: t('motionCardDesc'),
    },
    {
      icon: TrendingUp,
      title: t('strategyCardTitle'),
      description: t('strategyCardDesc'),
    },
    {
      icon: Sparkles,
      title: t('aiCampaignsTitle'),
      description: t('aiCampaignsDesc'),
    },
    {
      icon: Layers,
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
    <section id="services" className="py-24 md:py-32 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className={`font-display text-2xl md:text-4xl tracking-wide mb-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
            }`}>
            {sectionTitle}
          </h2>
          <p className="text-foreground/50 max-w-lg mx-auto">
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
