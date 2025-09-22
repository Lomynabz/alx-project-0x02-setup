import Header from '../components/layout/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center text-blue-600">
          Welcome to ALX Project 2
        </h1>
        <p className="text-lg text-center mt-4">
          This is a Next.js project scaffolded with TypeScript and Tailwind CSS.
        </p>
      </main>
    </div>
  );
}