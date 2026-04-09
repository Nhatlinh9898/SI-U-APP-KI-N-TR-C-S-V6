import React, { useState } from 'react';

interface Lesson {
  title: string;
  duration: string;
}

interface Module {
  title: string;
  lessons: Lesson[];
}

export const CourseModuleAccordion = ({ title, subtitle, modules, primary_color = 'blue' }: any) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500">{subtitle}</p>}
        </div>

        <div className="space-y-4">
          {modules?.map((mod: Module, index: number) => (
            <div key={index} className="bg-gray-50 rounded-[32px] overflow-hidden border border-gray-100">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white transition-colors"
              >
                <div className="flex items-center gap-6">
                  <div className={`w-10 h-10 rounded-xl bg-${primary_color}-100 text-${primary_color}-600 flex items-center justify-center font-black`}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900">{mod.title}</h3>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{mod.lessons.length} bài học</div>
                  </div>
                </div>
                <div className={`text-2xl transition-transform duration-500 ${openIndex === index ? 'rotate-180' : ''}`}>
                  ↓
                </div>
              </button>
              
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-8 pt-2 space-y-3">
                  {mod.lessons.map((lesson, lIndex) => (
                    <div key={lIndex} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-50 hover:border-blue-200 transition-all cursor-pointer group">
                      <div className="flex items-center gap-4">
                        <div className="text-gray-300 group-hover:text-blue-500 transition-colors">▶</div>
                        <div className="font-bold text-gray-700">{lesson.title}</div>
                      </div>
                      <div className="text-xs font-black text-gray-400">{lesson.duration}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
