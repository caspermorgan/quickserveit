import React, { forwardRef, InputHTMLAttributes } from 'react';
import { useMode } from '@/context/ModeContext';

interface GlassInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
}

/**
 * GlassInput - Premium glass-style input component
 * 
 * Features:
 * - Transparent glass background
 * - Theme-aware focus glow (gold/cyan/purple)
 * - Error state handling
 * - Accessible with ARIA attributes
 */
const GlassInput = forwardRef<HTMLInputElement, GlassInputProps>(
    ({ label, error, helperText, className = '', id, ...props }, ref) => {
        const { mode } = useMode();

        // Theme colors
        const themeColor = mode === 'institutional'
            ? 'institutional'
            : mode === 'creator'
                ? 'creator'
                : 'portfolio';

        const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="block text-xs font-mono tracking-wider text-white/50 mb-2 uppercase"
                    >
                        {label}
                    </label>
                )}

                <input
                    ref={ref}
                    id={inputId}
                    className={`
                        w-full px-4 py-3 rounded-xl
                        bg-white/5 border border-white/10
                        text-white font-manrope
                        placeholder:text-white/20
                        transition-all duration-300
                        focus:outline-none
                        ${error
                            ? 'border-red-500/50 focus:border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.3)]'
                            : `focus:border-[var(--theme-${themeColor})] focus:shadow-[0_0_15px_var(--theme-glow-${themeColor})]`
                        }
                        ${className}
                    `}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
                    {...props}
                />

                {error && (
                    <p id={`${inputId}-error`} className="mt-1.5 text-xs text-red-400/80">
                        {error}
                    </p>
                )}

                {!error && helperText && (
                    <p id={`${inputId}-helper`} className="mt-1.5 text-xs text-white/30">
                        {helperText}
                    </p>
                )}
            </div>
        );
    }
);

GlassInput.displayName = 'GlassInput';

export default GlassInput;
