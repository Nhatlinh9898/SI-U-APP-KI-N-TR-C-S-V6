

import React, { useState, useEffect } from 'react';
import { ArchitectInput } from './components/ArchitectInput';
import { Crown, Sparkles, Star, Facebook, Phone, Gift, Heart, ShieldCheck, Lock, ChevronRight, ScanFace, KeyRound, Unlock, Fingerprint, Atom, Globe2 } from 'lucide-react';

// --- LOGIN SCREEN COMPONENT (SIÊU CẤP VIP PRO EDITION) ---
const LoginScreen: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate biometric check delay for effect
    setTimeout(() => {
      // CASE INSENSITIVE CHECK (BẤT KỲ CHỮ HOA/THƯỜNG ĐỀU ĐƯỢC)
      if (passcode.toLowerCase() === 'sieuvip') {
        onLogin();
      } else {
        setError(true);
        setLoading(false);
        setPasscode('');
      }
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden font-sans">
      
      {/* 1. COSMIC BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
         {/* Deep Void */}
         <div className="absolute inset-0 bg-[#020205]"></div>
         {/* Nebula Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] bg-[radial-gradient(circle,_rgba(245,158,11,0.15)_0%,_rgba(0,0,0,0)_70%)] animate-pulse-slow"></div>
         {/* Rotating Galaxy Ring */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-amber-500/10 rounded-full animate-spin-slow"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-dashed border-amber-500/10 rounded-full animate-reverse-spin"></div>
         
         {/* Floating Stars */}
         <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-twinkle delay-100"></div>
         <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-amber-200 rounded-full animate-twinkle delay-300"></div>
         <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-twinkle delay-700"></div>
      </div>

      {/* 2. MAIN VIP CARD */}
      <div className="relative z-10 w-full max-w-[500px] px-4">
         
         {/* Holographic Border Effect */}
         <div className="absolute -inset-[2px] bg-gradient-to-br from-amber-400 via-transparent to-amber-600 rounded-[2.5rem] opacity-70 blur-sm"></div>
         
         <div className="relative bg-[#0a0a0a]/90 backdrop-blur-3xl border border-amber-500/30 rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_100px_rgba(245,158,11,0.2)] overflow-hidden group">
            
            {/* Ambient Interior Light */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-b from-amber-500/10 to-transparent pointer-events-none"></div>

            {/* Scanning Laser Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_15px_#f59e0b] animate-scan z-20"></div>

            <div className="flex flex-col items-center text-center space-y-10 relative z-30">
               
               {/* BRANDING HEADER */}
               <div className="space-y-4">
                  <div className="flex justify-center mb-4">
                     <div className="relative">
                        <div className="absolute inset-0 bg-amber-500 blur-xl opacity-40 animate-pulse"></div>
                        <div className="w-20 h-20 bg-gradient-to-br from-[#2a1c00] to-black rounded-2xl border border-amber-500/50 flex items-center justify-center shadow-2xl relative z-10 rotate-3 transform group-hover:rotate-0 transition-all duration-500">
                           <Crown size={40} className="text-amber-400 drop-shadow-[0_2px_10px_rgba(245,158,11,0.8)]" strokeWidth={1.5} />
                        </div>
                        <div className="absolute -right-2 -top-2 w-6 h-6 bg-black border border-amber-500 rounded-full flex items-center justify-center z-20">
                           <Star size={10} className="text-amber-400 fill-amber-400 animate-spin-slow" />
                        </div>
                     </div>
                  </div>

                  <div className="space-y-1">
                     <h2 className="text-[10px] md:text-xs font-bold text-amber-500/60 tracking-[0.5em] uppercase animate-fadeIn">
                        CỔNG KẾT NỐI
                     </h2>
                     <h1 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-amber-300 to-amber-600 uppercase tracking-wider drop-shadow-sm leading-tight">
                        APP ĐA VŨ TRỤ<br/>
                        <span className="text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">SIÊU CẤP VIP PRO</span>
                     </h1>
                  </div>
               </div>

               {/* LOGIN FORM */}
               <form onSubmit={handleLogin} className="w-full space-y-6">
                  
                  {/* Password Field */}
                  <div className="relative group/input">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/50 to-amber-800/50 rounded-2xl opacity-0 group-hover/input:opacity-100 transition duration-500 blur"></div>
                    <div className="relative bg-black border border-amber-900/50 rounded-2xl flex items-center overflow-hidden transition-all group-focus-within/input:border-amber-500 group-focus-within/input:shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                       <div className="pl-6 pr-4 text-amber-600 group-focus-within/input:text-amber-400">
                          {loading ? <Fingerprint size={24} className="animate-pulse" /> : <KeyRound size={24} />}
                       </div>
                       <input 
                          type="password" 
                          value={passcode}
                          onChange={(e) => { setPasscode(e.target.value); setError(false); }}
                          placeholder="NHẬP MÃ TRUY CẬP"
                          className="w-full bg-transparent py-5 text-center font-mono text-xl tracking-[0.5em] text-amber-100 placeholder-amber-900/30 outline-none uppercase"
                          autoFocus
                       />
                       <div className="pr-6 pl-4 text-amber-900/40">
                          <Lock size={16} />
                       </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full relative group/btn overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 rounded-2xl transition-all duration-300 group-hover/btn:scale-105 group-hover/btn:shadow-[0_0_40px_rgba(245,158,11,0.6)]"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
                    
                    <div className="relative px-8 py-5 flex items-center justify-center gap-3">
                       {loading ? (
                          <>
                             <ScanFace size={20} className="text-black animate-spin" />
                             <span className="text-sm font-black text-black tracking-[0.2em] uppercase">ĐANG XÁC THỰC...</span>
                          </>
                       ) : (
                          <>
                             <span className="text-sm font-black text-black tracking-[0.2em] uppercase">KÍCH HOẠT HỆ THỐNG</span>
                             <ChevronRight size={20} className="text-black group-hover/btn:translate-x-1 transition-transform" />
                          </>
                       )}
                    </div>
                  </button>
               </form>

               {/* ERROR MESSAGE */}
               <div className="h-6">
                 {error && (
                   <div className="flex items-center gap-2 text-red-500 animate-shake justify-center">
                      <ShieldCheck size={14} />
                      <span className="text-[10px] font-black tracking-[0.2em] uppercase">MÃ TRUY CẬP TỪ CHỐI</span>
                   </div>
                 )}
               </div>

               {/* FOOTER METADATA */}
               <div className="border-t border-amber-900/30 w-full pt-6 flex justify-between items-center opacity-50">
                  <div className="flex items-center gap-1.5">
                     <Globe2 size={10} className="text-amber-500" />
                     <span className="text-[8px] font-mono text-amber-500 uppercase">MÁY CHỦ: ASIA-VN-VIP</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                     <Atom size={10} className="text-amber-500 animate-spin-slow" />
                     <span className="text-[8px] font-mono text-amber-500 uppercase">LÕI: V31.0 SECURITY</span>
                  </div>
               </div>

            </div>
         </div>
      </div>
      
      <style>{`
        @keyframes scan {
          0% { top: -10%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes reverse-spin {
          to { transform: rotate(-360deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        @keyframes shake {
          10%, 90% { transform: translate3d(-1px, 0, 0); }
          20%, 80% { transform: translate3d(2px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
          40%, 60% { transform: translate3d(4px, 0, 0); }
        }
        .animate-scan {
          animation: scan 4s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        .animate-reverse-spin {
          animation: reverse-spin 25s linear infinite;
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        .animate-shake {
          animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }
      `}</style>
    </div>
  );
};

// --- MAIN APP ---
const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleGenerate = (idea: string) => {
     console.log("Prompt ready:", idea);
  };

  if (!isAuthenticated) {
    return <LoginScreen onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-[#000000] text-slate-200 selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden relative font-sans animate-fadeIn">
      
      {/* Background Ambience - INFINITY LUXURY */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Deep Space Base */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0f172a] via-[#020617] to-black opacity-90"></div>
        
        {/* Central Divine Light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[600px] bg-gradient-to-b from-amber-500/10 via-purple-900/5 to-transparent blur-[100px] pointer-events-none"></div>

        {/* Floating Particles */}
        <div className="absolute top-[10%] left-[20%] w-1 h-1 bg-white rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-[15%] right-[20%] w-1.5 h-1.5 bg-amber-200 rounded-full animate-pulse opacity-40"></div>
      </div>

      {/* --- HERO HEADER CENTERED --- */}
      <header className="relative z-20 pt-16 pb-8 flex flex-col items-center justify-center text-center animate-fadeInDown">
        
        {/* 1. CROWN CENTERPIECE */}
        <div className="relative mb-6 group cursor-default">
           <div className="absolute inset-0 bg-amber-500 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000 rounded-full"></div>
           <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-700">
              <Crown className="text-amber-400 drop-shadow-[0_0_30px_rgba(245,158,11,0.8)]" size={60} strokeWidth={1} />
           </div>
        </div>

        {/* 2. MAIN TITLE HIERARCHY (RESIZED SMALLER) */}
        <div className="relative z-10 space-y-1">
           {/* Top Label */}
           <h3 className="text-xs md:text-sm font-bold tracking-[0.6em] text-gray-500 uppercase">
             KIẾN TRÚC SƯ
           </h3>
           
           {/* Massive Title */}
           <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 uppercase drop-shadow-2xl tracking-tighter leading-none">
             ĐA VŨ TRỤ
           </h1>

           {/* VIP PRO BADGE */}
           <div className="py-2 mt-2 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
              <h2 className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 uppercase tracking-[0.15em] drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                SIÊU CẤP VIP PRO
              </h2>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
           </div>
        </div>

        {/* 3. SLOGAN */}
        <div className="flex items-center gap-4 opacity-80 mt-4 mb-8">
           <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-amber-500/50"></div>
           <div className="flex items-center gap-2">
              <Star size={8} className="text-amber-400 fill-amber-400 animate-pulse" />
              <p className="text-[9px] md:text-xs text-amber-100/80 font-mono tracking-[0.3em] uppercase text-center">
                KIẾN TẠO SIÊU APP ĐẲNG CẤP THẾ GIỚI
              </p>
              <Star size={8} className="text-amber-400 fill-amber-400 animate-pulse" />
           </div>
           <div className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-amber-500/50"></div>
        </div>

        {/* --- NEW: PERSONAL BRANDING & CTA SECTION --- */}
        <div className="w-full max-w-4xl mx-auto px-4 mt-4">
           <div className="relative bg-gradient-to-b from-[#0a0a0a] to-black border border-amber-500/20 rounded-3xl p-8 shadow-[0_0_50px_rgba(245,158,11,0.1)] overflow-hidden group hover:border-amber-500/40 transition-all duration-500">
              {/* Glow effects */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent shadow-[0_0_20px_rgba(245,158,11,0.8)]"></div>
              <div className="absolute -left-10 top-0 bottom-0 w-20 bg-amber-500/5 skew-x-12 blur-xl"></div>
              <div className="absolute -right-10 top-0 bottom-0 w-20 bg-amber-500/5 skew-x-12 blur-xl"></div>

              <div className="flex flex-col items-center gap-6 relative z-10">
                 
                 {/* REMOVED THE TEXT LINE AS REQUESTED */}

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                    
                    {/* Facebook CTA */}
                    <a href="https://www.facebook.com/nguyen.quocthien.58" target="_blank" rel="noreferrer" 
                       className="group/btn relative flex items-center justify-center gap-3 py-4 px-6 bg-[#080808] hover:bg-blue-900/20 border border-gray-800 hover:border-blue-500 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
                       <div className="p-2 bg-blue-600 rounded-full text-white shadow-lg group-hover/btn:scale-110 transition-transform">
                          <Facebook size={20} fill="currentColor" />
                       </div>
                       <div className="text-left">
                          <span className="block text-[9px] text-gray-400 uppercase tracking-wider">Facebook</span>
                          <span className="block text-xs font-bold text-blue-200 group-hover/btn:text-white">NGUYỄN QUỐC THIỆN</span>
                       </div>
                    </a>

                    {/* Zalo CTA */}
                    <div className="group/btn relative flex items-center justify-center gap-3 py-4 px-6 bg-[#080808] hover:bg-cyan-900/20 border border-gray-800 hover:border-cyan-500 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 cursor-default">
                       <div className="p-2 bg-cyan-600 rounded-full text-white shadow-lg group-hover/btn:scale-110 transition-transform">
                          <Phone size={20} />
                       </div>
                       <div className="text-left">
                          <span className="block text-[9px] text-gray-400 uppercase tracking-wider">Zalo liên hệ</span>
                          <span className="block text-xs font-bold text-cyan-200 group-hover/btn:text-white">0968065274</span>
                       </div>
                    </div>

                    {/* Gift CTA */}
                    <a href="https://zalo.me/g/auvzpn118" target="_blank" rel="noreferrer" 
                       className="group/btn relative flex items-center justify-center gap-3 py-4 px-6 bg-gradient-to-r from-amber-900/20 to-orange-900/20 hover:from-amber-600/20 hover:to-orange-600/20 border border-amber-500/30 hover:border-amber-400 rounded-xl transition-all duration-300 shadow-lg hover:shadow-amber-500/30">
                       <div className="absolute inset-0 bg-amber-500/5 animate-pulse rounded-xl"></div>
                       <div className="p-2 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full text-white shadow-lg group-hover/btn:scale-110 transition-transform animate-bounce">
                          <Gift size={20} />
                       </div>
                       <div className="text-left">
                          <span className="block text-[9px] text-amber-200/70 uppercase tracking-wider">Cộng đồng VIP</span>
                          <span className="block text-xs font-bold text-amber-100 group-hover/btn:text-white">NHẬN QUÀ TẠI ĐÂY</span>
                       </div>
                    </a>

                 </div>

              </div>
           </div>
        </div>

      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="relative z-10 px-2 md:px-4 pb-20 flex flex-col items-center">
        <div className="w-full">
            <ArchitectInput onGenerate={handleGenerate} isLoading={false} />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-12 text-center text-gray-500 bg-black/90 backdrop-blur-xl">
        <div className="flex flex-col items-center gap-4 max-w-3xl mx-auto px-4">
          
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-yellow-700 p-0.5 shadow-[0_0_30px_rgba(245,158,11,0.3)] mb-2">
             <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                <ShieldCheck className="text-amber-500" size={32} />
             </div>
          </div>

          <p className="text-[10px] md:text-xs font-bold font-mono tracking-[0.2em] text-amber-500/80 uppercase">
             NGUYỄN QUỐC THIỆN OFFICIAL
          </p>

          <p className="text-[11px] md:text-sm font-medium text-gray-400 uppercase tracking-wider leading-relaxed border-t border-gray-800 pt-4 mt-2">
             BẢN QUYỀN THUỘC VỀ NGUYỄN QUỐC THIỆN <br className="hidden md:block"/>
             <span className="text-red-500/80">NGHIÊM CẤM MỌI HÀNH VI SAO CHÉP SỬ DỤNG THƯƠNG MẠI BẤT HỢP PHÁP</span>
          </p>
          
        </div>
      </footer>
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #000; 
        }
        ::-webkit-scrollbar-thumb {
          background: #333; 
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #555; 
        }
        .animate-pulse-slow {
          animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-fadeInDown {
          animation: fadeInDown 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-40px);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        .text-shadow-glow {
          text-shadow: 0 0 40px rgba(255,255,255,0.3);
        }
      `}</style>
    </div>
  );
};

export default App;
