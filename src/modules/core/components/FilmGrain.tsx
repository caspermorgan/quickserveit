import { useIsMobile } from '@/hooks/use-mobile';

const FilmGrain = () => {
  const isMobile = useIsMobile();

  // Disable on mobile to save battery
  if (isMobile) return null;

  return <div className="film-grain" aria-hidden="true" />;
};

export default FilmGrain;
