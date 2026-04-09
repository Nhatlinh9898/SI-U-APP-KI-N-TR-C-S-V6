import React from 'react';

interface Logo {
  name: string;
  url: string;
}

export const LogoTicker = ({ title, logos, primary_color = 'blue' }: any) => {
  return (
    <section className="py-12 bg-gray-50 overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide mb-8">{title}</p>}
        <div className="flex justify-center flex-wrap gap-8 md:gap-16 items-center opacity-60">
          {logos?.map((logo: Logo, index: number) => (
            <img key={index} src={logo.url} alt={logo.name} className="h-8 md:h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300" referrerPolicy="no-referrer" />
          ))}
        </div>
      </div>
    </section>
  );
};
