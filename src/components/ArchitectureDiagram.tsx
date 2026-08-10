import { motion, useReducedMotion } from "motion/react";

const defaultNodes = ["Client", "REST Controller", "Service Layer", "JPA Repository", "PostgreSQL"];

/** Renders a real, data-driven layered architecture diagram for a project. */
export function ArchitectureDiagram({ nodes = defaultNodes, accent }: { nodes?: string[]; accent: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative rounded-xl border border-border bg-background/40 p-5 overflow-hidden backdrop-blur-sm">
      {/* Background Flow Effect */}
      {!prefersReducedMotion && (
        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          }}
        />
      )}

      <p className="relative z-10 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">Request flow</p>
      <div className="relative z-10 mt-3 flex flex-wrap items-center gap-1.5">
        {nodes.map((node, i) => (
          <span key={node} className="flex items-center gap-1.5">
            <motion.span
              initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-md border px-2 py-1 font-mono text-[10.5px] transition-colors hover:bg-surface"
              style={{ 
                borderColor: `color-mix(in oklab, ${accent} 40%, transparent)`,
                color: `color-mix(in oklab, ${accent} 90%, var(--foreground))`
              }}
            >
              {node}
            </motion.span>
            {i < nodes.length - 1 ? (
              <motion.span 
                animate={prefersReducedMotion ? {} : { opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                className="font-mono text-[10px] text-muted-foreground"
              >
                →
              </motion.span>
            ) : null}
          </span>
        ))}
      </div>
    </div>
  );
}
