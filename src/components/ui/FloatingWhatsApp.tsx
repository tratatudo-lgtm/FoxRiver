import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="bg-white p-4 rounded-xl shadow-2xl border border-gray-100 max-w-[240px] pointer-events-auto"
      >
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-accent flex-shrink-0 flex items-center justify-center text-white">
            <span className="font-bold text-xs">FOX</span>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1">Assistente Online</p>
            <p className="text-sm font-medium text-primary">Olá! Como podemos ajudar a encontrar o seu imóvel ideal?</p>
          </div>
        </div>
      </motion.div>

      <motion.a
        href="https://wa.me/351912345678"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl pointer-events-auto relative group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-primary text-white px-3 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Fale connosco no WhatsApp
        </span>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
      </motion.a>
    </div>
  );
};
