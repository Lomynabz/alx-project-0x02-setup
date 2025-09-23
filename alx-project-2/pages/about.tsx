import type { NextPage } from 'next';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const About: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">About Page</h1>
        <p className="text-lg text-gray-600 mb-8">Learn more about ALX Project 2.</p>
        <div className="flex flex-col space-y-4 items-center">
          <Button size="small" shape="rounded-sm" onClick={() => alert('Small button clicked')}>
            Small Button
          </Button>
          <Button size="medium" shape="rounded-md" onClick={() => alert('Medium button clicked')}>
            Medium Button
          </Button>
          <Button size="large" shape="rounded-full" onClick={() => alert('Large button clicked')}>
            Large Button
          </Button>
        </div>
      </main>
    </div>
  );
};

export default About;