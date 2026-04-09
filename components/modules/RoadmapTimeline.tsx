import React from 'react';
import { motion } from 'framer-motion';

interface RoadmapItem {
  quarter: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  features?: string[];
  impact?: string;
  team?: { name: string, avatar: string }[];
  milestones?: { label: string, date: string, completed: boolean }[];
}

export const RoadmapTimeline = ({ title, subtitle, items, primary_color = 'blue' }: any) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-blue-500';
      case 'planned': return 'bg-gray-500';
      default: return 'bg-gray-500';
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
    <section className="py-32 bg-gray-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8">{title || 'Lộ trình phát triển'}</h2>
          {subtitle && <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">{subtitle}</p>}
        </div>

        <div className="relative">
          {/* Vertical line on desktop */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600/50 via-indigo-600/50 to-purple-600/50 md:-translate-x-1/2 hidden md:block rounded-full"></div>
          
          <div className="space-y-32 md:space-y-0">
            {items?.map((item: RoadmapItem, index: number) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} md:py-24`}>
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gray-950 border-4 border-white/10 z-10 flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.2)]">
                  <div className={`w-6 h-6 rounded-full animate-pulse shadow-[0_0_20px_rgba(255,255,255,0.5)] ${getStatusColor(item.status)}`}></div>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                  className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-24' : 'md:pr-24'} pl-12 md:pl-0 w-full`}
                >
                  <div className="bg-white/5 backdrop-blur-2xl p-12 rounded-[64px] border border-white/10 hover:border-blue-500/50 transition-all duration-700 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] -mr-32 -mt-32 group-hover:bg-blue-600/20 transition-all duration-700"></div>
                    
                    <div className="flex items-center justify-between mb-8 relative z-10">
                      <span className="text-lg font-black uppercase tracking-[0.4em] text-blue-400">{item.quarter}</span>
                      <span className={`text-[10px] px-4 py-1.5 rounded-full font-black uppercase tracking-widest ${
                        item.status === 'completed' ? 'bg-green-500 text-white' :
                        item.status === 'in-progress' ? 'bg-blue-500 text-white' :
                        'bg-white/10 text-gray-400'
                      }`}>
                        {getStatusLabel(item.status)}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter group-hover:text-blue-400 transition-colors leading-tight">{item.title}</h3>
                    <p className="text-xl text-gray-400 font-medium leading-relaxed mb-10">{item.description}</p>
                    
                    {item.impact && (
                      <div className="mb-10 p-6 bg-blue-500/5 rounded-3xl border border-blue-500/10">
                        <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Tác động dự kiến:</div>
                        <p className="text-sm text-gray-300 font-medium italic">"{item.impact}"</p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-white/10 relative z-10">
                      {item.features && item.features.length > 0 && (
                        <div className="space-y-4">
                          <div className="text-[10px] font-black text-white/30 uppercase tracking-widest">Tính năng chính:</div>
                          <div className="space-y-3">
                            {item.features.map((feature, fIndex) => (
                              <div key={fIndex} className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
                                <span className="text-sm font-bold text-gray-300">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {item.milestones && (
                        <div className="space-y-4">
                          <div className="text-[10px] font-black text-white/30 uppercase tracking-widest">Cột mốc:</div>
                          <div className="space-y-3">
                            {item.milestones.map((ms, mIndex) => (
                              <div key={mIndex} className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3">
                                  <div className={`w-4 h-4 rounded-md flex items-center justify-center border ${ms.completed ? 'bg-blue-500 border-blue-500' : 'border-white/20'}`}>
                                    {ms.completed && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>}
                                  </div>
                                  <span className={`text-xs font-bold ${ms.completed ? 'text-white' : 'text-gray-500'}`}>{ms.label}</span>
                                </div>
                                <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest">{ms.date}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {item.team && (
                      <div className="mt-10 pt-10 border-t border-white/10 flex items-center justify-between relative z-10">
                        <div className="text-[10px] font-black text-white/30 uppercase tracking-widest">Đội ngũ phụ trách:</div>
                        <div className="flex -space-x-3">
                          {item.team.map((member, mIndex) => (
                            <img key={mIndex} src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full border-2 border-gray-900 object-cover shadow-xl" title={member.name} referrerPolicy="no-referrer" />
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
