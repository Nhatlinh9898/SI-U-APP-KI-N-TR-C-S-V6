import React from 'react';

interface MenuItem {
  name: string;
  description?: string;
  price: string;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export const ServiceMenu = ({ title, subtitle, categories, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500">{subtitle}</p>}
        </div>
        
        <div className="space-y-16">
          {categories?.map((cat: MenuCategory, index: number) => (
            <div key={index}>
              <h3 className={`text-2xl font-bold text-${primary_color}-700 mb-8 pb-2 border-b-2 border-${primary_color}-100 inline-block`}>
                {cat.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {cat.items?.map((item: MenuItem, itemIndex: number) => (
                  <div key={itemIndex} className="flex flex-col">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-lg font-bold text-gray-900 pr-4 bg-white z-10">{item.name}</h4>
                      <div className="flex-grow border-b border-dotted border-gray-300 relative top-[-6px]"></div>
                      <span className={`text-lg font-bold text-${primary_color}-600 pl-4 bg-white z-10`}>{item.price}</span>
                    </div>
                    {item.description && <p className="text-gray-500 text-sm mt-1 pr-12">{item.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
