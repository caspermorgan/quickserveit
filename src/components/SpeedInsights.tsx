import { useEffect } from 'react';
import { injectSpeedInsights } from '@vercel/speed-insights';

/**
 * SpeedInsights component that injects Vercel Speed Insights tracking script.
 * This component should be rendered once in the root of your application.
 * 
 * Speed Insights helps you monitor the performance of your application
 * and understand how your users experience your site.
 */
export function SpeedInsights() {
  useEffect(() => {
    // Inject the Speed Insights script on component mount
    injectSpeedInsights();
  }, []);

  return null;
}
