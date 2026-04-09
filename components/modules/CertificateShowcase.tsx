import React from 'react';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
}

export const CertificateShowcase = ({ title, subtitle, certificates, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates?.map((cert: Certificate, index: number) => (
            <div key={index} className="group bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-gray-100 border border-gray-50">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-bold text-sm shadow-xl">Xem chi tiết</button>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{cert.title}</h3>
              <div className="flex justify-between items-center">
                <span className={`text-xs font-bold text-${primary_color}-600 uppercase tracking-widest`}>{cert.issuer}</span>
                <span className="text-xs text-gray-400">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
