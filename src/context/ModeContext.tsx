import { createContext, useContext, useState, ReactNode } from 'react';

type Mode = 'institutional' | 'creator';

interface ModeContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
  hasEntered: boolean;
  setHasEntered: (entered: boolean) => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export const ModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<Mode>('institutional');
  const [hasEntered, setHasEntered] = useState(false);

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
