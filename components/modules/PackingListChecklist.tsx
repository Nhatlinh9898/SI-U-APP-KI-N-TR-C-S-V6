import React from 'react';

interface Item {
  name: string;
  category: string;
  essential: boolean;
}

export const PackingListChecklist = ({ title, subtitle, items, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[48px] p-10 md:p-16 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl font-black text-gray-900 mb-4">{title}</h2>}
            {subtitle && <p className="text-gray-500">{subtitle}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {['Trang phục', 'Thiết bị', 'Giấy tờ', 'Khác'].map((cat) => (
              <div key={cat}>
                <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">{cat}</h3>
                <div className="space-y-4">
                  {items?.filter((i: Item) => i.category === cat).map((item: Item, idx: number) => (
                    <label key={idx} className="flex items-center gap-4 group cursor-pointer">
                      <div className="relative flex items-center justify-center">
                        <input type="checkbox" className="peer appearance-none w-6 h-6 rounded-lg border-2 border-gray-200 checked:bg-blue-600 checked:border-blue-600 transition-all" />
                        <svg className="absolute w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="font-bold text-gray-700 group-hover:text-gray-900 transition-colors">
                        {item.name}
                        {item.essential && <span className="ml-2 text-[10px] font-black text-red-500 uppercase tracking-tighter">Cần thiết</span>}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <button className={`px-10 py-4 bg-${primary_color}-600 text-white rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-${primary_color}-600/30`}>
              Tải danh sách (PDF)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
