import React, { useState } from 'react';
import { 
  Layout, 
  Cpu, 
  Zap, 
  Shield, 
  Rocket, 
  Layers, 
  Eye, 
  Lock, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  Smartphone, 
  Globe, 
  Code2, 
  Terminal,
  Database,
  Search,
  Share2,
  ExternalLink,
  ArrowUpRight,
  Lightbulb,
  Target,
  Trophy,
  Workflow,
  Box,
  Mic2,
  Image as ImageIcon,
  Scan,
  Wand2
} from 'lucide-react';
import { AppBlueprint, Field, Feature, DesignStyle } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ScrollArea } from './ui/scroll-area';
import { VisualMockup } from './mockups/VisualMockup';
import { DynamicRenderer } from './modules/DynamicRenderer';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { toast } from 'sonner';
import { Input } from './ui/input';
import { Button } from './ui/button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const GlassCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <motion.div 
    variants={itemVariants}
    className={`bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 rounded-3xl overflow-hidden ${className}`}
  >
    {children}
  </motion.div>
);

const SectionTitle: React.FC<{ icon: React.ElementType; title: string; color?: string }> = ({ icon: Icon, title, color = "amber" }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className={`p-2 bg-${color}-500/10 rounded-xl border border-${color}-500/20`}>
      <Icon className={`text-${color}-500`} size={20} />
    </div>
    <h3 className="text-lg font-black tracking-tight uppercase text-white">{title}</h3>
  </div>
);

const FieldPreview: React.FC<{ field: Field }> = ({ field }) => (
  <div className="group relative p-4 bg-slate-950/50 border border-slate-800/50 rounded-2xl hover:border-amber-500/30 transition-all">
    <div className="flex items-center justify-between mb-2">
      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{field.id}</span>
      {field.required && <Badge variant="outline" className="text-[8px] border-amber-500/30 text-amber-500 uppercase">Bắt buộc</Badge>}
    </div>
    <h4 className="text-sm font-bold text-slate-200 mb-1">{field.label}</h4>
    <div className="flex items-center gap-2 text-[10px] text-slate-500 italic">
      <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
      VD: {field.example}
    </div>
    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <Lock size={12} className="text-slate-600" />
    </div>
  </div>
);

