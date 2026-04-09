import React from 'react';

interface Metric {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon?: string;
}

export const DataMetricCard = ({ title, subtitle, metrics, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics?.map((metric: Metric, index: number) => (
            <div key={index} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500 group">
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 rounded-2xl bg-${primary_color}-100 text-${primary_color}-600 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  {metric.icon ? (
                    <span className="text-xl">{metric.icon}</span>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                  )}
                </div>
                <div className={`flex items-center gap-1 text-sm font-bold ${metric.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                  {metric.isPositive ? '↑' : '↓'} {metric.change}
                </div>
              </div>
              <div className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-1">{metric.label}</div>
              <div className="text-3xl font-black text-gray-900">{metric.value}</div>
              
              <div className="mt-6 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-${primary_color}-600 rounded-full transition-all duration-1000 delay-300`} 
                  style={{ width: metric.isPositive ? '70%' : '30%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
