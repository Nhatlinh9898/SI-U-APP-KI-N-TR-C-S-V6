import React from 'react';

interface Location {
  name: string;
  stats: string;
  description: string;
  lat: string;
  lng: string;
}

export const ImpactMap = ({ title, subtitle, locations, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2 relative aspect-video bg-gray-100 rounded-[40px] overflow-hidden border-8 border-gray-50 shadow-inner">
            {/* Mock Map Visualization */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] bg-center bg-no-repeat bg-contain"></div>
            
            {locations?.map((loc: Location, index: number) => (
              <div 
                key={index}
                className="absolute group cursor-pointer"
                style={{ top: loc.lat, left: loc.lng }}
              >
                <div className={`w-4 h-4 rounded-full bg-${primary_color}-600 animate-ping absolute inset-0`}></div>
                <div className={`w-4 h-4 rounded-full bg-${primary_color}-600 relative z-10 border-2 border-white`}></div>
                
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 bg-white rounded-2xl p-4 shadow-2xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-20">
                  <div className="font-bold text-gray-900 mb-1">{loc.name}</div>
                  <div className={`text-sm font-black text-${primary_color}-600 mb-2`}>{loc.stats}</div>
                  <p className="text-xs text-gray-500 leading-tight">{loc.description}</p>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            {locations?.map((loc: Location, index: number) => (
              <div key={index} className="flex gap-6 group">
                <div className={`w-12 h-12 rounded-2xl bg-${primary_color}-50 text-${primary_color}-600 flex items-center justify-center flex-shrink-0 font-black`}>
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{loc.name}</h3>
                  <div className={`text-sm font-black text-${primary_color}-600 mb-1`}>{loc.stats}</div>
                  <p className="text-sm text-gray-500">{loc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
