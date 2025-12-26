import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import CreatorModeNotice from '@/components/CreatorModeNotice';
import { useState } from 'react';
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
  Rocket
} from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Services = () => {
  const { mode, setHasEntered } = useMode();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isInnovationsOpen, setIsInnovationsOpen] = useState(false);

  const handleReturn = () => {
    setHasEntered(false);
    navigate('/');
  };

  const institutionalServices = [
    {
      icon: FileText,
      titleKey: 'examDocTitle' as const,
      shortDescKey: 'examDocShort' as const,
      fullDescKey: 'examDocFull' as const,
      stepsKey: 'examDocSteps' as const,
      needsKey: 'examDocNeeds' as const,
      timelineKey: 'examDocTimeline' as const,
      whatsappTemplate: 'Hello quickserveit, I need help with examination documentation for [school name]. We have [number] students and the exam starts on [date].'
    },
    {
      icon: GraduationCap,
      titleKey: 'scholarshipTitle' as const,
      shortDescKey: 'scholarshipShort' as const,
      fullDescKey: 'scholarshipFull' as const,
      stepsKey: 'scholarshipSteps' as const,
      needsKey: 'scholarshipNeeds' as const,
      timelineKey: 'scholarshipTimeline' as const,
      whatsappTemplate: 'Hello quickserveit, I need help with [scholarship name] scholarship applications for [number] students. The deadline is [date].'
    },
    {
      icon: Building,
      titleKey: 'udiseTitle' as const,
      shortDescKey: 'udiseShort' as const,
      fullDescKey: 'udiseFull' as const,
      stepsKey: 'udiseSteps' as const,
      needsKey: 'udiseNeeds' as const,
      timelineKey: 'udiseTimeline' as const,
      whatsappTemplate: 'Hello quickserveit, I need help with UDISE+ data entry for [school name]. Our school code is [UDISE code].'
    },
    {
      icon: Calendar,
      titleKey: 'dailySupportTitle' as const,
      shortDescKey: 'dailySupportShort' as const,
      fullDescKey: 'dailySupportFull' as const,
      stepsKey: 'dailySupportSteps' as const,
      needsKey: 'dailySupportNeeds' as const,
      timelineKey: 'dailySupportTimeline' as const,
      whatsappTemplate: 'Hello quickserveit, I am interested in monthly digital support for [school name]. We typically need help with [types of tasks].'
    }
  ];

  const creatorServices = [
    {
      icon: Video,
      titleKey: 'videoEditTitle' as const,
      shortDescKey: 'videoEditShort' as const,
      fullDescKey: 'videoEditFull' as const,
      stepsKey: 'videoEditSteps' as const,
      needsKey: 'videoEditNeeds' as const,
      timelineKey: 'videoEditTimeline' as const,
      whatsappTemplate: 'Hello quickserveit, I need video editing for a [type] video. It\'s approximately [duration] of raw footage targeting [final length].'
    },
    {
      icon: Palette,
      titleKey: 'thumbnailTitle' as const,
      shortDescKey: 'thumbnailShort' as const,
      fullDescKey: 'thumbnailFull' as const,
      stepsKey: 'thumbnailSteps' as const,
      needsKey: 'thumbnailNeeds' as const,
      timelineKey: 'thumbnailTimeline' as const,
      whatsappTemplate: 'Hello quickserveit, I need a thumbnail for my video about [topic]. The title is [title].'
    },
    {
      icon: Music,
      titleKey: 'motionTitle' as const,
      shortDescKey: 'motionShort' as const,
      fullDescKey: 'motionFull' as const,
      stepsKey: 'motionSteps' as const,
      needsKey: 'motionNeeds' as const,
      timelineKey: 'motionTimeline' as const,
      whatsappTemplate: 'Hello quickserveit, I need [intro/outro/motion graphics] for my channel [channel name]. My style is [describe style].'
    },
    {
      icon: Lightbulb,
      titleKey: 'strategyTitle' as const,
      shortDescKey: 'strategyShort' as const,
      fullDescKey: 'strategyFull' as const,
      stepsKey: 'strategySteps' as const,
      needsKey: 'strategyNeeds' as const,
      timelineKey: 'strategyTimeline' as const,
      whatsappTemplate: 'Hello quickserveit, I need help with content strategy for my [niche] channel. Currently at [subscribers] subscribers.'
    }
  ];

  const professionalSoftware = [
    { name: t('adobePremierePro'), category: 'Video' },
    { name: t('adobeAfterEffects'), category: 'Motion' },
    { name: t('davinciResolve'), category: 'Color' },
    { name: t('adobePhotoshop'), category: 'Design' },
    { name: t('adobeIllustrator'), category: 'Vector' },
  ];

  const appsAndTools = [
    { name: t('figma'), category: 'UI/UX' },
    { name: t('canvaPro'), category: 'Quick Design' },
    { name: t('capcut'), category: 'Mobile Edit' },
  ];

  const upcomingInnovations = [
    { name: t('aiAgents'), icon: Sparkles },
    { name: t('scanToDigital'), icon: Monitor },
    { name: t('creatorAutomation'), icon: Smartphone },
  ];

  const services = mode === 'institutional' ? institutionalServices : creatorServices;

  return (
    <>
      <Helmet>
        <title>{mode === 'institutional' ? t('ourServices') : t('creatorStudio')} | QuickServe IT</title>
        <meta name="description" content={mode === 'institutional'
          ? t('servicesInstDesc')
          : t('servicesCreatorDesc')
        } />
      </Helmet>

      <CursorLight mode={mode} />
      <FilmGrain />

      <FloatingNavbar
        mode={mode}
        onReturn={handleReturn}
        isVisible={true}
      />

      <main className="min-h-screen bg-background pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          {/* Header */}
          <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display mb-4 md:mb-4 leading-tight">
              {mode === 'institutional' ? (
                <>{t('ourServices').split(' ')[0]} <span className="text-institutional">{t('ourServices').split(' ').slice(1).join(' ') || t('services')}</span></>
              ) : (
                <>{t('creatorStudio').split(' ')[0]} <span className="text-creator">{t('creatorStudio').split(' ').slice(1).join(' ') || t('studio')}</span> <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-creator/20 text-creator border border-creator/30">{t('betaVersion')}</span></>
              )}
            </h1>
            <p className="text-foreground/60 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0">
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
          <div className={`max-w-3xl mx-auto mb-10 md:mb-12 p-4 sm:p-5 rounded-xl border ${mode === 'institutional' ? 'border-institutional/20 bg-institutional/5' : 'border-creator/20 bg-creator/5'}`}>
            <div className="flex items-start gap-4 sm:gap-4">
              <AlertCircle className={`w-5 h-5 sm:w-5 sm:h-5 mt-0.5 shrink-0 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
              <div>
                <h3 className="font-medium mb-2 text-sm sm:text-sm">{t('beforeYouBegin')}</h3>
                <ul className="text-xs sm:text-xs text-foreground/60 space-y-2 leading-relaxed">
                  {t('beforeYouBeginItems').split('|').map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Creator Mode: Structured Sections */}
          {mode === 'creator' && (
            <div className="max-w-3xl mx-auto mb-10 md:mb-12 space-y-4 sm:space-y-5">
              {/* Professional Software */}
              <div className="glass-card rounded-xl p-4 sm:p-5 border border-border/20">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Monitor className="w-4 h-4 sm:w-5 sm:h-5 text-creator" />
                  <h3 className="font-medium text-sm sm:text-base">{t('professionalSoftware')}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {professionalSoftware.map((software, i) => (
                    <span key={i} className="px-3 py-1.5 text-xs rounded-full bg-creator/10 text-foreground/70 border border-creator/20">
                      {software.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Apps & Tools */}
              <div className="glass-card rounded-xl p-4 sm:p-5 border border-border/20">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-creator" />
                  <h3 className="font-medium text-sm sm:text-base">{t('appsAndTools')}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {appsAndTools.map((tool, i) => (
                    <span key={i} className="px-3 py-1.5 text-xs rounded-full bg-creator/10 text-foreground/70 border border-creator/20">
                      {tool.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Upcoming Innovations - Collapsible */}
              <Collapsible open={isInnovationsOpen} onOpenChange={setIsInnovationsOpen}>
                <div className="glass-card rounded-xl border border-border/20 overflow-hidden">
                  <CollapsibleTrigger className="w-full p-4 sm:p-5 flex items-center justify-between hover:bg-foreground/[0.02] transition-colors">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-creator" />
                      <h3 className="font-medium text-sm sm:text-base">{t('upcomingInnovations')}</h3>
                    </div>
                    {isInnovationsOpen ? (
                      <ChevronUp className="w-4 h-4 text-foreground/40" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-foreground/40" />
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-3 border-t border-border/10">
                      <div className="space-y-3">
                        {upcomingInnovations.map((item, i) => {
                          const Icon = item.icon;
                          return (
                            <div key={i} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-foreground/60">
                              <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-creator/60" />
                              <span>{item.name}</span>
                              <span className="ml-auto px-2 py-0.5 text-[10px] rounded bg-creator/20 text-creator">
                                {t('comingSoon')}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                      <p className="mt-3 sm:mt-4 text-[11px] sm:text-xs text-foreground/40 italic leading-relaxed">
                        {t('moreDetailsNote')}
                      </p>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            </div>
          )}

          {/* Section Title for Services */}
          <div className="max-w-3xl mx-auto mb-5 md:mb-6 mt-8 md:mt-0">
            <h2 className={`text-base sm:text-lg font-medium ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>
              {t('servicesOffered')}
            </h2>
          </div>

          {/* Services Grid */}
          <div className="space-y-4 sm:space-y-5 max-w-3xl mx-auto">
            {services.map((service, index) => (
              <ServiceDetailCard key={index} service={service} mode={mode} t={t} />
            ))}
          </div>
        </div>
      </main>

      <Footer mode={mode} />
    </>
  );
};

