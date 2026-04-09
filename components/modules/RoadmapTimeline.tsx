import React from 'react';
import { motion } from 'framer-motion';

interface RoadmapItem {
  quarter: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  features?: string[];
}

export const RoadmapTimeline = ({ title, subtitle, items, primary_color = 'blue' }: any) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-blue-500';
      case 'planned': return 'bg-gray-300';
      default: return 'bg-gray-300';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed': return 'Hoàn thành';
      case 'in-progress': return 'Đang thực hiện';
      case 'planned': return 'Kế hoạch';
      default: return 'Kế hoạch';
    }
  };

  return (
    <section className="py-24 bg-gray-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-6">{title || 'Lộ trình phát triển'}</h2>
          {subtitle && <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">{subtitle}</p>}
        </div>

        <div className="relative">
          {/* Vertical line on desktop */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px hidden md:block"></div>
          
          <div className="space-y-20 md:space-y-0">
            {items?.map((item: RoadmapItem, index: number) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-950 border border-white/10 z-10 flex items-center justify-center">
                  <div className={`w-3 h-3 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)] ${getStatusColor(item.status)}`}></div>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-20' : 'md:pr-20'} pl-12 md:pl-0`}
                >
                  <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[40px] border border-white/10 hover:border-blue-500/50 transition-all duration-500 group">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm font-black uppercase tracking-[0.3em] text-blue-400">{item.quarter}</span>
                      <span className={`text-[10px] px-3 py-1 rounded-lg font-black uppercase tracking-widest ${
                        item.status === 'completed' ? 'bg-green-500/10 text-green-500' :
                        item.status === 'in-progress' ? 'bg-blue-500/10 text-blue-500' :
                        'bg-white/5 text-gray-500'
                      }`}>
                        {getStatusLabel(item.status)}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-blue-400 transition-colors">{item.title}</h3>
                    <p className="text-gray-400 font-medium leading-relaxed mb-6">{item.description}</p>
                    
                    {item.features && item.features.length > 0 && (
                      <div className="space-y-3 pt-6 border-t border-white/5">
                        <div className="text-[10px] font-black text-white/30 uppercase tracking-widest">Tính năng chính:</div>
                        <div className="grid grid-cols-1 gap-2">
                          {item.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                              <span className="text-xs font-bold text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
