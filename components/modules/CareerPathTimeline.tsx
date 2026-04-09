import React from 'react';

interface CareerStep {
  year: string;
  title: string;
  company: string;
  description: string;
}

export const CareerPathTimeline = ({ title, subtitle, steps, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500">{subtitle}</p>}
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:w-1 before:bg-gray-100">
          {steps?.map((step: CareerStep, index: number) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-gray-200 group-hover:bg-${primary_color}-600 transition-colors z-10 md:absolute md:left-1/2 md:-translate-x-1/2`}>
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-8 rounded-[32px] border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className={`text-xs font-black text-${primary_color}-600 uppercase tracking-widest mb-2`}>{step.year}</div>
                <h3 className="text-xl font-black text-gray-900 mb-1">{step.title}</h3>
                <div className="text-sm font-bold text-gray-400 mb-4">{step.company}</div>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
