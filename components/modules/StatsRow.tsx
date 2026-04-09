import React from 'react';
import { motion } from 'motion/react';

interface Stat {
  label: string;
  value: string;
  suffix?: string;
  description?: string;
  trend?: { value: string, isUp: boolean };
}

interface StatsRowProps {
  stats: Stat[];
  primary_color?: string;
}

export const StatsRow: React.FC<StatsRowProps> = ({ stats, primary_color = '#f59e0b' }) => {
  return (
    <div className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24">
          {stats?.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center group"
            >
              {stat.trend && (
                <div className={`mb-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${stat.trend.isUp ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                  <svg className={`w-3 h-3 ${!stat.trend.isUp ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
                  {stat.trend.value}
                </div>
              )}
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-6xl md:text-8xl font-black text-gray-900 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span className="text-2xl md:text-4xl font-black text-blue-600">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <div className="space-y-3">
                <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.3em]">
                  {stat.label}
                </h4>
                {stat.description && (
                  <p className="text-gray-500 text-sm font-medium max-w-[220px] leading-relaxed">
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
