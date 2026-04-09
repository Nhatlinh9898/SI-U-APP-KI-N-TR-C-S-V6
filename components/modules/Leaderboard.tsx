import React from 'react';

interface RankItem {
  rank: number;
  name: string;
  score: string;
  avatar: string;
  trend: 'up' | 'down' | 'stable';
}

export const Leaderboard = ({ title, subtitle, items, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500">{subtitle}</p>}
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 sm:p-10">
            <div className="space-y-4">
              {items?.map((item: RankItem, index: number) => (
                <div 
                  key={index} 
                  className={`flex items-center justify-between p-4 rounded-2xl transition-all ${
                    index === 0 ? `bg-${primary_color}-50 border border-${primary_color}-100` : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-lg ${
                      index === 0 ? 'bg-yellow-400 text-white' :
                      index === 1 ? 'bg-gray-300 text-white' :
                      index === 2 ? 'bg-amber-600 text-white' :
                      'text-gray-400'
                    }`}>
                      {item.rank}
                    </div>
                    <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" referrerPolicy="no-referrer" />
                    <div>
                      <div className="font-bold text-gray-900">{item.name}</div>
                      <div className="flex items-center gap-2">
                        {item.trend === 'up' && <span className="text-green-500 text-[10px] font-bold">▲</span>}
                        {item.trend === 'down' && <span className="text-red-500 text-[10px] font-bold">▼</span>}
                        {item.trend === 'stable' && <span className="text-gray-400 text-[10px] font-bold">●</span>}
                        <span className="text-xs text-gray-400 uppercase tracking-wider">Xu hướng</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-xl font-black text-${primary_color}-600`}>{item.score}</div>
                    <div className="text-xs text-gray-400 font-medium uppercase tracking-widest">Điểm số</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 p-6 text-center border-t border-gray-200">
            <button className="text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-widest">Xem bảng xếp hạng đầy đủ</button>
          </div>
        </div>
      </div>
    </section>
  );
};
