import React from 'react';
import { Check } from 'lucide-react';
import { toast } from 'sonner';

interface Plan {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

interface PricingTableProps {
  title: string;
  plans: Plan[];
  primary_color?: string;
}

export const PricingTable: React.FC<PricingTableProps> = ({ title, plans, primary_color = '#f59e0b' }) => {
  const handleSelectPlan = (planName: string) => {
    toast.success(`Bạn đã chọn gói ${planName}. Đang chuyển hướng đến trang thanh toán...`);
  };

  return (
    <div className="py-16">
      <h2 className="text-3xl font-black text-white mb-12 text-center uppercase tracking-widest">{title || 'BẢNG GIÁ'}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {plans?.map((plan, i) => (
          <div key={i} className={`relative p-8 rounded-3xl bg-slate-900/50 border ${plan.isPopular ? 'border-2 shadow-2xl scale-105 z-10' : 'border-slate-800'} flex flex-col transition-transform hover:scale-[1.02]`} style={{ borderColor: plan.isPopular ? primary_color : undefined }}>
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-black uppercase tracking-widest" style={{ backgroundColor: primary_color }}>
                Phổ Biến Nhất
              </div>
            )}
            <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
            <div className="text-4xl font-black text-white mb-6">{plan.price}</div>
            <ul className="space-y-4 mb-8 flex-1">
              {plan.features?.map((feature, j) => (
                <li key={j} className="flex items-start gap-3 text-sm text-slate-300">
                  <Check size={16} className="mt-0.5 shrink-0" style={{ color: primary_color }} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => handleSelectPlan(plan.name)}
              className={`w-full py-3 rounded-xl font-bold uppercase tracking-widest transition-colors ${plan.isPopular ? 'text-black' : 'text-white bg-slate-800 hover:bg-slate-700'}`} 
              style={plan.isPopular ? { backgroundColor: primary_color } : {}}
            >
              Chọn Gói Này
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
