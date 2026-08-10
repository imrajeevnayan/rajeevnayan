import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Database, 
  Cpu, 
  Layers, 
  Zap, 
  Activity, 
  ShieldCheck, 
  Share2,
  HardDrive,
  RefreshCw,
  Server
} from "lucide-react";
import { Section } from "./Section";

const COMPONENTS = [
  { id: "gateway", name: "Spring Cloud Gateway", icon: ShieldCheck, color: "#3B82F6", desc: "Rate limiting & Auth" },
  { id: "service", name: "Microservice (Java 21)", icon: Cpu, color: "#10B981", desc: "Business Logic / Virtual Threads" },
  { id: "cache", name: "Redis Cache", icon: Zap, color: "#EF4444", desc: "Sub-ms Latency Layer" },
  { id: "db", name: "PostgreSQL", icon: Database, color: "#8B5CF6", desc: "Persistent Storage" },
];

export function InteractiveSystemVisualizer() {
  const [activeComp, setActiveComp] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [metrics, setMetrics] = useState({
    latency: 12,
    throughput: 450,
    cpu: 18,
    heap: 240
  });

  // Simulate live metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        latency: Math.max(2, prev.latency + (Math.random() - 0.5) * 2),
        throughput: Math.max(100, prev.throughput + (Math.random() - 0.5) * 20),
        cpu: Math.max(5, Math.min(95, prev.cpu + (Math.random() - 0.5) * 5)),
        heap: Math.max(100, Math.min(1024, prev.heap + (Math.random() - 0.5) * 10))
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const triggerRequest = () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setTimeout(() => setIsProcessing(false), 2500);
  };

  return (
    <Section 
      id="system-visualizer" 
      eyebrow="Architectural Playground" 
      title="High-Performance Backend Sandbox"
      lead="Interactive visualization of a production-grade Java microservice stack. Click components to inspect internal state or trigger a request flow."
    >
      <div className="grid gap-8 lg:grid-cols-12">
        {/* Interactive Architecture Map */}
        <div className="lg:col-span-8 glass-card rounded-3xl p-8 relative overflow-hidden min-h-[400px]">
          <div className="absolute top-6 left-8 flex items-center gap-2">
            <Server className="size-4 text-aurora-1" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Cluster: us-east-1</span>
          </div>

          <div className="flex flex-col items-center justify-center h-full gap-12 mt-4">
            <div className="relative flex items-center justify-center w-full max-w-2xl">
              {/* Data Flow Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                <defs>
                  <linearGradient id="flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="#A78BFA" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                {isProcessing && (
                  <motion.path
                    d="M 100,100 L 300,100 L 500,100 L 700,100"
                    stroke="url(#flow-grad)"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                )}
              </svg>

              <div className="flex items-center justify-between w-full gap-2 sm:gap-8">
                {COMPONENTS.map((comp, idx) => {
                  const Icon = comp.icon;
                  const isActive = activeComp === comp.id;
                  return (
                    <div key={comp.id} className="relative flex flex-col items-center group">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveComp(comp.id)}
                        aria-label={`Inspect ${comp.name}`}
                        aria-pressed={isActive}
                        className={`size-12 xs:size-14 sm:size-20 rounded-2xl flex items-center justify-center transition-all border-2 relative z-10 ${
                          isActive 
                            ? "bg-surface-2 shadow-[0_0_30px_rgba(167,139,250,0.3)]" 
                            : "bg-surface-1 border-border group-hover:border-aurora-1/50"
                        }`}
                        style={isActive ? { borderColor: comp.color } : {}}
                      >
                        <Icon 
                          className={`size-6 sm:size-8 transition-colors ${isActive ? "" : "text-muted-foreground group-hover:text-foreground"}`}
                          style={isActive ? { color: comp.color } : {}}
                        />
                        
                        {isProcessing && (
                          <motion.div 
                            className="absolute -inset-1 rounded-2xl border-2 border-aurora-1/30"
                            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          />
                        )}
                      </motion.button>
                      
                      <p className="mt-3 font-mono text-[9px] sm:text-[10px] uppercase font-bold text-center text-muted-foreground group-hover:text-foreground transition-colors">
                        {comp.name.split(' ')[0]}
                      </p>

                      {idx < COMPONENTS.length - 1 && (
                        <div className="absolute top-1/2 -right-3 sm:-right-8 -translate-y-1/2 flex sm:block">
                          <Share2 className="size-2 sm:size-3 text-border" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              onClick={triggerRequest}
              disabled={isProcessing}
              aria-busy={isProcessing}
              aria-live="polite"
              className="px-8 py-3 rounded-full bg-aurora-1 text-primary-foreground font-bold text-sm shadow-xl hover:scale-105 transition-transform disabled:opacity-50 disabled:scale-100 flex items-center gap-2"
            >
              {isProcessing ? <RefreshCw className="size-4 animate-spin" /> : <Zap className="size-4" />}
              {isProcessing ? "Processing Request..." : "Simulate Request"}
            </button>
          </div>
        </div>

        {/* Telemetry Panel */}
        <div className="lg:col-span-4 space-y-4">
          <div className="glass-card rounded-3xl p-6 border-aurora-1/20">
            <h3 className="font-semibold text-sm mb-4 flex items-center gap-2">
              <Activity className="size-4 text-aurora-1" />
              System Metrics
            </h3>
            
            <div className="space-y-5">
              <MetricItem label="P99 Latency" value={`${metrics.latency.toFixed(1)}ms`} color="text-aurora-1" />
              <MetricItem label="Throughput" value={`${metrics.throughput.toFixed(0)} rps`} color="text-aurora-2" />
              <MetricItem label="CPU Load" value={`${metrics.cpu.toFixed(1)}%`} color="text-rose-500" />
              <MetricItem label="Heap Usage" value={`${metrics.heap.toFixed(0)}MB`} color="text-amber-500" />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeComp ? (
              <motion.div
                key={activeComp}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="glass-card rounded-3xl p-6 border-border/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-surface-2">
                    {(() => {
                      const Icon = COMPONENTS.find(c => c.id === activeComp)?.icon || Server;
                      return <Icon className="size-5 text-aurora-1" />;
                    })()}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{COMPONENTS.find(c => c.id === activeComp)?.name}</h4>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Active Component</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {COMPONENTS.find(c => c.id === activeComp)?.desc}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="text-emerald-500 font-bold">HEALTHY</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-muted-foreground">Version:</span>
                    <span className="text-foreground">v2.4.0-STABLE</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="glass-card rounded-3xl p-8 border-dashed border-border flex flex-col items-center justify-center text-center opacity-60">
                <Layers className="size-8 text-muted-foreground mb-3" />
                <p className="text-xs text-muted-foreground">Select a component to view internal architectural details.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}

function MetricItem({ label, value, color }: { label: string, value: string, color: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs text-muted-foreground font-medium">{label}</span>
      <span className={`font-mono text-sm font-bold ${color}`}>{value}</span>
    </div>
  );
}
