import React from 'react';
import { motion } from 'motion/react';

interface ProductItem {
  name: string;
  description: string;
  image: string;
  price?: string;
  features?: string[];
  specifications?: { label: string, value: string }[];
  reversed?: boolean;
  badge?: string;
  rating?: number;
  reviewCount?: number;
  videoUrl?: string;
  variants?: { label: string, color: string }[];
}

export const ProductShowcase = ({ title, subtitle, items, primary_color = 'blue' }: any) => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32">
          <h2 className="text-5xl md:text-8xl font-black text-gray-900 mb-8 tracking-tighter leading-none">{title || 'Sản phẩm nổi bật'}</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium">{subtitle || 'Khám phá những công nghệ đột phá và thiết kế tinh tế trong từng sản phẩm.'}</p>
        </div>
        
        <div className="space-y-64">
          {items?.map((item: ProductItem, index: number) => (
            <div key={index} className={`flex flex-col ${item.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-24 md:gap-32`}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: item.reversed ? 2 : -2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full lg:w-1/2 relative"
              >
                <div className="absolute -inset-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[80px] blur-[100px] opacity-10"></div>
                <div className="relative rounded-[80px] overflow-hidden shadow-[0_80px_160px_-20px_rgba(0,0,0,0.2)] bg-gray-50 aspect-square lg:aspect-[4/5] group">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                  {item.badge && (
                    <div className="absolute top-10 left-10 bg-blue-600 text-white text-[10px] font-black px-6 py-2.5 rounded-full uppercase tracking-[0.2em] shadow-2xl">
                      {item.badge}
                    </div>
                  )}
                  {item.videoUrl && (
                    <button className="absolute inset-0 flex items-center justify-center group/play">
                      <div className="w-24 h-24 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl group-hover/play:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-blue-600 translate-x-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                    </button>
                  )}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2"
              >
                <div className="space-y-12">
                  <div>
                    <div className="flex items-center gap-6 mb-6">
                      {item.price && (
                        <div className="text-blue-600 font-black text-3xl tracking-tighter">{item.price}</div>
                      )}
                      {item.rating && (
                        <div className="flex items-center gap-2 px-4 py-1.5 bg-amber-50 rounded-full border border-amber-100">
                          <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          <span className="text-xs font-black text-amber-600">{item.rating}</span>
                          {item.reviewCount && <span className="text-[10px] font-bold text-amber-400">({item.reviewCount})</span>}
                        </div>
                      )}
                    </div>
                    <h3 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-none mb-8">{item.name}</h3>
                    <p className="text-xl text-gray-500 font-medium leading-relaxed">{item.description}</p>
                  </div>
                  
                  {item.variants && (
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Màu sắc:</span>
                      <div className="flex gap-3">
                        {item.variants.map((v, i) => (
                          <button key={i} className="w-8 h-8 rounded-full border-2 border-white shadow-lg ring-2 ring-transparent hover:ring-blue-600 transition-all" style={{ backgroundColor: v.color }} title={v.label} />
                        ))}
                      </div>
                    </div>
                  )}

                  {item.features && item.features.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {item.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-4 group/feat">
                          <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover/feat:bg-blue-600 transition-colors">
                            <svg className="w-4 h-4 text-blue-600 group-hover/feat:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                          </div>
                          <span className="text-gray-700 font-bold text-sm tracking-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {item.specifications && (
                    <div className="p-10 bg-gray-50 rounded-[48px] border border-gray-100 space-y-6">
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Thông số kỹ thuật:</div>
                      <div className="grid grid-cols-2 gap-8">
                        {item.specifications.map((spec, sIndex) => (
                          <div key={sIndex}>
                            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">{spec.label}</div>
                            <div className="text-lg font-black text-gray-900 tracking-tight">{spec.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row gap-6 pt-8">
                    <button className="px-16 py-7 bg-gray-900 text-white rounded-[32px] font-black text-lg uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-2xl shadow-gray-900/20">
                      Mua ngay
                    </button>
                    <button className="px-16 py-7 bg-white text-gray-900 border-4 border-gray-100 rounded-[32px] font-black text-lg uppercase tracking-[0.2em] hover:border-gray-900 transition-all">
                      Chi tiết
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
