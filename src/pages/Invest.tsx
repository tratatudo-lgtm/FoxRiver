import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, PieChart, Landmark, Globe, ArrowRight, Check } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Invest: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Oportunidades Estratégicas</span>
            <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-[1.1]">
              Invista no potencial do <span className="italic text-accent">Alto Minho</span>.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              Valença e a região do Alto Minho representam hoje um dos polos de maior crescimento e valorização imobiliária em Portugal. Na Fox River, identificamos as melhores oportunidades para o seu capital.
            </p>
          </motion.div>
        </div>

        {/* Investment Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {[
            { 
              icon: <TrendingUp size={32} />, 
              title: "Valorização Patrimonial", 
              desc: "Projetos em zonas de forte expansão urbana e turística com elevado potencial de valorização a médio-longo prazo." 
            },
            { 
              icon: <PieChart size={32} />, 
              title: "Rentabilidade Garantida", 
              desc: "Foco em ativos para arrendamento de curta ou longa duração, com taxas de retorno acima da média nacional." 
            },
            { 
              icon: <Globe size={32} />, 
              title: "Localização Transfronteiriça", 
              desc: "A proximidade com a Galiza (Espanha) cria um dinamismo económico único e uma procura constante por imobiliário." 
            },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-secondary border border-gray-100 group hover:bg-primary hover:text-white transition-all duration-500"
            >
              <div className="text-accent mb-8 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-2xl font-serif font-bold mb-4">{item.title}</h3>
              <p className="text-gray-500 group-hover:text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Why Alto Minho */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-serif font-bold mb-8">Porquê investir em Valença agora?</h2>
            <div className="space-y-6">
              {[
                "Crescimento exponencial do turismo de natureza e religioso (Caminhos de Santiago).",
                "Forte investimento público em infraestruturas e reabilitação urbana.",
                "Qualidade de vida superior com custo de aquisição competitivo.",
                "Dinâmica industrial e logística crescente na região.",
                "Procura crescente por residências secundárias e nómadas digitais."
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white flex-shrink-0 mt-1">
                    <Check size={14} />
                  </div>
                  <p className="text-gray-700 font-medium">{text}</p>
                </div>
              ))}
            </div>
            <Button variant="primary" size="lg" className="mt-12" onClick={() => window.open('https://wa.me/351912345678')}>
              Agendar Reunião Estratégica
            </Button>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-video overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1449156001935-d2863fb72690?auto=format&fit=crop&q=80&w=1000" 
                alt="Investment Region" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Investor Contact Form */}
        <section className="bg-primary text-white p-12 md:p-24 rounded-sm text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Receba Oportunidades Off-Market</h2>
            <p className="text-white/60 mb-12 text-lg">Muitas das nossas melhores oportunidades de investimento não chegam ao site. Registe-se na nossa lista de investidores premium.</p>
            
            <form className="flex flex-col md:flex-row gap-4">
              <input 
                type="text" 
                placeholder="Seu Nome" 
                className="flex-1 px-6 py-4 bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-accent/20"
              />
              <input 
                type="email" 
                placeholder="Seu E-mail" 
                className="flex-1 px-6 py-4 bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-accent/20"
              />
              <Button variant="accent" size="lg" className="px-12">Subscrever</Button>
            </form>
            <p className="mt-6 text-[10px] uppercase tracking-widest text-white/30 font-bold">Respeitamos a sua privacidade. Cancele a qualquer momento.</p>
          </div>
        </section>
      </div>
    </div>
  );
};
