import type { NextPage } from 'next';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { CardProps } from '@/interfaces';

const Home: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<CardProps[]>([
    {
      title: 'Card 1',
      content: 'This is the first card in our ALX Project 2, showcasing a reusable component.',
    },
    {
      title: 'Card 2',
      content: 'This is another card demonstrating the flexibility of the Card component.',
    },
    {
      title: 'Card 3',
      content: 'A third card to highlight consistent styling with Tailwind CSS.',
    },
  ]);

  const handleAddPost = (newPost: CardProps) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Home Page</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-8 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Add New Post
        </button>
        <div className="flex flex-wrap justify-center">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </main>
    </div>
  );
};

export default Home;