import { User, Code2, Layers, Cpu } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Layers, title: 'Full Stack', desc: 'Developing end-to-end solutions from responsive UIs to scalable APIs.' },
    { icon: Cpu, title: 'Architecture', desc: 'Designing performance-optimized systems with distributed logic.' },
    { icon: Code2, title: 'Clean Code', desc: 'Prioritizing maintainability and standard software patterns.' },
    { icon: User, title: 'Collaborative', desc: 'Working effectively in teams to deliver high-quality products.' }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[var(--bg-main)]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div className="space-y-4">
               <h2 className="text-3xl md:text-[32px] font-bold tracking-[-0.44px]">About Me</h2>
            </div>

            <div className="space-y-6 text-lg text-[var(--text-secondary)] leading-relaxed font-medium">
               <p>
                  I am a passionate Software Engineer with a focus on building distributed systems and modern web applications. With a strong foundation in Java and the Spring ecosystem, I enjoy tackling complex backend challenges while ensuring a seamless user experience.
               </p>
               <p>
                  My approach combines technical rigor with a user-centric mindset, aiming to create software that is not only functional but also scalable and easy to maintain. Based in Bengaluru, India, I am always eager to learn new technologies and contribute to innovative projects.
               </p>
            </div>

            <div className="flex gap-10 pt-4">
               <div>
                  <div className="text-2xl font-bold text-[var(--text-primary)]">Bengaluru</div>
                  <div className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-widest">Location</div>
               </div>
               <div>
                  <div className="text-2xl font-bold text-[var(--text-primary)]">India</div>
                  <div className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-widest">Region</div>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             {highlights.map((item, i) => (
               <div
                 key={i}
                 className="p-8 card-airbnb space-y-4 border border-[var(--border-main)]"
               >
                  <div className="w-10 h-10 rounded-xl bg-[var(--brand-accent)]/10 flex items-center justify-center text-[var(--brand-accent)]">
                     <item.icon size={20} />
                  </div>
                  <div className="space-y-2">
                     <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
                     <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                  </div>
               </div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;