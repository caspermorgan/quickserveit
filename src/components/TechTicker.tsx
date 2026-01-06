import { motion } from 'framer-motion';
import {
    SiMicrosoftexcel,
    SiGooglesheets,
    SiAdobeacrobatreader,
    SiReact,
    SiTypescript,
    SiBlender,
    SiFigma,
    SiAdobeaftereffects,
    SiAdobepremierepro,
    SiAdobephotoshop,
    SiAdobeillustrator
} from 'react-icons/si';

interface TechTickerProps {
    mode: 'institutional' | 'creator';
}

const TechTicker = ({ mode }: TechTickerProps) => {
    // Mode-specific tech stacks
    const institutionalTech = [
        { icon: SiMicrosoftexcel, name: 'Microsoft Excel' },
        { icon: SiGooglesheets, name: 'Google Sheets' },
        { icon: SiAdobeacrobatreader, name: 'PDF Tools' },
        { icon: SiReact, name: 'Data Systems' },
        { icon: SiTypescript, name: 'Automation' },
        { icon: SiFigma, name: 'Portal Management' },
    ];

    const creatorTech = [
        { icon: SiReact, name: 'React' },
        { icon: SiTypescript, name: 'TypeScript' },
        { icon: SiBlender, name: 'Blender' },
        { icon: SiFigma, name: 'Figma' },
        { icon: SiAdobeaftereffects, name: 'After Effects' },
        { icon: SiAdobepremierepro, name: 'Premiere Pro' },
        { icon: SiAdobephotoshop, name: 'Photoshop' },
        { icon: SiAdobeillustrator, name: 'Illustrator' },
    ];

    const techStack = mode === 'institutional' ? institutionalTech : creatorTech;

    // Duplicate the array for seamless infinite scroll
    const duplicatedTech = [...techStack, ...techStack, ...techStack];

    return (
        <section className="relative py-16 md:py-20 bg-black border-y border-border overflow-hidden">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-black to-transparent z-10" />

            {/* Infinite scrolling container */}
            <div className="relative">
                <motion.div
                    className="flex gap-12 md:gap-16"
                    animate={{
                        x: [0, -1000],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedTech.map((tech, index) => (
                        <div
                            key={`${tech.name}-${index}`}
                            className="flex flex-col items-center gap-3 flex-shrink-0"
                        >
                            <tech.icon className="w-12 h-12 md:w-16 md:h-16 text-foreground/40" />
                            <span className="text-xs md:text-sm text-foreground/30 font-mono tracking-wider whitespace-nowrap">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechTicker;
