import React from 'react';

interface ImpactTier {
  amount: string;
  title: string;
  description: string;
  image: string;
}

export const DonationImpactCards = ({ title, subtitle, tiers, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers?.map((tier: ImpactTier, index: number) => (
            <div key={index} className="group bg-gray-50 rounded-[40px] overflow-hidden border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img src={tier.image} alt={tier.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className={`absolute top-6 left-6 bg-${primary_color}-600 text-white px-6 py-2 rounded-2xl font-black text-xl shadow-xl`}>
                  {tier.amount}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-gray-900 mb-4">{tier.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-8">{tier.description}</p>
                <button className={`w-full py-4 rounded-2xl bg-gray-900 text-white font-black hover:bg-${primary_color}-600 transition-all shadow-lg`}>
                  Quyên góp ngay
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
