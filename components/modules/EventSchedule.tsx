import React, { useState } from 'react';

interface Session {
  time: string;
  title: string;
  speaker?: string;
  description?: string;
}

interface Day {
  date: string;
  title: string;
  sessions: Session[];
}

export const EventSchedule = ({ title, subtitle, days, primary_color = 'blue' }: any) => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500">{subtitle}</p>}
        </div>
        
        {days && days.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="flex overflow-x-auto border-b border-gray-200 hide-scrollbar">
              {days.map((day: Day, index: number) => (
                <button
                  key={index}
                  onClick={() => setActiveDay(index)}
                  className={`flex-1 min-w-[150px] py-4 px-6 text-center border-b-2 font-medium text-sm sm:text-base transition-colors ${
                    activeDay === index
                      ? `border-${primary_color}-600 text-${primary_color}-600 bg-${primary_color}-50/50`
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="font-bold">{day.title}</div>
                  <div className="text-xs mt-1 opacity-80">{day.date}</div>
                </button>
              ))}
            </div>
            
            <div className="p-6 sm:p-10">
              <div className="space-y-8">
                {days[activeDay]?.sessions?.map((session: Session, index: number) => (
                  <div key={index} className="flex flex-col sm:flex-row gap-4 sm:gap-8 relative">
                    <div className="sm:w-1/4 flex-shrink-0">
                      <div className={`text-lg font-bold text-${primary_color}-600`}>{session.time}</div>
                    </div>
                    <div className="sm:w-3/4 pb-8 border-b border-gray-100 last:border-0 last:pb-0">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{session.title}</h4>
                      {session.speaker && (
                        <div className="flex items-center text-sm font-medium text-gray-700 mb-3">
                          <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                          {session.speaker}
                        </div>
                      )}
                      {session.description && <p className="text-gray-600">{session.description}</p>}
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
