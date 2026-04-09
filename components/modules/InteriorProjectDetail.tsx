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
}

export const InteriorProjectDetail = ({ title, subtitle, projects, primary_color = 'blue' }: any) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-tight">{title || 'Chi tiết dự án'}</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">{subtitle || 'Khám phá chiều sâu của sự sáng tạo qua từng chi tiết thiết kế và vật liệu tuyển chọn.'}</p>
        </div>

        <div className="space-y-40">
          {projects?.map((project: ProjectDetail, index: number) => (
            <div key={index} className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                <div className="lg:col-span-8">
                  <h3 className="text-4xl font-black text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">{project.description}</p>
                </div>
                <div className="lg:col-span-4 grid grid-cols-2 gap-4">
                  <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Phong cách</div>
                    <div className="font-bold text-gray-900">{project.style}</div>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Diện tích</div>
                    <div className="font-bold text-gray-900">{project.area}</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-12">
                  <div className="aspect-[16/9] rounded-[48px] overflow-hidden shadow-2xl group">
                    <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 bg-gray-50 rounded-[40px] border border-gray-100">
                      <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Thách thức thiết kế</h4>
                      <p className="text-gray-600 leading-relaxed italic">"{project.challenge}"</p>
                    </div>
                    <div className="p-8 bg-blue-50 rounded-[40px] border border-blue-100">
                      <h4 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-4">Giải pháp sáng tạo</h4>
                      <p className="text-gray-900 font-medium leading-relaxed">{project.solution}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="aspect-square rounded-[40px] overflow-hidden shadow-xl group">
                    <img src={project.images[1]} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-8 bg-gray-900 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-${primary_color}-600/20 blur-3xl rounded-full`}></div>
                    <h4 className="text-xs font-black text-white/40 uppercase tracking-widest mb-6">Vật liệu chủ đạo</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.materials?.map((m, i) => (
                        <span key={i} className="px-4 py-2 bg-white/10 rounded-xl text-xs font-bold hover:bg-white/20 transition-colors">
                          {m}
                        </span>
                      ))}
                    </div>
                    <div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-center">
                      <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Thời gian thi công</span>
                      <span className="font-black">{project.duration}</span>
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
