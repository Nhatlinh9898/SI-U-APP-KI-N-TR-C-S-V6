import React from 'react';

interface PathStep {
  title: string;
  description: string;
  icon: string;
  isCompleted?: boolean;
}

export const LearningPathMap = ({ title, subtitle, steps, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500">{subtitle}</p>}
        </div>

        <div className="relative">
          {/* Path Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200 rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {steps?.map((step: PathStep, index: number) => (
              <div key={index} className="relative flex flex-col md:flex-row gap-8 items-start">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl z-10 shadow-xl transition-all ${
                  step.isCompleted 
                    ? `bg-${primary_color}-600 text-white` 
                    : 'bg-white text-gray-400 border-2 border-gray-100'
                }`}>
                  {step.icon}
                </div>
                
                <div className="flex-grow bg-white p-8 rounded-[32px] shadow-xl border border-gray-100 hover:shadow-2xl transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-black text-gray-900">{step.title}</h3>
                    {step.isCompleted && (
                      <span className={`bg-${primary_color}-100 text-${primary_color}-600 text-[10px] font-black uppercase px-3 py-1 rounded-full`}>
                        Hoàn thành
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 leading-relaxed">{step.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-bold text-blue-600 cursor-pointer group-hover:translate-x-2 transition-transform">
                    Bắt đầu học ngay <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
