import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  icon?: string;
  tags?: string[];
}

export const TimelineSection = ({ title, subtitle, items, primary_color = 'blue' }: any) => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">{title || 'Hành trình phát triển'}</h2>
          {subtitle && <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">{subtitle}</p>}
        </div>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-100 md:-translate-x-px"></div>
          
          <div className="space-y-24">
            {items?.map((item: TimelineItem, index: number) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-10 h-10 bg-white border-4 border-blue-600 rounded-full md:-translate-x-5 z-10 flex items-center justify-center shadow-xl">
                  {item.icon ? (
                    <span className="text-sm">{item.icon}</span>
                  ) : (
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  )}
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                  <div className={`bg-white p-10 rounded-[40px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.06)] border border-gray-50 hover:shadow-[0_48px_96px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 group ${index % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                    <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end'}`}>
                      {item.tags?.map((tag, tIndex) => (
                        <span key={tIndex} className="px-3 py-1 bg-blue-50 text-blue-600 text-[9px] font-black uppercase tracking-widest rounded-lg">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="text-blue-600 font-black text-sm uppercase tracking-[0.2em] mb-2">{item.date}</div>
                    <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">{item.title}</h3>
                    <p className="text-gray-500 font-medium leading-relaxed">{item.description}</p>
                  </div>
                </div>
                
                {/* Empty space for desktop */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
