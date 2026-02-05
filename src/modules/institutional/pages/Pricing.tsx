import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import FloatingNavbar from '@/modules/core/components/FloatingNavbar';
import PageWrapper from '@/modules/core/layouts/PageWrapper';
import PageHeader from '@/modules/core/layouts/PageHeader';
import CursorLight from '@/modules/core/components/CursorLight';
import FilmGrain from '@/modules/core/components/FilmGrain';
import Footer from '@/modules/core/components/Footer';
import {
  FileText,
  Database,
  ShieldCheck,
  CheckCircle,
  Star,
  Zap,
  Clock,
  Users,
  TrendingUp,
  Award,
  Video,
  Palette,
  Sparkles,
  Crown,
  Check
} from 'lucide-react';
import { H1 } from '@/components/Typography';

// VIP Glass Card Component with 3D Tilt Effect
interface PricingCardVIPProps {
  mode: 'institutional' | 'creator';
  plan: {
    name: string;
    price: string;
    desc?: string;
    features?: string[];
    subtitle?: string;
    items?: Array<{ name: string; desc: string; price: string }>;
    note?: string;
  };
  isPopular?: boolean;
  badge?: string;
  onClick: () => void;
  buttonText?: string;
}

const PricingCardVIP: React.FC<PricingCardVIPProps> = ({
  mode,
  plan,
  isPopular = false,
  badge,
  onClick,
  buttonText = 'Get Started'
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -5;
    const tiltY = ((x - centerX) / centerX) * 5;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const borderColor = mode === 'institutional' ? 'border-amber-500/30' : 'border-cyan-500/30';
  const glowColor = mode === 'institutional' ? 'shadow-amber-500/20' : 'shadow-cyan-500/20';
  const accentColor = mode === 'institutional' ? 'text-amber-500' : 'text-cyan-500';
  const bgAccent = mode === 'institutional' ? 'bg-amber-500/10' : 'bg-cyan-500/10';
  const gradientFrom = mode === 'institutional' ? 'from-amber-500' : 'from-cyan-500';
  const gradientTo = mode === 'institutional' ? 'to-amber-600' : 'to-cyan-600';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative rounded-3xl transition-all duration-500 ${isPopular ? 'scale-105' : ''
        }`}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      {/* Spotlight Effect for Popular Card */}
      {isPopular && (
        <div className={`absolute -inset-4 bg-gradient-to-r ${gradientFrom} ${gradientTo} opacity-20 blur-3xl -z-10 animate-pulse`} />
      )}

      {/* Badge */}
      {badge && (
        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest ${mode === 'institutional' ? 'bg-gradient-to-r from-amber-500 to-amber-600' : 'bg-gradient-to-r from-cyan-500 to-cyan-600'
          } text-black shadow-lg z-10`}>
          {badge}
        </div>
      )}

      {/* VIP Glass Card */}
      <div className={`relative bg-black/40 backdrop-blur-xl border ${borderColor} rounded-3xl p-8 transition-all duration-500 group-hover:${glowColor} group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:${mode === 'institutional' ? 'border-amber-500/50' : 'border-cyan-500/50'
        } overflow-hidden`}>

        {/* Inner Glow */}
        <div className={`absolute inset-0 bg-gradient-to-br ${mode === 'institutional' ? 'from-amber-500/5 to-transparent' : 'from-cyan-500/5 to-transparent'
          } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon or Subtitle */}
          {plan.subtitle ? (
            <>
              <h3 className={`text-2xl font-display mb-2 ${accentColor} tracking-wide`}>{plan.name}</h3>
              <p className="text-sm text-foreground/40 mb-6 uppercase tracking-widest">{plan.subtitle}</p>
            </>
          ) : (
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${bgAccent} group-hover:scale-110 transition-transform duration-500`}>
              {plan.name.includes('Starter') && <Video className={`w-8 h-8 ${accentColor}`} />}
              {plan.name.includes('Growth') && <TrendingUp className={`w-8 h-8 ${accentColor}`} />}
              {plan.name.includes('Authority') && <Crown className={`w-8 h-8 ${accentColor}`} />}
              {plan.name.includes('Series') && <Sparkles className={`w-8 h-8 ${accentColor}`} />}
              {plan.name.includes('Basic') && <Clock className={`w-8 h-8 ${accentColor}`} />}
              {plan.name.includes('Premium') && <Crown className={`w-8 h-8 ${accentColor}`} />}
              {plan.name.includes('Annual') && <Award className={`w-8 h-8 ${accentColor}`} />}
              {plan.name.includes('Content') && <Video className={`w-8 h-8 ${accentColor}`} />}
              {plan.name.includes('Pro') && <Crown className={`w-8 h-8 ${accentColor}`} />}
              {plan.name.includes('Elite') && <Award className={`w-8 h-8 ${accentColor}`} />}
            </div>
          )}

          {/* Plan Name & Description */}
          {!plan.subtitle && (
            <>
              <h3 className={`text-2xl font-display mb-2 ${accentColor} tracking-wide`}>{plan.name}</h3>
              {plan.desc && <p className="text-sm text-foreground/40 mb-6 uppercase tracking-widest">{plan.desc}</p>}
            </>
          )}

          {/* Price Tag - Hero Element */}
          <div className="mb-8">
            <div className={`text-6xl font-display font-bold ${accentColor} mb-2 tracking-tight`}>
              {plan.price}
            </div>
            {!plan.subtitle && plan.name.includes('Series') && (
              <p className="text-xs text-foreground/40 uppercase tracking-wider">Per Series</p>
            )}
            {!plan.subtitle && !plan.name.includes('Series') && !plan.name.includes('Custom') && (
              <p className="text-xs text-foreground/40 uppercase tracking-wider">Per {plan.name.includes('Annual') ? 'Year' : plan.name.includes('Month') ? 'Month' : 'Video'}</p>
            )}
          </div>

          {/* Features List with Gold/Cyan Checkmarks */}
          {plan.features && (
            <div className="space-y-4 mb-8">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 group/item">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${bgAccent} shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300`}>
                    <Check className={`w-3 h-3 ${accentColor}`} />
                  </div>
                  <span className="text-foreground/80 group-hover/item:text-foreground transition-colors duration-300 leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Items List (for design services) */}
          {plan.items && (
            <div className="space-y-3 mb-8">
              {plan.items.map((item, i) => (
                <div key={i} className={`flex items-start justify-between gap-4 p-4 rounded-xl ${bgAccent} border ${borderColor}`}>
                  <div className="flex-1">
                    <p className="font-medium text-foreground mb-1 text-sm">{item.name}</p>
                    <p className="text-xs text-foreground/50">{item.desc}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-lg font-bold ${accentColor}`}>{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Note */}
          {plan.note && (
            <div className={`p-4 rounded-xl mb-8 ${bgAccent} border ${borderColor}`}>
              <p className="text-xs text-foreground/60">
                <span className={`font-medium ${accentColor}`}>
                  {plan.subtitle ? 'Perfect for:' : plan.name.includes('Series') ? 'Complex:' : 'Simple:'}
                </span> {plan.note}
              </p>
            </div>
          )}

          {/* Magnetic Button */}
          <button
            onClick={onClick}
            className={`w-full py-4 rounded-full font-bold text-base tracking-wide transition-all duration-500 bg-gradient-to-r ${gradientFrom} ${gradientTo} text-black hover:shadow-2xl hover:${glowColor} hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group/btn`}
          >
            <span className="relative z-10">{buttonText}</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  const { mode, setHasEntered, setCurrentSection } = useMode();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  const servicesRef = useRef<HTMLDivElement>(null);
  const subscriptionsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set(prev).add(entry.target.id));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = [servicesRef, subscriptionsRef, ctaRef];
    sections.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleReturn = () => {
    setHasEntered(false);
    setCurrentSection(mode);
    navigate('/');
  };

  // Institutional service tabs content
  const institutionalTabs = [
    {
      id: 0,
      icon: FileText,
      label: t('pricingInstTab1Label'),
      title: t('pricingInstTab1Title'),
      description: t('pricingInstTab1Desc'),
      items: [
        { name: t('pricingInstItem1Name'), desc: t('pricingInstItem1Desc'), price: t('pricingInstItem1Price') },
        { name: t('pricingInstItem2Name'), desc: t('pricingInstItem2Desc'), price: t('pricingInstItem2Price') },
        { name: t('pricingInstItem3Name'), desc: t('pricingInstItem3Desc'), price: t('pricingInstItem3Price') }
      ],
      highlight: t('pricingInstTab1Highlight')
    },
    {
      id: 1,
      icon: Database,
      label: t('pricingInstTab2Label'),
      title: t('pricingInstTab2Title'),
      description: t('pricingInstTab2Desc'),
      items: [
        { name: t('pricingInstItem4Name'), desc: t('pricingInstItem4Desc'), price: t('pricingInstItem4Price') },
        { name: t('pricingInstItem5Name'), desc: t('pricingInstItem5Desc'), price: t('pricingInstItem5Price') },
        { name: t('pricingInstItem6Name'), desc: t('pricingInstItem6Desc'), price: t('pricingInstItem6Price') },
        { name: t('pricingInstItem7Name'), desc: t('pricingInstItem7Desc'), price: t('pricingInstItem7Price') }
      ],
      highlight: t('pricingInstTab2Highlight')
    },
    {
      id: 2,
      icon: ShieldCheck,
      label: t('pricingInstTab3Label'),
      title: t('pricingInstTab3Title'),
      description: t('pricingInstTab3Desc'),
      policies: [
        {
          title: t('pricingInstPolicy1Title'),
          items: [
            { label: t('pricingInstPolicy1Item1Label'), desc: t('pricingInstPolicy1Item1Desc') },
            { label: t('pricingInstPolicy1Item2Label'), desc: t('pricingInstPolicy1Item2Desc') }
          ]
        },
        {
          title: t('pricingInstPolicy2Title'),
          items: [
            { label: t('pricingInstPolicy2Item1Label'), desc: t('pricingInstPolicy2Item1Desc') },
            { label: t('pricingInstPolicy2Item2Label'), desc: t('pricingInstPolicy2Item2Desc') }
          ]
        }
      ],
      highlight: t('pricingInstTab3Highlight')
    }
  ];

  // Creator service tabs content
  const creatorTabs = [
    {
      id: 0,
      icon: Video,
      label: t('pricingCreatorTab1Label'),
      isGrid: true,
      plans: [
        {
          name: t('pricingCreatorPlan1Name'),
          price: t('pricingCreatorPlan1Price'),
          desc: t('pricingCreatorPlan1Desc'),
          features: [t('pricingCreatorPlan1Feature1'), t('pricingCreatorPlan1Feature2'), t('pricingCreatorPlan1Feature3')],
          note: t('pricingCreatorPlan1Note')
        },
        {
          name: t('pricingCreatorPlan2Name'),
          price: t('pricingCreatorPlan2Price'),
          desc: t('pricingCreatorPlan2Desc'),
          features: [t('pricingCreatorPlan2Feature1'), t('pricingCreatorPlan2Feature2'), t('pricingCreatorPlan2Feature3')],
          note: t('pricingCreatorPlan2Note')
        },
        {
          name: t('pricingCreatorPlan3Name'),
          price: t('pricingCreatorPlan3Price'),
          desc: t('pricingCreatorPlan3Desc'),
          features: [t('pricingCreatorPlan3Feature1'), t('pricingCreatorPlan3Feature2'), t('pricingCreatorPlan3Feature3')],
          note: t('pricingCreatorPlan3Note')
        },
        {
          name: t('pricingCreatorPlan4Name'),
          price: t('pricingCreatorPlan4Price'),
          desc: t('pricingCreatorPlan4Desc'),
          features: [t('pricingCreatorPlan4Feature1'), t('pricingCreatorPlan4Feature2'), t('pricingCreatorPlan4Feature3')],
          note: t('pricingCreatorPlan4Note')
        }
      ],
      highlight: t('pricingCreatorTab1Highlight')
    },
    {
      id: 1,
      icon: Zap,
      label: t('pricingCreatorTab2Label'),
      title: t('pricingCreatorTab2Title'),
      description: t('pricingCreatorTab2Desc'),
      items: [
        { name: t('pricingCreatorItem1Name'), desc: t('pricingCreatorItem1Desc'), price: t('pricingCreatorItem1Price') },
        { name: t('pricingCreatorItem2Name'), desc: t('pricingCreatorItem2Desc'), price: t('pricingCreatorItem2Price') }
      ],
      highlight: t('pricingCreatorTab2Highlight')
    },
    {
      id: 2,
      icon: Palette,
      label: t('pricingCreatorTab3Label'),
      isGrid: true,
      plans: [
        {
          name: t('pricingCreatorDesign1Name'),
          subtitle: t('pricingCreatorDesign1Subtitle'),
          items: [
            { name: t('pricingCreatorDesign1Item1Name'), desc: t('pricingCreatorDesign1Item1Desc'), price: t('pricingCreatorDesign1Item1Price') },
            { name: t('pricingCreatorDesign1Item2Name'), desc: t('pricingCreatorDesign1Item2Desc'), price: t('pricingCreatorDesign1Item2Price') },
            { name: t('pricingCreatorDesign1Item3Name'), desc: t('pricingCreatorDesign1Item3Desc'), price: t('pricingCreatorDesign1Item3Price') }
          ],
          note: t('pricingCreatorDesign1Note')
        },
        {
          name: t('pricingCreatorDesign2Name'),
          subtitle: t('pricingCreatorDesign2Subtitle'),
          items: [
            { name: t('pricingCreatorDesign2Item1Name'), desc: t('pricingCreatorDesign2Item1Desc'), price: t('pricingCreatorDesign2Item1Price') },
            { name: t('pricingCreatorDesign2Item2Name'), desc: t('pricingCreatorDesign2Item2Desc'), price: t('pricingCreatorDesign2Item2Price') }
          ],
          note: t('pricingCreatorDesign2Note')
        }
      ],
      highlight: t('pricingCreatorTab3Highlight')
    },
    {
      id: 3,
      icon: ShieldCheck,
      label: t('pricingCreatorTab4Label'),
      title: t('pricingCreatorTab4Title'),
      description: t('pricingCreatorTab4Desc'),
      policies: [
        {
          title: t('pricingCreatorPolicy1Title'),
          items: [
            { label: t('pricingCreatorPolicy1Item1Label'), desc: t('pricingCreatorPolicy1Item1Desc') },
            { label: t('pricingCreatorPolicy1Item2Label'), desc: t('pricingCreatorPolicy1Item2Desc') }
          ]
        },
        {
          title: t('pricingCreatorPolicy2Title'),
          items: [
            { label: t('pricingCreatorPolicy2Item1Label'), desc: t('pricingCreatorPolicy2Item1Desc') },
            { label: t('pricingCreatorPolicy2Item2Label'), desc: t('pricingCreatorPolicy2Item2Desc') }
          ]
        }
      ],
      deliveryNote: t('pricingCreatorDeliveryNote'),
      highlight: t('pricingCreatorTab4Highlight')
    }
  ];

  const currentTabs = mode === 'institutional' ? institutionalTabs : creatorTabs;
  const currentTab = currentTabs[activeServiceTab];

  return (
    <>
      <Helmet>
        <title>{mode === 'institutional' ? 'Institutional Pricing' : 'Creator Pricing'} | QuickServe IT</title>
        <meta name="description" content={mode === 'institutional'
          ? "Transparent pricing for Gorakhpur's educational institutions. Fair rates, honest terms."
          : "Flexible pricing for content creators. From single projects to annual partnerships."
        } />
      </Helmet>

      <CursorLight mode={mode} />
      <FilmGrain />
      <FloatingNavbar mode={mode} onReturn={handleReturn} isVisible={true} />

      <PageWrapper mode={mode} onReturn={handleReturn}>
        <PageHeader
          title={mode === 'institutional' ? 'Pricing Plans' : 'Growth Packages'}
          subtitle={mode === 'institutional'
            ? 'Honest, per-page rates tailored for local institutions. No hidden fees or subscriptions—just a clear commitment to accuracy and timely delivery.'
            : 'Scalable monthly plans designed for serious creators. Get a consistent supply of high-quality Shorts and videos to keep your channel growing automatically.'}
          variant={mode === 'institutional' ? 'gold' : 'cyan'}
        />

        {/* Service-Based Pricing */}
        <div
          ref={servicesRef}
          id="services"
          className={`mb-12 sm:mb-14 md:mb-16 transition-all duration-slower ease-out delay-100 ${visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="text-center mb-6 sm:mb-8">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3 ${mode === 'institutional' ? 'bg-institutional/5 border border-institutional/10' : 'bg-creator/5 border border-creator/10'
              }`}>
              <Zap className={`w-3.5 h-3.5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
              <span className={`text-xs ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>
                {mode === 'institutional' ? 'Pay Per Task' : 'Pay Per Project'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display mb-2 sm:mb-3">
              Service-Based <span className={mode === 'institutional' ? 'text-institutional' : 'text-creator'}>Pricing</span>
            </h2>
            <p className="text-foreground/60 text-sm sm:text-base">
              Perfect for one-time projects or occasional needs
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 max-w-4xl mx-auto">
            {currentTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveServiceTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 rounded-full font-medium text-xs sm:text-sm md:text-base transition-all duration-normal min-h-[44px] ${activeServiceTab === tab.id
                    ? `${mode === 'institutional' ? 'bg-institutional' : 'bg-creator'} text-background shadow-lg ${mode === 'institutional' ? 'shadow-institutional/30' : 'shadow-creator/30'} scale-105`
                    : `glass-card border border-border/20 ${mode === 'institutional' ? 'hover:border-institutional/40' : 'hover:border-creator/40'} text-foreground/70 hover:text-foreground hover:scale-102`
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="max-w-7xl mx-auto">
            {currentTab.isGrid && currentTab.plans ? (
              // Grid Layout for Video Production and Design Services
              <div className="animate-fade-in">
                <div className={`grid ${currentTab.plans.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2'} gap-4 sm:gap-6 mb-6 sm:mb-8`}>
                  {currentTab.plans.map((plan, idx) => (
                    <div
                      key={idx}
                      className={`group glass-card rounded-2xl p-4 sm:p-6 md:p-8 border ${mode === 'institutional' ? 'border-institutional/30 hover:border-institutional/50 hover:shadow-institutional/20' : 'border-creator/30 hover:border-creator/50 hover:shadow-creator/20'} hover:shadow-xl transition-all duration-slow hover:scale-[1.02]`}
                    >
                      {plan.subtitle ? (
                        <>
                          <h3 className={`text-xl font-display mb-1 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>{plan.name}</h3>
                          <p className="text-sm text-foreground/40 mb-6">{plan.subtitle}</p>
                          <div className="space-y-3 mb-6">
                            {plan.items?.map((item, i) => (
                              <div key={i} className={`flex items-start justify-between gap-4 p-3 rounded-lg ${mode === 'institutional' ? 'bg-institutional/5 border border-institutional/10' : 'bg-creator/5 border border-creator/10'}`}>
                                <div className="flex-1">
                                  <p className="font-medium text-foreground mb-1 text-sm">{item.name}</p>
                                  <p className="text-xs text-foreground/50">{item.desc}</p>
                                </div>
                                <div className="text-right">
                                  <p className={`text-lg font-bold ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>{item.price}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${mode === 'institutional' ? 'bg-institutional/10 group-hover:bg-institutional/20' : 'bg-creator/10 group-hover:bg-creator/20'} transition-colors duration-normal`}>
                            {plan.name === 'Starter' && <Video className={`w-7 h-7 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />}
                            {plan.name === 'Growth' && <TrendingUp className={`w-7 h-7 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />}
                            {plan.name === 'Authority' && <Crown className={`w-7 h-7 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />}
                            {plan.name === 'Series Plan' && <Sparkles className={`w-7 h-7 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />}
                          </div>
                          <h3 className={`text-xl font-display mb-1 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>{plan.name}</h3>
                          <p className="text-sm text-foreground/40 mb-4">{plan.desc}</p>
                          <div className="mb-6">
                            <div className={`text-4xl md:text-3xl font-display mb-1 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>{plan.price}</div>
                            <p className="text-xs text-foreground/40">Per {plan.name === 'Series Plan' ? 'series' : 'video'}</p>
                          </div>
                          <div className="space-y-2.5 mb-6">
                            {plan.features?.map((feature, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm text-foreground/70 group-hover:text-foreground group-hover:translate-x-1 transition-all duration-normal">
                                <CheckCircle className={`w-4 h-4 shrink-0 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                      <div className={`p-3 rounded-lg mb-6 ${mode === 'institutional' ? 'bg-institutional/5 border border-institutional/10' : 'bg-creator/5 border border-creator/10'}`}>
                        <p className="text-xs text-foreground/60">
                          <span className={`font-medium ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>
                            {plan.subtitle ? 'Perfect for:' : plan.name === 'Series Plan' ? 'Complex:' : 'Simple:'}
                          </span> {plan.note}
                        </p>
                      </div>
                      <button
                        onClick={() => navigate('/contact')}
                        className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-normal hover:scale-[1.02] active:scale-[0.98] border ${mode === 'institutional' ? 'border-institutional hover:bg-institutional' : 'border-creator hover:bg-creator'} hover:text-background`}
                      >
                        Get Started
                      </button>
                    </div>
                  ))}
                </div>
                <div className={`p-5 rounded-lg border-l-4 max-w-3xl mx-auto ${mode === 'institutional' ? 'bg-institutional/5 border-institutional/40' : 'bg-creator/5 border-creator/40'}`}>
                  <div className="flex items-start gap-3 mb-3">
                    <Star className={`w-5 h-5 mt-0.5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                    <p className={`font-medium ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>
                      {currentTab.id === 0 ? 'Long-Form Excellence' : 'Design Excellence'}
                    </p>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">{currentTab.highlight}</p>
                </div>
              </div>
            ) : currentTab.policies ? (
              // Terms & Policy Layout
              <div className={`glass-card rounded-2xl p-6 sm:p-8 md:p-10 border animate-fade-in max-w-3xl mx-auto ${mode === 'institutional' ? 'border-institutional/30' : 'border-creator/30'}`}>
                <div className="flex items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center shrink-0 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'}`}>
                    <ShieldCheck className={`w-7 h-7 sm:w-8 sm:h-8 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl sm:text-2xl font-display mb-2 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>
                      {currentTab.title}
                    </h3>
                    <p className="text-foreground/60 leading-relaxed text-sm sm:text-base">{currentTab.description}</p>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                  {currentTab.policies.map((policy, idx) => (
                    <div key={idx} className={`p-4 sm:p-5 rounded-lg ${mode === 'institutional' ? 'bg-institutional/5 border border-institutional/10' : 'bg-creator/5 border border-creator/10'}`}>
                      <p className="font-medium text-foreground mb-3 sm:mb-4 text-base sm:text-lg">{policy.title}</p>
                      <div className="space-y-3">
                        {policy.items.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle className={`w-5 h-5 mt-0.5 shrink-0 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                            <div>
                              <p className="text-foreground mb-1 font-medium text-sm sm:text-base">{item.label}</p>
                              <p className="text-xs sm:text-sm text-foreground/60">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  {currentTab.deliveryNote && (
                    <div className={`p-4 sm:p-5 rounded-lg ${mode === 'institutional' ? 'bg-institutional/5 border border-institutional/10' : 'bg-creator/5 border border-creator/10'}`}>
                      <p className="font-medium text-foreground mb-2 sm:mb-3 text-base sm:text-lg">Delivery Timeline</p>
                      <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">
                        <span className={`font-medium ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>Standard:</span> {currentTab.deliveryNote}
                      </p>
                    </div>
                  )}
                </div>

                <div className={`p-4 sm:p-5 rounded-lg border-l-4 mb-6 ${mode === 'institutional' ? 'bg-institutional/5 border-institutional/40' : 'bg-creator/5 border-creator/40'}`}>
                  <div className="flex items-start gap-3 mb-3">
                    <ShieldCheck className={`w-5 h-5 mt-0.5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                    <p className={`font-medium ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>
                      {mode === 'institutional' ? 'Trust Protocol' : 'Professional Partnership'}
                    </p>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">{currentTab.highlight}</p>
                </div>

                <button
                  onClick={() => navigate('/contact')}
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-medium text-base sm:text-lg transition-all duration-fast hover:scale-[1.02] active:scale-[0.98] ${mode === 'institutional' ? 'bg-institutional hover:shadow-institutional/30' : 'bg-creator hover:shadow-creator/30'} text-background hover:shadow-lg`}
                >
                  Contact Us
                </button>
              </div>
            ) : (
              // Standard List Layout
              <div className={`glass-card rounded-2xl p-6 sm:p-8 md:p-10 border animate-fade-in max-w-3xl mx-auto ${mode === 'institutional' ? 'border-institutional/30' : 'border-creator/30'}`}>
                <div className="flex items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center shrink-0 ${mode === 'institutional' ? 'bg-institutional/10' : 'bg-creator/10'}`}>
                    {React.createElement(currentTab.icon, { className: `w-7 h-7 sm:w-8 sm:h-8 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}` })}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl sm:text-2xl font-display mb-2 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>
                      {currentTab.title}
                    </h3>
                    <p className="text-foreground/60 leading-relaxed text-sm sm:text-base">{currentTab.description}</p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {currentTab.items?.map((item, idx) => (
                    <div key={idx} className={`flex items-start justify-between gap-4 p-4 rounded-lg ${mode === 'institutional' ? 'bg-institutional/5 border border-institutional/10' : 'bg-creator/5 border border-creator/10'}`}>
                      <div className="flex-1">
                        <p className="font-medium text-foreground mb-1 text-sm sm:text-base">{item.name}</p>
                        <p className="text-xs sm:text-sm text-foreground/50">{item.desc}</p>
                      </div>
                      <div className="text-right">
                        <p className={`text-lg sm:text-xl font-bold ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>{item.price}</p>
                        <p className="text-xs text-foreground/40">Per {item.name.includes('Student') ? 'student' : item.name.includes('Short') ? 'short' : 'page'}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={`p-4 sm:p-5 rounded-lg border-l-4 mb-6 ${mode === 'institutional' ? 'bg-institutional/5 border-institutional/40' : 'bg-creator/5 border-creator/40'}`}>
                  <div className="flex items-start gap-3 mb-3">
                    <Star className={`w-5 h-5 mt-0.5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                    <p className={`font-medium ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>
                      {currentTab.id === 1 && mode === 'institutional' ? 'Zero-Rejection Guarantee' : currentTab.id === 1 && mode === 'creator' ? 'Platform-Ready' : 'Value Promise'}
                    </p>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">{currentTab.highlight}</p>
                </div>

                <button
                  onClick={() => navigate('/contact')}
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-medium text-base sm:text-lg transition-all duration-fast hover:scale-[1.02] active:scale-[0.98] ${mode === 'institutional' ? 'bg-institutional hover:shadow-institutional/30' : 'bg-creator hover:shadow-creator/30'} text-background hover:shadow-lg`}
                >
                  Get Instant Quote
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Subscription Plans */}
        <div
          ref={subscriptionsRef}
          id="subscriptions"
          className={`mb-12 sm:mb-14 md:mb-16 transition-all duration-slower ease-out delay-200 ${visibleSections.has('subscriptions') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="text-center mb-8 sm:mb-10">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3 ${mode === 'institutional' ? 'bg-institutional/5 border border-institutional/10' : 'bg-creator/5 border border-creator/10'
              }`}>
              <TrendingUp className={`w-3.5 h-3.5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
              <span className={`text-xs ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>
                Save Up to {mode === 'institutional' ? '17%' : '40%'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display mb-2 sm:mb-3">
              <span className={mode === 'institutional' ? 'text-institutional' : 'text-creator'}>Subscription</span> Plans
            </h2>
            <p className="text-foreground/60 text-sm sm:text-base">
              {mode === 'institutional'
                ? 'Regular UDISE+ & scholarship support — better rates, priority service'
                : 'Consistent content output with better rates and priority support'
              }
            </p>
            {mode === 'institutional' && (
              <p className="text-foreground/40 text-xs mt-2">
                📄 Paper typing always billed separately at standard rates
              </p>
            )}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mode === 'institutional' ? (
              <>
                {/* Monthly Plan */}
                <PricingCardVIP
                  mode={mode}
                  plan={{
                    name: 'Basic Support',
                    price: '₹2,999',
                    desc: 'Month-to-month flexibility',
                    features: ['UDISE+ support included', 'Scholarship processing', 'Priority WhatsApp support', '48hr turnaround']
                  }}
                  onClick={() => navigate('/contact')}
                  buttonText="Start Monthly Plan"
                />

                {/* 6-Month Plan - HIGHLIGHTED */}
                <PricingCardVIP
                  mode={mode}
                  plan={{
                    name: 'Premium Support',
                    price: '₹15,999',
                    desc: 'Best value for schools',
                    features: ['All Monthly benefits', '24hr priority turnaround', 'Dedicated support channel', 'Quarterly review calls']
                  }}
                  isPopular={true}
                  badge="MOST POPULAR"
                  onClick={() => navigate('/contact')}
                  buttonText="Start 6-Month Plan"
                />

                {/* Annual Plan */}
                <PricingCardVIP
                  mode={mode}
                  plan={{
                    name: 'Annual Partnership',
                    price: '₹29,999',
                    desc: 'Maximum savings',
                    features: ['All 6-Month benefits', '12hr rush support available', 'Dedicated account manager', 'Annual planning support']
                  }}
                  onClick={() => navigate('/contact')}
                  buttonText="Start Annual Plan"
                />
              </>
            ) : (
              <>
                {/* Creator Monthly */}
                <PricingCardVIP
                  mode={mode}
                  plan={{
                    name: 'Content Creator',
                    price: 'Custom',
                    desc: 'Regular uploaders',
                    features: ['4-8 videos/month', 'Priority editing queue', 'Thumbnails included', 'Faster 48hr turnaround']
                  }}
                  onClick={() => navigate('/contact')}
                  buttonText="Start Monthly Plan"
                />

                {/* Creator Quarterly - HIGHLIGHTED */}
                <PricingCardVIP
                  mode={mode}
                  plan={{
                    name: 'Pro Creator',
                    price: 'Custom',
                    desc: 'Serious content creators',
                    features: ['All Monthly benefits', '30% discount on all services', '24hr rush delivery option', 'Dedicated project manager']
                  }}
                  isPopular={true}
                  badge="BEST VALUE"
                  onClick={() => navigate('/contact')}
                  buttonText="Start Pro Plan"
                />

                {/* Creator Annual */}
                <PricingCardVIP
                  mode={mode}
                  plan={{
                    name: 'Elite Partnership',
                    price: 'Custom',
                    desc: 'Full-time creators',
                    features: ['All Quarterly benefits', '40% discount - best rates', 'Up to 3 revision rounds', 'Dedicated editing team']
                  }}
                  onClick={() => navigate('/contact')}
                  buttonText="Explore Elite Plan"
                />
              </>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div
          ref={ctaRef}
          id="cta"
          className={`max-w-4xl mx-auto transition-all duration-slower ease-out delay-300 ${visibleSections.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className={`glass-card rounded-2xl p-6 sm:p-8 md:p-10 border text-center ${mode === 'institutional' ? 'border-institutional/20' : 'border-creator/20'}`}>
            <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
              {mode === 'institutional' ? <Users className="w-5 h-5 text-institutional" /> : <TrendingUp className="w-5 h-5 text-creator" />}
              <p className={`text-sm font-medium ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>
                {mode === 'institutional' ? 'Trusted by Educational Institutions in Gorakhpur' : 'Trusted by Growing Content Creators'}
              </p>
            </div>

            <blockquote className="text-foreground/70 leading-relaxed mb-6 sm:mb-8 italic text-base sm:text-lg">
              "This pricing is designed for serious {mode === 'institutional' ? 'institutions' : 'creators'}. All work is scope-based, clearly defined, and executed professionally. Only what is written here is promised and delivered."
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => navigate('/contact')}
                className={`inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-fast hover:scale-[1.02] active:scale-[0.98] ${mode === 'institutional' ? 'bg-institutional hover:shadow-institutional/30' : 'bg-creator hover:shadow-creator/30'} text-background hover:shadow-lg text-sm sm:text-base`}
              >
                Get Custom Quote Now
              </button>
              <p className="text-xs text-foreground/40">
                💬 {mode === 'institutional' ? 'Response within 2 hours • No obligation' : 'Free consultation • Portfolio review included'}
              </p>
            </div>
          </div>
        </div>
      </PageWrapper>

      <Footer mode={mode} />
    </>
  );
};

export default Pricing;
