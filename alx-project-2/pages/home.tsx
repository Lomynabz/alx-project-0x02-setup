import type { NextPage } from 'next';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Home Page</h1>
        <div className="flex flex-wrap justify-center">
          <Card
            title="Card 1"
            content="This is the first card in our ALX Project 2, showcasing a reusable component."
          />
          <Card
            title="Card 2"
            content="This is another card demonstrating the flexibility of the Card component."
          />
          <Card
            title="Card 3"
            content="A third card to highlight consistent styling with Tailwind CSS."
          />
        </div>
      </main>
    </div>
  );
};

export default Home;