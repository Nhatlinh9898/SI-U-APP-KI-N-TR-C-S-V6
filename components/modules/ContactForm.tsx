import React, { useState } from 'react';
import { toast } from 'sonner';

interface ContactField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea' | 'tel' | 'select';
  placeholder?: string;
  options?: string[];
  required?: boolean;
}

interface ContactFormProps {
  title: string;
  subtitle: string;
  buttonText: string;
  primary_color?: string;
  fields?: ContactField[];
  successMessage?: string;
  officeInfo?: {
    address?: string;
    phone?: string;
    email?: string;
    workingHours?: string;
  };
  socialLinks?: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

export const ContactForm: React.FC<ContactFormProps> = ({ 
  title, 
  subtitle, 
  buttonText, 
  primary_color = '#f59e0b',
  fields = [
    { name: 'name', label: 'Họ và tên', type: 'text', placeholder: 'Nhập tên của bạn', required: true },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Nhập email', required: true },
    { name: 'message', label: 'Lời nhắn', type: 'textarea', placeholder: 'Bạn cần hỗ trợ gì?', required: true }
  ],
  successMessage,
  officeInfo,
  socialLinks
}) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const missingFields = fields.filter(f => f.required && !formData[f.name]);
    if (missingFields.length > 0) {
      toast.error(`Vui lòng điền đầy đủ: ${missingFields.map(f => f.label).join(', ')}`);
      return;
    }
    
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success(successMessage || `Cảm ơn! Chúng tôi đã nhận được yêu cầu của bạn.`);
      setFormData({});
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="py-24 max-w-7xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Office Info & Socials */}
        {(officeInfo || socialLinks) && (
          <div className="lg:w-1/3 space-y-12">
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">{title || 'Liên hệ'}</h2>
              <p className="text-lg text-gray-500 leading-relaxed">{subtitle}</p>
            </div>

            {officeInfo && (
              <div className="space-y-8">
                {officeInfo.address && (
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-xl shrink-0">📍</div>
                    <div>
                      <h4 className="font-black text-gray-900 uppercase tracking-widest text-xs mb-1">Địa chỉ</h4>
                      <p className="text-gray-500 font-medium">{officeInfo.address}</p>
                    </div>
                  </div>
                )}
                {officeInfo.phone && (
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-xl shrink-0">📞</div>
                    <div>
                      <h4 className="font-black text-gray-900 uppercase tracking-widest text-xs mb-1">Điện thoại</h4>
                      <p className="text-gray-500 font-medium">{officeInfo.phone}</p>
                    </div>
                  </div>
                )}
                {officeInfo.email && (
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-xl shrink-0">✉️</div>
                    <div>
                      <h4 className="font-black text-gray-900 uppercase tracking-widest text-xs mb-1">Email</h4>
                      <p className="text-gray-500 font-medium">{officeInfo.email}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {socialLinks && (
              <div className="flex gap-4">
                {socialLinks.map((link, i) => (
                  <a 
                    key={i} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-2xl bg-gray-900 text-white flex items-center justify-center text-xl hover:scale-110 transition-transform"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Form */}
        <div className={`flex-1 ${!officeInfo && !socialLinks ? 'max-w-3xl mx-auto w-full' : ''}`}>
          <div className="p-10 md:p-12 rounded-[48px] bg-white border border-gray-100 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)]">
            {!officeInfo && !socialLinks && (
              <div className="text-center mb-12">
                <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">{title}</h2>
                <p className="text-lg text-gray-500">{subtitle}</p>
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {fields.map((field, i) => {
                  const isFullWidth = field.type === 'textarea' || fields.length === 1;
                  return (
                    <div key={i} className={`space-y-2 ${isFullWidth ? 'md:col-span-2' : ''}`}>
                      <label className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
                        {field.label} {field.required && <span className="text-red-500">*</span>}
                      </label>
                      
                      {field.type === 'textarea' ? (
                        <textarea 
                          rows={4} 
                          value={formData[field.name] || ''}
                          onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                          className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all placeholder:text-gray-300" 
                          style={{ '--tw-ring-color': primary_color } as any}
                          placeholder={field.placeholder}
                        />
                      ) : field.type === 'select' ? (
                        <select
                          value={formData[field.name] || ''}
                          onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                          className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all appearance-none"
                          style={{ '--tw-ring-color': primary_color } as any}
                        >
                          <option value="">{field.placeholder || 'Chọn một tùy chọn'}</option>
                          {field.options?.map((opt, idx) => (
                            <option key={idx} value={opt}>{opt}</option>
                          ))}
                        </select>
                      ) : (
                        <input 
                          type={field.type} 
                          value={formData[field.name] || ''}
                          onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                          className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all placeholder:text-gray-300" 
                          style={{ '--tw-ring-color': primary_color } as any}
                          placeholder={field.placeholder} 
                        />
                      )}
                    </div>
                  );
                })}
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 rounded-2xl font-black text-white uppercase tracking-[0.2em] transition-all hover:scale-[1.02] active:scale-[0.98] mt-4 disabled:opacity-70 shadow-xl" 
                style={{ backgroundColor: primary_color, boxShadow: `0 20px 40px -12px ${primary_color}40` }}
              >
                {isSubmitting ? 'ĐANG GỬI...' : (buttonText || 'GỬI YÊU CẦU')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
