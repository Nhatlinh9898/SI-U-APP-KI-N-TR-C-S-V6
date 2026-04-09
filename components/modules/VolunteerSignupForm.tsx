import React, { useState } from 'react';

export const VolunteerSignupForm = ({ title, subtitle, primary_color = 'blue' }: any) => {
  const [step, setStep] = useState(1);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[64px] p-8 md:p-16 shadow-2xl border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">{title || 'Trở thành Tình nguyện viên'}</h2>
            <p className="text-lg text-gray-500">{subtitle || 'Góp sức mình để cùng chúng tôi lan tỏa những giá trị tốt đẹp.'}</p>
          </div>

          <div className="flex items-center justify-center gap-4 mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black transition-all ${
                  step >= s ? `bg-${primary_color}-600 text-white shadow-lg shadow-${primary_color}-600/30` : 'bg-gray-100 text-gray-400'
                }`}>
                  {s}
                </div>
                {s < 3 && <div className={`w-12 h-1 rounded-full ${step > s ? `bg-${primary_color}-600` : 'bg-gray-100'}`}></div>}
              </div>
            ))}
          </div>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Họ và tên</label>
                    <input type="text" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none font-bold" placeholder="Nguyễn Văn A" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Ngày sinh</label>
                    <input type="date" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none font-bold" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Email liên hệ</label>
                  <input type="email" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none font-bold" placeholder="email@example.com" />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Lĩnh vực quan tâm</label>
                  <div className="grid grid-cols-2 gap-4">
                    {['Giáo dục', 'Môi trường', 'Y tế', 'Cứu trợ'].map((item) => (
                      <label key={item} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl cursor-pointer hover:bg-gray-100 transition-colors">
                        <input type="checkbox" className="w-5 h-5 rounded-lg accent-blue-600" />
                        <span className="font-bold text-gray-700">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Thời gian có thể tham gia</label>
                  <select className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none font-bold appearance-none">
                    <option>Cuối tuần</option>
                    <option>Các ngày trong tuần</option>
                    <option>Toàn thời gian</option>
                    <option>Linh hoạt</option>
                  </select>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Tại sao bạn muốn tham gia?</label>
                  <textarea rows={4} className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none font-bold resize-none" placeholder="Chia sẻ động lực của bạn..."></textarea>
                </div>
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <input type="checkbox" className="w-5 h-5 rounded-lg accent-blue-600" />
                  <span className="text-sm font-bold text-blue-700">Tôi đồng ý với các điều khoản và cam kết bảo mật thông tin.</span>
                </div>
              </div>
            )}

            <div className="flex justify-between pt-8">
              {step > 1 && (
                <button 
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-8 py-4 rounded-2xl font-black text-gray-500 hover:bg-gray-100 transition-all"
                >
                  Quay lại
                </button>
              )}
              <button 
                type="button"
                onClick={() => step < 3 ? setStep(step + 1) : null}
                className={`ml-auto px-12 py-4 bg-${primary_color}-600 text-white rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-${primary_color}-600/30`}
              >
                {step === 3 ? 'Hoàn tất đăng ký' : 'Tiếp theo'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
