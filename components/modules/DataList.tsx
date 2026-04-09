import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

interface DataListProps {
  title?: string;
  subtitle?: string;
  items?: {
    label: string;
    url?: string;
    icon?: string;
    description?: string;
  }[];
  primary_color?: string;
}

export const DataList: React.FC<DataListProps> = ({ 
  title = "My Links", 
  subtitle = "Check out my latest content and resources", 
  items = [],
  primary_color = "#f59e0b"
}) => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight">{title}</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="space-y-4">
          {items.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block p-4 md:p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/80 transition-all group relative overflow-hidden"
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                style={{ backgroundColor: primary_color }}
              />
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {item.icon && (
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors">{item.label}</h3>
                    {item.description && (
                      <p className="text-sm text-slate-400 mt-1">{item.description}</p>
                    )}
                  </div>
                </div>
                <ExternalLink size={20} className="text-slate-500 group-hover:text-white transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
