import React from 'react';
import { motion } from 'framer-motion';

interface BeforeAfterItem {
  beforeImage: string;
  afterImage: string;
  title?: string;
  description?: string;
}

export const BeforeAfter = ({ title, subtitle, items, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500">{subtitle}</p>}
        </div>
        
        <div className="space-y-16">
          {items?.map((item: BeforeAfterItem, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row gap-8 items-center"
            >
              <div className="w-full lg:w-1/3 text-center lg:text-left">
                {item.title && <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>}
                {item.description && <p className="text-gray-600">{item.description}</p>}
              </div>
              
              <div className="w-full lg:w-2/3 grid grid-cols-2 gap-4">
                <div className="relative rounded-xl overflow-hidden shadow-md group">
                  <img src={item.beforeImage} alt="Before" className="w-full h-64 sm:h-80 object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-md text-sm font-semibold uppercase tracking-wide">
                    Trước
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-md group">
                  <img src={item.afterImage} alt="After" className="w-full h-64 sm:h-80 object-cover" referrerPolicy="no-referrer" />
                  <div className={`absolute top-4 right-4 bg-${primary_color}-600 text-white px-3 py-1 rounded-md text-sm font-semibold uppercase tracking-wide`}>
                    Sau
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
