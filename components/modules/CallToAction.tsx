import React from 'react';
import { toast } from 'sonner';

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  secondaryButtonText?: string;
  backgroundImage?: string;
  primary_color?: string;
  stats?: { label: string, value: string }[];
  variant?: 'simple' | 'glass' | 'image';
}

export const CallToAction: React.FC<CallToActionProps> = ({ 
  title, 
  description, 
  buttonText, 
  secondaryButtonText,
  backgroundImage,
  primary_color = '#f59e0b',
  stats = [],
  variant = 'simple'
}) => {
  const handleAction = () => {
    toast.success('Đang khởi tạo quy trình đăng ký...');
  };

  const isImage = variant === 'image' && backgroundImage;
  const isGlass = variant === 'glass';

  return (
    <div className="py-24 px-4">
      <div 
        className={`max-w-6xl mx-auto rounded-[48px] p-12 md:p-24 text-center relative overflow-hidden transition-all duration-500`}
        style={{ 
          backgroundColor: isImage ? 'transparent' : isGlass ? 'rgba(255,255,255,0.05)' : `${primary_color}10`,
          border: isGlass ? '1px solid rgba(255,255,255,0.1)' : `1px solid ${primary_color}20`,
          backdropBlur: isGlass ? '24px' : 'none'
        } as any}
      >
        {isImage && (
          <>
            <img src={backgroundImage} alt="Background" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
          </>
        )}
        
        {!isImage && (
          <div className="absolute inset-0 opacity-30" style={{ background: `radial-gradient(circle at center, ${primary_color}, transparent 70%)` }}></div>
        )}

        <div className="relative z-10">
          <h2 className={`text-4xl md:text-6xl font-black mb-8 uppercase tracking-tight leading-tight ${isImage || isGlass ? 'text-white' : 'text-gray-900'}`}>
            {title}
          </h2>
          <p className={`text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed ${isImage || isGlass ? 'text-gray-300' : 'text-gray-500'}`}>
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <button 
              onClick={handleAction}
              className="w-full sm:w-auto px-12 py-5 rounded-2xl font-black text-white uppercase tracking-[0.2em] transition-all hover:scale-105 shadow-2xl active:scale-95" 
              style={{ backgroundColor: primary_color, boxShadow: `0 20px 40px -12px ${primary_color}60` }}
            >
              {buttonText}
            </button>
            {secondaryButtonText && (
              <button className={`w-full sm:w-auto px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] transition-all hover:bg-white/10 border-2 active:scale-95 ${isImage || isGlass ? 'text-white border-white/20' : 'text-gray-900 border-gray-200'}`}>
                {secondaryButtonText}
              </button>
            )}
          </div>

          {stats.length > 0 && (
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 pt-12 border-t border-white/10">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className={`text-3xl md:text-4xl font-black mb-2 ${isImage || isGlass ? 'text-white' : 'text-gray-900'}`}>{stat.value}</div>
                  <div className={`text-xs font-black uppercase tracking-[0.3em] ${isImage || isGlass ? 'text-gray-400' : 'text-gray-400'}`}>{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
