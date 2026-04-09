import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export const SkillRadarChart = ({ title, subtitle, skills, primary_color = 'blue' }: any) => {
  // skills: [{subject: 'Design', A: 120, fullMark: 150}]
  
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className={`absolute bottom-0 left-0 w-96 h-96 bg-${primary_color}-600/5 blur-[100px] rounded-full -ml-48 -mb-48`}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gray-50 rounded-[80px] p-10 md:p-24 border border-gray-100 shadow-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div>
                <h2 className="text-5xl font-black text-gray-900 mb-6 leading-tight tracking-tight">{title || 'Phân tích năng lực'}</h2>
                <p className="text-xl text-gray-500 leading-relaxed">{subtitle || 'Cái nhìn trực quan về các kỹ năng chuyên môn và thế mạnh của tôi trong công việc.'}</p>
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                {skills?.map((skill: any, index: number) => (
                  <div key={index} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex justify-between text-sm font-black uppercase tracking-widest mb-4">
                      <span className="text-gray-900">{skill.subject}</span>
                      <span className={`text-${primary_color}-600`}>{Math.round((skill.A / skill.fullMark) * 100)}%</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r from-${primary_color}-600 to-${primary_color}-400 rounded-full transition-all duration-1000`}
                        style={{ width: `${(skill.A / skill.fullMark) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-[500px] w-full relative bg-white rounded-[64px] p-8 shadow-2xl border border-gray-100">
              <div className={`absolute inset-0 bg-${primary_color}-600/5 rounded-full blur-3xl scale-75`}></div>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skills}>
                  <PolarGrid stroke="#f3f4f6" strokeWidth={2} />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#111827', fontSize: 12, fontWeight: 900, letterSpacing: '0.1em' }} />
                  <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                  <Radar
                    name="Skills"
                    dataKey="A"
                    stroke={primary_color === 'blue' ? '#2563eb' : primary_color === 'amber' ? '#d97706' : '#4f46e5'}
                    strokeWidth={3}
                    fill={primary_color === 'blue' ? '#3b82f6' : primary_color === 'amber' ? '#f59e0b' : '#6366f1'}
                    fillOpacity={0.5}
                  />
                </RadarChart>
              </ResponsiveContainer>
              
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
                <div className={`w-4 h-4 rounded-full bg-${primary_color}-600`}></div>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Mức độ thành thạo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
