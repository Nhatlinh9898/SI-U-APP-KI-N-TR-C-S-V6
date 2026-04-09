import React, { useState, useEffect } from 'react';

export const CountdownSection = ({ title, subtitle, targetDate, primary_color = 'blue' }: any) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate || new Date(Date.now() + 86400000 * 7)) - +new Date();
      let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      return timeLeft;
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlocks = [
    { label: 'Ngày', value: timeLeft.days },
    { label: 'Giờ', value: timeLeft.hours },
    { label: 'Phút', value: timeLeft.minutes },
    { label: 'Giây', value: timeLeft.seconds }
  ];

  return (
    <section className={`py-20 bg-${primary_color}-900 text-white relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {title && <h2 className="text-3xl font-extrabold sm:text-5xl mb-6">{title}</h2>}
        {subtitle && <p className="text-xl text-${primary_color}-200 mb-12 max-w-2xl mx-auto">{subtitle}</p>}
        
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {timeBlocks.map((block, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`w-20 h-20 sm:w-28 sm:h-28 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-xl mb-3`}>
                <span className="text-3xl sm:text-5xl font-black tabular-nums tracking-tight">
                  {block.value.toString().padStart(2, '0')}
                </span>
              </div>
              <span className={`text-sm sm:text-base font-medium text-${primary_color}-200 uppercase tracking-widest`}>
                {block.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
