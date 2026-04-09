import React, { useState } from 'react';

interface Video {
  title: string;
  duration: string;
  thumbnail: string;
  url: string;
}

export const VideoPlaylist = ({ title, subtitle, videos, primary_color = 'blue' }: any) => {
  const [activeVideo, setActiveVideo] = useState(0);

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">{subtitle}</p>}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-gray-800">
              <iframe
                src={videos[activeVideo]?.url}
                className="w-full h-full"
                allowFullScreen
                title={videos[activeVideo]?.title}
              ></iframe>
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-bold mb-2">{videos[activeVideo]?.title}</h3>
              <p className="text-gray-400">Đang phát • {videos[activeVideo]?.duration}</p>
            </div>
          </div>

          <div className="lg:w-1/3 bg-gray-800/50 rounded-3xl border border-gray-800 overflow-hidden">
            <div className="p-6 border-b border-gray-800">
              <h4 className="font-bold uppercase tracking-widest text-sm text-gray-400">Danh sách phát</h4>
            </div>
            <div className="max-h-[500px] overflow-y-auto custom-scrollbar">
              {videos?.map((video: Video, index: number) => (
                <button
                  key={index}
                  onClick={() => setActiveVideo(index)}
                  className={`w-full flex gap-4 p-4 text-left transition-all hover:bg-gray-800 ${
                    activeVideo === index ? `bg-${primary_color}-600/20 border-l-4 border-${primary_color}-500` : ''
                  }`}
                >
                  <div className="w-24 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-700">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className={`font-bold text-sm mb-1 truncate ${activeVideo === index ? `text-${primary_color}-400` : 'text-white'}`}>
                      {video.title}
                    </div>
                    <div className="text-xs text-gray-500">{video.duration}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
