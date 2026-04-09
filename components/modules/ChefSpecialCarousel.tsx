import React from 'react';

interface Special {
  name: string;
  description: string;
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
            <div key={index} className="flex-shrink-0 w-[350px] md:w-[450px] snap-center">
              <div className="bg-gray-50 rounded-[48px] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div className="bg-orange-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                      {item.tag}
                    </div>
                  </div>
                  <div className="absolute bottom-10 left-10 right-10">
                    <h3 className="text-3xl font-black text-white mb-2">{item.name}</h3>
                    <p className="text-white/70 text-sm line-clamp-2 mb-6">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-black text-orange-500">{item.price}</div>
                      <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-black text-xs hover:bg-orange-600 hover:text-white transition-all">
                        Đặt món ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
