import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Activity, Server, Cpu, Database } from "lucide-react";

export function SystemStatusTicker() {
  const [status, setStatus] = useState({
    heap: "248MB",
    latency: "12ms",
    cpu: "1.2%",
    nodes: "Running"
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus({
        heap: `${Math.floor(200 + Math.random() * 100)}MB`,
        latency: `${Math.floor(8 + Math.random() * 8)}ms`,
        cpu: `${(0.5 + Math.random() * 2).toFixed(1)}%`,
        nodes: Math.random() > 0.9 ? "Rebalancing" : "Optimal"
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-full items-center justify-center gap-8 py-4 text-[11px] font-mono text-muted-foreground/80 overflow-hidden select-none border-b border-border/20"
      role="status"
      aria-live="polite"
      aria-label="Real-time system telemetry"
    >
      <div className="flex items-center gap-2">
        <Activity className="size-3 text-aurora-1" />
        <span>SYS_LATENCY: {status.latency}</span>
      </div>
      <div className="flex items-center gap-2">
        <Database className="size-3 text-aurora-2" />
        <span>JAVA_HEAP: {status.heap}</span>
      </div>
      <div className="flex items-center gap-2">
        <Cpu className="size-3 text-aurora-3" />
        <span>CPU_LOAD: {status.cpu}</span>
      </div>
      <div className="flex items-center gap-2">
        <Server className="size-3 text-java" />
        <span>CLUSTER_STATE: {status.nodes}</span>
      </div>
    </div>
  );
}
