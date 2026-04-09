import React from 'react';

interface ResultStat {
  label: string;
  value: string;
  icon: string;
}

export const ProjectResultStats = ({ title, subtitle, image, stats, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-[64px] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16 border border-gray-100 shadow-xl">
          <div className="lg:w-1/2">
            <div className={`inline-block px-4 py-1 bg-${primary_color}-100 text-${primary_color}-600 rounded-full text-xs font-black uppercase tracking-widest mb-4`}>
              Kết quả thực tế
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">{title}</h2>
            <p className="text-xl text-gray-500 mb-10 leading-relaxed">{subtitle}</p>

            <div className="grid grid-cols-2 gap-6">
              {stats?.map((stat: ResultStat, index: number) => (
                <div key={index} className="bg-white p-8 rounded-[32px] shadow-lg border border-gray-50 hover:-translate-y-2 transition-all duration-500">
                  <div className="text-3xl mb-4">{stat.icon}</div>
                  <div className={`text-3xl font-black text-${primary_color}-600 mb-1`}>{stat.value}</div>
                  <div className="text-xs font-black text-gray-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className={`absolute -inset-4 bg-${primary_color}-600/10 blur-[100px] rounded-full`}></div>
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
              <img src={image} alt={title} className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
