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
  const [search, setSearch] = useState('');
  const categories = ['All', ...new Set((integrations || []).map((i: Integration) => i.category))];

  const filtered = (integrations || [])?.filter((i: Integration) => {
    const matchesFilter = filter === 'All' || i.category === filter;
    const matchesSearch = i.name.toLowerCase().includes(search.toLowerCase()) || 
                         i.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className={`absolute top-0 right-0 w-96 h-96 bg-${primary_color}-600/5 blur-[100px] rounded-full -mr-48 -mt-48`}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-tight">{title || 'Kết nối với mọi công cụ'}</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">{subtitle || 'Tích hợp mượt mà với các ứng dụng bạn đang sử dụng hàng ngày để tối ưu hóa quy trình làm việc.'}</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 bg-gray-50 p-6 rounded-[40px] border border-gray-100">
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {categories.map((cat: any) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-2xl font-black text-sm transition-all ${
                  filter === cat 
                    ? `bg-${primary_color}-600 text-white shadow-xl shadow-${primary_color}-600/30` 
                    : 'bg-white text-gray-500 hover:bg-gray-200 border border-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-80">
            <input 
              type="text" 
              placeholder="Tìm kiếm ứng dụng..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-3 pl-12 outline-none focus:ring-2 focus:ring-blue-500 font-bold text-sm shadow-sm"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered?.map((item: Integration, index: number) => (
            <div key={index} className="group p-10 bg-white rounded-[48px] border border-gray-100 hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-3 transition-all duration-500">
              <div className="flex justify-between items-start mb-8">
                <div className={`w-20 h-20 rounded-3xl bg-gray-50 flex items-center justify-center p-4 group-hover:bg-${primary_color}-50 transition-colors`}>
                  <img src={item.logo} alt={item.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
                </div>
                <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                  item.status === 'Connected' ? 'bg-green-100 text-green-600' : 
                  item.status === 'Popular' ? 'bg-amber-100 text-amber-600' : `bg-${primary_color}-100 text-${primary_color}-600`
                }`}>
                  {item.status}
                </div>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">{item.name}</h3>
              <p className="text-gray-500 leading-relaxed mb-8 text-sm">{item.description}</p>
              <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.category}</span>
                <button className={`text-sm font-black text-${primary_color}-600 uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all`}>
                  Kết nối <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filtered.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-[48px] border border-dashed border-gray-200">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-black text-gray-900 mb-2">Không tìm thấy ứng dụng</h3>
            <p className="text-gray-500">Thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác.</p>
          </div>
        )}
      </div>
    </section>
  );
};
