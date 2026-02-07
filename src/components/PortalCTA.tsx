import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';

interface PortalCTAProps {
    mode: 'institutional' | 'creator';
}

const PortalCTA = ({ mode }: PortalCTAProps) => {
    const { t } = useTranslation();

    const ctaText = mode === 'institutional'
        ? t('readyToEliminateChaos')
        : t('readyToDisintegrate');

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
            {/* Animated background particles */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-1 h-1 rounded-full ${mode === 'institutional' ? 'bg-institutional' : 'bg-creator'
                            }`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6">
                {/* CTA Text */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground mb-16 md:mb-20 max-w-3xl mx-auto"
                >
                    {ctaText}
                </motion.h2>

                {/* Glowing Orb Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="relative inline-block"
                >
                    {/* Outer glow rings */}
                    <motion.div
                        className={`absolute inset-0 rounded-full blur-3xl ${mode === 'institutional' ? 'bg-institutional' : 'bg-creator'
                            }`}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    <motion.div
                        className={`absolute inset-0 rounded-full blur-2xl ${mode === 'institutional' ? 'bg-institutional' : 'bg-creator'
                            }`}
                        animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5,
                        }}
                    />

                    {/* Main button */}
                    <Link
                        to="/contact"
                        state={{ intent: 'portal_cta' }}
                        className="group relative"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`relative px-12 py-6 md:px-16 md:py-8 rounded-full font-medium text-lg md:text-xl transition-all duration-300 ${mode === 'institutional'
                                ? 'bg-institutional text-background'
                                : 'bg-creator text-background'
                                }`}
                            style={{
                                boxShadow: mode === 'institutional'
                                    ? '0 0 60px rgba(43, 96, 56, 0.6), 0 0 100px rgba(43, 96, 56, 0.3)'
                                    : '0 0 60px rgba(187, 100, 42, 0.6), 0 0 100px rgba(187, 100, 42, 0.3)'
                            }}
                        >
                            {/* Inner glow */}
                            <div
                                className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${mode === 'institutional'
                                    ? 'bg-gradient-to-r from-institutional/50 via-institutional to-institutional/50'
                                    : 'bg-gradient-to-r from-creator/50 via-creator to-creator/50'
                                    }`}
                            />

                            {/* Text */}
                            <span className="relative z-10">{t('initializeContact')}</span>

                            {/* Particle burst on hover */}
                            <div className="absolute inset-0 rounded-full overflow-hidden">
                                {[...Array(8)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className={`absolute w-2 h-2 rounded-full ${mode === 'institutional' ? 'bg-institutional' : 'bg-creator'
                                            }`}
                                        style={{
                                            left: '50%',
                                            top: '50%',
                                        }}
                                        initial={{ opacity: 0, x: 0, y: 0 }}
                                        whileHover={{
                                            opacity: [0, 1, 0],
                                            x: Math.cos((i * Math.PI * 2) / 8) * 60,
                                            y: Math.sin((i * Math.PI * 2) / 8) * 60,
                                        }}
                                        transition={{ duration: 0.6 }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </Link>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-12 text-foreground/40 text-sm md:text-base font-mono tracking-wider"
                >
                    {mode === 'institutional'
                        ? 'Transform chaos into clarity'
                        : 'Elevate your content to premium'}
                </motion.p>
            </div>
        </section>
    );
};

export default PortalCTA;
