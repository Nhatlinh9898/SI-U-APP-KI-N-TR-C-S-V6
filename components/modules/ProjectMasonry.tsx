import React from 'react';

interface Project {
  title: string;
  category: string;
  image: string;
}

export const ProjectMasonry = ({ title, subtitle, projects, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500">{subtitle}</p>}
        </div>
        
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects?.map((project: Project, index: number) => (
            <div key={index} className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <img src={project.image} alt={project.title} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className={`text-${primary_color}-400 font-semibold text-sm uppercase tracking-wider mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300`}>
                  {project.category}
                </span>
                <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className={`px-8 py-3 border-2 border-gray-900 text-gray-900 font-bold rounded-xl hover:bg-gray-900 hover:text-white transition-colors`}>
            Xem tất cả dự án
          </button>
        </div>
      </div>
    </section>
  );
};
