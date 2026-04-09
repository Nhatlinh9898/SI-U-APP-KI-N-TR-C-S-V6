import React from 'react';

interface Message {
  user: string;
  text: string;
  time: string;
  isBot?: boolean;
}

export const LiveChatPreview = ({ title, subtitle, messages, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            {title && <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">{title}</h2>}
            {subtitle && <p className="text-xl text-gray-500 leading-relaxed mb-10">{subtitle}</p>}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} className="w-12 h-12 rounded-full border-4 border-white shadow-sm" referrerPolicy="no-referrer" />
                ))}
              </div>
              <div className="text-sm font-bold text-gray-900">
                <span className="text-green-500">●</span> 1,240+ người đang trực tuyến
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-[40px] p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-900 to-transparent z-10"></div>
            <div className="space-y-6 relative z-0">
              {messages?.map((msg: Message, index: number) => (
                <div key={index} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl ${
                    msg.isBot 
                      ? 'bg-gray-800 text-white rounded-tl-none' 
                      : `bg-${primary_color}-600 text-white rounded-tr-none`
                  }`}>
                    <div className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-1">{msg.user} • {msg.time}</div>
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gray-800 flex gap-4">
              <div className="flex-grow h-12 bg-gray-800 rounded-xl px-4 flex items-center text-gray-500 text-sm">Nhập tin nhắn...</div>
              <div className={`w-12 h-12 rounded-xl bg-${primary_color}-600 flex items-center justify-center text-white`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
