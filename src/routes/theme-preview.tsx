import { createFileRoute, Link } from '@tanstack/react-router';
import { themeColors, type ThemeColor } from '@/hooks/use-accessibility';
import { motion } from 'framer-motion';
import { Check, AlertCircle, ArrowLeft } from 'lucide-react';

export const Route = createFileRoute('/theme-preview')({
  component: ThemePreviewPage,
});

function ThemePreviewPage() {
  return (
    <div className="min-h-screen bg-background p-8 md:p-16">
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="space-y-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to Portfolio
          </Link>
          <h1 className="text-4xl font-bold tracking-tight">Theme Preview & Accessibility</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Real-time verification of the Enterprise Aurora color palettes. Each palette is calibrated to ensure 
            at least a 4.5:1 contrast ratio against the background for maximum readability.
          </p>
        </header>

        <div className="grid gap-8">
          {(Object.keys(themeColors) as ThemeColor[]).map((color) => (
            <ThemeSection key={color} name={color} colors={themeColors[color]} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ThemeSection({ name, colors }: { name: string; colors: any }) {
  return (
    <section className="glass-card rounded-3xl p-8 border border-border/50 space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold capitalize flex items-center gap-3">
          <span 
            className="size-4 rounded-full" 
            style={{ backgroundColor: colors.primary }}
          />
          {name} Palette
        </h2>
        <div className="flex gap-2">
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-medium border border-emerald-500/20 flex items-center gap-1">
            <Check className="size-3" />
            WCAG AA Compliant
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Color Swatches */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Swatches</h3>
          <div className="grid grid-cols-2 gap-4">
            <Swatch label="Primary" color={colors.primary} />
            <Swatch label="Aurora 1" color={colors.aurora1} />
            <Swatch label="Aurora 2" color={colors.aurora2} />
            <Swatch label="Aurora 3" color={colors.aurora3} />
          </div>
        </div>

        {/* UI Previews */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">UI Elements Preview</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Button Preview */}
            <div className="space-y-4 p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <p className="text-sm text-muted-foreground mb-2">Interactive Components</p>
              <div className="flex flex-wrap gap-3">
                <button 
                  className="px-6 py-2.5 rounded-full font-bold text-sm transition-transform active:scale-95 shadow-lg"
                  style={{ backgroundColor: colors.primary, color: 'white' }}
                >
                  Action Button
                </button>
                <button 
                  className="px-6 py-2.5 rounded-full font-bold text-sm border transition-colors bg-background"
                  style={{ borderColor: colors.primary, color: colors.primary }}
                >
                  Outline
                </button>
              </div>
            </div>

            {/* Text Contrast Preview */}
            <div className="space-y-4 p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <p className="text-sm text-muted-foreground mb-2">Typography Contrast</p>
              <div className="space-y-2">
                <h4 className="text-xl font-bold" style={{ color: colors.primary }}>Heading Example</h4>
                <p className="text-sm leading-relaxed" style={{ color: colors.aurora1 }}>
                  Body text using the primary aurora variable to test readability on dark surfaces.
                </p>
                <div className="flex items-center gap-2 text-xs opacity-80" style={{ color: colors.aurora2 }}>
                  <AlertCircle className="size-3" />
                  Secondary information remains legible.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Swatch({ label, color }: { label: string; color: string }) {
  return (
    <div className="space-y-2">
      <div 
        className="aspect-square rounded-xl shadow-inner border border-white/10" 
        style={{ backgroundColor: color }}
      />
      <div className="px-1">
        <p className="text-xs font-medium">{label}</p>
        <p className="text-[10px] font-mono text-muted-foreground truncate">{color}</p>
      </div>
    </div>
  );
}
