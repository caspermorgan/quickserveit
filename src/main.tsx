// Import fonts
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Register service worker for PWA offline support
import { registerSW } from 'virtual:pwa-register';

// Auto-update service worker
const updateSW = registerSW({
    onNeedRefresh() {
        // Auto-update without prompting user
        updateSW(true);
    },
    onOfflineReady() {
        console.log('App ready to work offline');
    },
});

createRoot(document.getElementById("root")!).render(<App />);
