/**
 * Customization Toolbar - v3.1 Phase 3
 * Floating toolbar for layout customization controls
 */

import { useState } from 'react';
import { Settings, Grid3x3, Grid2x2, LayoutGrid, RotateCcw, Download, Upload, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export interface CustomizationToolbarProps {
    gridColumns: number;
    onGridChange: (columns: number) => void;
    isCustomizing: boolean;
    onCustomizingChange: (enabled: boolean) => void;
    onReset: () => void;
    onExport?: () => void;
    onImport?: (file: File) => void;
    className?: string;
}

export const CustomizationToolbar = ({
    gridColumns,
    onGridChange,
    isCustomizing,
    onCustomizingChange,
    onReset,
    onExport,
    onImport,
    className,
}: CustomizationToolbarProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleImportClick = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = (e) => {
            const file = (e.target as HTMLInputElement).files?.[0];
            if (file && onImport) {
                onImport(file);
            }
        };
        input.click();
    };

    const gridOptions = [
        { value: 2, icon: Grid2x2, label: '2 Columns' },
        { value: 3, icon: Grid3x3, label: '3 Columns' },
        { value: 4, icon: LayoutGrid, label: '4 Columns' },
    ];

    return (
        <div className={cn('fixed z-50', className)}>
            {/* Mobile: Bottom-center */}
            <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2">
                <AnimatePresence>
                    {isExpanded ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className={cn(
                                'flex flex-col gap-2 p-3 rounded-2xl',
                                'bg-background/95 backdrop-blur-xl border-2',
                                isCustomizing ? 'border-institutional shadow-institutional/20' : 'border-white/20',
                                'shadow-2xl'
                            )}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsExpanded(false)}
                                className="self-end p-1 rounded-lg hover:bg-white/10 transition-colors"
                                aria-label="Close toolbar"
                            >
                                <X size={16} className="text-foreground/60" />
                            </button>

                            {/* Customization Toggle */}
                            <button
                                onClick={() => onCustomizingChange(!isCustomizing)}
                                className={cn(
                                    'flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all',
                                    isCustomizing
                                        ? 'bg-institutional text-institutional-foreground'
                                        : 'bg-white/10 text-foreground hover:bg-white/20'
                                )}
                            >
                                <Settings size={18} />
                                <span>{isCustomizing ? 'Exit Customize' : 'Customize Layout'}</span>
                            </button>

                            {/* Grid Options */}
                            <div className="flex gap-2">
                                {gridOptions.map(({ value, icon: Icon, label }) => (
                                    <button
                                        key={value}
                                        onClick={() => onGridChange(value)}
                                        className={cn(
                                            'flex-1 flex flex-col items-center gap-1 p-2 rounded-lg transition-all',
                                            gridColumns === value
                                                ? 'bg-creator/20 border-2 border-creator text-creator'
                                                : 'bg-white/5 border border-white/10 text-foreground/60 hover:bg-white/10'
                                        )}
                                        aria-label={label}
                                    >
                                        <Icon size={20} />
                                        <span className="text-xs">{value}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-2">
                                <button
                                    onClick={onReset}
                                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-foreground/70 transition-all text-sm"
                                    aria-label="Reset layout"
                                >
                                    <RotateCcw size={16} />
                                    <span>Reset</span>
                                </button>
                                {onExport && (
                                    <button
                                        onClick={onExport}
                                        className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-foreground/70 transition-all"
                                        aria-label="Export layout"
                                    >
                                        <Download size={16} />
                                    </button>
                                )}
                                {onImport && (
                                    <button
                                        onClick={handleImportClick}
                                        className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-foreground/70 transition-all"
                                        aria-label="Import layout"
                                    >
                                        <Upload size={16} />
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            onClick={() => setIsExpanded(true)}
                            className={cn(
                                'p-4 rounded-full transition-all',
                                'bg-background/95 backdrop-blur-xl border-2',
                                isCustomizing
                                    ? 'border-institutional shadow-lg shadow-institutional/30 animate-glow-pulse'
                                    : 'border-white/20 shadow-xl'
                            )}
                            aria-label="Open customization toolbar"
                        >
                            <Settings size={24} className={isCustomizing ? 'text-institutional' : 'text-foreground'} />
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>

            {/* Desktop: Top-right */}
            <div className="hidden md:block fixed top-6 right-6">
                <div
                    className={cn(
                        'flex items-center gap-2 p-2 rounded-xl',
                        'bg-background/95 backdrop-blur-xl border-2',
                        isCustomizing ? 'border-institutional shadow-institutional/20' : 'border-white/20',
                        'shadow-xl transition-all'
                    )}
                >
                    {/* Customization Toggle */}
                    <button
                        onClick={() => onCustomizingChange(!isCustomizing)}
                        className={cn(
                            'flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-all',
                            isCustomizing
                                ? 'bg-institutional text-institutional-foreground'
                                : 'bg-white/10 text-foreground hover:bg-white/20'
                        )}
                    >
                        <Settings size={18} />
                        <span className="text-sm">{isCustomizing ? 'Exit' : 'Customize'}</span>
                    </button>

                    {/* Separator */}
                    <div className="w-px h-8 bg-white/10" />

                    {/* Grid Options */}
                    {gridOptions.map(({ value, icon: Icon, label }) => (
                        <button
                            key={value}
                            onClick={() => onGridChange(value)}
                            className={cn(
                                'p-2 rounded-lg transition-all',
                                gridColumns === value
                                    ? 'bg-creator/20 border border-creator text-creator'
                                    : 'bg-white/5 text-foreground/60 hover:bg-white/10'
                            )}
                            aria-label={label}
                            title={label}
                        >
                            <Icon size={18} />
                        </button>
                    ))}

                    {/* Separator */}
                    <div className="w-px h-8 bg-white/10" />

                    {/* Action Buttons */}
                    <button
                        onClick={onReset}
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-foreground/70 transition-all"
                        aria-label="Reset layout"
                        title="Reset layout"
                    >
                        <RotateCcw size={18} />
                    </button>

                    {onExport && (
                        <button
                            onClick={onExport}
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-foreground/70 transition-all"
                            aria-label="Export layout"
                            title="Export layout"
                        >
                            <Download size={18} />
                        </button>
                    )}

                    {onImport && (
                        <button
                            onClick={handleImportClick}
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-foreground/70 transition-all"
                            aria-label="Import layout"
                            title="Import layout"
                        >
                            <Upload size={18} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
