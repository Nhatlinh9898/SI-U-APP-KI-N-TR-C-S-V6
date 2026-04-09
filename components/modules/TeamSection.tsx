import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
  expertise?: string[];
  education?: string;
  socialLinks?: { platform: 'linkedin' | 'twitter' | 'github', url: string }[];
}

export const TeamSection = ({ title, subtitle, members, primary_color = 'blue' }: any) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">{title || 'Đội ngũ chuyên gia'}</h2>
          {subtitle && <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">{subtitle}</p>}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {members?.map((member: TeamMember, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative mb-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition duration-700"></div>
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={member.image} alt={member.name} referrerPolicy="no-referrer" />
                </div>
                
                {member.socialLinks && (
                  <div className="absolute bottom-0 right-0 flex flex-col gap-2 translate-x-4">
                    {member.socialLinks.map((social, sIndex) => (
                      <a key={sIndex} href={social.url} className="w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all scale-0 group-hover:scale-100 duration-500" style={{ transitionDelay: `${sIndex * 100}ms` }}>
                        <span className="sr-only">{social.platform}</span>
                        {social.platform === 'linkedin' && <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">{member.name}</h3>
              <p className="text-blue-600 font-black text-xs uppercase tracking-widest mb-4">{member.role}</p>
              
              {member.expertise && (
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {member.expertise.map((skill, kIndex) => (
                    <span key={kIndex} className="px-3 py-1 bg-gray-50 text-gray-400 text-[9px] font-black uppercase tracking-widest rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {member.bio && <p className="text-gray-500 font-medium text-sm leading-relaxed max-w-xs">{member.bio}</p>}
              
              {member.education && (
                <div className="mt-4 pt-4 border-t border-gray-50 w-full">
                  <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Học vấn</div>
                  <div className="text-xs font-bold text-gray-500">{member.education}</div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
