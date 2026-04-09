import React from 'react';

interface FooterProps {
  companyName: string;
  description: string;
  primary_color?: string;
}

export const Footer: React.FC<FooterProps> = ({ companyName, description, primary_color = '#f59e0b' }) => {
  return (
    <footer className="pt-16 pb-8 border-t border-slate-800/50 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-widest" style={{ color: primary_color }}>{companyName}</h3>
          <p className="text-slate-400 max-w-sm leading-relaxed">{description}</p>
        </div>
        <div>
          <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-widest">Sản Phẩm</h4>
          <ul className="space-y-2 text-slate-400">
            <li className="hover:text-white cursor-pointer transition-colors">Tính năng</li>
            <li className="hover:text-white cursor-pointer transition-colors">Bảng giá</li>
            <li className="hover:text-white cursor-pointer transition-colors">Tài liệu</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-widest">Công Ty</h4>
          <ul className="space-y-2 text-slate-400">
            <li className="hover:text-white cursor-pointer transition-colors">Về chúng tôi</li>
            <li className="hover:text-white cursor-pointer transition-colors">Tuyển dụng</li>
            <li className="hover:text-white cursor-pointer transition-colors">Liên hệ</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 pt-8 border-t border-slate-800/50 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} {companyName}. All rights reserved.
      </div>
    </footer>
  );
};
