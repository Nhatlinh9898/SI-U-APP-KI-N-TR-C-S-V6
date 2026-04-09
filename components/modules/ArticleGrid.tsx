import React from 'react';
import { motion } from 'framer-motion';

interface Article {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author?: { name: string, avatar: string };
  readingTime?: string;
  category?: string;
  tags?: string[];
  link?: string;
}

export const ArticleGrid = ({ title, subtitle, articles, primary_color = 'blue' }: any) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">{title || 'Tin tức & Bài viết'}</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">{subtitle || 'Cập nhật những kiến thức mới nhất và xu hướng dẫn đầu trong ngành.'}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles?.map((article: Article, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col bg-white rounded-[40px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden hover:shadow-[0_48px_96px_-12px_rgba(0,0,0,0.12)] hover:translate-y-[-8px] transition-all duration-500 group"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
                {article.category && (
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-gray-900 text-[10px] font-black px-4 py-2 rounded-xl uppercase tracking-widest shadow-xl">
                    {article.category}
                  </div>
                )}
                {article.readingTime && (
                  <div className="absolute bottom-6 left-6 text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {article.readingTime}
                  </div>
                )}
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags?.map((tag, tIndex) => (
                    <span key={tIndex} className="text-[9px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors duration-500 leading-tight tracking-tight">{article.title}</h3>
                <p className="text-gray-500 font-medium line-clamp-3 mb-8 flex-grow leading-relaxed">{article.excerpt}</p>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                  {article.author && (
                    <div className="flex items-center gap-3">
                      <img src={article.author.avatar} alt={article.author.name} className="w-8 h-8 rounded-full object-cover" referrerPolicy="no-referrer" />
                      <span className="text-xs font-black text-gray-900">{article.author.name}</span>
                    </div>
                  )}
                  <a href={article.link || "#"} className="text-blue-600 font-black text-xs uppercase tracking-widest inline-flex items-center group/link">
                    Đọc tiếp
                    <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
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
