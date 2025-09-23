import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps, JsonPlaceholderPost } from '@/interfaces';

const Posts: NextPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data: JsonPlaceholderPost[] = await response.json();
        // Map API data to PostProps, limiting to 10 posts for brevity
        const formattedPosts: PostProps[] = data.slice(0, 10).map((post: JsonPlaceholderPost) => ({
          title: post.title,
          content: post.body,
          userId: post.userId,
        }));
        setPosts(formattedPosts);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="flex flex-col items-center justify-center py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Posts Page</h1>
        {loading && <p className="text-lg text-gray-600">Loading posts...</p>}
        {error && <p className="text-lg text-red-600">{error}</p>}
        <div className="flex flex-wrap justify-center">
          {posts.map((post, index) => (
            <PostCard
              key={index}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Posts;