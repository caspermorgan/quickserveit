import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem", // Mobile (20px)
        sm: "1.5rem",       // Large Mobile
        md: "2rem",         // Tablet
        lg: "3rem",         // Laptop
        xl: "4rem",         // Desktop
        "2xl": "5rem",      // Ultra-Wide
      },
      screens: {
        "2xl": "1600px", // Expanded for luxury feel
      },
    },
    extend: {
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        // Fluid Typography using clamp()
        // Format: clamp(min, preferred, max)
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['clamp(0.9375rem, 0.5vw + 0.875rem, 1rem)', { lineHeight: '1.5rem' }],
        'lg': ['clamp(1rem, 0.75vw + 0.875rem, 1.125rem)', { lineHeight: '1.75rem' }],
        'xl': ['clamp(1.125rem, 1vw + 0.875rem, 1.25rem)', { lineHeight: '1.75rem' }],
        '2xl': ['clamp(1.25rem, 1.5vw + 0.875rem, 1.5rem)', { lineHeight: '2rem' }],
        '3xl': ['clamp(1.5rem, 2vw + 1rem, 1.875rem)', { lineHeight: '2.25rem' }],
        '4xl': ['clamp(1.875rem, 3vw + 1rem, 2.25rem)', { lineHeight: '2.5rem' }],
        '5xl': ['clamp(2.25rem, 4vw + 1rem, 3rem)', { lineHeight: '1' }],
        '6xl': ['clamp(3rem, 5vw + 1rem, 3.75rem)', { lineHeight: '1' }],
        '7xl': ['clamp(3.75rem, 6vw + 1rem, 4.5rem)', { lineHeight: '1' }],
        '8xl': ['clamp(4.5rem, 7vw + 1rem, 6rem)', { lineHeight: '1' }],
        '9xl': ['clamp(6rem, 8vw + 1rem, 8rem)', { lineHeight: '1' }],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Mode colors - Institutional Premium Gold
        institutional: {
          DEFAULT: "hsl(43, 96%, 56%)",
          foreground: "hsl(0, 0%, 0%)",
          secondary: "hsl(38, 92%, 50%)",
          tertiary: "hsl(30, 85%, 35%)",
        },
        // Mode colors - Creator Premium Cyan  
        creator: {
          DEFAULT: "hsl(187, 100%, 42%)",
          foreground: "hsl(0, 0%, 0%)",
          secondary: "hsl(200, 98%, 48%)",
          tertiary: "hsl(195, 100%, 55%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "blur-in": {
          from: { opacity: "0", filter: "blur(20px)" },
          to: { opacity: "1", filter: "blur(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 30px hsl(var(--mode-h), var(--mode-s), var(--mode-l), 0.3)" },
          "50%": { boxShadow: "0 0 60px hsl(var(--mode-h), var(--mode-s), var(--mode-l), 0.5)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "dust-drift": {
          from: { transform: "translate3d(0, 0, 0) scale(1)", opacity: "1", filter: "blur(0px)" },
          to: { transform: "translate3d(200px, -200px, 0) scale(1.2) rotate(5deg)", opacity: "0", filter: "blur(20px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in-up": "fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "scale-in": "scale-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "blur-in": "blur-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "dust-drift": "dust-drift 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
