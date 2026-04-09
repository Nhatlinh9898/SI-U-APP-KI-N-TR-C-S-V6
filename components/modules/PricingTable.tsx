import React from 'react';
import { Check } from 'lucide-react';
import { toast } from 'sonner';

interface Plan {
  name: string;
  price: string;
  description?: string;
  features: string[];
  isPopular?: boolean;
  tag?: string;
}

interface PricingTableProps {
  title: string;
  subtitle?: string;
  plans: Plan[];
  primary_color?: string;
}

export const PricingTable: React.FC<PricingTableProps> = ({ title, subtitle, plans, primary_color = '#f59e0b' }) => {
  const handleSelectPlan = (planName: string) => {
    toast.success(`Bạn đã chọn gói ${planName}. Đang chuyển hướng đến trang thanh toán...`);
  };

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">{title || 'Bảng giá dịch vụ'}</h2>
          {subtitle && <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans?.map((plan, i) => (
            <div key={i} className={`relative p-10 rounded-[48px] bg-gray-50 border-2 flex flex-col transition-all duration-500 hover:-translate-y-3 ${plan.isPopular ? 'shadow-2xl scale-105 z-10' : 'border-gray-100'}`} style={{ borderColor: plan.isPopular ? primary_color : 'transparent' }}>
              {plan.tag && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full text-[10px] font-black text-white uppercase tracking-widest shadow-lg" style={{ backgroundColor: primary_color }}>
                  {plan.tag}
                </div>
              )}
              <h3 className="text-2xl font-black text-gray-900 mb-2">{plan.name}</h3>
              {plan.description && <p className="text-gray-400 text-sm mb-6 font-medium">{plan.description}</p>}
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-black text-gray-900">{plan.price}</span>
                <span className="text-gray-400 font-bold">/tháng</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features?.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm font-bold text-gray-600">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${primary_color}15`, color: primary_color }}>
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => handleSelectPlan(plan.name)}
                className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl ${plan.isPopular ? 'text-white hover:scale-105' : 'text-gray-600 bg-white border-2 border-gray-100 hover:bg-gray-50'}`} 
                style={plan.isPopular ? { backgroundColor: primary_color } : {}}
              >
                Bắt đầu ngay
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
