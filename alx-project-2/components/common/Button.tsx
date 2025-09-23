import React from 'react';
import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ children, size, shape, onClick }) => {
  const sizeStyles = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const shapeStyles = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full',
  };

  return (
    <button
      className={`bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${sizeStyles[size]} ${shapeStyles[shape]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;