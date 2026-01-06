// vite.config.ts
import { defineConfig } from "file:///C:/Users/vinod/OneDrive/Documents/Agency/quickserveit/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/vinod/OneDrive/Documents/Agency/quickserveit/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///C:/Users/vinod/OneDrive/Documents/Agency/quickserveit/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "C:\\Users\\vinod\\OneDrive\\Documents\\Agency\\quickserveit";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
    // Fail if port is occupied instead of auto-incrementing
    open: true,
    // Auto-open browser
    clearScreen: false,
    // Better terminal output
    hmr: {
      overlay: true
      // Show errors as overlay
    }
  },
  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  build: {
    target: "es2020",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info", "console.debug"]
      }
    },
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          // React core and router
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          // UI component library - split into smaller chunks
          "radix-ui-core": [
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-tooltip"
          ],
          "radix-ui-extended": [
            "@radix-ui/react-accordion",
            "@radix-ui/react-alert-dialog",
            "@radix-ui/react-tabs",
            "@radix-ui/react-toast",
            "@radix-ui/react-collapsible"
          ],
          // Form and validation
          "form-vendor": ["react-hook-form", "@hookform/resolvers", "zod"],
          // Icon libraries - defer loading
          "icons": ["lucide-react", "react-icons"],
          // Animation libraries - lazy load
          "animations": ["framer-motion", "canvas-confetti"],
          // Utilities
          "utils": ["clsx", "tailwind-merge", "class-variance-authority"],
          // Helmet and query
          "meta-vendor": ["react-helmet-async", "@tanstack/react-query"]
        }
      }
    },
    // Increase chunk size warning limit since we're splitting manually
    chunkSizeWarningLimit: 600
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx2aW5vZFxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudHNcXFxcQWdlbmN5XFxcXHF1aWNrc2VydmVpdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcdmlub2RcXFxcT25lRHJpdmVcXFxcRG9jdW1lbnRzXFxcXEFnZW5jeVxcXFxxdWlja3NlcnZlaXRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3Zpbm9kL09uZURyaXZlL0RvY3VtZW50cy9BZ2VuY3kvcXVpY2tzZXJ2ZWl0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHsgY29tcG9uZW50VGFnZ2VyIH0gZnJvbSBcImxvdmFibGUtdGFnZ2VyXCI7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiAoe1xyXG4gIHNlcnZlcjoge1xyXG4gICAgaG9zdDogXCI6OlwiLFxyXG4gICAgcG9ydDogODA4MCxcclxuICAgIHN0cmljdFBvcnQ6IHRydWUsIC8vIEZhaWwgaWYgcG9ydCBpcyBvY2N1cGllZCBpbnN0ZWFkIG9mIGF1dG8taW5jcmVtZW50aW5nXHJcbiAgICBvcGVuOiB0cnVlLCAvLyBBdXRvLW9wZW4gYnJvd3NlclxyXG4gICAgY2xlYXJTY3JlZW46IGZhbHNlLCAvLyBCZXR0ZXIgdGVybWluYWwgb3V0cHV0XHJcbiAgICBobXI6IHtcclxuICAgICAgb3ZlcmxheTogdHJ1ZSwgLy8gU2hvdyBlcnJvcnMgYXMgb3ZlcmxheVxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICBtb2RlID09PSAnZGV2ZWxvcG1lbnQnICYmIGNvbXBvbmVudFRhZ2dlcigpLFxyXG4gIF0uZmlsdGVyKEJvb2xlYW4pLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICB0YXJnZXQ6ICdlczIwMjAnLFxyXG4gICAgbWluaWZ5OiAndGVyc2VyJyxcclxuICAgIHRlcnNlck9wdGlvbnM6IHtcclxuICAgICAgY29tcHJlc3M6IHtcclxuICAgICAgICBkcm9wX2NvbnNvbGU6IHRydWUsXHJcbiAgICAgICAgZHJvcF9kZWJ1Z2dlcjogdHJ1ZSxcclxuICAgICAgICBwdXJlX2Z1bmNzOiBbJ2NvbnNvbGUubG9nJywgJ2NvbnNvbGUuaW5mbycsICdjb25zb2xlLmRlYnVnJ10sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxyXG4gICAgc291cmNlbWFwOiBmYWxzZSxcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB7XHJcbiAgICAgICAgICAvLyBSZWFjdCBjb3JlIGFuZCByb3V0ZXJcclxuICAgICAgICAgICdyZWFjdC12ZW5kb3InOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbScsICdyZWFjdC1yb3V0ZXItZG9tJ10sXHJcbiAgICAgICAgICAvLyBVSSBjb21wb25lbnQgbGlicmFyeSAtIHNwbGl0IGludG8gc21hbGxlciBjaHVua3NcclxuICAgICAgICAgICdyYWRpeC11aS1jb3JlJzogW1xyXG4gICAgICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LWRpYWxvZycsXHJcbiAgICAgICAgICAgICdAcmFkaXgtdWkvcmVhY3QtZHJvcGRvd24tbWVudScsXHJcbiAgICAgICAgICAgICdAcmFkaXgtdWkvcmVhY3QtdG9vbHRpcCcsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgJ3JhZGl4LXVpLWV4dGVuZGVkJzogW1xyXG4gICAgICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LWFjY29yZGlvbicsXHJcbiAgICAgICAgICAgICdAcmFkaXgtdWkvcmVhY3QtYWxlcnQtZGlhbG9nJyxcclxuICAgICAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC10YWJzJyxcclxuICAgICAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC10b2FzdCcsXHJcbiAgICAgICAgICAgICdAcmFkaXgtdWkvcmVhY3QtY29sbGFwc2libGUnLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIC8vIEZvcm0gYW5kIHZhbGlkYXRpb25cclxuICAgICAgICAgICdmb3JtLXZlbmRvcic6IFsncmVhY3QtaG9vay1mb3JtJywgJ0Bob29rZm9ybS9yZXNvbHZlcnMnLCAnem9kJ10sXHJcbiAgICAgICAgICAvLyBJY29uIGxpYnJhcmllcyAtIGRlZmVyIGxvYWRpbmdcclxuICAgICAgICAgICdpY29ucyc6IFsnbHVjaWRlLXJlYWN0JywgJ3JlYWN0LWljb25zJ10sXHJcbiAgICAgICAgICAvLyBBbmltYXRpb24gbGlicmFyaWVzIC0gbGF6eSBsb2FkXHJcbiAgICAgICAgICAnYW5pbWF0aW9ucyc6IFsnZnJhbWVyLW1vdGlvbicsICdjYW52YXMtY29uZmV0dGknXSxcclxuICAgICAgICAgIC8vIFV0aWxpdGllc1xyXG4gICAgICAgICAgJ3V0aWxzJzogWydjbHN4JywgJ3RhaWx3aW5kLW1lcmdlJywgJ2NsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSddLFxyXG4gICAgICAgICAgLy8gSGVsbWV0IGFuZCBxdWVyeVxyXG4gICAgICAgICAgJ21ldGEtdmVuZG9yJzogWydyZWFjdC1oZWxtZXQtYXN5bmMnLCAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5J10sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAvLyBJbmNyZWFzZSBjaHVuayBzaXplIHdhcm5pbmcgbGltaXQgc2luY2Ugd2UncmUgc3BsaXR0aW5nIG1hbnVhbGx5XHJcbiAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDYwMCxcclxuICB9LFxyXG59KSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1YsU0FBUyxvQkFBb0I7QUFDNVgsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLHVCQUF1QjtBQUhoQyxJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssT0FBTztBQUFBLEVBQ3pDLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQTtBQUFBLElBQ1osTUFBTTtBQUFBO0FBQUEsSUFDTixhQUFhO0FBQUE7QUFBQSxJQUNiLEtBQUs7QUFBQSxNQUNILFNBQVM7QUFBQTtBQUFBLElBQ1g7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixTQUFTLGlCQUFpQixnQkFBZ0I7QUFBQSxFQUM1QyxFQUFFLE9BQU8sT0FBTztBQUFBLEVBQ2hCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLGVBQWU7QUFBQSxRQUNmLFlBQVksQ0FBQyxlQUFlLGdCQUFnQixlQUFlO0FBQUEsTUFDN0Q7QUFBQSxJQUNGO0FBQUEsSUFDQSxjQUFjO0FBQUEsSUFDZCxXQUFXO0FBQUEsSUFDWCxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixjQUFjO0FBQUE7QUFBQSxVQUVaLGdCQUFnQixDQUFDLFNBQVMsYUFBYSxrQkFBa0I7QUFBQTtBQUFBLFVBRXpELGlCQUFpQjtBQUFBLFlBQ2Y7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBLHFCQUFxQjtBQUFBLFlBQ25CO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQTtBQUFBLFVBRUEsZUFBZSxDQUFDLG1CQUFtQix1QkFBdUIsS0FBSztBQUFBO0FBQUEsVUFFL0QsU0FBUyxDQUFDLGdCQUFnQixhQUFhO0FBQUE7QUFBQSxVQUV2QyxjQUFjLENBQUMsaUJBQWlCLGlCQUFpQjtBQUFBO0FBQUEsVUFFakQsU0FBUyxDQUFDLFFBQVEsa0JBQWtCLDBCQUEwQjtBQUFBO0FBQUEsVUFFOUQsZUFBZSxDQUFDLHNCQUFzQix1QkFBdUI7QUFBQSxRQUMvRDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUE7QUFBQSxJQUVBLHVCQUF1QjtBQUFBLEVBQ3pCO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
