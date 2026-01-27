import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import CreatorModeNotice from '@/components/CreatorModeNotice';
import HowWeWork from '@/components/HowWeWork';
import { H1 } from '@/components/Typography';
import {
  FileText,
  GraduationCap,
  Building,
  Calendar,
  Video,
  Palette,
  Music,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  Clock,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  Sparkles,
  Monitor,
  Smartphone,
  Rocket,
  Layers
} from 'lucide-react';
import {
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobeaudition,
  SiDavinciresolve,
  SiBlender,
  SiNotion
} from 'react-icons/si';


// Custom Icon Components using uploaded images
const PremiereProIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <img
    src="/premiere-pro-icon.png"
    alt="Premiere Pro"
    className={className}
    style={style}
  />
);

const IllustratorIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <img
    src="/illustrator-icon.png"
    alt="Illustrator"
    className={className}
    style={style}
  />
);

const PhotoshopIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <img
    src="/photoshop-icon.png"
    alt="Photoshop"
    className={className}
    style={style}
  />
);

const InDesignIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <img
    src="/indesign-icon.png"
    alt="InDesign"
    className={className}
    style={style}
  />
);

const MediaEncoderIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <img
    src="/media-encoder-icon.png"
    alt="Media Encoder"
    className={className}
    style={style}
  />
);

const CanvaIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <img
    src="/canva-icon.png"
    alt="Canva Pro"
    className={className}
    style={style}
  />
);

const BlenderIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <img
    src="/blender-icon.png"
    alt="Blender"
    className={className}
    style={style}
  />
);

const DaVinciIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <img
    src="/davinci-icon.png"
    alt="DaVinci Resolve"
    className={className}
    style={style}
  />
);

const FigmaIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <img
    src="/figma-icon.png"
    alt="Figma"
    className={className}
    style={style}
  />
);

const RushIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <img
    src="/rush-icon.png"
    alt="Adobe Rush"
    className={className}
    style={style}
  />
);

const AuditionIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <img
    src="/audition-icon.png"
    alt="Audition"
    className={className}
    style={style}
  />
);

// Software Icon Mapping with Brand Colors - Module level for ServiceDetailCard access
const softwareIconMap: Record<string, { icon: React.ElementType, color: string, name: string }> = {
  'Pr': { icon: PremiereProIcon, color: '#9999FF', name: 'Premiere Pro' },
  'Ae': { icon: SiAdobeaftereffects, color: '#9999FF', name: 'After Effects' },
  'Ai': { icon: IllustratorIcon, color: '#FF9A00', name: 'Illustrator' },
  'Ps': { icon: PhotoshopIcon, color: '#31A8FF', name: 'Photoshop' },
  'Id': { icon: InDesignIcon, color: '#FF3366', name: 'InDesign' },
  'Me': { icon: MediaEncoderIcon, color: '#9999FF', name: 'Media Encoder' },
  'Au': { icon: AuditionIcon, color: '#00E676', name: 'Audition' },
  'Ru': { icon: RushIcon, color: '#9999FF', name: 'Adobe Rush' },
  'Dr': { icon: DaVinciIcon, color: '#FF5500', name: 'DaVinci Resolve' },
  'Bl': { icon: BlenderIcon, color: '#E87D0D', name: 'Blender' },
  'Fg': { icon: FigmaIcon, color: '#F24E1E', name: 'Figma' },
  'Cp': { icon: CanvaIcon, color: '#00C4CC', name: 'Canva Pro' },
  'Mj': { icon: Sparkles, color: '#FFFFFF', name: 'Midjourney' },
  'No': { icon: SiNotion, color: '#FFFFFF', name: 'Notion' },
};

