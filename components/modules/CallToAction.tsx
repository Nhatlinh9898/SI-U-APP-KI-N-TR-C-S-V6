import React from 'react';
import { toast } from 'sonner';

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  primary_color?: string;
}

export const CallToAction: React.FC<CallToActionProps> = ({ title, description, buttonText, primary_color = '#f59e0b' }) => {
  const handleAction = () => {
    toast.success('Đang khởi tạo quy trình đăng ký...');
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-5xl mx-auto rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden" style={{ backgroundColor: `${primary_color}10`, border: `1px solid ${primary_color}30` }}>
        <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(circle at center, ${primary_color}, transparent 70%)` }}></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">{title}</h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">{description}</p>
          <button 
            onClick={handleAction}
            className="px-12 py-5 rounded-2xl font-black text-black uppercase tracking-widest transition-transform hover:scale-105 shadow-[0_0_40px_rgba(0,0,0,0.3)]" 
            style={{ backgroundColor: primary_color, boxShadow: `0 0 40px ${primary_color}40` }}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};
