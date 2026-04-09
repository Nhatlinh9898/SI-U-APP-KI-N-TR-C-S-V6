import React, { useState } from 'react';

interface Lesson {
  title: string;
  duration: string;
  isFree?: boolean;
}

interface Section {
  title: string;
  lessons: Lesson[];
}

export const CourseCurriculum = ({ title, subtitle, sections, primary_color = 'blue' }: any) => {
  const [openSections, setOpenSections] = useState<number[]>([0]);

  const toggleSection = (index: number) => {
    setOpenSections(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500">{subtitle}</p>}
        </div>
        
        <div className="space-y-4">
          {sections?.map((section: Section, index: number) => (
            <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
              <button 
                onClick={() => toggleSection(index)}
                className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full bg-${primary_color}-100 text-${primary_color}-600 flex items-center justify-center font-bold text-sm`}>
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{section.title}</h3>
                </div>
                <svg 
                  className={`w-5 h-5 text-gray-400 transform transition-transform ${openSections.includes(index) ? 'rotate-180' : ''}`} 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {openSections.includes(index) && (
                <div className="divide-y divide-gray-100">
                  {section.lessons?.map((lesson: Lesson, lessonIndex: number) => (
                    <div key={lessonIndex} className="flex items-center justify-between p-5 hover:bg-gray-50 transition-colors group">
                      <div className="flex items-center gap-4">
                        <div className="w-6 h-6 flex items-center justify-center">
                          <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">{lesson.title}</span>
                        {lesson.isFree && (
                          <span className="px-2 py-0.5 rounded bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider">Học thử</span>
                        )}
                      </div>
                      <span className="text-sm text-gray-400 font-mono">{lesson.duration}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
