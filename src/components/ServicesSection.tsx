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

interface ServicesSectionProps {
  mode: 'institutional' | 'creator';
}

const ServicesSection = ({ mode }: ServicesSectionProps) => {
  const institutionalServices = [
    {
      icon: FileText,
      title: 'Exam Documentation',
      description: 'Confidential paper formatting, room-wise seating management, and secure printing with class-wise bundling.',
    },
    {
      icon: GraduationCap,
      title: 'UP Scholarship Processing',
      description: 'On-campus technical assistance, DSC-based locking, and complete scholarship workflow management.',
    },
    {
      icon: Database,
      title: 'UDISE+ Data Management',
      description: 'Structured data entry, student promotion tracking, and final certification with archive-ready records.',
    },
    {
      icon: Shield,
      title: 'Government Projects',
      description: 'Rapid response for ad-hoc circulars, compliance mapping, and special government portal assistance.',
    },
    {
      icon: MessageCircle,
      title: 'Daily Digital Support',
      description: 'Remote WhatsApp-based office assistance for notices, file resizing, and quick administrative tasks.',
    },
    {
      icon: Layers,
      title: 'Subscription Plans',
      description: 'Silver, Gold, and Platinum tiers offering predictable monthly support with priority turnaround.',
    },
  ];
  
  const creatorServices = [
    {
      icon: Video,
      title: 'Video & Post-Production',
      description: 'Retention-style editing for YouTube, Reels, and documentaries with cinematic scene polish.',
    },
    {
      icon: Palette,
      title: 'Branding & Design',
      description: 'High-CTR thumbnails, brand identity systems, and event posters that demand attention.',
    },
    {
      icon: Wand2,
      title: 'Motion Graphics & VFX',
      description: 'Custom logo intros, kinetic typography, lower thirds, and professional green screen cleanup.',
    },
    {
      icon: TrendingUp,
      title: 'Content Strategy',
      description: 'Scripting, SEO optimization, content calendars, and channel growth management.',
    },
    {
      icon: Sparkles,
      title: 'AI Visual Campaigns',
      description: 'Future-ready AI-driven 2D/3D visual micro-campaigns and filmless premium advertisements.',
    },
    {
      icon: Layers,
      title: 'Creator Studio Space',
      description: 'Coming soon: Soundproof environment with professional gear for local talent incubation.',
    },
  ];
  
  const services = mode === 'institutional' ? institutionalServices : creatorServices;
  const sectionTitle = mode === 'institutional' ? 'Institutional Services' : 'Creative Studio';
  const sectionSubtitle = mode === 'institutional' 
    ? 'Comprehensive digital support for educational institutions'
    : 'World-class production for modern creators';

  return (
    <section id="services" className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className={`font-display text-2xl md:text-4xl tracking-wide mb-4 ${
            mode === 'institutional' ? 'text-institutional' : 'text-creator'
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
