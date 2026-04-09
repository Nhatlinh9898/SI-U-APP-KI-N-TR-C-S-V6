import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  icon?: string;
  tags?: string[];
  media?: { type: 'image' | 'video', url: string, thumbnail?: string };
  location?: string;
  participants?: { name: string, avatar: string }[];
}

export const TimelineSection = ({ title, subtitle, items, primary_color = 'blue' }: any) => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32">
          <h2 className="text-5xl md:text-8xl font-black text-gray-900 mb-8 tracking-tighter leading-none">{title || 'Hành trình phát triển'}</h2>
          {subtitle && <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium">{subtitle}</p>}
        </div>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600/50 via-indigo-600/50 to-purple-600/50 md:-translate-x-1/2 rounded-full"></div>
          
          <div className="space-y-48 md:space-y-64">
            {items?.map((item: TimelineItem, index: number) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-16 h-16 bg-white border-8 border-gray-950 rounded-[24px] md:-translate-x-8 z-10 flex items-center justify-center shadow-2xl group">
                  {item.icon ? (
                    <span className="text-2xl group-hover:scale-125 transition-transform duration-500">{item.icon}</span>
                  ) : (
                    <div className="w-4 h-4 bg-blue-600 rounded-full animate-pulse"></div>
                  )}
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${index % 2 === 0 ? 'md:pl-24' : 'md:pr-24'}`}>
                  <div className={`bg-white p-12 rounded-[64px] shadow-[0_64px_128px_-12px_rgba(0,0,0,0.1)] border border-gray-100 hover:shadow-[0_80px_160px_-12px_rgba(0,0,0,0.15)] transition-all duration-700 group ${index % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                    <div className={`flex flex-wrap gap-3 mb-8 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end'}`}>
                      {item.tags?.map((tag, tIndex) => (
                        <span key={tIndex} className="px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="text-blue-600 font-black text-lg uppercase tracking-[0.3em] mb-4 leading-none">{item.date}</div>
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tighter group-hover:text-blue-600 transition-colors leading-tight">{item.title}</h3>
                    
                    {item.location && (
                      <div className={`flex items-center gap-2 text-gray-400 text-[10px] font-black uppercase tracking-widest mb-6 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end'}`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
                        {item.location}
                      </div>
                    )}

                    <p className="text-xl text-gray-500 font-medium leading-relaxed mb-10">{item.description}</p>
                    
                    {item.media && (
                      <div className="mb-10 rounded-[40px] overflow-hidden shadow-2xl aspect-video relative group/media">
                        <img src={item.media.type === 'image' ? item.media.url : item.media.thumbnail} alt={item.title} className="w-full h-full object-cover group-hover/media:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                        {item.media.type === 'video' && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl">
                              <svg className="w-6 h-6 text-blue-600 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {item.participants && (
                      <div className={`flex flex-col gap-4 pt-10 border-t border-gray-50 ${index % 2 === 0 ? 'items-start' : 'md:items-end'}`}>
                        <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Người tham gia:</div>
                        <div className="flex -space-x-3">
                          {item.participants.map((p, pIndex) => (
                            <img key={pIndex} src={p.avatar} alt={p.name} className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-xl" title={p.name} referrerPolicy="no-referrer" />
                          ))}
                        </div>
                      </div>
                    )}
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
