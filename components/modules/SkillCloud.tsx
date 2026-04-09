import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number; // 0 to 100
  category?: string;
  icon?: string;
  iconColor?: string;
  yearsOfExperience?: number;
  description?: string;
  projects?: string[];
}

export const SkillCloud = ({ title, subtitle, skills, primary_color = 'blue' }: any) => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8">{title || 'Kỹ năng & Chuyên môn'}</h2>
          {subtitle && <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium">{subtitle}</p>}
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {skills?.map((skill: Skill, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
              className="group relative px-10 py-8 bg-gray-50 rounded-[48px] border-2 border-transparent hover:border-blue-600 hover:bg-white hover:shadow-[0_64px_128px_-12px_rgba(37,99,235,0.15)] transition-all duration-700 cursor-default max-w-sm"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div 
                      className="w-16 h-16 rounded-[24px] bg-white shadow-xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-gray-100"
                      style={{ color: skill.iconColor || '#2563eb' }}
                    >
                      {skill.icon || '⚡'}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xl font-black text-gray-900 tracking-tight leading-none">{skill.name}</span>
                        {skill.yearsOfExperience && (
                          <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                            {skill.yearsOfExperience}Y+
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{skill.category}</div>
                    </div>
                  </div>
                  <div className="text-2xl font-black text-gray-900 tracking-tighter opacity-20 group-hover:opacity-100 transition-opacity">{skill.level}%</div>
                </div>

                {skill.description && (
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">{skill.description}</p>
                )}

                <div className="space-y-4">
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.05, ease: "circOut" }}
                      className="h-full bg-blue-600 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                    ></motion.div>
                  </div>
                  
                  {skill.projects && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {skill.projects.map((proj, pIndex) => (
                        <span key={pIndex} className="px-3 py-1 bg-gray-100 text-gray-400 text-[9px] font-black uppercase tracking-widest rounded-lg group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                          {proj}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
