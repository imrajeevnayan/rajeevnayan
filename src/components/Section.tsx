import type { ReactNode } from "react";
import { motion } from "motion/react";

export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  title?: ReactNode;
  lead?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-28 py-20 sm:py-28 ${className || ""}`}>
      <div className="section-shell">
        {(eyebrow || title || lead) && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
          >
            {eyebrow && <span className="font-mono text-xs tracking-widest text-aurora-2 uppercase">{eyebrow}</span>}
            {title && <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>}
            {lead ? <p className="mt-4 leading-relaxed text-muted-foreground">{lead}</p> : null}
          </motion.div>
        )}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
