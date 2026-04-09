import React from 'react';

export const LeadMagnet = ({ title, subtitle, description, buttonText, image, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`bg-${primary_color}-600 rounded-[48px] overflow-hidden shadow-2xl shadow-${primary_color}-600/20 flex flex-col lg:flex-row items-center`}>
          <div className="lg:w-1/2 p-10 md:p-16 text-white">
            <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Quà tặng miễn phí
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">{title}</h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">{description}</p>
            
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Nhập email của bạn..." 
                className="flex-grow px-6 py-4 rounded-2xl bg-white text-gray-900 font-medium focus:outline-none focus:ring-4 focus:ring-white/20"
              />
              <button className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-black hover:bg-black transition-all shadow-xl">
                {buttonText}
              </button>
            </form>
            <p className="mt-4 text-sm text-white/60 italic">* Chúng tôi cam kết không spam. Bạn có thể hủy bất cứ lúc nào.</p>
          </div>
          
          <div className="lg:w-1/2 w-full aspect-square lg:aspect-auto lg:h-full relative">
            <img src={image} alt={title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
