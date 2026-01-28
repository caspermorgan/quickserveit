import { cn } from "@/lib/utils";
import { useMode } from "@/context/ModeContext";

interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const LoadingSpinner = ({ size = 'md', className }: LoadingSpinnerProps) => {
    const { mode } = useMode();

    const sizeClasses = {
        sm: 'w-4 h-4 border-2',
        md: 'w-8 h-8 border-2',
        lg: 'w-12 h-12 border-3',
    };

    return (
        <div
            className={cn(
                "inline-block rounded-full border-solid border-t-transparent animate-spin",
                sizeClasses[size],
                mode === 'institutional'
                    ? 'border-institutional'
                    : 'border-creator',
                className
            )}
            role="status"
            aria-label="Loading"
        >
            <span className="sr-only">Loading...</span>
        </div>
    );
};

export default LoadingSpinner;
