import React from 'react';
import { motion } from 'motion/react';
import { toast } from 'sonner';

interface HeroProps {
  title: string;
  subtitle: string;
  cta_text: string;
  secondary_cta_text?: string;
  badge?: string;
  image?: string;
  videoUrl?: string;
  primary_color?: string;
  highlights?: string[];
  socialProof?: {
    text: string;
    avatars: string[];
  };
  layout?: 'center' | 'split';
}

export const HeroSection: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  cta_text, 
  secondary_cta_text, 
  badge, 
  image, 
  videoUrl,
  primary_color = '#f59e0b',
  highlights = [],
  socialProof,
  layout = 'split'
}) => {
  const handleCTA = () => {
    toast.success('Bắt đầu trải nghiệm ngay bây giờ!');
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
  };

  const isCenter = layout === 'center';

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-${primary_color}-600/5 blur-[120px] rounded-full pointer-events-none`}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`flex flex-col ${isCenter ? 'items-center text-center' : 'lg:flex-row items-center gap-16'}`}>
          <div className={`${isCenter ? 'max-w-4xl' : 'lg:w-3/5 text-center lg:text-left'}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {badge && (
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-${primary_color}-50 border border-${primary_color}-100 text-${primary_color}-600 text-xs font-black uppercase tracking-widest mb-8`}>
                  <span className="relative flex h-2 w-2">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-${primary_color}-400 opacity-75`}></span>
                    <span className={`relative inline-flex rounded-full h-2 w-2 bg-${primary_color}-600`}></span>
                  </span>
                  {badge}
                </div>
              )}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-8 tracking-tighter leading-[1.1]">
                {title}
              </h1>
              <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                {subtitle}
              </p>
              
              <div className={`flex flex-col sm:flex-row items-center ${isCenter ? 'justify-center' : 'justify-center lg:justify-start'} gap-4 mb-12`}>
                <button 
                  onClick={handleCTA}
                  className={`w-full sm:w-auto px-10 py-5 rounded-2xl font-black text-white uppercase tracking-widest transition-all hover:scale-105 shadow-2xl shadow-${primary_color}-600/30 bg-${primary_color}-600`}
                >
                  {cta_text || 'Bắt đầu ngay'}
                </button>
                {secondary_cta_text && (
                  <button className="w-full sm:w-auto px-10 py-5 rounded-2xl font-black text-gray-600 uppercase tracking-widest transition-all hover:bg-gray-50 border-2 border-gray-100">
                    {secondary_cta_text}
                  </button>
                )}
              </div>

              {highlights.length > 0 && (
                <div className={`flex flex-wrap items-center ${isCenter ? 'justify-center' : 'justify-center lg:justify-start'} gap-6 mb-12`}>
                  {highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-bold text-gray-400">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      {item}
                    </div>
                  ))}
                </div>
              )}

              {socialProof && (
                <div className={`flex flex-col sm:flex-row items-center ${isCenter ? 'justify-center' : 'justify-center lg:justify-start'} gap-4`}>
                  <div className="flex -space-x-3">
                    {socialProof.avatars.map((url, i) => (
                      <img key={i} src={url} alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" referrerPolicy="no-referrer" />
                    ))}
                  </div>
                  <p className="text-sm font-bold text-gray-500">
                    {socialProof.text}
                  </p>
                </div>
              )}
            </motion.div>
          </div>

          {(image || videoUrl) && !isCenter && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-2/5 relative"
            >
              <div className={`absolute -inset-4 bg-${primary_color}-600/10 blur-[100px] rounded-full`}></div>
              <div className="relative rounded-[48px] overflow-hidden shadow-[0_48px_96px_-12px_rgba(0,0,0,0.2)] border-8 border-white bg-gray-100">
                {videoUrl ? (
                  <video src={videoUrl} autoPlay loop muted playsInline className="w-full h-auto object-cover" />
                ) : (
                  <img src={image} alt={title} className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
                )}
              </div>
            </motion.div>
          )}
        </div>

        {isCenter && (image || videoUrl) && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 max-w-5xl mx-auto relative"
          >
            <div className={`absolute -inset-10 bg-${primary_color}-600/10 blur-[120px] rounded-full`}></div>
            <div className="relative rounded-[56px] overflow-hidden shadow-[0_64px_128px_-24px_rgba(0,0,0,0.3)] border-8 border-white bg-gray-100">
              {videoUrl ? (
                <video src={videoUrl} autoPlay loop muted playsInline className="w-full h-auto object-cover" />
              ) : (
                <img src={image} alt={title} className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
              )}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
