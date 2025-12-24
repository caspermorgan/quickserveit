import { Lock } from 'lucide-react';
import { useState } from 'react';

interface LockedPortfolioItemProps {
    title: string;
    category: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    onUnlock: () => void;
}

const LockedPortfolioItem = ({
    title,
    category,
    description,
    icon: Icon,
    onUnlock,
}: LockedPortfolioItemProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            onClick={onUnlock}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative p-6 rounded-2xl glass-card border border-border/20 hover:border-creator/30 transition-all duration-300 text-left w-full"
        >
            {/* Lock Indicator */}
            <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-foreground/5 border border-border/30 flex items-center justify-center">
                <Lock className="w-4 h-4 text-foreground/40" />
            </div>

            {/* Content */}
            <div className="w-12 h-12 rounded-xl bg-creator/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-creator" />
            </div>
            <span className="text-xs font-medium text-creator uppercase tracking-wider">
                {category}
            </span>
            <h3 className="text-lg font-medium mt-2 mb-2 group-hover:text-creator transition-colors">
                {title}
            </h3>
            <p className="text-sm text-foreground/50 line-clamp-2">{description}</p>

            {/* Hover hint */}
            {isHovered && (
                <div className="absolute inset-0 rounded-2xl bg-creator/5 backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-200">
                    <span className="text-xs font-medium text-creator">Click to view access policy</span>
                </div>
            )}
        </button>
    );
};

export default LockedPortfolioItem;
