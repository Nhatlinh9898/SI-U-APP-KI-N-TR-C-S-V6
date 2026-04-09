import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'motion/react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar?: string;
  rating?: number;
  companyLogo?: string;
  date?: string;
}

interface TestimonialGridProps {
  title: string;
  subtitle?: string;
  testimonials: Testimonial[];
  primary_color?: string;
}

export const TestimonialGrid: React.FC<TestimonialGridProps> = ({ title, subtitle, testimonials, primary_color = '#2563eb' }) => {
  return (
    <div className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-8xl font-black text-gray-900 mb-8 tracking-tighter leading-none">{title || 'Khách hàng nói gì về chúng tôi'}</h2>
          {subtitle && <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials?.map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group p-12 rounded-[64px] bg-gray-50/50 border border-gray-100 relative hover:bg-white hover:shadow-[0_64px_128px_-12px_rgba(0,0,0,0.1)] transition-all duration-700 flex flex-col"
            >
              <div className="flex justify-between items-start mb-10">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <svg 
                      key={starIndex} 
                      className={`w-5 h-5 ${starIndex < (t.rating || 5) ? 'text-amber-400' : 'text-gray-200'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <Quote size={48} className="opacity-10 group-hover:opacity-20 transition-opacity" style={{ color: primary_color }} />
              </div>

              <p className="text-gray-600 mb-12 relative z-10 text-xl leading-relaxed font-medium flex-grow italic">"{t.content}"</p>
              
              <div className="flex items-center justify-between pt-10 border-t border-gray-100 mt-auto">
                <div className="flex items-center gap-5">
                  {t.avatar ? (
                    <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-2xl object-cover shadow-xl group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  ) : (
                    <div className="w-16 h-16 rounded-2xl bg-gray-200 flex items-center justify-center font-black text-gray-400 text-2xl">
                      {t.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="text-gray-900 font-black text-lg leading-tight tracking-tight">{t.name}</h4>
                    <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mt-1">{t.role}</p>
                  </div>
                </div>
                {t.companyLogo && (
                  <img src={t.companyLogo} alt="" className="h-8 opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" referrerPolicy="no-referrer" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
