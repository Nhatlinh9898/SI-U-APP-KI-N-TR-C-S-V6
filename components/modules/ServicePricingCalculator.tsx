import React, { useState } from 'react';

export const ServicePricingCalculator = ({ title, subtitle, options, basePrice, currency = 'VNĐ', primary_color = 'blue' }: any) => {
  const [values, setValues] = useState<Record<string, number>>({});

  const total = basePrice + Object.values(values).reduce((acc, val) => acc + val, 0);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-[80px] p-12 md:p-24 border border-gray-100 shadow-[0_48px_96px_-12px_rgba(0,0,0,0.08)]">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">{title || 'Tính toán chi phí'}</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">{subtitle || 'Nhận báo giá ước tính ngay lập tức dựa trên nhu cầu của bạn'}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              {options?.map((option: any, index: number) => (
                <div key={index} className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <label className="text-sm font-black text-gray-900 uppercase tracking-widest block mb-2">{option.label}</label>
                      {option.description && <p className="text-xs text-gray-400 font-medium">{option.description}</p>}
                    </div>
                    <span className="text-sm font-black text-orange-600">
                      {values[option.id] ? `+${values[option.id].toLocaleString()} ${currency}` : '—'}
                    </span>
                  </div>
                  
                  {option.type === 'range' ? (
                    <div className="space-y-4">
                      <input 
                        type="range" 
                        min={option.min} 
                        max={option.max} 
                        step={option.step}
                        className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer accent-orange-600 shadow-inner"
                        onChange={(e) => setValues({...values, [option.id]: Number(e.target.value) * option.pricePerUnit})}
                      />
                      <div className="flex justify-between text-[10px] font-black text-gray-400 uppercase tracking-widest">
                        <span>Min: {option.min}</span>
                        <span>Max: {option.max}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-4">
                      {option.choices?.map((choice: any, idx: number) => (
                        <button
                          key={idx}
                          onClick={() => setValues({...values, [option.id]: choice.price})}
                          className={`p-6 rounded-3xl border-2 font-black text-sm transition-all duration-300 ${
                            values[option.id] === choice.price 
                              ? 'border-orange-600 bg-orange-50 text-orange-600 shadow-lg scale-105' 
                              : 'border-white bg-white hover:border-gray-200 text-gray-400'
                          }`}
                        >
                          {choice.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-gray-900 rounded-[64px] p-12 text-white flex flex-col justify-between relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/20 blur-[120px] rounded-full"></div>
              
              <div className="relative z-10">
                <h3 className="text-xs font-black text-white/40 uppercase tracking-widest mb-10">Bản tóm tắt báo giá</h3>
                <div className="space-y-6 mb-12">
                  <div className="flex justify-between text-base">
                    <span className="text-white/60 font-medium">Phí dịch vụ cơ bản</span>
                    <span className="font-black">{basePrice.toLocaleString()} {currency}</span>
                  </div>
                  <div className="h-px bg-white/10" />
                  {Object.entries(values).map(([id, val]) => (
                    <div key={id} className="flex justify-between text-base">
                      <span className="text-white/60 font-medium capitalize">{id.replace(/_/g, ' ')}</span>
                      <span className="font-black">+{val.toLocaleString()} {currency}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10">
                <div className="mb-10">
                  <span className="text-xs font-black text-white/40 uppercase tracking-widest block mb-2">Tổng chi phí ước tính</span>
                  <div className="text-6xl font-black tracking-tighter">{total.toLocaleString()} <span className="text-xl text-white/40">{currency}</span></div>
                </div>
                
                <button className="w-full py-6 bg-orange-600 text-white rounded-[32px] font-black text-xl hover:bg-orange-500 transition-all shadow-2xl hover:scale-[1.02] active:scale-95 uppercase tracking-widest">
                  Nhận báo giá chi tiết
                </button>
                
                <p className="text-center text-[10px] font-black text-white/20 uppercase tracking-widest mt-8 leading-relaxed">
                  * Giá thực tế có thể thay đổi sau khi khảo sát hiện trạng và thống nhất các yêu cầu cụ thể.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
