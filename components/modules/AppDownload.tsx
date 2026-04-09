import React from 'react';

export const AppDownload = ({ title, subtitle, appStoreLink, playStoreLink, primary_color = 'blue' }: any) => {
  return (
    <section className={`py-20 bg-${primary_color}-50 overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl leading-tight mb-6">{title}</h2>}
            {subtitle && <p className="text-xl text-gray-600 mb-10">{subtitle}</p>}
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {appStoreLink && (
                <a href={appStoreLink} className="inline-flex items-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors shadow-lg">
                  <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M16.365 21.444c-1.143.714-1.587 1.048-2.92 1.048-1.334 0-1.937-.413-3.048-1.048-1.143-.635-2.635-2.095-3.65-3.714-1.905-3.048-2.857-6.286-2.857-8.825 0-4.063 2.095-6.095 4.635-6.095 1.333 0 2.476.635 3.365 1.27.635.444 1.048.635 1.587.635.54 0 .952-.19 1.587-.635.889-.635 2.032-1.27 3.365-1.27 2.413 0 4.19 1.651 4.825 4.063-3.65 1.524-4.19 5.841-1.27 7.873-1.048 2.667-2.794 5.333-4.476 6.698zM15.413 6.095c.635-1.016 1.048-2.413.889-3.714-1.143.19-2.667.952-3.492 1.905-.635.762-1.143 2.159-.952 3.492 1.27-.063 2.73-.825 3.555-1.683z"/></svg>
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider opacity-80">Download on the</div>
                    <div className="text-lg font-semibold leading-none">App Store</div>
                  </div>
                </a>
              )}
              {playStoreLink && (
                <a href={playStoreLink} className="inline-flex items-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors shadow-lg">
                  <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M3.609 1.814L13.792 12 3.61 22.186a1.98 1.98 0 0 1-.49-.244c-.218-.158-.38-.36-.468-.588A1.97 1.97 0 0 1 2.5 20.5V3.5c0-.306.053-.6.152-.866.1-.266.25-.506.438-.708.188-.202.412-.36.66-.462.248-.102.516-.154.788-.154.34 0 .67.08.97.234zM15.208 13.414l-1.416-1.414 1.416-1.414 4.542 2.622c.31.18.556.438.716.748.16.31.244.656.244 1.01 0 .354-.084.7-.244 1.01-.16.31-.406.568-.716.748l-4.542 2.622-1.416-1.414 1.416-1.414zM14.5 12.707L4.318 22.889l10.182-5.878L14.5 12.707zM14.5 11.293L4.318 1.111l10.182 5.878L14.5 11.293z"/></svg>
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider opacity-80">GET IT ON</div>
                    <div className="text-lg font-semibold leading-none">Google Play</div>
                  </div>
                </a>
              )}
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className={`relative w-64 h-[500px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden ring-4 ring-${primary_color}-200`}>
              <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-3xl w-1/2 mx-auto z-20"></div>
              <div className={`absolute inset-0 bg-gradient-to-br from-${primary_color}-400 to-${primary_color}-600 flex flex-col items-center justify-center text-white p-6 text-center`}>
                <div className="w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-sm mb-6 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Tải App Ngay</h3>
                <p className="text-white/80 text-sm">Trải nghiệm mượt mà hơn trên ứng dụng di động.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
