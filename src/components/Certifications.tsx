import { Award, ExternalLink } from 'lucide-react';

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
        <section id="certifications" className="py-24 md:py-32 bg-[var(--bg-main)]">
             <div className="section-container">
                <div className="space-y-4 mb-20 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl">Professional Certifications</h2>
                    <p className="text-[var(--text-dim)] font-medium max-w-2xl text-lg">
                        Verified credentials that validate my technical skills and industry knowledge.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <a 
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-8 card-base bg-[var(--surface-main)] flex flex-col items-center text-center space-y-6 hover:border-indigo-500/30 shadow-sm"
                        >
                            <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl w-fit text-indigo-600 transition-colors">
                                <Award size={24} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-bold text-[var(--text-main)] text-xl leading-snug">{cert.title}</h3>
                                <p className="text-indigo-600 text-xs font-bold uppercase tracking-widest">{cert.issuer}</p>
                            </div>
                            
                            <div className="flex items-center gap-2 text-xs font-bold text-[var(--text-dim)] group-hover:text-indigo-600 transition-colors pt-4">
                                <span>Verify Certificate</span>
                                <ExternalLink size={14} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
