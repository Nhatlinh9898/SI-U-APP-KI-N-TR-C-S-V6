import React from 'react';

interface Plan {
  name: string;
  price: string;
  features: Record<string, boolean | string>;
}

export const FeatureComparisonTable = ({ title, subtitle, plans, featureList, primary_color = 'blue' }: any) => {
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
                <th className="py-6 px-4 bg-gray-50 rounded-tl-3xl border-b border-gray-100">
                  <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Tính năng</span>
                </th>
                {plans?.map((plan: Plan, i: number) => (
                  <th key={i} className={`py-6 px-4 text-center border-b border-gray-100 ${i === plans.length - 1 ? 'rounded-tr-3xl' : ''}`}>
                    <div className="font-black text-gray-900">{plan.name}</div>
                    <div className={`text-sm font-bold text-${primary_color}-600`}>{plan.price}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureList?.map((feature: string, fIndex: number) => (
                <tr key={fIndex} className="group hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 border-b border-gray-50 font-medium text-gray-700">{feature}</td>
                  {plans?.map((plan: Plan, pIndex: number) => (
                    <td key={pIndex} className="py-4 px-4 border-b border-gray-50 text-center">
                      {typeof plan.features[feature] === 'boolean' ? (
                        plan.features[feature] ? (
                          <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full bg-${primary_color}-100 text-${primary_color}-600`}>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          </span>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )
                      ) : (
                        <span className="text-sm font-bold text-gray-900">{plan.features[feature]}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
