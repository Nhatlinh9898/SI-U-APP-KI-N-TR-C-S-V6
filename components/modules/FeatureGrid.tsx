import React from 'react';

interface Feature {
  title: string;
  description: string;
  benefit?: string;
  icon?: string;
  tag?: string;
  link?: string;
  category?: string;
}

interface FeatureGridProps {
  title: string;
  subtitle?: string;
  features: Feature[];
  primary_color?: string;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ title, subtitle, features, primary_color = '#f59e0b' }) => {
  const categories = ['All', ...new Set((features || []).filter(f => f.category).map(f => f.category as string))];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredFeatures = features?.filter(f => activeCategory === 'All' || f.category === activeCategory);

  return (
    <div className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-black text-gray-900 mb-6 tracking-tighter">{title || 'Tính năng nổi bật'}</h2>
          {subtitle && <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium">{subtitle}</p>}
          
          {categories.length > 1 && (
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeCategory === cat 
                      ? 'bg-gray-900 text-white shadow-2xl scale-105' 
                      : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFeatures?.map((f, i) => (
            <div key={i} className="group p-12 rounded-[56px] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-[0_64px_128px_-12px_rgba(0,0,0,0.1)] transition-all duration-700 flex flex-col">
              <div 
                className="w-20 h-20 rounded-3xl mb-10 flex items-center justify-center text-4xl shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 bg-white text-blue-600"
              >
                {f.icon || '✦'}
              </div>
              
              <div className="flex-1">
                {f.tag && (
                  <span className="inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 bg-blue-50 text-blue-600">
                    {f.tag}
                  </span>
                )}
                
                <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight leading-tight group-hover:text-blue-600 transition-colors">{f.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium mb-6">{f.description}</p>
                
                {f.benefit && (
                  <div className="p-6 bg-blue-50/50 rounded-3xl border border-blue-100/50 mb-8">
                    <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2">Lợi ích chính:</div>
                    <div className="text-sm font-bold text-gray-700 leading-relaxed">{f.benefit}</div>
                  </div>
                )}
              </div>
              
              {f.link && (
                <button className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 flex items-center gap-3 group/link mt-auto">
                  Tìm hiểu thêm
                  <span className="transition-transform group-hover/link:translate-x-2">→</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
