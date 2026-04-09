import React from 'react';

interface LegalService {
  title: string;
  description: string;
  icon: string;
}

export const LegalServiceCard = ({ title, subtitle, services, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service: LegalService, index: number) => (
            <div key={index} className="group bg-white p-10 rounded-[40px] border border-gray-100 hover:border-blue-600 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -mr-16 -mt-16 group-hover:bg-blue-600 transition-colors duration-500"></div>
              <div className="text-4xl mb-8 relative z-10 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-2xl font-black text-gray-900 mb-4 relative z-10">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-8 relative z-10">{service.description}</p>
              <div className={`flex items-center gap-2 text-sm font-black text-${primary_color}-600 uppercase tracking-widest cursor-pointer relative z-10`}>
                Tìm hiểu thêm <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
