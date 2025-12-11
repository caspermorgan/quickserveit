import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  mode?: "corporate" | "cinematic";
  delay?: number;
}

export function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  features,
  mode = "corporate",
  delay = 0 
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
    >
      <Card 
        className={cn(
          "p-6 h-full transition-all duration-300 group",
          "border-border hover:border-primary/30",
          mode === "cinematic" && "hover:ai-blue-glow"
        )}
        data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <div className={cn(
          "w-12 h-12 rounded-md flex items-center justify-center mb-4 transition-colors",
          mode === "corporate" 
            ? "bg-primary/10 text-primary group-hover:bg-primary/20" 
            : "bg-[hsl(var(--ai-blue-rim))]/10 text-[hsl(var(--ai-blue-rim))] group-hover:bg-[hsl(var(--ai-blue-rim))]/20"
        )}>
          <Icon className="w-6 h-6" />
        </div>
        
        <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>
        
        {features && features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li 
                key={index}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className={cn(
                  "w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0",
                  mode === "corporate" ? "bg-primary" : "bg-[hsl(var(--ai-blue-rim))]"
                )} />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </Card>
    </motion.div>
  );
}

interface ServiceGridProps {
  children: React.ReactNode;
  className?: string;
}

export function ServiceGrid({ children, className }: ServiceGridProps) {
  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
      className
    )}>
      {children}
    </div>
  );
}
