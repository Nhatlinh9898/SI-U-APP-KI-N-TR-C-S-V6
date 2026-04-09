import React from 'react';
import { motion } from 'framer-motion';

interface ProductItem {
  name: string;
  description: string;
  image: string;
  price?: string;
  features?: string[];
  specifications?: { label: string, value: string }[];
  reversed?: boolean;
}

export const ProductShowcase = ({ title, subtitle, items, primary_color = 'blue' }: any) => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 tracking-tighter">{title || 'Sản phẩm nổi bật'}</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium">{subtitle || 'Khám phá những công nghệ đột phá và thiết kế tinh tế trong từng sản phẩm.'}</p>
        </div>
        
        <div className="space-y-48">
          {items?.map((item: ProductItem, index: number) => (
            <div key={index} className={`flex flex-col ${item.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-24`}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-1/2 relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[48px] blur-3xl opacity-10"></div>
                <div className="relative rounded-[56px] overflow-hidden shadow-[0_64px_128px_-12px_rgba(0,0,0,0.2)] bg-gray-50 aspect-square lg:aspect-[4/5]">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2"
              >
                <div className="space-y-8">
                  <div>
                    {item.price && (
                      <div className="text-blue-600 font-black text-2xl mb-4 tracking-tight">{item.price}</div>
                    )}
                    <h3 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter leading-tight mb-6">{item.name}</h3>
                    <p className="text-xl text-gray-500 font-medium leading-relaxed">{item.description}</p>
                  </div>
                  
                  {item.features && item.features.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {item.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                          </div>
                          <span className="text-gray-700 font-bold text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {item.specifications && (
                    <div className="p-8 bg-gray-50 rounded-[32px] border border-gray-100 space-y-4">
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Thông số kỹ thuật:</div>
                      <div className="grid grid-cols-2 gap-6">
                        {item.specifications.map((spec, sIndex) => (
                          <div key={sIndex}>
                            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{spec.label}</div>
                            <div className="text-sm font-black text-gray-900">{spec.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-4 pt-4">
                    <button className="px-10 py-5 bg-gray-900 text-white rounded-[24px] font-black text-sm uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-xl">
                      Mua ngay
                    </button>
                    <button className="px-10 py-5 bg-white text-gray-900 border-2 border-gray-100 rounded-[24px] font-black text-sm uppercase tracking-[0.2em] hover:border-gray-900 transition-all">
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
