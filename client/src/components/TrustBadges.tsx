import { motion } from "framer-motion";
import { Shield, Zap, Users, Lock, Clock, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const badges = [
  { icon: Shield, label: "Confidential Output", description: "Your data stays private" },
  { icon: Zap, label: "Urgent Work Accepted", description: "Priority processing available" },
  { icon: Users, label: "IT Staff Friendly", description: "We complement your team" },
  { icon: Lock, label: "Secure WhatsApp", description: "Encrypted communication" },
  { icon: Clock, label: "On-Campus Support", description: "Physical presence when needed" },
  { icon: CheckCircle, label: "Quality Assured", description: "Every output verified" },
];

interface TrustBadgesProps {
  variant?: "compact" | "full";
  className?: string;
  showDescription?: boolean;
  maxItems?: number;
}

export function TrustBadges({ 
  variant = "compact", 
  className = "",
  showDescription = false,
  maxItems = badges.length
}: TrustBadgesProps) {
  const displayBadges = badges.slice(0, maxItems);

  if (variant === "compact") {
    return (
      <div 
        className={cn("flex flex-wrap items-center gap-4", className)}
        data-testid="trust-badges-compact"
      >
        {displayBadges.map((badge, index) => (
          <motion.div
            key={badge.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <badge.icon className="w-4 h-4 text-primary" />
            <span>{badge.label}</span>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div 
      className={cn("grid grid-cols-2 md:grid-cols-3 gap-4", className)}
      data-testid="trust-badges-full"
    >
      {displayBadges.map((badge, index) => (
        <motion.div
          key={badge.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
        >
          <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-3">
            <badge.icon className="w-5 h-5 text-primary" />
          </div>
          <h4 className="font-medium text-foreground mb-1">{badge.label}</h4>
          {showDescription && (
            <p className="text-xs text-muted-foreground">{badge.description}</p>
          )}
        </motion.div>
      ))}
    </div>
  );
}
