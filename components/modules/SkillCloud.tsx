import React from 'react';

interface Skill {
  name: string;
  level: number; // 0 to 100
  category?: string;
}

export const SkillCloud = ({ title, subtitle, skills, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500">{subtitle}</p>}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills?.map((skill: Skill, index: number) => (
            <div 
              key={index}
              className="group relative px-6 py-3 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-500 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 cursor-default"
            >
              <div className="flex items-center gap-3">
                <span className="font-bold text-gray-900">{skill.name}</span>
                <div className="w-12 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-${primary_color}-600 rounded-full`} 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
              {skill.category && (
                <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-gray-900 text-white text-[8px] font-bold uppercase tracking-widest rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  {skill.category}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
