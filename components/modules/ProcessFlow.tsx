import React from 'react';

interface Step {
  title: string;
  description: string;
  icon?: string;
  duration?: string;
  outcome?: string;
}

export const ProcessFlow = ({ title, subtitle, steps, primary_color = 'blue' }: any) => {
  return (
    <section className="py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 tracking-tighter">{title || 'Quy trình làm việc'}</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium">{subtitle || 'Chúng tôi tối ưu hóa từng bước để mang lại hiệu quả cao nhất cho dự án của bạn.'}</p>
        </div>
        
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[40px] left-0 w-full h-1 bg-gray-200 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-20"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
            {steps?.map((step: Step, index: number) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-[32px] bg-white border-8 border-gray-50 shadow-2xl flex items-center justify-center mb-10 group-hover:border-blue-100 group-hover:scale-110 transition-all duration-500 relative">
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-2xl bg-gray-900 text-white flex items-center justify-center font-black text-sm shadow-xl group-hover:bg-blue-600 transition-colors">
                    {index + 1}
                  </div>
                  {step.icon ? (
                    <span className="text-4xl group-hover:animate-pulse transition-all">{step.icon}</span>
                  ) : (
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  )}
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors duration-500">{step.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed mb-6">{step.description}</p>
                
                {(step.duration || step.outcome) && (
                  <div className="mt-auto w-full space-y-3">
                    {step.duration && (
                      <div className="px-4 py-2 bg-gray-100 rounded-xl text-[10px] font-black text-gray-400 uppercase tracking-widest inline-block">
                        ⏱️ {step.duration}
                      </div>
                    )}
                    {step.outcome && (
                      <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 text-xs font-bold text-blue-700 leading-relaxed">
                        🎯 Kết quả: {step.outcome}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
