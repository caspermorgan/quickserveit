import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from 'vite-plugin-pwa';
import { imagetools } from 'vite-imagetools';

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
    imagetools({
      defaultDirectives: new URLSearchParams({
        format: 'webp',
        quality: '80'
      })
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'android-chrome-192x192.png', 'android-chrome-512x512.png', 'og-*.png'],
      manifest: {
        name: 'QuickServe IT',
        short_name: 'QuickServe',
        description: 'Premium IT documentation and creative services for institutions and creators',
        theme_color: '#010101',
        background_color: '#010101',
        display: 'standalone',
        orientation: 'portrait-primary',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2}'],
        runtimeCaching: [
          {
            // Cache pages for offline access
            urlPattern: /^https:\/\/www\.quickserveit\.online\/(home|contact|services|pricing|about)?$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'pages-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 7 // 7 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            // Cache API responses
            urlPattern: /^https:\/\/api\.emailjs\.com\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 5 // 5 minutes
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            // Cache images
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
              }
            }
          },
          {
            // Cache fonts
            urlPattern: /\.(?:woff|woff2|ttf|otf)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'fonts-cache',
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              }
            }
          },
          {
            // Cache Google Fonts
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              }
            }
          },
          {
            // Cache Google Fonts static resources
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              }
            }
          }
        ],
        // Offline fallback
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [/^\/api/]
      },
      devOptions: {
        enabled: false // Disable in dev for faster HMR
      }
    })
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
