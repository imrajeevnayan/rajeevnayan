import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PERSONAL_ACCESS_TOKEN = '8fd805a4-a4e2-417e-8d1a-a004aa665f45';

// List all your publication domains here:
const PUBLICATION_HOSTS = [
  'imrajeevnayan.hashnode.dev',
  'solving-array-ques.hashnode.dev',
  // add more publication domains if you have them, e.g.
  // 'anotherpublication.hashnode.dev',
];

const Blog = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch posts from a single publication
  const fetchPostsFromPublication = async (host: string) => {
    const res = await fetch('https://gql.hashnode.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${PERSONAL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query: `
          {
            publication(host: "${host}") {
              posts(first: 10) {
                edges {
                  node {
                    id
                    title
                    brief
                    slug
                    publishedAt
                    tags {
                      name
                    }
                  }
                }
              }
            }
          }
        `,
      }),
    });

    const json = await res.json();

    // Map nodes, add publication host so you can build correct URLs later
    return (
      json.data?.publication?.posts?.edges.map((edge: any) => ({
        ...edge.node,
        publicationHost: host,
      })) || []
    );
  };

  useEffect(() => {
    const fetchAllPosts = async () => {
      setLoading(true);
      setError(null);

      try {
        // Fetch all publications in parallel
        const allPostsArrays = await Promise.all(
          PUBLICATION_HOSTS.map((host) => fetchPostsFromPublication(host))
        );

        // Flatten all arrays into a single array
        const allPosts = allPostsArrays.flat();

        if (allPosts.length === 0) {
          setError('No blog posts found.');
        } else {
          // Sort by published date (latest first)
          allPosts.sort(
            (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
          );

          setPosts(allPosts);
        }
      } catch (err) {
        setError('Failed to fetch blog posts');
      }
      setLoading(false);
    };

    fetchAllPosts();
  }, []);

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Technical Writing
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Sharing my learning journey and technical insights with the community.
          </p>
        </motion.div>

        {loading && (
          <div className="flex justify-center items-center">
            <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {error && <div className="text-center text-red-500">{error}</div>}

        {!loading && !error && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    {new Date(post.publishedAt).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
                    {post.brief}
                  </p>
                </div>

                <div className="mt-auto">
                  {post.tags.length > 0 && (
                    <div className="mb-4 flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag: any, tagIdx: number) => (
                        <span
                          key={tagIdx}
                          className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full font-medium"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  )}
                  <a
                    href={`https://${post.publicationHost}/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline group-hover:translate-x-1 transition-transform"
                  >
                    Read Full Article &rarr;
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
