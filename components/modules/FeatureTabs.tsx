import React, { useState } from 'react';
import { motion } from 'motion/react';

interface Tab {
  title: string;
  description: string;
  image?: string;
  videoUrl?: string;
  icon: string;
  features?: string[];
  cta?: { text: string, url: string };
}

interface FeatureTabsProps {
  title: string;
  subtitle?: string;
  tabs: Tab[];
  primary_color?: string;
  layout?: 'left' | 'right' | 'top';
}

export const FeatureTabs: React.FC<FeatureTabsProps> = ({ 
  title, 
  subtitle, 
  tabs, 
  primary_color = '#f59e0b',
  layout = 'left'
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const isRight = layout === 'right';
  const isTop = layout === 'top';

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-7xl font-black text-gray-900 mb-8 tracking-tight">{title}</h2>
          {subtitle && <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium">{subtitle}</p>}
        </div>

        <div className={`flex flex-col ${isTop ? 'gap-16' : isRight ? 'lg:flex-row-reverse gap-12 lg:gap-24' : 'lg:flex-row gap-12 lg:gap-24'} items-start`}>
          {/* Tabs Navigation */}
          <div className={`${isTop ? 'w-full flex flex-wrap justify-center gap-4' : 'lg:w-1/3 w-full space-y-4'}`}>
            {tabs?.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-left p-8 rounded-[32px] transition-all duration-500 border-2 group ${
                  isTop ? 'min-w-[200px]' : 'w-full'
                } ${
                  activeTab === index 
                    ? `bg-white border-gray-100 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)]` 
                    : 'bg-gray-50 border-transparent hover:bg-white hover:border-gray-100'
                }`}
              >
                <div className={`flex items-center gap-6 ${isTop ? 'justify-center' : ''}`}>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-500 ${activeTab === index ? 'shadow-lg scale-110' : 'opacity-50 group-hover:opacity-100'}`} style={{ backgroundColor: activeTab === index ? `${primary_color}15` : 'transparent', color: activeTab === index ? primary_color : 'inherit' }}>
                    {tab.icon}
                  </div>
                  {!isTop && (
                    <div>
                      <h3 className={`text-lg font-black transition-colors ${activeTab === index ? 'text-gray-900' : 'text-gray-400'}`}>
                        {tab.title}
                      </h3>
                      <p className="text-sm text-gray-400 font-medium line-clamp-1 mt-1">{tab.description}</p>
                    </div>
                  )}
                </div>
                {isTop && (
                  <h3 className={`text-center mt-4 font-black transition-colors ${activeTab === index ? 'text-gray-900' : 'text-gray-400'}`}>
                    {tab.title}
                  </h3>
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className={`${isTop ? 'w-full' : 'lg:w-2/3 w-full'}`}>
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: isRight ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-[56px] p-10 lg:p-16 border border-gray-100 shadow-inner"
            >
              <div className="flex flex-col xl:flex-row gap-12 items-center">
                <div className="flex-1 space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                      {tabs[activeTab]?.title}
                    </h3>
                    <p className="text-xl text-gray-500 font-medium leading-relaxed">
                      {tabs[activeTab]?.description}
                    </p>
                  </div>

                  {tabs[activeTab]?.features && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {tabs[activeTab].features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-gray-700 font-bold">
                          <div className="w-6 h-6 rounded-lg flex items-center justify-center text-xs" style={{ backgroundColor: `${primary_color}15`, color: primary_color }}>✓</div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  )}

                  {tabs[activeTab]?.cta && (
                    <div className="pt-4">
                      <a 
                        href={tabs[activeTab].cta.url}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-white uppercase tracking-widest transition-all hover:scale-105 shadow-xl"
                        style={{ backgroundColor: primary_color }}
                      >
                        {tabs[activeTab].cta.text}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                      </a>
                    </div>
                  )}
                </div>

                <div className="w-full xl:w-1/2">
                  <div className="relative aspect-square md:aspect-video xl:aspect-square rounded-[40px] overflow-hidden shadow-2xl border-8 border-white bg-gray-100">
                    {tabs[activeTab]?.videoUrl ? (
                      <video src={tabs[activeTab].videoUrl} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                    ) : (
                      <img 
                        src={tabs[activeTab]?.image} 
                        alt={tabs[activeTab]?.title} 
                        className="w-full h-full object-cover transition-all duration-700 hover:scale-110" 
                        referrerPolicy="no-referrer" 
                      />
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
