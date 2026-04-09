import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
}

interface TestimonialGridProps {
  title: string;
  testimonials: Testimonial[];
  primary_color?: string;
}

export const TestimonialGrid: React.FC<TestimonialGridProps> = ({ title, testimonials, primary_color = '#f59e0b' }) => {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-black text-white mb-12 text-center uppercase tracking-widest">{title || 'KHÁCH HÀNG NÓI GÌ'}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {testimonials?.map((t, i) => (
          <div key={i} className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 relative">
            <Quote size={40} className="absolute top-6 right-6 opacity-10" style={{ color: primary_color }} />
            <p className="text-slate-300 mb-6 relative z-10 italic">"{t.content}"</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-white" style={{ border: `2px solid ${primary_color}` }}>
                {t.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">{t.name}</h4>
                <p className="text-slate-500 text-xs">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
