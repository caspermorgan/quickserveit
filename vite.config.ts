import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    strictPort: true, // Fail if port is occupied instead of auto-incrementing
    open: true, // Auto-open browser
    clearScreen: false, // Better terminal output
    hmr: {
      overlay: true, // Show errors as overlay
    },
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'es2020',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
    },
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          // React core and router
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // UI component library - split into smaller chunks
          'radix-ui-core': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-tooltip',
          ],
          'radix-ui-extended': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toast',
            '@radix-ui/react-collapsible',
          ],
          // Form and validation
          'form-vendor': ['react-hook-form', '@hookform/resolvers', 'zod'],
          // Icon libraries - defer loading
          'icons': ['lucide-react', 'react-icons'],
          // Animation libraries - lazy load
          'animations': ['framer-motion', 'canvas-confetti'],
          // Utilities
          'utils': ['clsx', 'tailwind-merge', 'class-variance-authority'],
          // Helmet and query
          'meta-vendor': ['react-helmet-async', '@tanstack/react-query'],
        },
      },
    },
    // Increase chunk size warning limit since we're splitting manually
    chunkSizeWarningLimit: 600,
  },
}));
