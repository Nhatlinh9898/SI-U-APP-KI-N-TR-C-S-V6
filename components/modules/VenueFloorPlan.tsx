import React, { useState } from 'react';

interface Zone {
  id: string;
  name: string;
  capacity: string;
  features: string[];
  x: number;
  y: number;
  width: number;
  height: number;
}

export const VenueFloorPlan = ({ title, subtitle, zones, primary_color = 'blue' }: any) => {
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">{title || 'Sơ đồ không gian'}</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">{subtitle || 'Khám phá các khu vực chức năng và tìm vị trí phù hợp nhất cho bạn.'}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 bg-gray-50 rounded-[48px] p-8 border border-gray-100 relative overflow-hidden aspect-video shadow-inner">
            <svg viewBox="0 0 800 450" className="w-full h-full drop-shadow-2xl">
              {/* Floor Background */}
              <rect x="50" y="50" width="700" height="350" rx="20" fill="white" stroke="#e5e7eb" strokeWidth="2" />
              
              {/* Zones */}
              {zones?.map((zone: Zone) => (
                <g 
                  key={zone.id} 
                  className="cursor-pointer transition-all duration-300"
                  onClick={() => setSelectedZone(zone)}
                >
                  <rect 
                    x={zone.x} 
                    y={zone.y} 
                    width={zone.width} 
                    height={zone.height} 
                    rx="12" 
                    className={`${
                      selectedZone?.id === zone.id 
                        ? `fill-${primary_color}-600 stroke-${primary_color}-700` 
                        : 'fill-gray-100 stroke-gray-200 hover:fill-gray-200'
                    } transition-colors stroke-2`}
                  />
                  <text 
                    x={zone.x + zone.width / 2} 
                    y={zone.y + zone.height / 2} 
                    textAnchor="middle" 
                    dominantBaseline="middle"
                    className={`text-[10px] font-black uppercase tracking-tighter ${
                      selectedZone?.id === zone.id ? 'fill-white' : 'fill-gray-400'
                    }`}
                  >
                    {zone.name}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          <div className="space-y-8">
            {selectedZone ? (
              <div className="bg-white rounded-[40px] p-10 border border-gray-100 shadow-2xl animate-in fade-in slide-in-from-right-4 duration-500">
                <div className={`w-12 h-12 rounded-2xl bg-${primary_color}-50 flex items-center justify-center text-2xl mb-6`}>📍</div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">{selectedZone.name}</h3>
                <p className="text-sm font-black text-gray-400 uppercase tracking-widest mb-6">Sức chứa: {selectedZone.capacity}</p>
                
                <div className="space-y-4 mb-8">
                  <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">Tiện ích khu vực:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedZone.features?.map((f, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-50 rounded-lg text-xs font-bold text-gray-600 border border-gray-100">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <button className={`w-full py-4 bg-${primary_color}-600 text-white rounded-2xl font-black hover:scale-105 transition-all shadow-lg shadow-${primary_color}-600/30`}>
                  Đặt chỗ khu vực này
                </button>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-10 bg-gray-50 rounded-[40px] border border-dashed border-gray-200">
                <div className="text-4xl mb-4 opacity-20">👆</div>
                <p className="font-bold text-gray-400 uppercase tracking-widest text-sm">Chọn một khu vực trên sơ đồ để xem chi tiết</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
