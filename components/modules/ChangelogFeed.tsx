import React from 'react';

interface Change {
  version: string;
  date: string;
  type: 'new' | 'improved' | 'fixed';
  description: string;
}

export const ChangelogFeed = ({ title, subtitle, updates, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500">{subtitle}</p>}
        </div>

        <div className="space-y-12">
          {updates?.map((update: Change, index: number) => (
            <div key={index} className="relative pl-12 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-gray-200 last:before:hidden">
              <div className={`absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-${primary_color}-600 border-4 border-white shadow-sm`}></div>
              
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm font-black text-gray-900">{update.version}</span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{update.date}</span>
                <span className={`px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                  update.type === 'new' ? 'bg-green-100 text-green-600' :
                  update.type === 'improved' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'
                }`}>
                  {update.type === 'new' ? 'Mới' : update.type === 'improved' ? 'Cải tiến' : 'Sửa lỗi'}
                </span>
              </div>
              
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-gray-600 leading-relaxed">{update.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className={`px-8 py-3 rounded-2xl border-2 border-gray-200 font-black text-gray-600 hover:bg-gray-100 transition-all`}>
            Xem tất cả cập nhật
          </button>
        </div>
      </div>
    </section>
  );
};
