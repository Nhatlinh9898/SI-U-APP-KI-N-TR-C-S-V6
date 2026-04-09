import React from 'react';

interface Webinar {
  title: string;
  date: string;
  host: string;
  hostImage: string;
  thumbnail: string;
  agenda?: string[];
  learning_outcomes?: string[];
}

export const LiveWebinarPreview = ({ title, subtitle, webinar, primary_color = 'blue' }: any) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-950 rounded-[64px] overflow-hidden shadow-[0_64px_128px_-12px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row border border-white/5">
          <div className="lg:w-1/2 relative group">
            <img 
              src={webinar?.thumbnail} 
              alt={webinar?.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/60 to-transparent"></div>
            <div className="absolute top-8 left-8 bg-red-600 text-white px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] animate-pulse shadow-2xl">
              Trực tiếp
            </div>
            
            {webinar?.learning_outcomes && (
              <div className="absolute bottom-8 left-8 right-8 space-y-3">
                <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Bạn sẽ học được:</div>
                <div className="flex flex-wrap gap-2">
                  {webinar.learning_outcomes.map((outcome: string, i: number) => (
                    <div key={i} className="px-4 py-2 bg-white/10 backdrop-blur-xl rounded-xl border border-white/10 text-xs font-bold text-white">
                      ✓ {outcome}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
            
            <div className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] mb-6">Sự kiện trực tuyến đặc biệt</div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">{webinar?.title}</h2>
            
            <div className="flex items-center gap-6 mb-10">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-40"></div>
                <img src={webinar?.hostImage} alt={webinar?.host} className="relative w-16 h-16 rounded-full border-2 border-white/20 object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <div className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-1">Diễn giả chính</div>
                <div className="text-white text-lg font-black tracking-tight">{webinar?.host}</div>
              </div>
            </div>

            {webinar?.agenda && (
              <div className="space-y-4 mb-10">
                <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Nội dung chương trình:</div>
                <div className="space-y-3">
                  {webinar.agenda.map((item: string, i: number) => (
                    <div key={i} className="flex items-center gap-4 text-white/60 font-medium text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-white/5 rounded-[32px] p-8 mb-10 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/20 flex items-center justify-center text-2xl">
                  📅
                </div>
                <div>
                  <div className="text-white text-xl font-black tracking-tight">{webinar?.date}</div>
                  <div className="text-white/40 text-xs font-bold mt-1 uppercase tracking-widest">Lưu lịch để không bỏ lỡ</div>
                </div>
              </div>
            </div>

            <button className="w-full py-6 bg-blue-600 text-white rounded-[24px] font-black text-sm uppercase tracking-[0.2em] hover:scale-[1.02] transition-all shadow-[0_20px_40px_-12px_rgba(37,99,235,0.4)]">
              Đăng ký giữ chỗ miễn phí
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
