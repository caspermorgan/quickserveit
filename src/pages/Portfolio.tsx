import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useState, useEffect } from 'react';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { Linkedin, Shield, Target, CheckCircle, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const { mode, setHasEntered, setCurrentSection } = useMode();
  const navigate = useNavigate();
  const [counters, setCounters] = useState({
    papers: 0,
    tasks: 0,
    partnerships: 0,
    confidentiality: 0,
  });

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animated counter effect
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const targets = { papers: 160, tasks: 50, partnerships: 2, confidentiality: 100 };

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        papers: Math.floor(targets.papers * progress),
        tasks: Math.floor(targets.tasks * progress),
        partnerships: Math.floor(targets.partnerships * progress),
        confidentiality: Math.floor(targets.confidentiality * progress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounters(targets);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  const handleReturn = () => {
    setHasEntered(false);
    setCurrentSection(mode);
    navigate('/');
  };

  const linkedInUrl = 'https://www.linkedin.com/in/vinodkumar-singh-quickserveit';

  const timeline = [
    {
      period: 'Current',
      role: 'Founder & Lead Architect',
      organization: 'QuickServe IT',
      description: 'Building transparent, solo-partner digital services for rural education and content creators.',
      icon: Briefcase,
      status: 'active',
    },
    {
      period: '2023 - 2024',
      role: 'Operational Support Specialist',
      organization: 'B. N. Singh Adarsh Intermediate College, Chandrao',
      description: 'Student data management, examination documentation, scholarship processing, and academic IT support.',
      icon: GraduationCap,
      status: 'past',
    },
    {
      period: '2023',
      role: 'Exam Documentation Specialist',
      organization: 'Sahid Rudra Pratap Intermediate College, Chandrao',
      description: 'Professional typing and formatting of examination papers with strict quality protocols.',
      icon: GraduationCap,
      status: 'past',
    },
  ];

  return (
    <>
      <Helmet>
        <title>The Architect | QuickServe IT - Digital Identity</title>
        <meta name="description" content="Meet the founder behind QuickServe IT. Bridging the gap between rural education and digital excellence with transparent, grounded execution." />
      </Helmet>

      <CursorLight mode={mode} />
      <FilmGrain />
      <FloatingNavbar mode={mode} onReturn={handleReturn} isVisible={true} />

      {/* SEPARATE WORLD: Deep Navy Background */}
      <main id="main-content" className="min-h-screen bg-slate-950 pt-24 sm:pt-28 md:pt-32 pb-28 relative overflow-hidden">
        {/* Futuristic Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

        {/* Glowing Orbs */}
        <div className="gradient-orb w-[600px] h-[600px] top-0 right-0 opacity-10 bg-gradient-to-br from-blue-500 to-cyan-500" />
        <div className="gradient-orb w-[500px] h-[500px] bottom-0 left-0 opacity-10 bg-gradient-to-br from-indigo-500 to-purple-500" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* TASK 1: Identity Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 max-w-5xl mx-auto"
          >
            {/* Avatar with Glow Effect */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-8"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-500 blur-2xl opacity-50 animate-pulse" />
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border-4 border-blue-500/30 flex items-center justify-center overflow-hidden">
                <div className="text-6xl md:text-7xl">👨‍💻</div>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent"
            >
              The Architect Behind the Systems
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Bridging the gap between <span className="text-cyan-400 font-semibold">Rural Education</span> & <span className="text-blue-400 font-semibold">Digital Excellence</span>
            </motion.p>

            {/* LinkedIn CTA - Pulsing Button */}
            <motion.a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-full font-semibold text-lg text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse" />
              <Linkedin className="w-6 h-6 relative z-10" />
              <span className="relative z-10">Connect on LinkedIn</span>
              <Sparkles className="w-5 h-5 relative z-10 animate-pulse" />
            </motion.a>
          </motion.div>

          {/* TASK 2: Live Stats Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-20 max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-100">
              Operational <span className="text-cyan-400">Metrics</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Stat 1: Papers */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative glass-card border border-blue-500/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-xl bg-slate-900/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <Target className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="text-4xl font-mono font-bold text-blue-400">{counters.papers}+</div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-200 mb-1">Exam Papers Engineered</h3>
                  <p className="text-sm text-slate-400">Question Papers Typed</p>
                </div>
              </motion.div>

              {/* Stat 2: Tasks */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative glass-card border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-xl bg-slate-900/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="text-4xl font-mono font-bold text-cyan-400">{counters.tasks}+</div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-200 mb-1">Micro-Tasks Resolved</h3>
                  <p className="text-sm text-slate-400">Technical Tasks Completed</p>
                </div>
              </motion.div>

              {/* Stat 3: Partnerships */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative glass-card border border-indigo-500/30 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-xl bg-slate-900/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div className="text-4xl font-mono font-bold text-indigo-400">{counters.partnerships}+</div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-200 mb-1">Institutional Partnerships</h3>
                  <p className="text-sm text-slate-400">Contract Partnerships</p>
                </div>
              </motion.div>

              {/* Stat 4: Confidentiality */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative glass-card border border-green-500/30 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 backdrop-blur-xl bg-slate-900/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="text-4xl font-mono font-bold text-green-400">{counters.confidentiality}%</div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-200 mb-1">Data Confidentiality</h3>
                  <p className="text-sm text-slate-400">Error-Free Delivery</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* TASK 3: Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-100">
              Experience <span className="text-cyan-400">Timeline</span>
            </h2>

            <div className="relative">
              {/* Glowing Vertical Line */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-indigo-500 opacity-50" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
                    className="relative pl-20 md:pl-24"
                  >
                    {/* Timeline Node */}
                    <div className={`absolute left-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center ${item.status === 'active'
                        ? 'bg-gradient-to-br from-blue-500 to-cyan-500 shadow-[0_0_30px_rgba(59,130,246,0.5)] animate-pulse'
                        : 'bg-gradient-to-br from-slate-700 to-slate-800 border-2 border-slate-600'
                      }`}>
                      <item.icon className={`w-6 h-6 md:w-7 md:h-7 ${item.status === 'active' ? 'text-white' : 'text-slate-400'}`} />
                    </div>

                    {/* Timeline Content */}
                    <div className={`glass-card rounded-xl p-6 border backdrop-blur-xl ${item.status === 'active'
                        ? 'border-blue-500/40 bg-slate-900/60'
                        : 'border-slate-700/40 bg-slate-900/40'
                      }`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-sm font-mono px-3 py-1 rounded-full ${item.status === 'active'
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            : 'bg-slate-700/30 text-slate-400 border border-slate-600/30'
                          }`}>
                          {item.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-100 mb-1">{item.role}</h3>
                      <p className="text-cyan-400 font-medium mb-3">{item.organization}</p>
                      <p className="text-slate-300 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.4 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="glass-card rounded-2xl p-8 md:p-10 border border-blue-500/30 backdrop-blur-xl bg-slate-900/50">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">
                Let's Build Something <span className="text-cyan-400">Together</span>
              </h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Whether you need institutional documentation or creator production, let's discuss how we can bring clarity to your digital chaos.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              >
                Start a Conversation
              </button>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer mode={mode} />
    </>
  );
};

export default Portfolio;
