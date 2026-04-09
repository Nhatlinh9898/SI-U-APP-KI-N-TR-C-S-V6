import React, { useState } from 'react';

export const JobApplicationForm = ({ title, subtitle, primary_color = 'blue' }: any) => {
  const [step, setStep] = useState(1);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-[48px] p-8 md:p-16 border border-gray-100 shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-4">{title || 'Ứng tuyển ngay'}</h2>
            <p className="text-gray-500">{subtitle || 'Gia nhập đội ngũ của chúng tôi và cùng nhau tạo nên những điều tuyệt vời'}</p>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-12 max-w-md mx-auto">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black transition-all ${
                  step >= s ? `bg-${primary_color}-600 text-white` : 'bg-gray-200 text-gray-400'
                }`}>
                  {s}
                </div>
                {s < 3 && (
                  <div className={`w-12 md:w-20 h-1 mx-2 rounded-full ${
                    step > s ? `bg-${primary_color}-600` : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Họ và tên</label>
                    <input type="text" placeholder="Nguyễn Văn A" className="w-full bg-white border-2 border-gray-100 rounded-2xl px-6 py-4 focus:border-blue-500 outline-none transition-all font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Email</label>
                    <input type="email" placeholder="email@example.com" className="w-full bg-white border-2 border-gray-100 rounded-2xl px-6 py-4 focus:border-blue-500 outline-none transition-all font-bold" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Số điện thoại</label>
                  <input type="tel" placeholder="090 123 4567" className="w-full bg-white border-2 border-gray-100 rounded-2xl px-6 py-4 focus:border-blue-500 outline-none transition-all font-bold" />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Vị trí ứng tuyển</label>
                  <select className="w-full bg-white border-2 border-gray-100 rounded-2xl px-6 py-4 focus:border-blue-500 outline-none transition-all font-bold appearance-none">
                    <option>Frontend Developer</option>
                    <option>Backend Developer</option>
                    <option>UI/UX Designer</option>
                    <option>Product Manager</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Link Portfolio / LinkedIn</label>
                  <input type="url" placeholder="https://linkedin.com/in/..." className="w-full bg-white border-2 border-gray-100 rounded-2xl px-6 py-4 focus:border-blue-500 outline-none transition-all font-bold" />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Tải lên CV (PDF)</label>
                  <div className="border-4 border-dashed border-gray-200 rounded-[32px] p-12 text-center hover:border-blue-400 transition-all cursor-pointer group">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📄</div>
                    <p className="font-bold text-gray-500">Kéo thả file vào đây hoặc click để chọn</p>
                    <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest">Dung lượng tối đa 5MB</p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between pt-8">
              {step > 1 && (
                <button 
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-8 py-4 rounded-2xl font-black text-gray-500 hover:bg-gray-200 transition-all"
                >
                  Quay lại
                </button>
              )}
              <button 
                type="button"
                onClick={() => step < 3 ? setStep(step + 1) : null}
                className={`ml-auto px-10 py-4 bg-${primary_color}-600 text-white rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-${primary_color}-600/30`}
              >
                {step === 3 ? 'Gửi hồ sơ' : 'Tiếp theo'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
