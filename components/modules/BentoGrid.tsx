import React from 'react';
import { motion } from 'motion/react';

interface BentoItem {
  title: string;
  description: string;
  icon?: string;
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
    <div className="py-20 max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight"
        >
          {title}
        </motion.h2>
        {subtitle && <p className="text-slate-400 text-lg max-w-2xl mx-auto">{subtitle}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
        {items?.map((item, i) => {
          // Determine span based on size
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
              className={`relative group p-6 rounded-3xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm overflow-hidden hover:border-slate-700 transition-all ${spanClass} flex flex-col justify-between`}
            >
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${primary_color}, transparent 70%)` }}
              />
              
              <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-lg"
                style={{ backgroundColor: `${primary_color}15`, color: primary_color, border: `1px solid ${primary_color}30` }}
              >
                {item.icon || '✦'}
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
