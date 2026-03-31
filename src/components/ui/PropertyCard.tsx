import React from 'react';
import { motion } from 'motion/react';
import { MapPin, BedDouble, Bath, Maximize2, ArrowRight } from 'lucide-react';
import { Property } from '../../types';

interface PropertyCardProps {
  property: Property;
  onClick?: () => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onClick }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={property.images[0]} 
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {property.labels.map(label => (
            <span 
              key={label} 
              className={`px-3 py-1 text-[10px] uppercase font-bold tracking-widest text-white ${
                label === 'Premium' ? 'bg-accent' : 
                label === 'Novo' ? 'bg-petrol' : 
                label === 'Destaque' ? 'bg-primary' : 'bg-graphite'
              }`}
            >
              {label}
            </span>
          ))}
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
            {property.status}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <span className="text-accent font-bold text-xl">
            {new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(property.price)}
          </span>
          <span className="text-xs text-gray-400 font-medium uppercase tracking-tighter">Ref: {property.id.padStart(4, '0')}</span>
        </div>
        
        <h3 className="text-lg font-serif font-bold mb-2 line-clamp-1 group-hover:text-accent transition-colors">
          {property.title}
        </h3>
        
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin size={14} className="mr-1 text-accent" />
          <span className="truncate">{property.location}</span>
        </div>
        
        <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-100">
          {property.bedrooms && (
            <div className="flex items-center text-gray-600">
              <BedDouble size={16} className="mr-2 text-gray-400" />
              <span className="text-sm font-medium">{property.bedrooms}</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center text-gray-600">
              <Bath size={16} className="mr-2 text-gray-400" />
              <span className="text-sm font-medium">{property.bathrooms}</span>
            </div>
          )}
          <div className="flex items-center text-gray-600">
            <Maximize2 size={16} className="mr-2 text-gray-400" />
            <span className="text-sm font-medium">{property.area}m²</span>
          </div>
        </div>
        
        <div className="mt-4 flex items-center text-primary font-bold text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
          Ver Detalhes <ArrowRight size={14} className="ml-2" />
        </div>
      </div>
    </motion.div>
  );
};
