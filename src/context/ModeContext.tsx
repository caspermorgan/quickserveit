import { createContext, useContext, useState, ReactNode } from 'react';

type Mode = 'institutional' | 'creator';

interface ModeContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
  hasEntered: boolean;
  setHasEntered: (entered: boolean) => void;
  currentSection: Mode;
  setCurrentSection: (section: Mode) => void;
  resetMode: () => void; // Reset mode and return to landing
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

// LocalStorage keys
const MODE_STORAGE_KEY = 'quickserveit_mode';
const ENTERED_STORAGE_KEY = 'quickserveit_has_entered';
const CURRENT_SECTION_KEY = 'quickserveit_current_section';

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

  const [currentSection, setCurrentSectionState] = useState<Mode>(() => {
    const stored = localStorage.getItem(CURRENT_SECTION_KEY);
    return (stored === 'institutional' || stored === 'creator') ? stored : 'institutional';
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

  // Wrapper to persist currentSection to localStorage
  const setCurrentSection = (section: Mode) => {
    setCurrentSectionState(section);
    localStorage.setItem(CURRENT_SECTION_KEY, section);
  };

  // Clear all stored preferences and return to landing page
  const resetMode = () => {
    setHasEnteredState(false);
    setModeState('institutional'); // Reset to default mode
    setCurrentSectionState('institutional'); // Reset to default section
    localStorage.removeItem(MODE_STORAGE_KEY);
    localStorage.removeItem(ENTERED_STORAGE_KEY);
    localStorage.removeItem(CURRENT_SECTION_KEY);
  };

  return (
    <ModeContext.Provider value={{ mode, setMode, hasEntered, setHasEntered, currentSection, setCurrentSection, resetMode }}>
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
