/**
 * SmartCard Component - v3.1 Phase 1
 * Three-state card system: Compact → Standard → Expanded
 * Features: Smooth animations, expansion indicators, touch-optimized
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SmartCardProps, CardMode } from '@/types/card';
import {
    cardVariants,
    contentVariants,
    iconVariants,
    glowVariants,
    indicatorVariants,
    staggerContainer,
    CARD_HEIGHT,
} from '@/lib/card-animations';

export const SmartCard = ({
    state,
    content,
    onModeChange,
    onStateChange,
    isEditMode = false,
    className,
}: SmartCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const { mode, type, priority } = state;
    const Icon = content.icon;

    // Handle card tap/click
    const handleCardClick = () => {
        if (isEditMode) return; // Don't expand in edit mode

        let newMode: CardMode;

        if (mode === 'compact') {
            newMode = 'standard';
        } else if (mode === 'standard') {
            newMode = 'expanded';
        } else {
            return; // Already expanded, use close button
        }

        onModeChange?.(newMode);
        onStateChange?.({
            mode: newMode,
            lastInteraction: Date.now(),
        });
    };

    // Handle collapse
    const handleCollapse = (e: React.MouseEvent) => {
        e.stopPropagation();

        const newMode: CardMode = mode === 'expanded' ? 'standard' : 'compact';

        onModeChange?.(newMode);
        onStateChange?.({
            mode: newMode,
            lastInteraction: Date.now(),
        });
    };

    // Handle close (from expanded)
    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();

        onModeChange?.('standard');
        onStateChange?.({
            mode: 'standard',
            lastInteraction: Date.now(),
        });
    };

    // Get color classes based on card type
    const getColorClasses = () => {
        const baseClasses = {
            border: 'border-white/[0.15]',
            bg: 'bg-white/[0.05]',
            hoverBorder: 'hover:border-white/25',
        };

        if (!isHovered) return baseClasses;

        switch (type) {
            case 'institutional':
                return {
                    border: 'border-institutional/60',
                    bg: 'bg-institutional/[0.15]',
                    hoverBorder: '',
                };
            case 'creator':
                return {
                    border: 'border-creator/60',
                    bg: 'bg-creator/[0.15]',
                    hoverBorder: '',
                };
            case 'ai':
                return {
                    border: 'border-purple-400/60',
                    bg: 'bg-purple-500/[0.15]',
                    hoverBorder: '',
                };
            default:
                return {
                    border: 'border-white/40',
                    bg: 'bg-white/[0.12]',
                    hoverBorder: '',
                };
        }
    };

    const colorClasses = getColorClasses();

    // Get glow color
    const getGlowColor = () => {
        switch (type) {
            case 'institutional':
                return 'shadow-institutional/30';
            case 'creator':
                return 'shadow-creator/30';
            case 'ai':
                return 'shadow-purple-500/30';
            default:
                return 'shadow-white/20';
        }
    };

    // Get icon color
    const getIconColor = () => {
        if (!isHovered) return 'text-foreground/70';

        switch (type) {
            case 'institutional':
                return 'text-institutional';
            case 'creator':
                return 'text-creator';
            case 'ai':
                return 'text-purple-200';
            default:
                return 'text-white';
        }
    };

    // Get CTA color
    const getCtaColor = () => {
        if (!isHovered) return 'text-foreground/50';

        switch (type) {
            case 'institutional':
                return 'text-institutional';
            case 'creator':
                return 'text-creator';
            case 'ai':
                return 'text-purple-200';
            default:
                return 'text-white';
        }
    };

    return (
        <motion.div
            variants={cardVariants}
            initial={mode}
            animate={mode}
            whileHover={!isEditMode ? 'hover' : undefined}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={handleCardClick}
            className={cn(
                'relative overflow-hidden rounded-xl sm:rounded-2xl border transition-all duration-slow ease-out cursor-pointer',
                colorClasses.border,
                colorClasses.bg,
                colorClasses.hoverBorder,
                isHovered && mode !== 'compact' && 'shadow-2xl',
                isHovered && getGlowColor(),
                isEditMode && 'ring-2 ring-white/20 ring-offset-2 ring-offset-background',
                className
            )}
            style={{
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
            }}
        >
            {/* Multi-layer gradient overlay */}
            <motion.div
                variants={glowVariants}
                initial="hidden"
                animate={isHovered ? 'visible' : 'hidden'}
                className={cn(
                    'absolute inset-0 bg-gradient-to-br opacity-0',
                    type === 'institutional' && 'from-institutional/25 via-institutional/15 to-transparent',
                    type === 'creator' && 'from-creator/25 via-creator/15 to-transparent',
                    type === 'ai' && 'from-purple-500/25 via-purple-500/15 to-transparent',
                    type === 'personal' && 'from-white/20 via-white/10 to-transparent'
                )}
            />

            {/* Edge highlight */}
            <motion.div
                variants={glowVariants}
                initial="hidden"
                animate={isHovered ? 'visible' : 'hidden'}
                className="absolute inset-0 rounded-2xl"
                style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)',
                }}
            />

            {/* Badge (if present) */}
            {content.badge && (
                <div className="absolute top-3 right-3 z-20">
                    <div className="px-2.5 py-1 rounded-full bg-purple-500/25 border border-purple-400/40 backdrop-blur-md">
                        <span className="text-[9px] font-semibold text-purple-200 uppercase tracking-widest">
                            {content.badge.text}
                        </span>
                    </div>
                </div>
            )}

            {/* Priority indicator (edit mode) */}
            {isEditMode && priority === 'pinned' && (
                <div className="absolute top-3 left-3 z-20">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center">
                        <span className="text-xs">📌</span>
                    </div>
                </div>
            )}

            {/* Main content */}
            <div className="relative z-10 h-full p-4 sm:p-5 md:p-6">
                <AnimatePresence mode="wait">
                    {/* COMPACT MODE */}
                    {mode === 'compact' && (
                        <motion.div
                            key="compact"
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="flex items-center justify-between h-full"
                        >
                            {/* Icon + Title */}
                            <div className="flex items-center gap-3">
                                <motion.div
                                    variants={iconVariants}
                                    animate="compact"
                                    className={cn(
                                        'inline-flex p-2 rounded-lg transition-all duration-slow',
                                        isHovered ? 'bg-white/20' : 'bg-white/[0.08]',
                                        getIconColor()
                                    )}
                                >
                                    <Icon size={20} />
                                </motion.div>

                                <motion.h3
                                    variants={contentVariants}
                                    custom={1}
                                    className="text-sm font-semibold text-foreground truncate"
                                >
                                    {content.title}
                                </motion.h3>
                            </div>

                            {/* Expansion indicator */}
                            <motion.button
                                variants={indicatorVariants}
                                animate="compact"
                                onClick={handleCardClick}
                                className="flex-shrink-0 p-2 hover:bg-white/10 rounded-lg transition-colors"
                                aria-label="Expand card"
                            >
                                <ChevronDown size={16} className="text-foreground/60" />
                            </motion.button>
                        </motion.div>
                    )}

                    {/* STANDARD MODE */}
                    {mode === 'standard' && (
                        <motion.div
                            key="standard"
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="flex flex-col h-full"
                        >
                            {/* Icon */}
                            <motion.div variants={contentVariants} custom={0} className="mb-3 sm:mb-4">
                                <motion.div
                                    variants={iconVariants}
                                    animate="standard"
                                    whileHover="hover"
                                    className={cn(
                                        'inline-flex p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-slow',
                                        isHovered ? 'bg-white/20 shadow-lg' : 'bg-white/[0.08]',
                                        getIconColor()
                                    )}
                                >
                                    <Icon size={24} className="sm:w-7 sm:h-7" />
                                </motion.div>
                            </motion.div>

                            {/* Title */}
                            <motion.h3
                                variants={contentVariants}
                                custom={1}
                                className="text-base sm:text-lg font-bold text-foreground mb-1 sm:mb-2 leading-tight"
                            >
                                {content.title}
                            </motion.h3>

                            {/* Subtitle */}
                            {content.subtitle && (
                                <motion.p
                                    variants={contentVariants}
                                    custom={2}
                                    className="text-xs sm:text-sm text-foreground/60 mb-3 sm:mb-4 flex-grow"
                                >
                                    {content.subtitle}
                                </motion.p>
                            )}

                            {/* CTA + Collapse indicator */}
                            <motion.div
                                variants={contentVariants}
                                custom={3}
                                className="flex items-center justify-between mt-auto"
                            >
                                <div
                                    className={cn(
                                        'inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold transition-all duration-normal',
                                        getCtaColor()
                                    )}
                                >
                                    {content.primaryAction?.label || 'View Details'}
                                </div>

                                <motion.button
                                    variants={indicatorVariants}
                                    animate="standard"
                                    onClick={handleCollapse}
                                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                                    aria-label="Collapse card"
                                >
                                    <ChevronUp size={14} className="text-foreground/50" />
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    )}

                    {/* EXPANDED MODE */}
                    {mode === 'expanded' && (
                        <motion.div
                            key="expanded"
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="flex flex-col h-full"
                        >
                            {/* Header with close button */}
                            <div className="flex items-start justify-between mb-4">
                                <motion.div variants={iconVariants} animate="expanded" className="mb-2">
                                    <motion.div
                                        whileHover="hover"
                                        className={cn(
                                            'inline-flex p-3 rounded-xl transition-all duration-slow shadow-lg',
                                            'bg-white/20',
                                            getIconColor()
                                        )}
                                    >
                                        <Icon size={32} />
                                    </motion.div>
                                </motion.div>

                                <motion.button
                                    variants={contentVariants}
                                    custom={0}
                                    onClick={handleClose}
                                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                                    aria-label="Close card"
                                >
                                    <X size={20} className="text-foreground/80" />
                                </motion.button>
                            </div>

                            {/* Title */}
                            <motion.h3
                                variants={contentVariants}
                                custom={1}
                                className="text-xl sm:text-2xl font-bold text-foreground mb-3"
                            >
                                {content.title}
                            </motion.h3>

                            {/* Divider */}
                            <motion.div
                                variants={contentVariants}
                                custom={2}
                                className="w-full h-px bg-white/10 mb-4"
                            />

                            {/* Description */}
                            {content.description && (
                                <motion.p
                                    variants={contentVariants}
                                    custom={3}
                                    className="text-sm text-foreground/70 mb-4 flex-grow"
                                >
                                    {content.description}
                                </motion.p>
                            )}

                            {/* Metrics */}
                            {content.metrics && content.metrics.length > 0 && (
                                <motion.div
                                    variants={contentVariants}
                                    custom={4}
                                    className="grid grid-cols-3 gap-3 mb-4"
                                >
                                    {content.metrics.map((metric, index) => (
                                        <div key={index} className="text-center">
                                            <div className={cn('text-lg font-bold', getCtaColor())}>
                                                {metric.value}
                                            </div>
                                            <div className="text-xs text-foreground/50">{metric.label}</div>
                                        </div>
                                    ))}
                                </motion.div>
                            )}

                            {/* Actions */}
                            <motion.div
                                variants={contentVariants}
                                custom={5}
                                className="flex flex-col gap-2 mt-auto"
                            >
                                {content.primaryAction && (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            content.primaryAction?.onClick();
                                        }}
                                        className={cn(
                                            'w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all',
                                            'bg-white/10 hover:bg-white/20 text-foreground'
                                        )}
                                    >
                                        {content.primaryAction.label}
                                    </button>
                                )}

                                {content.secondaryAction && (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            content.secondaryAction?.onClick();
                                        }}
                                        className="w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all border border-white/20 hover:bg-white/5 text-foreground/70"
                                    >
                                        {content.secondaryAction.label}
                                    </button>
                                )}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Ambient glow */}
            <motion.div
                variants={glowVariants}
                initial="hidden"
                animate={isHovered ? 'visible' : 'hidden'}
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                    background:
                        type === 'institutional'
                            ? 'radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.15), transparent 70%)'
                            : type === 'creator'
                                ? 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.15), transparent 70%)'
                                : type === 'ai'
                                    ? 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15), transparent 70%)'
                                    : 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.12), transparent 70%)',
                }}
            />
        </motion.div>
    );
};
