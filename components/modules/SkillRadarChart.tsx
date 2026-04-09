import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export const SkillRadarChart = ({ title, subtitle, skills, primary_color = 'blue' }: any) => {
  // skills: [{subject: 'Design', A: 120, fullMark: 150}]
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[64px] p-10 md:p-20 shadow-2xl border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">{title || 'Phân tích năng lực'}</h2>
              <p className="text-lg text-gray-500 mb-10">{subtitle || 'Cái nhìn trực quan về các kỹ năng chuyên môn và thế mạnh của tôi trong công việc.'}</p>
              
              <div className="space-y-6">
                {skills?.map((skill: any, index: number) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm font-bold">
                      <span className="text-gray-900">{skill.subject}</span>
                      <span className={`text-${primary_color}-600`}>{Math.round((skill.A / skill.fullMark) * 100)}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-${primary_color}-600 rounded-full`}
                        style={{ width: `${(skill.A / skill.fullMark) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-[400px] w-full relative">
              <div className={`absolute inset-0 bg-${primary_color}-600/5 rounded-full blur-3xl`}></div>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skills}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#6b7280', fontSize: 12, fontWeight: 700 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                  <Radar
                    name="Skills"
                    dataKey="A"
                    stroke={primary_color === 'blue' ? '#2563eb' : '#4f46e5'}
                    fill={primary_color === 'blue' ? '#3b82f6' : '#6366f1'}
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
