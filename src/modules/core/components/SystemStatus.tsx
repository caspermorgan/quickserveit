import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { useState, useEffect } from 'react';

interface SystemStatusProps {
    mode: 'institutional' | 'creator';
}

const SystemStatus = ({ mode }: SystemStatusProps) => {
    const { t } = useTranslation();
    const [showCursor, setShowCursor] = useState(true);

    // Blinking cursor effect
    useEffect(() => {
        const interval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 530);
        return () => clearInterval(interval);
    }, []);

    // Mode-specific status messages
    const institutionalStatus = {
        currentStatus: 'Available for Institutional Projects',
        nextSlot: 'Open in 3 Days',
        activeProjects: '2 Schools in Queue',
    };

    const creatorStatus = {
        currentStatus: 'Available for High-Ticket Projects',
        nextSlot: 'Open in 2 Days',
        activeProjects: '3 Active Productions',
    };

    const status = mode === 'institutional' ? institutionalStatus : creatorStatus;

    return (
        <section className="relative py-16 md:py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative"
                >
                    {/* Terminal-style container */}
                    <div className="glass-card border border-border/50 rounded-lg overflow-hidden">
                        {/* Terminal header */}
                        <div className="bg-foreground/5 px-4 py-2 border-b border-border/50 flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <span className="text-xs text-foreground/40 font-mono ml-2">
                                system.status
                            </span>
                        </div>

                        {/* Terminal content */}
                        <div className="p-6 md:p-8 font-mono text-sm md:text-base space-y-3 bg-black/50">
                            {/* Scan line effect */}
                            <div className="absolute inset-0 pointer-events-none">
                                <motion.div
                                    className="w-full h-[2px] bg-gradient-to-r from-transparent via-green-500/20 to-transparent"
                                    animate={{
                                        y: [0, 400],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />
                            </div>

                            <div className="relative space-y-3">
                                <div className="flex items-start gap-2">
                                    <span className={mode === 'institutional' ? 'text-institutional' : 'text-creator'}>
                                        &gt;
                                    </span>
                                    <span className="text-foreground/80">
                                        {t('systemStatus').toUpperCase()}
                                    </span>
                                </div>

                                <div className="flex items-start gap-2 pl-4">
                                    <span className="text-foreground/60">•</span>
                                    <div className="flex-1">
                                        <span className="text-foreground/60">{t('currentStatus')}: </span>
                                        <span className={mode === 'institutional' ? 'text-institutional' : 'text-creator'}>
                                            {status.currentStatus}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-2 pl-4">
                                    <span className="text-foreground/60">•</span>
                                    <div className="flex-1">
                                        <span className="text-foreground/60">{t('nextSlot')}: </span>
                                        <span className="text-foreground/80">{status.nextSlot}</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-2 pl-4">
                                    <span className="text-foreground/60">•</span>
                                    <div className="flex-1">
                                        <span className="text-foreground/60">{t('priorityQueue')}: </span>
                                        <span className="text-foreground/80">{status.activeProjects}</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-2 pt-2">
                                    <span className={mode === 'institutional' ? 'text-institutional' : 'text-creator'}>
                                        &gt;
                                    </span>
                                    <span className={`text-foreground/60 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
                                        _
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SystemStatus;
