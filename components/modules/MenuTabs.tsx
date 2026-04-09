import React, { useState } from 'react';

interface MenuCategory {
  name: string;
  items: {
    name: string;
    description: string;
    price: string;
    image: string;
  }[];
}

export const MenuTabs = ({ title, subtitle, categories, primary_color = 'blue' }: any) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">{subtitle}</p>}
        </div>

        <div className="flex justify-center gap-4 mb-12 overflow-x-auto pb-4 hide-scrollbar">
          {categories?.map((cat: MenuCategory, index: number) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-8 py-3 rounded-full font-bold transition-all whitespace-nowrap ${
                activeTab === index 
                  ? `bg-${primary_color}-600 text-white shadow-lg shadow-${primary_color}-600/30` 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {categories[activeTab]?.items?.map((item: any, index: number) => (
            <div key={index} className="flex gap-6 group">
              <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-grow border-b border-gray-100 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors">{item.name}</h3>
                  <span className={`font-black text-${primary_color}-600`}>{item.price}</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
