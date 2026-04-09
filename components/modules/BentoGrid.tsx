import React from 'react';
import { motion } from 'motion/react';

interface BentoItem {
  title: string;
  description: string;
  icon?: string;
  tag?: string;
  cta_text?: string;
  image?: string;
  size?: 'small' | 'medium' | 'large'; // small: 1x1, medium: 2x1, large: 2x2
  dark?: boolean;
  stats?: { value: string; label: string };
  badge?: string;
}

interface BentoGridProps {
  title: string;
  subtitle?: string;
  items: BentoItem[];
  primary_color?: string;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ title, subtitle, items, primary_color = '#f59e0b' }) => {
  return (
    <div className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black text-gray-900 mb-6 tracking-tighter"
          >
            {title}
          </motion.h2>
          {subtitle && <p className="text-gray-500 text-xl max-w-3xl mx-auto leading-relaxed font-medium">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 auto-rows-[320px]">
          {items?.map((item, i) => {
            let spanClass = "col-span-1 row-span-1";
            if (item.size === 'medium') spanClass = "md:col-span-2 row-span-1";
            if (item.size === 'large') spanClass = "md:col-span-2 row-span-2";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className={`relative group p-12 rounded-[56px] overflow-hidden transition-all duration-700 ${spanClass} flex flex-col justify-between border ${
                  item.dark 
                    ? 'bg-gray-950 text-white border-white/10' 
                    : 'bg-gray-50 text-gray-900 border-gray-100 hover:bg-white hover:shadow-[0_64px_128px_-12px_rgba(0,0,0,0.1)]'
                }`}
              >
                {item.image && (
                  <div className={`absolute inset-0 z-0 transition-all duration-700 group-hover:scale-110 ${item.dark ? 'opacity-20' : 'opacity-10 group-hover:opacity-20'}`}>
                    <img src={item.image} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${item.dark ? 'from-gray-950 via-gray-950/50' : 'from-gray-50 via-transparent'}`}></div>
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div 
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                        item.dark ? 'bg-white/10 text-white' : 'bg-white text-blue-600'
                      }`}
                    >
                      {item.icon || '✦'}
                    </div>
                    {item.badge && (
                      <span className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] bg-blue-600 text-white shadow-lg">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  
                  {item.tag && (
                    <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 ${
                      item.dark ? 'bg-white/10 text-white/70' : 'bg-blue-50 text-blue-600'
                    }`}>
                      {item.tag}
                    </span>
                  )}
                  
                  <h3 className="text-3xl font-black mb-4 tracking-tight leading-tight group-hover:text-blue-500 transition-colors">{item.title}</h3>
                  <p className={`font-medium leading-relaxed line-clamp-3 ${item.dark ? 'text-gray-400' : 'text-gray-500'}`}>{item.description}</p>
                </div>

                <div className="relative z-10 mt-8 flex items-end justify-between">
                  {item.stats && (
                    <div>
                      <div className="text-3xl font-black tracking-tighter">{item.stats.value}</div>
                      <div className={`text-[10px] font-black uppercase tracking-widest ${item.dark ? 'text-gray-500' : 'text-gray-400'}`}>{item.stats.label}</div>
                    </div>
                  )}
                  
                  {item.cta_text && (
                    <button className={`text-xs font-black uppercase tracking-[0.2em] flex items-center gap-3 group/btn py-3 px-6 rounded-2xl transition-all ${
                      item.dark ? 'bg-white text-gray-950 hover:bg-blue-500 hover:text-white' : 'text-blue-600 hover:bg-blue-50'
                    }`}>
                      {item.cta_text}
                      <span className="transition-transform group-hover/btn:translate-x-2">→</span>
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
