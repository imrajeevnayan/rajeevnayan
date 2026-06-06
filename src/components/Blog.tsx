import { useEffect, useState } from 'react';
import { Mail, Calendar, ArrowRight, Rss } from 'lucide-react';

const PERSONAL_ACCESS_TOKEN = '8fd805a4-a4e2-417e-8d1a-a004aa665f45';
const PUBLICATION_HOSTS = ['imrajeevnayan.hashnode.dev', 'solving-array-ques.hashnode.dev'];

const STATIC_POSTS = [
  {
    id: 's1',
    title: 'Optimizing JVM Performance for High-Throughput Microservices',
    brief: 'A technical exploration of Garbage Collection tuning (G1GC vs ZGC) and heap memory management in a cloud-native Spring Boot environment.',
    publishedAt: '2024-03-15T00:00:00Z',
    slug: 'optimizing-jvm-performance',
    publicationHost: 'imrajeevnayan.hashnode.dev',
    tags: [{ name: 'JVM' }, { name: 'Spring' }]
  },
  {
    id: 's2',
    title: 'Advanced Event Streaming with Kafka and Spring Cloud Stream',
    brief: 'Designing resilient consumer groups and handling complex event transformations at a scale of 10k messages per second.',
    publishedAt: '2024-03-10T00:00:00Z',
    slug: 'kafka-event-streaming',
    publicationHost: 'imrajeevnayan.hashnode.dev',
    tags: [{ name: 'Kafka' }, { name: 'Distributed' }]
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

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
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

        const allPostsArrays = await Promise.all(PUBLICATION_HOSTS.map(fetchPostsFromPublication));
        const apiPosts = allPostsArrays.flat();
        const combined = [...apiPosts, ...STATIC_POSTS];
        const unique = Array.from(new Map(combined.map(p => [p.slug, p])).values()) as Post[];
        unique.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        setPosts(unique.slice(0, 3));
      } catch { /* Fallback */ }
    };
    fetchAllPosts();
  }, []);

  return (
    <section id="blog" className="py-20 md:py-28 bg-[var(--surface-card)] border-y border-[var(--border-main)]">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8 md:mb-12">
          <div className="space-y-3">
            <span className="badge-premium">
              <Rss size={13} className="mr-1 inline" strokeWidth={1.5} /> Technical Articles
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-appleHeading text-[var(--text-primary)]">Latest Writings</h2>
            <p className="text-sm md:text-[15px] text-[var(--text-secondary)] font-light max-w-xl">
              I write about backend engineering, cloud infrastructure, and solving complex algorithmic problems.
            </p>
          </div>
          <a 
            href="https://imrajeevnayan.hashnode.dev" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-button-blue)] hover:text-[var(--color-deep-link-blue)] hover:underline"
          >
            Subscribe <Mail size={15} strokeWidth={1.5} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <a 
              key={post.id} 
              href={`https://${post.publicationHost}/${post.slug}`}
              target="_blank"
              rel="noreferrer"
              className="group p-6 md:p-8 bg-[var(--bg-main)] border border-[var(--border-main)] rounded-lg flex flex-col justify-between space-y-6 hover:border-[var(--brand-accent)] transition-all duration-200"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
                  <Calendar size={13} strokeWidth={1.5} />
                  {new Date(post.publishedAt).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
                <h3 className="text-lg font-bold tracking-appleHeading text-[var(--text-primary)] group-hover:text-[var(--color-button-blue)] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed line-clamp-3">
                  {post.brief}
                </p>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-[var(--border-main)]">
                <span className="text-xs font-semibold text-[var(--color-button-blue)]">Read Article</span>
                <ArrowRight size={14} strokeWidth={1.5} className="text-[var(--color-button-blue)] group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
