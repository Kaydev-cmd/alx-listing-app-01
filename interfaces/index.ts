import { ReactNode } from "react";

interface CardProps {
  title: string;
  content: string;
  imageUrl?: string;
  onClick?: () => void;
}

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
}

export interface PropertyProps {
  id: string;
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
  description: string;
}

export interface LabeledInputProps {
  label: string;
  id: string;
  placeholder: string;
}

export interface PillProps {
  label: string;
  isActive?: boolean;
  image?: string;
  onClick?: () => void;
}

export interface PropertyCardProps {
  name: string;
  price: string;
  rating: number;
  image: string;
}

export interface LayoutProps {
  children: ReactNode;
}

export interface LogosProps {
  image: string;
  alt: string;
}