interface ServiceDetailCardProps {
  service: {
    icon: any;
    titleKey: string;
    shortDescKey: string;
    fullDescKey: string;
    stepsKey: string;
    needsKey: string;
    timelineKey: string;
    whatsappTemplate: string;
  };
  mode: 'institutional' | 'creator';
  t: (key: any) => string;
}

const ServiceDetailCard = ({ service, mode, t }: ServiceDetailCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = service.icon;

  const whatsappNumber = '919876543210';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(service.whatsappTemplate)}`;

  const title = t(service.titleKey);
  const shortDesc = t(service.shortDescKey);
  const fullDesc = t(service.fullDescKey);
  const steps = t(service.stepsKey).split('|');
  const needs = t(service.needsKey).split('|');
  const timeline = t(service.timelineKey);

  return (
    <div className={`rounded-xl glass-card border border-border/20 overflow-hidden transition-all duration-300 ease-out ${isExpanded ? 'ring-1 ' + (mode === 'institutional' ? 'ring-institutional/30' : 'ring-creator/30') : 'hover:border-border/40 hover:-translate-y-0.5'}`}>
      {/* Header - Always visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-5 sm:p-5 flex items-start gap-4 sm:gap-4 text-left hover:bg-foreground/[0.02] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ring"
        aria-expanded={isExpanded}
      >
        <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center shrink-0 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'}`}>
          <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-medium mb-1.5">{title}</h3>
          <p className="text-xs sm:text-sm text-foreground/50 line-clamp-2 leading-relaxed">{shortDesc}</p>
        </div>
        <div className="shrink-0 mt-1">
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 text-foreground/40" />
          ) : (
            <ChevronDown className="w-4 h-4 text-foreground/40" />
          )}
        </div>
      </button>

      {/* Expanded Content with smooth animation */}
      <div 
        className={`grid transition-all duration-300 ease-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'}`}
      >
        <div className="overflow-hidden">
          <div className="px-5 sm:px-5 pb-5 sm:pb-5 border-t border-border/10 pt-5 sm:pt-5">
            <p className="text-xs sm:text-sm text-foreground/60 mb-6 sm:mb-6 leading-relaxed">{fullDesc}</p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* How It Works */}
              <div>
                <h4 className="flex items-center gap-2 text-sm font-medium mb-3.5">
                  <CheckCircle className={`w-4 h-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                  {t('howItWorks')}
                </h4>
                <ol className="space-y-2.5">
                  {steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-foreground/60">
                      <span className={`w-4 h-4 rounded-full text-[9px] flex items-center justify-center shrink-0 mt-0.5 ${mode === 'institutional' ? 'bg-institutional/20 text-institutional' : 'bg-creator/20 text-creator'}`}>
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {/* What You Need */}
              <div>
                <h4 className="flex items-center gap-2 text-sm font-medium mb-3.5">
                  <AlertCircle className={`w-4 h-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                  {t('whatYouNeed')}
                </h4>
                <ul className="space-y-2">
                  {needs.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-foreground/60">
                      <span className="text-foreground/30">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Timeline */}
            <div className={`mt-6 p-3 rounded-lg ${mode === 'institutional' ? 'bg-institutional/5' : 'bg-creator/5'}`}>
              <div className="flex items-center gap-2 text-xs">
                <Clock className={`w-3.5 h-3.5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                <span className="font-medium">{t('timeline')}:</span>
                <span className="text-foreground/60">{timeline}</span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${mode === 'institutional'
                  ? 'bg-institutional text-background hover:bg-institutional/90'
                  : 'bg-creator text-background hover:bg-creator/90'
                  }`}
              >
                <MessageCircle className="w-4 h-4" />
                {t('startThisService')}
              </a>
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