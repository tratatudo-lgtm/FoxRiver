import React from 'react';
import { motion } from 'motion/react';
import { MapPin, BedDouble, Bath, Maximize2, Check, Phone, MessageSquare, Mail, ArrowLeft, Share2, Heart } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Property } from '../types';
import { MOCK_PROPERTIES } from '../mockData';

interface PropertyDetailProps {
  propertyId: string;
  onBack: () => void;
}

export const PropertyDetail: React.FC<PropertyDetailProps> = ({ propertyId, onBack }) => {
  const property = MOCK_PROPERTIES.find(p => p.id === propertyId) || MOCK_PROPERTIES[0];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Navigation & Actions */}
        <div className="flex justify-between items-center mb-8">
          <button 
            onClick={onBack}
            className="flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" /> Voltar à Listagem
          </button>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-accent transition-all">
              <Share2 size={18} />
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-red-500 transition-all">
              <Heart size={18} />
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12 h-[600px]">
          <div className="md:col-span-2 h-full overflow-hidden rounded-sm">
            <img 
              src={property.images[0]} 
              alt={property.title} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-4 h-full">
            {property.images.slice(1, 5).map((img, i) => (
              <div key={i} className="h-full overflow-hidden rounded-sm">
                <img 
                  src={img} 
                  alt={`${property.title} ${i + 2}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
            {/* Placeholder for more images if needed */}
            {!property.images[1] && (
               <div className="h-full bg-secondary flex items-center justify-center text-gray-300 font-serif italic">Galeria em breve</div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {property.labels.map(label => (
                  <span key={label} className="px-3 py-1 bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest">
                    {label}
                  </span>
                ))}
                <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest">
                  {property.status}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{property.title}</h1>
              <div className="flex items-center text-gray-500 gap-4">
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2 text-accent" />
                  <span>{property.location}</span>
                </div>
                <span className="text-gray-300">|</span>
                <span className="text-xs font-bold uppercase tracking-widest">Ref: {property.id.padStart(4, '0')}</span>
              </div>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-gray-100 mb-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mb-2">Preço</span>
                <span className="text-2xl font-serif font-bold text-accent">
                  {new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(property.price)}
                </span>
              </div>
              {property.bedrooms && (
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mb-2">Quartos</span>
                  <div className="flex items-center gap-2">
                    <BedDouble size={20} className="text-primary" />
                    <span className="text-xl font-bold">{property.bedrooms}</span>
                  </div>
                </div>
              )}
              {property.bathrooms && (
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mb-2">Casas de Banho</span>
                  <div className="flex items-center gap-2">
                    <Bath size={20} className="text-primary" />
                    <span className="text-xl font-bold">{property.bathrooms}</span>
                  </div>
                </div>
              )}
              <div className="flex flex-col">
                <span className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mb-2">Área Útil</span>
                <div className="flex items-center gap-2">
                  <Maximize2 size={20} className="text-primary" />
                  <span className="text-xl font-bold">{property.area}m²</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-bold mb-6">Descrição</h3>
              <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                {property.description}
              </p>
            </div>

            {/* Features */}
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-bold mb-6">Características</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.features.map(feature => (
                  <div key={feature} className="flex items-center gap-3 p-4 bg-secondary rounded-sm">
                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                      <Check size={14} />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Energy Rating */}
            <div className="mb-12 p-8 bg-secondary flex items-center justify-between">
              <div>
                <h3 className="text-xl font-serif font-bold mb-2">Certificação Energética</h3>
                <p className="text-sm text-gray-500">Eficiência e sustentabilidade para o seu conforto.</p>
              </div>
              <div className="w-16 h-16 bg-petrol text-white flex items-center justify-center text-2xl font-bold rounded-sm shadow-lg">
                {property.energyRating}
              </div>
            </div>
          </div>

          {/* Sidebar - Contact Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="bg-white p-8 shadow-2xl border border-gray-100">
                <h3 className="text-xl font-serif font-bold mb-6">Solicitar Informações</h3>
                <form className="flex flex-col gap-4">
                  <input 
                    type="text" 
                    placeholder="Nome Completo" 
                    className="w-full px-4 py-3 bg-secondary border-none text-sm focus:ring-2 focus:ring-accent/20"
                  />
                  <input 
                    type="email" 
                    placeholder="E-mail" 
                    className="w-full px-4 py-3 bg-secondary border-none text-sm focus:ring-2 focus:ring-accent/20"
                  />
                  <input 
                    type="tel" 
                    placeholder="Telemóvel" 
                    className="w-full px-4 py-3 bg-secondary border-none text-sm focus:ring-2 focus:ring-accent/20"
                  />
                  <textarea 
                    placeholder="Mensagem" 
                    rows={4}
                    className="w-full px-4 py-3 bg-secondary border-none text-sm focus:ring-2 focus:ring-accent/20"
                  ></textarea>
                  <Button variant="accent" className="w-full py-4">Enviar Pedido</Button>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col gap-4">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 text-center">Ou fale diretamente connosco</p>
                  <div className="grid grid-cols-2 gap-4">
                    <a href="tel:+351912345678" className="flex items-center justify-center gap-2 py-3 bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-graphite transition-all">
                      <Phone size={14} /> Ligar
                    </a>
                    <a href="https://wa.me/351912345678" className="flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all">
                      <MessageSquare size={14} /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Agent Preview */}
              <div className="mt-8 p-6 bg-secondary flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" alt="Consultor" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">Consultor Responsável</p>
                  <p className="font-serif font-bold">Ricardo Silva</p>
                  <p className="text-xs text-gray-500">ricardo.silva@foxriver.pt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
