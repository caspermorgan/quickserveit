import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FloatingContactButtonProps {
    mode: 'institutional' | 'creator';
}

const FloatingContactButton = ({ mode }: FloatingContactButtonProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling 300px down
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Link
            to="/contact"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
        fixed bottom-6 right-6 z-50
        w-14 h-14 md:w-16 md:h-16
        rounded-full
        flex items-center justify-center
        transition-all duration-500 ease-out
        ${isVisible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-10 scale-90 pointer-events-none'
                }
        ${mode === 'institutional'
                    ? 'bg-institutional hover:bg-institutional/90'
                    : 'bg-creator hover:bg-creator/90'
                }
        ${isHovered ? 'scale-110' : 'scale-100'}
        shadow-[0_4px_20px_rgba(0,0,0,0.15)]
        hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]
      `}
            style={{
                animation: isVisible ? 'float 3s ease-in-out infinite' : 'none',
                boxShadow: mode === 'institutional'
                    ? '0 4px 20px rgba(234, 179, 8, 0.3), 0 0 40px rgba(234, 179, 8, 0.2)'
                    : '0 4px 20px rgba(34, 211, 238, 0.3), 0 0 40px rgba(34, 211, 238, 0.2)'
            }}
            aria-label="Contact Us"
        >
            {/* Neon glow pulse effect */}
            <div
                className={`
          absolute inset-0 rounded-full
          ${mode === 'institutional'
                        ? 'bg-institutional'
                        : 'bg-creator'
                    }
          opacity-50 blur-xl
        `}
                style={{
                    animation: 'pulse 2s ease-in-out infinite'
                }}
            />

            {/* Icon */}
            <MessageCircle
                className="w-6 h-6 md:w-7 md:h-7 text-background relative z-10"
                strokeWidth={2.5}
            />

            {/* Tooltip on hover */}
            <div
                className={`
          absolute right-full mr-3 px-4 py-2
          rounded-lg backdrop-blur-xl bg-background/95 border
          whitespace-nowrap text-sm font-medium
          transition-all duration-300 ease-out pointer-events-none
          ${isHovered
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-2'
                    }
          ${mode === 'institutional'
                        ? 'border-institutional/30 text-institutional shadow-[0_0_15px_rgba(234,179,8,0.2)]'
                        : 'border-creator/30 text-creator shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                    }
        `}
            >
                Contact Us
                {/* Arrow */}
                <div
                    className={`
            absolute left-full top-1/2 -translate-y-1/2 -ml-px
            w-2 h-2 rotate-45 border-r border-b
            ${mode === 'institutional'
                            ? 'bg-background/95 border-institutional/30'
                            : 'bg-background/95 border-creator/30'
                        }
          `}
                />
            </div>
        </Link>
    );
};

export default FloatingContactButton;
