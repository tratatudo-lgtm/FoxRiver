import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { PropertyCard } from '../components/ui/PropertyCard';
import { MOCK_PROPERTIES } from '../mockData';

interface PropertiesProps {
  onPropertyClick: (id: string) => void;
}

export const Properties: React.FC<PropertiesProps> = ({ onPropertyClick }) => {
  const [filterType, setFilterType] = useState('Todos');
  
  const filteredProperties = filterType === 'Todos' 
    ? MOCK_PROPERTIES 
    : MOCK_PROPERTIES.filter(p => p.type === filterType);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <span className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 block">O Nosso Portfólio</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Encontre o seu <span className="italic text-accent">Imóvel Ideal</span></h1>
          <p className="text-gray-500 max-w-2xl">Explore a nossa seleção exclusiva de apartamentos, moradias e terrenos no Alto Minho. Qualidade e sofisticação em cada detalhe.</p>
        </div>

        {/* Filters Bar */}
        <div className="bg-white p-6 shadow-sm border border-gray-100 mb-12 flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div className="flex flex-wrap gap-4 items-center w-full lg:w-auto">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Pesquisar por zona ou ref..." 
                className="w-full pl-12 pr-4 py-3 bg-secondary border-none focus:ring-2 focus:ring-accent/20 text-sm rounded-sm"
              />
            </div>
            
            <div className="flex gap-2">
              {['Todos', 'Apartamento', 'Moradia', 'Terreno'].map(type => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all ${
                    filterType === type ? 'bg-primary text-white' : 'bg-secondary text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4 w-full lg:w-auto">
            <button className="flex items-center gap-2 px-6 py-3 bg-secondary text-primary text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-all">
              <SlidersHorizontal size={16} />
              Mais Filtros
            </button>
            <div className="relative">
              <select className="appearance-none px-6 py-3 bg-secondary text-primary text-xs font-bold uppercase tracking-widest pr-12 cursor-pointer hover:bg-gray-200 transition-all">
                <option>Ordenar por: Recentes</option>
                <option>Preço: Menor para Maior</option>
                <option>Preço: Maior para Menor</option>
              </select>
              <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-sm text-gray-400 font-medium">
            A mostrar <span className="text-primary font-bold">{filteredProperties.length}</span> imóveis disponíveis
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <PropertyCard property={property} onClick={() => onPropertyClick(property.id)} />
            </motion.div>
          ))}
        </div>

        {/* Pagination Placeholder */}
        <div className="mt-20 flex justify-center gap-4">
          <button className="w-12 h-12 flex items-center justify-center bg-primary text-white font-bold">1</button>
          <button className="w-12 h-12 flex items-center justify-center bg-white text-primary border border-gray-100 hover:bg-secondary transition-all">2</button>
          <button className="w-12 h-12 flex items-center justify-center bg-white text-primary border border-gray-100 hover:bg-secondary transition-all">3</button>
        </div>
      </div>
    </div>
  );
};
