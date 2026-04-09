import React from 'react';

export const RecipeDetailView = ({ title, subtitle, image, time, difficulty, calories, ingredients, steps, chef_tips, nutrition_facts, primary_color = 'amber' }: any) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="lg:sticky lg:top-24">
            <div className="relative aspect-[4/5] rounded-[80px] overflow-hidden shadow-[0_48px_96px_-12px_rgba(0,0,0,0.15)] mb-12 group">
              <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-10 left-10 flex flex-col gap-4">
                <span className="px-6 py-3 bg-white/95 backdrop-blur-xl rounded-2xl text-xs font-black uppercase tracking-[0.2em] text-gray-900 shadow-2xl">
                  ⏱ {time}
                </span>
                <span className="px-6 py-3 bg-white/95 backdrop-blur-xl rounded-2xl text-xs font-black uppercase tracking-[0.2em] text-gray-900 shadow-2xl">
                  🔥 {calories} kcal
                </span>
                <span className="px-6 py-3 bg-orange-600 text-white rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-2xl">
                  {difficulty}
                </span>
              </div>
            </div>
            
            <div className="px-6">
              <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight tracking-tighter">{title}</h2>
              <p className="text-xl text-gray-500 mb-10 leading-relaxed font-medium">{subtitle}</p>
              
              <div className="flex items-center gap-8 p-8 bg-gray-50 rounded-[40px] border border-gray-100">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-14 h-14 rounded-full border-4 border-white bg-gray-200 overflow-hidden shadow-lg">
                      <img src={`https://picsum.photos/seed/chef${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-black text-gray-900 uppercase tracking-widest mb-1">Cộng đồng yêu bếp</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    <span className="text-orange-600">1.5k+</span> người đã thực hiện thành công
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-20">
            <div className="bg-gray-50 rounded-[64px] p-12 md:p-20 border border-gray-100 shadow-inner">
              <h3 className="text-3xl font-black text-gray-900 mb-12 flex items-center gap-6">
                <span className="w-14 h-14 rounded-3xl bg-orange-600 text-white flex items-center justify-center text-2xl shadow-lg shadow-orange-600/30">🛒</span>
                Nguyên liệu
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ingredients?.map((item: any, index: number) => (
                  <div key={index} className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-gray-100 group hover:border-orange-200 transition-all duration-300 shadow-sm">
                    <div className="w-4 h-4 rounded-full bg-gray-100 group-hover:bg-orange-600 transition-colors border-4 border-white shadow-sm"></div>
                    <div className="flex-grow">
                      <div className="font-black text-gray-900 text-lg">{item.name}</div>
                      <div className="text-xs text-gray-400 font-black uppercase tracking-widest mt-1">{item.amount}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-12 px-6">
              <h3 className="text-3xl font-black text-gray-900 mb-12 flex items-center gap-6">
                <span className="w-14 h-14 rounded-3xl bg-gray-900 text-white flex items-center justify-center text-2xl shadow-xl">👨‍🍳</span>
                Cách chế biến
              </h3>
              <div className="space-y-16">
                {steps?.map((step: any, index: number) => (
                  <div key={index} className="flex gap-10 group">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-[28px] bg-white border-2 border-gray-100 text-gray-900 flex items-center justify-center text-2xl font-black group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-all duration-500 shadow-xl">
                        {index + 1}
                      </div>
                    </div>
                    <div className="pt-3">
                      <h4 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">{step.title}</h4>
                      <p className="text-lg text-gray-500 leading-relaxed font-medium">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {chef_tips && (
              <div className="bg-orange-600 rounded-[64px] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -mr-32 -mt-32"></div>
                <h3 className="text-xs font-black text-white/40 uppercase tracking-[0.3em] mb-8">Bí quyết từ đầu bếp</h3>
                <p className="text-2xl font-black leading-relaxed italic">"{chef_tips}"</p>
              </div>
            )}

            {nutrition_facts && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {Object.entries(nutrition_facts).map(([key, value]: any) => (
                  <div key={key} className="bg-gray-50 p-8 rounded-[40px] text-center border border-gray-100">
                    <div className="text-2xl font-black text-gray-900 mb-2">{value}</div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{key}</div>
                  </div>
                ))}
              </div>
            )}

            <button className="w-full py-8 bg-gray-900 text-white rounded-[40px] font-black text-2xl hover:bg-orange-600 transition-all shadow-2xl hover:scale-[1.02] active:scale-95 uppercase tracking-widest">
              Lưu công thức & In
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
