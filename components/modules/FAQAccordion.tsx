import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  title: string;
  subtitle?: string;
  faqs: FAQ[];
  primary_color?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ title, subtitle, faqs, primary_color = '#f59e0b' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="py-20 max-w-3xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-widest">{title || 'CÂU HỎI THƯỜNG GẶP'}</h2>
        {subtitle && <p className="text-slate-400">{subtitle}</p>}
      </div>

      <div className="space-y-4">
        {faqs?.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-slate-900/80 border-slate-700' : 'bg-slate-950/50 border-slate-800/50 hover:border-slate-700/80'}`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-bold text-slate-200 pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0"
                >
                  <ChevronDown size={20} style={{ color: isOpen ? primary_color : '#64748b' }} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-slate-400 leading-relaxed text-sm">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
