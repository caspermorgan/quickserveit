import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getTimeGreeting(): string {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) {
    return "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    return "Good Afternoon";
  } else if (hour >= 17 && hour < 21) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
}

export function getTimeMessage(): string {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) {
    return "Let's build something exceptional.";
  } else if (hour >= 12 && hour < 17) {
    return "Ready to engineer success.";
  } else if (hour >= 17 && hour < 21) {
    return "Time to create brilliance.";
  } else {
    return "The best ideas emerge in silence.";
  }
}

const insights = [
  "Excellence is not an act, but a habit in digital execution.",
  "Every pixel tells a story of precision and purpose.",
  "In the realm of technology, trust is the ultimate currency.",
  "Confidential work demands confidential partners.",
  "The difference between good and exceptional lies in the details.",
  "True authority is demonstrated, never declared.",
  "Digital dominance begins with strategic foundation.",
  "Your institution deserves technology that matches its vision.",
  "Premium execution eliminates risk, creates opportunity.",
  "In creative work, every frame is a promise.",
];

export function getRandomInsight(): string {
  return insights[Math.floor(Math.random() * insights.length)];
}
