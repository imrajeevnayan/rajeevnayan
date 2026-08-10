import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Cpu, Database, Activity } from "lucide-react";

const codeLines = [
  "@RestController",
  "@RequestMapping(\"/api/v1/systems\")",
  "public class SystemController {",
  "  ",
  "  private final MetricsEngine metrics;",
  "  ",
  "  @GetMapping(\"/health\")",
  "  public Mono<Health> check() {",
  "    return metrics.aggregate()",
  "      .map(Status::UP)",
  "      .log(\"System optimized\");",
  "  }",
  "}"
];

export function JavaAnimation() {
  const prefersReducedMotion = useReducedMotion();
  const [heapUsage, setHeapUsage] = useState(42);
  const [latency, setLatency] = useState(12);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    if (prefersReducedMotion) {
      setHeapUsage(42);
      setLatency(12);
      return;
    }
    const interval = setInterval(() => {
      setHeapUsage(prev => {
        const next = prev + (Math.random() * 4 - 2);
        return Math.min(Math.max(next, 30), 85);
      });
      setLatency(prev => {
        const next = prev + (Math.random() * 2 - 1);
        return Math.min(Math.max(next, 5), 25);
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <div aria-label="Java code preview with system metrics"
      role="img"
      data-reduced-motion={prefersReducedMotion ? "true" : "false"}
      className="group relative h-72 w-full overflow-hidden rounded-xl border border-aurora-1/20 bg-black/60 p-4 font-mono text-[10px] leading-relaxed backdrop-blur-md shadow-2xl transition-all hover:border-aurora-1/40 sm:h-80 lg:h-72">
      {/* Spring Watermark - Hidden on small mobile to reduce complexity */}
      <div className="absolute -right-4 -top-4 opacity-[0.03] grayscale pointer-events-none group-hover:opacity-[0.05] transition-opacity hidden sm:block">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2C11.5,2 11,2.19 10.59,2.59L2.59,10.59C1.81,11.37 1.81,12.63 2.59,13.41L10.59,21.41C11.37,22.19 12.63,22.19 13.41,21.41L21.41,13.41C22.19,12.63 22.19,11.37 21.41,10.59L13.41,2.59C13,2.19 12.5,2 12,2M12,4L20,12L12,20L4,12L12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
        </svg>
      </div>

      {/* Top Bar */}

      <div className="mb-4 flex items-center justify-between border-b border-border/20 pb-2">
        <div className="flex gap-1.5">
          <div className="size-2 rounded-full bg-[#FF5F56]/80" />
          <div className="size-2 rounded-full bg-[#FFBD2E]/80" />
          <div className="size-2 rounded-full bg-[#27C93F]/80" />
          <span className="ml-2 text-[9px] text-muted-foreground/60">SystemController.java</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-[9px] text-emerald-500/80">
            <span className={`size-1 rounded-full bg-emerald-500 ${prefersReducedMotion ? "" : "animate-pulse"}`} />
            {prefersReducedMotion ? "STATIC" : "LIVE"}
          </div>
        </div>
      </div>
      
      {/* Code Content */}
      <div className="relative space-y-0.5">
        <AnimatePresence>
          {visible && codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
              className="flex gap-4 group/line"
            >
              <span className="w-4 select-none text-right text-muted-foreground/20 group-hover/line:text-muted-foreground/40 transition-colors">{i + 1}</span>
              <span className="text-aurora-2/80">
                {line.split(/(\s+|[().,{}@"])/).filter(Boolean).map((part, j) => {
                  const clean = part.trim();
                  const isKeyword = ["public", "class", "private", "final", "return", "new"].includes(clean);
                  const isAnnotation = clean.startsWith("@");
                  const isString = clean.startsWith("\"") || clean.endsWith("\"");
                  const isType = /^[A-Z]/.test(clean) && !isAnnotation;
                  
                  return (
                    <span 
                      key={j} 
                      className={`
                        ${isKeyword ? "text-[#C678DD]" : ""}
                        ${isAnnotation ? "text-[#D19A66]" : ""}
                        ${isString ? "text-[#98C379]" : ""}
                        ${isType ? "text-[#61AFEF]" : ""}
                        ${!isKeyword && !isAnnotation && !isString && !isType ? "text-aurora-2/80" : ""}
                      `}
                    >
                      {part}
                    </span>
                  );
                })}
                {i === codeLines.length - 1 && (
                  <motion.span
                    animate={prefersReducedMotion ? { opacity: 1 } : { opacity: [1, 0] }}
                    transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.8, repeat: Infinity }}
                    className="ml-1 inline-block w-1.5 h-3 bg-aurora-1/50 translate-y-0.5"
                  />
                )}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Floating Data Packets */}
        {!prefersReducedMotion && (
          <div className="pointer-events-none absolute inset-0">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: "20%", y: "40%", opacity: 0 }}
                animate={{ 
                  x: ["20%", "80%", "80%", "20%"],
                  y: ["40%", "40%", "70%", "70%"],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: i * 1.5,
                  ease: "linear"
                }}
                className="absolute size-1 rounded-full bg-aurora-1/40 blur-[1px]"
              />
            ))}
          </div>
        )}
      </div>

      {/* Scanning Beam */}
      {!prefersReducedMotion && (
        <motion.div
          animate={{ top: ["-10%", "110%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute left-0 right-0 h-[20%] bg-gradient-to-b from-transparent via-aurora-1/5 to-transparent z-10 opacity-30"
        />
      )}

      {/* System Metrics Footer */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between border-t border-border/10 pt-3 flex-wrap gap-y-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-[9px] text-muted-foreground/60">
            <Cpu className="size-3 text-aurora-1/40" />
            <span>CPU: 12%</span>
          </div>
          <div className="flex items-center gap-1.5 text-[9px] text-muted-foreground/60">
            <Database className="size-3 text-aurora-1/40" />
            <span>Heap: {Math.round(heapUsage)}MB</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-[9px] text-muted-foreground/60">
          <Activity className="size-3 text-aurora-1/40" />
          <span>{Math.round(latency)}ms</span>
        </div>
      </div>
    </div>
  );
}
