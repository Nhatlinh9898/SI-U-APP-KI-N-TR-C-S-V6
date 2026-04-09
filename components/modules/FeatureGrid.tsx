import React from 'react';

interface Feature {
  title: string;
  description: string;
  icon?: string;
}

interface FeatureGridProps {
  title: string;
  features: Feature[];
  primary_color?: string;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ title, features, primary_color = '#f59e0b' }) => {
  return (
    <div className="py-12">
      <h2 className="text-2xl font-black text-white mb-10 text-center uppercase tracking-widest">{title || 'TÍNH NĂNG NỔI BẬT'}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features?.map((f, i) => (
          <div key={i} className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-slate-700 transition-colors group">
            <div 
              className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center text-xl shadow-lg transition-transform group-hover:scale-110" 
              style={{ backgroundColor: `${primary_color}20`, color: primary_color }}
            >
              {f.icon || '✦'}
            </div>
            <h3 className="text-lg font-bold text-white mb-3">{f.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
