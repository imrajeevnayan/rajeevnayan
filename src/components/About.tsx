import { motion } from 'framer-motion';
import { Award, GraduationCap, Calendar, Milestone, ArrowRight } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Dr. A.P.J. Abdul Kalam Technical University",
      period: "2022 - 2024",
      grade: "CGPA: 8.5/10"
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "Backend Engineering Intern",
      desc: "Engineered scalable backend service APIs and optimized SQL database persistence models at scale."
    },
    {
      year: "2023",
      title: "Full-Stack Development Focus",
      desc: "Built reactive web applications integrating React frontends with transactional Spring Boot backends."
    },
    {
      year: "2022",
      title: "DSA Foundation & Problem Solving",
      desc: "Mastered data structures and algorithms, solving over 700+ coding problems on platforms like LeetCode and GeeksforGeeks."
    }
  ];

  const achievements = [
    "Solved 700+ DSA problems (LeetCode, GFG)",
    "Architected production-ready microservices with Spring Cloud",
    "Designed and optimized DB queries, improving read latency by 40%",
    "Built and containerized robust AI-driven RAG pipelines"
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-[var(--bg-main)]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Biography & Achievements */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="badge-premium">Specialist Profile</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] font-display">
                About <span className="text-gradient">Me</span>
              </h2>
            </div>

            <div className="space-y-5 text-[17px] text-[var(--text-secondary)] leading-relaxed font-normal">
              <p>
                I am a dedicated <strong className="text-[var(--text-primary)] font-semibold font-display">Java Backend Developer</strong> and MCA graduate. I specialize in designing and building scalable, secure, and high-performance server-side architectures using the <strong className="text-[var(--text-primary)] font-semibold font-display">Java & Spring Boot ecosystem</strong>.
              </p>
              <p>
                My software engineering philosophy revolves around writing clean, modular code, enforcing strict API security, and optimizing database transactions. Through deep focus on system design and database indexing, I construct resilient systems capable of handling production-grade traffic with ease.
              </p>
            </div>

            {/* Achievements Card list */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] tracking-tight flex items-center gap-2 font-display">
                <Award size={18} className="text-[var(--brand-accent)]" /> Key Engineering Highlights
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[var(--text-secondary)] font-normal">
                {achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 bg-[var(--bg-alternate)] p-4 rounded-[20px] border border-[var(--border-main)] hover:border-[var(--brand-accent)] transition-all">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)] shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Timeline & Education */}
          <div className="lg:col-span-6 space-y-10">
            {/* Engineering Journey Timeline */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] tracking-tight flex items-center gap-2 font-display">
                <Milestone size={18} className="text-[var(--brand-accent)]" /> Engineering Journey
              </h3>
              <div className="relative border-l border-[var(--border-main)] pl-6 ml-3 space-y-8">
                {milestones.map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                    className="relative group"
                  >
                    {/* Circle Node */}
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 border-[var(--brand-accent)] bg-[var(--surface-card)] transition-colors group-hover:bg-[var(--brand-accent)]" />
                    <span className="text-[11px] font-semibold text-[var(--color-ember)] uppercase tracking-wider block mb-1">
                      {item.year}
                    </span>
                    <h4 className="font-semibold text-[15px] text-[var(--text-primary)] tracking-tight mb-1 font-display">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Academic Credentials */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] tracking-tight flex items-center gap-2">
                <GraduationCap size={18} className="text-indigo-400" /> Academic Credentials
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {education.map((edu, i) => (
                  <div key={i} className="p-5 bg-[var(--bg-main)] border border-[var(--border-main)] rounded-2xl flex flex-col gap-2 hover:border-indigo-400 transition-all">
                    <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-1">
                      <Calendar size={12} /> {edu.period}
                    </span>
                    <h4 className="font-bold text-xs text-[var(--text-primary)] tracking-tight line-clamp-1">{edu.degree}</h4>
                    <p className="text-[11px] text-[var(--text-secondary)] font-light leading-relaxed">{edu.institution}</p>
                    <span className="text-[10px] font-semibold text-[var(--text-muted)] mt-auto pt-2 border-t border-[var(--border-main)]">{edu.grade}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;