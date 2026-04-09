import React from 'react';

interface VideoReview {
  name: string;
  role: string;
  quote: string;
  thumbnail: string;
}

export const VideoTestimonials = ({ title, subtitle, reviews, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-400">{subtitle}</p>}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews?.map((review: VideoReview, index: number) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden aspect-video mb-6 bg-gray-800">
                <img src={review.thumbnail} alt={review.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105 transform" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-16 h-16 bg-${primary_color}-600 text-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </div>
              <blockquote className="text-lg font-medium text-gray-200 mb-4 flex-grow">
                "{review.quote}"
              </blockquote>
              <div>
                <div className="font-bold text-white">{review.name}</div>
                <div className={`text-${primary_color}-400 text-sm`}>{review.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
