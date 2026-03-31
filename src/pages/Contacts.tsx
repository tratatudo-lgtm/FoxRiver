import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Linkedin, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Contacts: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-24 text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Fale Connosco</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
              Estamos aqui para <span className="italic text-accent">ajudar</span>.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              Tem alguma dúvida ou quer agendar uma visita? A nossa equipa está disponível para lhe prestar todo o apoio necessário.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h4 className="text-accent font-bold text-xs uppercase tracking-widest mb-6">Informações de Contacto</h4>
              <ul className="space-y-8">
                <li className="flex gap-6">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center text-accent flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-primary mb-1">A nossa morada</p>
                    <p className="text-sm text-gray-500 leading-relaxed">Av. da Juventude, Edifício Cristal, Loja 4<br />4930-594 Valença, Portugal</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center text-accent flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-primary mb-1">Telefone</p>
                    <p className="text-sm text-gray-500">+351 912 345 678</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center text-accent flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-primary mb-1">E-mail</p>
                    <p className="text-sm text-gray-500">geral@foxriver.pt</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-accent font-bold text-xs uppercase tracking-widest mb-6">Horário de Atendimento</h4>
              <ul className="space-y-4">
                <li className="flex justify-between text-sm">
                  <span className="text-gray-500">Segunda - Sexta</span>
                  <span className="font-bold">09:30 - 19:00</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-gray-500">Sábado</span>
                  <span className="font-bold">10:00 - 13:00</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-gray-500">Domingo</span>
                  <span className="font-bold text-accent italic">Por marcação</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-accent font-bold text-xs uppercase tracking-widest mb-6">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-secondary flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-secondary flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-secondary flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-secondary p-8 md:p-12 shadow-sm border border-gray-100">
              <h3 className="text-3xl font-serif font-bold mb-8">Envie-nos uma mensagem</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Nome Completo</label>
                  <input type="text" className="w-full px-4 py-4 bg-white border-none text-sm focus:ring-2 focus:ring-accent/20" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">E-mail</label>
                  <input type="email" className="w-full px-4 py-4 bg-white border-none text-sm focus:ring-2 focus:ring-accent/20" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Telemóvel</label>
                  <input type="tel" className="w-full px-4 py-4 bg-white border-none text-sm focus:ring-2 focus:ring-accent/20" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Assunto</label>
                  <select className="w-full px-4 py-4 bg-white border-none text-sm focus:ring-2 focus:ring-accent/20">
                    <option>Informação Geral</option>
                    <option>Pedido de Visita</option>
                    <option>Avaliação de Imóvel</option>
                    <option>Crédito Habitação</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Mensagem</label>
                  <textarea rows={6} className="w-full px-4 py-4 bg-white border-none text-sm focus:ring-2 focus:ring-accent/20"></textarea>
                </div>
                <div className="md:col-span-2">
                  <Button variant="primary" size="lg" className="w-full py-5">Enviar Mensagem</Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="w-full h-[500px] bg-secondary relative overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-1000">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.632483563456!2d-8.6444!3d42.0322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDAxJzU1LjkiTiA4wrAzOCczOS44Ilc!5e0!3m2!1spt!2spt!4v1648712345678!5m2!1spt!2spt" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute top-8 left-8 bg-white p-6 shadow-2xl border border-gray-100 max-w-xs pointer-events-none">
            <h4 className="font-serif font-bold text-lg mb-2">Visite o nosso escritório</h4>
            <p className="text-sm text-gray-500">Estamos localizados no centro de Valença, prontos para o receber.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
