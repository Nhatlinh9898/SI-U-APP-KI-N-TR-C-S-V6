import React from 'react';
import { motion } from 'framer-motion';

interface ProductItem {
  name: string;
  description: string;
  image: string;
  features?: string[];
  reversed?: boolean;
}

export const ProductShowcase = ({ title, subtitle, items, primary_color = 'blue' }: any) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">{subtitle}</p>}
        </div>
        
        <div className="space-y-32">
          {items?.map((item: ProductItem, index: number) => (
            <div key={index} className={`flex flex-col ${item.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
              <motion.div 
                initial={{ opacity: 0, x: item.reversed ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-100 aspect-[4/3]">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl"></div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: item.reversed ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full lg:w-1/2"
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6">{item.name}</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">{item.description}</p>
                
                {item.features && item.features.length > 0 && (
                  <ul className="space-y-4 mb-8">
                    {item.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-${primary_color}-100 flex items-center justify-center mt-1 mr-3`}>
                          <svg className={`w-4 h-4 text-${primary_color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                <button className={`px-8 py-4 bg-${primary_color}-600 text-white font-bold rounded-xl hover:bg-${primary_color}-700 transition-colors shadow-lg shadow-${primary_color}-600/30`}>
                  Tìm hiểu thêm
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
