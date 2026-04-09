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
  developerDocs?: string;
  popularityScore?: number;
  reviews?: number;
  author?: string;
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
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full -mr-96 -mt-96"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-8xl font-black text-gray-900 mb-8 tracking-tighter leading-none">{title || 'Kết nối với mọi công cụ'}</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium">{subtitle || 'Tích hợp mượt mà với các ứng dụng bạn đang sử dụng hàng ngày để tối ưu hóa quy trình làm việc.'}</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-20 bg-gray-50/50 p-8 rounded-[48px] border border-gray-100 backdrop-blur-sm">
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            {categories.map((cat: any) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all duration-500 ${
                  filter === cat 
                    ? 'bg-gray-900 text-white shadow-2xl scale-105' 
                    : 'bg-white text-gray-500 hover:bg-gray-200 border border-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full lg:w-[400px]">
            <input 
              type="text" 
              placeholder="Tìm kiếm ứng dụng..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-gray-100 rounded-[24px] px-10 py-5 pl-16 outline-none focus:ring-4 focus:ring-blue-500/20 font-bold text-sm shadow-xl shadow-gray-900/5 transition-all"
            />
            <span className="absolute left-8 top-1/2 -translate-y-1/2 text-xl">🔍</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered?.map((item: Integration, index: number) => (
            <div 
              key={index} 
              onClick={() => setSelectedItem(item)}
              className="group p-12 bg-white rounded-[64px] border border-gray-100 hover:shadow-[0_64px_128px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-4 transition-all duration-700 cursor-pointer flex flex-col"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-28 h-28 rounded-[32px] bg-gray-50 flex items-center justify-center p-6 group-hover:bg-blue-50 transition-all duration-500 shadow-inner">
                  <img src={item.logo} alt={item.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${
                    item.status === 'Connected' ? 'bg-green-100 text-green-600' : 
                    item.status === 'Popular' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {item.status}
                  </div>
                  {item.popularityScore && (
                    <div className="flex items-center gap-1 text-amber-500 font-black text-xs">
                      ★ {item.popularityScore}
                    </div>
                  )}
                </div>
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">{item.name}</h3>
              <p className="text-gray-500 leading-relaxed mb-12 font-medium line-clamp-3">{item.description}</p>
              
              <div className="pt-10 border-t border-gray-50 flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{item.category}</span>
                  {item.author && <span className="text-[10px] font-bold text-gray-300">Bởi {item.author}</span>}
                </div>
                <button className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] flex items-center gap-3 group-hover:gap-5 transition-all">
                  Chi tiết <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filtered.length === 0 && (
          <div className="text-center py-40 bg-gray-50 rounded-[80px] border-4 border-dashed border-gray-100">
            <div className="text-8xl mb-8 grayscale">🔍</div>
            <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Không tìm thấy ứng dụng</h3>
            <p className="text-gray-400 font-medium text-lg">Thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác.</p>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-gray-900/80 backdrop-blur-xl"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="relative w-full max-w-3xl bg-white rounded-[80px] p-16 md:p-24 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto hide-scrollbar"
            >
              <div className="flex flex-col md:flex-row items-start gap-12 mb-16">
                <div className="w-40 h-40 rounded-[40px] bg-gray-50 flex items-center justify-center p-8 shadow-inner shrink-0">
                  <img src={selectedItem.logo} alt={selectedItem.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter">{selectedItem.name}</h3>
                    <span className="px-6 py-2 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest shadow-xl">{selectedItem.status}</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <p className="text-gray-400 font-black uppercase tracking-[0.2em] text-xs">{selectedItem.category}</p>
                    {selectedItem.reviews && <p className="text-xs font-bold text-gray-400">({selectedItem.reviews} đánh giá)</p>}
                  </div>
                </div>
              </div>

              <div className="space-y-12 mb-16">
                <div>
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">Giới thiệu chi tiết</h4>
                  <p className="text-xl text-gray-600 leading-relaxed font-medium">{selectedItem.longDescription || selectedItem.description}</p>
                </div>

                {selectedItem.features && (
                  <div>
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">Tính năng nổi bật</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {selectedItem.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-4 p-5 bg-gray-50 rounded-3xl text-sm font-bold text-gray-700 border border-gray-100">
                          <span className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xs shadow-lg">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedItem.developerDocs && (
                  <div className="p-8 bg-blue-50 rounded-[40px] border border-blue-100 flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-black text-gray-900 mb-1 tracking-tight">Tài liệu cho nhà phát triển</h4>
                      <p className="text-sm font-medium text-blue-600/70">Tìm hiểu cách tích hợp sâu hơn qua API</p>
                    </div>
                    <a href={selectedItem.developerDocs} className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:scale-105 transition-all">Xem tài liệu</a>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 py-7 bg-gray-900 text-white rounded-[32px] font-black text-lg hover:bg-blue-600 transition-all shadow-2xl shadow-gray-900/20 uppercase tracking-[0.2em]">
                  Kết nối ngay
                </button>
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="px-12 py-7 bg-gray-100 text-gray-500 rounded-[32px] font-black text-lg hover:bg-gray-200 transition-all uppercase tracking-[0.2em]"
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
