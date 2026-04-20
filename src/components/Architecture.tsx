import { Database, Shield, Server, Layout, Share2 } from 'lucide-react';

const Architecture = () => {
  const components = [
    { icon: Layout, label: 'Frontend Layer', desc: 'React / TypeScript' },
    { icon: Share2, label: 'API Gateway', desc: 'Spring Cloud' },
    { icon: Shield, label: 'Auth & Security', desc: 'OAuth2 / JWT' },
    { icon: Server, label: 'Application Cluster', desc: 'Spring Boot (JVM)' },
    { icon: Database, label: 'Data Store', desc: 'PostgreSQL / Redis' },
  ];

  return (
    <section id="architecture" className="py-24 md:py-32 bg-[var(--surface-main)]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl md:text-5xl">System Design</h2>
              <p className="text-[var(--text-dim)] font-medium text-lg leading-relaxed">
                  I architect systems with a focus on high availability, security, and scalability. This is a high-level representation of my standard microservices approach.
              </p>
              <ul className="space-y-4 pt-4">
                  <li className="flex items-center gap-3 text-sm font-semibold text-[var(--text-dim)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      Stateless Security Implementation
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold text-[var(--text-dim)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      Distributed System Integration
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold text-[var(--text-dim)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      Cloud-Native Deployment Flow
                  </li>
              </ul>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {components.map((node, i) => (
                  <div 
                      key={i}
                      className="p-6 card-base bg-[var(--bg-main)] flex flex-col items-center gap-4 text-center hover:border-indigo-500/30 transition-all shadow-sm"
                  >
                      <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-600">
                          <node.icon size={24} />
                      </div>
                      <div className="space-y-1">
                          <div className="text-xs font-bold text-[var(--text-main)] uppercase tracking-wider">{node.label}</div>
                          <div className="text-[10px] text-[var(--text-dim)] font-semibold">{node.desc}</div>
                      </div>
                  </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
