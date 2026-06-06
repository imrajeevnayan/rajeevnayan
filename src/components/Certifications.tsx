import { Award, ExternalLink, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const certifications = [
    {
        title: 'JavaScript (Basic)',
        issuer: 'HackerRank',
        link: 'https://www.hackerrank.com/certificates/60e7b99c750e'
    },
    {
        title: 'Problem Solving (Basic)',
        issuer: 'HackerRank',
        link: 'https://www.hackerrank.com/certificates/474087e59c25'
    },
    {
        title: 'SQL (Intermediate)',
        issuer: 'HackerRank',
        link: 'https://www.hackerrank.com/certificates/cf9c90c9bd72'
    }
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-10 md:py-14 bg-[var(--bg-main)] relative overflow-hidden">
             <div className="section-container relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="space-y-3 mb-12 md:mb-16"
                >
                    <span className="badge-premium">Credentials & Academic Path</span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-appleHeading text-[var(--text-primary)]">Education & <span className="text-gradient">Credentials</span></h2>
                    <p className="text-sm md:text-[15px] text-[var(--text-secondary)] font-light max-w-2xl leading-relaxed">
                        Academic background and verified technical credentials validating my skills.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    {/* Education Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 premium-card p-8 md:p-10 bg-[var(--surface-card)] flex flex-col justify-between"
                    >
                        <div className="space-y-6">
                            <div className="w-12 h-12 flex items-center justify-center text-[var(--color-button-blue)] rounded-lg bg-[rgba(var(--brand-accent-rgb),0.1)] border border-[rgba(var(--brand-accent-rgb),0.2)]">
                                <GraduationCap size={28} strokeWidth={1.5} />
                            </div>
                            
                            <div className="space-y-2">
                                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-accent)]">Master's Degree</span>
                                <h3 className="font-bold text-[var(--text-primary)] text-xl md:text-2xl tracking-appleHeading">Master of Computer Applications (MCA)</h3>
                                <p className="text-sm font-medium text-[var(--text-secondary)]">Dr. A.P.J. Abdul Kalam Technical University</p>
                            </div>
                        </div>

                        <div className="mt-8 space-y-3 pt-6 border-t border-[var(--border-main)]">
                            <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)] font-light">
                                <Calendar size={14} className="text-[var(--color-button-blue)]" />
                                <span>2022 - 2024</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)] font-light">
                                <MapPin size={14} className="text-[var(--color-button-blue)]" />
                                <span>Uttar Pradesh, India</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Certifications Cards */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {certifications.map((cert, index) => (
                            <motion.a 
                                key={index}
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true }}
                                className="group p-6 bg-[var(--surface-card)] border border-[var(--border-main)] rounded-lg flex flex-col justify-between hover:border-[var(--brand-accent)] transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="space-y-4">
                                    <div className="w-10 h-10 flex items-center justify-center text-[var(--color-button-blue)]">
                                        <Award size={24} strokeWidth={1.5} />
                                    </div>
                                    
                                    <div className="space-y-1">
                                        <h3 className="font-bold text-[var(--text-primary)] text-base tracking-appleHeading group-hover:text-[var(--color-button-blue)] transition-colors">{cert.title}</h3>
                                        <p className="text-[var(--text-secondary)] text-[10px] font-semibold uppercase tracking-wider">{cert.issuer}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--color-button-blue)] hover:text-[var(--color-deep-link-blue)] pt-6">
                                    <span>Verify Certificate</span>
                                    <ExternalLink size={13} strokeWidth={1.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
