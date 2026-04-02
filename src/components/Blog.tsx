import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ArrowRight, Terminal as TerminalIcon } from 'lucide-react';
import TerminalWindow from './common/Window';

const PERSONAL_ACCESS_TOKEN = '8fd805a4-a4e2-417e-8d1a-a004aa665f45';
const PUBLICATION_HOSTS = ['imrajeevnayan.hashnode.dev', 'solving-array-ques.hashnode.dev'];

const STATIC_POSTS = [
  {
    id: 's1',
    title: 'Optimizing JVM Performance for High-Throughput Microservices',
    brief: 'A deep dive into Garbage Collection tuning (G1GC vs ZGC) and heap memory management in a cloud-native Spring Boot environment.',
    publishedAt: '2024-03-15T00:00:00Z',
    slug: 'optimizing-jvm-performance',
    publicationHost: 'imrajeevnayan.hashnode.dev',
    tags: [{ name: 'JVM' }, { name: 'Spring Boot' }]
  },
  {
    id: 's2',
    title: 'Advanced Event Streaming with Kafka and Spring Cloud Stream',
    brief: 'Architecting resilient consumer groups and handling complex event transformations at a scale of 10k messages per second.',
    publishedAt: '2024-03-10T00:00:00Z',
    slug: 'kafka-event-streaming',
    publicationHost: 'imrajeevnayan.hashnode.dev',
    tags: [{ name: 'Kafka' }, { name: 'Distributed Systems' }]
  }
];

const Blog = () => {
  const [posts, setPosts] = useState<any[]>(STATIC_POSTS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPostsFromPublication = async (host: string) => {
    try {
      const res = await fetch('https://gql.hashnode.com/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${PERSONAL_ACCESS_TOKEN}` },
        body: JSON.stringify({
          query: `{
            publication(host: "${host}") {
              posts(first: 6) {
                edges {
                  node {
                    id title brief slug publishedAt tags { name }
                  }
                }
              }
            }
          }`
        })
      });
      const json = await res.json();
      return json.data?.publication?.posts?.edges.map((edge: any) => ({ ...edge.node, publicationHost: host })) || [];
    } catch (e) { return []; }
  };

  useEffect(() => {
    const fetchAllPosts = async () => {
      setLoading(true);
      try {
        const allPostsArrays = await Promise.all(PUBLICATION_HOSTS.map(fetchPostsFromPublication));
        const apiPosts = allPostsArrays.flat();
        const combined = [...apiPosts, ...STATIC_POSTS];
        const unique = Array.from(new Map(combined.map(p => [p.slug, p])).values());
        unique.sort((a: any, b: any) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        setPosts(unique);
      } finally { setLoading(false); }
    };
    fetchAllPosts();
  }, []);

  return (
    <section id="blog" className="section-container border-t border-[var(--glass-border)]">
      <div className="mb-20 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded flex items-center justify-center text-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            <BookOpen size={20} />
          </div>
          <div>
            <div className="text-indigo-500 text-[10px] font-mono font-bold uppercase tracking-[0.3em]">Knowledge_Base.md</div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none text-[var(--text-main)]">
              Technical <span className="text-shimmer">Writing</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <TerminalWindow key={post.id} title={`Article: ${post.title.substring(0, 20)}...`} delay={idx * 0.1}>
            <div className="flex flex-col h-full space-y-6">
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-3 text-zinc-500 text-[9px] font-mono">
                  <Calendar size={12} className="text-indigo-500" />
                  {new Date(post.publishedAt).toLocaleDateString()}
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight leading-tight line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs text-zinc-500 font-mono leading-relaxed line-clamp-3">
                  {post.brief}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag: any, i: number) => (
                    <span key={i} className="px-2 py-0.5 bg-[var(--glass-border)] text-[8px] font-mono text-zinc-400 uppercase tracking-widest rounded">
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-[var(--glass-border)]">
                <a
                  href={`https://${post.publicationHost}/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-indigo-400 hover:text-white text-[10px] font-mono font-bold uppercase tracking-widest transition-colors group"
                >
                  Fetch_Article.sh <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </TerminalWindow>
        ))}
      </div>
    </section>
  );
};

export default Blog;
