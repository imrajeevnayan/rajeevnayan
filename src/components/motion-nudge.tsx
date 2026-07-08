"use client";

import * as React from "react";
import { X } from "lucide-react";
import { enableMotion, usePerfProfile } from "../hooks/use-perf-profile";

const DISMISS_KEY = "portfolio:motion-nudge-dismissed";

export default function MotionNudge() {
  const { ready, rawReducedMotion, motionEnabled, lowEnd } = usePerfProfile();
  const [dismissed, setDismissed] = React.useState(true);

  React.useEffect(() => {
    try {
      setDismissed(localStorage.getItem(DISMISS_KEY) === "1");
    } catch {
      setDismissed(false);
    }
  }, []);

  const dismiss = () => {
    setDismissed(true);
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  if (!ready || !rawReducedMotion || motionEnabled || lowEnd || dismissed) {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-4 left-1/2 z-50 w-[min(92vw,22rem)] -translate-x-1/2 sm:left-auto sm:right-4 sm:translate-x-0 rounded-xl border border-[var(--border-main)] bg-[var(--surface-card)] p-4 shadow-lg backdrop-blur"
    >
      <button
        onClick={dismiss}
        aria-label="Dismiss"
        className="absolute right-2 top-2 rounded-md p-1 text-[var(--text-muted)] hover:bg-[var(--surface-main)] hover:text-[var(--text-primary)] transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
      <p className="pr-6 text-sm font-medium text-[var(--text-primary)]">
        Reduced motion is on
      </p>
      <p className="mt-1 text-xs text-[var(--text-secondary)]">
        The interactive 3D scene and animations are turned off. Want the full experience?
      </p>
      <div className="mt-3 flex gap-2">
        <button
          onClick={enableMotion}
          className="px-3 py-1.5 bg-[var(--brand-accent)] text-white text-xs font-semibold rounded-lg hover:opacity-90 active:scale-[0.98] transition-all"
        >
          Enable 3D
        </button>
        <button
          onClick={dismiss}
          className="px-3 py-1.5 text-[var(--text-secondary)] hover:bg-[var(--surface-main)] text-xs font-medium rounded-lg transition-all"
        >
          No thanks
        </button>
      </div>
    </div>
  );
}
