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
  amenities?: string[];
  agent_info?: {
    name: string;
    image: string;
    phone: string;
  };
}

export const PropertyGrid = ({ title, subtitle, properties, primary_color = 'blue' }: any) => {
  return (
    <section className="py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 tracking-tighter">{title || 'Bất động sản nổi bật'}</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium">{subtitle || 'Khám phá những không gian sống đẳng cấp và cơ hội đầu tư sinh lời bền vững.'}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {properties?.map((property: Property, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="bg-white rounded-[48px] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0_64px_128px_-12px_rgba(0,0,0,0.12)] transition-all duration-700 group border border-gray-100 flex flex-col h-full"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {property.tag && (
                  <div className="absolute top-6 left-6 px-5 py-2 rounded-2xl text-[10px] font-black text-white bg-blue-600 shadow-2xl uppercase tracking-[0.2em]">
                    {property.tag}
                  </div>
                )}
                
                <div className="absolute bottom-6 left-6 px-6 py-3 rounded-2xl bg-white/90 backdrop-blur-xl text-gray-900 text-xl font-black shadow-2xl">
                  {property.price}
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-500 leading-tight">{property.title}</h3>
                <div className="flex items-center text-gray-400 text-sm font-bold mb-8">
                  <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  {property.location}
                </div>

                {property.amenities && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {property.amenities.slice(0, 3).map((amenity, i) => (
                      <span key={i} className="px-3 py-1.5 bg-gray-50 rounded-xl text-[10px] font-black text-gray-400 uppercase tracking-widest border border-gray-100">
                        {amenity}
                      </span>
                    ))}
                    {property.amenities.length > 3 && (
                      <span className="px-3 py-1.5 bg-gray-50 rounded-xl text-[10px] font-black text-gray-400 uppercase tracking-widest border border-gray-100">
                        +{property.amenities.length - 3}
                      </span>
                    )}
                  </div>
                )}
                
                <div className="grid grid-cols-3 gap-6 py-8 border-y border-gray-100 mb-8">
                  <div className="flex flex-col items-center">
                    <span className="text-xl font-black text-gray-900">{property.beds}</span>
                    <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest mt-1">Ngủ</span>
                  </div>
                  <div className="flex flex-col items-center border-x border-gray-100">
                    <span className="text-xl font-black text-gray-900">{property.baths}</span>
                    <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest mt-1">Tắm</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-xl font-black text-gray-900">{property.sqft}</span>
                    <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest mt-1">m²</span>
                  </div>
                </div>

                {property.agent_info && (
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img src={property.agent_info.image} alt={property.agent_info.name} className="w-12 h-12 rounded-2xl object-cover shadow-lg" referrerPolicy="no-referrer" />
                      <div>
                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Đại lý</div>
                        <div className="text-sm font-black text-gray-900">{property.agent_info.name}</div>
                      </div>
                    </div>
                    <button className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/30 hover:scale-110 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
