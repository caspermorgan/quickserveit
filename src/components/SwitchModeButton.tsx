import { useNavigate } from 'react-router-dom';
import { useMode } from '@/context/ModeContext';
import { RefreshCw } from 'lucide-react';

interface SwitchModeButtonProps {
    variant?: 'default' | 'minimal';
    className?: string;
}

const SwitchModeButton = ({ variant = 'default', className = '' }: SwitchModeButtonProps) => {
    const { resetMode } = useMode();
    const navigate = useNavigate();

    const handleSwitchMode = () => {
        resetMode();
        navigate('/');
    };

    if (variant === 'minimal') {
        return (
            <button
                onClick={handleSwitchMode}
                className={`flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors ${className}`}
                aria-label="Switch mode"
            >
                <RefreshCw className="w-4 h-4" />
            </button>
        );
    }

    return (
        <button
            onClick={handleSwitchMode}
            className={`px-4 py-2 rounded-lg border border-foreground/10 text-sm font-medium text-foreground/80 hover:bg-foreground/5 hover:border-foreground/20 transition-all ${className}`}
            aria-label="Switch mode"
        >
            <RefreshCw className="w-4 h-4 inline" />
        </button>
    );
};

export default SwitchModeButton;
