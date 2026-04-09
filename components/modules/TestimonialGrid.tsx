import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

interface TestimonialGridProps {
  title: string;
  subtitle?: string;
  testimonials: Testimonial[];
  primary_color?: string;
}

export const TestimonialGrid: React.FC<TestimonialGridProps> = ({ title, subtitle, testimonials, primary_color = '#f59e0b' }) => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">{title || 'Khách hàng nói gì về chúng tôi'}</h2>
          {subtitle && <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials?.map((t, i) => (
            <div key={i} className="group p-10 rounded-[48px] bg-gray-50 border border-gray-100 relative hover:bg-white hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] transition-all duration-500">
              <Quote size={48} className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity" style={{ color: primary_color }} />
              <p className="text-gray-600 mb-10 relative z-10 text-lg leading-relaxed italic">"{t.content}"</p>
              <div className="flex items-center gap-5">
                {t.avatar ? (
                  <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-2xl object-cover shadow-lg" referrerPolicy="no-referrer" />
                ) : (
                  <div className="w-14 h-14 rounded-2xl bg-gray-200 flex items-center justify-center font-black text-gray-400 text-xl">
                    {t.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className="text-gray-900 font-black text-lg leading-tight">{t.name}</h4>
                  <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
