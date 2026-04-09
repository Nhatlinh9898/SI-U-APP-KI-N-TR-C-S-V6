import React from 'react';

interface Transaction {
  type: 'Send' | 'Receive' | 'Swap';
  amount: string;
  token: string;
  status: 'Completed' | 'Pending';
  time: string;
}

export const CryptoWalletConnectPreview = ({ title, subtitle, balance, address, transactions, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 backdrop-blur-2xl rounded-[64px] p-10 md:p-20 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6 leading-tight">{title || 'Kết nối ví Web3'}</h2>
              <p className="text-lg text-white/40 mb-10">{subtitle || 'Trải nghiệm sức mạnh của tài chính phi tập trung ngay trên trình duyệt của bạn.'}</p>
              
              <div className="p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[40px] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl">💎</div>
                    <div className="text-xs font-black text-white/60 uppercase tracking-widest">Mainnet</div>
                  </div>
                  <div className="text-xs font-black text-white/60 uppercase tracking-widest mb-1">Số dư hiện tại</div>
                  <div className="text-4xl font-black mb-8">{balance || '12.45 ETH'}</div>
                  <div className="flex justify-between items-center">
                    <div className="font-mono text-sm text-white/60">{address || '0x71C...3E4'}</div>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <button className="py-4 bg-white/10 hover:bg-white/20 rounded-2xl font-black text-sm uppercase tracking-widest transition-all">Gửi</button>
                <button className="py-4 bg-white/10 hover:bg-white/20 rounded-2xl font-black text-sm uppercase tracking-widest transition-all">Nhận</button>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-xs font-black text-white/40 uppercase tracking-widest flex items-center gap-2">
                Giao dịch gần đây
              </h3>
              <div className="space-y-4">
                {transactions?.map((tx: Transaction, index: number) => (
                  <div key={index} className="p-6 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-all flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl ${
                        tx.type === 'Receive' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                      }`}>
                        {tx.type === 'Receive' ? '↓' : tx.type === 'Send' ? '↑' : '⇄'}
                      </div>
                      <div>
                        <div className="font-black">{tx.type} {tx.token}</div>
                        <div className="text-xs text-white/40 font-bold">{tx.time}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-black ${tx.type === 'Receive' ? 'text-green-400' : 'text-white'}`}>
                        {tx.type === 'Receive' ? '+' : '-'}{tx.amount}
                      </div>
                      <div className="text-[10px] font-black text-white/20 uppercase tracking-widest">{tx.status}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full text-center text-xs font-black text-white/40 uppercase tracking-widest hover:text-white transition-colors">
                Xem tất cả lịch sử <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
