import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ItineraryDay {
  day: string;
  title: string;
  activities: {
    time: string;
    title: string;
    description: string;
    icon?: string;
    location?: string;
    transport?: string;
  }[];
}

export const ItinerarySection = ({ title, subtitle, days, primary_color = 'blue' }: any) => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">{title || 'Lịch trình chi tiết'}</h2>
          {subtitle && <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">{subtitle}</p>}
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3 flex lg:flex-col overflow-x-auto lg:overflow-visible gap-4 pb-4 lg:pb-0 hide-scrollbar">
            {days?.map((day: ItineraryDay, index: number) => (
              <button
                key={index}
                onClick={() => setActiveDay(index)}
                className={`flex-shrink-0 lg:w-full p-8 rounded-[32px] text-left transition-all duration-500 border-2 ${
                  activeDay === index 
                    ? `bg-blue-600 text-white border-blue-600 shadow-2xl shadow-blue-600/30 scale-[1.02]` 
                    : 'bg-white text-gray-600 border-gray-100 hover:border-blue-200'
                }`}
              >
                <div className={`text-[10px] font-black uppercase tracking-[0.2em] mb-2 ${activeDay === index ? 'text-white/70' : 'text-gray-400'}`}>
                  {day.day}
                </div>
                <div className="text-lg font-black tracking-tight">{day.title}</div>
              </button>
            ))}
          </div>

          <div className="lg:w-2/3 bg-gray-50/50 rounded-[48px] border border-gray-100 p-10 md:p-16">
            <div className="space-y-12">
              {days[activeDay]?.activities?.map((activity: any, index: number) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-8 relative group"
                >
                  {index !== days[activeDay].activities.length - 1 && (
                    <div className="absolute left-7 top-16 bottom-[-48px] w-px bg-gray-200"></div>
                  )}
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-xl shadow-gray-900/5 text-blue-600 flex items-center justify-center flex-shrink-0 z-10 font-black text-xs border border-gray-100 group-hover:scale-110 transition-transform duration-500">
                      {activity.time}
                    </div>
                  </div>
                  <div className="flex-1 pb-12">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {activity.location && (
                        <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[9px] font-black uppercase tracking-widest rounded-lg flex items-center gap-1">
                          📍 {activity.location}
                        </span>
                      )}
                      {activity.transport && (
                        <span className="px-3 py-1 bg-gray-900 text-white text-[9px] font-black uppercase tracking-widest rounded-lg flex items-center gap-1">
                          🚗 {activity.transport}
                        </span>
                      )}
                    </div>
                    <h4 className="text-2xl font-black text-gray-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">{activity.title}</h4>
                    <p className="text-gray-500 font-medium leading-relaxed">{activity.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
