import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  category?: string;
  icon?: string;
  author?: { name: string, avatar: string, role: string };
  lastUpdated?: string;
  relatedLinks?: { label: string, url: string }[];
}

interface FAQAccordionProps {
  title: string;
  subtitle?: string;
  faqs: FAQ[];
  primary_color?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ title, subtitle, faqs, primary_color = '#2563eb' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('Tất cả');

  const categories = ['Tất cả', ...Array.from(new Set(faqs?.map(f => f.category).filter(Boolean)))];
  const filteredFaqs = activeCategory === 'Tất cả' ? faqs : faqs.filter(f => f.category === activeCategory);

  return (
    <div className="py-32 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-8xl font-black text-gray-900 mb-8 tracking-tighter leading-none">{title || 'Câu hỏi thường gặp'}</h2>
          {subtitle && <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium">{subtitle}</p>}
        </div>

        {categories.length > 1 && (
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat: any) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
                className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 border ${activeCategory === cat ? 'bg-gray-900 text-white border-gray-900 shadow-2xl scale-105' : 'bg-white text-gray-400 border-gray-100 hover:border-gray-300 hover:text-gray-600'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="space-y-6">
          {filteredFaqs?.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`group rounded-[48px] overflow-hidden border-2 transition-all duration-700 ${isOpen ? 'bg-white border-blue-600 shadow-[0_64px_128px_-12px_rgba(37,99,235,0.1)]' : 'bg-gray-50 border-transparent hover:bg-white hover:border-gray-200'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full px-10 py-10 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center gap-6">
                    {faq.icon && (
                      <span className="text-2xl w-14 h-14 flex items-center justify-center rounded-2xl bg-white shadow-xl border border-gray-100 group-hover:scale-110 transition-transform duration-500" style={{ color: primary_color }}>
                        {faq.icon}
                      </span>
                    )}
                    <span className="text-xl md:text-2xl font-black text-gray-900 tracking-tight leading-tight">{faq.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-blue-600 text-white shadow-xl' : 'bg-white text-gray-400 border border-gray-100'}`}
                  >
                    <ChevronDown size={24} strokeWidth={3} />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-10 pb-12">
                        <div className="h-px bg-gray-100 mb-10" />
                        <div className="text-xl text-gray-500 font-medium leading-relaxed mb-12 max-w-4xl">
                          {faq.answer}
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-10 border-t border-gray-50">
                          {faq.author && (
                            <div className="flex items-center gap-4">
                              <img src={faq.author.avatar} alt={faq.author.name} className="w-12 h-12 rounded-2xl object-cover shadow-lg" referrerPolicy="no-referrer" />
                              <div>
                                <div className="text-sm font-black text-gray-900 tracking-tight">Được trả lời bởi {faq.author.name}</div>
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{faq.author.role}</div>
                              </div>
                            </div>
                          )}
                          
                          <div className="flex flex-col md:items-end gap-4">
                            {faq.lastUpdated && (
                              <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Cập nhật lần cuối: {faq.lastUpdated}</div>
                            )}
                            {faq.relatedLinks && (
                              <div className="flex flex-wrap gap-3">
                                {faq.relatedLinks.map((link, lIndex) => (
                                  <a key={lIndex} href={link.url} className="px-4 py-2 bg-blue-50 text-blue-600 text-[9px] font-black uppercase tracking-widest rounded-full hover:bg-blue-600 hover:text-white transition-all">
                                    {link.label}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
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
