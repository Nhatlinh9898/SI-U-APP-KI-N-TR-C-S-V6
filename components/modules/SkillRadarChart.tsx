import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export const SkillRadarChart = ({ title, subtitle, skills, primary_color = 'blue' }: any) => {
  // skills: [{subject: 'Design', A: 120, fullMark: 150, description: '...', level_label: 'Expert'}]
  
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/5 blur-[100px] rounded-full -ml-48 -mb-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gray-50 rounded-[80px] p-12 md:p-24 border border-gray-100 shadow-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight tracking-tight">{title || 'Phân tích năng lực'}</h2>
                <p className="text-xl text-gray-500 leading-relaxed font-medium">{subtitle || 'Cái nhìn trực quan về các kỹ năng chuyên môn và thế mạnh của tôi trong công việc.'}</p>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                {skills?.map((skill: any, index: number) => (
                  <div key={index} className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-black text-gray-900 mb-1">{skill.subject}</h4>
                        {skill.level_label && (
                          <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest">{skill.level_label}</span>
                        )}
                      </div>
                      <span className="text-2xl font-black text-gray-900">{Math.round((skill.A / skill.fullMark) * 100)}%</span>
                    </div>
                    
                    {skill.description && (
                      <p className="text-sm text-gray-400 font-medium mb-6 leading-relaxed">{skill.description}</p>
                    )}

                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden p-0.5 shadow-inner">
                      <div 
                        className="h-full bg-orange-600 rounded-full transition-all duration-1000 shadow-lg"
                        style={{ width: `${(skill.A / skill.fullMark) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-[600px] w-full relative bg-white rounded-[80px] p-12 shadow-[0_48px_96px_-12px_rgba(0,0,0,0.12)] border border-gray-100">
              <div className="absolute inset-0 bg-orange-600/5 rounded-full blur-[120px] scale-75"></div>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skills}>
                  <PolarGrid stroke="#f3f4f6" strokeWidth={2} />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#111827', fontSize: 14, fontWeight: 900, letterSpacing: '0.1em' }} />
                  <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                  <Radar
                    name="Skills"
                    dataKey="A"
                    stroke="#ea580c"
                    strokeWidth={4}
                    fill="#f97316"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
              
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-gray-50 px-6 py-3 rounded-full border border-gray-100 shadow-sm">
                <div className="w-4 h-4 rounded-full bg-orange-600 animate-pulse"></div>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Biểu đồ năng lực thực tế</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
