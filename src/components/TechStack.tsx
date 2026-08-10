import { motion } from "motion/react";
import { Section } from "./Section";
import { techStack } from "@/data/portfolio";

export function TechStack() {
  return (
    <Section
      id="stack"
      eyebrow="Tech Stack"
      title="The tools behind the services"
      lead="A multi-layered ecosystem optimized for high throughput, maintainable microservices, and secure distributed data flows."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((group, gi) => (
          <motion.div
            key={group.group}
            layout="position"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ delay: gi * 0.05, duration: 0.5, ease: "easeOut" }}
            className="glass-card rounded-xl p-6"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="text-sm font-semibold tracking-wide uppercase">{group.group}</h3>
              <span className="font-mono text-[11px] text-muted-foreground">{group.items.length}</span>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2 justify-center sm:justify-start">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border bg-surface-2/60 px-2.5 py-1.5 font-mono text-[11.5px] text-muted-foreground transition-colors hover:border-aurora-1/50 hover:text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
