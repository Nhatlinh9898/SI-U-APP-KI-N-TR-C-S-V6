import React, { useState } from 'react';
import { toast } from 'sonner';

interface ContactFormProps {
  title: string;
  subtitle: string;
  buttonText: string;
  primary_color?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ title, subtitle, buttonText, primary_color = '#f59e0b' }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Vui lòng điền đầy đủ thông tin!');
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      toast.success(`Cảm ơn ${formData.name}! Chúng tôi đã nhận được yêu cầu của bạn.`);
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="py-16 max-w-3xl mx-auto px-4">
      <div className="p-10 rounded-[2.5rem] bg-slate-900/80 border border-slate-800 backdrop-blur-xl text-center">
        <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-widest">{title || 'LIÊN HỆ VỚI CHÚNG TÔI'}</h2>
        <p className="text-slate-400 mb-8">{subtitle}</p>
        <form className="space-y-4 text-left" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Họ và tên</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" 
                placeholder="Nhập tên của bạn" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</label>
              <input 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" 
                placeholder="Nhập email" 
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Lời nhắn</label>
            <textarea 
              rows={4} 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" 
              placeholder="Bạn cần hỗ trợ gì?"
            ></textarea>
          </div>
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-xl font-black text-black uppercase tracking-widest transition-transform hover:scale-[1.02] mt-4 disabled:opacity-70 disabled:hover:scale-100" 
            style={{ backgroundColor: primary_color }}
          >
            {isSubmitting ? 'ĐANG GỬI...' : (buttonText || 'GỬI YÊU CẦU')}
          </button>
        </form>
      </div>
    </div>
  );
};
