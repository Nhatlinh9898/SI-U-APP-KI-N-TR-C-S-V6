import React from 'react';

interface Logo {
  name: string;
  url: string;
}

interface LogoTickerProps {
  title?: string;
  logos: Logo[];
  primary_color?: string;
  speed?: number;
  direction?: 'left' | 'right';
  variant?: 'ticker' | 'grid';
  grayscale?: boolean;
}

export const LogoTicker: React.FC<LogoTickerProps> = ({ 
  title, 
  logos, 
  primary_color = '#f59e0b',
  speed = 40,
  direction = 'left',
  variant = 'ticker',
  grayscale = true
}) => {
  const isGrid = variant === 'grid';

  return (
    <section className="py-16 bg-white overflow-hidden border-y border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <p className="text-center text-xs font-black uppercase text-gray-400 tracking-[0.3em] mb-12">
            {title}
          </p>
        )}
        
        {isGrid ? (
          <div className="flex justify-center flex-wrap gap-12 md:gap-20 items-center">
            {logos?.map((logo, index) => (
              <img 
                key={index} 
                src={logo.url} 
                alt={logo.name} 
                className={`h-8 md:h-12 object-contain transition-all duration-500 hover:scale-110 ${grayscale ? 'grayscale opacity-40 hover:grayscale-0 hover:opacity-100' : 'opacity-80 hover:opacity-100'}`} 
                referrerPolicy="no-referrer" 
              />
            ))}
          </div>
        ) : (
          <div className="relative flex overflow-hidden group">
            <div 
              className="flex gap-20 items-center animate-scroll whitespace-nowrap"
              style={{ 
                animationDuration: `${speed}s`,
                animationDirection: direction === 'right' ? 'reverse' : 'normal'
              }}
            >
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <img 
                  key={index} 
                  src={logo.url} 
                  alt={logo.name} 
                  className={`h-8 md:h-12 object-contain transition-all duration-500 ${grayscale ? 'grayscale opacity-40 hover:grayscale-0 hover:opacity-100' : 'opacity-80 hover:opacity-100'}`} 
                  referrerPolicy="no-referrer" 
                />
              ))}
            </div>
          </div>
        )}
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll linear infinite;
        }
      `}} />
    </section>
  );
};
