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

    const MetricCard = ({ icon: Icon, label, value, unit, color }: any) => (
        <div className="p-4 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-lg flex flex-col gap-2 relative overflow-hidden group">
            <div className={`absolute top-0 right-0 w-24 h-24 bg-${color}-500/5 blur-3xl -mr-12 -mt-12 group-hover:bg-${color}-500/10 transition-all`} />
            <div className="flex items-center gap-2 text-[10px] font-mono text-[var(--text-dim)] uppercase tracking-widest">
                <Icon size={12} className={`text-${color}-500`} />
                {label}
            </div>
            <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-[var(--text-main)] font-mono tabular-nums">
                    {value.toFixed(1)}
                </span>
                <span className="text-[10px] font-mono text-[var(--text-dim)]">{unit}</span>
            </div>
            <div className="h-1 w-full bg-[var(--glass-border)] rounded-full overflow-hidden mt-2">
                <motion.div 
                    animate={{ width: `${(value / (label === 'LATENCY' ? 100 : 100)) * 100}%` }}
                    className={`h-full bg-${color}-500`}
                    transition={{ duration: 1 }}
                />
            </div>
        </div>
    );

    return (
        <section id="monitor" className="section-container border-t border-[var(--glass-border)]">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="lg:w-1/3 space-y-6">
                    <div className="text-orange-500 text-[10px] font-mono font-bold uppercase tracking-[0.3em]">Runtime_Monitoring.v2</div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none text-[var(--text-main)]">
                        System <br /><span className="text-shimmer">Live Dashboard</span>
                    </h2>
                    <p className="text-[var(--text-dim)] font-mono text-xs leading-relaxed max-w-sm">
                        &gt; Real-time simulation of JVM performance metrics and distributed system throughput. Monitoring data stability across active clusters.
                    </p>
                    <div className="pt-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Global Status: Operational</span>
                    </div>
                </div>

                <div className="lg:w-2/3 w-full">
                    <TerminalWindow title="system_monitor --dashboard" className="w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <MetricCard icon={Cpu} label="CPU USAGE" value={metrics.cpu} unit="%" color="orange" />
                            <MetricCard icon={Database} label="JVM HEAP" value={metrics.memory} unit="%" color="blue" />
                            <MetricCard icon={Globe} label="THROUGHPUT" value={metrics.requests} unit="req/s" color="green" />
                            <MetricCard icon={Activity} label="LATENCY" value={metrics.latency} unit="ms" color="purple" />
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
