import React from 'react';

interface Donor {
  name: string;
  amount: string;
  time: string;
}

export const DonationProgressTracker = ({ title, subtitle, goal, current, donors, impact_description, campaign_end_date, primary_color = 'blue' }: any) => {
  const percentage = Math.min(Math.round((current / goal) * 100), 100);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-[80px] p-12 md:p-24 border border-gray-100 shadow-[0_48px_96px_-12px_rgba(0,0,0,0.08)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-widest mb-6">
                Chiến dịch đang diễn ra
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight tracking-tight">{title || 'Cùng nhau tạo nên thay đổi'}</h2>
              <p className="text-xl text-gray-500 mb-12 leading-relaxed font-medium">{subtitle || 'Mỗi đóng góp của bạn đều mang lại hy vọng cho những mảnh đời khó khăn.'}</p>
              
              <div className="space-y-8 mb-12">
                <div className="flex justify-between items-end">
                  <div className="space-y-2">
                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Đã quyên góp</span>
                    <div className="text-5xl font-black text-orange-600 tracking-tighter">{current.toLocaleString()} VNĐ</div>
                  </div>
                  <div className="text-right space-y-2">
                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Mục tiêu</span>
                    <div className="text-2xl font-black text-gray-900">{goal.toLocaleString()} VNĐ</div>
                  </div>
                </div>
                
                <div className="h-6 bg-gray-200 rounded-full overflow-hidden p-1 shadow-inner">
                  <div 
                    className="h-full bg-orange-600 rounded-full transition-all duration-1000 ease-out relative shadow-lg"
                    style={{ width: `${percentage}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm font-black text-gray-400 uppercase tracking-widest">
                    {percentage}% hoàn thành
                  </div>
                  {campaign_end_date && (
                    <div className="text-sm font-black text-orange-600 uppercase tracking-widest">
                      Còn lại: {campaign_end_date}
                    </div>
                  )}
                </div>
              </div>

              {impact_description && (
                <div className="p-8 bg-white rounded-[40px] border border-gray-100 mb-12 shadow-sm">
                  <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Tác động của bạn</h4>
                  <p className="text-gray-700 font-bold leading-relaxed italic">"{impact_description}"</p>
                </div>
              )}

              <button className="w-full py-6 bg-gray-900 text-white rounded-[32px] font-black text-xl hover:bg-orange-600 transition-all shadow-2xl hover:scale-[1.02] active:scale-95 uppercase tracking-widest">
                Quyên góp ngay
              </button>
            </div>

            <div className="bg-white rounded-[64px] p-10 md:p-14 shadow-2xl border border-gray-50 relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center text-white font-black text-2xl shadow-xl rotate-12">
                {donors?.length}+
              </div>
              <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-10 flex items-center gap-3">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-ping"></span>
                Đóng góp mới nhất
              </h3>
              <div className="space-y-8">
                {donors?.map((donor: Donor, index: number) => (
                  <div key={index} className="flex items-center justify-between group">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-[24px] bg-gray-50 flex items-center justify-center text-2xl group-hover:bg-orange-50 transition-colors shadow-sm">❤️</div>
                      <div>
                        <div className="font-black text-xl text-gray-900 mb-1">{donor.name}</div>
                        <div className="text-xs text-gray-400 font-black uppercase tracking-widest">{donor.time}</div>
                      </div>
                    </div>
                    <div className="font-black text-xl text-orange-600">+{donor.amount}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 pt-10 border-t border-gray-50 text-center">
                <button className="text-xs font-black text-gray-400 uppercase tracking-widest hover:text-gray-900 transition-colors">
                  Xem tất cả nhà hảo tâm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
