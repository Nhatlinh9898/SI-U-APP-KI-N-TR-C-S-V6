import React from 'react';

interface Job {
  title: string;
  department: string;
  location: string;
  type: string;
  link?: string;
}

export const JobBoard = ({ title, subtitle, jobs, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500">{subtitle}</p>}
        </div>
        
        <div className="space-y-4">
          {jobs?.map((job: Job, index: number) => (
            <a 
              key={index} 
              href={job.link || "#"} 
              className="block bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className={`text-xl font-bold text-gray-900 group-hover:text-${primary_color}-600 transition-colors`}>{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-500">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      {job.department}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      {job.location}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      {job.type}
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <span className={`inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-${primary_color}-700 bg-${primary_color}-100 group-hover:bg-${primary_color}-200 transition-colors`}>
                    Ứng tuyển ngay
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
