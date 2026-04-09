import React, { useState, useEffect } from 'react';

interface TrackingStep {
  status: string;
  location: string;
  time: string;
  isCompleted: boolean;
}

export const LogisticsLiveTracking = ({ title, subtitle, trackingId, steps, primary_color = 'blue' }: any) => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[64px] p-10 md:p-20 shadow-2xl border border-gray-100 overflow-hidden relative">
          <div className={`absolute top-0 right-0 w-96 h-96 bg-${primary_color}-600/5 blur-[100px] rounded-full -mr-48 -mt-48`}></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">{title || 'Theo dõi đơn hàng'}</h2>
              <p className="text-lg text-gray-500 mb-10">{subtitle || 'Cập nhật trạng thái vận chuyển thời gian thực cho kiện hàng của bạn.'}</p>
              
              <div className="relative mb-12">
                <input 
                  type="text" 
                  defaultValue={trackingId || 'LGS-992837465'} 
                  className="w-full bg-gray-50 border-2 border-gray-100 rounded-3xl px-8 py-5 font-black text-xl text-gray-900 outline-none focus:border-blue-500 transition-all shadow-inner"
                />
                <button className={`absolute right-3 top-3 bottom-3 px-8 bg-${primary_color}-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-${primary_color}-600/30`}>
                  Tra cứu
                </button>
              </div>

              <div className="p-8 bg-gray-900 rounded-[40px] text-white shadow-2xl group">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Trạng thái hiện tại</div>
                    <div className={`text-2xl font-black text-${primary_color}-400`}>{steps[activeStep].status}</div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl animate-bounce">📦</div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div className="space-y-1">
                    <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">Vị trí</div>
                    <div className="font-bold">{steps[activeStep].location}</div>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">Cập nhật lúc</div>
                    <div className="font-bold">{steps[activeStep].time}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-10 relative">
              <div className="absolute left-[27px] top-4 bottom-4 w-1 bg-gray-100 rounded-full">
                <div 
                  className={`absolute top-0 w-full bg-${primary_color}-600 rounded-full transition-all duration-1000 ease-in-out`}
                  style={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
                ></div>
              </div>

              {steps?.map((step: TrackingStep, index: number) => (
                <div key={index} className={`flex gap-8 relative transition-all duration-500 ${index > activeStep ? 'opacity-30 grayscale' : 'opacity-100'}`}>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black z-10 transition-all duration-500 ${
                    index <= activeStep ? `bg-${primary_color}-600 text-white shadow-lg shadow-${primary_color}-600/30` : 'bg-white text-gray-300 border border-gray-100'
                  }`}>
                    {index <= activeStep ? '✓' : index + 1}
                  </div>
                  <div className="pt-2">
                    <h4 className={`text-lg font-black mb-1 ${index === activeStep ? `text-${primary_color}-600` : 'text-gray-900'}`}>
                      {step.status}
                    </h4>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{step.location} • {step.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
