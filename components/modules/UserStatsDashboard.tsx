import React from 'react';

interface Stat {
  label: string;
  value: string;
  icon: string;
  color: string;
}

export const UserStatsDashboard = ({ title, subtitle, stats, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-[48px] p-10 md:p-16 shadow-2xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className={`absolute top-0 right-0 w-64 h-64 bg-${primary_color}-600/20 blur-[100px] rounded-full`}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full"></div>

          <div className="relative z-10">
            <div className="mb-12">
              {title && <h2 className="text-3xl font-black text-white mb-4">{title}</h2>}
              {subtitle && <p className="text-gray-400 max-w-2xl">{subtitle}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats?.map((stat: Stat, index: number) => (
                <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group">
                  <div className={`w-12 h-12 rounded-2xl bg-${stat.color}-500/20 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-black text-white mb-1 tracking-tight">{stat.value}</div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} className="w-10 h-10 rounded-full border-2 border-gray-900" referrerPolicy="no-referrer" />
                  ))}
                </div>
                <div className="text-sm text-gray-400">
                  <span className="text-white font-bold">15.4k+</span> người dùng mới trong tháng này
                </div>
              </div>
              <button className={`px-8 py-4 bg-${primary_color}-600 text-white rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-${primary_color}-600/30`}>
                Xem báo cáo chi tiết
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
