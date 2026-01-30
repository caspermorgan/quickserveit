import { motion } from 'framer-motion';

interface SkeletonLoaderProps {
    className?: string;
}

export const SkeletonLoader = ({ className = '' }: SkeletonLoaderProps) => {
    return (
        <div className={`animate-pulse ${className}`}>
            <div className="h-full w-full bg-foreground/5 rounded-lg" />
        </div>
    );
};

export const PageSkeletonLoader = () => {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
            >
                {/* Animated loader */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-6">
                    {/* Outer rotating ring */}
                    <div
                        className="absolute inset-0 rounded-full border-2 border-foreground/10"
                        style={{
                            animation: 'spin 3s linear infinite'
                        }}
                    />

                    {/* Inner pulsing core */}
                    <div
                        className="absolute inset-4 rounded-full glass-2 border border-foreground/20 flex items-center justify-center"
                        style={{
                            animation: 'pulse 2s ease-in-out infinite'
                        }}
                    >
                        {/* Center dot */}
                        <div className="w-2 h-2 rounded-full bg-foreground/40 animate-pulse" />
                    </div>

                    {/* Orbiting particles */}
                    <div
                        className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-foreground/60"
                        style={{
                            transformOrigin: '-2rem 0',
                            animation: 'spin 4s linear infinite'
                        }}
                    />
                    <div
                        className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-foreground/40"
                        style={{
                            transformOrigin: '-2.5rem 0',
                            animation: 'spin 5s linear infinite reverse'
                        }}
                    />
                </div>

                <p className="text-sm text-foreground/40 font-mono tracking-wide">
                    Loading...
                </p>
            </motion.div>
        </div>
    );
};

export default PageSkeletonLoader;
