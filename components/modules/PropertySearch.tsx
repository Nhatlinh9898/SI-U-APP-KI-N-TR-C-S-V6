import React from 'react';

export const PropertySearch = ({ title, subtitle, primary_color = 'blue' }: any) => {
  return (
    <section className="py-12 bg-white -mt-16 relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[32px] shadow-2xl border border-gray-100 p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Địa điểm</label>
              <select className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 font-bold text-gray-900 focus:ring-2 focus:ring-blue-500">
                <option>Hà Nội</option>
                <option>TP. Hồ Chí Minh</option>
                <option>Đà Nẵng</option>
                <option>Nha Trang</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Loại hình</label>
              <select className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 font-bold text-gray-900 focus:ring-2 focus:ring-blue-500">
                <option>Căn hộ</option>
                <option>Nhà phố</option>
                <option>Biệt thự</option>
                <option>Đất nền</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Mức giá</label>
              <select className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 font-bold text-gray-900 focus:ring-2 focus:ring-blue-500">
                <option>Dưới 2 tỷ</option>
                <option>2 - 5 tỷ</option>
                <option>5 - 10 tỷ</option>
                <option>Trên 10 tỷ</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className={`w-full py-3 bg-${primary_color}-600 text-white rounded-xl font-black shadow-lg shadow-${primary_color}-600/30 hover:scale-105 transition-all`}>
                Tìm kiếm ngay
              </button>
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            {['Gần biển', 'Sổ đỏ riêng', 'Hỗ trợ vay 70%', 'Nội thất cao cấp'].map((tag, i) => (
              <button key={i} className="text-xs font-bold text-gray-400 hover:text-blue-600 transition-colors">
                # {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
