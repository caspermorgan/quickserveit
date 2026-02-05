import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate } from 'react-router-dom';
import FloatingNavbar from '@/modules/core/components/FloatingNavbar';
import PageWrapper from '@/modules/core/layouts/PageWrapper';
import PageHeader from '@/modules/core/layouts/PageHeader';
import CursorLight from '@/modules/core/components/CursorLight';
import FilmGrain from '@/modules/core/components/FilmGrain';
import Footer from '@/modules/core/components/Footer';
import {
  FileText,
  GraduationCap,
  Calendar,
  Video,
  Lightbulb,
  MessageCircle,
  Smartphone,
  Layers,
  Sparkles,
  Play,
  Image as ImageIcon,
  FileCheck,
  Database,
  CheckCircle2,
  Clock,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAdobeaudition,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiBlender
} from 'react-icons/si';

// Software Icon Mapping
const softwareIconMap: Record<string, any> = {
  'Premiere Pro': SiAdobepremierepro,
  'After Effects': SiAdobeaftereffects,
  'Audition': SiAdobeaudition,
  'Photoshop': SiAdobephotoshop,
  'Illustrator': SiAdobeillustrator,
  'Blender': SiBlender,
  'DaVinci Resolve': Video,
  'Midjourney': Sparkles,
  'Notion': FileText
};

