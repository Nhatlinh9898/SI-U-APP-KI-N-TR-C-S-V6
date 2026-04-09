import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Lesson {
  title: string;
  duration: string;
  isFree?: boolean;
  previewUrl?: string;
}

interface Section {
  title: string;
  description?: string;
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
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">{title || 'Nội dung khóa học'}</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">{subtitle || 'Lộ trình học tập bài bản được thiết kế để giúp bạn làm chủ kỹ năng từ con số 0.'}</p>
        </div>
        
        <div className="space-y-6">
          {sections?.map((section: Section, index: number) => (
            <div key={index} className="bg-white border-2 border-gray-100 rounded-[32px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <button 
                onClick={() => toggleSection(index)}
                className="w-full flex items-center justify-between p-8 bg-gray-50/50 hover:bg-gray-50 transition-colors text-left"
              >
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-2xl bg-${primary_color}-600 text-white flex items-center justify-center font-black text-lg shadow-lg shadow-${primary_color}-600/20`}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 tracking-tight">{section.title}</h3>
                    {section.description && (
                      <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mt-1">{section.description}</p>
                    )}
                  </div>
                </div>
                <div className={`w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center transition-transform duration-500 ${openSections.includes(index) ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </button>
              
              <AnimatePresence>
                {openSections.includes(index) && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <div className="divide-y divide-gray-50 bg-white">
                      {section.lessons?.map((lesson: Lesson, lessonIndex: number) => (
                        <div key={lessonIndex} className="flex items-center justify-between p-6 hover:bg-gray-50/50 transition-colors group">
                          <div className="flex items-center gap-5">
                            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                              <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                            </div>
                            <div>
                              <span className="text-gray-900 font-bold block">{lesson.title}</span>
                              <div className="flex items-center gap-3 mt-1">
                                <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">{lesson.duration}</span>
                                {lesson.isFree && (
                                  <span className="px-2 py-0.5 rounded-md bg-green-100 text-green-700 text-[9px] font-black uppercase tracking-widest">Học thử</span>
                                )}
                              </div>
                            </div>
                          </div>
                          {lesson.isFree && lesson.previewUrl && (
                            <button className="px-4 py-2 bg-gray-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg">
                              Xem ngay
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
