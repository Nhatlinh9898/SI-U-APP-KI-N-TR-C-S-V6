import React, { useState } from 'react';

interface Integration {
  name: string;
  category: string;
  description: string;
  logo: string;
  status: 'Connected' | 'Available' | 'Popular';
}

export const IntegrationDirectory = ({ title, subtitle, integrations, primary_color = 'blue' }: any) => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set((integrations || []).map((i: Integration) => i.category))];

  const filtered = filter === 'All' 
    ? integrations 
    : integrations?.filter((i: Integration) => i.category === filter);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">{title || 'Kết nối với mọi công cụ'}</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">{subtitle || 'Tích hợp mượt mà với các ứng dụng bạn đang sử dụng hàng ngày.'}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat: any) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                filter === cat 
                  ? `bg-${primary_color}-600 text-white shadow-lg shadow-${primary_color}-600/30` 
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered?.map((item: Integration, index: number) => (
            <div key={index} className="group p-8 bg-gray-50 rounded-[32px] border border-gray-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center p-3 group-hover:scale-110 transition-transform">
                  <img src={item.logo} alt={item.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                  item.status === 'Connected' ? 'bg-green-100 text-green-600' : 
                  item.status === 'Popular' ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'
                }`}>
                  {item.status}
                </span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2">{item.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">{item.description}</p>
              <button className={`text-sm font-black text-${primary_color}-600 uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all`}>
                Tìm hiểu thêm <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
