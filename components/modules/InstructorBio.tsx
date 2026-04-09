import React from 'react';

export const InstructorBio = ({ title, name, role, bio, image, stats, expertise, education, socialLinks, primary_color = 'blue' }: any) => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-7xl font-black text-gray-900 mb-6 tracking-tighter">{title}</h2>
          </div>
        )}
        
        <div className="bg-gray-50 rounded-[64px] overflow-hidden border border-gray-100 shadow-2xl shadow-gray-900/5">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 relative h-[500px] lg:h-auto overflow-hidden group">
              <img 
                src={image || "https://picsum.photos/seed/instructor/800/1000"} 
                alt={name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
                <div className="flex gap-4">
                  {socialLinks?.map((link: any, i: number) => (
                    <a key={i} href={link.url} className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all">
                      <span className="text-xl">{link.icon || '🔗'}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:w-3/5 p-12 md:p-20 flex flex-col justify-center">
              <div className="mb-10">
                <div className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Giảng viên hướng dẫn</div>
                <h3 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tighter">{name}</h3>
                <p className="text-xl font-bold text-gray-400 tracking-tight">{role}</p>
              </div>
              
              <div className="prose prose-lg text-gray-500 mb-12 max-w-none font-medium leading-relaxed">
                <p>{bio}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                {expertise && expertise.length > 0 && (
                  <div>
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">Chuyên môn chính</h4>
                    <div className="flex flex-wrap gap-2">
                      {expertise.map((skill: string, i: number) => (
                        <span key={i} className="px-4 py-2 bg-white rounded-xl text-sm font-bold text-gray-700 border border-gray-100 shadow-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {education && education.length > 0 && (
                  <div>
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">Học vấn & Bằng cấp</h4>
                    <ul className="space-y-3">
                      {education.map((edu: string, i: number) => (
                        <li key={i} className="text-sm font-bold text-gray-600 flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              {stats && stats.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-12 border-t border-gray-100">
                  {stats.map((stat: any, index: number) => (
                    <div key={index}>
                      <div className="text-3xl font-black text-gray-900 tracking-tighter mb-1">{stat.value}</div>
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
