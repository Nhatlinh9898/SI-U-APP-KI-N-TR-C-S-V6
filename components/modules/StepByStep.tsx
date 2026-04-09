import React from 'react';
import { motion } from 'motion/react';

interface Step {
  title: string;
  description: string;
  icon?: string;
}

interface StepByStepProps {
  title: string;
  subtitle?: string;
  steps: Step[];
  primary_color?: string;
}

export const StepByStep: React.FC<StepByStepProps> = ({ title, subtitle, steps, primary_color = '#f59e0b' }) => {
  return (
    <div className="py-20 max-w-5xl mx-auto px-4">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-widest">{title}</h2>
        {subtitle && <p className="text-slate-400 text-lg">{subtitle}</p>}
      </div>

      <div className="relative">
        {/* Connecting Line */}
        <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-1 bg-slate-800/50 md:-translate-x-1/2 rounded-full"></div>

        <div className="space-y-12">
          {steps?.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Center Node */}
                <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-14 h-14 rounded-full bg-slate-950 border-4 border-slate-900 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]" style={{ borderColor: primary_color }}>
                  <span className="font-black text-lg" style={{ color: primary_color }}>{i + 1}</span>
                </div>

                {/* Content Box */}
                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                  <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm hover:border-slate-700 transition-colors">
                    <div className={`text-3xl mb-4 ${isEven ? 'md:ml-auto' : ''}`} style={{ color: primary_color }}>
                      {step.icon || '✦'}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
