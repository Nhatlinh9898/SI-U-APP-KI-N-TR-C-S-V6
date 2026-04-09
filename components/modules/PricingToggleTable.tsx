import React, { useState } from 'react';

interface Plan {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: string[];
  isPopular?: boolean;
}

export const PricingToggleTable = ({ title, subtitle, plans, primary_color = 'blue' }: any) => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500">{subtitle}</p>}
        </div>

        <div className="flex justify-center items-center gap-4 mb-16">
          <span className={`text-sm font-black uppercase tracking-widest ${!isYearly ? 'text-gray-900' : 'text-gray-400'}`}>Hàng tháng</span>
          <button 
            onClick={() => setIsYearly(!isYearly)}
            className={`w-16 h-8 rounded-full p-1 transition-colors duration-500 ${isYearly ? `bg-${primary_color}-600` : 'bg-gray-300'}`}
          >
            <div className={`w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-500 ${isYearly ? 'translate-x-8' : 'translate-x-0'}`}></div>
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-black uppercase tracking-widest ${isYearly ? 'text-gray-900' : 'text-gray-400'}`}>Hàng năm</span>
            <span className="bg-green-100 text-green-600 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">Tiết kiệm 20%</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans?.map((plan: Plan, index: number) => (
            <div key={index} className={`relative bg-white p-10 rounded-[48px] border-2 transition-all duration-500 hover:shadow-2xl ${
              plan.isPopular ? `border-${primary_color}-600 scale-105 z-10 shadow-xl` : 'border-gray-100'
            }`}>
              {plan.isPopular && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 bg-${primary_color}-600 text-white px-6 py-1 rounded-full text-xs font-black uppercase tracking-widest`}>
                  Phổ biến nhất
                </div>
              )}
              <div className="text-xl font-black text-gray-900 mb-4">{plan.name}</div>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black text-gray-900">{isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                <span className="text-gray-400 font-bold">/{isYearly ? 'năm' : 'tháng'}</span>
              </div>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                    <span className={`text-${primary_color}-600`}>✓</span> {feat}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-black transition-all ${
                plan.isPopular 
                  ? `bg-${primary_color}-600 text-white shadow-xl shadow-${primary_color}-600/30 hover:scale-105` 
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}>
                Bắt đầu ngay
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
