import React from 'react';

interface CaseStudy {
  title: string;
  category: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
}

export const LegalCaseStudy = ({ title, subtitle, cases, primary_color = 'blue' }: any) => {
  return (
    <section className="py-24 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black mb-6 tracking-tight">{title || 'Các vụ việc tiêu biểu'}</h2>
          <p className="text-xl text-white/40 max-w-3xl mx-auto leading-relaxed">{subtitle || 'Minh chứng cho sự tận tâm và năng lực chuyên môn của chúng tôi qua những kết quả thực tế.'}</p>
        </div>

        <div className="space-y-32">
          {cases?.map((item: CaseStudy, index: number) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center group`}>
              <div className="lg:w-1/2 relative">
                <div className={`absolute -inset-4 bg-${primary_color}-600/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                <div className="relative aspect-[4/3] rounded-[64px] overflow-hidden shadow-2xl border border-white/10">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-10 left-10">
                    <span className={`px-6 py-2 bg-${primary_color}-600 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl`}>
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-8">
                <h3 className="text-3xl font-black leading-tight group-hover:text-blue-400 transition-colors">{item.title}</h3>
                
                <div className="space-y-6">
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-all">
                    <h4 className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-2">Thách thức</h4>
                    <p className="text-white/80 leading-relaxed">{item.challenge}</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-all">
                    <h4 className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-2">Giải pháp</h4>
                    <p className="text-white/80 leading-relaxed">{item.solution}</p>
                  </div>
                  <div className={`p-6 bg-${primary_color}-600/10 rounded-3xl border border-${primary_color}-600/20`}>
                    <h4 className={`text-[10px] font-black text-${primary_color}-400 uppercase tracking-widest mb-2`}>Kết quả đạt được</h4>
                    <p className="text-white font-bold leading-relaxed">{item.result}</p>
                  </div>
                </div>

                <button className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-white/60 hover:text-white transition-colors group/btn">
                  Xem chi tiết hồ sơ 
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
