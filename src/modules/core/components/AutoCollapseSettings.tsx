/**
 * Auto-Collapse Settings Component - v3.1 Phase 2
 * Toggle and configure auto-collapse behavior
 */

import { useState } from 'react';
import { Settings, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface AutoCollapseSettings {
    enabled: boolean;
    threshold: number; // Number of cards before auto-collapse triggers
    collapsePercentage: number; // Percentage of cards to collapse (0-100)
}

interface AutoCollapseSettingsProps {
    settings: AutoCollapseSettings;
    onSettingsChange: (settings: AutoCollapseSettings) => void;
    className?: string;
}

export const AutoCollapseSettingsPanel = ({
    settings,
    onSettingsChange,
    className,
}: AutoCollapseSettingsProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        onSettingsChange({
            ...settings,
            enabled: !settings.enabled,
        });
    };

    const handleThresholdChange = (value: number) => {
        onSettingsChange({
            ...settings,
            threshold: value,
        });
    };

    const handlePercentageChange = (value: number) => {
        onSettingsChange({
            ...settings,
            collapsePercentage: value,
        });
    };

    return (
        <div className={cn('relative', className)}>
            {/* Settings Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    'p-3 rounded-lg transition-all duration-normal',
                    'bg-white/10 hover:bg-white/20 border border-white/20',
                    isOpen && 'bg-white/20'
                )}
                aria-label="Auto-collapse settings"
            >
                <Settings size={20} className="text-foreground" />
            </button>

            {/* Settings Panel */}
            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-80 p-4 rounded-xl bg-background/95 backdrop-blur-xl border border-white/20 shadow-2xl z-50">
                    <h3 className="text-lg font-bold text-foreground mb-4">
                        Auto-Collapse Settings
                    </h3>

                    {/* Enable/Disable Toggle */}
                    <div className="flex items-center justify-between mb-4 p-3 rounded-lg bg-white/5">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-foreground">
                                Auto-Collapse
                            </span>
                            <div className="group relative">
                                <Info size={14} className="text-foreground/50 cursor-help" />
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 rounded-lg bg-black/90 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                    Automatically minimize cards when space is limited
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleToggle}
                            className={cn(
                                'relative w-12 h-6 rounded-full transition-colors duration-normal',
                                settings.enabled ? 'bg-institutional' : 'bg-white/20'
                            )}
                        >
                            <div
                                className={cn(
                                    'absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-normal',
                                    settings.enabled ? 'translate-x-7' : 'translate-x-1'
                                )}
                            />
                        </button>
                    </div>

                    {/* Threshold Slider */}
                    <div className="mb-4">
                        <label className="text-sm font-semibold text-foreground mb-2 block">
                            Card Threshold: {settings.threshold}
                        </label>
                        <input
                            type="range"
                            min="4"
                            max="12"
                            step="1"
                            value={settings.threshold}
                            onChange={(e) => handleThresholdChange(Number(e.target.value))}
                            disabled={!settings.enabled}
                            className="w-full h-2 rounded-lg bg-white/10 appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{
                                accentColor: 'hsl(43, 96%, 56%)',
                            }}
                        />
                        <p className="text-xs text-foreground/60 mt-1">
                            Auto-collapse triggers when you have more than {settings.threshold} cards
                        </p>
                    </div>

                    {/* Collapse Percentage Slider */}
                    <div className="mb-4">
                        <label className="text-sm font-semibold text-foreground mb-2 block">
                            Collapse Amount: {settings.collapsePercentage}%
                        </label>
                        <input
                            type="range"
                            min="20"
                            max="60"
                            step="10"
                            value={settings.collapsePercentage}
                            onChange={(e) => handlePercentageChange(Number(e.target.value))}
                            disabled={!settings.enabled}
                            className="w-full h-2 rounded-lg bg-white/10 appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{
                                accentColor: 'hsl(187, 100%, 42%)',
                            }}
                        />
                        <p className="text-xs text-foreground/60 mt-1">
                            Percentage of low-priority cards to minimize
                        </p>
                    </div>

                    {/* Info Box */}
                    <div className="p-3 rounded-lg bg-institutional/10 border border-institutional/20">
                        <p className="text-xs text-foreground/70">
                            <strong className="text-institutional">Smart Priority:</strong> Pinned cards are never auto-collapsed. Low priority and older cards are minimized first.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};
