import React from 'react';

interface Place {
  name: string;
  distance: string;
  type: string;
  rating: string;
}

export const NeighborhoodGuide = ({ title, subtitle, places, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {places?.map((place: Place, index: number) => (
            <div key={index} className="group p-8 rounded-[40px] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 rounded-2xl bg-${primary_color}-100 text-${primary_color}-600 flex items-center justify-center text-2xl`}>
                  {place.type === 'Trường học' ? '🎓' : place.type === 'Bệnh viện' ? '🏥' : place.type === 'Công viên' ? '🌳' : '🛒'}
                </div>
                <div className="bg-white px-3 py-1 rounded-full text-[10px] font-black text-gray-400 uppercase tracking-widest shadow-sm">
                  {place.distance}
                </div>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2">{place.name}</h3>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-400">★</span>
                <span className="text-sm font-bold text-gray-500">{place.rating} / 5.0</span>
              </div>
              <p className="text-sm text-gray-400 font-medium uppercase tracking-widest">{place.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
