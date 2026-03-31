import { LucideIcon } from 'lucide-react';

export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  type: 'Apartamento' | 'Moradia' | 'Terreno' | 'Comercial';
  status: 'Venda' | 'Arrendamento';
  bedrooms?: number;
  bathrooms?: number;
  area: number;
  description: string;
  images: string[];
  features: string[];
  labels: ('Destaque' | 'Novo' | 'Oportunidade' | 'Investimento' | 'Premium')[];
  energyRating: 'A+' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  email: string;
  phone: string;
  whatsapp: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  date: string;
}
