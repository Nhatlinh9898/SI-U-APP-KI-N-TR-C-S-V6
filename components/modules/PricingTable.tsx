import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

interface Plan {
  name: string;
  price: string;
  yearlyPrice?: string;
  savings?: string;
  description?: string;
  features: string[];
  unavailableFeatures?: string[];
  isPopular?: boolean;
  tag?: string;
  targetAudience?: string;
  ctaText?: string;
}

interface PricingTableProps {
  title: string;
  subtitle?: string;
  plans: Plan[];
  primary_color?: string;
}

export const PricingTable: React.FC<PricingTableProps> = ({ title, subtitle, plans, primary_color = '#f59e0b' }) => {
  const [isYearly, setIsYearly] = React.useState(false);
  
  const handleSelectPlan = (planName: string) => {
    toast.success(`Bạn đã chọn gói ${planName}. Đang chuyển hướng đến trang thanh toán...`);
  };

  return (
    <div className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-black text-gray-900 mb-6 tracking-tighter">{title || 'Bảng giá dịch vụ'}</h2>
          {subtitle && <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium">{subtitle}</p>}
          
          {/* Billing Toggle */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <span className={`text-sm font-black uppercase tracking-widest ${!isYearly ? 'text-gray-900' : 'text-gray-400'}`}>Tháng</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-16 h-8 bg-gray-100 rounded-full relative p-1 transition-colors hover:bg-gray-200"
            >
              <motion.div 
                animate={{ x: isYearly ? 32 : 0 }}
                className="w-6 h-6 bg-white rounded-full shadow-lg"
                style={{ backgroundColor: isYearly ? primary_color : 'white' }}
              />
            </button>
            <span className={`text-sm font-black uppercase tracking-widest ${isYearly ? 'text-gray-900' : 'text-gray-400'}`}>Năm</span>
            <div className="ml-2 px-3 py-1 bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-widest rounded-lg">
              Tiết kiệm tới 20%
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {plans?.map((plan, i) => (
            <div 
              key={i} 
              className={`relative p-12 rounded-[64px] bg-white border-2 flex flex-col transition-all duration-700 hover:-translate-y-4 group ${
                plan.isPopular ? 'shadow-[0_64px_128px_-12px_rgba(0,0,0,0.15)] scale-105 z-10 border-blue-600' : 'border-gray-50 shadow-xl shadow-gray-900/5'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-8 py-3 rounded-full text-[10px] font-black text-white uppercase tracking-[0.3em] shadow-2xl bg-blue-600">
                  {plan.tag || 'Phổ biến nhất'}
                </div>
              )}
              
              <div className="mb-10">
                <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">{plan.name}</h3>
                {plan.targetAudience && (
                  <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-4">
                    Dành cho: {plan.targetAudience}
                  </div>
                )}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-6xl font-black text-gray-900 tracking-tighter transition-all duration-500">
                    {isYearly && plan.yearlyPrice ? plan.yearlyPrice : plan.price}
                  </span>
                  <span className="text-gray-400 font-black uppercase tracking-widest text-xs">
                    /{isYearly ? 'năm' : 'tháng'}
                  </span>
                </div>
                {isYearly && plan.savings && (
                  <div className="text-xs font-bold text-green-600 mb-4">
                    Tiết kiệm {plan.savings} mỗi năm
                  </div>
                )}
                {plan.description && <p className="text-gray-400 text-sm font-medium leading-relaxed">{plan.description}</p>}
              </div>

              <div className="space-y-6 mb-12 flex-1">
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50 pb-4">Tính năng bao gồm:</div>
                <ul className="space-y-4">
                  {Array.isArray(plan.features) && plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-4 text-sm font-bold text-gray-700 group-hover:translate-x-1 transition-transform">
                      <div className="w-6 h-6 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                        <Check size={14} strokeWidth={4} />
                      </div>
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                  {Array.isArray(plan.unavailableFeatures) && plan.unavailableFeatures.map((feature, j) => (
                    <li key={j} className="flex items-start gap-4 text-sm font-bold text-gray-300">
                      <div className="w-6 h-6 rounded-xl bg-gray-50 text-gray-300 flex items-center justify-center shrink-0">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M6 18L18 6M6 6l12 12"></path></svg>
                      </div>
                      <span className="leading-tight line-through">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => handleSelectPlan(plan.name)}
                className={`w-full py-6 rounded-[32px] font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 shadow-2xl ${
                  plan.isPopular 
                    ? 'bg-blue-600 text-white hover:scale-105 hover:shadow-blue-600/30' 
                    : 'bg-gray-900 text-white hover:bg-blue-600 hover:scale-105'
                }`}
              >
                {plan.ctaText || 'Bắt đầu ngay'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
