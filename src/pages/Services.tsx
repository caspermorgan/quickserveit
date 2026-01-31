import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate } from 'react-router-dom';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
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
  Database
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  const { mode, setHasEntered } = useMode();
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState(0);

  const handleReturn = () => {
    setHasEntered(false);
    navigate('/');
  };

  // Service definitions
  const institutionalServices = [
    {
      id: 'exam-docs',
      icon: FileText,
      title: 'Exam Documentation',
      tagline: 'Error-Free. On Time. Every Time.',
      description: 'Professional typing and formatting of examination papers with strict quality protocols.',
      features: ['160+ Papers Delivered', 'Zero Error Tolerance', '24-48hr Turnaround', 'Confidential Handling'],
      artifact: 'exam',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'udise',
      icon: Database,
      title: 'UDISE+ Management',
      tagline: 'Accurate Data. Seamless Compliance.',
      description: 'Complete UDISE+ portal data entry and management for educational institutions.',
      features: ['Real-time Updates', 'Compliance Assured', 'Dedicated Support', 'Deadline Management'],
      artifact: 'udise',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'scholarships',
      icon: GraduationCap,
      title: 'Scholarship Processing',
      tagline: 'Maximize Student Success.',
      description: 'End-to-end scholarship application support and documentation.',
      features: ['Application Filing', 'Document Verification', 'Status Tracking', 'Biometric Support'],
      artifact: 'scholarship',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'daily-support',
      icon: Calendar,
      title: 'Daily Tech Support',
      tagline: 'Your Digital Partner.',
      description: 'Monthly retainer-based digital support for all institutional needs.',
      features: ['On-Demand Help', 'Priority Response', 'Custom Solutions', 'Predictable Costs'],
      artifact: 'support',
      color: 'from-amber-500 to-orange-500'
    }
  ];

  const creatorServices = [
    {
      id: 'video-editing',
      icon: Video,
      title: 'Premium Video Production',
      tagline: 'Cinematic. Engaging. Professional.',
      description: 'High-quality long-form video editing for YouTube creators.',
      features: ['Color Grading', 'Sound Design', 'Motion Graphics', 'Fast Turnaround'],
      artifact: 'video',
      color: 'from-red-500 to-pink-500',
      software: ['Premiere Pro', 'DaVinci Resolve', 'Audition']
    },
    {
      id: 'shorts-reels',
      icon: Smartphone,
      title: 'Viral Shorts & Reels',
      tagline: 'Hook. Retain. Convert.',
      description: 'Repurpose your content into high-retention vertical videos.',
      features: ['Hook Optimization', 'Captions & SFX', 'Platform-Specific', 'Batch Production'],
      artifact: 'shorts',
      color: 'from-purple-500 to-indigo-500',
      software: ['After Effects', 'Premiere Pro']
    },
    {
      id: 'motion-graphics',
      icon: Layers,
      title: 'Motion Graphics & VFX',
      tagline: 'Elevate Your Brand.',
      description: 'Custom intros, outros, and motion graphics that stand out.',
      features: ['Brand Identity', '3D Elements', 'Custom Animations', 'Unlimited Revisions'],
      artifact: 'motion',
      color: 'from-cyan-500 to-blue-500',
      software: ['After Effects', 'Blender', 'Illustrator']
    },
    {
      id: 'thumbnails',
      icon: Lightbulb,
      title: 'Thumbnails & Strategy',
      tagline: 'Click. Watch. Subscribe.',
      description: 'High-CTR thumbnail design with content strategy consulting.',
      features: ['A/B Testing', 'Competitor Analysis', 'Script Consulting', 'Trend Research'],
      artifact: 'thumbnail',
      color: 'from-amber-500 to-yellow-500',
      software: ['Photoshop', 'Midjourney', 'Notion']
    }
  ];

  const services = mode === 'institutional' ? institutionalServices : creatorServices;

  // Visual Artifacts Components
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
        <title>{mode === 'institutional' ? 'Our Services' : 'Creator Studio'} | QuickServe IT</title>
        <meta name="description" content="Explore our premium services" />
      </Helmet>

      <CursorLight mode={mode} />
      <FilmGrain />
      <FloatingNavbar mode={mode} onReturn={handleReturn} isVisible={true} />

      <main className="min-h-screen bg-[#0a0a0a] pt-24 pb-20">
        {/* Header */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {mode === 'institutional' ? 'The Service Lab' : 'The Creator Lab'}
            </h1>
            <p className="text-lg text-gray-400">
              {mode === 'institutional'
                ? 'Precision-engineered solutions for educational institutions'
                : 'Premium production services for content creators'}
            </p>
          </motion.div>
        </div>

        {/* Desktop: Split-Screen Layout */}
        <div className="hidden lg:block container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8 min-h-[600px]">
            {/* Left: Sticky Sidebar Navigation */}
            <div className="col-span-4">
              <div className="sticky top-32 space-y-3">
                {services.map((service, index) => (
                  <motion.button
                    key={service.id}
                    onClick={() => setActiveService(index)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-500 ${activeService === index
                      ? 'bg-white/10 border-2 border-white/20 shadow-2xl'
                      : 'bg-white/5 border border-white/10 hover:bg-white/8'
                      }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shrink-0`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-white mb-1">{service.title}</h3>
                        <p className="text-sm text-gray-400 line-clamp-1">{service.tagline}</p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Right: Service Details + Visual Artifact */}
            <div className="col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  {/* Visual Artifact */}
                  <div className="w-full h-96 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                    <VisualArtifact type={services[activeService].artifact} />
                  </div>

                  {/* Service Details */}
                  <div className="bg-white/5 rounded-3xl border border-white/10 backdrop-blur-xl p-8">
                    <h2 className="text-3xl font-bold text-white mb-3">{services[activeService].title}</h2>
                    <p className={`text-xl bg-gradient-to-r ${services[activeService].color} bg-clip-text text-transparent font-semibold mb-6`}>
                      {services[activeService].tagline}
                    </p>
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                      {services[activeService].description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {services[activeService].features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${services[activeService].color}`}></div>
                          <span className="text-sm text-gray-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Software Stack (Creator Mode) */}
                    {mode === 'creator' && (services[activeService] as any).software && (services[activeService] as any).software.length > 0 && (
                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-gray-400 mb-3">Software Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {(services[activeService] as any).software.map((tool: string, i: number) => (
                            <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}



                    {/* CTA */}
                    <button
                      onClick={() => navigate('/contact')}
                      className={`w-full py-4 rounded-full font-semibold text-white bg-gradient-to-r ${services[activeService].color} hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2`}
                    >
                      <MessageCircle className="w-5 h-5" />
                      Start This Service
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile: Horizontal Swipeable Carousel */}
        <div className="lg:hidden px-4">
          {/* Mobile Service Selector */}
          <div className="flex gap-3 overflow-x-auto pb-4 mb-8 scrollbar-hide">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`shrink-0 px-6 py-3 rounded-full transition-all duration-300 ${activeService === index
                  ? 'bg-white text-black'
                  : 'bg-white/10 text-white border border-white/20'
                  }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Mobile Service Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-6"
            >
              {/* Visual Artifact */}
              <div className="w-full h-64 bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                <VisualArtifact type={services[activeService].artifact} />
              </div>

              {/* Details */}
              <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${services[activeService].color} flex items-center justify-center`}>
                    {(() => {
                      const Icon = services[activeService].icon;
                      return <Icon className="w-6 h-6 text-white" />;
                    })()}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">{services[activeService].title}</h2>
                    <p className="text-sm text-gray-400">{services[activeService].tagline}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{services[activeService].description}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {services[activeService].features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${services[activeService].color}`}></div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => navigate('/contact')}
                  className={`w-full py-3 rounded-full font-semibold text-white bg-gradient-to-r ${services[activeService].color} flex items-center justify-center gap-2`}
                >
                  <MessageCircle className="w-5 h-5" />
                  Start This Service
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <Footer mode={mode} />
    </>
  );
};

export default Services;