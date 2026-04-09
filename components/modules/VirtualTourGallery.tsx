import React, { useState } from 'react';

interface TourImage {
  url: string;
  label: string;
}

export const VirtualTourGallery = ({ title, subtitle, images, primary_color = 'blue' }: any) => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">{subtitle}</p>}
        </div>

        <div className="space-y-6">
          <div className="aspect-video rounded-[40px] overflow-hidden relative shadow-2xl border border-white/10">
            <img 
              src={images[active]?.url} 
              alt={images[active]?.label} 
              className="w-full h-full object-cover transition-all duration-1000" 
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-10 left-10">
              <div className={`inline-block px-4 py-1 bg-${primary_color}-600 rounded-full text-xs font-black uppercase tracking-widest mb-2`}>
                Đang xem
              </div>
              <h3 className="text-3xl font-black">{images[active]?.label}</h3>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 left-6 right-6 flex justify-between pointer-events-none">
              <button 
                onClick={() => setActive((prev) => (prev - 1 + images.length) % images.length)}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all pointer-events-auto"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button 
                onClick={() => setActive((prev) => (prev + 1) % images.length)}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all pointer-events-auto"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
            {images?.map((img: TourImage, index: number) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`flex-shrink-0 w-40 aspect-video rounded-2xl overflow-hidden border-4 transition-all ${
                  active === index ? `border-${primary_color}-500 scale-105` : 'border-transparent opacity-50 hover:opacity-100'
                }`}
              >
                <img src={img.url} alt={img.label} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
