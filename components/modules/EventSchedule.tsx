import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Session {
  time: string;
  title: string;
  speaker?: string;
  speakerImage?: string;
  speakerRole?: string;
  speakerCompany?: string;
  location?: string;
  description?: string;
  tags?: string[];
  type?: 'Workshop' | 'Keynote' | 'Panel' | 'Break';
  isLive?: boolean;
}

interface Day {
  date: string;
  title: string;
  sessions: Session[];
}

export const EventSchedule = ({ title, subtitle, days, primary_color = 'blue' }: any) => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section className="py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-8xl font-black text-gray-900 mb-8 tracking-tighter leading-none">{title || 'Lịch trình sự kiện'}</h2>
            {subtitle && <p className="text-xl text-gray-500 leading-relaxed font-medium">{subtitle}</p>}
          </div>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-white text-gray-900 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl border border-gray-100 hover:bg-gray-900 hover:text-white transition-all">Tải lịch trình (PDF)</button>
          </div>
        </div>
        
        {days && days.length > 0 && (
          <div className="bg-white rounded-[64px] shadow-[0_64px_128px_-12px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden">
            <div className="flex overflow-x-auto border-b border-gray-100 hide-scrollbar bg-gray-50/50 p-4 gap-4">
              {days.map((day: Day, index: number) => (
                <button
                  key={index}
                  onClick={() => setActiveDay(index)}
                  className={`flex-1 min-w-[240px] py-10 px-10 rounded-[40px] text-center font-black text-sm transition-all duration-700 relative overflow-hidden ${
                    activeDay === index
                      ? 'bg-white text-blue-600 shadow-2xl scale-105'
                      : 'text-gray-400 hover:text-gray-600 hover:bg-white/50'
                  }`}
                >
                  <div className="uppercase tracking-[0.3em] mb-2">{day.title}</div>
                  <div className="text-[10px] opacity-60 uppercase tracking-widest">{day.date}</div>
                  {activeDay === index && (
                    <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-1.5 bg-blue-600" />
                  )}
                </button>
              ))}
            </div>
            
            <div className="p-12 md:p-24">
              <div className="space-y-20">
                {days[activeDay]?.sessions?.map((session: Session, index: number) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col md:flex-row gap-12 md:gap-24 relative group"
                  >
                    <div className="md:w-1/4 flex-shrink-0">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-4xl font-black text-gray-900 tracking-tighter">{session.time}</div>
                        {session.isLive && (
                          <span className="flex h-3 w-3 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                          </span>
                        )}
                      </div>
                      {session.location && (
                        <div className="flex items-center gap-3 text-gray-400 text-[10px] font-black uppercase tracking-widest">
                          <div className="w-8 h-8 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
                          </div>
                          {session.location}
                        </div>
                      )}
                    </div>
                    <div className="md:w-3/4 pb-20 border-b border-gray-50 last:border-0 last:pb-0">
                      <div className="flex flex-wrap items-center gap-3 mb-6">
                        {session.type && (
                          <span className="px-4 py-1.5 bg-gray-900 text-white text-[9px] font-black uppercase tracking-widest rounded-full">
                            {session.type}
                          </span>
                        )}
                        {session.tags?.map((tag, tIndex) => (
                          <span key={tIndex} className="px-4 py-1.5 bg-blue-50 text-blue-600 text-[9px] font-black uppercase tracking-widest rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h4 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 tracking-tighter group-hover:text-blue-600 transition-colors duration-500 leading-tight">{session.title}</h4>
                      
                      {session.speaker && (
                        <div className="flex items-center gap-6 mb-8 p-6 bg-gray-50 rounded-[32px] border border-gray-100 self-start inline-flex">
                          {session.speakerImage && (
                            <img src={session.speakerImage} alt={session.speaker} className="w-16 h-16 rounded-2xl object-cover shadow-xl" referrerPolicy="no-referrer" />
                          )}
                          <div>
                            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Diễn giả</div>
                            <div className="text-lg font-black text-gray-900 tracking-tight leading-none mb-1">{session.speaker}</div>
                            <div className="text-xs font-bold text-gray-500">{session.speakerRole} {session.speakerCompany && `@ ${session.speakerCompany}`}</div>
                          </div>
                        </div>
                      )}
                      
                      {session.description && (
                        <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-3xl">{session.description}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
