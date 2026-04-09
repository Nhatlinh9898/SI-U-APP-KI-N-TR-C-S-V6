import React from 'react';
import { motion } from 'framer-motion';

interface RoadmapItem {
  quarter: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
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
    <section className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-400">{subtitle}</p>}
        </div>

        <div className="relative">
          {/* Vertical line on mobile, horizontal on desktop */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 md:-translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-0">
            {items?.map((item: RoadmapItem, index: number) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gray-900 border-4 border-gray-700 z-10">
                  <div className={`w-full h-full rounded-full ${getStatusColor(item.status)}`}></div>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'} pl-10 md:pl-0`}
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-sm font-bold uppercase tracking-widest text-${primary_color}-400`}>{item.quarter}</span>
                      <span className={`text-[10px] px-2 py-1 rounded-full font-bold uppercase ${
                        item.status === 'completed' ? 'bg-green-500/10 text-green-500' :
                        item.status === 'in-progress' ? 'bg-blue-500/10 text-blue-500' :
                        'bg-gray-500/10 text-gray-500'
                      }`}>
                        {getStatusLabel(item.status)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
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
