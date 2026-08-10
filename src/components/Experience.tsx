import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Section } from "./Section";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Professional Track" title="Career Timeline">
      <div className="relative space-y-6 before:absolute before:top-2 before:bottom-2 before:left-[15px] before:w-px before:bg-border md:before:left-[19px]">
        {experience.map((exp, i) => (
          <motion.article
            key={exp.role}
            layout="position"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }}
            className="relative pl-12 md:pl-16"
          >
            <span className="glass absolute top-1 left-0 flex size-8 items-center justify-center rounded-full md:size-10">
              <Briefcase className="size-4 text-aurora-1" strokeWidth={1.6} />
            </span>

            <div className="glass-card rounded-xl p-6 sm:p-8" aria-label={`Experience at ${exp.company}`}>
              <div className="flex flex-wrap items-start justify-center sm:justify-between gap-4 text-center sm:text-left">
                <div>
                  <h3 className="text-xl font-bold sm:text-2xl">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                </div>
                <div className="flex flex-wrap justify-center sm:justify-end gap-4 font-mono text-[11px] text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-aurora-2" /> {exp.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="size-3.5 text-aurora-2" /> {exp.period}
                  </span>
                </div>
              </div>

              <p className="mt-5 border-l border-border pl-5 text-sm leading-relaxed text-muted-foreground">
                {exp.desc}
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {exp.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-[13px] leading-relaxed text-muted-foreground">
                    <span className="mt-[7px] size-1 shrink-0 rounded-full bg-aurora-1" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
