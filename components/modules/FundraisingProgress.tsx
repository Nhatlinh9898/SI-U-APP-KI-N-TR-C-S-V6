import React from 'react';
import { motion } from 'framer-motion';

export const FundraisingProgress = ({ title, subtitle, raised, goal, currency = '$', backers, daysLeft, milestones, recentBackers, videoUrl, tags, primary_color = 'blue' }: any) => {
  const percentage = Math.min(Math.round((raised / goal) * 100), 100);
  
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[64px] shadow-[0_64px_128px_-12px_rgba(0,0,0,0.1)] border border-gray-100 p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-3 bg-gray-100">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: `${percentage}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.5)]"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tags?.map((tag: string, i: number) => (
              <span key={i} className="px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {title && <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter">{title}</h2>}
          {subtitle && <p className="text-xl text-gray-500 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">{subtitle}</p>}
          
          <div className="flex flex-col items-center justify-center mb-12">
            <div className="text-6xl md:text-9xl font-black text-gray-900 tracking-tighter mb-4">
              {currency}{raised?.toLocaleString()}
            </div>
            <div className="text-xl text-gray-400 font-bold tracking-tight">
              đã huy động được từ mục tiêu <span className="text-gray-900">{currency}{goal?.toLocaleString()}</span>
            </div>
          </div>
          
          <div className="w-full bg-gray-100 rounded-full h-6 mb-12 overflow-hidden p-1.5">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: `${percentage}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="bg-blue-600 h-full rounded-full shadow-lg"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-gray-50 py-12 mb-12">
            <div className="group">
              <div className="text-4xl font-black text-gray-900 tracking-tighter mb-1 group-hover:text-blue-600 transition-colors">{percentage}%</div>
              <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Hoàn thành</div>
            </div>
            <div className="group">
              <div className="text-4xl font-black text-gray-900 tracking-tighter mb-1 group-hover:text-blue-600 transition-colors">{backers?.toLocaleString()}</div>
              <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Người ủng hộ</div>
            </div>
            <div className="group">
              <div className="text-4xl font-black text-gray-900 tracking-tighter mb-1 group-hover:text-blue-600 transition-colors">{daysLeft}</div>
              <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Ngày còn lại</div>
            </div>
          </div>

          {milestones && milestones.length > 0 && (
            <div className="mb-16 text-left">
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-8 text-center">Cột mốc tác động</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {milestones.map((ms: any, i: number) => (
                  <div key={i} className={`p-6 rounded-3xl border transition-all ${raised >= ms.amount ? 'bg-blue-50 border-blue-100' : 'bg-gray-50 border-gray-100 opacity-60'}`}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-black text-gray-900">{currency}{ms.amount?.toLocaleString()}</span>
                      {raised >= ms.amount && <span className="text-blue-600">✓</span>}
                    </div>
                    <p className="text-sm font-bold text-gray-600">{ms.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex -space-x-4">
              {recentBackers?.map((backer: any, i: number) => (
                <div key={i} className="w-12 h-12 rounded-2xl border-4 border-white overflow-hidden shadow-lg">
                  <img src={backer.avatar} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-2xl border-4 border-white bg-gray-900 text-white flex items-center justify-center text-xs font-black shadow-lg">
                +{backers - (recentBackers?.length || 0)}
              </div>
            </div>
            
            <button className="w-full md:w-auto px-16 py-6 bg-blue-600 text-white text-xs font-black rounded-[32px] hover:scale-105 transition-all shadow-2xl shadow-blue-600/30 uppercase tracking-[0.2em]">
              Đóng góp ngay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
