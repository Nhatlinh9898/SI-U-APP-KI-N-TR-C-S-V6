import React from 'react';
import { motion } from 'motion/react';

interface FeatureRow {
  name: string;
  description?: string;
  category?: string;
  us: boolean | string;
  them: boolean | string;
  isHighlighted?: boolean;
}

export const ComparisonTable = ({ title, subtitle, features, ourName = "Chúng tôi", competitorName = "Đối thủ", primary_color = 'blue' }: any) => {
  const categories = Array.from(new Set(features?.map((f: FeatureRow) => f.category).filter(Boolean)));

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-8xl font-black text-gray-900 mb-8 tracking-tighter leading-none">{title || 'Tại sao chọn chúng tôi?'}</h2>
          {subtitle && <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium">{subtitle}</p>}
        </div>
        
        <div className="bg-white rounded-[64px] shadow-[0_64px_128px_-12px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100">
          <div className="grid grid-cols-12 bg-gray-50/50 border-b border-gray-100">
            <div className="col-span-6 p-12 text-left font-black text-gray-400 uppercase tracking-[0.3em] text-[10px]">Tính năng & Dịch vụ</div>
            <div className="col-span-3 p-12 text-center font-black text-blue-600 bg-blue-50/50 border-x border-gray-100 uppercase tracking-[0.3em] text-[10px]">{ourName}</div>
            <div className="col-span-3 p-12 text-center font-black text-gray-400 uppercase tracking-[0.3em] text-[10px]">{competitorName}</div>
          </div>
          
          <div className="divide-y divide-gray-50">
            {features?.map((feature: FeatureRow, index: number) => (
              <React.Fragment key={index}>
                {feature.category && (index === 0 || features[index-1].category !== feature.category) && (
                  <div className="col-span-12 bg-gray-50/30 px-12 py-6 text-[10px] font-black text-gray-300 uppercase tracking-[0.4em] border-b border-gray-50">
                    {feature.category}
                  </div>
                )}
                <div className={`grid grid-cols-12 hover:bg-gray-50/50 transition-all duration-500 group ${feature.isHighlighted ? 'bg-blue-50/10' : ''}`}>
                  <div className="col-span-6 p-12">
                    <div className="flex items-center gap-4 mb-2">
                      <h4 className="text-xl font-black text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors">{feature.name}</h4>
                      {feature.isHighlighted && (
                        <span className="px-3 py-1 bg-blue-600 text-white text-[8px] font-black uppercase tracking-widest rounded-full">Nổi bật</span>
                      )}
                    </div>
                    {feature.description && <p className="text-base text-gray-400 font-medium leading-relaxed max-w-md">{feature.description}</p>}
                  </div>
                  <div className="col-span-3 p-12 text-center flex items-center justify-center bg-blue-50/20 border-x border-gray-50">
                    {typeof feature.us === 'boolean' ? (
                      feature.us ? 
                        <motion.div 
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-xl shadow-blue-600/20"
                        >
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
                        </motion.div> : 
                        <svg className="w-8 h-8 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                    ) : (
                      <span className="font-black text-blue-600 text-lg tracking-tight">{feature.us}</span>
                    )}
                  </div>
                  <div className="col-span-3 p-12 text-center flex items-center justify-center">
                    {typeof feature.them === 'boolean' ? (
                      feature.them ? 
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> : 
                        <svg className="w-8 h-8 text-red-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                    ) : (
                      <span className="text-gray-400 font-bold text-lg tracking-tight">{feature.them}</span>
                    )}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
