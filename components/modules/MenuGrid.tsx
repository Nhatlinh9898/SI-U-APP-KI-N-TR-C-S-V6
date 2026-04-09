import React from 'react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
  calories?: string;
  dietary_info?: string[];
}

export const MenuGrid = ({ title, subtitle, items, primary_color = 'blue' }: any) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 tracking-tighter">{title || 'Thực đơn đặc sắc'}</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium">{subtitle || 'Hương vị tinh tế được chế biến từ những nguyên liệu tươi ngon nhất bởi các đầu bếp hàng đầu.'}</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {items?.map((item: MenuItem, index: number) => (
            <div key={index} className="flex flex-col group h-full">
              <div className="relative aspect-square rounded-[40px] overflow-hidden mb-6 bg-gray-100 shadow-xl group-hover:shadow-2xl transition-all duration-700">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {item.tag && (
                  <div className="absolute top-4 right-4 px-4 py-2 rounded-2xl text-[10px] font-black text-white bg-amber-600 shadow-2xl uppercase tracking-[0.2em]">
                    {item.tag}
                  </div>
                )}

                {item.calories && (
                  <div className="absolute bottom-4 left-4 px-4 py-2 rounded-2xl bg-white/90 backdrop-blur-xl text-[10px] font-black text-gray-900 shadow-2xl uppercase tracking-widest">
                    🔥 {item.calories} kcal
                  </div>
                )}
              </div>
              
              <div className="flex-grow space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-xl font-black text-gray-900 group-hover:text-amber-600 transition-colors duration-500 leading-tight">{item.name}</h3>
                  <span className="text-xl font-black text-amber-600 whitespace-nowrap">{item.price}</span>
                </div>
                
                <p className="text-gray-500 font-medium leading-relaxed line-clamp-3">{item.description}</p>
                
                {item.dietary_info && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.dietary_info.map((info, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-50 rounded-lg text-[9px] font-black text-gray-400 uppercase tracking-widest border border-gray-100">
                        {info}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <button className="mt-8 w-full py-4 bg-gray-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-amber-600 transition-all shadow-lg group-hover:translate-y-[-4px]">
                Thêm vào giỏ hàng
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
