import React from 'react';

interface Post {
  user: string;
  handle: string;
  avatar: string;
  content: string;
  image?: string;
  likes: string;
  comments: string;
  date: string;
}

export const SocialFeed = ({ title, subtitle, posts, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-500">{subtitle}</p>}
        </div>
        
        <div className="space-y-8">
          {posts?.map((post: Post, index: number) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img src={post.avatar} alt={post.user} className="w-12 h-12 rounded-full object-cover border border-gray-100" referrerPolicy="no-referrer" />
                    <div>
                      <div className="font-bold text-gray-900">{post.user}</div>
                      <div className="text-sm text-gray-500">{post.handle}</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">{post.date}</div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">{post.content}</p>
                {post.image && (
                  <div className="rounded-xl overflow-hidden mb-4 border border-gray-100">
                    <img src={post.image} alt="Post content" className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
                  </div>
                )}
                <div className="flex items-center gap-6 pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-2 text-gray-500 hover:text-red-500 cursor-pointer transition-colors group">
                    <svg className="w-5 h-5 group-hover:fill-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    <span className="text-sm font-bold">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 hover:text-blue-500 cursor-pointer transition-colors group">
                    <svg className="w-5 h-5 group-hover:fill-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                    <span className="text-sm font-bold">{post.comments}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 hover:text-green-500 cursor-pointer transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
