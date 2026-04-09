import React from 'react';
import { motion } from 'motion/react';

interface Step {
  title: string;
  description: string;
  icon?: string;
  duration?: string;
  outcome?: string;
  media?: { type: 'image' | 'video', url: string };
  tags?: string[];
}

interface StepByStepProps {
  title: string;
  subtitle?: string;
  steps: Step[];
  primary_color?: string;
  layout?: 'vertical' | 'horizontal' | 'grid';
  cta?: { text: string, onClick: () => void };
}

export const StepByStep: React.FC<StepByStepProps> = ({ 
  title, 
  subtitle, 
  steps, 
  primary_color = '#f59e0b',
  layout = 'vertical',
  cta
}) => {
  const isHorizontal = layout === 'horizontal';
  const isGrid = layout === 'grid';

  return (
    <div className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-7xl font-black text-gray-900 mb-8 tracking-tight">{title}</h2>
          {subtitle && <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium">{subtitle}</p>}
        </div>

        {layout === 'vertical' ? (
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-100 md:-translate-x-1/2"></div>

            <div className="space-y-32">
              {steps?.map((step, i) => {
                const isEven = i % 2 === 0;
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-24 ${isEven ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Center Node */}
                    <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-gray-50 flex items-center justify-center z-10 shadow-2xl">
                      <span className="font-black text-xl text-gray-900">{i + 1}</span>
                    </div>

                    {/* Media/Visual Side */}
                    <div className="w-full md:w-1/2">
                      {step.media ? (
                        <div className="rounded-[48px] overflow-hidden shadow-2xl border-8 border-gray-50 bg-gray-100 aspect-video">
                          {step.media.type === 'video' ? (
                            <video src={step.media.url} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                          ) : (
                            <img src={step.media.url} alt={step.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          )}
                        </div>
                      ) : (
                        <div className={`p-10 rounded-[48px] bg-gray-50 border border-gray-100 flex flex-col items-center justify-center text-center min-h-[300px]`}>
                          <div className="w-24 h-24 rounded-3xl mb-8 flex items-center justify-center text-5xl shadow-xl" style={{ backgroundColor: `${primary_color}15`, color: primary_color }}>
                            {step.icon || '✦'}
                          </div>
                          <h4 className="text-xl font-black text-gray-900 mb-2">{step.title}</h4>
                          <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">{step.duration}</p>
                        </div>
                      )}
                    </div>

                    {/* Content Side */}
                    <div className={`w-full md:w-1/2 ${isEven ? 'text-left md:text-right' : 'text-left'}`}>
                      <div className="space-y-6">
                        {step.tags && (
                          <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''}`}>
                            {step.tags.map((tag, idx) => (
                              <span key={idx} className="px-3 py-1 rounded-full bg-gray-100 text-[10px] font-black uppercase tracking-widest text-gray-500">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        
                        <div className="flex flex-col gap-2">
                          <h3 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">{step.title}</h3>
                          {step.duration && (
                            <span className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: primary_color }}>
                              {step.duration}
                            </span>
                          )}
                        </div>
                        
                        <p className="text-gray-500 text-lg font-medium leading-relaxed">{step.description}</p>
                        
                        {step.outcome && (
                          <div className={`inline-flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100 text-sm font-bold text-gray-700 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: primary_color }} />
                            Kết quả: {step.outcome}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className={`grid ${isHorizontal ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-8`}>
            {steps?.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-[48px] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg transition-transform group-hover:scale-110" style={{ backgroundColor: `${primary_color}15`, color: primary_color }}>
                    {step.icon || '✦'}
                  </div>
                  <span className="text-4xl font-black text-gray-200">0{i + 1}</span>
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed mb-8 flex-grow">{step.description}</p>
                
                {step.outcome && (
                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Kết quả dự kiến</p>
                    <p className="text-sm font-bold text-gray-700">{step.outcome}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {cta && (
          <div className="mt-24 text-center">
            <button 
              onClick={cta.onClick}
              className="px-12 py-5 rounded-2xl font-black text-white uppercase tracking-[0.2em] transition-all hover:scale-105 shadow-2xl active:scale-95" 
              style={{ backgroundColor: primary_color, boxShadow: `0 20px 40px -12px ${primary_color}60` }}
            >
              {cta.text}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