const Services = () => {
  const { mode, setHasEntered, setCurrentSection } = useMode();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleReturn = () => {
    setHasEntered(false);
    setCurrentSection(mode); // Persist current section before returning
    navigate('/');
  };

  // Scroll-triggered animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.observe-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const institutionalServices = [
    {
      id: 'exam-paper-typing',
      icon: FileText,
      titleKey: 'examDocTitle' as const,
      shortDescKey: 'examDocShort' as const,
      mediumDescKey: 'examDocMedium' as const,
      fullDescKey: 'examDocFull' as const,
      stepsKey: 'examDocSteps' as const,
      needsKey: 'examDocNeeds' as const,
      timelineKey: 'examDocTimeline' as const,
      whatsappTemplate: 'Hello quickserveit, I need help with examination documentation for [school name]. We have [number] students and the exam starts on [date].'
    },
    {
      id: 'scholarship-verification-biometric',
      icon: GraduationCap,
      titleKey: 'scholarshipTitle' as const,
      shortDescKey: 'scholarshipShort' as const,
      mediumDescKey: 'scholarshipMedium' as const,
      fullDescKey: 'scholarshipFull' as const,
      stepsKey: 'scholarshipSteps' as const,
      needsKey: 'scholarshipNeeds' as const,
      timelineKey: 'scholarshipTimeline' as const,
      whatsappTemplate: 'Hello quickserveit, I need help with [scholarship name] scholarship applications for [number] students. The deadline is [date].'
    },
    {
      id: 'udise-management',
      icon: Building,
      titleKey: 'udiseTitle' as const,
      shortDescKey: 'udiseShort' as const,
      mediumDescKey: 'udiseMedium' as const,
      fullDescKey: 'udiseFull' as const,
      stepsKey: 'udiseSteps' as const,
      needsKey: 'udiseNeeds' as const,
      timelineKey: 'udiseTimeline' as const,
      whatsappTemplate: 'Hello quickserveit, I need help with UDISE+ data entry for [school name]. Our school code is [UDISE code].'
    },
    {
      id: 'daily-tech-support',
      icon: Calendar,
      titleKey: 'dailySupportTitle' as const,
      shortDescKey: 'dailySupportShort' as const,
      mediumDescKey: 'dailySupportMedium' as const,
      fullDescKey: 'dailySupportFull' as const,
      stepsKey: 'dailySupportSteps' as const,
      needsKey: 'dailySupportNeeds' as const,
      timelineKey: 'dailySupportTimeline' as const,
      whatsappTemplate: 'Hello quickserveit, I am interested in monthly digital support for [school name]. We typically need help with [types of tasks].'
    }
  ];

  const creatorServices = [
    {
      id: 'premium-long-form-production',
      icon: Video,
      titleKey: 'videoEditTitle' as const,
      shortDescKey: 'videoEditShort' as const,
      mediumDescKey: 'videoEditMedium' as const,
      fullDescKey: 'videoEditFull' as const,
      stepsKey: 'videoEditSteps' as const,
      needsKey: 'videoEditNeeds' as const,
      timelineKey: 'videoEditTimeline' as const,
      software: ['Pr', 'Dr', 'Au'],
      whatsappTemplate: 'Hello quickserveit, I need video editing for a [type] video. It\'s approximately [duration] of raw footage targeting [final length].'
    },
    {
      id: 'viral-shorts-reels',
      icon: Smartphone,
      titleKey: 'shortsTitle' as const,
      shortDescKey: 'shortsShort' as const,
      mediumDescKey: 'shortsMedium' as const,
      fullDescKey: 'shortsFull' as const,
      stepsKey: 'shortsSteps' as const,
      needsKey: 'shortsNeeds' as const,
      timelineKey: 'shortsTimeline' as const,
      software: ['Ae', 'Pr'],
      whatsappTemplate: 'Hello quickserveit, I\'m interested in your Shorts & Reels repurposing service. I have [content type / link] that I want to turn into vertical videos.'
    },
    {
      id: 'motion-graphics-vfx',
      icon: Layers,
      titleKey: 'motionTitle' as const,
      shortDescKey: 'motionShort' as const,
      mediumDescKey: 'motionMedium' as const,
      fullDescKey: 'motionFull' as const,
      stepsKey: 'motionSteps' as const,
      needsKey: 'motionNeeds' as const,
      timelineKey: 'motionTimeline' as const,
      software: ['Ae', 'Ai', 'Bl'],
      whatsappTemplate: 'Hello quickserveit, I need [intro/outro/motion graphics] for my channel [channel name]. My style is [describe style].'
    },
    {
      id: 'thumbnails-strategy',
      icon: Lightbulb,
      titleKey: 'thumbnailTitle' as const,
      shortDescKey: 'thumbnailShort' as const,
      mediumDescKey: 'thumbnailMedium' as const,
      fullDescKey: 'thumbnailFull' as const,
      stepsKey: 'thumbnailSteps' as const,
      needsKey: 'thumbnailNeeds' as const,
      timelineKey: 'thumbnailTimeline' as const,
      software: ['Ps', 'Mj', 'No'],
      whatsappTemplate: 'Hello quickserveit, I need help with thumbnails and content strategy for my [niche] channel. I want to improve my CTR and scripting.'
    }
  ];



  const services = mode === 'institutional' ? institutionalServices : creatorServices;

  // Scroll to service on hash change
  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Add temporary highlight effect
          element.classList.add('ring-2');
          element.classList.add(mode === 'institutional' ? 'ring-institutional/50' : 'ring-creator/50');
          setTimeout(() => {
            element.classList.remove('ring-2');
            element.classList.remove(mode === 'institutional' ? 'ring-institutional/50' : 'ring-creator/50');
          }, 2000);
        }
      }, 100);
    }
  }, [mode]);


  return (
    <>
      <Helmet>
        <title>{mode === 'institutional' ? t('ourServices') : t('creatorStudio')} | QuickServe IT</title>
        <meta name="description" content={mode === 'institutional'
          ? t('servicesInstDesc')
          : t('servicesCreatorDesc')
        } />

        {/* JSON-LD Service Schema for SEO */}
        <script type="application/ld+json">
          {JSON.stringify(
            mode === 'institutional'
              ? {
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "IT Support Services for Educational Institutions",
                "provider": {
                  "@type": "Organization",
                  "name": "QuickServe IT",
                  "url": "https://www.quickserveit.online"
                },
                "areaServed": {
                  "@type": "Place",
                  "name": "Gorakhpur, Uttar Pradesh, India"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Educational IT Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Exam Documentation Services",
                        "description": "Professional typing and formatting of examination papers for schools and educational institutions"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Scholarship Application Support",
                        "description": "Complete assistance with scholarship applications and documentation for students"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "UDISE+ Data Entry",
                        "description": "Accurate UDISE+ portal data entry and management for educational institutions"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Daily Digital Support",
                        "description": "Monthly retainer-based digital support for schools and educational institutions"
                      }
                    }
                  ]
                }
              }
              : {
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Video Editing and Content Creation Services",
                "provider": {
                  "@type": "Organization",
                  "name": "QuickServe IT",
                  "url": "https://www.quickserveit.online"
                },
                "areaServed": {
                  "@type": "Place",
                  "name": "India"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Creator Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Professional Video Editing",
                        "description": "High-quality video editing for YouTube creators using Adobe Premiere Pro and DaVinci Resolve"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Thumbnail Design",
                        "description": "Eye-catching thumbnail design to increase video click-through rates"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Motion Graphics",
                        "description": "Custom intros, outros, and motion graphics using Adobe After Effects"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Content Strategy",
                        "description": "Strategic content planning and optimization for YouTube growth"
                      }
                    }
                  ]
                }
              }
          )}
        </script>
      </Helmet>

      <CursorLight mode={mode} />
      <FilmGrain />

      <FloatingNavbar
        mode={mode}
        onReturn={handleReturn}
        isVisible={true}
      />

      <main id="main-content" className="min-h-screen bg-background pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-24 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20 max-w-3xl mx-auto animate-fade-in-up">
            <H1 className="mb-4 sm:mb-5 md:mb-6">
              {mode === 'institutional' ? (
                <>{t('ourServices').split(' ')[0]} <span className="text-institutional">{t('ourServices').split(' ').slice(1).join(' ') || t('services')}</span></>
              ) : (
                <>{t('creatorStudio').split(' ')[0]} <span className="text-creator">{t('creatorStudio').split(' ').slice(1).join(' ') || t('studio')}</span> <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full bg-creator/10 text-creator border border-creator/20">{t('betaVersion')}</span></>
              )}
            </H1>
            <p className="text-foreground/60 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {mode === 'institutional' ? t('servicesInstDesc') : t('servicesCreatorDesc')}
            </p>
          </div>

          {/* Creator Mode Notice */}
          {mode === 'creator' && (
            <div className="mb-8 md:mb-10">
              <CreatorModeNotice />
            </div>
          )}

          {/* Important Notice */}
          <div className={`max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20 p-5 sm:p-6 rounded-xl border observe-on-scroll ${mode === 'institutional' ? 'border-institutional/20 bg-institutional/5' : 'border-creator/20 bg-creator/5'}`}>
            <div className="flex items-start gap-4">
              <AlertCircle className={`w-5 h-5 mt-0.5 shrink-0 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
              <div>
                <h3 className="font-semibold mb-2.5 text-sm">{t('beforeYouBegin')}</h3>
                <ul className="text-xs text-foreground/60 space-y-1.5 leading-relaxed">
                  {t('beforeYouBeginItems').split('|').map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>



          {/* Services Section */}
          <div className="pb-16 sm:pb-20 md:pb-24 observe-on-scroll">
            <div className="space-y-6 max-w-3xl mx-auto">
              {services.map((service, index) => (
                <ServiceDetailCard key={index} service={service} mode={mode} t={t} />
              ))}
            </div>
          </div>
        </div>

        {/* How We Work Section - Completely Separate with Different Background */}
        <section className="bg-black border-t border-border py-20 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <HowWeWork mode={mode} />
          </div>
        </section>
      </main>

      <Footer mode={mode} />
    </>
  );
};

interface ServiceDetailCardProps {
  service: {
    id: string;
    icon: any;
    titleKey: string;
    shortDescKey: string;
    mediumDescKey: string;
    fullDescKey: string;
    stepsKey: string;
    needsKey: string;
    timelineKey: string;
    software?: string[];
    whatsappTemplate: string;
  };
  mode: 'institutional' | 'creator';
  t: (key: any) => string;
}

const ServiceDetailCard = ({ service, mode, t }: ServiceDetailCardProps) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = service.icon;

  const whatsappNumber = '916388224877';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(service.whatsappTemplate)}`;

  const title = t(service.titleKey);
  const mediumDesc = t(service.mediumDescKey);
  const fullDesc = t(service.fullDescKey);
  const steps = t(service.stepsKey).split('|');
  const needs = t(service.needsKey).split('|');
  const timeline = t(service.timelineKey);

  return (
    <div
      id={service.id}
      className={`rounded-xl glass-card border overflow-hidden transition-all duration-normal ease-out ${isExpanded ? 'border-border/40 shadow-lg' : 'border-border/20 hover:border-border/30 hover:shadow-md'}`}
    >
      {/* Header - Safe scroll zone with chevron-only interaction */}
      <div className="w-full p-5 sm:p-6 flex items-start gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'}`}>
          <Icon className={`w-6 h-6 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold mb-2 leading-tight">{title}</h3>
          <p className="text-sm text-foreground/60 leading-relaxed">{mediumDesc}</p>
        </div>
        {/* Only chevron is clickable - 44×44px minimum touch target */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`shrink-0 p-2.5 rounded-lg transition-all duration-fast focus:outline-none focus:ring-2 focus:ring-ring min-w-[44px] min-h-[44px] flex items-center justify-center ${mode === 'institutional'
            ? 'hover:bg-institutional/10 active:bg-institutional/15'
            : 'hover:bg-creator/10 active:bg-creator/15'
            }`}
          aria-expanded={isExpanded}
          aria-label={isExpanded ? "Collapse service details" : "Expand service details"}
        >
          {isExpanded ? (
            <ChevronUp className={`w-5 h-5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
          ) : (
            <ChevronDown className={`w-5 h-5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
          )}
        </button>
      </div>

      {/* Expanded Content with smooth animation */}
      <div
        className={`grid transition-all duration-normal ease-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'}`}
      >
        <div className="overflow-hidden">
          <div className="px-4 sm:px-5 md:px-6 pb-6 border-t border-border/10 pt-5 sm:pt-6">
            <p className="text-sm text-foreground/60 mb-6 leading-relaxed">{fullDesc}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* How It Works */}
              <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold mb-3">
                  <CheckCircle className={`w-4 h-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                  {t('howItWorks')}
                </h4>
                <ol className="space-y-2">
                  {steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-foreground/70">
                      <span className={`w-5 h-5 rounded-full text-[10px] font-medium flex items-center justify-center shrink-0 ${mode === 'institutional' ? 'bg-institutional/15 text-institutional' : 'bg-creator/15 text-creator'}`}>
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {/* What You Need */}
              <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold mb-3">
                  <AlertCircle className={`w-4 h-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                  {t('whatYouNeed')}
                </h4>
                <ul className="space-y-2">
                  {needs.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-foreground/70">
                      <span className={`${mode === 'institutional' ? 'text-institutional/50' : 'text-creator/50'}`}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Timeline */}
            <div className={`mt-6 p-3 rounded-lg ${mode === 'institutional' ? 'bg-institutional/5' : 'bg-creator/5'}`}>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <Clock className={`w-3.5 h-3.5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                <span className="font-medium">{t('timeline')}:</span>
                <span className="text-foreground/60">{timeline}</span>
              </div>
            </div>

            {/* Software Stack - Creator Mode Only */}
            {mode === 'creator' && service.software && service.software.length > 0 && (
              <div className="mt-6 pt-5 border-t border-border/10">
                <h4 className="text-xs font-medium text-foreground/60 mb-3">Software Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {service.software.map((tool, i) => {
                    // Extract shortcode (e.g., "Pr" from "Pr Premiere Pro")
                    const shortcode = tool.split(' ')[0];
                    const iconData = softwareIconMap[shortcode];

                    if (!iconData) return null;

                    const IconComponent = iconData.icon;

                    return (
                      <span
                        key={i}
                        title={iconData.name}
                        className="inline-flex items-center gap-2 px-3 py-2 text-xs rounded-lg glass-card border border-creator/20 hover:border-creator/40 transition-all duration-fast hover:scale-105"
                        style={{
                          backdropFilter: 'blur(8px)',
                          background: 'rgba(0, 188, 212, 0.05)'
                        }}
                      >
                        <IconComponent
                          className="w-4 h-4 sm:w-4 sm:h-4"
                          style={{ color: iconData.color }}
                        />
                        <span className="text-foreground/70">{iconData.name}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <button
                onClick={() => {
                  navigate('/contact', {
                    state: {
                      intent: 'service',
                      serviceName: title
                    }
                  });
                }}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-fast hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-ring min-h-[44px] ${mode === 'institutional'
                  ? 'bg-institutional text-background hover:bg-institutional/90 hover:shadow-lg hover:shadow-institutional/20'
                  : 'bg-creator text-background hover:bg-creator/90 hover:shadow-lg hover:shadow-creator/20'
                  }`}
              >
                <MessageCircle className="w-4 h-4" />
                {t('startThisService')}
              </button>
              <p className="text-[10px] text-foreground/40">
                {t('whatsappNote')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;