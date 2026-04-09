import React from 'react';

export const VideoSection = ({ title, subtitle, videoUrl, thumbnailUrl, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {title && <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">{title}</h2>}
        {subtitle && <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">{subtitle}</p>}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-800 max-w-5xl mx-auto border border-gray-700">
          {videoUrl?.includes('youtube') || videoUrl?.includes('vimeo') ? (
            <iframe 
              src={videoUrl} 
              className="absolute inset-0 w-full h-full" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          ) : (
            <video 
              src={videoUrl} 
              poster={thumbnailUrl} 
              controls 
              className="absolute inset-0 w-full h-full object-cover"
            ></video>
          )}
        </div>
      </div>
    </section>
  );
};
