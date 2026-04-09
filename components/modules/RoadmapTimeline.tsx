import React from 'react';
import { motion } from 'motion/react';

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

export const RoadmapTimeline = ({ title, subtitle, items, primary_color = 'blue', variant = 'classic' }: any) => {
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

  const isModern = variant === 'modern';

  return (
    <section className={`py-32 ${isModern ? 'bg-white text-gray-900' : 'bg-gray-950 text-white'} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32">
          <h2 className={`text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8 ${isModern ? 'text-gray-900' : 'text-white'}`}>
            {title || 'Lộ trình phát triển'}
          </h2>
          {subtitle && <p className={`text-xl max-w-3xl mx-auto leading-relaxed font-medium ${isModern ? 'text-gray-500' : 'text-gray-400'}`}>{subtitle}</p>}
        </div>

        <div className="relative">
          {/* Vertical line on desktop */}
          <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-1 md:-translate-x-1/2 hidden md:block rounded-full ${
            isModern ? 'bg-gray-100' : 'bg-gradient-to-b from-blue-600/50 via-indigo-600/50 to-purple-600/50'
          }`}></div>
          
          <div className="space-y-32 md:space-y-0">
            {items?.map((item: RoadmapItem, index: number) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} md:py-24`}>
                <div className={`hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full z-10 flex items-center justify-center shadow-2xl ${
                  isModern ? 'bg-white border-4 border-gray-50' : 'bg-gray-950 border-4 border-white/10 shadow-[0_0_50px_rgba(37,99,235,0.2)]'
                }`}>
                  <div className={`w-6 h-6 rounded-full animate-pulse shadow-[0_0_20px_rgba(255,255,255,0.5)] ${getStatusColor(item.status)}`}></div>
                </div>
                
                <motion.div 
                   initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                   className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-24' : 'md:pr-24'} pl-12 md:pl-0 w-full`}
                >
                  <div className={`p-12 rounded-[64px] border transition-all duration-700 group relative overflow-hidden ${
                    isModern 
                      ? 'bg-gray-50 border-gray-100 hover:bg-white hover:shadow-2xl' 
                      : 'bg-white/5 backdrop-blur-2xl border-white/10 hover:border-blue-500/50'
                  }`}>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] -mr-32 -mt-32 group-hover:bg-blue-600/20 transition-all duration-700"></div>
                    
                    <div className="flex items-center justify-between mb-8 relative z-10">
                      <span className="text-lg font-black uppercase tracking-[0.4em] text-blue-400">{item.quarter}</span>
                      <span className={`text-[10px] px-5 py-2 rounded-2xl font-black uppercase tracking-widest ${
                        item.status === 'completed' ? 'bg-green-500 text-white' :
                        item.status === 'in-progress' ? 'bg-blue-500 text-white' :
                        isModern ? 'bg-gray-200 text-gray-500' : 'bg-white/10 text-gray-400'
                      }`}>
                        {getStatusLabel(item.status)}
                      </span>
                    </div>
                    
                    <h3 className={`text-3xl md:text-4xl font-black mb-6 tracking-tighter group-hover:text-blue-400 transition-colors leading-tight ${isModern ? 'text-gray-900' : 'text-white'}`}>{item.title}</h3>
                    <p className={`text-xl font-medium leading-relaxed mb-10 ${isModern ? 'text-gray-500' : 'text-gray-400'}`}>{item.description}</p>
                    
                    {item.impact && (
                      <div className={`mb-10 p-8 rounded-3xl border ${
                        isModern ? 'bg-blue-50 border-blue-100' : 'bg-blue-500/5 border-blue-500/10'
                      }`}>
                        <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-3">Tác động dự kiến:</div>
                        <p className={`text-sm font-medium italic ${isModern ? 'text-gray-600' : 'text-gray-300'}`}>"{item.impact}"</p>
                      </div>
                    )}

                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t relative z-10 ${isModern ? 'border-gray-100' : 'border-white/10'}`}>
                      {item.features && item.features.length > 0 && (
                        <div className="space-y-5">
                          <div className="text-[10px] font-black text-white/30 uppercase tracking-widest">Tính năng chính:</div>
                          <div className="space-y-4">
                            {item.features.map((feature, fIndex) => (
                              <div key={fIndex} className="flex items-center gap-4">
                                <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
                                <span className={`text-sm font-bold ${isModern ? 'text-gray-700' : 'text-gray-300'}`}>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {item.milestones && (
                        <div className="space-y-5">
                          <div className="text-[10px] font-black text-white/30 uppercase tracking-widest">Cột mốc:</div>
                          <div className="space-y-4">
                            {item.milestones.map((ms, mIndex) => (
                              <div key={mIndex} className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                  <div className={`w-5 h-5 rounded-lg flex items-center justify-center border transition-colors ${
                                    ms.completed ? 'bg-blue-500 border-blue-500' : isModern ? 'border-gray-200' : 'border-white/20'
                                  }`}>
                                    {ms.completed && <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>}
                                  </div>
                                  <span className={`text-xs font-bold ${ms.completed ? (isModern ? 'text-gray-900' : 'text-white') : 'text-gray-500'}`}>{ms.label}</span>
                                </div>
                                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{ms.date}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {item.team && (
                      <div className={`mt-10 pt-10 border-t flex items-center justify-between relative z-10 ${isModern ? 'border-gray-100' : 'border-white/10'}`}>
                        <div className="text-[10px] font-black text-white/30 uppercase tracking-widest">Đội ngũ phụ trách:</div>
                        <div className="flex -space-x-4">
                          {item.team.map((member, mIndex) => (
                            <img key={mIndex} src={member.avatar} alt={member.name} className={`w-12 h-12 rounded-full border-4 object-cover shadow-2xl ${isModern ? 'border-white' : 'border-gray-900'}`} title={member.name} referrerPolicy="no-referrer" />
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
