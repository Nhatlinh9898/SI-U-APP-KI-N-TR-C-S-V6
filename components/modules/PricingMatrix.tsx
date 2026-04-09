import React from 'react';

interface Feature {
  name: string;
  availability: boolean[]; // [Starter, Pro, Enterprise]
}

interface Tier {
  name: string;
  price: string;
}

export const PricingMatrix = ({ title, subtitle, tiers, features, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">{subtitle}</p>}
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="py-6 px-4 bg-gray-50 rounded-tl-2xl border-b border-gray-200">
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Tính năng</span>
                </th>
                {tiers?.map((tier: Tier, index: number) => (
                  <th key={index} className={`py-8 px-4 bg-gray-50 border-b border-gray-200 text-center ${index === tiers.length - 1 ? 'rounded-tr-2xl' : ''}`}>
                    <div className="text-lg font-bold text-gray-900 mb-1">{tier.name}</div>
                    <div className={`text-2xl font-black text-${primary_color}-600`}>{tier.price}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {features?.map((feature: Feature, index: number) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="py-5 px-4 font-medium text-gray-700">{feature.name}</td>
                  {feature.availability?.map((available, aIndex) => (
                    <td key={aIndex} className="py-5 px-4 text-center">
                      {available ? (
                        <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-${primary_color}-100 text-${primary_color}-600`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-8 h-8 text-gray-300">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6"></path></svg>
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="py-8 px-4"></td>
                {tiers?.map((_: any, index: number) => (
                  <td key={index} className="py-8 px-4 text-center">
                    <button className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all ${index === 1 ? `bg-${primary_color}-600 text-white shadow-lg shadow-${primary_color}-600/30` : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                      Chọn gói
                    </button>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
};
