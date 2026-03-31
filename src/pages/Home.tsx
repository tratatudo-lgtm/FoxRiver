import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Zap, Users, TrendingUp, Phone, Mail } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { PropertyCard } from '../components/ui/PropertyCard';
import { MOCK_PROPERTIES, MOCK_TEAM, MOCK_TESTIMONIALS } from '../mockData';

interface HomeProps {
  onNavigate: (page: string) => void;
  onPropertyClick: (id: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, onPropertyClick }) => {
  return (
    <div className="flex flex-col">
      {/* Featured Properties */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Seleção Exclusiva</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                Imóveis em Destaque no <span className="italic text-accent">Alto Minho</span>
              </h2>
            </div>
            <Button variant="outline" onClick={() => onNavigate('properties')}>
              Ver Todos os Imóveis <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {MOCK_PROPERTIES.slice(0, 3).map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <PropertyCard property={property} onClick={() => onPropertyClick(property.id)} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" 
                  alt="Modern Office"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-accent p-12 text-white hidden md:block">
                <span className="text-5xl font-serif font-bold block mb-2">15+</span>
                <span className="text-xs uppercase tracking-widest font-bold">Anos de Sucesso</span>
              </div>
            </div>

            <div>
              <span className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 block">A Nossa Diferença</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                Porquê confiar a sua casa à <span className="italic text-accent">Fox River</span>?
              </h2>
              <p className="text-gray-600 mb-12 leading-relaxed">
                Somos especialistas no mercado do Alto Minho. Combinamos o conhecimento local profundo com as mais modernas ferramentas de marketing imobiliário para garantir o melhor negócio para si.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: <ShieldCheck className="text-accent" />, title: "Credibilidade", desc: "Marca premium com reputação sólida no mercado." },
                  { icon: <Zap className="text-accent" />, title: "Rapidez", desc: "Processos otimizados e rede de contactos ativa." },
                  { icon: <Users className="text-accent" />, title: "Proximidade", desc: "Atendimento humano e acompanhamento total." },
                  { icon: <TrendingUp className="text-accent" />, title: "Estratégia", desc: "Marketing de alto impacto para cada imóvel." },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col gap-3">
                    <div className="w-12 h-12 bg-white flex items-center justify-center shadow-sm">
                      {item.icon}
                    </div>
                    <h4 className="font-serif font-bold text-lg">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services CTAs */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-12 border border-white/10 flex flex-col items-center text-center group cursor-pointer"
              onClick={() => onNavigate('buy')}
            >
              <div className="w-16 h-16 rounded-full border border-accent flex items-center justify-center mb-8 group-hover:bg-accent transition-all duration-500">
                <Home size={24} className="text-accent group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Quero Comprar</h3>
              <p className="text-white/60 text-sm mb-8">Encontre a casa dos seus sonhos com a ajuda dos nossos especialistas.</p>
              <span className="text-accent text-xs font-bold uppercase tracking-widest flex items-center">
                Ver Imóveis <ArrowRight size={14} className="ml-2" />
              </span>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-12 border border-white/10 flex flex-col items-center text-center group cursor-pointer bg-white/5"
              onClick={() => onNavigate('valuation')}
            >
              <div className="w-16 h-16 rounded-full border border-accent flex items-center justify-center mb-8 group-hover:bg-accent transition-all duration-500">
                <TrendingUp size={24} className="text-accent group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Quero Vender</h3>
              <p className="text-white/60 text-sm mb-8">Valorize o seu imóvel e venda-o pelo melhor preço de mercado.</p>
              <span className="text-accent text-xs font-bold uppercase tracking-widest flex items-center">
                Pedir Avaliação <ArrowRight size={14} className="ml-2" />
              </span>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-12 border border-white/10 flex flex-col items-center text-center group cursor-pointer"
              onClick={() => onNavigate('invest')}
            >
              <div className="w-16 h-16 rounded-full border border-accent flex items-center justify-center mb-8 group-hover:bg-accent transition-all duration-500">
                <Zap size={24} className="text-accent group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Quero Investir</h3>
              <p className="text-white/60 text-sm mb-8">Oportunidades estratégicas com alta rentabilidade no Alto Minho.</p>
              <span className="text-accent text-xs font-bold uppercase tracking-widest flex items-center">
                Saber Mais <ArrowRight size={14} className="ml-2" />
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <span className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 block">A Nossa Equipa</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16">Profissionais ao <span className="italic text-accent">Seu Serviço</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {MOCK_TEAM.map((member) => (
              <div key={member.id} className="flex flex-col items-center group">
                <div className="w-64 h-64 overflow-hidden rounded-full mb-6 border-4 border-secondary group-hover:border-accent transition-all duration-500">
                  <img 
                    src={member.photo} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-xl font-serif font-bold mb-1">{member.name}</h4>
                <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">{member.role}</p>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href={`tel:${member.phone}`} className="text-gray-400 hover:text-primary transition-colors"><Phone size={18} /></a>
                  <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-primary transition-colors"><Mail size={18} /></a>
                </div>
              </div>
            ))}
          </div>
          
          <Button variant="outline" onClick={() => onNavigate('team')}>Ver Equipa Completa</Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Prova Social</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">O que dizem os <span className="italic text-accent">Nossos Clientes</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MOCK_TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-12 shadow-sm border border-gray-100 relative">
                <div className="text-accent text-6xl font-serif absolute top-6 right-10 opacity-20">“</div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div>
                  <h5 className="font-bold text-primary">{t.name}</h5>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{t.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200" 
            alt="Pattern" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
            Pronto para dar o próximo passo no <br className="hidden md:block" /> seu percurso imobiliário?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light">
            A nossa equipa está preparada para o acompanhar em cada detalhe. Fale connosco hoje mesmo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button variant="primary" size="lg" className="bg-white text-accent hover:bg-secondary border-none" onClick={() => onNavigate('contacts')}>
              Contactar Equipa
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" onClick={() => window.open('https://wa.me/351912345678')}>
              WhatsApp Direto
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
