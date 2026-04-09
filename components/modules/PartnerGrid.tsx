import React from 'react';

interface Partner {
  name: string;
  logo: string;
  description: string;
}

export const PartnerGrid = ({ title, subtitle, partners, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners?.map((partner: Partner, index: number) => (
            <div key={index} className="group p-8 rounded-[32px] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center">
              <div className="h-16 flex items-center justify-center mb-6 grayscale group-hover:grayscale-0 transition-all">
                <img src={partner.logo} alt={partner.name} className="max-h-full max-w-full object-contain" referrerPolicy="no-referrer" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{partner.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
