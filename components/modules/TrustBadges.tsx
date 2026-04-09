import React from 'react';

interface Badge {
  name: string;
  iconUrl: string;
  description?: string;
}

export const TrustBadges = ({ title, badges, primary_color = 'blue' }: any) => {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && <h3 className="text-center text-xl font-bold text-gray-900 mb-10">{title}</h3>}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {badges?.map((badge: Badge, index: number) => (
            <div key={index} className="flex flex-col items-center text-center max-w-[150px]">
              <div className={`w-20 h-20 rounded-full bg-${primary_color}-50 flex items-center justify-center mb-4 p-4`}>
                <img src={badge.iconUrl} alt={badge.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">{badge.name}</h4>
              {badge.description && <p className="text-xs text-gray-500 mt-1">{badge.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
