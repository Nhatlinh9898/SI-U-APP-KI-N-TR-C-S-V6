import React from 'react';

interface Stock {
  symbol: string;
  price: string;
  change: string;
  isPositive: boolean;
}

export const StockTicker = ({ title, stocks, primary_color = 'blue' }: any) => {
  return (
    <div className="bg-gray-900 py-4 overflow-hidden border-y border-gray-800">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            {stocks?.map((stock: Stock, index: number) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-white font-black tracking-tighter">{stock.symbol}</span>
                <span className="text-gray-400 font-mono">{stock.price}</span>
                <span className={`text-xs font-bold ${stock.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                  {stock.isPositive ? '▲' : '▼'} {stock.change}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </div>
  );
};
