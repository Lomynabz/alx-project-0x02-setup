import type { NextPage } from 'next';
import Header from '@/components/layout/Header';

const Posts: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Posts Page</h1>
        <p className="text-lg text-gray-600">View all posts for ALX Project 2.</p>
      </main>
    </div>
  );
};

export default Posts;