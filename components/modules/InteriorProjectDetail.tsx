import React from 'react';

interface ProjectDetail {
  title: string;
  style: string;
  duration: string;
  area: string;
  materials: string[];
  description: string;
  challenge: string;
  solution: string;
  images: string[];
  design_philosophy?: string;
  budget_range?: string;
}

export const InteriorProjectDetail = ({ title, subtitle, projects, primary_color = 'blue' }: any) => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tighter">{title || 'Chi tiết dự án'}</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium">{subtitle || 'Khám phá chiều sâu của sự sáng tạo qua từng chi tiết thiết kế và vật liệu tuyển chọn.'}</p>
        </div>

        <div className="space-y-64">
          {projects?.map((project: ProjectDetail, index: number) => (
            <div key={index} className="space-y-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
                <div className="lg:col-span-7">
                  <h3 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">{project.title}</h3>
                  <p className="text-xl text-gray-500 leading-relaxed max-w-2xl font-medium">{project.description}</p>
                </div>
                <div className="lg:col-span-5 grid grid-cols-2 gap-6">
                  <div className="p-8 bg-gray-50 rounded-[40px] border border-gray-100 shadow-inner">
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Phong cách</div>
                    <div className="text-lg font-black text-gray-900">{project.style}</div>
                  </div>
                  <div className="p-8 bg-gray-50 rounded-[40px] border border-gray-100 shadow-inner">
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Diện tích</div>
                    <div className="text-lg font-black text-gray-900">{project.area}</div>
                  </div>
                  {project.budget_range && (
                    <div className="col-span-2 p-8 bg-orange-50 rounded-[40px] border border-orange-100 shadow-inner flex justify-between items-center">
                      <div className="text-[10px] font-black text-orange-400 uppercase tracking-[0.2em]">Ngân sách dự kiến</div>
                      <div className="text-xl font-black text-orange-600">{project.budget_range}</div>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2 space-y-16">
                  <div className="aspect-[16/9] rounded-[80px] overflow-hidden shadow-[0_64px_128px_-12px_rgba(0,0,0,0.15)] group relative">
                    <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {project.design_philosophy && (
                    <div className="p-12 bg-gray-900 rounded-[64px] text-white shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
                      <h4 className="text-xs font-black text-white/40 uppercase tracking-[0.3em] mb-8">Triết lý thiết kế</h4>
                      <p className="text-3xl font-black leading-tight tracking-tight italic">"{project.design_philosophy}"</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="p-10 bg-gray-50 rounded-[56px] border border-gray-100 shadow-inner">
                      <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Thách thức thiết kế</h4>
                      <p className="text-lg text-gray-600 leading-relaxed font-medium italic">"{project.challenge}"</p>
                    </div>
                    <div className="p-10 bg-orange-50 rounded-[56px] border border-orange-100 shadow-inner">
                      <h4 className="text-xs font-black text-orange-400 uppercase tracking-[0.2em] mb-6">Giải pháp sáng tạo</h4>
                      <p className="text-lg text-gray-900 font-black leading-relaxed">{project.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-10">
                  <div className="aspect-square rounded-[64px] overflow-hidden shadow-2xl group">
                    <img src={project.images[1]} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-12 bg-gray-50 rounded-[64px] border border-gray-100 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/5 blur-[40px] rounded-full"></div>
                    <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-10">Vật liệu chủ đạo</h4>
                    <div className="flex flex-wrap gap-4">
                      {project.materials?.map((m, i) => (
                        <span key={i} className="px-6 py-3 bg-white rounded-2xl text-xs font-black uppercase tracking-widest text-gray-900 shadow-sm border border-gray-100 hover:border-orange-200 transition-colors">
                          {m}
                        </span>
                      ))}
                    </div>
                    <div className="mt-12 pt-10 border-t border-gray-200 flex justify-between items-center">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Thời gian thi công</span>
                      <span className="text-xl font-black text-gray-900">{project.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
