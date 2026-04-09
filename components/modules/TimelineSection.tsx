import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

export const TimelineSection = ({ title, subtitle, items, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500">{subtitle}</p>}
        </div>
        <div className="relative border-l-2 border-gray-200 ml-3 md:ml-0 md:mx-auto">
          {items?.map((item: TimelineItem, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 ml-8 md:ml-0 md:flex md:justify-between md:items-center w-full md:even:flex-row-reverse group"
            >
              <div className={`absolute w-4 h-4 bg-${primary_color}-500 rounded-full -left-[9px] md:left-1/2 md:-ml-[9px] border-4 border-white shadow`}></div>
              <div className="md:w-5/12 md:group-even:text-right bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <span className={`text-sm font-bold text-${primary_color}-600 tracking-wide uppercase`}>{item.date}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-1">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
              <div className="hidden md:block md:w-2/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
