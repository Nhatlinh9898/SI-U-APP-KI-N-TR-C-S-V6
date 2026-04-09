import React from 'react';

export const TokenSaleProgress = ({ title, subtitle, tiers, totalRaised, hardCap, primary_color = 'blue' }: any) => {
  const percentage = Math.min(Math.round((totalRaised / hardCap) * 100), 100);

  return (
    <section className="py-20 bg-gray-950 text-white overflow-hidden relative">
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-${primary_color}-600/10 blur-[120px] rounded-full`}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 leading-tight">{title || 'Token Sale Progress'}</h2>
          <p className="text-xl text-white/40 max-w-3xl mx-auto">{subtitle || 'Tham gia vào tương lai của tài chính phi tập trung ngay hôm nay.'}</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-[64px] p-10 md:p-20 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <span className="text-xs font-black text-white/40 uppercase tracking-widest">Đã huy động</span>
                    <div className="text-5xl font-black">${totalRaised.toLocaleString()}</div>
                  </div>
                  <div className="text-right space-y-1">
                    <span className="text-xs font-black text-white/40 uppercase tracking-widest">Mục tiêu tối đa</span>
                    <div className="text-2xl font-black text-white/60">${hardCap.toLocaleString()}</div>
                  </div>
                </div>

                <div className="relative h-6 bg-white/5 rounded-full overflow-hidden p-1 border border-white/10">
                  <div 
                    className={`h-full bg-gradient-to-r from-${primary_color}-600 to-${primary_color}-400 rounded-full transition-all duration-1000 ease-out relative`}
                    style={{ width: `${percentage}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
                
                <div className="flex justify-between text-[10px] font-black text-white/20 uppercase tracking-widest">
                  <span>0%</span>
                  <span>{percentage}% Complete</span>
                  <span>100%</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tiers?.map((tier: any, index: number) => (
                  <div key={index} className={`p-6 rounded-[32px] border transition-all ${
                    tier.active ? `bg-${primary_color}-600/20 border-${primary_color}-500/50` : 'bg-white/5 border-white/5 opacity-40'
                  }`}>
                    <div className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-60">{tier.name}</div>
                    <div className="text-xl font-black mb-1">${tier.price}</div>
                    <div className="text-[10px] font-bold opacity-40 uppercase tracking-widest">{tier.status}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 rounded-[48px] p-10 border border-white/10 text-center">
              <div className="text-xs font-black text-white/40 uppercase tracking-widest mb-8">Kết thúc sau</div>
              <div className="grid grid-cols-3 gap-4 mb-12">
                {['12', '45', '08'].map((val, i) => (
                  <div key={i} className="space-y-2">
                    <div className="text-3xl font-black">{val}</div>
                    <div className="text-[8px] font-black text-white/20 uppercase tracking-widest">{['Ngày', 'Giờ', 'Phút'][i]}</div>
                  </div>
                ))}
              </div>
              <button className={`w-full py-5 bg-${primary_color}-600 text-white rounded-2xl font-black text-lg hover:scale-[1.02] transition-all shadow-2xl shadow-${primary_color}-600/30`}>
                Mua Token Ngay
              </button>
              <p className="mt-6 text-[10px] font-bold text-white/20 uppercase tracking-widest">
                Chấp nhận: ETH, USDT, USDC
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
