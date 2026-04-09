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
}

interface BentoGridProps {
  title: string;
  subtitle?: string;
  items: BentoItem[];
  primary_color?: string;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ title, subtitle, items, primary_color = '#f59e0b' }) => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
          >
            {title}
          </motion.h2>
          {subtitle && <p className="text-gray-500 text-xl max-w-3xl mx-auto leading-relaxed">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[240px]">
          {items?.map((item, i) => {
            let spanClass = "col-span-1 row-span-1";
            if (item.size === 'medium') spanClass = "md:col-span-2 row-span-1";
            if (item.size === 'large') spanClass = "md:col-span-2 row-span-2";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative group p-10 rounded-[48px] bg-gray-50 border border-gray-100 overflow-hidden hover:bg-white hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 ${spanClass} flex flex-col justify-between`}
              >
                {item.image && (
                  <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <img src={item.image} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                )}
                
                <div className="relative z-10">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3"
                    style={{ backgroundColor: `${primary_color}15`, color: primary_color }}
                  >
                    {item.icon || '✦'}
                  </div>
                  
                  {item.tag && (
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 bg-gray-200 text-gray-600">
                      {item.tag}
                    </span>
                  )}
                  
                  <h3 className="text-2xl font-black text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed line-clamp-3">{item.description}</p>
                </div>

                {item.cta_text && (
                  <div className="relative z-10 mt-6">
                    <button className="text-sm font-black uppercase tracking-widest flex items-center gap-2 group/btn" style={{ color: primary_color }}>
                      {item.cta_text}
                      <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                    </button>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
