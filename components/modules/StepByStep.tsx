import React from 'react';
import { motion } from 'motion/react';

interface Step {
  title: string;
  description: string;
  icon?: string;
  duration?: string;
  outcome?: string;
}

interface StepByStepProps {
  title: string;
  subtitle?: string;
  steps: Step[];
  primary_color?: string;
}

export const StepByStep: React.FC<StepByStepProps> = ({ title, subtitle, steps, primary_color = '#f59e0b' }) => {
  return (
    <div className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">{title}</h2>
          {subtitle && <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>}
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-100 md:-translate-x-1/2"></div>

          <div className="space-y-24">
            {steps?.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-12 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Center Node */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-16 h-16 rounded-full bg-white border border-gray-100 flex items-center justify-center z-10 shadow-xl">
                    <span className="font-black text-xl text-gray-900">{i + 1}</span>
                  </div>

                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pr-20 text-left md:text-right' : 'md:pl-20 text-left'}`}>
                    <div className="group p-10 rounded-[48px] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] transition-all duration-500">
                      <div className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center text-3xl shadow-lg transition-transform group-hover:scale-110 ${isEven ? 'md:ml-auto' : ''}`} style={{ backgroundColor: `${primary_color}15`, color: primary_color }}>
                        {step.icon || '✦'}
                      </div>
                      
                      <div className="flex flex-col gap-2 mb-6">
                        {step.duration && (
                          <span className={`text-[10px] font-black uppercase tracking-widest ${isEven ? 'md:ml-auto' : ''}`} style={{ color: primary_color }}>
                            Thời gian: {step.duration}
                          </span>
                        )}
                        <h3 className="text-2xl font-black text-gray-900">{step.title}</h3>
                      </div>
                      
                      <p className="text-gray-500 font-medium leading-relaxed mb-8">{step.description}</p>
                      
                      {step.outcome && (
                        <div className={`p-4 bg-white rounded-2xl border border-gray-100 text-sm font-bold text-gray-700 flex items-center gap-3 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: primary_color }} />
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
      </div>
    </div>
  );
};
