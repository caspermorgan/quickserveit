/**
 * SmartCard Demo Page - v3.1 Phase 1, 2 & 3
 * Showcases the three-state card system with auto-collapse and customization features
 */

import { useState, useEffect } from 'react';
import { Building2, User, Code, Sparkles, Zap, Globe, Shield, AlertCircle, Layout } from 'lucide-react';
import { toast } from 'sonner';
import { SmartCard } from '@/components/SmartCard';
import { SortableCard } from '@/components/SortableCard';
import { GridLayoutManager } from '@/components/GridLayoutManager';
import { CustomizationToolbar } from '@/components/CustomizationToolbar';
import { AutoCollapseSettingsPanel, AutoCollapseSettings } from '@/components/AutoCollapseSettings';
import { CardState, CardContent, CardMode } from '@/types/card';
import { useSpaceDetection, useAutoCollapse } from '@/hooks/useAutoCollapse';
import { useLayoutPersistence } from '@/hooks/useLayoutPersistence';

const CardDemo = () => {
    // Sample card states
    const [cards, setCards] = useState<CardState[]>([
        {
            id: 'card-1',
            type: 'institutional',
            mode: 'standard',
            position: { row: 0, col: 0 },
            size: { width: 1, height: 1 },
            priority: 'normal',
            lastInteraction: Date.now(),
            order: 0, // NEW: For drag-and-drop
        },
        {
            id: 'card-2',
            type: 'creator',
            mode: 'compact',
            position: { row: 0, col: 1 },
            size: { width: 1, height: 1 },
            priority: 'normal',
            lastInteraction: Date.now(),
            order: 1,
        },
        {
            id: 'card-3',
            type: 'personal',
            mode: 'standard',
            position: { row: 1, col: 0 },
            size: { width: 1, height: 1 },
            priority: 'high',
            lastInteraction: Date.now(),
            order: 2,
        },
        {
            id: 'card-4',
            type: 'ai',
            mode: 'compact',
            position: { row: 1, col: 1 },
            size: { width: 1, height: 1 },
            priority: 'normal',
            lastInteraction: Date.now(),
            order: 3,
        },
    ]);

    // Phase 3: Customization state
    const [isCustomizing, setIsCustomizing] = useState(false);
    const [gridColumns, setGridColumns] = useState(2);

    // Auto-collapse settings
    const [autoCollapseSettings, setAutoCollapseSettings] = useState<AutoCollapseSettings>({
        enabled: true,
        threshold: 6,
        collapsePercentage: 40,
    });

    // Space detection
    const spaceInfo = useSpaceDetection({
        cardCount: cards.length,
        enabled: autoCollapseSettings.enabled,
    });

    // Auto-collapse management
    const {
        collapsedCardIds,
        canUndo,
        undoCollapse,
        triggerAutoCollapse,
    } = useAutoCollapse({
        cards,
        spaceInfo,
        enabled: autoCollapseSettings.enabled,
        onCardsUpdate: (updatedCards) => setCards(updatedCards),
        onNotification: (message, action) => {
            toast.success(message, {
                action: action ? {
                    label: 'Undo',
                    onClick: action,
                } : undefined,
                duration: 5000,
            });
        },
    });

    // Phase 3: Layout persistence
    const {
        saveLayout,
        loadLayout,
        resetLayout,
        exportLayout,
        importLayout,
        lastSaved,
    } = useLayoutPersistence({
        cards,
        gridColumns,
        autoCollapseSettings,
        onLayoutRestore: (layout) => {
            const restoredCards = cards.map(card => {
                const savedCard = layout.cards.find(c => c.id === card.id);
                if (savedCard) {
                    return { ...card, order: savedCard.order, mode: savedCard.mode, priority: savedCard.priority };
                }
                return card;
            });
            setCards(restoredCards);
            setGridColumns(layout.gridColumns);
            if (layout.autoCollapseSettings) setAutoCollapseSettings(layout.autoCollapseSettings);
            toast.success('Layout restored');
        },
        autoSave: true,
    });

    // Load saved layout on mount
    useEffect(() => {
        loadLayout();
    }, [loadLayout]);

    // Sample card content
    const cardContents: Record<string, CardContent> = {
        'card-1': {
            icon: Building2,
            title: 'Institutional',
            subtitle: 'Schools & Organizations',
            description: 'Comprehensive tech solutions for educational institutions and organizations. We provide end-to-end services including infrastructure setup, maintenance, and support.',
            metrics: [
                { label: 'Active', value: '85+' },
                { label: 'Managed', value: '$1.2M' },
                { label: 'Uptime', value: '99.9%' },
            ],
            primaryAction: {
                label: 'Get Started',
                onClick: () => {},
            },
            secondaryAction: {
                label: 'View Details',
                onClick: () => {},
            },
        },
        'card-2': {
            icon: User,
            title: 'Creator',
            subtitle: 'Portfolio & Personal Brand',
            description: 'Build your personal brand with stunning portfolio websites and creative digital solutions tailored for creators, artists, and professionals.',
            metrics: [
                { label: 'Projects', value: '120+' },
                { label: 'Clients', value: '50+' },
                { label: 'Rating', value: '4.9★' },
            ],
            primaryAction: {
                label: 'Explore',
                onClick: () => {},
            },
            secondaryAction: {
                label: 'See Examples',
                onClick: () => {},
            },
        },
        'card-3': {
            icon: Code,
            title: 'Personal Projects',
            subtitle: 'Custom Development',
            description: 'Unique web applications and software solutions built with modern technologies. From concept to deployment, we bring your ideas to life.',
            metrics: [
                { label: 'Completed', value: '45+' },
                { label: 'Technologies', value: '20+' },
                { label: 'Success', value: '100%' },
            ],
            primaryAction: {
                label: 'View Work',
                onClick: () => {},
            },
        },
        'card-4': {
            icon: Sparkles,
            title: 'AI & Automation',
            subtitle: 'Coming Soon',
            description: 'Smart automation and AI-powered solutions to streamline your workflows and boost productivity. The future of intelligent business operations.',
            badge: {
                text: 'Soon',
                variant: 'info',
            },
            primaryAction: {
                label: 'Join Waitlist',
                onClick: () => {},
            },
        },
    };

    // Handle mode change
    const handleModeChange = (cardId: string, newMode: CardMode) => {
        setCards((prev) =>
            prev.map((card) =>
                card.id === cardId
                    ? { ...card, mode: newMode, lastInteraction: Date.now() }
                    : card
            )
        );
    };

    // Handle state change
    const handleStateChange = (cardId: string, updates: Partial<CardState>) => {
        setCards((prev) =>
            prev.map((card) =>
                card.id === cardId ? { ...card, ...updates } : card
            )
        );
    };

    // Reset all to standard
    const resetAll = () => {
        setCards((prev) =>
            prev.map((card) => ({ ...card, mode: 'standard' as CardMode }))
        );
    };

    // Compact all
    const compactAll = () => {
        setCards((prev) =>
            prev.map((card) => ({ ...card, mode: 'compact' as CardMode }))
        );
    };

    // Phase 3: Handle cards reorder (drag-and-drop)
    const handleCardsReorder = (reorderedCards: CardState[]) => {
        setCards(reorderedCards);
        toast.success('Cards reordered');
    };

    // Phase 3: Handle layout import
    const handleImport = async (file: File) => {
        try {
            await importLayout(file);
        } catch (error) {
            toast.error('Failed to import layout');
        }
    };

    // Phase 3: Handle layout reset
    const handleReset = () => {
        resetLayout();
        setCards(prev => prev.map((card, index) => ({
            ...card,
            order: index,
            mode: 'standard' as CardMode,
        })));
        setGridColumns(2);
        toast.success('Layout reset to default');
    };

    return (
        <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
            {/* Phase 3: Customization Toolbar */}
            <CustomizationToolbar
                gridColumns={gridColumns}
                onGridChange={setGridColumns}
                isCustomizing={isCustomizing}
                onCustomizingChange={setIsCustomizing}
                onReset={handleReset}
                onExport={exportLayout}
                onImport={handleImport}
            />

            {/* Header */}
            <div className="max-w-7xl mx-auto mb-8">
                <div className="text-center mb-6">
                    <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-3">
                        SmartCard Demo
                    </h1>
                    <p className="text-lg text-foreground/60 mb-6">
                        v3.1 Phase 1, 2 & 3 - Full Customization System
                    </p>

                    {/* Controls */}
                    <div className="flex flex-wrap gap-3 justify-center items-center">
                        <button
                            onClick={resetAll}
                            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-foreground font-semibold transition-all"
                        >
                            Reset to Standard
                        </button>
                        <button
                            onClick={compactAll}
                            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-foreground font-semibold transition-all"
                        >
                            Compact All
                        </button>
                        <button
                            onClick={triggerAutoCollapse}
                            disabled={!autoCollapseSettings.enabled}
                            className="px-4 py-2 rounded-lg bg-institutional/20 hover:bg-institutional/30 text-foreground font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-institutional/40"
                        >
                            Trigger Auto-Collapse
                        </button>
                        {canUndo && (
                            <button
                                onClick={undoCollapse}
                                className="px-4 py-2 rounded-lg bg-creator/20 hover:bg-creator/30 text-foreground font-semibold transition-all border border-creator/40 animate-fade-in"
                            >
                                Undo Auto-Collapse
                            </button>
                        )}
                        <AutoCollapseSettingsPanel
                            settings={autoCollapseSettings}
                            onSettingsChange={setAutoCollapseSettings}
                        />
                    </div>

                    {/* Space Info Display */}
                    {autoCollapseSettings.enabled && (
                        <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/10 max-w-2xl mx-auto">
                            <div className="flex items-center gap-2 mb-2">
                                <AlertCircle size={16} className="text-institutional" />
                                <span className="text-sm font-semibold text-foreground">Space Detection</span>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                                <div>
                                    <div className="text-foreground/50">Viewport</div>
                                    <div className="font-semibold text-foreground">{spaceInfo.viewportWidth}px</div>
                                </div>
                                <div>
                                    <div className="text-foreground/50">Grid Columns</div>
                                    <div className="font-semibold text-foreground">{spaceInfo.gridColumns}</div>
                                </div>
                                <div>
                                    <div className="text-foreground/50">Card Space</div>
                                    <div className="font-semibold text-foreground">{Math.round(spaceInfo.availableCardSpace)}px</div>
                                </div>
                                <div>
                                    <div className="text-foreground/50">Auto-Collapse</div>
                                    <div className={`font-semibold ${spaceInfo.shouldAutoCollapse ? 'text-amber-400' : 'text-green-400'}`}>
                                        {spaceInfo.shouldAutoCollapse ? 'Active' : 'Inactive'}
                                    </div>
                                </div>
                            </div>
                            {collapsedCardIds.length > 0 && (
                                <div className="mt-2 pt-2 border-t border-white/10">
                                    <span className="text-xs text-foreground/60">
                                        {collapsedCardIds.length} card{collapsedCardIds.length > 1 ? 's' : ''} auto-collapsed
                                    </span>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <div className="flex items-center gap-2 mb-2">
                            <Zap size={20} className="text-institutional" />
                            <h3 className="font-semibold text-foreground">Compact Mode</h3>
                        </div>
                        <p className="text-sm text-foreground/60">
                            56px height • Icon + Title + Chevron • Tap to expand
                        </p>
                    </div>

                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <div className="flex items-center gap-2 mb-2">
                            <Globe size={20} className="text-creator" />
                            <h3 className="font-semibold text-foreground">Standard Mode</h3>
                        </div>
                        <p className="text-sm text-foreground/60">
                            180px height • Full content • Default state
                        </p>
                    </div>

                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <div className="flex items-center gap-2 mb-2">
                            <Shield size={20} className="text-purple-400" />
                            <h3 className="font-semibold text-foreground">Expanded Mode</h3>
                        </div>
                        <p className="text-sm text-foreground/60">
                            320px height • Detailed view • Metrics + Actions
                        </p>
                    </div>

                    <div className="p-4 rounded-lg bg-institutional/10 border border-institutional/20">
                        <div className="flex items-center gap-2 mb-2">
                            <AlertCircle size={20} className="text-institutional" />
                            <h3 className="font-semibold text-foreground">Auto-Collapse</h3>
                        </div>
                        <p className="text-sm text-foreground/60">
                            Smart space optimization • Priority-based • Undo support
                        </p>
                    </div>
                </div>
            </div>

            {/* Phase 3: Card Grid with Drag-and-Drop */}
            <div className="max-w-7xl mx-auto">
                <GridLayoutManager
                    cards={cards.sort((a, b) => (a.order || 0) - (b.order || 0))}
                    onCardsReorder={handleCardsReorder}
                    gridColumns={gridColumns}
                    isCustomizing={isCustomizing}
                    renderDragOverlay={(activeCard) =>
                        activeCard ? (
                            <SmartCard
                                state={activeCard}
                                content={cardContents[activeCard.id]}
                                className="opacity-80 rotate-2 scale-105"
                            />
                        ) : null
                    }
                >
                    {cards.map((card) => (
                        <SortableCard
                            key={card.id}
                            card={card}
                            content={cardContents[card.id]}
                            isCustomizing={isCustomizing}
                            onModeChange={(mode) => handleModeChange(card.id, mode)}
                            onStateChange={(updates) => handleStateChange(card.id, updates)}
                        />
                    ))}
                </GridLayoutManager>
            </div>

            {/* Instructions */}
            <div className="max-w-7xl mx-auto mt-12">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                        How to Use
                    </h2>
                    <ul className="space-y-2 text-foreground/70">
                        <li className="flex items-start gap-2">
                            <span className="text-institutional font-bold">•</span>
                            <span><strong>Tap a compact card</strong> to expand to standard mode</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-creator font-bold">•</span>
                            <span><strong>Tap a standard card</strong> to expand to full detailed view</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-400 font-bold">•</span>
                            <span><strong>Tap the chevron/close icon</strong> to collapse cards</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-white font-bold">•</span>
                            <span><strong>Hover over cards</strong> to see smooth animations and glows</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-amber-400 font-bold">•</span>
                            <span><strong>Resize your browser</strong> to trigger auto-collapse when space is limited</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-cyan-400 font-bold">•</span>
                            <span><strong>Click settings icon</strong> to configure auto-collapse behavior</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Technical Info */}
            <div className="max-w-7xl mx-auto mt-8">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-institutional/10 to-creator/10 border border-white/10">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                        Technical Highlights
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-foreground/70">
                        <div>
                            <strong className="text-foreground">Animation:</strong> Framer Motion with elastic easing
                        </div>
                        <div>
                            <strong className="text-foreground">Duration:</strong> 400ms expand, 300ms collapse
                        </div>
                        <div>
                            <strong className="text-foreground">Performance:</strong> GPU-accelerated transforms
                        </div>
                        <div>
                            <strong className="text-foreground">Accessibility:</strong> ARIA labels, keyboard support
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDemo;
