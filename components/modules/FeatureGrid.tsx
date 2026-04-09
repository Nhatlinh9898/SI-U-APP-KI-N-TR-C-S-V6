import React from 'react';

interface Feature {
  title: string;
  description: string;
  icon?: string;
  tag?: string;
}

interface FeatureGridProps {
  title: string;
  subtitle?: string;
  features: Feature[];
  primary_color?: string;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ title, subtitle, features, primary_color = '#f59e0b' }) => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">{title || 'Tính năng nổi bật'}</h2>
          {subtitle && <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features?.map((f, i) => (
            <div key={i} className="group p-10 rounded-[48px] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] transition-all duration-500">
              <div 
                className="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center text-2xl shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3" 
                style={{ backgroundColor: `${primary_color}15`, color: primary_color }}
              >
                {f.icon || '✦'}
              </div>
              
              {f.tag && (
                <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 bg-${primary_color}-100 text-${primary_color}-600`}>
                  {f.tag}
                </span>
              )}
              
              <h3 className="text-2xl font-black text-gray-900 mb-4">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
