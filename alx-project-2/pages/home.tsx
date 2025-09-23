import type { NextPage } from 'next';
import Header from '@/components/layout/Header';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-gray-800">Home Page</h1>
        <p className="mt-4 text-lg text-gray-600">Welcome to the Home page of ALX Project 2.</p>
      </main>
    </div>
  );
};

export default Home;