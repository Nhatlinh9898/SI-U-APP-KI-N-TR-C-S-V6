import React from 'react';

export const NewsletterSection = ({ title, subtitle, buttonText = "Subscribe", placeholder = "Enter your email", primary_color = 'blue' }: any) => {
  return (
    <section className={`py-16 bg-${primary_color}-600`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md border border-white/20 flex flex-col md:flex-row items-center justify-between shadow-xl">
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
            {subtitle && <p className="mt-4 text-lg text-white/80">{subtitle}</p>}
          </div>
          <div className="md:w-1/2 w-full max-w-md">
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                required 
                placeholder={placeholder} 
                className="w-full px-5 py-3 rounded-xl text-gray-900 focus:ring-4 focus:ring-white/30 focus:outline-none shadow-inner"
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-colors whitespace-nowrap shadow-lg"
              >
                {buttonText}
              </button>
            </form>
            <p className="mt-3 text-sm text-white/60 text-center md:text-left">We care about your data. Read our Privacy Policy.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
