import React from 'react';
import { motion } from 'motion/react';

interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

interface StatsRowProps {
  stats: Stat[];
  primary_color?: string;
}

export const StatsRow: React.FC<StatsRowProps> = ({ stats, primary_color = '#f59e0b' }) => {
  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-800/50">
        {stats?.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center justify-center text-center px-4"
          >
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl md:text-6xl font-black text-white tracking-tighter drop-shadow-lg">
                {stat.value}
              </span>
              {stat.suffix && (
                <span className="text-xl md:text-2xl font-bold" style={{ color: primary_color }}>
                  {stat.suffix}
                </span>
              )}
            </div>
            <span className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
