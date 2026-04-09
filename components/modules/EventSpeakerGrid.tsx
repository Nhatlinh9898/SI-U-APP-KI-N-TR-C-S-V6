import React from 'react';

interface Speaker {
  name: string;
  role: string;
  image: string;
  talkTitle: string;
  socials: { platform: string; url: string }[];
}

export const EventSpeakerGrid = ({ title, subtitle, speakers, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {speakers?.map((speaker: Speaker, index: number) => (
            <div key={index} className="group relative">
              <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden mb-6 shadow-2xl">
                <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-8 left-8 right-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex gap-4">
                    {speaker.socials?.map((social, idx) => (
                      <a key={idx} href={social.url} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all">
                        <span className="text-xs font-black uppercase tracking-tighter">{social.platform.charAt(0)}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="px-4">
                <h3 className="text-2xl font-black text-gray-900 mb-1">{speaker.name}</h3>
                <p className={`text-sm font-black text-${primary_color}-600 uppercase tracking-widest mb-4`}>{speaker.role}</p>
                <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
                  <p className="text-sm font-bold text-gray-700 italic">"{speaker.talkTitle}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
