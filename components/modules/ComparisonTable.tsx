import React from 'react';

interface FeatureRow {
  name: string;
  us: boolean | string;
  them: boolean | string;
}

export const ComparisonTable = ({ title, subtitle, features, ourName = "Chúng tôi", competitorName = "Đối thủ", primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500">{subtitle}</p>}
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="grid grid-cols-3 bg-gray-100 border-b border-gray-200">
            <div className="p-6 text-left font-semibold text-gray-500 uppercase tracking-wider">Tính năng</div>
            <div className={`p-6 text-center font-bold text-xl text-white bg-${primary_color}-600`}>{ourName}</div>
            <div className="p-6 text-center font-bold text-xl text-gray-700">{competitorName}</div>
          </div>
          
          <div className="divide-y divide-gray-100">
            {features?.map((feature: FeatureRow, index: number) => (
              <div key={index} className="grid grid-cols-3 hover:bg-gray-50 transition-colors">
                <div className="p-6 text-gray-900 font-medium flex items-center">{feature.name}</div>
                <div className={`p-6 text-center flex items-center justify-center bg-${primary_color}-50/30`}>
                  {typeof feature.us === 'boolean' ? (
                    feature.us ? 
                      <svg className={`w-6 h-6 text-${primary_color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> : 
                      <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  ) : (
                    <span className={`font-semibold text-${primary_color}-700`}>{feature.us}</span>
                  )}
                </div>
                <div className="p-6 text-center flex items-center justify-center">
                  {typeof feature.them === 'boolean' ? (
                    feature.them ? 
                      <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> : 
                      <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  ) : (
                    <span className="text-gray-500">{feature.them}</span>
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
