import React from 'react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
}

export const MenuGrid = ({ title, subtitle, items, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">{subtitle}</p>}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items?.map((item: MenuItem, index: number) => (
            <div key={index} className="flex flex-col group">
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {item.tag && (
                  <div className={`absolute top-3 right-3 px-2 py-1 rounded-lg text-[10px] font-bold text-white bg-${primary_color}-600 shadow-lg uppercase tracking-widest`}>
                    {item.tag}
                  </div>
                )}
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors">{item.name}</h3>
                <span className={`text-lg font-black text-${primary_color}-600`}>{item.price}</span>
              </div>
              <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
