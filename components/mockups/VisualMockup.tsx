import React from 'react';
import { AppBlueprint } from '../../types';
import { motion } from 'motion/react';
import { 
  Smartphone, 
  Monitor, 
  Layout, 
  Palette, 
  Layers, 
  MousePointer2,
  Menu,
  Search,
  User,
  Bell,
  Home,
  Settings,
  Plus
} from 'lucide-react';

interface VisualMockupProps {
  data: AppBlueprint;
}

export const VisualMockup: React.FC<VisualMockupProps> = ({ data }) => {
  if (!data || !data.ui_design) return null;

  const { ui_design, summary, fields } = data;
  const primary = ui_design.primary_color || '#f59e0b';
  const secondary = ui_design.secondary_color || '#1e293b';
  const accent = ui_design.accent_color || '#fbbf24';

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-amber-500/10 rounded-lg border border-amber-500/20">
            <Layout className="text-amber-500" size={20} />
          </div>
          <div>
            <h3 className="text-xl font-black tracking-tight text-white uppercase">BẢN MÔ PHỎNG GIAO DIỆN</h3>
            <p className="text-slate-500 text-xs font-medium uppercase tracking-widest">Visual UI Architecture Preview</p>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-full">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: primary }} />
            <span className="text-[10px] font-mono text-slate-400 uppercase">{primary}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-full">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: secondary }} />
            <span className="text-[10px] font-mono text-slate-400 uppercase">{secondary}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Mobile Preview */}
        <div className="lg:col-span-4 flex justify-center">
          <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-50" />
            
            <div className="h-full flex flex-col" style={{ backgroundColor: '#020617' }}>
              {/* App Header */}
              <div className="px-6 pt-10 pb-4 flex items-center justify-between" style={{ backgroundColor: secondary }}>
                <Menu size={20} className="text-white/70" />
                <span className="text-xs font-black text-white tracking-widest uppercase">{summary?.app_name || 'App'}</span>
                <Bell size={20} className="text-white/70" />
              </div>

              {/* App Content */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <div className="h-32 rounded-2xl p-4 flex flex-col justify-end" style={{ background: `linear-gradient(135deg, ${primary}, ${accent})` }}>
                  <h4 className="text-white font-black text-lg leading-tight">{summary?.app_slogan || ''}</h4>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {(ui_design?.main_sections || []).slice(0, 4).map((section, i) => (
                    <div key={i} className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                        <Layers size={14} className="text-amber-500" />
                      </div>
                      <p className="text-[10px] font-bold text-slate-300 uppercase truncate">{section}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Dữ liệu đầu vào</p>
                  {(fields || []).slice(0, 3).map((field, i) => (
                    <div key={i} className="space-y-1.5">
                      <div className="h-2 w-20 bg-slate-800 rounded" />
                      <div className="h-10 bg-slate-900 border border-slate-800 rounded-lg" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Nav */}
              <div className="h-16 border-t border-slate-800 flex items-center justify-around px-4 bg-slate-950">
                <Home size={20} style={{ color: primary }} />
                <Search size={20} className="text-slate-600" />
                <div className="w-10 h-10 rounded-full flex items-center justify-center -mt-8 shadow-lg" style={{ backgroundColor: primary }}>
                  <Plus size={24} className="text-black" />
                </div>
                <User size={20} className="text-slate-600" />
                <Settings size={20} className="text-slate-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Preview */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="h-8 bg-slate-800 flex items-center px-4 gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              <div className="ml-4 flex-1 h-5 bg-slate-950/50 rounded flex items-center px-3">
                <span className="text-[8px] text-slate-600 font-mono">https://{summary?.app_name?.toLowerCase().replace(/\s+/g, '-') || 'app'}.ai</span>
              </div>
            </div>

            <div className="h-[400px] flex" style={{ backgroundColor: '#020617' }}>
              {/* Sidebar */}
              <div className="w-16 border-r border-slate-800 flex flex-col items-center py-6 gap-6" style={{ backgroundColor: secondary }}>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                  <Smartphone size={20} className="text-amber-500" />
                </div>
                <div className="space-y-4">
                  <div className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center" />
                  <div className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center" />
                  <div className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center" />
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 flex flex-col">
                <header className="h-16 border-b border-slate-800 flex items-center justify-between px-8">
                  <h4 className="text-sm font-black text-white tracking-widest uppercase">{summary?.app_name || 'App'}</h4>
                  <div className="flex items-center gap-4">
                    <div className="w-32 h-8 bg-slate-900 border border-slate-800 rounded-lg" />
                    <div className="w-8 h-8 rounded-full bg-slate-800" />
                  </div>
                </header>

                <main className="flex-1 p-8 grid grid-cols-3 gap-6">
                  <div className="col-span-2 space-y-6">
                    <div className="h-40 rounded-3xl p-8 flex flex-col justify-center" style={{ background: `linear-gradient(135deg, ${primary}20, ${accent}10)`, border: `1px solid ${primary}30` }}>
                      <h2 className="text-3xl font-black text-white mb-2">{summary?.app_slogan || ''}</h2>
                      <p className="text-slate-400 text-sm max-w-md">{summary?.main_goal || ''}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {(fields || []).slice(0, 4).map((field, i) => (
                        <div key={i} className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
                          <div className="h-2 w-24 bg-slate-800 rounded" />
                          <div className="h-10 bg-slate-950 border border-slate-800 rounded-xl" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl space-y-4">
                      <h5 className="text-xs font-black text-amber-500 uppercase tracking-widest">Tính năng cốt lõi</h5>
                      <div className="space-y-3">
                        {(data?.features?.essential || []).slice(0, 3).map((f, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: primary }} />
                            <span className="text-[10px] font-bold text-slate-300 uppercase">{f.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="w-full py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-lg transition-transform hover:scale-[1.02]" style={{ backgroundColor: primary, color: '#000' }}>
                      KÍCH HOẠT HỆ THỐNG
                    </button>
                  </div>
                </main>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <Monitor className="text-blue-500" size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase">Responsive</p>
                <p className="text-xs font-black text-white uppercase">Đa nền tảng</p>
              </div>
            </div>
            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-purple-500/10 rounded-xl">
                <Palette className="text-purple-500" size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase">Design System</p>
                <p className="text-xs font-black text-white uppercase">{ui_design?.visual_vibe || 'Modern'}</p>
              </div>
            </div>
            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-green-500/10 rounded-xl">
                <MousePointer2 className="text-green-500" size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase">UX/UI</p>
                <p className="text-xs font-black text-white uppercase">Tối ưu chuyển đổi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
