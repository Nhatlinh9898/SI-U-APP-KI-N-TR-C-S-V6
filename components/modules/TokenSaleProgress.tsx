import React from 'react';

export const TokenSaleProgress = ({ title, subtitle, tiers, totalRaised, hardCap, tokenSymbol = 'TOKEN', impact_description, primary_color = 'blue' }: any) => {
  const percentage = Math.min(Math.round((totalRaised / hardCap) * 100), 100);

  return (
    <section className="py-24 bg-gray-950 text-white overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-orange-600/10 blur-[160px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">{title || 'Token Sale Progress'}</h2>
          <p className="text-xl text-white/40 max-w-3xl mx-auto leading-relaxed font-medium">{subtitle || 'Tham gia vào tương lai của tài chính phi tập trung ngay hôm nay.'}</p>
        </div>

        <div className="bg-white/5 backdrop-blur-2xl rounded-[80px] p-12 md:p-24 border border-white/10 shadow-[0_64px_128px_-12px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-center">
            <div className="lg:col-span-2 space-y-16">
              <div className="space-y-8">
                <div className="flex justify-between items-end">
                  <div className="space-y-2">
                    <span className="text-xs font-black text-white/40 uppercase tracking-[0.2em]">Đã huy động vốn</span>
                    <div className="text-6xl md:text-8xl font-black tracking-tighter">${totalRaised.toLocaleString()}</div>
                  </div>
                  <div className="text-right space-y-2">
                    <span className="text-xs font-black text-white/40 uppercase tracking-[0.2em]">Mục tiêu tối đa (Hardcap)</span>
                    <div className="text-3xl font-black text-white/60">${hardCap.toLocaleString()}</div>
                  </div>
                </div>

                <div className="relative h-10 bg-white/5 rounded-full overflow-hidden p-1.5 border border-white/10 shadow-inner">
                  <div 
                    className="h-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 rounded-full transition-all duration-1000 ease-out relative shadow-[0_0_40px_rgba(234,88,12,0.4)]"
                    style={{ width: `${percentage}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
                
                <div className="flex justify-between text-xs font-black text-white/20 uppercase tracking-[0.3em]">
                  <span>0%</span>
                  <span className="text-orange-500">{percentage}% Đã hoàn thành</span>
                  <span>100%</span>
                </div>
              </div>

              {impact_description && (
                <div className="p-8 bg-white/5 rounded-[40px] border border-white/5">
                  <h4 className="text-xs font-black text-white/40 uppercase tracking-widest mb-4">Tác động của dự án</h4>
                  <p className="text-lg text-white/80 font-medium leading-relaxed">{impact_description}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tiers?.map((tier: any, index: number) => (
                  <div key={index} className={`p-8 rounded-[48px] border transition-all duration-500 ${
                    tier.active ? 'bg-orange-600/20 border-orange-500/50 scale-105 shadow-2xl' : 'bg-white/5 border-white/5 opacity-40'
                  }`}>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 opacity-60">{tier.name}</div>
                    <div className="text-3xl font-black mb-2">${tier.price}</div>
                    <div className="text-[10px] font-black text-orange-500 uppercase tracking-widest">{tier.status}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 rounded-[64px] p-12 border border-white/10 text-center shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <div className="text-xs font-black text-white/40 uppercase tracking-[0.2em] mb-10">Giai đoạn hiện tại kết thúc sau</div>
                <div className="grid grid-cols-3 gap-6 mb-16">
                  {['12', '45', '08'].map((val, i) => (
                    <div key={i} className="space-y-3">
                      <div className="text-4xl font-black tracking-tighter">{val}</div>
                      <div className="text-[10px] font-black text-white/20 uppercase tracking-widest">{['Ngày', 'Giờ', 'Phút'][i]}</div>
                    </div>
                  ))}
                </div>
                
                <div className="mb-10 text-left space-y-4">
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-white/40 uppercase tracking-widest">Token Symbol</span>
                    <span className="text-orange-500">{tokenSymbol}</span>
                  </div>
                  <div className="h-px bg-white/5"></div>
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-white/40 uppercase tracking-widest">Mạng lưới</span>
                    <span>Ethereum (ERC-20)</span>
                  </div>
                </div>

                <button className="w-full py-6 bg-orange-600 text-white rounded-[32px] font-black text-xl hover:bg-orange-500 transition-all shadow-[0_24px_48px_-12px_rgba(234,88,12,0.5)] hover:scale-[1.02] active:scale-95 uppercase tracking-widest">
                  Mua {tokenSymbol} Ngay
                </button>
                
                <p className="mt-10 text-[10px] font-black text-white/20 uppercase tracking-[0.2em] leading-relaxed">
                  Chấp nhận thanh toán qua:<br/>
                  <span className="text-white/40">ETH, USDT, USDC, BNB</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
