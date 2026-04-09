import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Zone {
  id: string;
  name: string;
  capacity: string;
  description?: string;
  price?: string;
  features: string[];
  x: number;
  y: number;
  width: number;
  height: number;
}

export const VenueFloorPlan = ({ title, subtitle, zones, primary_color = 'blue' }: any) => {
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">{title || 'Sơ đồ không gian'}</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium">{subtitle || 'Khám phá các khu vực chức năng và tìm vị trí phù hợp nhất cho bạn.'}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-2 bg-gray-100 rounded-[64px] p-10 md:p-16 border border-gray-200 relative overflow-hidden aspect-video shadow-inner group">
            <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <svg viewBox="0 0 800 450" className="w-full h-full drop-shadow-[0_32px_64px_rgba(0,0,0,0.1)] relative z-10">
              {/* Floor Background */}
              <rect x="50" y="50" width="700" height="350" rx="40" fill="white" stroke="#f3f4f6" strokeWidth="4" />
              
              {/* Zones */}
              {zones?.map((zone: Zone) => (
                <g 
                  key={zone.id} 
                  className="cursor-pointer transition-all duration-500"
                  onClick={() => setSelectedZone(zone)}
                >
                  <rect 
                    x={zone.x} 
                    y={zone.y} 
                    width={zone.width} 
                    height={zone.height} 
                    rx="20" 
                    className={`${
                      selectedZone?.id === zone.id 
                        ? 'fill-orange-600 stroke-orange-700 shadow-2xl' 
                        : 'fill-gray-50 stroke-gray-100 hover:fill-orange-50 hover:stroke-orange-200'
                    } transition-all duration-300 stroke-2`}
                  />
                  <text 
                    x={zone.x + zone.width / 2} 
                    y={zone.y + zone.height / 2} 
                    textAnchor="middle" 
                    dominantBaseline="middle"
                    className={`text-[12px] font-black uppercase tracking-widest pointer-events-none ${
                      selectedZone?.id === zone.id ? 'fill-white' : 'fill-gray-400'
                    }`}
                  >
                    {zone.name}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          <div className="space-y-8 h-full">
            <AnimatePresence mode="wait">
              {selectedZone ? (
                <motion.div 
                  key={selectedZone.id}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  className="bg-white rounded-[56px] p-12 border border-gray-100 shadow-[0_48px_96px_-12px_rgba(0,0,0,0.1)] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/5 blur-[60px] rounded-full"></div>
                  
                  <div className="w-16 h-16 rounded-3xl bg-orange-50 text-orange-600 flex items-center justify-center text-3xl mb-8 shadow-inner">📍</div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl font-black text-gray-900 tracking-tight">{selectedZone.name}</h3>
                    {selectedZone.price && (
                      <div className="text-right">
                        <span className="text-xs font-black text-gray-400 uppercase tracking-widest block">Giá từ</span>
                        <span className="text-xl font-black text-orange-600">{selectedZone.price}</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Sức chứa: {selectedZone.capacity}</p>
                  
                  {selectedZone.description && (
                    <p className="text-gray-500 font-medium leading-relaxed mb-8">{selectedZone.description}</p>
                  )}
                  
                  <div className="space-y-6 mb-10">
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Tiện ích đặc quyền:</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedZone.features?.map((f, i) => (
                        <span key={i} className="px-4 py-2 bg-gray-50 rounded-xl text-xs font-black text-gray-600 border border-gray-100 shadow-sm">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full py-6 bg-gray-900 text-white rounded-[32px] font-black text-lg hover:bg-orange-600 transition-all shadow-2xl hover:scale-[1.02] active:scale-95 uppercase tracking-widest">
                    Đặt lịch tham quan
                  </button>
                </motion.div>
              ) : (
                <div className="h-full min-h-[500px] flex flex-col items-center justify-center text-center p-12 bg-gray-50 rounded-[56px] border-2 border-dashed border-gray-200">
                  <div className="text-6xl mb-8 animate-bounce">👆</div>
                  <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-widest">Khám phá không gian</h3>
                  <p className="font-medium text-gray-400 leading-relaxed">Chọn một khu vực trên sơ đồ để xem thông số chi tiết và đặt chỗ.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
