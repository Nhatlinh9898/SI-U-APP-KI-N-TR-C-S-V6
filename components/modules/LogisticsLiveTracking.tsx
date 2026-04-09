import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TrackingStep {
  status: string;
  location: string;
  time: string;
  isCompleted: boolean;
}

export const LogisticsLiveTracking = ({ title, subtitle, trackingId, steps, packageDetails, carrier_info, service_type, primary_color = 'blue' }: any) => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[80px] p-12 md:p-24 shadow-[0_64px_128px_-12px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full -mr-80 -mt-80"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start relative z-10">
            <div className="space-y-16">
              <div>
                <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 tracking-tighter leading-tight">{title || 'Theo dõi đơn hàng'}</h2>
                <p className="text-xl text-gray-500 font-medium leading-relaxed">{subtitle || 'Cập nhật trạng thái vận chuyển thời gian thực cho kiện hàng của bạn.'}</p>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[32px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex items-center">
                  <input 
                    type="text" 
                    defaultValue={trackingId || 'LGS-992837465'} 
                    className="w-full bg-white border-2 border-gray-100 rounded-[32px] px-10 py-6 font-black text-2xl text-gray-900 outline-none focus:border-blue-500 transition-all shadow-inner"
                  />
                  <button className="absolute right-4 px-10 py-4 bg-gray-900 text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-2xl">
                    Tra cứu
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="p-8 bg-gray-50 rounded-[40px] border border-gray-100 shadow-inner">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Trọng lượng</div>
                  <div className="text-xl font-black text-gray-900">{packageDetails?.weight || '2.5 kg'}</div>
                </div>
                <div className="p-8 bg-gray-50 rounded-[40px] border border-gray-100 shadow-inner">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Dự kiến giao</div>
                  <div className="text-xl font-black text-gray-900">{packageDetails?.estimatedDelivery || 'Hôm nay'}</div>
                </div>
                {service_type && (
                  <div className="col-span-2 p-8 bg-blue-50 rounded-[40px] border border-blue-100 shadow-inner">
                    <div className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-2">Dịch vụ</div>
                    <div className="text-xl font-black text-blue-900">{service_type}</div>
                  </div>
                )}
              </div>

              {carrier_info && (
                <div className="p-10 bg-gray-900 rounded-[56px] text-white shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/20 blur-[60px] rounded-full -mr-24 -mt-24"></div>
                  <div className="flex justify-between items-center mb-10">
                    <div className="flex items-center gap-6">
                      <img src={carrier_info.logo} alt={carrier_info.name} className="w-16 h-16 rounded-2xl object-contain bg-white p-2 shadow-xl" referrerPolicy="no-referrer" />
                      <div>
                        <div className="text-xs font-black text-white/40 uppercase tracking-[0.2em] mb-1">Đơn vị vận chuyển</div>
                        <div className="text-2xl font-black">{carrier_info.name}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] mb-1">Hotline</div>
                      <div className="text-lg font-black text-blue-400">{carrier_info.hotline}</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div className="space-y-2">
                      <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Trạng thái hiện tại</div>
                      <AnimatePresence mode="wait">
                        <motion.div 
                          key={activeStep}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="text-3xl font-black text-blue-400 tracking-tight"
                        >
                          {steps[activeStep].status}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    <div className="w-16 h-16 rounded-3xl bg-white/10 flex items-center justify-center text-3xl animate-bounce shadow-2xl">📦</div>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-12 relative pt-6 pl-12">
              <div className="absolute left-[59px] top-12 bottom-12 w-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  className="absolute top-0 w-full bg-blue-600 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)]"
                  animate={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                ></motion.div>
              </div>

              {steps?.map((step: TrackingStep, index: number) => (
                <div key={index} className={`flex gap-12 relative transition-all duration-700 ${index > activeStep ? 'opacity-20 grayscale' : 'opacity-100'}`}>
                  <div className={`w-20 h-20 rounded-[32px] flex items-center justify-center text-2xl font-black z-10 transition-all duration-700 shadow-2xl ${
                    index <= activeStep ? 'bg-blue-600 text-white shadow-blue-600/30 scale-110' : 'bg-white text-gray-300 border-2 border-gray-100'
                  }`}>
                    {index < activeStep ? '✓' : index === activeStep ? '📍' : index + 1}
                  </div>
                  <div className="pt-4">
                    <h4 className={`text-2xl font-black mb-2 tracking-tight transition-colors duration-500 ${index === activeStep ? 'text-blue-600' : 'text-gray-900'}`}>
                      {step.status}
                    </h4>
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{step.location}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-200"></span>
                      <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{step.time}</span>
                    </div>
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
