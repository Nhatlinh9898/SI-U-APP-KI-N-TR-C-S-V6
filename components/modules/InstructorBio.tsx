import React from 'react';

export const InstructorBio = ({ title, name, role, bio, image, stats, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-16">{title}</h2>}
        
        <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 relative h-80 md:h-auto">
              <img src={image || "https://picsum.photos/seed/instructor/600/800"} alt={name} className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{name}</h3>
              <p className={`text-lg font-medium text-${primary_color}-600 mb-6`}>{role}</p>
              
              <div className="prose prose-lg text-gray-600 mb-8">
                <p>{bio}</p>
              </div>
              
              {stats && stats.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                  {stats.map((stat: any, index: number) => (
                    <div key={index}>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
