import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps, JsonPlaceholderUser } from '@/interfaces';

const Users: NextPage = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data: JsonPlaceholderUser[] = await response.json();
        // Map API data to UserProps
        const formattedUsers: UserProps[] = data.map((user: JsonPlaceholderUser) => ({
          name: user.name,
          email: user.email,
          address: `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`,
        }));
        setUsers(formattedUsers);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="flex flex-col items-center justify-center py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Users Page</h1>
        {loading && <p className="text-lg text-gray-600">Loading users...</p>}
        {error && <p className="text-lg text-red-600">{error}</p>}
        <div className="flex flex-wrap justify-center">
          {users.map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Users;