import React from 'react';
import { motion } from 'motion/react';
import { BarChart3, Search, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Valuation: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Avaliação Imobiliária</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
              Saiba o <span className="italic text-accent">valor real</span> do seu património.
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Uma avaliação correta é o primeiro passo para uma venda de sucesso. Utilizamos dados reais de mercado e a nossa experiência local para lhe entregar um relatório detalhado e rigoroso.
            </p>
            
            <div className="space-y-6 mb-10">
              {[
                "Análise comparativa de mercado (ACM) atualizada.",
                "Avaliação baseada em transações reais na zona.",
                "Relatório detalhado com pontos fortes e melhorias.",
                "Serviço gratuito e sem compromisso."
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
            className="bg-secondary p-10 md:p-16 shadow-2xl border border-gray-100"
          >
            <h3 className="text-3xl font-serif font-bold mb-8">Pedir Avaliação</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Tipo de Imóvel</label>
                  <select className="w-full px-4 py-4 bg-white border-none text-sm focus:ring-2 focus:ring-accent/20">
                    <option>Apartamento</option>
                    <option>Moradia</option>
                    <option>Terreno</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Tipologia</label>
                  <input type="text" placeholder="Ex: T3" className="w-full px-4 py-4 bg-white border-none text-sm focus:ring-2 focus:ring-accent/20" />
                </div>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Localização</label>
                <input type="text" placeholder="Freguesia, Rua..." className="w-full px-4 py-4 bg-white border-none text-sm focus:ring-2 focus:ring-accent/20" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Seu Nome</label>
                  <input type="text" placeholder="Nome Completo" className="w-full px-4 py-4 bg-white border-none text-sm focus:ring-2 focus:ring-accent/20" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2 block">Telemóvel</label>
                  <input type="tel" placeholder="+351 ..." className="w-full px-4 py-4 bg-white border-none text-sm focus:ring-2 focus:ring-accent/20" />
                </div>
              </div>
              <Button variant="accent" size="lg" className="w-full py-5">Solicitar Relatório Gratuito</Button>
            </form>
          </motion.div>
        </div>

        {/* Process Steps */}
        <div className="py-24 border-t border-gray-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold">Como funciona o processo</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Pedido", desc: "Preencha o formulário com os dados básicos do seu imóvel." },
              { step: "02", title: "Visita Técnica", desc: "Um dos nossos especialistas visita o imóvel para análise detalhada." },
              { step: "03", title: "Relatório", desc: "Entregamos um estudo de mercado completo com o valor recomendado." },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <span className="text-6xl font-serif font-bold text-accent/10 mb-4">{s.step}</span>
                <h4 className="text-xl font-serif font-bold mb-4">{s.title}</h4>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
