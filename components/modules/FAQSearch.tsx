import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const FAQSearch = ({ title, subtitle, faqs, primary_color = 'blue' }: any) => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tất cả');

  const categories = ['Tất cả', ...new Set(faqs?.map((f: FAQ) => f.category)) as Set<string>];

  const filteredFaqs = faqs?.filter((f: FAQ) => {
    const matchesSearch = f.question.toLowerCase().includes(search.toLowerCase()) || 
                         f.answer.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'Tất cả' || f.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500">{subtitle}</p>}
        </div>

        <div className="relative mb-10">
          <input
            type="text"
            placeholder="Bạn đang tìm kiếm điều gì?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-8 py-5 rounded-2xl bg-white border-none shadow-xl focus:ring-4 focus:ring-blue-500/10 text-lg font-medium"
          />
          <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat 
                  ? `bg-${primary_color}-600 text-white shadow-lg shadow-${primary_color}-600/30` 
                  : 'bg-white text-gray-500 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredFaqs?.length > 0 ? (
            filteredFaqs.map((faq: FAQ, index: number) => (
              <details key={index} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all hover:shadow-lg">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <span className="font-bold text-gray-900 pr-8">{faq.question}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))
          ) : (
            <div className="text-center py-20 text-gray-400 font-medium">Không tìm thấy kết quả phù hợp.</div>
          )}
        </div>
      </div>
    </section>
  );
};
