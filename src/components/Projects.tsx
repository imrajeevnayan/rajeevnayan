import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  stargazers_count: number;
  topics: string[];
}

const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/imrajeevnayan/repos?sort=pushed&per_page=12');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        
        // Filter out forks and repositories without descriptions if needed
        const filteredRepos = data
          .filter((repo: any) => !repo.fork)
          .slice(0, 9);
        
        setRepos(filteredRepos);
      } catch (err) {
        console.error('Error fetching repos:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="bg-[var(--bg-main)] py-12 md:py-16">
        <div className="section-container flex flex-col items-center justify-center min-h-[400px]">
          <Loader2 className="w-10 h-10 text-[var(--brand-accent)] animate-spin" />
          <p className="mt-4 text-[var(--text-secondary)] font-medium">Fetching latest projects...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="bg-[var(--bg-main)] py-12 md:py-16 overflow-hidden">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4 mb-16 text-center md:text-left"
        >
          <div className="text-[var(--brand-accent)] font-bold text-xs uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
            <Code2 size={16} /> Latest Repositories
          </div>
          <h2 className="text-3xl md:text-[32px] font-bold tracking-[-0.44px]">Featured Projects</h2>
          <p className="text-[var(--text-secondary)] font-medium max-w-2xl text-lg leading-relaxed mx-auto md:mx-0">
            Dynamically fetched from my GitHub. These are the systems and architectures I've been working on recently.
          </p>
        </motion.div>

        {error ? (
          <div className="text-center py-12 card-airbnb bg-[var(--surface-main)] border border-[var(--border-main)]">
            <p className="text-[var(--brand-accent)] font-bold">Failed to load projects from GitHub.</p>
            <p className="text-[var(--text-secondary)] mt-2">Please check back later or visit my profile directly.</p>
            <a href="https://github.com/imrajeevnayan" target="_blank" className="inline-block mt-4 btn-airbnb-primary">
               View GitHub Profile
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {repos.map((repo, i) => (
              <motion.div 
                key={repo.id}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  delay: i * 0.1, 
                  duration: 0.5, 
                  type: "spring",
                  stiffness: 100 
                }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="card-airbnb card-premium-hover flex flex-col group overflow-hidden bg-[var(--surface-main)] border border-[var(--border-main)] relative"
              >
                {/* Glow Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative aspect-[16/9] overflow-hidden bg-[var(--palette-light-surface)]">
                  <img 
                    src={`https://opengraph.githubassets.com/1/imrajeevnayan/${repo.name}`}
                    alt={repo.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-3 right-3 px-2 py-1 bg-black/50 backdrop-blur-md rounded-md text-[10px] font-bold text-white flex items-center gap-1 z-10">
                    ⭐ {repo.stargazers_count}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 space-y-4 relative z-10">
                  <div className="space-y-1">
                    <span className="text-[12px] font-bold text-[var(--brand-accent)] uppercase tracking-tight">
                      {repo.language || 'Software'}
                    </span>
                    <h3 className="text-[20px] font-bold tracking-tight text-[var(--text-primary)] truncate group-hover:text-[var(--brand-accent)] transition-colors">
                      {repo.name.replace(/-/g, ' ')}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3 font-medium h-[60px]">
                    {repo.description || "No description provided for this repository."}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2 items-start flex-1">
                    {repo.topics?.slice(0, 3).map((topic, j) => (
                      <span key={j} className="px-3 py-1 bg-[var(--palette-light-surface)] group-hover:bg-[var(--brand-accent)]/10 group-hover:text-[var(--brand-accent)] group-hover:shadow-[0_0_10px_var(--brand-glow)] rounded-[14px] text-[10px] font-bold text-[var(--text-secondary)] uppercase transition-all duration-300">
                        {topic}
                      </span>
                    )) || (
                      <span className="px-3 py-1 bg-[var(--palette-light-surface)] rounded-[14px] text-[10px] font-bold text-[var(--text-secondary)] uppercase">
                        Repository
                      </span>
                    )}
                  </div>

                  <div className="flex gap-6 pt-4 border-t border-[var(--border-main)]">
                    <motion.a 
                      href={repo.html_url} 
                      target="_blank"
                      whileHover={{ x: 3, color: 'var(--brand-accent)' }}
                      className="flex items-center gap-2 text-[13px] font-bold text-[var(--text-primary)] transition-all"
                    >
                      <Github size={16} /> Source
                    </motion.a>
                    {repo.homepage && (
                      <motion.a 
                        href={repo.homepage} 
                        target="_blank"
                        whileHover={{ x: 3, color: 'var(--brand-accent)' }}
                        className="flex items-center gap-2 text-[13px] font-bold text-[var(--text-primary)] transition-all"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;