export const BlueprintDisplay: React.FC<{ 
  data: AppBlueprint; 
  onRefine?: (feedback: string) => void;
  isRefining?: boolean;
}> = ({ data, onRefine, isRefining }) => {
  const [feedback, setFeedback] = useState('');

  const handleExportPDF = async () => {
    const element = document.getElementById('blueprint-content');
    if (!element) return;

    toast.loading("Đang chuẩn bị hồ sơ PDF...");
    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#020617'
      });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${data?.summary?.app_name?.replace(/\s+/g, '_') || 'Blueprint'}_Blueprint.pdf`);
      toast.success("Đã xuất hồ sơ PDF thành công!");
    } catch (error) {
      console.error(error);
      toast.error("Lỗi khi xuất PDF.");
    }
  };

  const handleExportCode = () => {
    if (!data?.layout_modules || data.layout_modules.length === 0) {
      toast.error("Không có module nào để xuất code.");
      return;
    }

    let code = `import React from 'react';\n`;
    
    // Import statements based on used modules
    const usedModules = Array.from(new Set(data.layout_modules.map(m => m.type)));
    usedModules.forEach(moduleType => {
      code += `import { ${moduleType} } from './components/modules/${moduleType}';\n`;
    });

    code += `\nexport default function GeneratedPage() {\n  return (\n    <div className="min-h-screen bg-[#020617] text-slate-200">\n`;

    // Render modules
    data.layout_modules.forEach((mod, index) => {
      const propsString = Object.entries(mod.props || {})
        .map(([key, value]) => {
          if (typeof value === 'string') return `${key}="${value.replace(/"/g, '&quot;')}"`;
          return `${key}={${JSON.stringify(value)}}`;
        })
        .join(' ');
      
      code += `      <${mod.type} ${propsString} />\n`;
    });

    code += `    </div>\n  );\n}\n`;

    // Create and download file
    const blob = new Blob([code], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${data?.summary?.app_name?.replace(/\s+/g, '_') || 'Generated'}_Page.tsx`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success("Đã tải Source Code React thành công!");
  };

  if (!data || !data.summary) return null;

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-[1400px] mx-auto px-6 pb-32 font-sans"
      id="blueprint-content"
    >
      {/* --- HEADER --- */}
      <motion.div variants={itemVariants} className="text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
          <Sparkles size={14} className="text-amber-500" />
          <span className="text-[10px] font-black tracking-[0.2em] text-amber-500 uppercase">{data.summary.industry}</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase mb-4 drop-shadow-2xl">
          {data.summary.app_name}
        </h1>
        <p className="text-xl md:text-2xl font-medium text-slate-400 italic mb-8">
          "{data.summary.app_slogan}"
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Badge className="bg-slate-800 text-slate-300 hover:bg-slate-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            <Layout size={12} className="mr-2" /> {data?.ui_design?.layout_style || 'Default Layout'}
          </Badge>
          <Badge className="bg-slate-800 text-slate-300 hover:bg-slate-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            <Eye size={12} className="mr-2" /> {data?.ui_design?.visual_vibe || 'Default Vibe'}
          </Badge>
          <Badge className="bg-amber-500 text-black hover:bg-amber-400 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            <Zap size={12} className="mr-2" /> {data?.summary?.app_type === 'content' ? 'Content AI' : 'Image 8K'}
          </Badge>
        </div>
      </motion.div>

      {/* --- CONTENT TABS --- */}
      <Tabs defaultValue="overview" className="w-full">
        <div className="flex justify-center mb-12">
          <TabsList className="bg-slate-900/50 border border-slate-800 p-1 rounded-2xl">
            <TabsTrigger value="overview" className="rounded-xl px-8 py-2 data-[state=active]:bg-amber-500 data-[state=active]:text-black font-bold uppercase text-[10px] tracking-widest transition-all">
              <Layers size={14} className="mr-2" /> TỔNG QUAN
            </TabsTrigger>
            <TabsTrigger value="mockup" className="rounded-xl px-8 py-2 data-[state=active]:bg-amber-500 data-[state=active]:text-black font-bold uppercase text-[10px] tracking-widest transition-all">
              <Smartphone size={14} className="mr-2" /> MÔ PHỎNG UI
            </TabsTrigger>
            <TabsTrigger value="engine" className="rounded-xl px-8 py-2 data-[state=active]:bg-amber-500 data-[state=active]:text-black font-bold uppercase text-[10px] tracking-widest transition-all">
              <Cpu size={14} className="mr-2" /> ENGINE HỆ THỐNG
            </TabsTrigger>
            <TabsTrigger value="builder" className="rounded-xl px-8 py-2 data-[state=active]:bg-amber-500 data-[state=active]:text-black font-bold uppercase text-[10px] tracking-widest transition-all">
              <Box size={14} className="mr-2" /> LẮP RÁP CODE
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="overview" className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT COLUMN: UI & INPUTS */}
            <div className="lg:col-span-2 space-y-8">
              <GlassCard className="p-8">
                <SectionTitle icon={Layout} title="Cấu Trúc Giao Diện & Inputs" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Các Section Chính</h4>
                      <div className="space-y-2">
                        {data?.ui_design?.main_sections?.map((section, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 bg-slate-950/50 rounded-xl border border-slate-800/50">
                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                            <span className="text-xs font-bold text-slate-300">{section}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Trường Dữ Liệu (Fields)</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {data?.fields?.map((field, idx) => (
                        <FieldPreview key={idx} field={field} />
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <GlassCard className="p-8">
                  <SectionTitle icon={Target} title="Ý Tưởng & Use Cases" color="blue" />
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Marketing Hooks</h4>
                      <div className="space-y-3">
                        {data?.ideas_use_cases?.marketing_hooks?.map((hook, idx) => (
                          <div key={idx} className="p-4 bg-blue-500/5 border border-blue-500/10 rounded-2xl">
                            <p className="text-xs font-medium text-blue-200 italic">"{hook}"</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-8">
                  <SectionTitle icon={Trophy} title="Real-World Apps" color="green" />
                  <div className="space-y-3">
                    {data?.ideas_use_cases?.real_world_applications?.map((app, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-green-500/5 border border-green-500/10 rounded-2xl group cursor-default">
                        <span className="text-xs font-bold text-green-200">{app}</span>
                        <ArrowUpRight size={14} className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </div>
            </div>

            {/* RIGHT COLUMN: FEATURES & ECOSYSTEM */}
            <div className="space-y-8">
              <GlassCard className="p-8">
                <SectionTitle icon={Zap} title="Tính Năng Đột Phá" color="amber" />
                <div className="space-y-6">
                  {['essential', 'pro', 'god_mode'].map((tier) => (
                    <div key={tier}>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className={`text-[8px] uppercase tracking-widest ${
                          tier === 'god_mode' ? 'bg-amber-500 text-black' : 
                          tier === 'pro' ? 'bg-purple-500 text-white' : 'bg-slate-800 text-slate-400'
                        }`}>
                          {tier.replace('_', ' ')}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        {data?.features?.[tier as keyof typeof data.features]?.map((feature: Feature, idx: number) => (
                          <div key={idx} className="p-3 bg-slate-950/50 border border-slate-800/50 rounded-xl">
                            <h5 className="text-xs font-black text-slate-200 mb-1">{feature.name}</h5>
                            <p className="text-[10px] text-slate-500 leading-relaxed">{feature.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard className="p-8">
                <SectionTitle icon={Globe} title="Hệ Sinh Thái" color="purple" />
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Nâng Cấp Tương Lai</h4>
                    <div className="flex flex-wrap gap-2">
                      {data?.ecosystem?.upgrade_ideas?.map((idea, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-purple-500/10 text-purple-400 border-purple-500/20 text-[9px] uppercase">
                          {idea}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">App Liên Quan</h4>
                    <div className="space-y-2">
                      {data?.ecosystem?.related_apps?.map((app, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-400">
                          <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                          {app}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="mockup" className="space-y-8">
          <VisualMockup data={data} />
        </TabsContent>

        <TabsContent value="engine" className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <GlassCard className="p-8">
              <SectionTitle icon={Terminal} title="System Prompt Engine" color="red" />
              <div className="relative group">
                <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center rounded-2xl border border-red-500/20 opacity-100 group-hover:opacity-90 transition-opacity">
                  <Lock size={32} className="text-red-500 mb-4 animate-pulse" />
                  <p className="text-xs font-black text-red-500 tracking-widest uppercase">Bản quyền Nguyễn Nhật Linh</p>
                  <p className="text-[10px] text-slate-500 mt-2">Nội dung đã được mã hóa bảo mật</p>
                </div>
                <pre className="p-6 bg-black rounded-2xl font-mono text-[10px] text-slate-700 leading-relaxed overflow-hidden h-[400px]">
                  {data?.engine?.system_prompt || 'No system prompt available'}
                </pre>
              </div>
            </GlassCard>

            <div className="space-y-8">
              <GlassCard className="p-8">
                <SectionTitle icon={Code2} title="User Prompt Template" color="blue" />
                <div className="p-6 bg-slate-950/50 border border-slate-800 rounded-2xl">
                  <pre className="font-mono text-[10px] text-blue-400/80 leading-relaxed whitespace-pre-wrap">
                    {data?.engine?.user_prompt_template || 'No user prompt template available'}
                  </pre>
                </div>
              </GlassCard>

              <GlassCard className="p-8">
                <SectionTitle icon={Shield} title="Security & Logic" color="green" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Bảo Mật Hệ Thống</h4>
                    <div className="space-y-2">
                      {data?.security?.security_measures?.map((measure, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[10px] font-bold text-slate-400">
                          <CheckCircle2 size={12} className="text-green-500 mt-0.5 shrink-0" />
                          {measure}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Logic Xử Lý</h4>
                    <div className="space-y-2">
                      {data?.security?.logic_constraints?.map((logic, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[10px] font-bold text-slate-400">
                          <Workflow size={12} className="text-blue-500 mt-0.5 shrink-0" />
                          {logic}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="builder" className="space-y-8">
          <GlassCard className="p-8">
            <SectionTitle icon={Box} title="Lắp Ráp Code Động" color="amber" />
            <DynamicRenderer modules={data?.layout_modules} primaryColor={data?.ui_design?.primary_color} />
          </GlassCard>
        </TabsContent>
      </Tabs>

      {/* --- ACTION DOCK --- */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-6"
      >
        <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-slate-900/90 backdrop-blur-2xl border border-slate-700/50 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="flex-1 flex items-center gap-3 w-full">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <Wand2 size={18} className="text-amber-500" />
            </div>
            <Input 
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Yêu cầu chỉnh sửa bản vẽ này..."
              className="bg-slate-950/50 border-slate-800 focus:border-amber-500 h-12 rounded-xl text-xs"
              onKeyDown={(e) => e.key === 'Enter' && onRefine && onRefine(feedback)}
            />
            <Button 
              disabled={!feedback || isRefining}
              onClick={() => onRefine && onRefine(feedback)}
              className="bg-amber-500 hover:bg-amber-400 text-black font-black uppercase text-[10px] tracking-widest px-6 h-12 rounded-xl transition-all"
            >
              {isRefining ? 'ĐANG TINH CHỈNH...' : 'TINH CHỈNH'}
            </Button>
          </div>

          <div className="hidden md:block h-8 w-[1px] bg-slate-700"></div>

          <div className="flex items-center gap-2">
            <Button 
              onClick={handleExportCode}
              variant="outline"
              className="border-slate-700 hover:border-amber-500 text-slate-400 hover:text-amber-500 rounded-xl px-6 h-12 text-[10px] font-black uppercase tracking-widest"
            >
              <Code2 size={16} className="mr-2" /> TẢI CODE
            </Button>
            <Button 
              onClick={handleExportPDF}
              variant="outline"
              className="border-slate-700 hover:border-amber-500 text-slate-400 hover:text-amber-500 rounded-xl px-6 h-12 text-[10px] font-black uppercase tracking-widest"
            >
              <Share2 size={16} className="mr-2" /> XUẤT PDF
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
