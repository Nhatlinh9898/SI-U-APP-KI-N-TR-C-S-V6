import React from 'react';

interface Donor {
  name: string;
  amount: string;
  time: string;
}

export const DonationProgressTracker = ({ title, subtitle, goal, current, donors, primary_color = 'blue' }: any) => {
  const percentage = Math.min(Math.round((current / goal) * 100), 100);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-[64px] p-10 md:p-20 border border-gray-100 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">{title || 'Cùng nhau tạo nên thay đổi'}</h2>
              <p className="text-lg text-gray-500 mb-10">{subtitle || 'Mỗi đóng góp của bạn đều mang lại hy vọng cho những mảnh đời khó khăn.'}</p>
              
              <div className="space-y-6 mb-10">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Đã quyên góp</span>
                    <div className={`text-4xl font-black text-${primary_color}-600`}>{current.toLocaleString()} VNĐ</div>
                  </div>
                  <div className="text-right space-y-1">
                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Mục tiêu</span>
                    <div className="text-2xl font-black text-gray-900">{goal.toLocaleString()} VNĐ</div>
                  </div>
                </div>
                
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-${primary_color}-600 rounded-full transition-all duration-1000 ease-out relative`}
                    style={{ width: `${percentage}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
                <div className="text-right text-sm font-black text-gray-400 uppercase tracking-widest">
                  {percentage}% hoàn thành
                </div>
              </div>

              <button className={`w-full py-5 bg-${primary_color}-600 text-white rounded-3xl font-black text-lg hover:scale-[1.02] transition-all shadow-2xl shadow-${primary_color}-600/30`}>
                Quyên góp ngay
              </button>
            </div>

            <div className="bg-white rounded-[40px] p-8 shadow-xl border border-gray-50">
              <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-8 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                Những đóng góp gần đây
              </h3>
              <div className="space-y-6">
                {donors?.map((donor: Donor, index: number) => (
                  <div key={index} className="flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-xl group-hover:bg-blue-50 transition-colors">❤️</div>
                      <div>
                        <div className="font-black text-gray-900">{donor.name}</div>
                        <div className="text-xs text-gray-400 font-bold">{donor.time}</div>
                      </div>
                    </div>
                    <div className={`font-black text-${primary_color}-600`}>+{donor.amount}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
