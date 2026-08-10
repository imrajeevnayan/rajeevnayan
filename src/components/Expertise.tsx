import { useState } from "react";
import { motion } from "motion/react";
import { Section } from "./Section";
import { Magnetic } from "./Magnetic";
import { expertise, systemDesign } from "@/data/portfolio";

export function Expertise() {
  const [active, setActive] = useState(expertise[0]?.id ?? "rest");
  const current = expertise.find((e) => e.id === active) ?? expertise[0]!;

  return (
    <Section
      id="expertise"
      eyebrow="System Design & Expertise"
      title="Where the hard problems live"
      lead="Five areas that decide whether a backend holds up in production."
    >
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide lg:pb-0 lg:col-span-4 lg:flex-col lg:overflow-visible">
          {expertise.map((e) => (
            <button
              key={e.id}
              onClick={() => setActive(e.id)}
              aria-pressed={active === e.id}
              aria-controls="expertise-panel"
              className={`shrink-0 rounded-xl border px-4 py-3.5 text-left text-sm font-medium transition-all lg:w-full ${
                active === e.id
                  ? "border-aurora-1/50 bg-surface-2 text-foreground glow-ring"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {e.title}
            </button>
          ))}
        </div>

        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="glass-card rounded-2xl p-7 lg:col-span-8"
          id="expertise-panel"
          role="tabpanel"
          aria-labelledby={active}
        >
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-center lg:text-left">{current.title}</h3>
          <p className="mt-2 text-muted-foreground text-center lg:text-left">{current.blurb}</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {current.items.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 rounded-lg border border-border bg-background/40 px-4 py-3"
              >
                <span className="font-mono text-[11px] text-aurora-2">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-16">
        <h3 className="text-lg font-semibold tracking-tight text-center lg:text-left">System design principles</h3>
        <p className="mt-2 max-w-2xl mx-auto lg:mx-0 text-sm leading-relaxed text-muted-foreground text-center lg:text-left">
          The defaults I reach for when a service has to grow past a single instance.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {systemDesign.map((s, i) => (
            <Magnetic key={s.title} strength={0.15}>
              <motion.article
                role="region"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.04, duration: 0.4, ease: "easeOut" }}
                className="glass-card h-full rounded-2xl p-6 transition-colors hover:border-aurora-1/40"
                aria-label={s.title}
              >
                <p className="font-mono text-[11px] text-aurora-2">{String(i + 1).padStart(2, "0")}</p>
                <h4 className="mt-3 font-semibold tracking-tight">{s.title}</h4>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{s.body}</p>
              </motion.article>
            </Magnetic>
          ))}
        </div>
      </div>
    </Section>

  );
}
