import React from 'react';

export const RecipeDetailView = ({ title, subtitle, image, time, difficulty, calories, ingredients, steps, primary_color = 'amber' }: any) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="sticky top-24">
            <div className="relative aspect-square rounded-[64px] overflow-hidden shadow-2xl mb-12">
              <img src={image} alt={title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute top-8 left-8 flex gap-3">
                <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-gray-900 shadow-lg">
                  ⏱ {time}
                </span>
                <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-gray-900 shadow-lg">
                  🔥 {calories} kcal
                </span>
              </div>
            </div>
            
            <div className="px-4">
              <h2 className="text-5xl font-black text-gray-900 mb-4 leading-tight">{title}</h2>
              <p className="text-xl text-gray-500 mb-8 leading-relaxed">{subtitle}</p>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                  <span className="text-gray-900">1.2k+</span> người đã thử công thức này
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-16">
            <div className="bg-gray-50 rounded-[48px] p-10 md:p-16 border border-gray-100">
              <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-4">
                <span className={`w-10 h-10 rounded-2xl bg-${primary_color}-100 text-${primary_color}-600 flex items-center justify-center text-xl`}>🛒</span>
                Nguyên liệu cần chuẩn bị
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ingredients?.map((item: any, index: number) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 group hover:border-amber-200 transition-colors">
                    <div className={`w-3 h-3 rounded-full bg-${primary_color}-600/20 group-hover:bg-${primary_color}-600 transition-colors`}></div>
                    <div className="flex-grow">
                      <div className="font-bold text-gray-900">{item.name}</div>
                      <div className="text-xs text-gray-400 font-black uppercase tracking-widest">{item.amount}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-10">
              <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-4">
                <span className={`w-10 h-10 rounded-2xl bg-${primary_color}-100 text-${primary_color}-600 flex items-center justify-center text-xl`}>👨‍🍳</span>
                Các bước thực hiện
              </h3>
              <div className="space-y-12">
                {steps?.map((step: any, index: number) => (
                  <div key={index} className="flex gap-8 group">
                    <div className="flex-shrink-0">
                      <div className={`w-14 h-14 rounded-[20px] bg-gray-900 text-white flex items-center justify-center text-xl font-black group-hover:bg-${primary_color}-600 transition-colors shadow-xl`}>
                        {index + 1}
                      </div>
                    </div>
                    <div className="pt-2">
                      <h4 className="text-lg font-black text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-500 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className={`w-full py-6 bg-${primary_color}-600 text-white rounded-[32px] font-black text-xl hover:scale-[1.02] transition-all shadow-2xl shadow-${primary_color}-600/30`}>
              In công thức này
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
