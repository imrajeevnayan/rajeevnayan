import { motion } from 'framer-motion';
import { Database, Shield, Server, Layout, ChevronRight, Share2 } from 'lucide-react';
import TerminalWindow from './common/Window';

const nodes = [
  { id: 'client', icon: Layout, label: 'Client / API Consumer', sub: 'External System Nodes', x: 0, y: 50 },

  { id: 'balancer', icon: Share2, label: 'Load Balancer', sub: 'Nginx / AWS ALB', x: 25, y: 50 },
  { id: 'gateway', icon: Shield, label: 'API Gateway', sub: 'Spring Cloud', x: 50, y: 50 },
  { id: 'service', icon: Server, label: 'Microservice Cluster', sub: 'Spring Boot (JVM)', x: 75, y: 30 },
  { id: 'service-auth', icon: Shield, label: 'Auth Service', sub: 'JWT / OAuth2', x: 75, y: 70 },
  { id: 'persistence', icon: Database, label: 'Persistence Layer', sub: 'PostgreSQL / Redis', x: 100, y: 50 },
];

const Architecture = () => {
  return (
    <section id="architecture" className="section-container border-t border-[var(--glass-border)] relative overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/3 space-y-6">
            <div className="text-orange-500 text-[10px] font-mono font-bold uppercase tracking-[0.3em]">Infrastructure_Blueprints.dwg</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none text-[var(--text-main)]">
                System <br /><span className="text-shimmer">Architectures</span>
            </h2>
            <p className="text-[var(--text-dim)] font-mono text-sm leading-relaxed max-w-sm">
                &gt; Design philosophy grounded in high-availability, stateless security, and horizontal scalability. Visualizing the standard microservices cluster used in enterprise deployments.
            </p>
            <div className="flex flex-col gap-4 font-mono text-[10px] uppercase tracking-widest text-zinc-500 pt-6">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    Stateless Auth / JWT
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Distributed Persistence
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Service Mesh Logic
                </div>
            </div>
        </div>

        <div className="lg:w-2/3 w-full h-[400px] relative font-mono overflow-hidden">
            <TerminalWindow title="~/system-blueprint.vdx" className="h-full">
                <div className="relative w-full h-full flex items-center justify-center pt-8">
                    {/* CONNECTIONS (SIMULATED LINES) */}
                    <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
                        <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="var(--text-dim)" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="60%" y1="50%" x2="70%" y2="35%" stroke="var(--text-dim)" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="60%" y1="50%" x2="70%" y2="65%" stroke="var(--text-dim)" strokeWidth="1" strokeDasharray="4 4" />
                    </svg>

                    <div className="flex flex-wrap items-center justify-center gap-8 relative z-10 p-4">
                        {nodes.map((node, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative flex flex-col items-center gap-3"
                            >
                                <div className="w-14 h-14 bg-[var(--glass-bg)] border border-[var(--glass-border)] group-hover:border-orange-500/50 rounded-xl flex items-center justify-center transition-all shadow-xl group-hover:shadow-orange-500/10">
                                    <node.icon size={22} className="text-[var(--text-dim)] group-hover:text-orange-500" />
                                </div>
                                <div className="text-center">
                                    <div className="text-[9px] font-bold text-[var(--text-main)] uppercase tracking-widest">{node.label}</div>
                                    <div className="text-[7px] text-zinc-500 uppercase tracking-tight">{node.sub}</div>
                                </div>
                                {i < nodes.length - 2 && (
                                    <div className="absolute top-1/2 -right-6 -translate-y-1/2 text-zinc-700 font-mono hidden md:block">
                                        <ChevronRight size={14} />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[8px] text-zinc-600 uppercase tracking-widest border-t border-[var(--glass-border)] pt-4">
                        <span>Cluster_Identifier: US-EAST-01</span>
                        <span>Uptime: 99.98%</span>
                        <span>Protocol: gRPC / STOMP</span>
                    </div>
                </div>
            </TerminalWindow>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
