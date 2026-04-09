import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  category?: string;
  icon?: string;
}

interface FAQAccordionProps {
  title: string;
  subtitle?: string;
  faqs: FAQ[];
  primary_color?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ title, subtitle, faqs, primary_color = '#f59e0b' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('Tất cả');

  const categories = ['Tất cả', ...Array.from(new Set(faqs?.map(f => f.category).filter(Boolean)))];
  const filteredFaqs = activeCategory === 'Tất cả' ? faqs : faqs.filter(f => f.category === activeCategory);

  return (
    <div className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">{title || 'Câu hỏi thường gặp'}</h2>
          {subtitle && <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
        </div>

        {categories.length > 1 && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat: any) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-gray-900 text-white shadow-xl scale-105' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="space-y-4">
          {filteredFaqs?.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`group rounded-[32px] overflow-hidden border transition-all duration-500 ${isOpen ? 'bg-white border-gray-200 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)]' : 'bg-gray-50 border-gray-100 hover:border-gray-200'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full px-8 py-7 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    {faq.icon && (
                      <span className="text-xl w-10 h-10 flex items-center justify-center rounded-xl bg-white shadow-sm border border-gray-100" style={{ color: primary_color }}>
                        {faq.icon}
                      </span>
                    )}
                    <span className="text-lg font-black text-gray-900">{faq.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-gray-900 text-white' : 'bg-white text-gray-400 border border-gray-100'}`}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-8 pb-8 text-gray-500 font-medium leading-relaxed">
                        <div className="h-px bg-gray-100 mb-6" />
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
    </div>
  );
};