const Services = () => {
  const { mode, setHasEntered } = useMode();
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleReturn = () => {
    setHasEntered(false);
    navigate('/');
  };

  const handleServiceChange = (index: number) => {
    if (index === activeService) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveService(index);
      setIsTransitioning(false);
    }, 200);
  };

  // PRESERVED DATA: Institutional Services
  const institutionalServices = [
    {
      id: 'exam-docs',
      icon: FileText,
      title: 'Exam Documentation',
      tagline: 'Error-Free. On Time. Every Time.',
      description: 'Professional typing and formatting of examination papers with strict quality protocols.',
      fullDescKey: 'Professional typing, formatting, and quality assurance for all types of examination papers. We handle everything from question papers to answer sheets with zero-error tolerance and strict confidentiality.',
      features: ['350+ Papers Delivered', 'Zero Error Tolerance', '24-48hr Turnaround', 'Confidential Handling'],
      stepsKey: ['Document Receipt & Analysis', 'Professional Typing & Formatting', 'Multi-Level Quality Check', 'Secure Delivery'],
      needsKey: ['Original documents or clear scans', 'Formatting specifications', 'Delivery deadline', 'Contact information'],
      timelineKey: '24-48 hours',
      artifact: 'exam',
      color: 'from-blue-500 to-cyan-500',
      whatsappTemplate: 'Hi! I need help with Exam Documentation services.'
    },
    {
      id: 'udise',
      icon: Database,
      title: 'UDISE+ Management',
      tagline: 'Accurate Data. Seamless Compliance.',
      description: 'Complete UDISE+ portal data entry and management for educational institutions.',
      fullDescKey: 'End-to-end UDISE+ portal management including data entry, verification, updates, and compliance reporting. We ensure your institution meets all government requirements with accurate, timely submissions.',
      features: ['Real-time Updates', 'Compliance Assured', 'Dedicated Support', 'Deadline Management'],
      stepsKey: ['Data Collection & Verification', 'Portal Entry & Validation', 'Compliance Check', 'Submission & Reporting'],
      needsKey: ['Student enrollment data', 'Staff information', 'Infrastructure details', 'Previous UDISE records'],
      timelineKey: '3-5 business days',
      artifact: 'udise',
      color: 'from-purple-500 to-pink-500',
      whatsappTemplate: 'Hi! I need assistance with UDISE+ Management.'
    },
    {
      id: 'scholarships',
      icon: GraduationCap,
      title: 'Scholarship Processing',
      tagline: 'Maximize Student Success.',
      description: 'End-to-end scholarship application support and documentation.',
      fullDescKey: 'Complete scholarship application assistance from documentation to biometric verification. We help maximize student success rates with expert guidance through every step of the scholarship process.',
      features: ['Application Filing', 'Document Verification', 'Status Tracking', 'Biometric Support'],
      stepsKey: ['Eligibility Assessment', 'Document Preparation', 'Application Submission', 'Follow-up & Tracking'],
      needsKey: ['Student academic records', 'Income certificates', 'Caste certificates (if applicable)', 'Bank account details'],
      timelineKey: '2-3 days per application',
      artifact: 'scholarship',
      color: 'from-green-500 to-emerald-500',
      whatsappTemplate: 'Hi! I need help with Scholarship Processing.'
    },
    {
      id: 'daily-support',
      icon: Calendar,
      title: 'Daily Tech Support',
      tagline: 'Your Digital Partner.',
      description: 'Monthly retainer-based digital support for all institutional needs.',
      fullDescKey: 'Comprehensive monthly tech support covering all your digital needs. From urgent fixes to planned projects, we\'re your dedicated technology partner ensuring smooth operations every day.',
      features: ['On-Demand Help', 'Priority Response', 'Custom Solutions', 'Predictable Costs'],
      stepsKey: ['Needs Assessment', 'Support Plan Setup', 'Ongoing Assistance', 'Monthly Review'],
      needsKey: ['List of regular tasks', 'Access credentials', 'Communication channels', 'Budget allocation'],
      timelineKey: 'Ongoing monthly service',
      artifact: 'support',
      color: 'from-amber-500 to-orange-500',
      whatsappTemplate: 'Hi! I\'m interested in Daily Tech Support services.'
    }
  ];

  // PRESERVED DATA: Creator Services
  const creatorServices = [
    {
      id: 'video-editing',
      icon: Video,
      title: 'Premium Video Production',
      tagline: 'Cinematic. Engaging. Professional.',
      description: 'High-quality long-form video editing for YouTube creators.',
      fullDescKey: 'Professional video editing services including color grading, sound design, motion graphics, and storytelling. We transform raw footage into polished, engaging content that keeps viewers watching.',
      features: ['Color Grading', 'Sound Design', 'Motion Graphics', 'Fast Turnaround'],
      stepsKey: ['Footage Review & Planning', 'Rough Cut Assembly', 'Fine Editing & Effects', 'Final Review & Delivery'],
      needsKey: ['Raw video footage', 'Brand assets (logos, colors)', 'Reference videos', 'Delivery deadline'],
      timelineKey: '3-5 days per video',
      artifact: 'video',
      color: 'from-red-500 to-pink-500',
      software: ['Premiere Pro', 'DaVinci Resolve', 'Audition'],
      whatsappTemplate: 'Hi! I need Premium Video Production services.'
    },
    {
      id: 'shorts-reels',
      icon: Smartphone,
      title: 'Viral Shorts & Reels',
      tagline: 'Hook. Retain. Convert.',
      description: 'Repurpose your content into high-retention vertical videos.',
      fullDescKey: 'Transform long-form content into viral-ready shorts and reels. We optimize hooks, add captions and SFX, and format for each platform to maximize reach and engagement.',
      features: ['Hook Optimization', 'Captions & SFX', 'Platform-Specific', 'Batch Production'],
      stepsKey: ['Content Analysis', 'Clip Selection & Editing', 'Platform Optimization', 'Batch Delivery'],
      needsKey: ['Source video content', 'Platform preferences', 'Brand style guide', 'Quantity needed'],
      timelineKey: '1-2 days for 10 shorts',
      artifact: 'shorts',
      color: 'from-purple-500 to-indigo-500',
      software: ['After Effects', 'Premiere Pro'],
      whatsappTemplate: 'Hi! I need Viral Shorts & Reels editing.'
    },
    {
      id: 'motion-graphics',
      icon: Layers,
      title: 'Motion Graphics & VFX',
      tagline: 'Elevate Your Brand.',
      description: 'Custom intros, outros, and motion graphics that stand out.',
      fullDescKey: 'Create stunning motion graphics, animated logos, intros, outros, and visual effects that elevate your brand identity and make your content unforgettable.',
      features: ['Brand Identity', '3D Elements', 'Custom Animations', 'Unlimited Revisions'],
      stepsKey: ['Concept Development', 'Design & Animation', 'Review & Refinement', 'Final Delivery'],
      needsKey: ['Brand assets & guidelines', 'Reference examples', 'Video specifications', 'Usage requirements'],
      timelineKey: '5-7 days per project',
      artifact: 'motion',
      color: 'from-cyan-500 to-blue-500',
      software: ['After Effects', 'Blender', 'Illustrator'],
      whatsappTemplate: 'Hi! I need Motion Graphics & VFX services.'
    },
    {
      id: 'thumbnails',
      icon: Lightbulb,
      title: 'Thumbnails & Strategy',
      tagline: 'Click. Watch. Subscribe.',
      description: 'High-CTR thumbnail design with content strategy consulting.',
      fullDescKey: 'Data-driven thumbnail design combined with content strategy consulting. We analyze competitors, test designs, and provide script feedback to maximize your video performance.',
      features: ['A/B Testing', 'Competitor Analysis', 'Script Consulting', 'Trend Research'],
      stepsKey: ['Video Analysis', 'Concept Design', 'A/B Variants', 'Performance Tracking'],
      needsKey: ['Video topic & script', 'Channel branding', 'Target audience info', 'Competitor channels'],
      timelineKey: '24-48 hours',
      artifact: 'thumbnail',
      color: 'from-amber-500 to-yellow-500',
      software: ['Photoshop', 'Midjourney', 'Notion'],
      whatsappTemplate: 'Hi! I need Thumbnail Design & Strategy services.'
    }
  ];

  const services = mode === 'institutional' ? institutionalServices : creatorServices;
  const currentService = services[activeService];
  const accentColor = mode === 'institutional' ? 'amber' : 'cyan';

  // Visual Artifacts Component (Enhanced)
  const VisualArtifact = ({ type }: { type: string }) => {
    switch (type) {
      case 'exam':
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <div className="relative w-64 h-80 bg-white rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white p-6">
                <div className="space-y-3">
                  <div className="h-4 bg-blue-200 rounded w-3/4"></div>
                  <div className="h-4 bg-blue-100 rounded w-full"></div>
                  <div className="h-4 bg-blue-100 rounded w-5/6"></div>
                  <div className="mt-6 space-y-2">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="h-3 bg-gray-200 rounded w-full"></div>
                    ))}
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-4 right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center"
                >
                  <FileCheck className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        );

      case 'video':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <div className="relative w-80 h-48 bg-black rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-purple-900/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                >
                  <Play className="w-8 h-8 text-white ml-1" />
                </motion.div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600"></div>
            </div>
          </motion.div>
        );

      case 'thumbnail':
        return (
          <motion.div
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            className="relative w-full h-full flex items-center justify-center perspective-1000"
          >
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="w-40 h-24 bg-gradient-to-br from-amber-500 to-red-500 rounded-lg shadow-lg flex items-center justify-center relative overflow-hidden"
                >
                  <ImageIcon className="w-8 h-8 text-white/50" />
                  <div className="absolute top-2 right-2 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'shorts':
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="relative w-full h-full flex items-center justify-center gap-4"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="w-32 h-56 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-2xl relative overflow-hidden"
                style={{ transform: `rotate(${(i - 1) * 5}deg)` }}
              >
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <div className="w-8 h-8 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                    <Play className="w-4 h-4 text-white ml-0.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        );

      case 'motion':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity }
              }}
              className="relative w-64 h-64"
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border-4 border-cyan-500/30 rounded-full"
                  style={{
                    scale: 1 - i * 0.2,
                    rotate: i * 45
                  }}
                  animate={{
                    rotate: 360 + i * 45
                  }}
                  transition={{
                    duration: 10 - i * 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              ))}
              <div className="absolute inset-0 flex items-center justify-center">
                <Layers className="w-16 h-16 text-cyan-400" />
              </div>
            </motion.div>
          </motion.div>
        );

      default:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full flex items-center justify-center"
          >
            <Sparkles className="w-24 h-24 text-white/20" />
          </motion.div>
        );
    }
  };

  return (
    <>
      <Helmet>
        <title>{mode === 'institutional' ? 'The Service Lab' : 'The Creator Lab'} | QuickServe IT</title>
        <meta name="description" content={mode === 'institutional'
          ? 'Precision-engineered solutions for educational institutions'
          : 'Premium production services for content creators'} />
      </Helmet>

      <CursorLight mode={mode} />
      <FilmGrain />
      <FloatingNavbar mode={mode} onReturn={handleReturn} isVisible={true} />

      <PageWrapper mode={mode} onReturn={handleReturn}>
        <PageHeader
          title={mode === 'institutional' ? 'Academic Solutions' : 'Editing Services'}
          subtitle={mode === 'institutional'
            ? 'Comprehensive digital operations for schools. We handle Exam Typing, UDISE Data, and Privacy so you can focus on teaching.'
            : 'High-retention editing and thumbnail design. We engineer every cut and pixel to keep your audience watching till the end.'}
          variant={mode === 'institutional' ? 'gold' : 'cyan'}
        />
        {/* Custom Holographic Background Effects */}
        <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br ${mode === 'institutional' ? 'from-amber-500/10' : 'from-cyan-500/10'
          } to-transparent blur-3xl opacity-30 pointer-events-none`} />
        <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr ${mode === 'institutional' ? 'from-amber-500/10' : 'from-cyan-500/10'
          } to-transparent blur-3xl opacity-20 pointer-events-none`} />

        {/* Desktop: Holographic Split-Screen Layout */}
        <div className="hidden lg:block relative z-10">
          <div className="grid grid-cols-12 gap-8 min-h-[700px]">
            {/* LEFT: Command Menu (Sticky) */}
            <div className="col-span-4">
              <div className="sticky top-32 space-y-3">
                <div className={`text-xs font-bold tracking-widest mb-4 ${mode === 'institutional' ? 'text-amber-500/60' : 'text-cyan-500/60'
                  }`}>
                  COMMAND MENU
                </div>
                {services.map((service, index) => (
                  <motion.button
                    key={service.id}
                    onClick={() => handleServiceChange(index)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className={`w-full text-left p-5 rounded-2xl transition-all duration-500 relative group ${activeService === index
                      ? `bg-black/60 backdrop-blur-xl border-2 ${mode === 'institutional' ? 'border-amber-500/50 shadow-amber-500/20' : 'border-cyan-500/50 shadow-cyan-500/20'
                      } shadow-2xl`
                      : 'bg-black/20 backdrop-blur-sm border border-white/10 hover:bg-black/30 hover:border-white/20'
                      }`}
                  >
                    {/* Glow Effect for Active */}
                    {activeService === index && (
                      <div className={`absolute inset-0 bg-gradient-to-r ${mode === 'institutional' ? 'from-amber-500/10' : 'from-cyan-500/10'
                        } to-transparent rounded-2xl`} />
                    )}

                    <div className="flex items-start gap-4 relative z-10">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shrink-0 ${activeService === index ? 'scale-110' : 'group-hover:scale-105'
                        } transition-transform duration-300`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-base font-bold mb-1 ${activeService === index ? 'text-white' : 'text-foreground/80'
                          }`}>
                          {service.title}
                        </h3>
                        <p className={`text-xs ${activeService === index
                          ? mode === 'institutional' ? 'text-amber-500/80' : 'text-cyan-500/80'
                          : 'text-foreground/40'
                          } line-clamp-1`}>
                          {service.tagline}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* RIGHT: Projection Deck */}
            <div className="col-span-8">
              <div className={`text-xs font-bold tracking-widest mb-4 ${mode === 'institutional' ? 'text-amber-500/60' : 'text-cyan-500/60'
                }`}>
                PROJECTION DECK
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  exit={{ opacity: 0, filter: 'blur(10px)', y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  {/* Visual Artifact - Glass Screen */}
                  <div className={`w-full h-96 bg-black/40 backdrop-blur-xl rounded-3xl border-2 ${mode === 'institutional' ? 'border-amber-500/30' : 'border-cyan-500/30'
                    } overflow-hidden relative group`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${mode === 'institutional' ? 'from-amber-500/5' : 'from-cyan-500/5'
                      } to-transparent`} />
                    <VisualArtifact type={currentService.artifact} />
                  </div>

                  {/* Service Details - Glass Plate */}
                  <div className={`bg-black/40 backdrop-blur-xl rounded-3xl border-2 ${mode === 'institutional' ? 'border-amber-500/30' : 'border-cyan-500/30'
                    } p-8`}>
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentService.color} flex items-center justify-center shrink-0`}>
                        <currentService.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-white mb-2">{currentService.title}</h2>
                        <p className={`text-xl font-semibold bg-gradient-to-r ${currentService.color} bg-clip-text text-transparent`}>
                          {currentService.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Full Description */}
                    <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
                      {currentService.fullDescKey}
                    </p>

                    {/* Process Timeline */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <Zap className={`w-5 h-5 ${mode === 'institutional' ? 'text-amber-500' : 'text-cyan-500'}`} />
                        <h4 className="text-sm font-bold tracking-widest uppercase text-foreground/60">Process Timeline</h4>
                      </div>
                      <div className="space-y-3">
                        {currentService.stepsKey.map((step: string, i: number) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-4"
                          >
                            <div className="flex flex-col items-center">
                              <div className={`w-8 h-8 rounded-full border-2 ${mode === 'institutional' ? 'border-amber-500 bg-amber-500/20' : 'border-cyan-500 bg-cyan-500/20'
                                } flex items-center justify-center shrink-0`}>
                                <span className={`text-xs font-bold ${mode === 'institutional' ? 'text-amber-500' : 'text-cyan-500'
                                  }`}>{i + 1}</span>
                              </div>
                              {i < currentService.stepsKey.length - 1 && (
                                <div className={`w-0.5 h-8 ${mode === 'institutional' ? 'bg-amber-500/30' : 'bg-cyan-500/30'
                                  }`} />
                              )}
                            </div>
                            <div className="flex-1 pt-1">
                              <p className="text-foreground/80">{step}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Requirements Checklist */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle2 className={`w-5 h-5 ${mode === 'institutional' ? 'text-amber-500' : 'text-cyan-500'}`} />
                        <h4 className="text-sm font-bold tracking-widest uppercase text-foreground/60">Requirements</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {currentService.needsKey.map((need: string, i: number) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className={`flex items-center gap-3 p-3 rounded-xl bg-black/40 border ${mode === 'institutional' ? 'border-amber-500/20' : 'border-cyan-500/20'
                              }`}
                          >
                            <CheckCircle2 className={`w-4 h-4 shrink-0 ${mode === 'institutional' ? 'text-amber-500' : 'text-cyan-500'
                              }`} />
                            <span className="text-sm text-foreground/70">{need}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Timeline Badge */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-3">
                        <Clock className={`w-5 h-5 ${mode === 'institutional' ? 'text-amber-500' : 'text-cyan-500'}`} />
                        <h4 className="text-sm font-bold tracking-widest uppercase text-foreground/60">Timeline</h4>
                      </div>
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${currentService.color} text-white font-semibold`}>
                        <Clock className="w-4 h-4" />
                        {currentService.timelineKey}
                      </div>
                    </div>

                    {/* Tech Stack (Creator Mode Only) */}
                    {mode === 'creator' && currentService.software && currentService.software.length > 0 && (
                      <div className="mb-8">
                        <h4 className="text-sm font-bold tracking-widest uppercase text-foreground/60 mb-4">Tech Stack</h4>
                        <div className="flex flex-wrap gap-3">
                          {currentService.software.map((tool: string, i: number) => {
                            const IconComponent = softwareIconMap[tool];
                            return (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-black/60 border ${mode === 'institutional' ? 'border-amber-500/30' : 'border-cyan-500/30'
                                  } hover:scale-105 transition-transform duration-300`}
                              >
                                {IconComponent && <IconComponent className={`w-5 h-5 ${mode === 'institutional' ? 'text-amber-500' : 'text-cyan-500'
                                  }`} />}
                                <span className="text-sm text-foreground/80 font-medium">{tool}</span>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Initiate Protocol Button */}
                    <motion.button
                      onClick={() => {
                        const message = encodeURIComponent(currentService.whatsappTemplate);
                        window.open(`https://wa.me/919140491404?text=${message}`, '_blank');
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-5 rounded-full font-bold text-lg text-black bg-gradient-to-r ${currentService.color} hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden group`}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                      <MessageCircle className="w-6 h-6 relative z-10" />
                      <span className="relative z-10">INITIATE PROTOCOL</span>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`w-2 h-2 rounded-full ${mode === 'institutional' ? 'bg-amber-300' : 'bg-cyan-300'
                          } relative z-10`}
                      />
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile: Swipe Deck */}
        <div className="lg:hidden px-4 relative z-10">
          {/* Mobile Icon Tabs */}
          <div className="flex gap-3 overflow-x-auto pb-4 mb-8 scrollbar-hide">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => handleServiceChange(index)}
                className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${activeService === index
                  ? `bg-gradient-to-br ${service.color} shadow-lg scale-110`
                  : 'bg-white/10 border border-white/20'
                  }`}
              >
                <service.icon className={`w-6 h-6 ${activeService === index ? 'text-white' : 'text-foreground/60'
                  }`} />
              </button>
            ))}
          </div>

          {/* Mobile Service Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="space-y-6"
            >
              {/* Visual Artifact */}
              <div className={`w-full h-64 bg-black/40 backdrop-blur-xl rounded-2xl border ${mode === 'institutional' ? 'border-amber-500/30' : 'border-cyan-500/30'
                } overflow-hidden`}>
                <VisualArtifact type={currentService.artifact} />
              </div>

              {/* Details Card */}
              <div className={`bg-black/40 backdrop-blur-xl rounded-2xl border ${mode === 'institutional' ? 'border-amber-500/30' : 'border-cyan-500/30'
                } p-6 space-y-6`}>
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${currentService.color} flex items-center justify-center`}>
                    <currentService.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">{currentService.title}</h2>
                    <p className={`text-sm bg-gradient-to-r ${currentService.color} bg-clip-text text-transparent font-semibold`}>
                      {currentService.tagline}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground/70 leading-relaxed">{currentService.fullDescKey}</p>

                {/* Collapsible Process */}
                <details className={`group rounded-xl bg-black/40 border ${mode === 'institutional' ? 'border-amber-500/20' : 'border-cyan-500/20'
                  }`}>
                  <summary className="cursor-pointer p-4 font-semibold text-foreground/80 flex items-center justify-between">
                    <span>Process Steps</span>
                    <Zap className={`w-4 h-4 ${mode === 'institutional' ? 'text-amber-500' : 'text-cyan-500'}`} />
                  </summary>
                  <div className="px-4 pb-4 space-y-2">
                    {currentService.stepsKey.map((step: string, i: number) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className={`text-xs font-bold ${mode === 'institutional' ? 'text-amber-500' : 'text-cyan-500'
                          }`}>{i + 1}.</span>
                        <span className="text-sm text-foreground/70">{step}</span>
                      </div>
                    ))}
                  </div>
                </details>

                {/* Collapsible Requirements */}
                <details className={`group rounded-xl bg-black/40 border ${mode === 'institutional' ? 'border-amber-500/20' : 'border-cyan-500/20'
                  }`}>
                  <summary className="cursor-pointer p-4 font-semibold text-foreground/80 flex items-center justify-between">
                    <span>Requirements</span>
                    <CheckCircle2 className={`w-4 h-4 ${mode === 'institutional' ? 'text-amber-500' : 'text-cyan-500'}`} />
                  </summary>
                  <div className="px-4 pb-4 space-y-2">
                    {currentService.needsKey.map((need: string, i: number) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${mode === 'institutional' ? 'text-amber-500' : 'text-cyan-500'
                          }`} />
                        <span className="text-sm text-foreground/70">{need}</span>
                      </div>
                    ))}
                  </div>
                </details>

                {/* Timeline */}
                <div className={`flex items-center gap-2 p-3 rounded-xl bg-gradient-to-r ${currentService.color} text-white`}>
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-semibold">{currentService.timelineKey}</span>
                </div>

                {/* Tech Stack (Mobile) */}
                {mode === 'creator' && currentService.software && currentService.software.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {currentService.software.map((tool: string, i: number) => {
                      const IconComponent = softwareIconMap[tool];
                      return (
                        <div
                          key={i}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 border ${mode === 'institutional' ? 'border-amber-500/30' : 'border-cyan-500/30'
                            }`}
                        >
                          {IconComponent && <IconComponent className={`w-4 h-4 ${mode === 'institutional' ? 'text-amber-500' : 'text-cyan-500'
                            }`} />}
                          <span className="text-xs text-foreground/80">{tool}</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* CTA Button */}
                <button
                  onClick={() => {
                    const message = encodeURIComponent(currentService.whatsappTemplate);
                    window.open(`https://wa.me/919140491404?text=${message}`, '_blank');
                  }}
                  className={`w-full py-4 rounded-full font-bold text-white bg-gradient-to-r ${currentService.color} flex items-center justify-center gap-2`}
                >
                  <MessageCircle className="w-5 h-5" />
                  INITIATE PROTOCOL
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </PageWrapper>

      <Footer mode={mode} />
    </>
  );
};

export default Services;