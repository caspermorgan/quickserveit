import { useState, useEffect, useCallback } from 'react';

interface TypewriterTextProps {
  anchorText?: string;
  phrases: string[];
  className?: string;
  anchorClassName?: string;
  speed?: number;
  pauseDuration?: number;
}

const TypewriterText = ({
  anchorText,
  phrases,
  className = '',
  anchorClassName = '',
  speed = 120,
  pauseDuration = 2500
}: TypewriterTextProps) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const tick = useCallback(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    if (isPaused) return;

    if (!isDeleting) {
      // Typing
      if (currentText.length < currentPhrase.length) {
        setCurrentText(currentPhrase.slice(0, currentText.length + 1));
      } else {
        // Finished typing, pause before deleting
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Deleting
      if (currentText.length > 0) {
        setCurrentText(currentText.slice(0, -1));
      } else {
        // Finished deleting, move to next phrase
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }
  }, [currentText, isDeleting, isPaused, currentPhraseIndex, phrases, pauseDuration]);

  useEffect(() => {
    const timer = setTimeout(tick, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, speed]);

  return (
    <span className="inline-block min-w-0">
      {anchorText && (
        <span className={anchorClassName || 'text-amber-300/80 font-semibold mr-1.5'}>
          {anchorText}
        </span>
      )}
      <span className={`inline-block ${className}`}>
        {currentText}
        <span className="inline-block w-[2px] h-[0.8em] bg-current ml-1 opacity-60 animate-pulse" />
      </span>
    </span>
  );
};

export default TypewriterText;
