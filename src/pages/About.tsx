import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Award, Map, Shield, Heart } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Sobre Nós</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
              Paixão pelo <span className="italic text-accent">Alto Minho</span>, foco na excelência.
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              A Fox River nasceu da vontade de elevar o padrão do serviço imobiliário em Valença. Como parte da rede UNU Real Estate, combinamos a força de uma marca nacional com o conhecimento profundo e a proximidade de uma equipa local.
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Acreditamos que cada imóvel tem uma história e cada cliente um sonho. O nosso papel é ser a ponte de confiança que une ambos, com transparência, estratégia e um compromisso inabalável com os resultados.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-4xl font-serif font-bold text-accent mb-2">500+</h4>
                <p className="text-xs uppercase tracking-widest font-bold text-gray-400">Imóveis Transacionados</p>
              </div>
              <div>
                <h4 className="text-4xl font-serif font-bold text-accent mb-2">15+</h4>
                <p className="text-xs uppercase tracking-widest font-bold text-gray-400">Anos de Experiência</p>
              </div>
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
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=1000" 
                alt="Valença Region" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-accent p-12 text-white hidden md:block">
              <p className="text-2xl font-serif font-bold italic">"Compromisso real com a sua felicidade."</p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="py-24 border-y border-gray-100 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold">Os Nossos Valores</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Shield size={32} />, title: "Confiança", desc: "Transparência total em todos os processos e comunicações." },
              { icon: <Award size={32} />, title: "Excelência", desc: "Procuramos superar as expectativas em cada detalhe do serviço." },
              { icon: <Heart size={32} />, title: "Proximidade", desc: "Atendimento humano e personalizado, focado nas pessoas." },
            ].map((v, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="text-accent mb-6">{v.icon}</div>
                <h4 className="text-xl font-serif font-bold mb-4">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="p-12 bg-secondary">
            <h3 className="text-2xl font-serif font-bold mb-6">A Nossa Missão</h3>
            <p className="text-gray-600 leading-relaxed">
              Proporcionar um serviço imobiliário de excelência, focado na valorização dos ativos dos nossos clientes e na realização dos seus sonhos habitacionais, contribuindo para o desenvolvimento sustentável da região do Alto Minho.
            </p>
          </div>
          <div className="p-12 bg-primary text-white">
            <h3 className="text-2xl font-serif font-bold mb-6">A Nossa Visão</h3>
            <p className="text-white/60 leading-relaxed">
              Ser a imobiliária de referência absoluta no Alto Minho, reconhecida pela inovação digital, ética profissional e pela capacidade de gerar valor real para clientes, parceiros e colaboradores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
