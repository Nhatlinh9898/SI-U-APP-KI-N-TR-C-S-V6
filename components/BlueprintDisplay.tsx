

import React from 'react';
import { AppBlueprint, Field } from '../types';
import { 
  Terminal, 
  Layout, 
  Cpu, 
  Shield, 
  Zap, 
  GitBranch, 
  Layers, 
  Copy,
  Smartphone,
  Sparkles,
  Box,
  Lock,
  EyeOff,
  FileCode
} from 'lucide-react';

interface Props {
  data: AppBlueprint;
}

const SectionTitle: React.FC<{ icon: React.ReactNode; title: string; color?: string }> = ({ icon, title, color = "text-amber-400" }) => (
  <div className="flex items-center gap-3 mb-5 mt-8 border-b border-gray-800 pb-2">
    <div className={`${color}`}>{icon}</div>
    <h2 className={`text-lg md:text-xl font-bold font-mono tracking-widest ${color} uppercase`}>{title}</h2>
  </div>
);

const GlassCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`bg-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 shadow-xl hover:border-gray-600/50 transition-colors ${className}`}>
    {children}
  </div>
);

const FieldPreview: React.FC<{ field: Field }> = ({ field }) => (
  <div className="mb-5 group">
    <label className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase mb-2 tracking-wider">
      {field.label} 
      <span className="text-gray-600 font-mono text-[10px] bg-black/30 px-1 rounded">id: {field.id}</span> 
      {field.required && <span className="text-amber-500 text-[10px] border border-amber-900/50 px-1 rounded bg-amber-900/20">BẮT BUỘC</span>}
    </label>
    
    {field.type === 'select' || field.type === 'multiselect' ? (
      <div className="relative">
        <select disabled className="w-full bg-[#0F1629] border border-gray-700 rounded-lg p-3 text-sm text-gray-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none appearance-none transition-all opacity-80 cursor-not-allowed">
          <option>{field.placeholder || "Locked Selection..."}</option>
          {field.options?.map((opt, i) => <option key={i}>{opt}</option>)}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
           <Lock size={12} />
        </div>
      </div>
    ) : field.type === 'textarea' ? (
      <textarea 
        disabled
        className="w-full bg-[#0F1629] border border-gray-700 rounded-lg p-3 text-sm text-gray-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none min-h-[100px] transition-all resize-none opacity-80 cursor-not-allowed"
        placeholder={field.placeholder + " (Read Only)"}
      />
    ) : (
      <div className="relative">
        <input 
          disabled
          type={field.type} 
          className="w-full bg-[#0F1629] border border-gray-700 rounded-lg p-3 text-sm text-gray-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all opacity-80 cursor-not-allowed"
          placeholder={field.placeholder}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
           <Lock size={12} />
        </div>
      </div>
    )}
    {field.example && <p className="text-[10px] text-gray-500 mt-1.5 italic pl-1 border-l-2 border-gray-700">Ví dụ: {field.example}</p>}
  </div>
);

