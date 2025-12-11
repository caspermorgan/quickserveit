import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  showCursor?: boolean;
  onComplete?: () => void;
}

export function TypewriterText({
  text,
  className = "",
  speed = 50,
  delay = 0,
  showCursor = true,
  onComplete,
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
      onComplete?.();
    }
  }, [displayedText, text, speed, hasStarted, onComplete]);

  return (
    <span className={cn("inline-block", className)} data-testid="typewriter-text">
      {displayedText}
      {showCursor && !isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-[3px] h-[1em] ml-1 bg-primary align-middle"
        />
      )}
      {showCursor && isComplete && (
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="inline-block w-[3px] h-[1em] ml-1 bg-primary align-middle"
        />
      )}
    </span>
  );
}

interface AnimatedHeadingProps {
  greeting: string;
  headline: string;
  subheadline?: string;
  className?: string;
}

export function AnimatedHeading({
  greeting,
  headline,
  subheadline,
  className = "",
}: AnimatedHeadingProps) {
  const [showHeadline, setShowHeadline] = useState(false);
  const [showSubheadline, setShowSubheadline] = useState(false);

  return (
    <div className={cn("space-y-4", className)}>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-lg md:text-xl text-primary font-medium"
      >
        <TypewriterText 
          text={greeting} 
          speed={60}
          onComplete={() => setShowHeadline(true)}
        />
      </motion.p>
      
      {showHeadline && (
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-foreground leading-tight"
        >
          <TypewriterText 
            text={headline}
            speed={40}
            onComplete={() => setShowSubheadline(true)}
          />
        </motion.h1>
      )}
      
      {showSubheadline && subheadline && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl"
        >
          {subheadline}
        </motion.p>
      )}
    </div>
  );
}
