import React from 'react';
import { motion } from 'framer-motion';

interface Integration {
  name: string;
  iconUrl: string;
  description?: string;
}

export const IntegrationGrid = ({ title, subtitle, integrations, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">{subtitle}</p>}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {integrations?.map((item: Integration, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow group cursor-pointer"
            >
              <div className="w-16 h-16 mb-4 p-3 bg-gray-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <img src={item.iconUrl} alt={item.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
              </div>
              <h3 className="font-bold text-gray-900">{item.name}</h3>
              {item.description && <p className="text-xs text-gray-500 mt-2 line-clamp-2">{item.description}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
