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
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        brand: ['Space Grotesk', 'sans-serif'],
      },
      fontSize: {
        // Mobile-optimized fluid typography using clamp()
        // Format: clamp(min-mobile, preferred-fluid, max-desktop)
        'xs': ['clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)', { lineHeight: '1.5' }],
        'sm': ['clamp(0.875rem, 0.825rem + 0.25vw, 1rem)', { lineHeight: '1.5' }],
        'base': ['clamp(0.9375rem, 0.875rem + 0.3vw, 1.0625rem)', { lineHeight: '1.6' }],
        'lg': ['clamp(1.0625rem, 1rem + 0.3vw, 1.1875rem)', { lineHeight: '1.6' }],
        'xl': ['clamp(1.1875rem, 1.0625rem + 0.6vw, 1.3125rem)', { lineHeight: '1.5' }],
        '2xl': ['clamp(1.375rem, 1.1875rem + 0.9vw, 1.625rem)', { lineHeight: '1.4' }],
        '3xl': ['clamp(1.75rem, 1.375rem + 1.875vw, 2.25rem)', { lineHeight: '1.3' }],
        '4xl': ['clamp(2.125rem, 1.625rem + 2.5vw, 2.875rem)', { lineHeight: '1.2' }],
        '5xl': ['clamp(2.625rem, 1.875rem + 3.75vw, 3.75rem)', { lineHeight: '1.1' }],
        '6xl': ['clamp(3.25rem, 2.25rem + 5vw, 4.5rem)', { lineHeight: '1.1' }],
        '7xl': ['clamp(4rem, 2.75rem + 6.25vw, 5.5rem)', { lineHeight: '1' }],
        '8xl': ['clamp(5rem, 3.5rem + 7.5vw, 6.75rem)', { lineHeight: '1' }],
        '9xl': ['clamp(6rem, 4rem + 10vw, 8.5rem)', { lineHeight: '1' }],
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
