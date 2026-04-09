import React, { useState, useEffect } from 'react';

export const FlashSaleBanner = ({ title, endTime, buttonText, primary_color = 'blue' }: any) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(endTime).getTime() - now;
      
      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div className={`bg-${primary_color}-600 py-3 px-4 text-white relative z-[60]`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        <div className="flex items-center gap-2">
          <span className="animate-pulse">⚡</span>
          <span className="font-black uppercase tracking-tighter text-sm md:text-base">{title}</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            {[timeLeft.hours, timeLeft.minutes, timeLeft.seconds].map((val, i) => (
              <div key={i} className="flex items-center gap-1">
                <div className="bg-white/20 backdrop-blur-md rounded-lg w-10 h-10 flex items-center justify-center font-black text-lg">
                  {val.toString().padStart(2, '0')}
                </div>
                {i < 2 && <span className="font-bold">:</span>}
              </div>
            ))}
          </div>
          <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-black text-sm hover:bg-gray-100 transition-all shadow-lg">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};
