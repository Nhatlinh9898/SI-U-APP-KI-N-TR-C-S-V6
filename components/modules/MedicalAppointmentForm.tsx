import React, { useState } from 'react';

export const MedicalAppointmentForm = ({ title, subtitle, departments, primary_color = 'blue' }: any) => {
  const [step, setStep] = useState(1);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-50/50 rounded-[64px] p-8 md:p-16 border border-blue-100 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full -mr-32 -mt-32"></div>
          
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-4xl font-black text-gray-900 mb-4">{title || 'Đặt lịch khám trực tuyến'}</h2>
            <p className="text-lg text-gray-500">{subtitle || 'Chăm sóc sức khỏe của bạn là ưu tiên hàng đầu của chúng tôi.'}</p>
          </div>

          <div className="flex items-center justify-center gap-4 mb-12 relative z-10">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black transition-all ${
                  step >= s ? `bg-${primary_color}-600 text-white shadow-lg shadow-${primary_color}-600/30` : 'bg-white text-gray-300 border border-gray-100'
                }`}>
                  {s}
                </div>
                {s < 3 && <div className={`w-12 h-1 rounded-full ${step > s ? `bg-${primary_color}-600` : 'bg-gray-200'}`}></div>}
              </div>
            ))}
          </div>

          <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Chọn chuyên khoa</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {departments?.map((dept: any, i: number) => (
                      <label key={i} className="group cursor-pointer">
                        <input type="radio" name="dept" className="hidden peer" />
                        <div className="p-4 bg-white border-2 border-transparent rounded-2xl text-center peer-checked:border-blue-600 peer-checked:bg-blue-50 transition-all hover:border-gray-200">
                          <div className="text-2xl mb-2">{dept.icon}</div>
                          <div className="text-xs font-black text-gray-900 uppercase tracking-tighter">{dept.name}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Họ và tên bệnh nhân</label>
                    <input type="text" className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none font-bold" placeholder="Nguyễn Văn A" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Số điện thoại</label>
                    <input type="tel" className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none font-bold" placeholder="090 123 4567" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Email (Không bắt buộc)</label>
                  <input type="email" className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none font-bold" placeholder="email@example.com" />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Chọn ngày khám</label>
                    <input type="date" className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Chọn giờ khám</label>
                    <select className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none font-bold appearance-none">
                      <option>08:00 - 09:00</option>
                      <option>09:00 - 10:00</option>
                      <option>10:00 - 11:00</option>
                      <option>14:00 - 15:00</option>
                      <option>15:00 - 16:00</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Triệu chứng / Ghi chú</label>
                  <textarea rows={3} className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none font-bold resize-none" placeholder="Mô tả ngắn gọn tình trạng của bạn..."></textarea>
                </div>
              </div>
            )}

            <div className="flex justify-between pt-8">
              {step > 1 && (
                <button 
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-8 py-4 rounded-2xl font-black text-gray-500 hover:bg-white transition-all"
                >
                  Quay lại
                </button>
              )}
              <button 
                type="button"
                onClick={() => step < 3 ? setStep(step + 1) : null}
                className={`ml-auto px-12 py-4 bg-${primary_color}-600 text-white rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-${primary_color}-600/30`}
              >
                {step === 3 ? 'Xác nhận đặt lịch' : 'Tiếp theo'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
