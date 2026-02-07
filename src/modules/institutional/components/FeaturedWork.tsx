import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { ArrowRight } from 'lucide-react';
import { SiReact, SiTypescript, SiBlender, SiFigma, SiAdobepremierepro, SiAdobephotoshop } from 'react-icons/si';

interface FeaturedWorkProps {
    mode: 'institutional' | 'creator';
}

const FeaturedWork = ({ mode }: FeaturedWorkProps) => {
    const { t } = useTranslation();

    // Mode-specific featured project data
    const institutionalProject = {
        title: 'Complete UDISE+ Management',
        description: 'Managed complete student data entry, progression tracking, and certification for a 500+ student institution. Delivered archive-ready records with zero errors.',
        techStack: [
            { icon: SiReact, name: 'Excel Automation' },
            { icon: SiTypescript, name: 'Data Validation' },
            { icon: SiFigma, name: 'Portal Management' },
        ],
        imageUrl: '/placeholder-institutional.jpg', // Will be replaced with actual image
    };

    const creatorProject = {
        title: 'Documentary Series Production',
        description: 'Multi-episode documentary series with cinematic color grading, multi-cam sync, and professional sound design. Delivered broadcast-quality content for educational platform.',
        techStack: [
            { icon: SiAdobepremierepro, name: 'Premiere Pro' },
            { icon: SiBlender, name: 'Blender 3D' },
            { icon: SiAdobephotoshop, name: 'Photoshop' },
        ],
        imageUrl: '/placeholder-creator.jpg', // Will be replaced with actual image
    };

    const project = mode === 'institutional' ? institutionalProject : creatorProject;

    return (
        <section className="relative py-24 md:py-32 px-6 bg-black border-y border-border overflow-hidden">
            {/* Background gradient */}
            <div
                className={`absolute top-0 left-0 w-full h-full opacity-10 ${mode === 'institutional'
                        ? 'bg-gradient-to-br from-institutional/20 to-transparent'
                        : 'bg-gradient-to-br from-creator/20 to-transparent'
                    }`}
            />

            <div className="relative max-w-7xl mx-auto">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-16 md:mb-20"
                >
                    <h2
                        className={`font-display text-2xl md:text-4xl tracking-wide mb-4 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
                            }`}
                    >
                        {t('featuredProjectTitle')}
                    </h2>
                </motion.div>

                {/* Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Left: Image/Video */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative aspect-video rounded-lg overflow-hidden glass-card"
                    >
                        {/* Placeholder for image/video */}
                        <div
                            className={`w-full h-full flex items-center justify-center text-foreground/20 ${mode === 'institutional' ? 'bg-institutional/5' : 'bg-creator/5'
                                }`}
                        >
                            <div className="text-center">
                                <div className="text-6xl mb-4">🎬</div>
                                <p className="text-sm">Featured Project Visual</p>
                            </div>
                        </div>

                        {/* Glow effect */}
                        <div
                            className={`absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none ${mode === 'institutional'
                                    ? 'bg-gradient-to-t from-institutional/20 to-transparent'
                                    : 'bg-gradient-to-t from-creator/20 to-transparent'
                                }`}
                        />
                    </motion.div>

                    {/* Right: Project Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Project Name */}
                        <h3 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground">
                            {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-foreground/60 text-lg leading-relaxed">
                            {project.description}
                        </p>

                        {/* Tech Stack Icons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            {project.techStack.map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeOut",
                                        delay: 0.4 + (index * 0.1)
                                    }}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-border/50"
                                >
                                    <tech.icon className={`w-5 h-5 ${mode === 'institutional' ? 'text-institutional' : 'text-creator'
                                        }`} />
                                    <span className="text-sm text-foreground/70">{tech.name}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="pt-6">
                            <Link
                                to="/portfolio"
                                className={`group inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 ${mode === 'institutional'
                                        ? 'bg-institutional text-background hover:bg-institutional/90 focus:ring-institutional'
                                        : 'bg-creator text-background hover:bg-creator/90 focus:ring-creator'
                                    }`}
                                style={{
                                    boxShadow: mode === 'institutional'
                                        ? '0 0 30px rgba(43, 96, 56, 0.3)'
                                        : '0 0 30px rgba(187, 100, 42, 0.3)'
                                }}
                            >
                                <span>{t('decodeProject')}</span>
                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedWork;
