import { ReactNode } from 'react';

interface LevitatingWrapperProps {
    children: ReactNode;
    delay?: 'none' | 'delayed' | 'slow';
    className?: string;
}

const LevitatingWrapper = ({ children, delay = 'none', className = '' }: LevitatingWrapperProps) => {
    const animationClass = delay === 'delayed'
        ? 'animate-float-delayed'
        : delay === 'slow'
            ? 'animate-float-slow'
            : 'animate-float';

    return (
        <div className={`${animationClass} ${className}`}>
            {children}
        </div>
    );
};

export default LevitatingWrapper;
