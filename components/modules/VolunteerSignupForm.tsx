import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const VolunteerSignupForm = ({ title, subtitle, steps, primary_color = 'blue' }: any) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const defaultSteps = [
    {
      title: 'Thông tin cá nhân',
      fields: [
        { name: 'fullName', label: 'Họ và tên', type: 'text', placeholder: 'Nguyễn Văn A' },
        { name: 'email', label: 'Email liên hệ', type: 'email', placeholder: 'email@example.com' },
        { name: 'phone', label: 'Số điện thoại', type: 'tel', placeholder: '090 123 4567' }
      ]
    },
    {
      title: 'Kỹ năng & Quan tâm',
      fields: [
        { name: 'interests', label: 'Lĩnh vực quan tâm', type: 'checkbox', options: ['Giáo dục', 'Môi trường', 'Y tế', 'Cứu trợ'] },
        { name: 'availability', label: 'Thời gian có thể tham gia', type: 'select', options: ['Cuối tuần', 'Ngày trong tuần', 'Linh hoạt'] }
      ]
    },
    {
      title: 'Động lực',
      fields: [
        { name: 'motivation', label: 'Tại sao bạn muốn tham gia?', type: 'textarea', placeholder: 'Chia sẻ động lực của bạn...' }
      ]
    }
  ];

  const activeSteps = steps || defaultSteps;

  const handleNext = () => {
    if (currentStep < activeSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-50 rounded-[64px] p-16 text-center border border-gray-100 shadow-2xl"
          >
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-8">✓</div>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Đăng ký thành công!</h2>
            <p className="text-xl text-gray-500 font-medium mb-10">Cảm ơn bạn đã quan tâm. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.</p>
            <button 
              onClick={() => { setIsSubmitted(false); setCurrentStep(0); }}
              className="px-10 py-5 bg-gray-900 text-white rounded-3xl font-black uppercase tracking-widest hover:bg-orange-600 transition-all"
            >
              Quay lại trang chủ
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-[80px] p-12 md:p-24 border border-gray-100 shadow-[0_48px_96px_-12px_rgba(0,0,0,0.08)]">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">{title || 'Trở thành Tình nguyện viên'}</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">{subtitle || 'Góp sức mình để cùng chúng tôi lan tỏa những giá trị tốt đẹp.'}</p>
          </div>

          <div className="flex items-center justify-center gap-4 mb-16">
            {activeSteps.map((s: any, i: number) => (
              <React.Fragment key={i}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black transition-all duration-500 ${
                  currentStep >= i ? 'bg-gray-900 text-white shadow-2xl scale-110' : 'bg-white text-gray-300 border border-gray-100'
                }`}>
                  {i + 1}
                </div>
                {i < activeSteps.length - 1 && (
                  <div className={`w-12 h-1 rounded-full transition-all duration-500 ${currentStep > i ? 'bg-gray-900' : 'bg-gray-200'}`}></div>
                )}
              </React.Fragment>
            ))}
          </div>

          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <h3 className="text-xs font-black text-orange-600 uppercase tracking-[0.2em] mb-8">{activeSteps[currentStep].title}</h3>
                
                <div className="grid grid-cols-1 gap-8">
                  {activeSteps[currentStep].fields.map((field: any, i: number) => (
                    <div key={i} className="space-y-3">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">{field.label}</label>
                      
                      {field.type === 'textarea' ? (
                        <textarea 
                          rows={4}
                          className="w-full bg-white border-2 border-transparent rounded-[32px] px-8 py-6 focus:border-orange-600 focus:ring-0 outline-none font-bold text-gray-700 transition-all shadow-sm resize-none"
                          placeholder={field.placeholder}
                        />
                      ) : field.type === 'select' ? (
                        <select className="w-full bg-white border-2 border-transparent rounded-[32px] px-8 py-6 focus:border-orange-600 focus:ring-0 outline-none font-bold text-gray-700 transition-all shadow-sm appearance-none">
                          {field.options.map((opt: string) => <option key={opt}>{opt}</option>)}
                        </select>
                      ) : field.type === 'checkbox' ? (
                        <div className="grid grid-cols-2 gap-4">
                          {field.options.map((opt: string) => (
                            <label key={opt} className="flex items-center gap-4 p-6 bg-white rounded-3xl cursor-pointer hover:border-orange-600 border-2 border-transparent transition-all shadow-sm group">
                              <input type="checkbox" className="w-6 h-6 rounded-lg accent-orange-600" />
                              <span className="font-black text-gray-500 group-hover:text-gray-900 transition-colors">{opt}</span>
                            </label>
                          ))}
                        </div>
                      ) : (
                        <input 
                          type={field.type}
                          className="w-full bg-white border-2 border-transparent rounded-[32px] px-8 py-6 focus:border-orange-600 focus:ring-0 outline-none font-bold text-gray-700 transition-all shadow-sm"
                          placeholder={field.placeholder}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between pt-12 border-t border-gray-100">
              {currentStep > 0 && (
                <button 
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="px-10 py-5 rounded-3xl font-black text-gray-400 hover:bg-white hover:text-gray-900 transition-all uppercase tracking-widest text-sm"
                >
                  Quay lại
                </button>
              )}
              <button 
                type="button"
                onClick={handleNext}
                className="ml-auto px-14 py-5 bg-gray-900 text-white rounded-[32px] font-black hover:bg-orange-600 transition-all shadow-2xl hover:scale-[1.02] active:scale-95 uppercase tracking-widest text-sm"
              >
                {currentStep === activeSteps.length - 1 ? 'Gửi đăng ký' : 'Tiếp theo'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
