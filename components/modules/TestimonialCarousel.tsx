import React, { useState } from 'react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export const TestimonialCarousel = ({ title, testimonials, primary_color = 'blue' }: any) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className={`py-20 bg-${primary_color}-600 text-white overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black sm:text-4xl">{title || 'Khách hàng nói gì về chúng tôi'}</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials?.map((t: Testimonial, i: number) => (
                <div key={i} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white/10 backdrop-blur-xl rounded-[40px] p-10 md:p-16 border border-white/20 text-center">
                    <div className="mb-8 flex justify-center">
                      <img src={t.avatar} alt={t.name} className="w-24 h-24 rounded-full border-4 border-white/30 shadow-2xl" referrerPolicy="no-referrer" />
                    </div>
                    <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 italic">"{t.content}"</p>
                    <div className="font-black text-lg">{t.name}</div>
                    <div className="text-sm text-white/60 uppercase tracking-widest mt-1">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={prev} className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={next} className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {testimonials?.map((_: any, i: number) => (
            <button 
              key={i} 
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${current === i ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
