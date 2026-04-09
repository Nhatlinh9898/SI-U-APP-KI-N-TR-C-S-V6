import React from 'react';

interface Step {
  title: string;
  description: string;
  icon?: string;
}

export const ProcessFlow = ({ title, subtitle, steps, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">{subtitle}</p>}
        </div>
        
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps?.map((step: Step, index: number) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className={`w-20 h-20 rounded-full bg-white border-4 border-gray-50 shadow-xl flex items-center justify-center mb-8 group-hover:border-${primary_color}-100 group-hover:scale-110 transition-all duration-300 relative`}>
                  <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-${primary_color}-600 text-white flex items-center justify-center font-bold text-sm shadow-lg`}>
                    {index + 1}
                  </div>
                  {step.icon ? (
                    <span className="text-3xl">{step.icon}</span>
                  ) : (
                    <svg className={`w-8 h-8 text-${primary_color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
