import React, { useState } from 'react';

interface ItineraryDay {
  day: string;
  title: string;
  activities: {
    time: string;
    title: string;
    description: string;
    icon?: string;
  }[];
}

export const ItinerarySection = ({ title, subtitle, days, primary_color = 'blue' }: any) => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500">{subtitle}</p>}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3 flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 hide-scrollbar">
            {days?.map((day: ItineraryDay, index: number) => (
              <button
                key={index}
                onClick={() => setActiveDay(index)}
                className={`flex-shrink-0 lg:w-full p-4 rounded-2xl text-left transition-all border ${
                  activeDay === index 
                    ? `bg-${primary_color}-600 text-white border-${primary_color}-600 shadow-lg shadow-${primary_color}-600/30` 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${activeDay === index ? 'text-white/80' : 'text-gray-400'}`}>
                  {day.day}
                </div>
                <div className="font-bold truncate">{day.title}</div>
              </button>
            ))}
          </div>

          <div className="lg:w-2/3 bg-white rounded-3xl shadow-sm border border-gray-200 p-8 md:p-12">
            <div className="space-y-10">
              {days[activeDay]?.activities?.map((activity: any, index: number) => (
                <div key={index} className="flex gap-6 relative">
                  {index !== days[activeDay].activities.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-100 -translate-x-1/2"></div>
                  )}
                  <div className={`w-12 h-12 rounded-2xl bg-${primary_color}-50 text-${primary_color}-600 flex items-center justify-center flex-shrink-0 z-10 font-bold text-sm`}>
                    {activity.time}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h4>
                    <p className="text-gray-500 leading-relaxed">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
