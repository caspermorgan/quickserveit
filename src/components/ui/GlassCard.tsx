import * as React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "gold" | "cyan";
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
    ({ className, variant = "gold", ...props }, ref) => {
        const variantClasses = {
            gold: "border-amber-500/20 bg-amber-500/5",
            cyan: "border-cyan-500/20 bg-cyan-500/5",
        };

        return (
            <div
                ref={ref}
                className={cn(
                    "glass-card rounded-2xl border",
                    variantClasses[variant],
                    className
                )}
                {...props}
            />
        );
    }
);

GlassCard.displayName = "GlassCard";

export default GlassCard;
