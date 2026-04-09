import React from 'react';

interface DayHours {
  day: string;
  hours: string;
  closed?: boolean;
}

export const OpeningHours = ({ title, subtitle, schedule, note, image, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          
          <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            {title && <h2 className="text-3xl font-extrabold text-gray-900 mb-4">{title}</h2>}
            {subtitle && <p className="text-gray-500 mb-8">{subtitle}</p>}
            
            <div className="space-y-4 mb-8">
              {schedule?.map((item: DayHours, index: number) => (
                <div key={index} className="flex justify-between items-center pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                  <span className="font-medium text-gray-700">{item.day}</span>
                  {item.closed ? (
                    <span className="text-red-500 font-semibold bg-red-50 px-3 py-1 rounded-full text-sm">Đóng cửa</span>
                  ) : (
                    <span className="text-gray-900 font-bold">{item.hours}</span>
                  )}
                </div>
              ))}
            </div>
            
            {note && (
              <div className={`bg-${primary_color}-50 p-4 rounded-xl flex items-start`}>
                <svg className={`w-5 h-5 text-${primary_color}-600 mt-0.5 mr-3 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <p className={`text-sm text-${primary_color}-800`}>{note}</p>
              </div>
            )}
          </div>
          
          <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full">
            <img src={image || "https://picsum.photos/seed/storefront/800/800"} alt="Storefront" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white">
                <div className="flex items-center mb-2">
                  <span className="flex h-3 w-3 relative mr-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="font-bold text-lg shadow-sm">Đang mở cửa</span>
                </div>
                <p className="text-white/80">Chào mừng bạn đến với chúng tôi</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
