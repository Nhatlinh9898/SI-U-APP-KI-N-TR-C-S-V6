import React from 'react';

interface Product {
  name: string;
  image: string;
  price: string;
  features: { name: string; value: string | boolean }[];
  buttonText: string;
  isPopular?: boolean;
}

export const ProductComparison = ({ title, subtitle, products, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products?.map((product: Product, index: number) => (
            <div key={index} className={`relative flex flex-col bg-white rounded-[32px] border-2 ${product.isPopular ? `border-${primary_color}-500 shadow-2xl shadow-${primary_color}-500/10 scale-105 z-10` : 'border-gray-100'} p-8 transition-all duration-300`}>
              {product.isPopular && (
                <div className={`absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-${primary_color}-600 text-white text-xs font-black uppercase tracking-widest rounded-full shadow-lg`}>
                  Khuyên dùng
                </div>
              )}
              
              <div className="aspect-square rounded-2xl overflow-hidden mb-8 bg-gray-50">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-2">{product.name}</h3>
              <div className={`text-3xl font-black text-${primary_color}-600 mb-8`}>{product.price}</div>

              <div className="flex-grow space-y-4 mb-10">
                {product.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex justify-between items-center py-2 border-b border-gray-50">
                    <span className="text-sm text-gray-500 font-medium">{feature.name}</span>
                    <span className="text-sm font-bold text-gray-900">
                      {typeof feature.value === 'boolean' ? (
                        feature.value ? '✅' : '❌'
                      ) : feature.value}
                    </span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-2xl font-black transition-all ${
                product.isPopular 
                  ? `bg-${primary_color}-600 text-white shadow-xl shadow-${primary_color}-600/30 hover:scale-105` 
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}>
                {product.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
