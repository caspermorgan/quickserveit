// Import fonts
import "@fontsource/space-grotesk/300.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Register service worker for PWA offline support (production only)
if (import.meta.env.PROD) {
    import('virtual:pwa-register').then(({ registerSW }) => {
        const updateSW = registerSW({
            immediate: true,
            onNeedRefresh() {
                // Auto-update without prompting user
                updateSW(true);
            },
            onOfflineReady() {
                // PWA is ready for offline use
            },
            onRegistered(registration) {
                // Service Worker successfully registered
            },
        });
    });
} else {
    // Development: Unregister any existing service workers
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
            registrations.forEach((registration) => {
                registration.unregister();
                // Development: Service worker unregistered
            });
        });
    }
}

createRoot(document.getElementById("root")!).render(<App />);
