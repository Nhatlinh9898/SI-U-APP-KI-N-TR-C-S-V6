import React from 'react';
import { motion } from 'framer-motion';

interface Article {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category?: string;
  link?: string;
}

export const ArticleGrid = ({ title, subtitle, articles, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500">{subtitle}</p>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles?.map((article: Article, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                {article.category && (
                  <div className={`absolute top-4 left-4 bg-${primary_color}-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide`}>
                    {article.category}
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">{article.title}</h3>
                <p className="text-gray-600 line-clamp-3 mb-6 flex-grow">{article.excerpt}</p>
                <a href={article.link || "#"} className={`text-${primary_color}-600 font-semibold inline-flex items-center hover:text-${primary_color}-800 transition-colors`}>
                  Đọc tiếp
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
