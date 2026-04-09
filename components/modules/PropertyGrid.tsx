import React from 'react';
import { motion } from 'framer-motion';

interface Property {
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
  tag?: string;
}

export const PropertyGrid = ({ title, subtitle, properties, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">{subtitle}</p>}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties?.map((property: Property, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {property.tag && (
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-${primary_color}-600 shadow-lg`}>
                    {property.tag}
                  </div>
                )}
                <div className="absolute bottom-4 left-4 px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md text-gray-900 font-bold shadow-lg">
                  {property.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{property.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mb-6">
                  <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  {property.location}
                </div>
                
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-100">
                  <div className="flex flex-col items-center">
                    <span className="text-gray-900 font-bold">{property.beds}</span>
                    <span className="text-xs text-gray-400 uppercase tracking-wider">Phòng ngủ</span>
                  </div>
                  <div className="flex flex-col items-center border-x border-gray-100">
                    <span className="text-gray-900 font-bold">{property.baths}</span>
                    <span className="text-xs text-gray-400 uppercase tracking-wider">Phòng tắm</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-gray-900 font-bold">{property.sqft}</span>
                    <span className="text-xs text-gray-400 uppercase tracking-wider">Diện tích</span>
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
