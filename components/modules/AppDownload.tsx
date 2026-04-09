import React from 'react';

interface AppDownloadProps {
  title: string;
  subtitle?: string;
  description?: string;
  appStoreLink?: string;
  playStoreLink?: string;
  image?: string;
  qrCode?: string;
  features?: string[];
  rating?: { score: string; count: string };
  primary_color?: string;
}

export const AppDownload: React.FC<AppDownloadProps> = ({ 
  title, 
  subtitle, 
  description,
  appStoreLink, 
  playStoreLink, 
  image,
  qrCode,
  features,
  rating,
  primary_color = 'blue' 
}) => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-950 rounded-[64px] overflow-hidden relative group">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] -mr-64 -mt-64 group-hover:bg-blue-600/30 transition-all duration-1000"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 blur-[100px] -ml-32 -mb-32"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-20 p-12 sm:p-24">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-block px-5 py-2 rounded-2xl bg-white/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-white/10">
                {subtitle || 'Ứng dụng di động'}
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
                {title}
              </h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed font-medium">
                {description || 'Tải ứng dụng ngay để trải nghiệm dịch vụ tốt nhất mọi lúc, mọi nơi với đầy đủ tính năng thông minh.'}
              </p>

              {features && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  {features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <span className="text-sm font-bold text-gray-300">{feat}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-12">
                {appStoreLink && (
                  <a href={appStoreLink} className="flex items-center gap-4 bg-white text-gray-950 px-8 py-4 rounded-2xl hover:bg-blue-500 hover:text-white transition-all duration-500 shadow-2xl group/btn">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M16.365 21.444c-1.143.714-1.587 1.048-2.92 1.048-1.334 0-1.937-.413-3.048-1.048-1.143-.635-2.635-2.095-3.65-3.714-1.905-3.048-2.857-6.286-2.857-8.825 0-4.063 2.095-6.095 4.635-6.095 1.333 0 2.476.635 3.365 1.27.635.444 1.048.635 1.587.635.54 0 .952-.19 1.587-.635.889-.635 2.032-1.27 3.365-1.27 2.413 0 4.19 1.651 4.825 4.063-3.65 1.524-4.19 5.841-1.27 7.873-1.048 2.667-2.794 5.333-4.476 6.698zM15.413 6.095c.635-1.016 1.048-2.413.889-3.714-1.143.19-2.667.952-3.492 1.905-.635.762-1.143 2.159-.952 3.492 1.27-.063 2.73-.825 3.555-1.683z"/></svg>
                    <div className="text-left">
                      <div className="text-[9px] uppercase tracking-widest font-black opacity-50">Download on</div>
                      <div className="text-lg font-black leading-none">App Store</div>
                    </div>
                  </a>
                )}
                {playStoreLink && (
                  <a href={playStoreLink} className="flex items-center gap-4 bg-white/10 backdrop-blur-md text-white border border-white/10 px-8 py-4 rounded-2xl hover:bg-white hover:text-gray-950 transition-all duration-500 shadow-2xl">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M3.609 1.814L13.792 12 3.61 22.186a1.98 1.98 0 0 1-.49-.244c-.218-.158-.38-.36-.468-.588A1.97 1.97 0 0 1 2.5 20.5V3.5c0-.306.053-.6.152-.866.1-.266.25-.506.438-.708.188-.202.412-.36.66-.462.248-.102.516-.154.788-.154.34 0 .67.08.97.234zM15.208 13.414l-1.416-1.414 1.416-1.414 4.542 2.622c.31.18.556.438.716.748.16.31.244.656.244 1.01 0 .354-.084.7-.244 1.01-.16.31-.406.568-.716.748l-4.542 2.622-1.416-1.414 1.416-1.414zM14.5 12.707L4.318 22.889l10.182-5.878L14.5 12.707zM14.5 11.293L4.318 1.111l10.182 5.878L14.5 11.293z"/></svg>
                    <div className="text-left">
                      <div className="text-[9px] uppercase tracking-widest font-black opacity-50">Get it on</div>
                      <div className="text-lg font-black leading-none">Google Play</div>
                    </div>
                  </a>
                )}
              </div>

              {rating && (
                <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="flex text-yellow-400 text-xl">★★★★★</div>
                    <div>
                      <div className="text-lg font-black text-white leading-none">{rating.score}</div>
                      <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Rating</div>
                    </div>
                  </div>
                  <div className="w-px h-10 bg-white/10"></div>
                  <div>
                    <div className="text-lg font-black text-white leading-none">{rating.count}</div>
                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Downloads</div>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:w-1/2 flex flex-col sm:flex-row items-center justify-center gap-12">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600/30 blur-[80px] rounded-full"></div>
                <div className="relative w-64 h-[520px] bg-gray-900 rounded-[48px] border-[8px] border-gray-800 shadow-[0_64px_128px_-12px_rgba(0,0,0,0.5)] overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-8 bg-gray-800 rounded-b-3xl w-1/2 mx-auto z-20"></div>
                  <img 
                    src={image || 'https://picsum.photos/seed/app/800/1600'} 
                    alt="App Preview" 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {qrCode && (
                <div className="bg-white p-6 rounded-[32px] shadow-2xl text-center">
                  <img src={qrCode} alt="QR Code" className="w-32 h-32 mb-4" referrerPolicy="no-referrer" />
                  <div className="text-[10px] font-black text-gray-900 uppercase tracking-widest">Quét để tải</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
