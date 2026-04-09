import React, { useState } from 'react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating?: number;
  companyLogo?: string;
  projectContext?: string;
}

export const TestimonialCarousel = ({ title, testimonials, primary_color = 'blue' }: any) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 bg-gray-950 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight max-w-4xl mx-auto">
            {title || 'Khách hàng nói gì về sự tận tâm của chúng tôi'}
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-[0.23,1,0.32,1]" 
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials?.map((t: Testimonial, i: number) => (
                <div key={i} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white/5 backdrop-blur-2xl rounded-[64px] p-12 md:p-20 border border-white/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
                      <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L21.017 3V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H5.017C3.91243 8 3.017 7.10457 3.017 6V3L10.017 3V15C10.017 18.3137 7.33071 21 4.017 21H3.017Z"/></svg>
                    </div>

                    <div className="flex flex-col items-center text-center relative z-10">
                      {t.rating && (
                        <div className="flex gap-1 mb-8">
                          {[...Array(5)].map((_, starIndex) => (
                            <svg key={starIndex} className={`w-5 h-5 ${starIndex < t.rating! ? 'text-yellow-400' : 'text-white/10'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                          ))}
                        </div>
                      )}

                      <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-12 tracking-tight">
                        "{t.content}"
                      </p>

                      <div className="flex items-center gap-6">
                        <div className="relative">
                          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-40"></div>
                          <img src={t.avatar} alt={t.name} className="relative w-20 h-20 rounded-full border-2 border-white/20 object-cover shadow-2xl" referrerPolicy="no-referrer" />
                        </div>
                        <div className="text-left">
                          <div className="text-xl font-black tracking-tight">{t.name}</div>
                          <div className="text-sm text-white/40 font-bold uppercase tracking-widest mt-1">{t.role}</div>
                          {t.projectContext && (
                            <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest mt-2">Dự án: {t.projectContext}</div>
                          )}
                        </div>
                        {t.companyLogo && (
                          <div className="ml-8 pl-8 border-l border-white/10 hidden md:block">
                            <img src={t.companyLogo} alt="Company" className="h-10 opacity-40 grayscale hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-1/2 -left-4 md:-left-24 -translate-y-1/2 flex flex-col gap-4">
            <button onClick={prev} className="w-14 h-14 rounded-2xl bg-white/5 hover:bg-blue-600 text-white border border-white/10 flex items-center justify-center transition-all shadow-2xl backdrop-blur-xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-24 -translate-y-1/2 flex flex-col gap-4">
            <button onClick={next} className="w-14 h-14 rounded-2xl bg-white/5 hover:bg-blue-600 text-white border border-white/10 flex items-center justify-center transition-all shadow-2xl backdrop-blur-xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-16">
          {testimonials?.map((_: any, i: number) => (
            <button 
              key={i} 
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${current === i ? 'w-12 bg-blue-600' : 'w-3 bg-white/10 hover:bg-white/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
