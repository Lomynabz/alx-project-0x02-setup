export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  onClick?: () => void;
}

export interface PostProps {
  title: string;
  content: string;
  userId: number;
}

export interface JsonPlaceholderPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface UserProps {
  name: string;
  email: string;
  address: string;
}

export interface JsonPlaceholderUser {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}