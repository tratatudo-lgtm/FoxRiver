import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white flex items-center justify-center">
                <span className="text-primary font-serif font-bold text-xl italic">F</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-none tracking-tight">FOX RIVER</span>
                <span className="text-[8px] font-bold tracking-[0.3em] uppercase text-accent">UNU Real Estate</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Especialistas em imobiliário premium no Alto Minho. Transformamos transações em experiências de confiança e sucesso.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-accent font-bold text-xs uppercase tracking-widest mb-8">Navegação</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'Imóveis', 'Comprar', 'Vender', 'Investir', 'Equipa', 'Sobre Nós'].map(item => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors flex items-center group">
                    <ArrowRight size={12} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-accent font-bold text-xs uppercase tracking-widest mb-8">Serviços</h4>
            <ul className="flex flex-col gap-4">
              {['Avaliação de Imóveis', 'Crédito Habitação', 'Gestão de Arrendamento', 'Apoio Jurídico', 'Marketing Imobiliário'].map(item => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors flex items-center group">
                    <ArrowRight size={12} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-accent font-bold text-xs uppercase tracking-widest mb-8">Contactos</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4 text-sm text-white/60">
                <MapPin size={20} className="text-accent flex-shrink-0" />
                <span>Av. da Juventude, Edifício Cristal, Loja 4<br />4930-594 Valença, Portugal</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-white/60">
                <Phone size={20} className="text-accent flex-shrink-0" />
                <span>+351 912 345 678</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-white/60">
                <Mail size={20} className="text-accent flex-shrink-0" />
                <span>geral@foxriver.pt</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">
            © 2026 Fox River / UNU Valença. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/40 hover:text-white text-[10px] uppercase tracking-widest font-bold transition-colors">Política de Privacidade</a>
            <a href="#" className="text-white/40 hover:text-white text-[10px] uppercase tracking-widest font-bold transition-colors">Termos e Condições</a>
            <a href="#" className="text-white/40 hover:text-white text-[10px] uppercase tracking-widest font-bold transition-colors">Livro de Reclamações</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
