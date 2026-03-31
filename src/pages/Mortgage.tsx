import React from 'react';
import { motion } from 'motion/react';
import { Landmark, Calculator, ShieldCheck, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Mortgage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Financiamento Imobiliário</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
              O crédito ideal para a sua <span className="italic text-accent">nova casa</span>.
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Trabalhamos com os principais parceiros bancários para lhe garantir as melhores condições de financiamento, sem custos extra e com total transparência.
            </p>
            
            <div className="space-y-8 mb-10">
              {[
                { icon: <Calculator className="text-accent" />, title: "Simulação Gratuita", desc: "Analisamos o seu perfil e apresentamos as melhores propostas." },
                { icon: <ShieldCheck className="text-accent" />, title: "Apoio Certificado", desc: "Intermediários de crédito registados no Banco de Portugal." },
                { icon: <Clock className="text-accent" />, title: "Processo Rápido", desc: "Agilizamos toda a burocracia para uma aprovação célere." },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary flex items-center justify-center">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-primary p-12 text-white shadow-2xl relative"
          >
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-accent flex items-center justify-center">
              <Landmark size={24} />
            </div>
            <h3 className="text-3xl font-serif font-bold mb-8">Peça a sua simulação</h3>
            <form className="space-y-6">
              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2 block">Valor do Imóvel</label>
                <input type="text" placeholder="Ex: 200.000€" className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-accent/20" />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2 block">Valor de Entrada</label>
                <input type="text" placeholder="Ex: 20.000€" className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-accent/20" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2 block">Prazo (Anos)</label>
                  <input type="number" placeholder="Ex: 30" className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-accent/20" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2 block">Seu Telemóvel</label>
                  <input type="tel" placeholder="+351 ..." className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-accent/20" />
                </div>
              </div>
              <Button variant="accent" size="lg" className="w-full py-5">Solicitar Contacto Gratuito</Button>
            </form>
            <p className="mt-6 text-[10px] text-white/40 text-center">Intermediação de crédito vinculada registada no Banco de Portugal sob o nº 000XXXX.</p>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <section className="py-24 bg-secondary px-12 rounded-sm">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Vantagens de trabalhar connosco</h2>
            <p className="text-gray-500">Não perca tempo a ir de banco em banco. Nós fazemos o trabalho por si.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Acesso a taxas exclusivas",
              "Comparativo de propostas",
              "Isenção de custos de análise",
              "Apoio na documentação",
              "Seguros mais competitivos",
              "Acompanhamento na escritura",
              "Análise de viabilidade imediata",
              "Transparência total"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-6 shadow-sm">
                <CheckCircle2 className="text-accent" size={18} />
                <span className="text-sm font-bold text-primary">{benefit}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
