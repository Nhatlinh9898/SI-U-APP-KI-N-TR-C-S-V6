import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const MedicalAppointmentForm = ({ title, subtitle, departments, doctors, insurance_partners, primary_color = 'blue' }: any) => {
  const [step, setStep] = useState(1);
  const [selectedDept, setSelectedDept] = useState<any>(null);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-50/30 rounded-[80px] p-10 md:p-20 border border-blue-100 shadow-[0_64px_128px_-12px_rgba(0,0,0,0.08)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -mr-64 -mt-64"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full -ml-48 -mb-48"></div>
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">{title || 'Đặt lịch khám trực tuyến'}</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">{subtitle || 'Chăm sóc sức khỏe của bạn là ưu tiên hàng đầu của chúng tôi.'}</p>
          </div>

          <div className="flex items-center justify-center gap-6 mb-16 relative z-10">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-14 h-14 rounded-[24px] flex items-center justify-center font-black transition-all duration-500 ${
                  step >= s ? `bg-${primary_color}-600 text-white shadow-2xl shadow-${primary_color}-600/30 scale-110` : 'bg-white text-gray-300 border border-gray-100'
                }`}>
                  {s}
                </div>
                {s < 4 && <div className={`w-12 md:w-20 h-1.5 rounded-full mx-2 ${step > s ? `bg-${primary_color}-600` : 'bg-gray-200'}`}></div>}
              </div>
            ))}
          </div>

          <form className="relative z-10" onSubmit={(e) => e.preventDefault()}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8"
                >
                  <div className="space-y-4">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] ml-4">Chọn chuyên khoa</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {departments?.map((dept: any, i: number) => (
                        <label key={i} className="group cursor-pointer">
                          <input 
                            type="radio" 
                            name="dept" 
                            className="hidden peer" 
                            onChange={() => setSelectedDept(dept)}
                            checked={selectedDept?.name === dept.name}
                          />
                          <div className="p-6 bg-white border-2 border-transparent rounded-[32px] text-center peer-checked:border-blue-600 peer-checked:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{dept.icon}</div>
                            <div className="text-xs font-black text-gray-900 uppercase tracking-tight">{dept.name}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8"
                >
                  <div className="space-y-4">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] ml-4">Chọn bác sĩ phụ trách</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {doctors?.filter((d: any) => !selectedDept || d.department === selectedDept.name).map((doctor: any, i: number) => (
                        <label key={i} className="group cursor-pointer">
                          <input type="radio" name="doctor" className="hidden peer" />
                          <div className="p-6 bg-white border-2 border-transparent rounded-[40px] flex items-center gap-6 peer-checked:border-blue-600 peer-checked:bg-blue-50 transition-all duration-300 shadow-sm">
                            <img src={doctor.image} alt={doctor.name} className="w-20 h-20 rounded-[28px] object-cover shadow-lg" referrerPolicy="no-referrer" />
                            <div>
                              <div className="font-black text-gray-900 text-lg">{doctor.name}</div>
                              <div className="text-xs font-black text-blue-600 uppercase tracking-widest mt-1">{doctor.role}</div>
                              <div className="text-[10px] text-gray-400 font-bold mt-2">Kinh nghiệm: {doctor.experience}</div>
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] ml-4">Họ và tên bệnh nhân</label>
                      <input type="text" className="w-full bg-white border border-gray-100 rounded-[24px] px-8 py-5 focus:ring-4 focus:ring-blue-500/10 outline-none font-bold text-lg shadow-sm" placeholder="Nguyễn Văn A" />
                    </div>
                    <div className="space-y-4">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] ml-4">Số điện thoại</label>
                      <input type="tel" className="w-full bg-white border border-gray-100 rounded-[24px] px-8 py-5 focus:ring-4 focus:ring-blue-500/10 outline-none font-bold text-lg shadow-sm" placeholder="090 123 4567" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] ml-4">Bảo hiểm liên kết (Nếu có)</label>
                    <div className="flex flex-wrap gap-4">
                      {insurance_partners?.map((partner: any, i: number) => (
                        <label key={i} className="cursor-pointer">
                          <input type="checkbox" className="hidden peer" />
                          <div className="px-6 py-3 bg-white border border-gray-100 rounded-2xl peer-checked:bg-blue-600 peer-checked:text-white transition-all text-xs font-black uppercase tracking-widest shadow-sm">
                            {partner}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div 
                  key="step4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] ml-4">Chọn ngày khám</label>
                      <input type="date" className="w-full bg-white border border-gray-100 rounded-[24px] px-8 py-5 focus:ring-4 focus:ring-blue-500/10 outline-none font-bold text-lg shadow-sm" />
                    </div>
                    <div className="space-y-4">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] ml-4">Chọn giờ khám</label>
                      <select className="w-full bg-white border border-gray-100 rounded-[24px] px-8 py-5 focus:ring-4 focus:ring-blue-500/10 outline-none font-bold text-lg shadow-sm appearance-none">
                        <option>08:00 - 09:00</option>
                        <option>09:00 - 10:00</option>
                        <option>10:00 - 11:00</option>
                        <option>14:00 - 15:00</option>
                        <option>15:00 - 16:00</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] ml-4">Triệu chứng / Ghi chú</label>
                    <textarea rows={4} className="w-full bg-white border border-gray-100 rounded-[32px] px-8 py-6 focus:ring-4 focus:ring-blue-500/10 outline-none font-bold text-lg shadow-sm resize-none" placeholder="Mô tả ngắn gọn tình trạng sức khỏe của bạn..."></textarea>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-between pt-12">
              {step > 1 && (
                <button 
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-10 py-5 rounded-[24px] font-black text-gray-400 hover:text-gray-900 hover:bg-white transition-all uppercase tracking-widest text-sm"
                >
                  Quay lại
                </button>
              )}
              <button 
                type="button"
                onClick={() => step < 4 ? setStep(step + 1) : null}
                className={`ml-auto px-14 py-5 bg-${primary_color}-600 text-white rounded-[24px] font-black hover:scale-[1.05] transition-all shadow-2xl shadow-${primary_color}-600/40 uppercase tracking-[0.2em] text-sm`}
              >
                {step === 4 ? 'Xác nhận đặt lịch' : 'Tiếp theo'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
