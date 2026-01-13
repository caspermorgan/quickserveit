interface FilmGrainProps {
  mode?: 'institutional' | 'creator';
}

const FilmGrain = ({ mode = 'institutional' }: FilmGrainProps) => {
  const modeClass = mode === 'institutional' ? 'film-grain-institutional' : 'film-grain-creator';
  return <div className={`film-grain ${modeClass}`} aria-hidden="true" />;
};

export default FilmGrain;
