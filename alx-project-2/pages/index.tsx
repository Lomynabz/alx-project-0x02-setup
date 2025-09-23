import type { NextPage } from 'next';
import Header from '../components/layout/Header';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to ALX Project 2</h1>
        <p className="mt-4 text-lg text-gray-600">This is a Next.js project with TypeScript and Tailwind CSS.</p>
      </main>
    </div>
  );
};

export default Home;