import { Helmet } from 'react-helmet-async';
import { useMode } from '@/context/ModeContext';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import FloatingNavbar from '@/modules/core/components/FloatingNavbar';
import CursorLight from '@/modules/core/components/CursorLight';
import FilmGrain from '@/modules/core/components/FilmGrain';
import Footer from '@/modules/core/components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';

const Founder = () => {
  const { mode, setHasEntered } = useMode();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [showSignature, setShowSignature] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background color transitions
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    ['#2d1810', '#0a0a0a', '#0f1419', '#0a0a0a']
  );

  const handleReturn = () => {
    setHasEntered(false);
    navigate('/');
  };

  // Trigger signature animation when scrolled to bottom
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest > 0.9) {
        setShowSignature(true);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      <Helmet>
        <title>The Founder's Story | QuickServe IT</title>
        <meta name="description" content="A documentary scroll through the journey of building QuickServe IT" />
      </Helmet>

      <CursorLight mode={mode} />
      <FilmGrain />
      <FloatingNavbar mode={mode} onReturn={handleReturn} isVisible={true} />

      <motion.main
        ref={containerRef}
        style={{ backgroundColor }}
        className="min-h-screen transition-colors duration-1000"
      >
        {/* SECTION 1: THE ORIGIN - Sepia/Warm Tones */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="text-amber-200/40 text-sm uppercase tracking-[0.3em] mb-8 font-light">
                Chapter One
              </div>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-amber-100 mb-12 leading-tight tracking-tight">
                "I didn't start this<br />to build a business."
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-amber-100/70 leading-relaxed max-w-3xl mx-auto font-light"
            >
              I started this because I saw people I cared about—teachers, students, creators—drowning in systems
              that weren't built for them. Systems that demanded more and gave back less.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-amber-100/60 leading-relaxed max-w-2xl mx-auto mt-8 font-light italic"
            >
              This is personal. This is Gorakhpur. This is home.
            </motion.p>
          </motion.div>
        </section>

        {/* SECTION 2: THE PROBLEM - Dark/High Contrast */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="text-red-400/60 text-sm uppercase tracking-[0.3em] mb-8 font-light">
                Chapter Two
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-12 leading-tight">
                The System<br />
                <span className="text-red-400">was broken.</span>
              </h2>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="border-l-4 border-red-400/50 pl-6"
              >
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                  Schools needed exam papers typed. But the "professionals" charged premium rates,
                  delivered late, and made errors that cost students their grades.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="border-l-4 border-red-400/50 pl-6"
              >
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                  Creators needed thumbnails and edits. But agencies ghosted them,
                  overcharged, and delivered generic templates.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="border-l-4 border-red-400/50 pl-6"
              >
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                  The gap wasn't just in service. It was in <span className="text-red-400 font-semibold">trust</span>.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* SECTION 3: THE SOLUTION - Gold/Cyan Gradients */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="text-cyan-400/60 text-sm uppercase tracking-[0.3em] mb-8 font-light">
                Chapter Three
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12 leading-tight">
                <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-cyan-400 bg-clip-text text-transparent">
                  We build calm.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6 text-left"
            >
              <div className="glass-card p-8 rounded-2xl border border-cyan-400/20 bg-cyan-500/5">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">For Institutions</h3>
                <p className="text-lg text-white/80 leading-relaxed">
                  Error-free exam papers. UDISE+ data management. Scholarship processing.
                  All delivered on time, every time. No chaos. Just clarity.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl border border-amber-400/20 bg-amber-500/5">
                <h3 className="text-2xl font-bold text-amber-400 mb-4">For Creators</h3>
                <p className="text-lg text-white/80 leading-relaxed">
                  High-CTR thumbnails. Cinematic edits. Documentary-grade production.
                  We don't just make content. We make <span className="text-amber-400 font-semibold">impact</span>.
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-white/70 leading-relaxed mt-12 italic"
            >
              This isn't about scale. It's about <span className="bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text text-transparent font-semibold">precision</span>.
            </motion.p>
          </motion.div>
        </section>

        {/* DIGITAL SIGNATURE SECTION */}
        <section className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-32">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showSignature ? 1 : 0 }}
            transition={{ duration: 2 }}
            className="text-center"
          >
            <motion.div
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: showSignature ? 1 : 0, opacity: showSignature ? 1 : 0 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="mb-8"
            >
              <svg
                width="300"
                height="120"
                viewBox="0 0 300 120"
                className="mx-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M 20 80 Q 40 20, 80 60 T 140 80 Q 160 60, 180 80 T 240 60 Q 260 80, 280 60"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: showSignature ? 1 : 0 }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="50%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#fbbf24" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showSignature ? 1 : 0, y: showSignature ? 0 : 20 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <p className="text-2xl md:text-3xl font-serif text-white/90 mb-2">
                The Founder
              </p>
              <p className="text-sm text-white/40 uppercase tracking-widest">
                QuickServe IT • Gorakhpur
              </p>
            </motion.div>
          </motion.div>
        </section>
      </motion.main>

      <Footer mode={mode} />
    </>
  );
};

export default Founder;
