import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        toggleTheme();
    };

    return (
        <button
            onClick={handleClick}
            type="button"
            className="relative w-10 h-10 rounded-full flex items-center justify-center trans-interactive hover-micro focus:outline-none focus:ring-2 focus:ring-primary-900/30 active:scale-95 cursor-pointer touch-manipulation"
            aria-label={`Current theme: ${theme}. Click to switch to ${theme === 'light' ? 'dark' : 'light'} mode.`}
            title={`Current theme: ${theme}`}
            style={{
                background: 'var(--neutral-100)',
                border: '1px solid var(--neutral-300)',
                color: 'var(--neutral-950)',
                WebkitTapHighlightColor: 'transparent',
                userSelect: 'none',
                zIndex: 50
            }}
        >
            {theme === 'light' ? (
                <Moon className="w-5 h-5 pointer-events-none" />
            ) : (
                <Sun className="w-5 h-5 pointer-events-none" />
            )}
        </button>
    );
};
