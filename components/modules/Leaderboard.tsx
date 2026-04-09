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
}

export const Leaderboard = ({ title, subtitle, items, primary_color = 'blue' }: any) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">{title || 'Bảng xếp hạng'}</h2>
          {subtitle && <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">{subtitle}</p>}
        </div>

        <div className="bg-white rounded-[48px] shadow-[0_64px_128px_-12px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
          <div className="p-8 sm:p-12">
            <div className="space-y-6">
              {items?.map((item: RankItem, index: number) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col sm:flex-row items-center justify-between p-8 rounded-[32px] transition-all duration-500 group ${
                    index === 0 ? 'bg-blue-50/50 border border-blue-100 shadow-lg shadow-blue-600/5' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 w-full sm:w-auto">
                    <div className="relative">
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center font-black text-xl shadow-xl ${
                        index === 0 ? 'bg-yellow-400 text-white scale-110' :
                        index === 1 ? 'bg-gray-300 text-white' :
                        index === 2 ? 'bg-amber-600 text-white' :
                        'bg-gray-50 text-gray-400 border border-gray-100'
                      }`}>
                        {item.rank}
                      </div>
                      {index === 0 && <div className="absolute -top-2 -right-2 text-2xl animate-bounce">👑</div>}
                    </div>
                    
                    <div className="relative group-hover:scale-105 transition-transform duration-500">
                      <img src={item.avatar} alt={item.name} className="w-20 h-20 rounded-[24px] object-cover border-4 border-white shadow-2xl" referrerPolicy="no-referrer" />
                      <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg ${
                        item.trend === 'up' ? 'bg-green-500' :
                        item.trend === 'down' ? 'bg-red-500' :
                        'bg-gray-400'
                      }`}>
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {item.trend === 'up' ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 10l7-7m0 0l7 7m-7-7v18"></path> :
                           item.trend === 'down' ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path> :
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M18 12H6"></path>}
                        </svg>
                      </div>
                    </div>

                    <div className="text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row items-center gap-2 mb-2">
                        <h4 className="text-xl font-black text-gray-900 tracking-tight">{item.name}</h4>
                        {item.category && (
                          <span className="px-3 py-1 bg-gray-900 text-white text-[9px] font-black uppercase tracking-widest rounded-lg">
                            {item.category}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                        {item.achievements?.map((achievement, aIndex) => (
                          <span key={aIndex} className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-md">
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 sm:mt-0 text-center sm:text-right">
                    <div className={`text-4xl font-black tracking-tighter ${index === 0 ? 'text-blue-600' : 'text-gray-900'}`}>{item.score}</div>
                    <div className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mt-1">Điểm tích lũy</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50/50 p-10 text-center border-t border-gray-100">
            <button className="px-8 py-4 bg-white text-gray-900 text-sm font-black uppercase tracking-widest rounded-2xl border border-gray-200 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-500 shadow-xl shadow-gray-900/5">
              Xem bảng xếp hạng đầy đủ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
