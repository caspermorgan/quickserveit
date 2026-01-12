import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
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
      label: 'Documentation',
      title: 'Examination & Documentation',
      description: 'Professional typing & formatting services with error-free delivery',
      items: [
        { name: 'English Typing', desc: 'Standard documentation & exam papers', price: '₹20/page' },
        { name: 'Hindi Typing', desc: 'Unicode formatting • Specialized skill', price: '₹25/page' },
        { name: 'Maths / Science', desc: 'Formulas, diagrams, equations', price: '₹30/page' }
      ],
      highlight: 'Error-free formatting optimized for bulk printing. Includes equation editor, diagram support, and professional layout.'
    },
    {
      id: 1,
      icon: Database,
      label: 'Data Services',
      title: 'Data Architecture',
      description: 'UDISE+ & scholarship processing with zero-rejection guarantee',
      items: [
        { name: 'UDISE+ Existing Student', desc: '2026-27 session update', price: '₹10/student' },
        { name: 'UDISE+ New Student', desc: 'Complete account creation • Validation', price: '₹15/student' },
        { name: 'Scholarship Verification', desc: 'Portal + Biometric + DSC forwarding', price: '₹30-₹50' },
        { name: 'Daily Tech Support', desc: 'Micro to heavy tasks • Full working day', price: '₹99-₹499' }
      ],
      highlight: '99.9% acceptance rate on first submission. We handle re-submissions at no extra cost.'
    },
    {
      id: 2,
      icon: ShieldCheck,
      label: 'Terms',
      title: 'Terms & Protocol',
      description: 'The professional handshake - clear terms, secure workflow',
      policies: [
        {
          title: 'Payment Terms',
          items: [
            { label: 'Small Tasks: 100% Advance', desc: 'Full payment before starting' },
            { label: 'Large Work: 50% Advance', desc: 'Work starts only after confirmation' }
          ]
        },
        {
          title: 'Corrections Policy',
          items: [
            { label: 'Minor Corrections Included', desc: 'Within agreed scope' },
            { label: 'New Ideas Charged Separately', desc: 'Late changes outside original scope' }
          ]
        }
      ],
      highlight: 'Built on mutual respect and transparency. Our terms protect both parties and ensure smooth collaboration.'
    }
  ];

  // Creator service tabs content
  const creatorTabs = [
    {
      id: 0,
      icon: Video,
      label: 'Video',
      isGrid: true,
      plans: [
        {
          name: 'Starter',
          price: '₹999',
          desc: 'Simple editing',
          features: ['Clean cuts', 'Basic color correction', 'Smooth flow'],
          note: 'Clean, professional basics'
        },
        {
          name: 'Growth',
          price: '₹1,999',
          desc: 'Narrative-focused',
          features: ['Better pacing', 'Structured storytelling', 'Enhanced flow'],
          note: 'Narrative-focused editing'
        },
        {
          name: 'Authority',
          price: '₹2,999',
          desc: 'Complex editing',
          features: ['Advanced color grading', 'Motion graphics', 'VFX elements'],
          note: 'Premium production'
        },
        {
          name: 'Series Plan',
          price: '₹4,999',
          desc: 'Multi-video',
          features: ['Consistent episodic', 'Long-form production', 'Series branding'],
          note: 'Multi-episode series'
        }
      ],
      highlight: 'Professional 1080p delivery with cinematic color grading. All packages include platform-ready formatting and up to 2 rounds of revisions.'
    },
    {
      id: 1,
      icon: Zap,
      label: 'Shorts',
      title: 'Viral Shorts',
      description: 'Algorithm-optimized short-form content for maximum engagement',
      items: [
        { name: 'Standard Shorts', desc: 'Clean edits • Trending audio • Quick delivery', price: '₹499' },
        { name: 'Premium Shorts', desc: 'Advanced effects • Custom graphics • Priority queue', price: '₹999' }
      ],
      highlight: 'Optimized for Instagram Reels, YouTube Shorts, and TikTok. Includes trending audio selection and platform-specific formatting.'
    },
    {
      id: 2,
      icon: Palette,
      label: 'Design',
      isGrid: true,
      plans: [
        {
          name: 'Motion Graphics',
          subtitle: '2.5D Animation & VFX',
          items: [
            { name: 'Basic Motion', desc: 'Simple animations', price: '₹699' },
            { name: 'Advanced VFX', desc: 'Complex effects', price: '₹1,999' },
            { name: 'Pro VFX', desc: 'Premium production', price: '₹2,699' }
          ],
          note: 'Perfect for intros, transitions, lower thirds'
        },
        {
          name: 'Thumbnails & Scripts',
          subtitle: 'High-CTR design + scripts',
          items: [
            { name: 'Thumbnail Only', desc: 'Design only', price: '₹299' },
            { name: 'With Strategy + Script', desc: 'Design + script + consultation', price: '₹699' }
          ],
          note: 'Includes script writing, A/B testing guidance'
        }
      ],
      highlight: 'Professional design services to elevate your content. All deliverables include source files and up to 2 rounds of revisions.'
    },
    {
      id: 3,
      icon: ShieldCheck,
      label: 'Terms',
      title: 'Terms & Workflow',
      description: 'Clear terms for smooth collaboration',
      policies: [
        {
          title: 'Payment Terms',
          items: [
            { label: 'Small Projects: 100% Advance', desc: 'Full payment before starting' },
            { label: 'Large Projects: 50% Advance', desc: 'Work starts after confirmation' }
          ]
        },
        {
          title: 'Revision Policy',
          items: [
            { label: 'Up to 2 Rounds of Revisions', desc: 'Within agreed scope only' },
            { label: 'Major Changes Charged Separately', desc: 'Late changes outside original scope' }
          ]
        }
      ],
      deliveryNote: 'Standard: 3-5 business days for most projects. Rush delivery available for subscription clients at no extra cost.',
      highlight: 'Built on mutual respect and transparency. Our terms protect both parties and ensure smooth collaboration.'
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

      <main className="min-h-screen bg-background pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden">
        {/* Background Gradient Orbs */}
        <div className={`gradient-orb ${mode === 'institutional' ? 'gradient-orb-institutional' : 'gradient-orb-creator'} w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] top-0 right-0 opacity-20`} />
        <div className={`gradient-orb ${mode === 'institutional' ? 'gradient-orb-institutional' : 'gradient-orb-creator'} w-[350px] sm:w-[450px] md:w-[500px] h-[350px] sm:h-[450px] md:h-[500px] bottom-0 left-0 opacity-15`} />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Hero Section */}
          <div
            ref={heroRef}
            id="hero"
            className={`text-center mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto transition-all duration-700 ease-out ${visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <H1 className="mb-4 sm:mb-5 md:mb-6">
              {mode === 'institutional' ? (
                <>Professional <span className="text-institutional">Institutional</span> Pricing</>
              ) : (
                <>Premium <span className="text-creator">Creator</span> Services</>
              )}
            </H1>
            <p className="text-foreground/70 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-7 md:mb-8 px-4">
              {mode === 'institutional'
                ? 'Scope-based pricing for serious institutions. Only what is written here is promised and delivered.'
                : 'Professional production for serious creators. Clearly defined scope. Professionally executed.'
              }
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-foreground/50">
              <div className="flex items-center gap-2">
                <CheckCircle className={`w-4 h-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                <span>{mode === 'institutional' ? 'No Hidden Fees' : '1080p Delivery'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className={`w-4 h-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                <span>{mode === 'institutional' ? 'Clear Terms' : 'Platform-Ready'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className={`w-4 h-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'}`} />
                <span>{mode === 'institutional' ? 'Zero-Rejection Guarantee' : 'Clear Scope'}</span>
              </div>
            </div>
          </div>

          {/* Service-Based Pricing */}
          <div
            ref={servicesRef}
            id="services"
            className={`mb-12 sm:mb-14 md:mb-16 transition-all duration-700 ease-out delay-100 ${visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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
                    className={`inline-flex items-center gap-2 px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 rounded-full font-medium text-xs sm:text-sm md:text-base transition-all duration-300 min-h-[44px] ${activeServiceTab === tab.id
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
                        className={`group glass-card rounded-2xl p-4 sm:p-6 md:p-8 border ${mode === 'institutional' ? 'border-institutional/30 hover:border-institutional/50 hover:shadow-institutional/20' : 'border-creator/30 hover:border-creator/50 hover:shadow-creator/20'} hover:shadow-xl transition-all duration-500 hover:scale-[1.02]`}
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
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${mode === 'institutional' ? 'bg-institutional/10 group-hover:bg-institutional/20' : 'bg-creator/10 group-hover:bg-creator/20'} transition-colors duration-300`}>
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
                                <div key={i} className="flex items-center gap-2 text-sm text-foreground/70 group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300">
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
                          className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border ${mode === 'institutional' ? 'border-institutional hover:bg-institutional' : 'border-creator hover:bg-creator'} hover:text-background`}
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
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-medium text-base sm:text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${mode === 'institutional' ? 'bg-institutional hover:shadow-institutional/30' : 'bg-creator hover:shadow-creator/30'} text-background hover:shadow-lg`}
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
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-medium text-base sm:text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${mode === 'institutional' ? 'bg-institutional hover:shadow-institutional/30' : 'bg-creator hover:shadow-creator/30'} text-background hover:shadow-lg`}
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
            className={`mb-12 sm:mb-14 md:mb-16 transition-all duration-700 ease-out delay-200 ${visibleSections.has('subscriptions') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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
                  <div className={`glass-card rounded-2xl p-6 sm:p-8 border transition-all duration-500 hover:scale-[1.01] ${mode === 'institutional' ? 'border-border/20 hover:border-institutional/30' : 'border-border/20 hover:border-creator/30'}`}>
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
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border ${mode === 'institutional' ? 'border-institutional hover:bg-institutional' : 'border-creator hover:bg-creator'} hover:text-background text-sm sm:text-base`}
                    >
                      Start Monthly Plan
                    </button>
                  </div>

                  {/* 6-Month Plan - HIGHLIGHTED */}
                  <div className={`glass-card rounded-2xl p-6 sm:p-8 border-2 relative overflow-hidden transition-all duration-500 hover:scale-[1.02] ${mode === 'institutional' ? 'border-institutional/60 ring-4 ring-institutional/30 hover:border-institutional/80 hover:shadow-institutional/30' : 'border-creator/60 ring-4 ring-creator/30 hover:border-creator/80 hover:shadow-creator/30'} hover:shadow-2xl`}>
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
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${mode === 'institutional' ? 'bg-institutional hover:shadow-institutional/40' : 'bg-creator hover:shadow-creator/40'} text-background hover:shadow-xl text-sm sm:text-base`}
                    >
                      Start 6-Month Plan
                    </button>
                  </div>

                  {/* Annual Plan */}
                  <div className={`glass-card rounded-2xl p-6 sm:p-8 border transition-all duration-500 hover:scale-[1.01] ${mode === 'institutional' ? 'border-border/20 hover:border-institutional/30' : 'border-border/20 hover:border-creator/30'}`}>
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
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border ${mode === 'institutional' ? 'border-institutional hover:bg-institutional' : 'border-creator hover:bg-creator'} hover:text-background text-sm sm:text-base`}
                    >
                      Start Annual Plan
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* Creator Monthly */}
                  <div className={`glass-card rounded-2xl p-6 sm:p-8 border transition-all duration-500 hover:scale-[1.01] ${mode === 'institutional' ? 'border-border/20 hover:border-institutional/30' : 'border-border/20 hover:border-creator/30'}`}>
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
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border ${mode === 'institutional' ? 'border-institutional hover:bg-institutional' : 'border-creator hover:bg-creator'} hover:text-background text-sm sm:text-base`}
                    >
                      Start Monthly Plan
                    </button>
                  </div>

                  {/* Creator Quarterly - HIGHLIGHTED */}
                  <div className={`glass-card rounded-2xl p-6 sm:p-8 border-2 relative overflow-hidden transition-all duration-500 hover:scale-[1.02] ${mode === 'institutional' ? 'border-institutional/50 ring-2 ring-institutional/20 hover:border-institutional/70' : 'border-creator/50 ring-2 ring-creator/20 hover:border-creator/70'}`}>
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
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${mode === 'institutional' ? 'bg-institutional hover:shadow-institutional/30' : 'bg-creator hover:shadow-creator/30'} text-background hover:shadow-lg text-sm sm:text-base`}
                    >
                      Start Pro Plan
                    </button>
                  </div>

                  {/* Creator Annual */}
                  <div className={`glass-card rounded-2xl p-6 sm:p-8 border transition-all duration-500 hover:scale-[1.01] ${mode === 'institutional' ? 'border-border/20 hover:border-institutional/30' : 'border-border/20 hover:border-creator/30'}`}>
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
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border ${mode === 'institutional' ? 'border-institutional hover:bg-institutional' : 'border-creator hover:bg-creator'} hover:text-background text-sm sm:text-base`}
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
            className={`max-w-4xl mx-auto transition-all duration-700 ease-out delay-300 ${visibleSections.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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
                  className={`inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${mode === 'institutional' ? 'bg-institutional hover:shadow-institutional/30' : 'bg-creator hover:shadow-creator/30'} text-background hover:shadow-lg text-sm sm:text-base`}
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
