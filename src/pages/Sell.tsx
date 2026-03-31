import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Camera, Megaphone, FileText, BarChart3, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Sell: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Para Proprietários</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
              Venda o seu imóvel com <span className="italic text-accent">estratégia e rapidez</span>.
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Não se limite a colocar uma placa de venda. Na Fox River, criamos um plano de marketing personalizado para posicionar o seu imóvel perante os compradores certos, garantindo a máxima valorização.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {[
                { icon: <Camera size={20} />, title: "Fotografia Profissional", desc: "Sessões de alta qualidade e vídeo tour." },
                { icon: <Megaphone size={20} />, title: "Marketing Digital", desc: "Anúncios segmentados nas redes sociais." },
                { icon: <BarChart3 size={20} />, title: "Análise de Mercado", desc: "Estudo comparativo para preço justo." },
                { icon: <FileText size={20} />, title: "Apoio Jurídico", desc: "Tratamos de toda a documentação." },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="text-accent">{item.icon}</div>
                  <h4 className="font-bold text-primary">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
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
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=1000" 
                alt="Selling Property" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-10 -right-10 bg-primary p-10 text-white shadow-2xl max-w-xs hidden md:block">
              <h4 className="text-2xl font-serif font-bold mb-2">Vendido em 15 dias</h4>
              <p className="text-sm text-white/60">Média de tempo de venda para imóveis com o nosso plano de marketing premium.</p>
            </div>
          </motion.div>
        </div>

        {/* Valuation Form Section */}
        <section className="bg-primary text-white p-12 md:p-20 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Avaliação Gratuita</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Quanto vale o seu imóvel?</h2>
              <p className="text-white/60">Preencha os dados abaixo e receba um estudo de mercado profissional e gratuito para o seu imóvel.</p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2 block">Tipo de Imóvel</label>
                  <select className="w-full px-4 py-4 bg-white/5 border border-white/10 text-sm focus:ring-2 focus:ring-accent/20 text-white">
                    <option className="text-primary">Apartamento</option>
                    <option className="text-primary">Moradia</option>
                    <option className="text-primary">Terreno</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2 block">Localização do Imóvel</label>
                  <input type="text" placeholder="Freguesia, Rua..." className="w-full px-4 py-4 bg-white/5 border border-white/10 text-sm focus:ring-2 focus:ring-accent/20 text-white" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2 block">Quartos</label>
                    <input type="number" placeholder="T..." className="w-full px-4 py-4 bg-white/5 border border-white/10 text-sm focus:ring-2 focus:ring-accent/20 text-white" />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2 block">Área (m²)</label>
                    <input type="number" placeholder="m²" className="w-full px-4 py-4 bg-white/5 border border-white/10 text-sm focus:ring-2 focus:ring-accent/20 text-white" />
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2 block">Seu Nome</label>
                  <input type="text" placeholder="Nome Completo" className="w-full px-4 py-4 bg-white/5 border border-white/10 text-sm focus:ring-2 focus:ring-accent/20 text-white" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2 block">Contacto Telefónico</label>
                  <input type="tel" placeholder="+351 ..." className="w-full px-4 py-4 bg-white/5 border border-white/10 text-sm focus:ring-2 focus:ring-accent/20 text-white" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2 block">E-mail</label>
                  <input type="email" placeholder="seu@email.com" className="w-full px-4 py-4 bg-white/5 border border-white/10 text-sm focus:ring-2 focus:ring-accent/20 text-white" />
                </div>
              </div>
              <div className="md:col-span-2">
                <Button variant="accent" size="lg" className="w-full py-5">Solicitar Avaliação Profissional</Button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};
