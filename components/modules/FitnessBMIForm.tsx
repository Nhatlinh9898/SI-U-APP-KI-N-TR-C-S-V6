import React, { useState } from 'react';

export const FitnessBMIForm = ({ title, subtitle, primary_color = 'blue' }: any) => {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(175);

  const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
  
  const getBMICategory = (val: number) => {
    if (val < 18.5) return { label: 'Thiếu cân', color: 'text-blue-500', bg: 'bg-blue-50' };
    if (val < 25) return { label: 'Bình thường', color: 'text-green-500', bg: 'bg-green-50' };
    if (val < 30) return { label: 'Thừa cân', color: 'text-yellow-500', bg: 'bg-yellow-50' };
    return { label: 'Béo phì', color: 'text-red-500', bg: 'bg-red-50' };
  };

  const category = getBMICategory(Number(bmi));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-[64px] p-10 md:p-20 border border-gray-100 shadow-2xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">{title || 'Tính chỉ số BMI'}</h2>
            <p className="text-lg text-gray-500">{subtitle || 'Kiểm tra tình trạng sức khỏe của bạn chỉ trong vài giây'}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex justify-between">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Cân nặng (kg)</label>
                  <span className="font-black text-gray-900">{weight} kg</span>
                </div>
                <input 
                  type="range" min="30" max="150" value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              <div className="space-y-6">
                <div className="flex justify-between">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Chiều cao (cm)</label>
                  <span className="font-black text-gray-900">{height} cm</span>
                </div>
                <input 
                  type="range" min="100" max="220" value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>
            </div>

            <div className="bg-white rounded-[48px] p-12 shadow-xl border border-gray-50 text-center relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-2 ${category.bg.replace('bg-', 'bg-')}`}></div>
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Chỉ số BMI của bạn</h3>
              <div className="text-7xl font-black text-gray-900 mb-4">{bmi}</div>
              <div className={`inline-block px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest ${category.bg} ${category.color}`}>
                {category.label}
              </div>
              
              <div className="mt-10 pt-10 border-t border-gray-100">
                <p className="text-sm text-gray-500 leading-relaxed">
                  Dựa trên chỉ số này, chúng tôi khuyên bạn nên tập trung vào các bài tập 
                  <span className="font-bold text-gray-900"> {bmi < '25' ? 'tăng cơ' : 'đốt mỡ'} </span> 
                  để đạt hình thể lý tưởng.
                </p>
                <button className={`mt-8 w-full py-4 bg-${primary_color}-600 text-white rounded-2xl font-black hover:scale-105 transition-all shadow-lg shadow-${primary_color}-600/30`}>
                  Nhận lộ trình tập luyện
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
