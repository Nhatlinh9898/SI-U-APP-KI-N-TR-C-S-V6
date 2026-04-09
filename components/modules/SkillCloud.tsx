import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number; // 0 to 100
  category?: string;
  icon?: string;
  yearsOfExperience?: number;
}

export const SkillCloud = ({ title, subtitle, skills, primary_color = 'blue' }: any) => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">{title || 'Kỹ năng & Chuyên môn'}</h2>
          {subtitle && <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">{subtitle}</p>}
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {skills?.map((skill: Skill, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative px-8 py-5 bg-gray-50 rounded-[32px] border border-gray-100 hover:border-blue-500 hover:bg-white hover:shadow-[0_32px_64px_-12px_rgba(59,130,246,0.15)] transition-all duration-500 cursor-default"
            >
              <div className="flex items-center gap-4">
                {skill.icon && <span className="text-2xl group-hover:scale-125 transition-transform duration-500">{skill.icon}</span>}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-black text-gray-900 tracking-tight">{skill.name}</span>
                    {skill.yearsOfExperience && (
                      <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                        {skill.yearsOfExperience}Y+
                      </span>
                    )}
                  </div>
                  <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                      className="h-full bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.3)]"
                    ></motion.div>
                  </div>
                </div>
              </div>
              {skill.category && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-[8px] font-black uppercase tracking-[0.2em] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 shadow-xl">
                  {skill.category}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
