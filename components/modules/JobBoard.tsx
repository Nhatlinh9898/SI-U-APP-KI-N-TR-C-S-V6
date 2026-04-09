import React from 'react';

interface Job {
  title: string;
  department: string;
  location: string;
  type: string;
  salary?: string;
  posted_at?: string;
  link?: string;
}

export const JobBoard = ({ title, subtitle, jobs, primary_color = 'blue' }: any) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">{title || 'Cơ hội nghề nghiệp'}</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">{subtitle || 'Gia nhập đội ngũ của chúng tôi và cùng nhau kiến tạo tương lai.'}</p>
        </div>
        
        <div className="space-y-6">
          {jobs?.map((job: Job, index: number) => (
            <a 
              key={index} 
              href={job.link || "#"} 
              className="block bg-white border-2 border-gray-100 rounded-[32px] p-8 hover:border-blue-500 hover:shadow-2xl hover:translate-y-[-4px] transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-[40px] rounded-full -mr-16 -mt-16 group-hover:bg-blue-600/10 transition-colors"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-black text-gray-900 group-hover:text-blue-600 transition-colors duration-500 tracking-tight">{job.title}</h3>
                    {job.posted_at && (
                      <span className="px-3 py-1 bg-gray-100 rounded-lg text-[9px] font-black text-gray-400 uppercase tracking-widest">
                        {job.posted_at}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-gray-400">
                    <span className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      </div>
                      {job.department}
                    </span>
                    <span className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      </div>
                      {job.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </div>
                      {job.type}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col items-end gap-4">
                  {job.salary && (
                    <div className="text-xl font-black text-gray-900 tracking-tight">
                      {job.salary}
                    </div>
                  )}
                  <span className="px-8 py-4 bg-gray-900 text-white rounded-2xl text-xs font-black uppercase tracking-[0.2em] group-hover:bg-blue-600 transition-all shadow-xl shadow-gray-900/10 group-hover:shadow-blue-600/20">
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
