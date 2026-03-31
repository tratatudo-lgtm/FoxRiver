import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MessageSquare, Instagram, Facebook } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Imóveis', id: 'properties' },
    { name: 'Comprar', id: 'buy' },
    { name: 'Vender', id: 'sell' },
    { name: 'Avaliação', id: 'valuation' },
    { name: 'Crédito', id: 'mortgage' },
    { name: 'Investir', id: 'invest' },
    { name: 'Equipa', id: 'team' },
    { name: 'Sobre Nós', id: 'about' },
    { name: 'Contactos', id: 'contacts' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="cursor-pointer flex items-center gap-2"
          onClick={() => onNavigate('home')}
        >
          <div className="w-10 h-10 bg-primary flex items-center justify-center">
            <span className="text-white font-serif font-bold text-xl italic">F</span>
          </div>
          <div className="flex flex-col">
            <span className={`font-serif font-bold text-xl leading-none tracking-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>
              FOX RIVER
            </span>
            <span className={`text-[8px] font-bold tracking-[0.3em] uppercase ${isScrolled ? 'text-accent' : 'text-accent'}`}>
              UNU Real Estate
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`text-xs uppercase tracking-widest font-bold transition-all hover:text-accent relative group ${
                activePage === link.id 
                  ? 'text-accent' 
                  : isScrolled ? 'text-primary' : 'text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ${activePage === link.id ? 'w-full' : ''}`}></span>
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a 
            href="tel:+351912345678" 
            className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 border transition-all ${
              isScrolled 
                ? 'border-primary text-primary hover:bg-primary hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-primary'
            }`}
          >
            <Phone size={14} />
            Ligar Agora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden p-2 ${isScrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-primary z-40 flex flex-col p-8 pt-24"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-2xl font-serif text-left ${
                    activePage === link.id ? 'text-accent' : 'text-white'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
            
            <div className="mt-auto pt-8 border-t border-white/10 flex flex-col gap-6">
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-accent transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-accent transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
              <button className="w-full bg-accent text-white py-4 font-bold uppercase tracking-widest">
                Falar com Consultor
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
