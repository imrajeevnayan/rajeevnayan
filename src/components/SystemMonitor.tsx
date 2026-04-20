import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Database, Cpu, Globe } from 'lucide-react';
import TerminalWindow from './common/Window';

const SystemMonitor = () => {
    const [metrics, setMetrics] = useState({
        cpu: 24,
        memory: 42,
        requests: 120,
        latency: 18
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setMetrics(prev => ({
                cpu: Math.max(10, Math.min(90, prev.cpu + (Math.random() * 10 - 5))),
                memory: Math.max(20, Math.min(80, prev.memory + (Math.random() * 4 - 2))),
                requests: Math.max(50, Math.min(500, prev.requests + (Math.random() * 20 - 10))),
                latency: Math.max(5, Math.min(50, prev.latency + (Math.random() * 6 - 3)))
            }));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    interface MetricCardProps {
        icon: React.ElementType;
        label: string;
        value: number;
        unit: string;
        color: string;
    }

    const MetricCard = ({ icon: Icon, label, value, unit, color }: MetricCardProps) => (
        <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex flex-col gap-2 relative overflow-hidden group">
            <div className={`absolute top-0 right-0 w-24 h-24 bg-${color}-500/5 blur-3xl -mr-12 -mt-12 group-hover:bg-${color}-500/10 transition-all`} />
            <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                <Icon size={12} className={`text-${color}-500 shadow-[0_0_8px_rgba(var(--${color}-rgb),0.5)]`} />
                {label}
            </div>
            <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-white font-mono tabular-nums">
                    {value.toFixed(1)}
                </span>
                <span className="text-[10px] font-mono text-zinc-500">{unit}</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mt-2 border border-white/5">
                <motion.div 
                    animate={{ width: `${(value / (label === 'LATENCY' ? 100 : label === 'THROUGHPUT' ? 500 : 100)) * 100}%` }}
                    className={`h-full bg-${color}-500/80 shadow-[0_0_10px_rgba(var(--${color}-rgb),0.5)]`}
                    transition={{ duration: 1 }}
                />
            </div>
        </div>
    );

    return (
        <section id="monitor" className="section-container border-t border-white/5">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
                <div className="lg:w-1/3 space-y-8">
                    <div className="text-[#a78bfa] text-[10px] font-mono font-bold uppercase tracking-[0.3em]">Runtime_Monitoring.sh</div>
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[0.9] text-white font-outfit">
                        System <br /><span className="text-[#7c3aed]">Live Stats.</span>
                    </h2>
                    <p className="text-[#94a3b8] font-medium text-sm leading-relaxed max-w-sm mt-6">
                        &gt; Real-time simulation of JVM performance metrics and distributed system throughput. Monitoring data stability across active clusters.
                    </p>
                    <div className="pt-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Global Status: Operational</span>
                    </div>
                </div>

                <div className="lg:w-2/3 w-full">
                    <TerminalWindow title="system_monitor --dashboard" className="w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-2">
                            <MetricCard icon={Cpu} label="CPU USAGE" value={metrics.cpu} unit="%" color="violet" />
                            <MetricCard icon={Database} label="JVM HEAP" value={metrics.memory} unit="%" color="blue" />
                            <MetricCard icon={Globe} label="THROUGHPUT" value={metrics.requests} unit="req/s" color="emerald" />
                            <MetricCard icon={Activity} label="LATENCY" value={metrics.latency} unit="ms" color="fuchsia" />
                        </div>
                        
                        <div className="mt-8 p-4 bg-black/40 rounded border border-[var(--glass-border)] font-mono text-[10px] text-green-500/70 space-y-1">
                            <div>[INFO] JVM Initialization complete in 452ms</div>
                            <div>[SYSTEM] Connecting to distributed Redis cache... SUCCESS</div>
                            <div>[METRIC] Average GC overhead: 1.2%</div>
                            <div>[HEALTH] Thread pool status: RECOVERING (3 active / 25 wait)</div>
                            <motion.div 
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ repeat: Infinity, duration: 1 }}
                            >
                                [LIVE] Tracking telemetry from node_cluster_01
                            </motion.div>
                        </div>
                    </TerminalWindow>
                </div>
            </div>
        </section>
    );
};

export default SystemMonitor;
