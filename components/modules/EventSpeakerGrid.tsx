import React from 'react';

interface Speaker {
  name: string;
  role: string;
  image: string;
  talkTitle: string;
  topic_description?: string;
  time?: string;
  location?: string;
  socials: { platform: string; url: string }[];
}

export const EventSpeakerGrid = ({ title, subtitle, speakers, primary_color = 'blue' }: any) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          {title && <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">{title}</h2>}
          {subtitle && <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {speakers?.map((speaker: Speaker, index: number) => (
            <div key={index} className="group flex flex-col h-full">
              <div className="relative aspect-[4/5] rounded-[64px] overflow-hidden mb-8 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.12)]">
                <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-10 left-10 right-10 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex gap-4">
                    {speaker.socials?.map((social, idx) => (
                      <a key={idx} href={social.url} className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all shadow-xl">
                        <span className="text-xs font-black uppercase tracking-tighter">{social.platform.charAt(0)}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-3xl font-black text-gray-900 mb-2">{speaker.name}</h3>
                  <p className="text-sm font-black text-orange-600 uppercase tracking-widest">{speaker.role}</p>
                </div>
                
                <div className="p-8 bg-gray-50 rounded-[40px] border border-gray-100 flex-1 flex flex-col">
                  {(speaker.time || speaker.location) && (
                    <div className="flex items-center gap-4 mb-4 text-[10px] font-black uppercase tracking-widest text-gray-400">
                      {speaker.time && <span>🕒 {speaker.time}</span>}
                      {speaker.location && <span>📍 {speaker.location}</span>}
                    </div>
                  )}
                  <h4 className="text-lg font-black text-gray-900 mb-3 leading-tight">"{speaker.talkTitle}"</h4>
                  {speaker.topic_description && (
                    <p className="text-sm text-gray-500 font-medium leading-relaxed line-clamp-3">
                      {speaker.topic_description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
