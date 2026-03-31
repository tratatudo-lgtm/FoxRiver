import React from 'react';
import { motion } from 'motion/react';
import { Search, Home, MapPin, Euro, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Buy: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Para Compradores</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
              Encontre a sua casa <br /> com <span className="italic text-accent">acompanhamento premium</span>.
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Comprar um imóvel é uma das decisões mais importantes da vida. Na Fox River, garantimos que o processo seja fluido, seguro e totalmente alinhado com as suas expectativas.
            </p>
            
            <div className="space-y-6 mb-10">
              {[
                "Acesso a imóveis exclusivos antes de chegarem ao mercado.",
                "Análise detalhada de mercado e avaliação de preços.",
                "Apoio total na negociação para garantir o melhor valor.",
                "Acompanhamento jurídico e burocrático completo."
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600607687940-4e524cb35a36?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-10 shadow-2xl border border-gray-100 max-w-xs hidden md:block">
              <p className="text-sm italic text-gray-600 mb-4">"A Fox River não nos vendeu apenas uma casa, encontrou o nosso lar perfeito em Valença."</p>
              <p className="font-bold text-primary">— Família Teixeira</p>
            </div>
          </motion.div>
        </div>

        {/* Lead Form Section */}
        <section className="bg-secondary p-12 md:p-20 rounded-sm">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Diga-nos o que procura</h2>
              <p className="text-gray-500">Se não encontrou o que procura na nossa listagem, deixe-nos saber. A nossa equipa fará uma pesquisa personalizada para si.</p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Tipo de Imóvel</label>
                  <select className="w-full px-4 py-4 bg-white border-none text-sm focus:ring-2 focus:ring-accent/20">
                    <option>Apartamento</option>
                    <option>Moradia</option>
                    <option>Terreno</option>
                    <option>Comercial</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Localização Preferencial</label>
                  <input type="text" placeholder="Ex: Valença Centro, Monção..." className="w-full px-4 py-4 bg-white border-none text-sm focus:ring-2 focus:ring-accent/20" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Orçamento Máximo</label>
                  <input type="text" placeholder="Ex: 250.000€" className="w-full px-4 py-4 bg-white border-none text-sm focus:ring-2 focus:ring-accent/20" />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Nome Completo</label>
                  <input type="text" placeholder="Seu nome" className="w-full px-4 py-4 bg-white border-none text-sm focus:ring-2 focus:ring-accent/20" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Contacto Telefónico</label>
                  <input type="tel" placeholder="+351 ..." className="w-full px-4 py-4 bg-white border-none text-sm focus:ring-2 focus:ring-accent/20" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">E-mail</label>
                  <input type="email" placeholder="seu@email.com" className="w-full px-4 py-4 bg-white border-none text-sm focus:ring-2 focus:ring-accent/20" />
                </div>
              </div>
              <div className="md:col-span-2">
                <Button variant="primary" size="lg" className="w-full py-5">Ativar Pesquisa Personalizada</Button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};
