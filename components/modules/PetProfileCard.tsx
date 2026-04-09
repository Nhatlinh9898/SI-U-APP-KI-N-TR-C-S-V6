import React from 'react';

interface Pet {
  name: string;
  breed: string;
  age: string;
  image: string;
  gender: 'Đực' | 'Cái';
}

export const PetProfileCard = ({ title, subtitle, pets, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pets?.map((pet: Pet, index: number) => (
            <div key={index} className="group bg-white rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="aspect-square relative overflow-hidden">
                <img src={pet.image} alt={pet.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className={`absolute bottom-4 left-4 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg ${
                  pet.gender === 'Đực' ? 'bg-blue-500 text-white' : 'bg-pink-500 text-white'
                }`}>
                  {pet.gender}
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-black text-gray-900 mb-1">{pet.name}</h3>
                <div className="text-sm font-bold text-gray-400 mb-4">{pet.breed} • {pet.age}</div>
                <button className={`w-full py-3 rounded-2xl bg-${primary_color}-50 text-${primary_color}-600 font-black hover:bg-${primary_color}-600 hover:text-white transition-all`}>
                  Xem hồ sơ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
