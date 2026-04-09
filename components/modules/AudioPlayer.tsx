import React from 'react';

interface Track {
  title: string;
  duration: string;
  date?: string;
  audioUrl?: string;
}

export const AudioPlayer = ({ title, subtitle, coverImage, tracks, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          <div className="w-full md:w-1/3 flex flex-col items-center text-center md:text-left md:items-start">
            <div className="w-64 h-64 md:w-full md:h-auto md:aspect-square rounded-2xl overflow-hidden shadow-2xl mb-8 border border-gray-700">
              <img src={coverImage || "https://picsum.photos/seed/podcast/500/500"} alt="Cover" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            {title && <h2 className="text-3xl font-extrabold mb-3">{title}</h2>}
            {subtitle && <p className="text-gray-400 text-lg mb-6">{subtitle}</p>}
            <button className={`w-full py-4 bg-${primary_color}-600 hover:bg-${primary_color}-700 text-white rounded-xl font-bold flex items-center justify-center transition-colors shadow-lg`}>
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              Nghe Ngay
            </button>
          </div>
          
          <div className="w-full md:w-2/3">
            <h3 className="text-xl font-bold mb-6 border-b border-gray-800 pb-4">Danh sách phát</h3>
            <div className="space-y-2">
              {tracks?.map((track: Track, index: number) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-800 transition-colors group cursor-pointer border border-transparent hover:border-gray-700">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full bg-gray-800 group-hover:bg-${primary_color}-600 flex items-center justify-center transition-colors flex-shrink-0`}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-200 group-hover:text-white transition-colors">{track.title}</h4>
                      {track.date && <p className="text-xs text-gray-500 mt-1">{track.date}</p>}
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm font-mono">{track.duration}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
