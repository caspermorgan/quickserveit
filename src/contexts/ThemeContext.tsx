import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';
type ThemePreference = 'light' | 'dark' | 'system';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'theme-preference';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    // 1. Initialize Preference from Storage (Default: 'system')
    const [preference, setPreference] = useState<ThemePreference>(() => {
        if (typeof window === 'undefined') return 'system';
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'light' || stored === 'dark' || stored === 'system') {
            return stored;
        }
        return 'system';
    });

    // 2. Initialize Resolved Theme (Read DOM first to avoid flicker during hydration)
    const [resolvedTheme, setResolvedTheme] = useState<Theme>(() => {
        if (typeof window === 'undefined') return 'dark'; // SSR Fallback
        // Check if the blocking script set a class
        if (document.documentElement.classList.contains('theme-light')) return 'light';
        if (document.documentElement.classList.contains('theme-dark')) return 'dark';
        // Fallback to media query if no class (shouldn't happen with blocking script)
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    });

    // 3. Effect: Handle System Changes & Preference Updates
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');

        const applyTheme = () => {
            let newTheme: Theme;

            if (preference === 'system') {
                newTheme = mediaQuery.matches ? 'light' : 'dark';
            } else {
                newTheme = preference;
            }

            setResolvedTheme(newTheme);

            // DOM Update
            const root = document.documentElement;
            root.classList.remove('theme-light', 'theme-dark');
            root.classList.add(`theme-${newTheme}`);

            // Set Color Scheme for browser UI
            root.style.colorScheme = newTheme;
        };

        applyTheme();

        // Listen for system changes ONLY if preference is system
        const handleSystemChange = () => {
            if (preference === 'system') {
                applyTheme();
            }
        };

        mediaQuery.addEventListener('change', handleSystemChange);
        return () => mediaQuery.removeEventListener('change', handleSystemChange);
    }, [preference]);

    // 4. Toggle Function
    const toggleTheme = () => {
        setPreference(prev => {
            // Logic: Cycle -> If system/dark -> go light. If light -> go dark.
            // Simplified: If currently seeing light, switch to dark preference.
            // If currently seeing dark, switch to light preference.
            // This sets a MANUAL preference, overriding system.
            const newPref = resolvedTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem(STORAGE_KEY, newPref);
            return newPref;
        });
    };

    return (
        <ThemeContext.Provider value={{ theme: resolvedTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};
