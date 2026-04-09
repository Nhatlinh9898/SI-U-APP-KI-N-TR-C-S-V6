import React from 'react';
import { motion } from 'framer-motion';

interface TokenAllocation {
  label: string;
  percentage: number;
  amount?: string;
  color: string;
  description: string;
  vesting?: string;
  icon?: string;
}

export const TokenomicsChart = ({ title, subtitle, allocations, total_supply, primary_color = 'blue' }: any) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">{title || 'Phân bổ Token'}</h2>
          {subtitle && <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">{subtitle}</p>}
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          <div className="lg:w-1/2 relative flex justify-center">
            {/* Enhanced Donut Chart Visual */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full border-[40px] border-gray-50 flex items-center justify-center shadow-[0_64px_128px_-12px_rgba(0,0,0,0.1)]">
              <div className="text-center">
                <div className="text-[10px] text-gray-400 font-black uppercase tracking-[0.3em] mb-2">Tổng cung</div>
                <div className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tighter">{total_supply}</div>
              </div>
              {/* Decorative rings */}
              <div className="absolute inset-[-20px] rounded-full border border-gray-100/50"></div>
              <div className="absolute inset-[-40px] rounded-full border border-gray-100/30"></div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="space-y-8">
              {allocations?.map((item: TokenAllocation, index: number) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-lg shadow-gray-900/5 border border-gray-50" style={{ backgroundColor: `${item.color}10`, color: item.color }}>
                        {item.icon || '💎'}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-black text-gray-900 tracking-tight">{item.label}</h4>
                          {item.vesting && (
                            <span className="text-[9px] font-black text-gray-400 bg-gray-100 px-2 py-0.5 rounded-md uppercase tracking-widest">
                              {item.vesting}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-400 font-medium leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-gray-900 tracking-tighter">{item.percentage}%</div>
                      {item.amount && <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.amount}</div>}
                    </div>
                  </div>
                  <div className="w-full h-2.5 bg-gray-50 rounded-full overflow-hidden border border-gray-100">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full rounded-full" 
                      style={{ backgroundColor: item.color, boxShadow: `0 0 20px ${item.color}40` }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
