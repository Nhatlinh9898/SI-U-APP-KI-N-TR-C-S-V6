import React from 'react';

interface Track {
  title: string;
  duration: string;
  artist?: string;
  description?: string;
  date?: string;
  audioUrl?: string;
}

export const AudioPlayer = ({ title, subtitle, coverImage, tracks, primary_color = 'blue' }: any) => {
  return (
    <section className="py-24 bg-gray-950 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-center lg:items-start">
          <div className="w-full lg:w-2/5 flex flex-col items-center text-center lg:text-left lg:items-start sticky top-24">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[40px] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-[48px] overflow-hidden shadow-[0_64px_128px_-12px_rgba(0,0,0,0.5)] mb-12 border border-white/10 relative">
                <img src={coverImage || "https://picsum.photos/seed/podcast/800/800"} alt="Cover" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent"></div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">{title || 'Album Mới Nhất'}</h2>
              <p className="text-gray-400 text-xl leading-relaxed font-medium max-w-md">{subtitle || 'Khám phá những giai điệu mới nhất từ nghệ sĩ yêu thích của bạn.'}</p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-10 py-5 bg-blue-600 text-white rounded-[24px] font-black text-sm uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-[0_20px_40px_-12px_rgba(37,99,235,0.4)] flex items-center justify-center">
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  Nghe Ngay
                </button>
                <button className="px-10 py-5 bg-white/5 text-white border border-white/10 rounded-[24px] font-black text-sm uppercase tracking-[0.2em] hover:bg-white/10 transition-all flex items-center justify-center">
                  Theo dõi
                </button>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-3/5">
            <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/5">
              <h3 className="text-xl font-black uppercase tracking-[0.3em] text-white/40">Danh sách phát</h3>
              <span className="text-sm font-bold text-gray-500">{tracks?.length || 0} bài hát</span>
            </div>
            
            <div className="space-y-4">
              {tracks?.map((track: Track, index: number) => (
                <div key={index} className="flex items-center justify-between p-6 rounded-[32px] hover:bg-white/5 transition-all duration-500 group cursor-pointer border border-transparent hover:border-white/5">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 group-hover:bg-blue-600 flex items-center justify-center transition-all duration-500 shadow-inner">
                      <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white tracking-tight group-hover:text-blue-400 transition-colors">{track.title}</h4>
                      <div className="flex items-center gap-3 mt-1">
                        {track.artist && <span className="text-sm font-bold text-gray-400">{track.artist}</span>}
                        {track.date && <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">• {track.date}</span>}
                      </div>
                      {track.description && (
                        <p className="text-sm text-gray-500 mt-2 line-clamp-1 group-hover:line-clamp-none transition-all duration-500">{track.description}</p>
                      )}
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm font-black font-mono tracking-tighter">{track.duration}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
