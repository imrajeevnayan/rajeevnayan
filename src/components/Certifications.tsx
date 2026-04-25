import { Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const certifications = [
    {
        title: 'Java Performance Certification',
        issuer: 'HackerRank',
        link: 'https://www.hackerrank.com/certificates/fba0b12779d0'
    },
    {
        title: 'Problem Solving (Advanced)',
        issuer: 'HackerRank',
        link: 'https://www.hackerrank.com/certificates/0a3f58c7e37f'
    },
    {
        title: 'SQL Intermediate',
        issuer: 'HackerRank',
        link: 'https://www.hackerrank.com/certificates/cf9c90c9bd72'
    }
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-24 md:py-32 bg-[var(--bg-main)] relative overflow-hidden">
             <div className="section-container relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-4 mb-20 text-center md:text-left"
                >
                    <div className="text-[var(--brand-accent)] font-bold text-xs uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
                        <Award size={16} /> Credentials
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Professional <span className="text-gradient">Certifications</span></h2>
                    <p className="text-[var(--text-secondary)] font-medium max-w-2xl text-lg leading-relaxed mx-auto md:mx-0">
                        Verified credentials that validate my technical skills and industry knowledge.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.a 
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group p-8 card-airbnb card-premium-hover bg-[var(--surface-main)] flex flex-col items-center text-center space-y-6 border border-[var(--border-main)] transition-all duration-500 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="p-5 bg-[var(--brand-accent)]/10 border border-[var(--brand-accent)]/20 rounded-2xl w-fit text-[var(--brand-accent)] group-hover:bg-[var(--brand-accent)] group-hover:text-white transition-all duration-300 relative z-10 shadow-inner">
                                <Award size={28} />
                            </div>
                            
                            <div className="space-y-2 relative z-10">
                                <h3 className="font-bold text-[var(--text-primary)] text-xl md:text-2xl leading-snug tracking-tight group-hover:text-[var(--brand-accent)] transition-colors">{cert.title}</h3>
                                <p className="text-[var(--brand-accent)] text-xs font-black uppercase tracking-widest">{cert.issuer}</p>
                            </div>
                            
                            <div className="flex items-center gap-2 text-xs font-bold text-[var(--text-secondary)] group-hover:text-[var(--brand-accent)] transition-all pt-4 relative z-10">
                                <span>Verify Certificate</span>
                                <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
