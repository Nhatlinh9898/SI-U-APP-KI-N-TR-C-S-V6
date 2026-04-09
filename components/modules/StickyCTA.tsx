import React from 'react';

export const StickyCTA = ({ text, buttonText, primary_color = 'blue' }: any) => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-2xl">
      <div className="bg-gray-900/90 backdrop-blur-xl rounded-full p-2 pl-8 border border-white/10 shadow-2xl flex items-center justify-between gap-4">
        <p className="text-white font-bold text-sm hidden sm:block truncate">{text}</p>
        <button className={`bg-${primary_color}-600 text-white px-8 py-3 rounded-full font-black text-sm hover:scale-105 transition-all shadow-lg shadow-${primary_color}-600/30 whitespace-nowrap`}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};
