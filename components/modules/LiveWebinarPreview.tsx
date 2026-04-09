import React from 'react';

interface Webinar {
  title: string;
  date: string;
  host: string;
  hostImage: string;
  thumbnail: string;
}

export const LiveWebinarPreview = ({ title, subtitle, webinar, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-[48px] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img src={webinar?.thumbnail} alt={webinar?.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute top-6 left-6 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest animate-pulse">
              Sắp diễn ra
            </div>
          </div>
          
          <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <div className={`text-${primary_color}-500 font-black uppercase tracking-widest text-sm mb-4`}>Webinar Miễn Phí</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">{webinar?.title}</h2>
            
            <div className="flex items-center gap-4 mb-8">
              <img src={webinar?.hostImage} alt={webinar?.host} className="w-12 h-12 rounded-full border-2 border-white/20" referrerPolicy="no-referrer" />
              <div>
                <div className="text-gray-400 text-xs font-bold uppercase">Diễn giả</div>
                <div className="text-white font-bold">{webinar?.host}</div>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 mb-8 border border-white/10">
              <div className="flex items-center gap-4">
                <div className="text-3xl">📅</div>
                <div>
                  <div className="text-white font-black">{webinar?.date}</div>
                  <div className="text-gray-400 text-sm">Lưu lịch để không bỏ lỡ</div>
                </div>
              </div>
            </div>

            <button className={`w-full py-4 bg-${primary_color}-600 text-white rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-${primary_color}-600/30`}>
              Đăng ký tham gia ngay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
