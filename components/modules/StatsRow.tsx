import React from 'react';
import { motion } from 'motion/react';

interface Stat {
  label: string;
  value: string;
  suffix?: string;
  description?: string;
}

interface StatsRowProps {
  stats: Stat[];
  primary_color?: string;
}

export const StatsRow: React.FC<StatsRowProps> = ({ stats, primary_color = '#f59e0b' }) => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats?.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter">
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span className="text-2xl md:text-3xl font-black" style={{ color: primary_color }}>
                    {stat.suffix}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-black text-gray-400 uppercase tracking-[0.2em]">
                  {stat.label}
                </h4>
                {stat.description && (
                  <p className="text-gray-500 text-xs font-medium max-w-[200px] leading-relaxed">
                    {stat.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
