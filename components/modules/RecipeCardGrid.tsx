import React from 'react';

interface Recipe {
  title: string;
  time: string;
  difficulty: string;
  image: string;
  calories: string;
}

export const RecipeCardGrid = ({ title, subtitle, recipes, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes?.map((recipe: Recipe, index: number) => (
            <div key={index} className="group bg-white rounded-[32px] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-900 shadow-sm">
                  {recipe.difficulty}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs font-bold text-gray-400 mb-4">
                  <span className="flex items-center gap-1">🕒 {recipe.time}</span>
                  <span className="flex items-center gap-1">🔥 {recipe.calories}</span>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-6 group-hover:text-orange-600 transition-colors">{recipe.title}</h3>
                <button className={`w-full py-3 rounded-xl border-2 border-gray-900 font-black hover:bg-gray-900 hover:text-white transition-all`}>
                  Xem công thức
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
