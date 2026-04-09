import React from 'react';
import { motion } from 'motion/react';

interface Metric {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon?: string;
  description?: string;
  comparisonLabel?: string;
  sparkline?: number[];
  trend?: 'up' | 'down' | 'stable';
  history?: { date: string, value: number }[];
  iconColor?: string;
}

export const DataMetricCard = ({ title, subtitle, metrics, primary_color = 'blue' }: any) => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-8xl font-black text-gray-900 mb-8 tracking-tighter leading-none">{title || 'Chỉ số hiệu quả'}</h2>
          {subtitle && <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {metrics?.map((metric: Metric, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="bg-gray-50 rounded-[64px] p-12 border border-gray-100 hover:bg-white hover:shadow-[0_64px_128px_-12px_rgba(0,0,0,0.1)] transition-all duration-700 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-[60px] -mr-16 -mt-16 group-hover:bg-blue-600/10 transition-all duration-700"></div>
              
              <div className="flex justify-between items-start mb-10 relative z-10">
                <div 
                  className="w-16 h-16 rounded-2xl bg-white shadow-xl shadow-gray-900/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-gray-50"
                  style={{ color: metric.iconColor || '#2563eb' }}
                >
                  {metric.icon ? (
                    <span className="text-2xl">{metric.icon}</span>
                  ) : (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                  )}
                </div>
                <div className={`flex items-center gap-1.5 px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest ${metric.isPositive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                  {metric.isPositive ? '▲' : '▼'} {metric.change}
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-3">{metric.label}</div>
                <div className="text-5xl font-black text-gray-900 tracking-tighter mb-6">{metric.value}</div>
                
                {metric.description && (
                  <p className="text-sm font-medium text-gray-500 mb-8 leading-relaxed line-clamp-2">{metric.description}</p>
                )}

                {metric.sparkline && (
                  <div className="flex items-end gap-1.5 h-16 mb-10">
                    {metric.sparkline.map((val, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${val}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + (i * 0.05), duration: 1, ease: "easeOut" }}
                        className={`flex-1 rounded-t-lg transition-all duration-500`}
                        style={{ 
                          backgroundColor: metric.isPositive ? '#22c55e' : '#ef4444',
                          opacity: 0.2 + (i / metric.sparkline!.length) * 0.8
                        }}
                      ></motion.div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-8 border-t border-gray-100 flex items-center justify-between relative z-10">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{metric.comparisonLabel || 'So với tháng trước'}</span>
                  {metric.trend && (
                    <span className={`text-[9px] font-black uppercase tracking-widest ${
                      metric.trend === 'up' ? 'text-green-500' : 
                      metric.trend === 'down' ? 'text-red-500' : 
                      'text-gray-400'
                    }`}>
                      Xu hướng: {metric.trend === 'up' ? 'Tăng trưởng' : metric.trend === 'down' ? 'Giảm nhẹ' : 'Ổn định'}
                    </span>
                  )}
                </div>
                <div className={`w-3 h-3 rounded-full shadow-lg ${metric.isPositive ? 'bg-green-500 animate-pulse shadow-green-500/20' : 'bg-red-500 shadow-red-500/20'}`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
