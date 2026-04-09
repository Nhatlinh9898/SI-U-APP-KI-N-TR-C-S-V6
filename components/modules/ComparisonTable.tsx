import React from 'react';

interface FeatureRow {
  name: string;
  description?: string;
  us: boolean | string;
  them: boolean | string;
}

export const ComparisonTable = ({ title, subtitle, features, ourName = "Chúng tôi", competitorName = "Đối thủ", primary_color = 'blue' }: any) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">{title || 'Tại sao chọn chúng tôi?'}</h2>
          {subtitle && <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">{subtitle}</p>}
        </div>
        
        <div className="bg-white rounded-[48px] shadow-[0_64px_128px_-12px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100">
          <div className="grid grid-cols-12 bg-gray-50/50 border-b border-gray-100">
            <div className="col-span-6 p-10 text-left font-black text-gray-400 uppercase tracking-[0.2em] text-xs">Tính năng</div>
            <div className="col-span-3 p-10 text-center font-black text-blue-600 bg-blue-50/50 border-x border-gray-100 uppercase tracking-[0.2em] text-xs">{ourName}</div>
            <div className="col-span-3 p-10 text-center font-black text-gray-400 uppercase tracking-[0.2em] text-xs">{competitorName}</div>
          </div>
          
          <div className="divide-y divide-gray-50">
            {features?.map((feature: FeatureRow, index: number) => (
              <div key={index} className="grid grid-cols-12 hover:bg-gray-50/50 transition-all duration-500 group">
                <div className="col-span-6 p-10">
                  <h4 className="text-lg font-black text-gray-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">{feature.name}</h4>
                  {feature.description && <p className="text-sm text-gray-400 font-medium leading-relaxed">{feature.description}</p>}
                </div>
                <div className="col-span-3 p-10 text-center flex items-center justify-center bg-blue-50/20 border-x border-gray-50">
                  {typeof feature.us === 'boolean' ? (
                    feature.us ? 
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      </div> : 
                      <svg className="w-6 h-6 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                  ) : (
                    <span className="font-black text-blue-600 text-sm tracking-tight">{feature.us}</span>
                  )}
                </div>
                <div className="col-span-3 p-10 text-center flex items-center justify-center">
                  {typeof feature.them === 'boolean' ? (
                    feature.them ? 
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> : 
                      <svg className="w-6 h-6 text-red-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                  ) : (
                    <span className="text-gray-400 font-bold text-sm tracking-tight">{feature.them}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
