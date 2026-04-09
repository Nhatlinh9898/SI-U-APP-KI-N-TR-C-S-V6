import React, { useState } from 'react';

export const ServicePricingCalculator = ({ title, subtitle, options, basePrice, primary_color = 'blue' }: any) => {
  const [values, setValues] = useState<Record<string, number>>({});

  const total = basePrice + Object.values(values).reduce((acc, val) => acc + val, 0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[64px] p-10 md:p-20 shadow-2xl border border-gray-100">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">{title || 'Tính toán chi phí'}</h2>
            <p className="text-xl text-gray-500">{subtitle || 'Nhận báo giá ước tính ngay lập tức dựa trên nhu cầu của bạn'}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-10">
              {options?.map((option: any, index: number) => (
                <div key={index} className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-black text-gray-900 uppercase tracking-widest">{option.label}</label>
                    <span className={`text-sm font-black text-${primary_color}-600`}>
                      {values[option.id] ? `+${values[option.id].toLocaleString()} VNĐ` : '—'}
                    </span>
                  </div>
                  {option.type === 'range' ? (
                    <input 
                      type="range" 
                      min={option.min} 
                      max={option.max} 
                      step={option.step}
                      className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                      onChange={(e) => setValues({...values, [option.id]: Number(e.target.value) * option.pricePerUnit})}
                    />
                  ) : (
                    <div className="grid grid-cols-2 gap-4">
                      {option.choices?.map((choice: any, idx: number) => (
                        <button
                          key={idx}
                          onClick={() => setValues({...values, [option.id]: choice.price})}
                          className={`p-4 rounded-2xl border-2 font-bold transition-all ${
                            values[option.id] === choice.price 
                              ? `border-${primary_color}-600 bg-${primary_color}-50 text-${primary_color}-600` 
                              : 'border-gray-100 hover:border-gray-200 text-gray-500'
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

            <div className={`bg-gray-900 rounded-[40px] p-10 text-white flex flex-col justify-between relative overflow-hidden`}>
              <div className={`absolute top-0 right-0 w-64 h-64 bg-${primary_color}-600/20 blur-[100px] rounded-full`}></div>
              
              <div className="relative z-10">
                <h3 className="text-xs font-black text-white/40 uppercase tracking-widest mb-8">Ước tính tổng cộng</h3>
                <div className="space-y-4 mb-12">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Phí cơ bản</span>
                    <span className="font-bold">{basePrice.toLocaleString()} VNĐ</span>
                  </div>
                  {Object.entries(values).map(([id, val]) => (
                    <div key={id} className="flex justify-between text-sm">
                      <span className="text-white/60 capitalize">{id.replace('_', ' ')}</span>
                      <span className="font-bold">+{val.toLocaleString()} VNĐ</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10">
                <div className="text-5xl font-black mb-8">{total.toLocaleString()} <span className="text-lg text-white/40">VNĐ</span></div>
                <button className={`w-full py-5 bg-${primary_color}-600 text-white rounded-2xl font-black text-lg hover:scale-[1.02] transition-all shadow-xl shadow-${primary_color}-600/30`}>
                  Đặt lịch ngay
                </button>
                <p className="text-center text-[10px] font-bold text-white/20 uppercase tracking-widest mt-6">
                  * Giá thực tế có thể thay đổi sau khi khảo sát
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
