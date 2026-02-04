import { useMode } from '@/context/ModeContext';
import InstAbout from './InstAbout';
import CrAbout from './CrAbout';

/**
 * About Page - Mode-Aware Router
 * 
 * Conditionally renders the appropriate About page based on the current mode:
 * - Institutional mode → InstAbout (Gold theme, Authority-focused)
 * - Creator mode → CrAbout (Cyan theme, Tech-focused)
 * - Portfolio mode → Defaults to InstAbout
 * 
 * This maintains the single /about route while providing distinct,
 * mode-specific content with strict business/founder separation.
 */
const About = () => {
  const { mode } = useMode();

  if (mode === 'institutional') {
    return <InstAbout />;
  } else if (mode === 'creator') {
    return <CrAbout />;
  }

  // Default to institutional for portfolio mode or undefined states
  return <InstAbout />;
};

export default About;
