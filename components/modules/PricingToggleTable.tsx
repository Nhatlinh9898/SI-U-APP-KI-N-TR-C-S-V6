import React, { useState } from 'react';

interface Plan {
  name: string;
  description?: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: string[] | { name: string, included: boolean, description?: string }[];
  isPopular?: boolean;
  buttonText?: string;
  badge?: string;
}

export const PricingToggleTable = ({ title, subtitle, plans, primary_color = 'blue' }: any) => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-8xl font-black text-gray-900 mb-8 tracking-tighter leading-none">{title || 'Bảng giá dịch vụ'}</h2>
          {subtitle && <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium">{subtitle}</p>}
        </div>

        <div className="flex justify-center items-center gap-8 mb-24">
          <span className={`text-sm font-black uppercase tracking-[0.2em] transition-colors duration-500 ${!isYearly ? 'text-gray-900' : 'text-gray-400'}`}>Hàng tháng</span>
          <button 
            onClick={() => setIsYearly(!isYearly)}
            className={`w-24 h-12 rounded-full p-2 transition-all duration-500 shadow-inner ${isYearly ? `bg-blue-600` : 'bg-gray-200'}`}
          >
            <div className={`w-8 h-8 bg-white rounded-full shadow-2xl transition-transform duration-500 ${isYearly ? 'translate-x-12' : 'translate-x-0'}`}></div>
          </button>
          <div className="flex items-center gap-4">
            <span className={`text-sm font-black uppercase tracking-[0.2em] transition-colors duration-500 ${isYearly ? 'text-gray-900' : 'text-gray-400'}`}>Hàng năm</span>
            <span className="bg-green-100 text-green-600 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest animate-pulse">Tiết kiệm 20%</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {plans?.map((plan: Plan, index: number) => (
            <div key={index} className={`relative flex flex-col bg-white p-12 rounded-[64px] border-2 transition-all duration-700 hover:shadow-[0_64px_128px_-12px_rgba(0,0,0,0.1)] ${
              plan.isPopular ? `border-blue-600 scale-105 z-10 shadow-2xl` : 'border-gray-100'
            }`}>
              {(plan.isPopular || plan.badge) && (
                <div className={`absolute -top-5 left-1/2 -translate-x-1/2 px-8 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl ${
                  plan.isPopular ? 'bg-blue-600 text-white' : 'bg-gray-900 text-white'
                }`}>
                  {plan.badge || 'Phổ biến nhất'}
                </div>
              )}
              
              <div className="mb-10">
                <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{plan.name}</h3>
                {plan.description && <p className="text-gray-400 text-sm font-medium leading-relaxed">{plan.description}</p>}
              </div>

              <div className="flex items-baseline gap-2 mb-12">
                <span className="text-6xl font-black text-gray-900 tracking-tighter">{isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                <span className="text-gray-400 font-black text-sm uppercase tracking-widest">/{isYearly ? 'năm' : 'tháng'}</span>
              </div>
              
              <div className="h-px bg-gray-100 mb-12" />

              <ul className="space-y-6 mb-16 flex-grow">
                {plan.features.map((feat, i) => {
                  const isObject = typeof feat === 'object';
                  const name = isObject ? feat.name : feat;
                  const included = isObject ? feat.included : true;
                  const desc = isObject ? feat.description : null;

                  return (
                    <li key={i} className={`flex flex-col gap-2 ${included ? 'text-gray-700' : 'text-gray-300'}`}>
                      <div className="flex items-center gap-4">
                        <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs ${included ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-300'}`}>
                          {included ? '✓' : '×'}
                        </div>
                        <span className="font-bold tracking-tight">{name}</span>
                      </div>
                      {desc && included && <p className="ml-10 text-[11px] text-gray-400 font-medium leading-relaxed">{desc}</p>}
                    </li>
                  );
                })}
              </ul>

              <button className={`w-full py-6 rounded-3xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 ${
                plan.isPopular 
                  ? `bg-blue-600 text-white shadow-[0_24px_48px_-12px_rgba(37,99,235,0.4)] hover:scale-105 hover:shadow-[0_32px_64px_-12px_rgba(37,99,235,0.5)]` 
                  : 'bg-gray-900 text-white hover:bg-gray-800 hover:scale-105 shadow-xl'
              }`}>
                {plan.buttonText || 'Bắt đầu ngay'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
