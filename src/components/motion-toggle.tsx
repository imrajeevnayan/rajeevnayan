"use client";

import { Zap, ZapOff } from "lucide-react";
import { setMotionPreference, usePerfProfile } from "../hooks/use-perf-profile";

export default function MotionToggle({ className = "" }: { className?: string }) {
  const { ready, reducedMotion } = usePerfProfile();
  const motionOn = ready ? !reducedMotion : true;
  const Icon = motionOn ? Zap : ZapOff;

  return (
    <button
      onClick={() => setMotionPreference(reducedMotion ? "on" : "off")}
      aria-pressed={reducedMotion}
      aria-label={motionOn ? "Reduce motion and disable 3D" : "Enable motion and 3D"}
      className={`bg-[var(--surface-main)] hover:bg-[var(--surface-card)] border border-[var(--border-main)] text-[var(--text-primary)] rounded-full p-2 md:px-4 md:py-2 flex items-center gap-2 text-xs font-medium transition-all duration-300 ${className}`}
    >
      <Icon className="w-4 h-4 text-[var(--brand-accent)] shrink-0" />
      <span className="hidden md:inline">{motionOn ? "Reduce Motion" : "Enable 3D"}</span>
    </button>
  );
}
