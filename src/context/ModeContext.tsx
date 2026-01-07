import { createContext, useContext, useState, ReactNode } from 'react';

type Mode = 'institutional' | 'creator';

interface ModeContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
  hasEntered: boolean;
  setHasEntered: (entered: boolean) => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

// LocalStorage keys
const MODE_STORAGE_KEY = 'quickserveit_mode';
const ENTERED_STORAGE_KEY = 'quickserveit_has_entered';

export const ModeProvider = ({ children }: { children: ReactNode }) => {
  // Initialize state from localStorage if available
  const [mode, setModeState] = useState<Mode>(() => {
    const stored = localStorage.getItem(MODE_STORAGE_KEY);
    return (stored === 'institutional' || stored === 'creator') ? stored : 'institutional';
  });

  const [hasEntered, setHasEnteredState] = useState(() => {
    const stored = localStorage.getItem(ENTERED_STORAGE_KEY);
    return stored === 'true';
  });

  // Wrapper to persist mode to localStorage
  const setMode = (newMode: Mode) => {
    setModeState(newMode);
    localStorage.setItem(MODE_STORAGE_KEY, newMode);
  };

  // Wrapper to persist hasEntered to localStorage
  const setHasEntered = (entered: boolean) => {
    setHasEnteredState(entered);
    localStorage.setItem(ENTERED_STORAGE_KEY, entered.toString());
  };

  return (
    <ModeContext.Provider value={{ mode, setMode, hasEntered, setHasEntered }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
};
