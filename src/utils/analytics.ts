import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initGA = (measurementId: string = 'G-XXXXXXXXXX') => {
    // Only initialize in production
    if (import.meta.env.PROD) {
        ReactGA.initialize(measurementId);
    }
};

// Log page views
export const logPageView = (path: string, title?: string) => {
    if (import.meta.env.PROD) {
        ReactGA.send({ hitType: 'pageview', page: path, title });
    }
};

// Log custom events
export const logEvent = (category: string, action: string, label?: string, value?: number) => {
    if (import.meta.env.PROD) {
        ReactGA.event({
            category,
            action,
            label,
            value,
        });
    }
};

// Track mode switches
export const logModeSwitch = (mode: 'institutional' | 'creator') => {
    logEvent('User Interaction', 'Mode Switch', mode);
};

// Track contact form submissions
export const logContactSubmission = (method: 'form' | 'whatsapp') => {
    logEvent('Conversion', 'Contact Submission', method);
};

// Track service page visits
export const logServiceView = (service: string) => {
    logEvent('Content', 'Service View', service);
};

// Track language switches
export const logLanguageSwitch = (language: 'en' | 'hi') => {
    logEvent('User Interaction', 'Language Switch', language);
};

// Track pricing tier views
export const logPricingView = (tier: string) => {
    logEvent('Content', 'Pricing View', tier);
};

// Track external link clicks
export const logExternalClick = (destination: string) => {
    logEvent('Navigation', 'External Click', destination);
};
