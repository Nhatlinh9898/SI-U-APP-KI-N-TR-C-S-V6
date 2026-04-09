import React from 'react';

interface CaseStudy {
  title: string;
  category: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
  client_quote?: string;
  legal_team?: string[];
}

export const LegalCaseStudy = ({ title, subtitle, cases, primary_color = 'blue' }: any) => {
  return (
    <section className="py-32 bg-gray-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">{title || 'Các vụ việc tiêu biểu'}</h2>
          <p className="text-xl text-white/40 max-w-3xl mx-auto leading-relaxed font-medium">{subtitle || 'Minh chứng cho sự tận tâm và năng lực chuyên môn của chúng tôi qua những kết quả thực tế.'}</p>
        </div>

        <div className="space-y-48">
          {cases?.map((item: CaseStudy, index: number) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center group`}>
              <div className="lg:w-1/2 relative">
                <div className="absolute -inset-10 bg-blue-600/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <div className="relative aspect-[4/3] rounded-[80px] overflow-hidden shadow-[0_64px_128px_-12px_rgba(0,0,0,0.5)] border border-white/10">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-12 left-12">
                    <span className="px-8 py-3 bg-blue-600 rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-2xl">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-10">
                <h3 className="text-4xl md:text-5xl font-black leading-tight tracking-tight group-hover:text-blue-400 transition-colors duration-500">{item.title}</h3>
                
                <div className="space-y-6">
                  <div className="p-8 bg-white/5 rounded-[40px] border border-white/5 hover:bg-white/10 transition-all duration-500 shadow-inner">
                    <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-4">Thách thức pháp lý</h4>
                    <p className="text-lg text-white/80 leading-relaxed font-medium">{item.challenge}</p>
                  </div>
                  <div className="p-8 bg-white/5 rounded-[40px] border border-white/5 hover:bg-white/10 transition-all duration-500 shadow-inner">
                    <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-4">Giải pháp chiến lược</h4>
                    <p className="text-lg text-white/80 leading-relaxed font-medium">{item.solution}</p>
                  </div>
                  <div className="p-8 bg-blue-600/10 rounded-[40px] border border-blue-600/20 shadow-2xl">
                    <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-4">Kết quả chung cuộc</h4>
                    <p className="text-xl text-white font-black leading-relaxed">{item.result}</p>
                  </div>
                </div>

                {item.client_quote && (
                  <div className="pl-8 border-l-4 border-blue-600 py-2">
                    <p className="text-lg text-white/60 italic leading-relaxed">"{item.client_quote}"</p>
                  </div>
                )}

                {item.legal_team && (
                  <div className="flex flex-wrap gap-3">
                    {item.legal_team.map((lawyer, i) => (
                      <span key={i} className="px-4 py-2 bg-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest text-white/40 border border-white/5">
                        {lawyer}
                      </span>
                    ))}
                  </div>
                )}

                <button className="flex items-center gap-4 text-sm font-black uppercase tracking-[0.3em] text-white/40 hover:text-blue-400 transition-all group/btn pt-4">
                  Xem chi tiết hồ sơ vụ việc
                  <span className="w-12 h-px bg-white/20 group-hover/btn:w-20 group-hover/btn:bg-blue-400 transition-all"></span>
                  <span className="group-hover/btn:translate-x-2 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
