import { motion } from "motion/react";
import { Boxes, Database, ShieldCheck, Waypoints } from "lucide-react";
import { Section } from "./Section";
import { pillars, profile, education } from "@/data/portfolio";

const icons = [Waypoints, Boxes, Database, ShieldCheck];

export function About() {
  return (
    <Section id="about" eyebrow="Engineering Philosophy" title={<>Backend engineering, done deliberately</>}>
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="flex flex-col items-center lg:items-start space-y-8 lg:col-span-5">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="avatar-ring size-44 sm:size-52 md:size-60 lg:size-64 rounded-2xl p-[2px] sm:p-[3px] shadow-2xl overflow-hidden"
          >
            <img 
              src="https://github.com/imrajeevnayan.png?size=512" 
              alt={profile.name}
              className="size-full rounded-[13px] border-2 border-background object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
          
          <div className="space-y-5 w-full">
            {profile.bio.map((p) => (
              <p key={p.slice(0, 24)} className="leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}

            <div className="glass-card rounded-xl p-5">
              <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">Education</p>
              <p className="mt-2 font-semibold">{education.degree}</p>
              <p className="text-sm text-muted-foreground">{education.school}</p>
              <p className="mt-2 font-mono text-xs text-muted-foreground">
                {education.period} · {education.location}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {pillars.map((p, i) => {
            const Icon = icons[i % icons.length] ?? Waypoints;
            return (
              <motion.article
                key={p.title}
                role="region"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card group rounded-xl p-6 transition-colors hover:border-aurora-1/40 will-change-transform"
                aria-label={p.title}
              >
                <Icon className="size-5 text-aurora-1" strokeWidth={1.6} />
                <h3 className="mt-5 font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{p.body}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
