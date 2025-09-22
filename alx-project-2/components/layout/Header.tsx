import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">ALX Project 2</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}