export const BlueprintDisplay: React.FC<Props> = ({ data }) => {
  const [activeTab, setActiveTab] = React.useState<'overview' | 'engine'>('overview');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Could add toast here
  };

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 animate-fadeIn pb-24">
      
      {/* Header Summary - CENTERED AS REQUESTED */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-[#0a0f1e] to-black border border-amber-500/20 p-8 md:p-12 shadow-2xl shadow-amber-900/5">
        <div className="absolute top-0 right-0 p-4 opacity-5 rotate-12 pointer-events-none">
           <Smartphone size={200} />
        </div>
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full"></div>
        
        {/* CENTERED LAYOUT CHANGE */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center gap-8">
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {/* VIP BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold tracking-[0.3em] text-black bg-gradient-to-r from-amber-300 to-yellow-500 rounded-full font-mono uppercase shadow-[0_0_20px_rgba(245,158,11,0.4)] animate-pulse">
              <Sparkles size={12} /> PHIÊN BẢN {data.summary.app_type === 'image' ? 'HÌNH ẢNH 8K' : 'NỘI DUNG AI'}
            </div>

            {/* MAIN TITLE - BIG & CENTERED */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-500 leading-tight drop-shadow-2xl">
              {data.summary.app_name}
            </h1>

            {/* SLOGAN */}
            <p className="text-xl md:text-3xl text-amber-200/90 italic font-light font-serif tracking-wide">
              "{data.summary.app_slogan}"
            </p>
            
            {/* DECORATIVE LINE */}
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto opacity-50"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 min-w-[200px]">
             {/* Security Badge */}
             <div className="bg-red-950/30 px-6 py-3 rounded-xl border border-red-500/30 backdrop-blur-sm flex items-center gap-3">
               <div className="p-2 bg-red-500/10 rounded-full text-red-500 animate-pulse">
                 <Lock size={16} />
               </div>
               <div className="text-left">
                  <span className="block text-red-500/70 text-[8px] uppercase tracking-widest">TRẠNG THÁI BẢO MẬT</span>
                  <span className="text-red-400 font-bold text-xs">ĐÃ KHÓA & MÃ HÓA</span>
               </div>
            </div>

            <div className="bg-white/5 px-6 py-3 rounded-xl border border-white/10 backdrop-blur-sm flex items-center gap-3">
               <div className="p-2 bg-gray-700/50 rounded-full text-gray-300">
                 <Box size={16} />
               </div>
               <div className="text-left">
                  <span className="block text-gray-500 text-[10px] uppercase mb-1 tracking-wider">LĨNH VỰC</span>
                  <span className="text-white font-medium text-xs uppercase">{data.summary.industry}</span>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-12 border-b border-gray-800 px-4">
        <button 
          onClick={() => setActiveTab('overview')}
          className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all relative ${activeTab === 'overview' ? 'text-amber-400' : 'text-gray-600 hover:text-gray-300'}`}
        >
          THIẾT KẾ & TÍNH NĂNG
          {activeTab === 'overview' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 shadow-[0_0_10px_#fbbf24]"></div>}
        </button>
        <button 
          onClick={() => setActiveTab('engine')}
          className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all relative ${activeTab === 'engine' ? 'text-cyan-400' : 'text-gray-600 hover:text-gray-300'}`}
        >
          LÕI HỆ THỐNG (ENGINE)
          {activeTab === 'engine' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></div>}
        </button>
      </div>

      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: UI & Inputs */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard className="border-t-4 border-t-blue-500 h-full">
              <div className="flex items-center gap-2 mb-6 text-blue-400">
                <Layout size={20} />
                <h3 className="font-bold uppercase tracking-widest text-sm">GIAO DIỆN (UI/UX)</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <span className="text-gray-500 uppercase text-[10px] font-bold tracking-wider block mb-2">PHONG CÁCH LAYOUT</span>
                  <span className="inline-block text-white bg-blue-900/30 px-3 py-1.5 rounded border border-blue-500/30 text-sm font-medium shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                    {data.ui_design.layout_style}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 uppercase text-[10px] font-bold tracking-wider block mb-2">VISUAL VIBE</span>
                  <p className="italic text-gray-300 border-l-2 border-blue-500 pl-3 py-1 bg-gradient-to-r from-blue-900/10 to-transparent">
                    {data.ui_design.visual_style}
                  </p>
                </div>
                <div className="pt-2">
                  <span className="text-gray-500 uppercase text-[10px] font-bold tracking-wider block mb-3">CÁC PHẦN CHÍNH (SECTIONS)</span>
                  <div className="space-y-2">
                    {data.ui_design.main_sections.map((sec, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-gray-300 bg-black/20 p-2 rounded border border-gray-800/50">
                        <div className="w-6 h-6 rounded flex items-center justify-center bg-blue-500/20 text-blue-400 text-xs font-bold font-mono">
                          {idx + 1}
                        </div>
                        {sec}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="border-t-4 border-t-green-500">
              <div className="flex items-center justify-between mb-6 text-green-400">
                <div className="flex items-center gap-2">
                   <Box size={20} />
                   <h3 className="font-bold uppercase tracking-widest text-sm">TRƯỜNG DỮ LIỆU (FIELDS)</h3>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-green-600 bg-green-900/10 px-2 py-1 rounded border border-green-900/30">
                   <Lock size={10} /> CHỈ ĐỌC
                </div>
              </div>
              <div className="bg-[#050912] rounded-xl p-4 border border-gray-800 max-h-[600px] overflow-y-auto custom-scrollbar shadow-inner">
                {data.fields.map((field) => (
                  <FieldPreview key={field.id} field={field} />
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Features, Security, Expansion */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <GlassCard className="bg-gray-800/20">
                <h4 className="text-gray-400 text-[10px] font-bold uppercase mb-4 flex items-center gap-2 tracking-wider">
                  <Layers size={14} /> CƠ BẢN (ESSENTIAL)
                </h4>
                <ul className="space-y-3">
                  {data.features.essential.map((f, i) => (
                    <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-gray-500 mt-2"></span> {f}
                    </li>
                  ))}
                </ul>
              </GlassCard>
              <GlassCard className="bg-blue-900/10 border-blue-500/20">
                <h4 className="text-blue-400 text-[10px] font-bold uppercase mb-4 flex items-center gap-2 tracking-wider">
                  <Zap size={14} /> NÂNG CAO (PRO)
                </h4>
                <ul className="space-y-3">
                  {data.features.pro.map((f, i) => (
                    <li key={i} className="text-sm text-blue-100 flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-blue-500 mt-2"></span> {f}
                    </li>
                  ))}
                </ul>
              </GlassCard>
              <GlassCard className="bg-amber-900/10 border-amber-500/30 relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-amber-500 blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <h4 className="text-amber-400 text-[10px] font-bold uppercase mb-4 flex items-center gap-2 tracking-wider relative z-10">
                  <Cpu size={14} /> GOD MODE (AI)
                </h4>
                <ul className="space-y-3 relative z-10">
                  {data.features.god_mode.map((f, i) => (
                    <li key={i} className="text-sm text-amber-100 flex items-start gap-2">
                       <span className="w-1 h-1 rounded-full bg-amber-500 mt-2 shadow-[0_0_5px_#fbbf24]"></span> {f}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>

            {/* Ideas & Use Cases */}
            <GlassCard>
              <SectionTitle icon={<GitBranch size={20} />} title="CONCEPT & ỨNG DỤNG" color="text-purple-400" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div>
                    <h5 className="text-[10px] font-bold text-gray-500 uppercase mb-3 tracking-wider">TIÊU ĐỀ MARKETING (HOOK)</h5>
                    <div className="flex flex-wrap gap-2">
                      {data.idea_titles.map((t, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-lg border border-purple-500/30 bg-purple-500/5 text-xs text-purple-200 hover:bg-purple-500/20 transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>
                 </div>
                 <div>
                    <h5 className="text-[10px] font-bold text-gray-500 uppercase mb-3 tracking-wider">TÌNH HUỐNG THỰC TẾ</h5>
                    <ul className="space-y-3">
                       {data.use_cases.map((u, i) => (
                         <li key={i} className="text-sm text-gray-300 flex gap-3 border-b border-gray-800/50 pb-2 last:border-0 last:pb-0">
                           <span className="text-purple-500 font-bold">→</span> {u}
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>
            </GlassCard>

             {/* Ecosystem */}
            <GlassCard className="bg-gradient-to-br from-pink-900/10 to-transparent border-pink-500/20">
               <SectionTitle icon={<Layers size={20} />} title="HỆ SINH THÁI ĐA VŨ TRỤ" color="text-pink-400" />
               <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-bold text-pink-400/70 uppercase tracking-widest block mb-3">Ý TƯỞNG NÂNG CẤP (UPGRADE)</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {data.upgrades.map((item, i) => (
                        <div key={i} className="p-3 bg-gray-900/50 rounded-lg text-sm text-gray-300 border border-gray-700/50 flex items-center gap-3 hover:border-pink-500/50 transition-colors">
                           <div className="w-1.5 h-1.5 rounded-full bg-pink-500 shadow-[0_0_5px_#ec4899]"></div> {item}
                        </div>
                      ))}
                    </div>
                  </div>
                   <div>
                    <span className="text-[10px] font-bold text-pink-400/70 uppercase tracking-widest block mb-3">APP CON LIÊN QUAN (CLONES)</span>
                    <div className="flex flex-wrap gap-2">
                      {data.related_apps.map((item, i) => (
                        <span key={i} className="px-4 py-2 bg-black/40 text-gray-300 text-xs font-mono border border-gray-700 rounded-full hover:border-pink-500 hover:text-white cursor-default transition-all">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
               </div>
            </GlassCard>
          </div>
        </div>
      )}

      {activeTab === 'engine' && (
        <div className="space-y-6 animate-fadeIn">
          
          {/* VISUAL LOCK WARNING */}
          <div className="bg-red-950/20 border border-red-500/30 rounded-xl p-4 flex items-center gap-4 justify-center text-red-400">
             <Shield size={20} className="animate-pulse" />
             <span className="text-xs font-bold uppercase tracking-widest">MÃ NGUỒN ĐÃ KHÓA • VÔ HIỆU HÓA CHỈNH SỬA • CHỈ DÀNH CHO ADMIN</span>
          </div>

          <GlassCard className="border-cyan-500/30 bg-cyan-950/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3 text-cyan-400">
                <Cpu size={24} />
                <div>
                   <h3 className="text-xl font-bold font-mono tracking-widest flex items-center gap-2">
                     SYSTEM PROMPT <Lock size={14} className="text-red-500" />
                   </h3>
                   <p className="text-[10px] text-cyan-400/60 uppercase">LOGIC LÕI ĐƯỢC BẢO VỆ</p>
                </div>
              </div>
              
              {/* REMOVED COPY BUTTON FOR SECURITY */}
              <div className="px-3 py-1.5 rounded-lg border border-red-500/30 bg-red-900/10 text-red-400 text-xs uppercase font-bold flex items-center gap-2 cursor-not-allowed opacity-70">
                 <EyeOff size={14} /> ẨN NỘI DUNG
              </div>
            </div>
            
            <div className="relative group">
               <div className="absolute -inset-0.5 bg-cyan-500/10 rounded-lg blur opacity-10"></div>
               {/* OBFUSCATED / READ ONLY DISPLAY */}
               <div className="relative bg-[#050912] p-6 rounded-lg border border-cyan-900/50 shadow-inner overflow-hidden">
                  <div className="absolute top-0 right-0 p-2 text-cyan-900 opacity-20 pointer-events-none font-black text-6xl">LOCKED</div>
                  <pre className="text-cyan-100/70 font-mono text-sm whitespace-pre-wrap leading-relaxed blur-[0.5px] select-none pointer-events-none">
                    {data.engine.system_prompt}
                  </pre>
               </div>
            </div>
          </GlassCard>

          <GlassCard className="border-purple-500/30 bg-purple-950/5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3 text-purple-400">
                <Terminal size={24} />
                 <div>
                   <h3 className="text-xl font-bold font-mono tracking-widest flex items-center gap-2">
                     USER TEMPLATE <Lock size={14} className="text-red-500" />
                   </h3>
                   <p className="text-[10px] text-purple-400/60 uppercase">CẤU TRÚC CHỈ ĐỌC</p>
                </div>
              </div>
              <div className="px-3 py-1.5 rounded-lg border border-gray-700 bg-gray-900/50 text-gray-500 text-xs uppercase font-bold flex items-center gap-2 cursor-not-allowed">
                 <FileCode size={14} /> CHỈ ĐỌC
              </div>
            </div>
            <pre className="bg-[#050912] p-6 rounded-lg overflow-x-auto border border-purple-900/50 text-purple-100/80 font-mono text-sm whitespace-pre-wrap leading-relaxed shadow-inner select-none">
              {data.engine.user_prompt_template}
            </pre>
          </GlassCard>

           <GlassCard className="border-green-500/30 bg-green-950/5">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3 text-green-400">
                <Shield size={24} />
                <h3 className="text-xl font-bold font-mono tracking-widest">LOGIC & BẢO MẬT</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                 <h4 className="text-xs font-bold text-green-500 uppercase mb-3 tracking-widest border-b border-green-500/20 pb-1 inline-block">Logic Vòng Lặp (Loop)</h4>
                 <div className="bg-black/40 p-5 rounded-lg border border-green-900/30 text-gray-300 text-sm leading-relaxed">
                   {data.engine.loop_logic}
                 </div>
              </div>
              <div>
                 <h4 className="text-xs font-bold text-green-500 uppercase mb-3 tracking-widest border-b border-green-500/20 pb-1 inline-block">Quy tắc Bảo mật</h4>
                 <ul className="space-y-2 bg-black/40 p-5 rounded-lg border border-green-900/30 text-gray-300 text-sm">
                   {data.security.security_rules.map((r, i) => (
                     <li key={i} className="flex gap-2">
                       <span className="text-green-500">•</span> {r}
                     </li>
                   ))}
                 </ul>
              </div>
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  );
};
