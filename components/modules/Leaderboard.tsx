import React from 'react';
import { motion } from 'framer-motion';

interface RankItem {
  rank: number;
  name: string;
  score: string;
  avatar: string;
  trend: 'up' | 'down' | 'stable';
  category?: string;
  achievements?: string[];
  pointsHistory?: number[];
  lastActive?: string;
  badges?: { icon: string, label: string }[];
}

export const Leaderboard = ({ title, subtitle, items, primary_color = 'blue' }: any) => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-8xl font-black text-gray-900 mb-8 tracking-tighter leading-none">{title || 'Bảng xếp hạng'}</h2>
          {subtitle && <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium">{subtitle}</p>}
        </div>

        <div className="bg-white rounded-[64px] shadow-[0_64px_128px_-12px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden">
          <div className="p-12 sm:p-20">
            <div className="space-y-8">
              {items?.map((item: RankItem, index: number) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                  className={`flex flex-col lg:flex-row items-center justify-between p-10 rounded-[48px] transition-all duration-700 group border-2 ${
                    index === 0 ? 'bg-blue-50/50 border-blue-200 shadow-2xl scale-105 z-10' : 'bg-gray-50/50 border-transparent hover:bg-white hover:border-gray-200'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full lg:w-auto">
                    <div className="relative">
                      <div className={`w-20 h-20 rounded-3xl flex items-center justify-center font-black text-3xl shadow-2xl ${
                        index === 0 ? 'bg-yellow-400 text-white rotate-6' :
                        index === 1 ? 'bg-gray-300 text-white -rotate-3' :
                        index === 2 ? 'bg-amber-600 text-white rotate-3' :
                        'bg-white text-gray-400 border border-gray-100'
                      }`}>
                        {item.rank}
                      </div>
                      {index === 0 && <div className="absolute -top-4 -right-4 text-4xl animate-bounce">👑</div>}
                    </div>
                    
                    <div className="relative group-hover:scale-110 transition-transform duration-700">
                      <img src={item.avatar} alt={item.name} className="w-28 h-28 rounded-[40px] object-cover border-8 border-white shadow-2xl" referrerPolicy="no-referrer" />
                      <div className={`absolute -bottom-3 -right-3 w-10 h-10 rounded-2xl flex items-center justify-center shadow-xl ${
                        item.trend === 'up' ? 'bg-green-500' :
                        item.trend === 'down' ? 'bg-red-500' :
                        'bg-gray-400'
                      }`}>
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {item.trend === 'up' ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 10l7-7m0 0l7 7m-7-7v18"></path> :
                           item.trend === 'down' ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path> :
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M18 12H6"></path>}
                        </svg>
                      </div>
                    </div>

                    <div className="text-center lg:text-left">
                      <div className="flex flex-col lg:flex-row items-center gap-4 mb-4">
                        <h4 className="text-2xl font-black text-gray-900 tracking-tight">{item.name}</h4>
                        {item.category && (
                          <span className="px-4 py-1.5 bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                            {item.category}
                          </span>
                        )}
                        {item.lastActive && (
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Hoạt động: {item.lastActive}</span>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                        {item.badges?.map((badge, bIndex) => (
                          <div key={bIndex} className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-xl border border-gray-100 shadow-sm" title={badge.label}>
                            <span className="text-base">{badge.icon}</span>
                            <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">{badge.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10 lg:mt-0 flex flex-col items-center lg:items-end gap-6">
                    <div className="text-right">
                      <div className={`text-5xl md:text-6xl font-black tracking-tighter leading-none ${index === 0 ? 'text-blue-600' : 'text-gray-900'}`}>{item.score}</div>
                      <div className="text-[10px] text-gray-400 font-black uppercase tracking-[0.3em] mt-2">Điểm tích lũy</div>
                    </div>
                    
                    {item.pointsHistory && (
                      <div className="flex items-end gap-1 h-12">
                        {item.pointsHistory.map((p, pIndex) => (
                          <div 
                            key={pIndex} 
                            className="w-2 bg-blue-600/20 rounded-full group-hover:bg-blue-600 transition-colors" 
                            style={{ height: `${(p / Math.max(...item.pointsHistory)) * 100}%` }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50/50 p-12 text-center border-t border-gray-100">
            <button className="px-12 py-6 bg-white text-gray-900 text-sm font-black uppercase tracking-[0.2em] rounded-[32px] border-4 border-gray-100 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-700 shadow-2xl">
              Xem bảng xếp hạng đầy đủ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
