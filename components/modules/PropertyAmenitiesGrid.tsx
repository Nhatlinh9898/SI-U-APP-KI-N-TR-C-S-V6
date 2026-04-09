import React from 'react';

interface Amenity {
  label: string;
  icon: string;
}

export const PropertyAmenitiesGrid = ({ title, subtitle, amenities, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {amenities?.map((item: Amenity, index: number) => (
            <div key={index} className="group bg-gray-50 p-8 rounded-[32px] border border-gray-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center">
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500">{item.icon}</div>
              <div className="font-black text-gray-900 text-sm uppercase tracking-widest">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
