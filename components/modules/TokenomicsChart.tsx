import React from 'react';

interface TokenAllocation {
  label: string;
  percentage: number;
  color: string;
  description: string;
}

export const TokenomicsChart = ({ title, subtitle, allocations, total_supply, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500">{subtitle}</p>}
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 relative flex justify-center">
            {/* Simple CSS-based Donut Chart */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-[30px] border-gray-100 flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-1">Tổng cung</div>
                <div className="text-2xl sm:text-3xl font-black text-gray-900">{total_supply}</div>
              </div>
              {/* This is a simplified visual representation */}
              <div className={`absolute inset-0 rounded-full border-[30px] border-${primary_color}-600 border-t-transparent border-l-transparent rotate-45 opacity-20`}></div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="space-y-6">
              {allocations?.map((item: TokenAllocation, index: number) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-end mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                        <h4 className="font-bold text-gray-900">{item.label}</h4>
                      </div>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                    <div className="text-xl font-black text-gray-900">{item.percentage}%</div>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
