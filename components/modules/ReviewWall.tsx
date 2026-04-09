import React from 'react';

interface Review {
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export const ReviewWall = ({ title, subtitle, reviews, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">{subtitle}</p>}
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews?.map((review: Review, index: number) => (
            <div key={index} className="break-inside-avoid bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" referrerPolicy="no-referrer" />
                <div>
                  <div className="font-bold text-gray-900">{review.name}</div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-widest">{review.role}</div>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed italic">"{review.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
