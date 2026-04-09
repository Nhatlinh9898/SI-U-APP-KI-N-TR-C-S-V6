import React from 'react';

interface Metric {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon?: string;
  description?: string;
  comparisonLabel?: string;
  sparkline?: number[];
}

export const DataMetricCard = ({ title, subtitle, metrics, primary_color = 'blue' }: any) => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-black text-gray-900 mb-6 tracking-tighter">{title || 'Chỉ số hiệu quả'}</h2>
          {subtitle && <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics?.map((metric: Metric, index: number) => (
            <div key={index} className="bg-gray-50 rounded-[48px] p-10 border border-gray-100 hover:bg-white hover:shadow-[0_64px_128px_-12px_rgba(0,0,0,0.1)] transition-all duration-700 group">
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-xl shadow-gray-900/5 text-blue-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-gray-50">
                  {metric.icon ? (
                    <span className="text-2xl">{metric.icon}</span>
                  ) : (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                  )}
                </div>
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black ${metric.isPositive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                  {metric.isPositive ? '▲' : '▼'} {metric.change}
                </div>
              </div>
              
              <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">{metric.label}</div>
              <div className="text-4xl font-black text-gray-900 tracking-tighter mb-4">{metric.value}</div>
              
              {metric.description && (
                <p className="text-sm font-medium text-gray-500 mb-6 leading-relaxed">{metric.description}</p>
              )}

              {metric.sparkline && (
                <div className="flex items-end gap-1 h-12 mb-6">
                  {metric.sparkline.map((val, i) => (
                    <div 
                      key={i} 
                      className={`flex-1 rounded-t-sm transition-all duration-1000 delay-${i * 100}`}
                      style={{ 
                        height: `${val}%`, 
                        backgroundColor: metric.isPositive ? '#22c55e' : '#ef4444',
                        opacity: 0.3 + (i / metric.sparkline!.length) * 0.7
                      }}
                    ></div>
                  ))}
                </div>
              )}

              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{metric.comparisonLabel || 'So với tháng trước'}</span>
                <div className={`w-2 h-2 rounded-full ${metric.isPositive ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
