import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MessageSquare, Instagram, Facebook, Linkedin } from 'lucide-react';
import { MOCK_TEAM } from '../mockData';
import { Button } from '../components/ui/Button';

export const Team: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Capital Humano</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
              Uma equipa focada no <span className="italic text-accent">seu sucesso</span>.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              Na Fox River, acreditamos que o imobiliário é um negócio de pessoas para pessoas. Conheça os profissionais que o vão ajudar a concretizar os seus objetivos.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-24">
          {MOCK_TEAM.map((member, index) => (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-8 rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent transition-colors">
                      <Instagram size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent transition-colors">
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-1">{member.name}</h3>
              <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">{member.role}</p>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-3">{member.bio}</p>
              
              <div className="flex flex-col gap-3 pt-6 border-t border-gray-100">
                <a href={`tel:${member.phone}`} className="flex items-center gap-3 text-sm text-primary font-bold hover:text-accent transition-colors">
                  <Phone size={16} className="text-accent" /> {member.phone}
                </a>
                <a href={`mailto:${member.email}`} className="flex items-center gap-3 text-sm text-primary font-bold hover:text-accent transition-colors">
                  <Mail size={16} className="text-accent" /> {member.email}
                </a>
                <a href={`https://wa.me/${member.whatsapp}`} className="flex items-center gap-3 text-sm text-[#25D366] font-bold hover:opacity-80 transition-all">
                  <MessageSquare size={16} /> WhatsApp Direto
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recruitment CTA */}
        <section className="bg-secondary p-12 md:p-20 text-center rounded-sm">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Quer fazer parte da nossa equipa?</h2>
          <p className="text-gray-500 mb-10 max-w-2xl mx-auto">Estamos sempre à procura de talentos apaixonados pelo imobiliário e focados na excelência do serviço ao cliente.</p>
          <Button variant="outline" size="lg">Enviar Candidatura</Button>
        </section>
      </div>
    </div>
  );
};
