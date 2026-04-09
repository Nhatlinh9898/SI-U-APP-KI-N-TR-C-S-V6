import React from 'react';

interface Tech {
  name: string;
  icon: string;
  description: string;
}

export const TechStack = ({ title, subtitle, techs, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {techs?.map((tech: Tech, index: number) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className={`w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-${primary_color}-50 transition-colors`}>
                <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">{tech.icon}</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{tech.name}</h3>
              <p className="text-xs text-gray-400 leading-tight">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
