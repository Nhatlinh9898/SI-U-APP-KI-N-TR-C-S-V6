import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Integration {
  name: string;
  category: string;
  description: string;
  longDescription?: string;
  features?: string[];
  logo: string;
  status: 'Connected' | 'Available' | 'Popular';
}

export const IntegrationDirectory = ({ title, subtitle, integrations, primary_color = 'blue' }: any) => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState<Integration | null>(null);

  const categories = ['All', ...new Set((integrations || []).map((i: Integration) => i.category))];

  const filtered = (integrations || [])?.filter((i: Integration) => {
    const matchesFilter = filter === 'All' || i.category === filter;
    const matchesSearch = i.name.toLowerCase().includes(search.toLowerCase()) || 
                         i.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/5 blur-[100px] rounded-full -mr-48 -mt-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">{title || 'Kết nối với mọi công cụ'}</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">{subtitle || 'Tích hợp mượt mà với các ứng dụng bạn đang sử dụng hàng ngày để tối ưu hóa quy trình làm việc.'}</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 bg-gray-50 p-6 rounded-[40px] border border-gray-100">
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {categories.map((cat: any) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? 'bg-gray-900 text-white shadow-2xl scale-105' 
                    : 'bg-white text-gray-500 hover:bg-gray-200 border border-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-96">
            <input 
              type="text" 
              placeholder="Tìm kiếm ứng dụng..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-3xl px-8 py-4 pl-14 outline-none focus:ring-4 focus:ring-orange-500/20 font-black text-sm shadow-sm transition-all"
            />
            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-xl">🔍</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered?.map((item: Integration, index: number) => (
            <div 
              key={index} 
              onClick={() => setSelectedItem(item)}
              className="group p-10 bg-white rounded-[56px] border border-gray-100 hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-3 transition-all duration-500 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-10">
                <div className="w-24 h-24 rounded-3xl bg-gray-50 flex items-center justify-center p-5 group-hover:bg-orange-50 transition-colors shadow-inner">
                  <img src={item.logo} alt={item.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
                </div>
                <div className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${
                  item.status === 'Connected' ? 'bg-green-100 text-green-600' : 
                  item.status === 'Popular' ? 'bg-amber-100 text-amber-600' : 'bg-orange-100 text-orange-600'
                }`}>
                  {item.status}
                </div>
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-4">{item.name}</h3>
              <p className="text-gray-500 leading-relaxed mb-10 font-medium">{item.description}</p>
              
              <div className="pt-8 border-t border-gray-50 flex items-center justify-between">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.category}</span>
                <button className="text-sm font-black text-orange-600 uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                  Chi tiết <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filtered.length === 0 && (
          <div className="text-center py-32 bg-gray-50 rounded-[64px] border-2 border-dashed border-gray-200">
            <div className="text-6xl mb-6">🔍</div>
            <h3 className="text-2xl font-black text-gray-900 mb-3">Không tìm thấy ứng dụng</h3>
            <p className="text-gray-500 font-medium">Thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác.</p>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[64px] p-12 shadow-2xl overflow-hidden"
            >
              <div className="flex items-start gap-8 mb-10">
                <div className="w-32 h-32 rounded-3xl bg-gray-50 flex items-center justify-center p-6 shadow-inner">
                  <img src={selectedItem.logo} alt={selectedItem.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-4xl font-black text-gray-900">{selectedItem.name}</h3>
                    <span className="px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-widest">{selectedItem.status}</span>
                  </div>
                  <p className="text-gray-400 font-black uppercase tracking-widest text-xs">{selectedItem.category}</p>
                </div>
              </div>

              <div className="space-y-8 mb-12">
                <div>
                  <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Giới thiệu</h4>
                  <p className="text-gray-600 leading-relaxed font-medium">{selectedItem.longDescription || selectedItem.description}</p>
                </div>

                {selectedItem.features && (
                  <div>
                    <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Tính năng nổi bật</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedItem.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                          <span className="text-orange-600">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <button className="flex-1 py-5 bg-gray-900 text-white rounded-3xl font-black text-lg hover:bg-orange-600 transition-all shadow-xl uppercase tracking-widest">
                  Kết nối ngay
                </button>
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="px-10 py-5 bg-gray-100 text-gray-500 rounded-3xl font-black text-lg hover:bg-gray-200 transition-all uppercase tracking-widest"
                >
                  Đóng
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
