import { useState, useEffect, createContext, useContext } from "react";

type FontSize = "sm" | "base" | "lg";
type Contrast = "normal" | "high";

export type ThemeColor = "blue" | "emerald" | "amber" | "rose" | "violet";

interface ColorValues {
  aurora1: string;
  aurora2: string;
  aurora3: string;
  primary: string;
}

export const themeColors: Record<ThemeColor, ColorValues> = {
  blue: {
    aurora1: "oklch(0.68 0.22 260)",
    aurora2: "oklch(0.72 0.18 190)",
    aurora3: "oklch(0.62 0.15 310)",
    primary: "oklch(0.72 0.18 250)",
  },
  emerald: {
    aurora1: "oklch(0.68 0.22 160)",
    aurora2: "oklch(0.75 0.15 120)",
    aurora3: "oklch(0.62 0.18 200)",
    primary: "oklch(0.68 0.22 160)",
  },
  amber: {
    aurora1: "oklch(0.72 0.20 80)",
    aurora2: "oklch(0.78 0.15 50)",
    aurora3: "oklch(0.65 0.18 100)",
    primary: "oklch(0.72 0.20 80)",
  },
  rose: {
    aurora1: "oklch(0.68 0.22 15)",
    aurora2: "oklch(0.72 0.18 340)",
    aurora3: "oklch(0.60 0.20 40)",
    primary: "oklch(0.68 0.22 15)",
  },
  violet: {
    aurora1: "oklch(0.68 0.22 280)",
    aurora2: "oklch(0.72 0.18 240)",
    aurora3: "oklch(0.60 0.15 320)",
    primary: "oklch(0.68 0.22 280)",
  }
};

interface AccessibilitySettings {
  fontSize: FontSize;
  contrast: Contrast;
  reducedMotion: boolean;
  themeColor: ThemeColor;
  setFontSize: (size: FontSize) => void;
  setContrast: (contrast: Contrast) => void;
  setReducedMotion: (reduced: boolean) => void;
  setThemeColor: (color: ThemeColor) => void;
}

const AccessibilityContext = createContext<AccessibilitySettings | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [fontSize, setFontSize] = useState<FontSize>("base");
  const [contrast, setContrast] = useState<Contrast>("normal");
  const [reducedMotion, setReducedMotion] = useState(false);
  const [themeColor, setThemeColor] = useState<ThemeColor>("blue");

  useEffect(() => {
    // Check URL parameters first for shared links
    const params = new URLSearchParams(window.location.search);
    const sharedTheme = params.get("theme") as ThemeColor;
    const sharedFontSize = params.get("fontSize") as FontSize;
    const sharedContrast = params.get("contrast") as Contrast;

    const stored = localStorage.getItem("a11y-settings");
    if (stored || sharedTheme || sharedFontSize || sharedContrast) {
      const parsed = stored ? JSON.parse(stored) : {};
      
      const finalTheme = sharedTheme && Object.keys(themeColors).includes(sharedTheme) ? sharedTheme : parsed.themeColor;
      const finalFontSize = sharedFontSize && ["sm", "base", "lg"].includes(sharedFontSize) ? sharedFontSize : parsed.fontSize;
      const finalContrast = sharedContrast && ["normal", "high"].includes(sharedContrast) ? sharedContrast : parsed.contrast;

      if (finalFontSize) setFontSize(finalFontSize);
      if (finalContrast) setContrast(finalContrast);
      if (typeof parsed.reducedMotion === 'boolean') setReducedMotion(parsed.reducedMotion);
      if (finalTheme) setThemeColor(finalTheme);
      
      // Clean up URL to avoid re-applying on refresh if user changes settings
      if (sharedTheme || sharedFontSize || sharedContrast) {
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    } else {
      const motionPref = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setReducedMotion(motionPref);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.fontSize = fontSize === "sm" ? "14px" : fontSize === "lg" ? "18px" : "16px";
    root.classList.toggle("high-contrast", contrast === "high");
    root.classList.toggle("force-reduced-motion", reducedMotion);

    const colors = themeColors[themeColor];
    root.style.setProperty("--aurora-1", colors.aurora1);
    root.style.setProperty("--aurora-2", colors.aurora2);
    root.style.setProperty("--aurora-3", colors.aurora3);
    root.style.setProperty("--primary", colors.primary);
    root.style.setProperty("--ring", colors.primary);

    localStorage.setItem("a11y-settings", JSON.stringify({ fontSize, contrast, reducedMotion, themeColor }));
  }, [fontSize, contrast, reducedMotion, themeColor]);

  return (
    <AccessibilityContext.Provider value={{ 
      fontSize, 
      contrast, 
      reducedMotion, 
      themeColor,
      setFontSize, 
      setContrast, 
      setReducedMotion,
      setThemeColor
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error("useAccessibility must be used within an AccessibilityProvider");
  }
  return context;
}
