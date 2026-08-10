import { motion, useReducedMotion } from "motion/react";
import { Github, Linkedin, MapPin, Mail, FileText } from "lucide-react";
import { trackEvent } from "@/hooks/use-posthog";
import { profile } from "@/data/portfolio";
import resumeAsset from "@/assets/rajeev-nayan-resume.pdf.asset.json";

export function IdentityCard() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.aside
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card group mx-auto w-full max-w-[420px] rounded-3xl p-8 sm:p-10 text-center hover:border-aurora-1/40 hover:shadow-glow/20 sm:hover:-translate-y-2 transition-all duration-300"
      aria-label="Identity Card"
    >

      <div className={`avatar-ring mx-auto size-28 sm:size-32 md:size-36 lg:size-40 rounded-full p-[2px] sm:p-[3px] ${prefersReducedMotion ? "" : "transition-transform duration-500 group-hover:scale-[1.04]"}`}>
        <img
          src="https://github.com/imrajeevnayan.png?size=512"
          width={256}
          height={256}
          loading="lazy"
          alt={`${profile.name}, ${profile.role}`}
          className="size-full rounded-full border-2 border-background object-cover shadow-2xl"
        />
      </div>

      <h2 className="mt-6 text-2xl font-semibold tracking-tight">{profile.name}</h2>
      <p className="mt-1 font-mono text-xs tracking-wide text-aurora-2">{profile.role}</p>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        Specializing in production-grade Java architectures, high-throughput microservices, and AI-driven system designs.
      </p>

      <div className="mt-6 flex items-center justify-center gap-4 font-mono text-[11px] text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="size-3.5" /> {profile.location}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-chart-5" /> Open to roles
        </span>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2 border-t border-border pt-6">
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub profile"
          className="flex min-h-11 min-w-11 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-secondary hover:text-foreground active:scale-95"
        >
          <Github className="size-4" />
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn profile"
          className="flex min-h-11 min-w-11 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-secondary hover:text-foreground active:scale-95"
        >
          <Linkedin className="size-4" />
        </a>
        <a
          href={`mailto:${profile.email}`}
          onClick={() => trackEvent("identity_card_email_clicked")}
          aria-label={`Email ${profile.name}`}
          className="flex min-h-11 min-w-11 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-secondary hover:text-foreground active:scale-95"
        >
          <Mail className="size-4" />
        </a>
        <a
          href={resumeAsset.url}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Download Resume"
          className="flex min-h-11 min-w-11 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-secondary hover:text-foreground active:scale-95"
        >
          <FileText className="size-4" />
        </a>
      </div>
    </motion.aside>
  );
}
