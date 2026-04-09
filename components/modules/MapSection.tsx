import React from 'react';

export const MapSection = ({ title, address, mapUrl, email, phone, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {address && <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">{address}</p>}
        </div>
        <div className="flex flex-col md:flex-row gap-8 bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          <div className="md:w-1/3 p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Liên hệ với chúng tôi</h3>
            <div className="space-y-4">
              {address && (
                <div className="flex items-start">
                  <svg className={`w-6 h-6 text-${primary_color}-600 mt-1 mr-3`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <span className="text-gray-600">{address}</span>
                </div>
              )}
              {phone && (
                <div className="flex items-center">
                  <svg className={`w-6 h-6 text-${primary_color}-600 mr-3`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  <span className="text-gray-600 font-medium">{phone}</span>
                </div>
              )}
              {email && (
                <div className="flex items-center">
                  <svg className={`w-6 h-6 text-${primary_color}-600 mr-3`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <span className="text-gray-600">{email}</span>
                </div>
              )}
            </div>
          </div>
          <div className="md:w-2/3 h-80 md:h-auto min-h-[300px] bg-gray-200 relative">
            {mapUrl ? (
              <iframe 
                src={mapUrl} 
                className="absolute inset-0 w-full h-full border-0" 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200">
                <span>Bản đồ sẽ hiển thị ở đây</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
