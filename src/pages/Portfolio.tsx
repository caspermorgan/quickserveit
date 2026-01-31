import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useEffect } from 'react';
import FloatingNavbar from '@/components/FloatingNavbar';
import CursorLight from '@/components/CursorLight';
import FilmGrain from '@/components/FilmGrain';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { Linkedin, Youtube, Film, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const { mode, setMode, setHasEntered, setCurrentSection } = useMode();
  const navigate = useNavigate();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleReturn = () => {
    setHasEntered(false);
    setCurrentSection(mode);
    navigate('/');
  };

  const handleInstituteMode = () => {
    setMode('institutional');
    setHasEntered(false);
    setCurrentSection('institutional');
    navigate('/home');
  };

  const linkedInUrl = 'https://www.linkedin.com/in/vinodkumar-singh-quickserveit';

  const comingSoonCards = [
    {
      title: 'My Channel',
      icon: Youtube,
      status: 'Loading...',
      gradient: 'from-red-500/20 to-pink-500/20',
      borderColor: 'border-red-500/20',
      iconColor: 'text-red-400',
      statusColor: 'bg-red-500/10 text-red-400 border-red-500/20',
    },
    {
      title: 'The Dark History',
      icon: Film,
      status: 'In Production',
      gradient: 'from-purple-500/20 to-indigo-500/20',
      borderColor: 'border-purple-500/20',
      iconColor: 'text-purple-400',
      statusColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    },
    {
      title: 'Creator Network',
      icon: Users,
      status: 'Coming Soon',
      gradient: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-500/20',
      iconColor: 'text-cyan-400',
      statusColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Vinod Kumar Singh | Storyteller & System Architect</title>
        <meta name="description" content="Personal domain of Vinod Kumar Singh. Building digital narratives and institutional systems in Gorakhpur." />
      </Helmet>

      <CursorLight mode={mode} />
      <FilmGrain />
      <FloatingNavbar mode={mode} onReturn={handleReturn} isVisible={true} />

      {/* THE DIRECTOR'S DARKROOM: Deep Black Background */}
      <main id="main-content" className="min-h-screen bg-[#0a0a0a] pt-24 sm:pt-28 md:pt-32 pb-28 relative overflow-hidden">

        {/* Cinematic Spotlight Effects */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/3 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* TASK 2: THE HERO - Personal Identity */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-32 max-w-5xl mx-auto"
          >
            {/* Title - Minimal Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-white tracking-tight"
            >
              Storyteller.<br />
              System Architect.<br />
              Creator.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Building digital narratives and institutional systems in <span className="text-white font-medium">Gorakhpur</span>.
            </motion.p>

            {/* Primary Action - Glowing LinkedIn Button */}
            <motion.a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="group inline-flex items-center gap-3 px-12 py-6 rounded-full font-semibold text-lg text-black bg-white hover:bg-gray-100 transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_0_60px_rgba(255,255,255,0.3)] hover:shadow-[0_0_80px_rgba(255,255,255,0.5)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Linkedin className="w-6 h-6 relative z-10" />
              <span className="relative z-10">Connect on LinkedIn</span>
            </motion.a>
          </motion.div>

          {/* TASK 3: THE "COMING SOON" GRID */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mb-32 max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
              Future <span className="text-gray-500">Content</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {comingSoonCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                  className="relative group"
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`} />

                  {/* Locked/Loading Card - Glassmorphism */}
                  <div className={`relative backdrop-blur-md bg-white/5 border ${card.borderColor} rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 min-h-[280px] flex flex-col items-center justify-center text-center`}>
                    {/* Icon */}
                    <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <card.icon className={`w-10 h-10 ${card.iconColor}`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>

                    {/* Status Badge */}
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium border ${card.statusColor}`}>
                      {card.status}
                    </span>

                    {/* Lock Overlay Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* TASK 4: THE "INSTITUTE TEASER" - Footer Anchor */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="relative backdrop-blur-md bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border-2 border-amber-500/30 rounded-3xl p-10 md:p-12 shadow-[0_0_60px_rgba(245,158,11,0.2)] hover:shadow-[0_0_80px_rgba(245,158,11,0.3)] transition-all duration-500">
              {/* Gold Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-500/5 rounded-3xl blur-2xl" />

              <div className="relative z-10">
                <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-medium">
                  Looking for my <span className="text-amber-400">institutional work</span>?
                </p>

                <button
                  onClick={handleInstituteMode}
                  className="group inline-flex items-center gap-3 px-10 py-5 rounded-full font-semibold text-lg text-black bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(245,158,11,0.4)] hover:shadow-[0_0_60px_rgba(245,158,11,0.6)]"
                >
                  <span>Visit QuickServe Institute Mode</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer mode={mode} />
    </>
  );
};

export default Portfolio;
