import React from 'react';

interface CarFeature {
  label: string;
  value: string;
  icon: string;
}

export const CarFeatureHighlight = ({ title, subtitle, carName, image, features, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className={`absolute -inset-4 bg-${primary_color}-600/10 blur-[100px] rounded-full`}></div>
            <img src={image} alt={carName} className="relative w-full h-auto object-contain drop-shadow-2xl" referrerPolicy="no-referrer" />
          </div>

          <div>
            <div className={`inline-block px-4 py-1 bg-${primary_color}-100 text-${primary_color}-600 rounded-full text-xs font-black uppercase tracking-widest mb-4`}>
              Mẫu xe nổi bật
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">{carName}</h2>
            <p className="text-xl text-gray-500 mb-10 leading-relaxed">{subtitle}</p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {features?.map((feature: CarFeature, index: number) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="text-2xl">{feature.icon}</div>
                  <div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{feature.label}</div>
                    <div className="font-bold text-gray-900">{feature.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <button className={`px-10 py-4 bg-${primary_color}-600 text-white rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-${primary_color}-600/30`}>
              Đặt xe ngay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
