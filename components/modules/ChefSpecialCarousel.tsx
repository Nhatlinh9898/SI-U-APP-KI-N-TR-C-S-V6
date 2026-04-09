import React from 'react';

interface Special {
  name: string;
  description: string;
  longDescription?: string;
  chefNote?: string;
  price: string;
  image: string;
  tag: string;
}

export const ChefSpecialCarousel = ({ title, subtitle, specials, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">{subtitle}</p>}
        </div>

        <div className="flex gap-8 overflow-x-auto pb-12 custom-scrollbar snap-x">
          {specials?.map((item: Special, index: number) => (
            <div key={index} className="flex-shrink-0 w-[350px] md:w-[500px] snap-center">
              <div className="bg-gray-50 rounded-[48px] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 group h-full flex flex-col">
                <div className="aspect-[16/10] relative overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                  <div className="absolute top-6 left-6">
                    <div className="bg-orange-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                      {item.tag}
                    </div>
                  </div>
                </div>
                
                <div className="p-10 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl font-black text-gray-900">{item.name}</h3>
                    <div className="text-2xl font-black text-orange-500">{item.price}</div>
                  </div>
                  
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">{item.longDescription || item.description}</p>
                  
                  {item.chefNote && (
                    <div className="mt-auto p-4 bg-orange-50 rounded-2xl border border-orange-100 italic text-sm text-orange-800 mb-8">
                      <span className="font-black not-italic block mb-1 uppercase text-[10px] tracking-widest">Lời nhắn từ đầu bếp:</span>
                      "{item.chefNote}"
                    </div>
                  )}

                  <button className="w-full bg-gray-900 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl">
                    Đặt món ngay
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
