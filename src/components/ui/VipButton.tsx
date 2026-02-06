import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const vipButtonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                primary: "",
                secondary: "border-2",
            },
            colorScheme: {
                gold: "",
                cyan: "",
            },
            size: {
                default: "h-11 px-6 py-2 text-sm",
                sm: "h-9 px-4 py-1.5 text-xs",
                lg: "h-14 px-8 py-3 text-base",
            },
        },
        compoundVariants: [
            {
                variant: "primary",
                colorScheme: "gold",
                className: "bg-amber-500 text-black hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/30",
            },
            {
                variant: "primary",
                colorScheme: "cyan",
                className: "bg-cyan-500 text-black hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30",
            },
            {
                variant: "secondary",
                colorScheme: "gold",
                className: "border-amber-500 text-amber-400 hover:bg-amber-500/10 hover:shadow-lg hover:shadow-amber-500/20",
            },
            {
                variant: "secondary",
                colorScheme: "cyan",
                className: "border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20",
            },
        ],
        defaultVariants: {
            variant: "primary",
            colorScheme: "gold",
            size: "default",
        },
    }
);

export interface VipButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof vipButtonVariants> { }

const VipButton = React.forwardRef<HTMLButtonElement, VipButtonProps>(
    ({ className, variant, colorScheme, size, ...props }, ref) => {
        return (
            <button
                className={cn(vipButtonVariants({ variant, colorScheme, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);

VipButton.displayName = "VipButton";

export default VipButton;
