import { useEffect, useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';
import { Star, GitFork, BookMarked, Users, FolderGit2, CalendarRange, ExternalLink } from 'lucide-react';

interface GitHubProfile {
  avatar_url: string;
  login: string;
  name: string;
  followers: number;
  public_repos: number;
  html_url: string;
  bio: string;
}

const fallbackProfile: GitHubProfile = {
  avatar_url: 'https://github.com/imrajeevnayan.png',
  login: 'imrajeevnayan',
  name: 'Rajeev Nayan',
  followers: 12,
  public_repos: 32,
  html_url: 'https://github.com/imrajeevnayan',
  bio: 'Java Backend Developer specializing in Spring Boot, Microservices, and scalable systems.'
};

const pinnedRepos = [
  { name: 'rag-document-qa', stars: 15, forks: 4, lang: 'Java', desc: 'Secure Cloud-native PDF Ingestion and RAG AI System' },
  { name: 'springboot-ai-chat-backend', stars: 12, forks: 3, lang: 'Java', desc: 'High-throughput LLM gateway built using Spring Boot' },
  { name: 'Hospital-Management-System', stars: 22, forks: 9, lang: 'Java', desc: 'Secure backend operations with multi-role access controls' },
  { name: 'Company-Employee-Management-System', stars: 14, forks: 5, lang: 'Java/TypeScript', desc: 'Enterprise staff and operations portal' }
];

const GithubStats = () => {
  const [profile, setProfile] = useState<GitHubProfile>(fallbackProfile);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/imrajeevnayan')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch profile');
        return res.json();
      })
      .then(data => {
        setProfile({
          avatar_url: data.avatar_url,
          login: data.login,
          name: data.name || 'Rajeev Nayan',
          followers: data.followers,
          public_repos: data.public_repos,
          html_url: data.html_url,
          bio: data.bio || fallbackProfile.bio
        });
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="github" className="py-16 md:py-24 bg-[var(--bg-main)] border-y border-[var(--border-main)]">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Identity Info Card */}
          <div className="lg:w-5/12 space-y-6">
            <span className="badge-premium">Open Source</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]">GitHub Profile</h2>
            <p className="text-sm md:text-base text-[var(--text-secondary)] font-light leading-relaxed">
              Active open source engineer contributing modular tools, enterprise templates, and highly-optimized backend architectures.
            </p>

            {/* Profile Identity Card */}
            <div className="p-6 bg-[var(--surface-card)] border border-[var(--border-main)] rounded-2xl flex flex-col gap-4 relative overflow-hidden group">
              <div className="flex items-center gap-4">
                <img 
                  src={profile.avatar_url} 
                  alt={profile.name} 
                  className="w-14 h-14 rounded-full border border-[var(--border-main)] object-cover"
                />
                <div>
                  <h4 className="font-bold text-[var(--text-primary)] text-base">{profile.name}</h4>
                  <a 
                    href={profile.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs text-[var(--color-button-blue)] flex items-center gap-1 hover:underline"
                  >
                    @{profile.login} <ExternalLink size={12} />
                  </a>
                </div>
              </div>
              <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
                {profile.bio}
              </p>
              
              <div className="grid grid-cols-2 gap-4 border-t border-[var(--border-main)] pt-4 mt-2">
                <div className="flex items-center gap-2 text-xs">
                  <Users size={16} className="text-[var(--brand-accent)]" />
                  <div>
                    <span className="font-bold block text-[var(--text-primary)]">{profile.followers}</span>
                    <span className="text-[var(--text-muted)] font-light">Followers</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs border-l border-[var(--border-main)] pl-4">
                  <FolderGit2 size={16} className="text-indigo-400" />
                  <div>
                    <span className="font-bold block text-[var(--text-primary)]">{profile.public_repos}</span>
                    <span className="text-[var(--text-muted)] font-light">Repositories</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cal & Repository showcase */}
          <div className="lg:w-7/12 w-full space-y-8">
            <h3 className="text-lg font-bold tracking-tight text-[var(--text-primary)] flex items-center gap-2">
              <CalendarRange size={18} className="text-[var(--brand-accent)]" />
              Contributions Calendar
            </h3>
            <div className="p-6 md:p-8 bg-[var(--surface-card)] border border-[var(--border-main)] rounded-2xl flex flex-col items-center justify-center overflow-x-auto">
              <GitHubCalendar 
                username="imrajeevnayan" 
                blockSize={12} 
                blockMargin={4} 
                fontSize={12} 
                colorScheme={document.documentElement.classList.contains('dark') ? 'dark' : 'light'}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pinnedRepos.map((repo, i) => (
                <motion.a 
                  href={`https://github.com/imrajeevnayan/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={i}
                  whileHover={{ borderColor: 'var(--brand-accent)' }}
                  className="p-6 bg-[var(--surface-card)] border border-[var(--border-main)] rounded-2xl space-y-4 block group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] flex items-center justify-center">
                      <BookMarked size={16} strokeWidth={1.5} />
                    </div>
                    <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)]">
                      <div className="flex items-center gap-1">
                        <Star size={12} strokeWidth={1.5} /> {repo.stars}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork size={12} strokeWidth={1.5} /> {repo.forks}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--brand-accent)] transition-colors tracking-tight">
                      {repo.name}
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed line-clamp-2">
                      {repo.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[var(--border-main)] flex justify-between items-center">
                    <span className="text-[10px] font-semibold text-[var(--color-button-blue)] uppercase tracking-wider">{repo.lang}</span>
                    <span className="text-[10px] text-[var(--text-muted)] flex items-center gap-0.5 group-hover:text-[var(--brand-accent)] transition-colors">
                      Repo <ExternalLink size={10} />
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
