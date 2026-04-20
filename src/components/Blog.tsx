import { useEffect, useState } from 'react';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';
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

interface Tag {
  name: string;
}

interface Post {
  id: string;
  title: string;
  brief: string;
  slug: string;
  publishedAt: string;
  publicationHost: string;
  tags: Tag[];
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>(STATIC_POSTS as Post[]);

  const fetchPostsFromPublication = async (host: string): Promise<Post[]> => {
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
      return json.data?.publication?.posts?.edges.map((edge: { node: Post }) => ({ ...edge.node, publicationHost: host })) || [];
    } catch { return []; }
  };

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const allPostsArrays = await Promise.all(PUBLICATION_HOSTS.map(fetchPostsFromPublication));
        const apiPosts = allPostsArrays.flat();
        const combined = [...apiPosts, ...STATIC_POSTS];
        const unique = Array.from(new Map(combined.map(p => [p.slug, p])).values()) as Post[];
        unique.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        setPosts(unique);
      } catch {
        // Fallback to static posts if API fails
      }
    };
    fetchAllPosts();
  }, []);

  return (
    <section id="blog" className="section-container border-t border-white/5">
      <div className="mb-20 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/5 border border-white/10 rounded flex items-center justify-center text-[#7c3aed] shadow-[0_0_15px_rgba(124,58,237,0.2)]">
            <BookOpen size={20} />
          </div>
          <div>
            <div className="text-[#a78bfa] text-[10px] font-mono font-bold uppercase tracking-[0.3em]">Knowledge_Base.sh</div>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight uppercase leading-[0.9] text-white font-outfit">
              Technical <span className="text-[#7c3aed]">Writing.</span>
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
                  <Calendar size={12} className="text-[#7c3aed]" />
                  {new Date(post.publishedAt).toLocaleDateString()}
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight leading-tight line-clamp-2 font-outfit">
                  {post.title}
                </h3>
                <p className="text-xs text-[#94a3b8] font-medium leading-relaxed line-clamp-3">
                  {post.brief}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 bg-white/5 border border-white/10 text-[8px] font-mono text-zinc-400 uppercase tracking-widest rounded">
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <a
                  href={`https://${post.publicationHost}/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#7c3aed] hover:text-white text-[10px] font-mono font-bold uppercase tracking-widest transition-colors group"
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
