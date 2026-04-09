import React from 'react';
import { motion } from 'motion/react';
import { toast } from 'sonner';

interface HeroProps {
  title: string;
  subtitle: string;
  cta_text: string;
  primary_color?: string;
}

export const HeroSection: React.FC<HeroProps> = ({ title, subtitle, cta_text, primary_color = '#f59e0b' }) => {
  const handleCTA = () => {
    toast.success('Bắt đầu trải nghiệm ngay bây giờ!');
    // Scroll down a bit to show the next section
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
  };

  return (
    <div className="relative py-32 px-4 text-center rounded-[3rem] mb-12 border border-slate-800/50 overflow-hidden bg-slate-950/50">
      {/* Background Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] blur-[120px] rounded-[100%] pointer-events-none opacity-30" 
        style={{ backgroundColor: primary_color }}
      />
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-8 tracking-tighter uppercase drop-shadow-2xl leading-tight">
            {title}
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-slate-400 mb-12 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <button 
            onClick={handleCTA}
            className="px-12 py-5 rounded-2xl font-black text-black uppercase tracking-widest transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,0,0,0.4)] relative overflow-hidden group" 
            style={{ backgroundColor: primary_color }}
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <span className="relative z-10">{cta_text || 'BẮT ĐẦU NGAY'}</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};
