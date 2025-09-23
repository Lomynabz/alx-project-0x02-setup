import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 max-w-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600 mb-2">Email: {email}</p>
      <p className="text-gray-600">Address: {address}</p>
    </div>
  );
};

export default UserCard;