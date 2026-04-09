import React from 'react';

interface Match {
  team1: string;
  team2: string;
  score1?: string;
  score2?: string;
  status: 'upcoming' | 'live' | 'finished';
}

export const TournamentBracket = ({ title, subtitle, matches, primary_color = 'blue' }: any) => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {title && <h2 className="text-3xl font-extrabold sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-4 text-xl text-gray-400">{subtitle}</p>}
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {matches?.map((match: Match, index: number) => (
            <div key={index} className="w-full max-w-sm bg-white/5 backdrop-blur-xl rounded-[32px] border border-white/10 overflow-hidden shadow-2xl">
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                    match.status === 'live' ? 'bg-red-600 text-white animate-pulse' : 'bg-white/10 text-white/60'
                  }`}>
                    {match.status === 'live' ? 'Trực tiếp' : match.status === 'upcoming' ? 'Sắp diễn ra' : 'Đã kết thúc'}
                  </div>
                  <div className="text-xs font-bold text-white/40">Trận {index + 1}</div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-black">A</div>
                      <div className="font-black text-lg">{match.team1}</div>
                    </div>
                    <div className="text-2xl font-black text-blue-400">{match.score1 || '—'}</div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="h-px bg-white/10 flex-grow"></div>
                    <div className="px-4 text-[10px] font-black text-white/20 uppercase tracking-widest italic">VS</div>
                    <div className="h-px bg-white/10 flex-grow"></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-black">B</div>
                      <div className="font-black text-lg">{match.team2}</div>
                    </div>
                    <div className="text-2xl font-black text-blue-400">{match.score2 || '—'}</div>
                  </div>
                </div>
              </div>
              
              <button className={`w-full py-4 bg-white/5 hover:bg-white/10 transition-colors font-black text-sm uppercase tracking-widest border-t border-white/10`}>
                Chi tiết trận đấu
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
