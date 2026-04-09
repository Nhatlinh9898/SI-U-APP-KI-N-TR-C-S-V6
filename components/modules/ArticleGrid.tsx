import React from 'react';
import { motion } from 'framer-motion';

interface Article {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author?: { name: string, avatar: string, role?: string };
  readingTime?: string;
  category?: string;
  tags?: string[];
  link?: string;
  views?: string;
  isFeatured?: boolean;
}

export const ArticleGrid = ({ title, subtitle, articles, primary_color = '#3b82f6' }: any) => {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const categories = ['All', ...new Set((articles || []).filter((a: any) => a.category).map((a: any) => a.category))];

  const filteredArticles = articles?.filter((a: any) => {
    const matchesCategory = activeCategory === 'All' || a.category === activeCategory;
    const matchesSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-8xl font-black text-gray-900 mb-8 tracking-tighter leading-none">{title || 'Tin tức & Bài viết'}</h2>
            <p className="text-xl text-gray-500 leading-relaxed font-medium">{subtitle || 'Cập nhật những kiến thức mới nhất và xu hướng dẫn đầu trong ngành.'}</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Tìm kiếm bài viết..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-80 px-8 py-5 bg-gray-50 border border-gray-100 rounded-[24px] font-bold text-sm focus:outline-none focus:ring-4 focus:ring-blue-600/10 transition-all"
              />
              <svg className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
          </div>
        </div>

        {categories.length > 1 && (
          <div className="flex flex-wrap gap-3 mb-16">
            {categories.map((cat: any) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? 'bg-gray-900 text-white shadow-2xl scale-105' 
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredArticles?.map((article: Article, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col bg-white rounded-[64px] border border-gray-100 overflow-hidden hover:shadow-[0_64px_128px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-4 transition-all duration-700 group ${article.isFeatured ? 'lg:col-span-2 lg:flex-row' : ''}`}
            >
              <div className={`relative overflow-hidden bg-gray-100 ${article.isFeatured ? 'lg:w-1/2 h-full min-h-[400px]' : 'h-80'}`}>
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                
                <div className="absolute top-8 left-8 flex flex-col gap-3">
                  {article.isFeatured && (
                    <div className="bg-blue-600 text-white text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-[0.2em] shadow-xl self-start">
                      Nổi bật
                    </div>
                  )}
                  {article.category && (
                    <div className="bg-white/90 backdrop-blur-md text-gray-900 text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-[0.2em] shadow-xl self-start">
                      {article.category}
                    </div>
                  )}
                </div>

                <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between text-white text-[10px] font-black uppercase tracking-widest">
                  <div className="flex items-center gap-4">
                    {article.readingTime && (
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        {article.readingTime}
                      </div>
                    )}
                    {article.views && (
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                        {article.views} lượt xem
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className={`p-12 flex flex-col flex-grow ${article.isFeatured ? 'lg:w-1/2 justify-center' : ''}`}>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-6">{article.date}</div>
                
                <h3 className={`${article.isFeatured ? 'text-4xl md:text-5xl' : 'text-3xl'} font-black text-gray-900 mb-6 tracking-tighter group-hover:text-blue-600 transition-colors duration-500 leading-tight`}>
                  {article.title}
                </h3>
                
                <p className="text-gray-500 font-medium line-clamp-3 mb-10 flex-grow leading-relaxed text-lg">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-10 border-t border-gray-50">
                  {article.author && (
                    <div className="flex items-center gap-4">
                      <img src={article.author.avatar} alt={article.author.name} className="w-12 h-12 rounded-2xl object-cover shadow-lg" referrerPolicy="no-referrer" />
                      <div>
                        <div className="text-sm font-black text-gray-900 tracking-tight">{article.author.name}</div>
                        {article.author.role && <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{article.author.role}</div>}
                      </div>
                    </div>
                  )}
                  <a href={article.link || "#"} className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-900 hover:bg-blue-600 hover:text-white transition-all group/link shadow-sm">
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
