import React from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Home, Euro, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

interface HeroProps {
  onSearch: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Parallax effect simulation */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920" 
          alt="Luxury Home"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-accent text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
              Imobiliária de Referência no Alto Minho
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-8 text-balance">
              O futuro do imobiliário em <span className="italic text-accent">Valença</span> começa aqui.
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl font-light leading-relaxed">
              Mais do que uma imobiliária: uma experiência de confiança, estratégia e proximidade para quem procura o extraordinário.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-xl p-2 rounded-sm border border-white/20 shadow-2xl max-w-4xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
              <div className="flex items-center px-4 py-3 bg-white/10 rounded-sm">
                <MapPin size={18} className="text-accent mr-3" />
                <select className="bg-transparent text-white text-sm w-full focus:outline-none appearance-none cursor-pointer">
                  <option className="text-primary">Localização</option>
                  <option className="text-primary">Valença Centro</option>
                  <option className="text-primary">Monção</option>
                  <option className="text-primary">Vila Nova de Cerveira</option>
                </select>
              </div>
              <div className="flex items-center px-4 py-3 bg-white/10 rounded-sm">
                <Home size={18} className="text-accent mr-3" />
                <select className="bg-transparent text-white text-sm w-full focus:outline-none appearance-none cursor-pointer">
                  <option className="text-primary">Tipo de Imóvel</option>
                  <option className="text-primary">Apartamento</option>
                  <option className="text-primary">Moradia</option>
                  <option className="text-primary">Terreno</option>
                </select>
              </div>
              <div className="flex items-center px-4 py-3 bg-white/10 rounded-sm">
                <Euro size={18} className="text-accent mr-3" />
                <select className="bg-transparent text-white text-sm w-full focus:outline-none appearance-none cursor-pointer">
                  <option className="text-primary">Preço Máximo</option>
                  <option className="text-primary">Até 150.000€</option>
                  <option className="text-primary">Até 300.000€</option>
                  <option className="text-primary">Mais de 500.000€</option>
                </select>
              </div>
              <Button variant="accent" className="w-full h-full" onClick={onSearch}>
                <Search size={18} className="mr-2" />
                Pesquisar
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 flex items-center gap-8"
          >
            <div className="flex flex-col">
              <span className="text-white font-serif text-3xl font-bold">500+</span>
              <span className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Imóveis Vendidos</span>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div className="flex flex-col">
              <span className="text-white font-serif text-3xl font-bold">15+</span>
              <span className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Anos de Experiência</span>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div className="flex flex-col">
              <span className="text-white font-serif text-3xl font-bold">98%</span>
              <span className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Clientes Satisfeitos</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent"></div>
      </motion.div>
    </section>
  );
};
