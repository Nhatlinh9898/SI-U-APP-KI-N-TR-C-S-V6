import React from 'react';

export const FundraisingProgress = ({ title, subtitle, raised, goal, currency = '$', backers, daysLeft, primary_color = 'blue' }: any) => {
  const percentage = Math.min(Math.round((raised / goal) * 100), 100);
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 text-center relative overflow-hidden">
          <div className={`absolute top-0 left-0 w-full h-2 bg-${primary_color}-100`}>
            <div className={`h-full bg-${primary_color}-600 transition-all duration-1000 ease-out`} style={{ width: `${percentage}%` }}></div>
          </div>
          
          {title && <h2 className="text-3xl font-extrabold text-gray-900 mb-4 mt-4">{title}</h2>}
          {subtitle && <p className="text-lg text-gray-500 mb-10">{subtitle}</p>}
          
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight mb-2">
              {currency}{raised?.toLocaleString()}
            </div>
            <div className="text-xl text-gray-500 font-medium">
              đã huy động được mục tiêu {currency}{goal?.toLocaleString()}
            </div>
          </div>
          
          <div className="w-full bg-gray-100 rounded-full h-4 mb-8 overflow-hidden">
            <div className={`bg-${primary_color}-600 h-4 rounded-full transition-all duration-1000 ease-out`} style={{ width: `${percentage}%` }}></div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-8 mb-10">
            <div>
              <div className="text-2xl font-bold text-gray-900">{percentage}%</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">Hoàn thành</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{backers?.toLocaleString()}</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">Người ủng hộ</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{daysLeft}</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">Ngày còn lại</div>
            </div>
          </div>
          
          <button className={`w-full sm:w-auto px-10 py-4 bg-${primary_color}-600 text-white text-lg font-bold rounded-xl hover:bg-${primary_color}-700 transition-colors shadow-lg shadow-${primary_color}-600/30`}>
            Đóng góp ngay
          </button>
        </div>
      </div>
    </section>
  );
};
