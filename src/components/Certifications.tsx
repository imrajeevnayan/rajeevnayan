import { motion } from "motion/react";
import { Award, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { certifications, codingProfiles } from "@/data/portfolio";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Industry Verification"
      title="Verified certifications & coding profiles"
      lead="Each certificate links to its HackerRank verification page."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <motion.a
            key={c.title}
            href={c.link}
            target="_blank"
            rel="noreferrer noopener"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card group flex flex-col justify-between rounded-xl p-6 transition-colors hover:border-aurora-1/40"
          >
            <div>
              <Award className="size-5 text-aurora-1" strokeWidth={1.6} />
              <h3 className="mt-5 font-semibold group-hover:text-aurora-1">{c.title}</h3>
              <p className="mt-1 font-mono text-[10.5px] tracking-widest text-muted-foreground uppercase">
                {c.issuer}
              </p>
            </div>
            <span className="mt-8 inline-flex items-center gap-1.5 text-xs font-semibold text-aurora-2">
              Verify certificate
              <ExternalLink className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </motion.a>
        ))}
      </div>

      <div className="mt-5 grid gap-4 xs:grid-cols-2 sm:grid-cols-3">
        {codingProfiles.map((p) => (
          <a
            key={p.label}
            href={p.href}
            target="_blank"
            rel="noreferrer noopener"
            className="glass rounded-xl px-5 py-4 transition-colors hover:bg-secondary"
          >
            <p className="text-sm font-semibold">{p.label}</p>
            <p className="mt-1 text-xs text-muted-foreground">{p.note}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}
