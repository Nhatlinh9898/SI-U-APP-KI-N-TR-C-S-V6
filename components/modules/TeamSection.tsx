import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export const TeamSection = ({ title, subtitle, members, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>
          {subtitle && <p className="mt-4 text-xl text-gray-500">{subtitle}</p>}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {members?.map((member: TeamMember, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <img className="w-40 h-40 rounded-full object-cover mb-4 shadow-lg" src={member.image} alt={member.name} referrerPolicy="no-referrer" />
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className={`text-${primary_color}-600 font-medium mb-2`}>{member.role}</p>
              {member.bio && <p className="text-gray-500 text-sm">{member.bio}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
