import { useEffect, useState } from "react";

/** Soft trailing cursor — desktop pointers only, disabled for reduced motion. */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || still) return;
    setEnabled(true);

    const onMove = (e: PointerEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = e.target as HTMLElement | null;
      setActive(Boolean(el?.closest("a, button, [role='button'], input, textarea")));
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[60] hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-aurora-1/60 transition-[width,height,opacity] duration-200 lg:block"
      style={{
        left: pos.x,
        top: pos.y,
        width: active ? 38 : 18,
        height: active ? 38 : 18,
        opacity: active ? 0.75 : 0.4,
        background: "color-mix(in oklab, var(--aurora-1) 12%, transparent)",
      }}
    />
  );
}
