import React, { useState } from 'react';

interface Session {
  time: string;
  title: string;
  speaker?: string;
  speakerImage?: string;
  location?: string;
  description?: string;
  tags?: string[];
}

interface Day {
  date: string;
  title: string;
  sessions: Session[];
}

export const EventSchedule = ({ title, subtitle, days, primary_color = 'blue' }: any) => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">{title || 'Lịch trình sự kiện'}</h2>
          {subtitle && <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">{subtitle}</p>}
        </div>
        
        {days && days.length > 0 && (
          <div className="bg-white rounded-[48px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
            <div className="flex overflow-x-auto border-b border-gray-100 hide-scrollbar bg-gray-50/50">
              {days.map((day: Day, index: number) => (
                <button
                  key={index}
                  onClick={() => setActiveDay(index)}
                  className={`flex-1 min-w-[200px] py-8 px-8 text-center border-b-4 font-black text-sm transition-all duration-500 ${
                    activeDay === index
                      ? 'border-blue-600 text-blue-600 bg-white'
                      : 'border-transparent text-gray-400 hover:text-gray-600 hover:bg-gray-100/50'
                  }`}
                >
                  <div className="uppercase tracking-[0.2em] mb-1">{day.title}</div>
                  <div className="text-[10px] opacity-60 uppercase tracking-widest">{day.date}</div>
                </button>
              ))}
            </div>
            
            <div className="p-8 md:p-16">
              <div className="space-y-12">
                {days[activeDay]?.sessions?.map((session: Session, index: number) => (
                  <div key={index} className="flex flex-col md:flex-row gap-8 md:gap-16 relative group">
                    <div className="md:w-1/4 flex-shrink-0">
                      <div className="text-2xl font-black text-blue-600 tracking-tighter">{session.time}</div>
                      {session.location && (
                        <div className="flex items-center gap-2 mt-2 text-gray-400 text-xs font-bold uppercase tracking-widest">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
                          {session.location}
                        </div>
                      )}
                    </div>
                    <div className="md:w-3/4 pb-12 border-b border-gray-50 last:border-0 last:pb-0">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {session.tags?.map((tag, tIndex) => (
                          <span key={tIndex} className="px-3 py-1 bg-blue-50 text-blue-600 text-[9px] font-black uppercase tracking-widest rounded-lg">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h4 className="text-2xl font-black text-gray-900 mb-6 tracking-tight group-hover:text-blue-600 transition-colors duration-500">{session.title}</h4>
                      
                      {session.speaker && (
                        <div className="flex items-center gap-4 mb-6">
                          {session.speakerImage && (
                            <img src={session.speakerImage} alt={session.speaker} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md" referrerPolicy="no-referrer" />
                          )}
                          <div>
                            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Diễn giả</div>
                            <div className="text-sm font-black text-gray-900 tracking-tight">{session.speaker}</div>
                          </div>
                        </div>
                      )}
                      
                      {session.description && (
                        <p className="text-gray-500 font-medium leading-relaxed max-w-2xl">{session.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
