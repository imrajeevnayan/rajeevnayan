import { useState } from "react";
import { Settings, X, Minus, Plus, Zap, ZapOff, Contrast as ContrastIcon, Palette, Check, Share2, Copy } from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "motion/react";
import { useAccessibility, themeColors, type ThemeColor } from "@/hooks/use-accessibility";

export function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    fontSize, contrast, reducedMotion, themeColor,
    setFontSize, setContrast, setReducedMotion, setThemeColor 
  } = useAccessibility();

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Accessibility Settings"
        className="glass fixed left-5 bottom-5 z-50 rounded-full px-4 py-2.5 font-mono text-[11px] text-muted-foreground transition-colors hover:text-foreground active:scale-95"
      >
        <Settings className="size-3.5 inline mr-2" />
        <span className="hidden sm:inline">Settings</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass relative w-full max-w-sm rounded-3xl p-6 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <div className="mb-6 flex items-center justify-between">
                <h2 className="font-mono text-sm font-bold uppercase tracking-widest">Preferences</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-2 hover:bg-surface-2 transition-colors"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="mb-6 flex gap-2">
                <button
                  onClick={() => {
                    const url = new URL(window.location.origin);
                    url.searchParams.set("theme", themeColor);
                    url.searchParams.set("fontSize", fontSize);
                    url.searchParams.set("contrast", contrast);
                    navigator.clipboard.writeText(url.toString());
                    toast.success("Shareable link copied to clipboard!");
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-[10px] font-mono font-bold uppercase tracking-widest bg-surface-2 border border-border/50 text-muted-foreground hover:text-foreground transition-all"
                >
                  <Share2 className="size-3" />
                  Share Theme
                </button>
              </div>

              <div className="space-y-8">
                {/* Theme Color Picker */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    <Palette className="size-4" />
                    Theme Accent
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {(Object.keys(themeColors) as ThemeColor[]).map((color) => (
                      <button
                        key={color}
                        onClick={() => setThemeColor(color)}
                        className={`group relative size-10 rounded-xl transition-all hover:scale-110 active:scale-95 border-2 ${
                          themeColor === color ? "border-foreground" : "border-transparent"
                        }`}
                        style={{ backgroundColor: themeColors[color].primary }}
                        title={color.charAt(0).toUpperCase() + color.slice(1)}
                      >
                        {themeColor === color && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-[9px]">
                            <Check className="size-5 text-white" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Font Size */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      <Minus className="size-4" />
                      Text Size
                    </div>
                    <span className="font-mono text-[10px] bg-surface-2 px-2 py-0.5 rounded uppercase">{fontSize}</span>
                  </div>
                  <div className="flex gap-2">
                    {(["sm", "base", "lg"] as const).map((size) => (
                      <button
                        key={size}
                        onClick={() => setFontSize(size)}
                        className={`flex-1 py-2 rounded-xl text-xs font-medium border transition-all ${
                          fontSize === size 
                            ? "bg-foreground text-background border-foreground" 
                            : "bg-surface-2 border-border text-muted-foreground hover:border-foreground/30"
                        }`}
                      >
                        {size === 'sm' && <Minus className="size-3 inline mr-1" />}
                        {size === 'lg' && <Plus className="size-3 inline mr-1" />}
                        {size === 'base' ? 'Default' : size.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contrast */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    <ContrastIcon className="size-4" />
                    Visual Contrast
                  </div>
                  <div className="flex gap-2">
                    {(["normal", "high"] as const).map((c) => (
                      <button
                        key={c}
                        onClick={() => setContrast(c)}
                        className={`flex-1 py-2 rounded-xl text-xs font-medium border transition-all flex items-center justify-center gap-2 ${
                          contrast === c 
                            ? "bg-foreground text-background border-foreground" 
                            : "bg-surface-2 border-border text-muted-foreground hover:border-foreground/30"
                        }`}
                      >
                        <ContrastIcon className="size-3" />
                        {c.charAt(0).toUpperCase() + c.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Motion */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    <Zap className="size-4" />
                    Motion Effects
                  </div>
                  <button
                    onClick={() => setReducedMotion(!reducedMotion)}
                    className={`w-full py-3 rounded-xl text-xs font-medium border transition-all flex items-center justify-center gap-3 ${
                      reducedMotion 
                        ? "bg-amber-500/10 border-amber-500/50 text-amber-500" 
                        : "bg-emerald-500/10 border-emerald-500/50 text-emerald-500"
                    }`}
                  >
                    {reducedMotion ? <ZapOff className="size-4" /> : <Zap className="size-4" />}
                    {reducedMotion ? "Reduced Motion Active" : "Full Motion Active"}
                  </button>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-border/50">
                <a 
                  href="/theme-preview" 
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground hover:bg-surface-2 transition-all"
                >
                  <Palette className="size-3" />
                  Detailed Theme Preview
                </a>
              </div>
              <p className="mt-4 text-[10px] text-center text-muted-foreground font-mono leading-relaxed">
                Settings persist locally in your browser session.
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
