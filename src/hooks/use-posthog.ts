import { useEffect } from "react";
import posthog from "posthog-js";

export function usePostHog() {
  useEffect(() => {
    const key = import.meta.env['VITE_POSTHOG_KEY'];
    const host = import.meta.env['VITE_POSTHOG_HOST'] || "https://us.i.posthog.com";
    
    if (key && typeof window !== "undefined") {
      posthog.init(key, {
        api_host: host,
        person_profiles: 'identified_only',
        capture_pageview: false, // We'll handle this manually for SPA routing
      });
    }
  }, []);
}

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== "undefined" && posthog.__loaded) {
    posthog.capture(eventName, properties);
  }
};
