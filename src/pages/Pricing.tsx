import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
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
  Crown
} from 'lucide-react';
import { H1 } from '@/components/Typography';

const Pricing = () => {
  const { mode, setHasEntered, setCurrentSection } = useMode();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  const heroRef = useRef<HTMLDivElement>(null);
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

    const sections = [heroRef, servicesRef, subscriptionsRef, ctaRef];
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

      <main id="main-content" className="min-h-screen bg-background pt-24 sm:pt-28 md:pt-32 pb-28 sm:pb-28 md:pb-20 relative overflow-hidden">
        {/* Background Gradient Orbs */}
        <div className={`gradient-orb ${mode === 'institutional' ? 'gradient-orb-institutional' : 'gradient-orb-creator'} w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] top-0 right-0 opacity-20`} />
        <div className={`gradient-orb ${mode === 'institutional' ? 'gradient-orb-institutional' : 'gradient-orb-creator'} w-[350px] sm:w-[450px] md:w-[500px] h-[350px] sm:h-[450px] md:h-[500px] bottom-0 left-0 opacity-15`} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Section */}
          <div
            ref={heroRef}
            id="hero"
            className={`text-center mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto transition-all duration-slower ease-out ${visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <H1 className="mb-4 sm:mb-5 md:mb-6">
              {t('pricingHeroTitle').split(' ').slice(0, -1).join(' ')} <span className={mode === 'institutional' ? 'text-institutional' : 'text-creator'}>{t('pricingHeroTitle').split(' ').slice(-1)}</span>
            </H1>
            <p className="text-foreground/70 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-7 md:mb-8 px-4">
              {t('pricingHeroSubtitle')}
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-foreground/50">
              <div className="flex items-center gap-2">
                <CheckCircle className={`w-4 h-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                <span>{t('pricingTrust1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className={`w-4 h-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                <span>{t('pricingTrust2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className={`w-4 h-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                <span>{t('pricingTrust3')}</span>
              </div>
            </div>
          </div>

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

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {mode === 'institutional' ? (
                <>
                  {/* Monthly Plan */}
                  <div className={`glass-card rounded-2xl p-6 sm:p-8 border transition-all duration-slow hover:scale-[1.01] ${mode === 'institutional' ? 'border-border/20 hover:border-institutional/30' : 'border-border/20 hover:border-creator/30'}`}>
                    <div className="mb-6">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 ${mode === 'institutional' ? 'bg-institutional/10 border border-institutional/20' : 'bg-creator/10 border border-creator/20'}`}>
                        <Clock className={`w-3 h-3 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                        <span className={`text-xs font-medium ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>Monthly</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-display mb-1">Basic Support</h3>
                      <p className="text-xs sm:text-sm text-foreground/50 mb-4">Month-to-month flexibility</p>
                      <div className="mb-4">
                        <div className={`text-2xl sm:text-3xl font-display mb-1 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>₹2,999</div>
                        <p className="text-xs text-foreground/40">Per month • No commitment</p>
                      </div>
                    </div>
                    <div className="space-y-2.5 mb-6">
                      {['UDISE+ support included', 'Scholarship processing', 'Priority WhatsApp support', '48hr turnaround'].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-foreground/70">
                          <CheckCircle className={`w-4 h-4 shrink-0 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => navigate('/contact')}
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-fast hover:scale-[1.02] active:scale-[0.98] border ${mode === 'institutional' ? 'border-institutional hover:bg-institutional' : 'border-creator hover:bg-creator'} hover:text-background text-sm sm:text-base`}
                    >
                      Start Monthly Plan
                    </button>
                  </div>

                  {/* 6-Month Plan - HIGHLIGHTED */}
                  <div className={`glass-card rounded-2xl p-6 sm:p-8 border-2 relative overflow-hidden transition-all duration-slow hover:scale-[1.02] ${mode === 'institutional' ? 'border-institutional/60 ring-4 ring-institutional/30 hover:border-institutional/80 hover:shadow-institutional/30' : 'border-creator/60 ring-4 ring-creator/30 hover:border-creator/80 hover:shadow-creator/30'} hover:shadow-2xl`}>
                    <div className={`absolute top-0 right-0 px-4 py-1.5 text-xs font-bold tracking-wide ${mode === 'institutional' ? 'bg-institutional' : 'bg-creator'} text-background`}>
                      MOST POPULAR
                    </div>
                    <div className="mb-6 mt-2">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 ${mode === 'institutional' ? 'bg-institutional/20 border border-institutional/30' : 'bg-creator/20 border border-creator/30'}`}>
                        <Crown className={`w-3 h-3 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                        <span className={`text-xs font-medium ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>6 Months</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-display mb-1">Premium Support</h3>
                      <p className="text-xs sm:text-sm text-foreground/40 mb-4">Best value for schools</p>
                      <div className="mb-4">
                        <div className="flex items-baseline gap-2">
                          <div className={`text-2xl sm:text-3xl font-display ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>₹15,999</div>
                          <div className={`px-2 py-0.5 rounded text-xs font-bold ${mode === 'institutional' ? 'bg-institutional/20 text-institutional' : 'bg-creator/20 text-creator'}`}>SAVE 11%</div>
                        </div>
                        <p className="text-xs text-foreground/40">₹2,666/month • Save ₹2,000</p>
                      </div>
                    </div>
                    <div className="space-y-2.5 mb-6">
                      {['All Monthly benefits', '24hr priority turnaround', 'Dedicated support channel', 'Quarterly review calls'].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-foreground/70">
                          <CheckCircle className={`w-4 h-4 shrink-0 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                          <span className={i === 0 ? 'font-medium' : ''}>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => navigate('/contact')}
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-normal hover:scale-[1.02] active:scale-[0.98] ${mode === 'institutional' ? 'bg-institutional hover:shadow-institutional/40' : 'bg-creator hover:shadow-creator/40'} text-background hover:shadow-xl text-sm sm:text-base`}
                    >
                      Start 6-Month Plan
                    </button>
                  </div>

                  {/* Annual Plan */}
                  <div className={`glass-card rounded-2xl p-6 sm:p-8 border transition-all duration-slow hover:scale-[1.01] ${mode === 'institutional' ? 'border-border/20 hover:border-institutional/30' : 'border-border/20 hover:border-creator/30'}`}>
                    <div className="mb-6">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 ${mode === 'institutional' ? 'bg-institutional/10 border border-institutional/20' : 'bg-creator/10 border border-creator/20'}`}>
                        <Award className={`w-3 h-3 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                        <span className={`text-xs font-medium ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>Best Value</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-display mb-1">Annual Partnership</h3>
                      <p className="text-xs sm:text-sm text-foreground/50 mb-4">Maximum savings</p>
                      <div className="mb-4">
                        <div className="flex items-baseline gap-2">
                          <div className={`text-2xl sm:text-3xl font-display ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>₹29,999</div>
                          <div className={`px-2 py-0.5 rounded text-xs font-bold ${mode === 'institutional' ? 'bg-institutional/20 text-institutional' : 'bg-creator/20 text-creator'}`}>SAVE 17%</div>
                        </div>
                        <p className="text-xs text-foreground/40">₹2,499/month • Save ₹6,000</p>
                      </div>
                    </div>
                    <div className="space-y-2.5 mb-6">
                      {['All 6-Month benefits', '12hr rush support available', 'Dedicated account manager', 'Annual planning support'].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-foreground/70">
                          <CheckCircle className={`w-4 h-4 shrink-0 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                          <span className={i === 0 ? 'font-medium' : ''}>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => navigate('/contact')}
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-fast hover:scale-[1.02] active:scale-[0.98] border ${mode === 'institutional' ? 'border-institutional hover:bg-institutional' : 'border-creator hover:bg-creator'} hover:text-background text-sm sm:text-base`}
                    >
                      Start Annual Plan
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* Creator Monthly */}
                  <div className={`glass-card rounded-2xl p-6 sm:p-8 border transition-all duration-slow hover:scale-[1.01] ${mode === 'institutional' ? 'border-border/20 hover:border-institutional/30' : 'border-border/20 hover:border-creator/30'}`}>
                    <div className="mb-6">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 ${mode === 'institutional' ? 'bg-institutional/10 border border-institutional/20' : 'bg-creator/10 border border-creator/20'}`}>
                        <Clock className={`w-3 h-3 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                        <span className={`text-xs font-medium ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>Monthly</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-display mb-1">Content Creator</h3>
                      <p className="text-xs sm:text-sm text-foreground/50 mb-4">Regular uploaders</p>
                      <div className="mb-4">
                        <div className="flex items-baseline gap-2">
                          <div className={`text-2xl sm:text-3xl font-display ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>Custom</div>
                          <div className={`px-2 py-0.5 rounded text-xs font-bold ${mode === 'institutional' ? 'bg-institutional/20 text-institutional' : 'bg-creator/20 text-creator'}`}>SAVE 20%</div>
                        </div>
                        <p className="text-xs text-foreground/40">4-8 videos per month</p>
                      </div>
                    </div>
                    <div className="space-y-2.5 mb-6">
                      {['4-8 videos/month', 'Priority editing queue', 'Thumbnails included', 'Faster 48hr turnaround'].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-foreground/70">
                          <CheckCircle className={`w-4 h-4 shrink-0 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => navigate('/contact')}
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-fast hover:scale-[1.02] active:scale-[0.98] border ${mode === 'institutional' ? 'border-institutional hover:bg-institutional' : 'border-creator hover:bg-creator'} hover:text-background text-sm sm:text-base`}
                    >
                      Start Monthly Plan
                    </button>
                  </div>

                  {/* Creator Quarterly - HIGHLIGHTED */}
                  <div className={`glass-card rounded-2xl p-6 sm:p-8 border-2 relative overflow-hidden transition-all duration-slow hover:scale-[1.02] ${mode === 'institutional' ? 'border-institutional/50 ring-2 ring-institutional/20 hover:border-institutional/70' : 'border-creator/50 ring-2 ring-creator/20 hover:border-creator/70'}`}>
                    <div className={`absolute top-0 right-0 px-4 py-1.5 text-xs font-bold tracking-wide ${mode === 'institutional' ? 'bg-institutional' : 'bg-creator'} text-background`}>
                      BEST VALUE
                    </div>
                    <div className="mb-6 mt-2">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 ${mode === 'institutional' ? 'bg-institutional/20 border border-institutional/30' : 'bg-creator/20 border border-creator/30'}`}>
                        <Crown className={`w-3 h-3 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                        <span className={`text-xs font-medium ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>Quarterly</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-display mb-1">Pro Creator</h3>
                      <p className="text-xs sm:text-sm text-foreground/50 mb-4">Serious content creators</p>
                      <div className="mb-4">
                        <div className="flex items-baseline gap-2">
                          <div className={`text-2xl sm:text-3xl font-display ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>Custom</div>
                          <div className={`px-2 py-0.5 rounded text-xs font-bold ${mode === 'institutional' ? 'bg-institutional/20 text-institutional' : 'bg-creator/20 text-creator'}`}>SAVE 30%</div>
                        </div>
                        <p className="text-xs text-foreground/40">12-24 videos per quarter</p>
                      </div>
                    </div>
                    <div className="space-y-2.5 mb-6">
                      {['All Monthly benefits', '30% discount on all services', '24hr rush delivery option', 'Dedicated project manager'].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-foreground/70">
                          <CheckCircle className={`w-4 h-4 shrink-0 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                          <span className={i === 0 ? 'font-medium' : ''}>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => navigate('/contact')}
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-fast hover:scale-[1.02] active:scale-[0.98] ${mode === 'institutional' ? 'bg-institutional hover:shadow-institutional/30' : 'bg-creator hover:shadow-creator/30'} text-background hover:shadow-lg text-sm sm:text-base`}
                    >
                      Start Pro Plan
                    </button>
                  </div>

                  {/* Creator Annual */}
                  <div className={`glass-card rounded-2xl p-6 sm:p-8 border transition-all duration-slow hover:scale-[1.01] ${mode === 'institutional' ? 'border-border/20 hover:border-institutional/30' : 'border-border/20 hover:border-creator/30'}`}>
                    <div className="mb-6">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 ${mode === 'institutional' ? 'bg-institutional/10 border border-institutional/20' : 'bg-creator/10 border border-creator/20'}`}>
                        <Award className={`w-3 h-3 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                        <span className={`text-xs font-medium ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>Annual</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-display mb-1">Elite Partnership</h3>
                      <p className="text-xs sm:text-sm text-foreground/50 mb-4">Full-time creators</p>
                      <div className="mb-4">
                        <div className="flex items-baseline gap-2">
                          <div className={`text-2xl sm:text-3xl font-display ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`}>Custom</div>
                          <div className={`px-2 py-0.5 rounded text-xs font-bold ${mode === 'institutional' ? 'bg-institutional/20 text-institutional' : 'bg-creator/20 text-creator'}`}>SAVE 40%</div>
                        </div>
                        <p className="text-xs text-foreground/40">Up to 50 projects/year</p>
                      </div>
                    </div>
                    <div className="space-y-2.5 mb-6">
                      {['All Quarterly benefits', '40% discount - best rates', 'Up to 3 revision rounds', 'Dedicated editing team'].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-foreground/70">
                          <CheckCircle className={`w-4 h-4 shrink-0 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                          <span className={i === 0 ? 'font-medium' : ''}>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => navigate('/contact')}
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-fast hover:scale-[1.02] active:scale-[0.98] border ${mode === 'institutional' ? 'border-institutional hover:bg-institutional' : 'border-creator hover:bg-creator'} hover:text-background text-sm sm:text-base`}
                    >
                      Explore Elite Plan
                    </button>
                  </div>
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
        </div>
      </main>

      <Footer mode={mode} />
    </>
  );
};

export default Pricing;
