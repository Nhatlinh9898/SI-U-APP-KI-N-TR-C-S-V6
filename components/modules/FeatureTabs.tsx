import React, { useState } from 'react';

interface Tab {
  title: string;
  description: string;
  image: string;
  icon: string;
}

export const FeatureTabs = ({ title, subtitle, tabs, primary_color = 'blue' }: any) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">{subtitle}</p>}
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/3 space-y-4 w-full">
            {tabs?.map((tab: Tab, index: number) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-6 rounded-3xl transition-all border-2 ${
                  activeTab === index 
                    ? `bg-${primary_color}-50 border-${primary_color}-500 shadow-lg shadow-${primary_color}-500/10` 
                    : 'bg-white border-gray-100 hover:border-gray-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{tab.icon}</span>
                  <div>
                    <h3 className={`font-bold ${activeTab === index ? `text-${primary_color}-700` : 'text-gray-900'}`}>
                      {tab.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-1">{tab.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="bg-gray-50 rounded-[40px] p-8 lg:p-12 border border-gray-100 shadow-inner">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl mb-8">
                <img 
                  src={tabs[activeTab]?.image} 
                  alt={tabs[activeTab]?.title} 
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">{tabs[activeTab]?.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">{tabs[activeTab]?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
