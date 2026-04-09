import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Zap, 
  Image as ImageIcon, 
  Copy, 
  Trash2, 
  Wand2, 
  ChevronRight, 
  Layout, 
  Cpu, 
  Shield, 
  Rocket,
  Search,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Terminal,
  Layers,
  Box,
  Mic2,
  Scan,
  Globe,
  Database,
  Smartphone,
  Eye,
  Lock,
  Crown,
  Palette,
  LayoutTemplate,
  Download
} from 'lucide-react';
import { 
  CONTENT_CATEGORIES, 
  IMAGE_CATEGORIES, 
  CONTENT_SUGGESTIONS, 
  IMAGE_SUGGESTIONS,
  generateCombinedPrompt 
} from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { Badge } from './ui/badge';
import { toast } from 'sonner';
import { DesignStyle, LayoutTemplateType, PREDEFINED_LAYOUTS } from '../types';

interface ArchitectInputProps {
  onGenerate: (idea: string, style: DesignStyle, template: LayoutTemplateType) => void;
  isLoading: boolean;
}

export const ArchitectInput: React.FC<ArchitectInputProps> = ({ onGenerate, isLoading }) => {
  const [activeTab, setActiveTab] = useState<'content' | 'image'>('content');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedItemIds, setSelectedItemIds] = useState<string[]>([]);
  const [appName, setAppName] = useState('');
  const [userIdea, setUserIdea] = useState('');
  const [designStyle, setDesignStyle] = useState<DesignStyle>('futuristic');
  const [layoutTemplate, setLayoutTemplate] = useState<LayoutTemplateType>('ai_auto');

  const designStyles: { id: DesignStyle; name: string; icon: any }[] = [
    { id: 'minimalist', name: 'Tối giản', icon: Layout },
    { id: 'futuristic', name: 'Tương lai', icon: Cpu },
    { id: 'luxury', name: 'Sang trọng', icon: Crown },
    { id: 'brutalist', name: 'Brutalist', icon: Box },
    { id: 'glassmorphism', name: 'Glassmorphism', icon: Layers }
  ];

  const categories = activeTab === 'content' ? CONTENT_CATEGORIES : IMAGE_CATEGORIES;
  const suggestions = activeTab === 'content' ? CONTENT_SUGGESTIONS : IMAGE_SUGGESTIONS;

  const filteredSuggestions = useMemo(() => {
    if (!selectedCategory) return [];
    return suggestions.filter(s => s.categoryId === selectedCategory);
  }, [selectedCategory, suggestions]);

  const toggleSelection = (id: string) => {
    setSelectedItemIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const megaPrompt = useMemo(() => {
    const selectedItems = suggestions.filter(s => selectedItemIds.includes(s.id));
    return generateCombinedPrompt(selectedItems, activeTab, appName, userIdea);
  }, [activeTab, selectedItemIds, appName, userIdea, suggestions]);

  const handleCopy = () => {
    navigator.clipboard.writeText(megaPrompt);
    toast.success("Đã sao chép Mega Prompt!");
  };

  const handleClear = () => {
    setSelectedCategory(null);
    setSelectedItemIds([]);
    setAppName('');
    setUserIdea('');
    toast.info("Đã xóa tất cả lựa chọn.");
  };

  const handleDownloadTemplate = () => {
    if (layoutTemplate === 'ai_auto') {
      toast.error("Vui lòng chọn một Layout Mẫu cụ thể (SaaS, Portfolio...) để tải code.");
      return;
    }

    const template = PREDEFINED_LAYOUTS[layoutTemplate];
    let code = `import React from 'react';\n`;
    
    const uniqueModules = Array.from(new Set(template.modules));
    uniqueModules.forEach(mod => {
      code += `import { ${mod} } from './components/modules/${mod}';\n`;
    });

    code += `\nexport default function ${layoutTemplate.charAt(0).toUpperCase() + layoutTemplate.slice(1)}Template() {\n  return (\n    <div className="min-h-screen bg-[#020617] text-slate-200">\n`;

    template.modules.forEach(mod => {
      code += `      {/* --- ${mod} --- */}\n`;
      code += `      <${mod} \n        // TODO: Truyền dữ liệu (props) của bạn vào đây\n      />\n\n`;
    });

    code += `    </div>\n  );\n}\n`;

    const blob = new Blob([code], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${layoutTemplate}_template.tsx`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success(`Đã tải bộ khung code cho ${template.name}!`);
  };

  const getCategoryColor = (id: string) => {
    const colors: Record<string, string> = {
      'social': 'from-blue-500 to-cyan-500',
      'business': 'from-emerald-500 to-teal-500',
      'education': 'from-amber-500 to-orange-500',
      'health': 'from-rose-500 to-pink-500',
      'entertainment': 'from-purple-500 to-indigo-500',
      'portrait': 'from-amber-400 to-orange-600',
      'landscape': 'from-green-400 to-emerald-600',
      'abstract': 'from-purple-400 to-pink-600',
      'product': 'from-blue-400 to-indigo-600',
      'scifi': 'from-cyan-400 to-blue-600'
    };
    return colors[id] || 'from-slate-500 to-slate-700';
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* --- LEFT: ARCHITECT CONTROLS --- */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* 1. MODE SELECTION */}
          <Tabs defaultValue="content" onValueChange={(v) => { setActiveTab(v as any); handleClear(); }} className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-slate-900/50 border border-slate-800 p-1 rounded-2xl h-16">
              <TabsTrigger value="content" className="rounded-xl data-[state=active]:bg-amber-500 data-[state=active]:text-black font-black uppercase text-xs tracking-[0.2em] transition-all">
                <Zap size={18} className="mr-2" /> CONTENT AI
              </TabsTrigger>
              <TabsTrigger value="image" className="rounded-xl data-[state=active]:bg-amber-500 data-[state=active]:text-black font-black uppercase text-xs tracking-[0.2em] transition-all">
                <ImageIcon size={18} className="mr-2" /> IMAGE 8K
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* 2. CATEGORY VAULT */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest">Holographic Vault</h3>
              <Badge variant="outline" className="border-amber-500/30 text-amber-500 text-[10px] uppercase">Chọn 1 lĩnh vực</Badge>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { setSelectedCategory(cat.id); setSelectedItemIds([]); }}
                  className={`relative group p-4 rounded-2xl border transition-all overflow-hidden ${
                    selectedCategory === cat.id 
                    ? 'bg-slate-900 border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.3)]' 
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-600'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(cat.id)} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <div className={`p-2 rounded-lg ${selectedCategory === cat.id ? 'bg-amber-500 text-black' : 'bg-slate-800 text-slate-400 group-hover:text-amber-500'}`}>
                      {cat.id === 'social' && <Globe size={16} />}
                      {cat.id === 'business' && <Database size={16} />}
                      {cat.id === 'education' && <Smartphone size={16} />}
                      {cat.id === 'health' && <Shield size={16} />}
                      {cat.id === 'entertainment' && <Sparkles size={16} />}
                      {cat.id === 'portrait' && <Scan size={16} />}
                      {cat.id === 'landscape' && <Globe size={16} />}
                      {cat.id === 'abstract' && <Wand2 size={16} />}
                      {cat.id === 'product' && <Box size={16} />}
                      {cat.id === 'scifi' && <Rocket size={16} />}
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-wider ${selectedCategory === cat.id ? 'text-amber-500' : 'text-slate-500'}`}>
                      {cat.name}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* 3. QUANTUM MODULES */}
          <AnimatePresence mode="wait">
            {selectedCategory && (
              <motion.div 
                key={selectedCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest">Quantum Modules</h3>
                  <span className="text-[10px] font-mono text-slate-600 uppercase">{filteredSuggestions.length} module khả dụng</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {filteredSuggestions.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => toggleSelection(item.id)}
                      className={`group p-4 rounded-2xl border text-left transition-all flex items-center gap-4 ${
                        selectedItemIds.includes(item.id)
                        ? 'bg-amber-500/10 border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.1)]'
                        : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        selectedItemIds.includes(item.id) ? 'bg-amber-500 text-black' : 'bg-slate-800 text-slate-500'
                      }`}>
                        {activeTab === 'content' ? <Mic2 size={18} /> : <ImageIcon size={18} />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className={`text-xs font-black uppercase tracking-wider truncate ${selectedItemIds.includes(item.id) ? 'text-amber-400' : 'text-slate-300'}`}>
                          {item.title}
                        </h4>
                        <p className="text-[10px] text-slate-500 line-clamp-1 italic">{item.topic_desc}</p>
                      </div>
                      {selectedItemIds.includes(item.id) && <CheckCircle2 size={16} className="text-amber-500" />}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 4. DESIGN STYLE SELECTION */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest">Phong cách thiết kế</h3>
              <Badge variant="outline" className="border-amber-500/30 text-amber-500 text-[10px] uppercase">Chọn 1 phong cách</Badge>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {designStyles.map((style) => (
                <motion.button
                  key={style.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setDesignStyle(style.id)}
                  className={`relative group p-4 rounded-2xl border transition-all overflow-hidden ${
                    designStyle === style.id 
                    ? 'bg-slate-900 border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.3)]' 
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-600'
                  }`}
                >
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <div className={`p-2 rounded-lg ${designStyle === style.id ? 'bg-amber-500 text-black' : 'bg-slate-800 text-slate-400 group-hover:text-amber-500'}`}>
                      <style.icon size={16} />
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-wider ${designStyle === style.id ? 'text-amber-500' : 'text-slate-500'}`}>
                      {style.name}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* 5. LAYOUT TEMPLATE SELECTION */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest">Layout Mẫu (Pre-built)</h3>
              <div className="flex gap-2">
                {layoutTemplate !== 'ai_auto' && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleDownloadTemplate}
                    className="h-6 text-[10px] border-amber-500/30 text-amber-500 hover:bg-amber-500/10 uppercase tracking-widest"
                  >
                    <Download size={12} className="mr-1" /> Tải Code Gốc
                  </Button>
                )}
                <Badge variant="outline" className="border-amber-500/30 text-amber-500 text-[10px] uppercase">Chọn 1 cấu trúc</Badge>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {Object.entries(PREDEFINED_LAYOUTS).map(([key, template]) => (
                <motion.button
                  key={key}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setLayoutTemplate(key as LayoutTemplateType)}
                  className={`relative group p-4 rounded-2xl border text-left transition-all overflow-hidden ${
                    layoutTemplate === key 
                    ? 'bg-amber-500/10 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.15)]' 
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg shrink-0 ${layoutTemplate === key ? 'bg-amber-500 text-black' : 'bg-slate-800 text-slate-400'}`}>
                      {key === 'ai_auto' ? <Sparkles size={18} /> : <LayoutTemplate size={18} />}
                    </div>
                    <div>
                      <h4 className={`text-xs font-black uppercase tracking-wider mb-1 ${layoutTemplate === key ? 'text-amber-400' : 'text-slate-300'}`}>
                        {template.name}
                      </h4>
                      <p className="text-[10px] text-slate-500 leading-relaxed">{template.description}</p>
                      {key !== 'ai_auto' && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {template.modules.slice(0, 3).map((m, i) => (
                            <span key={i} className="text-[8px] px-1.5 py-0.5 bg-slate-800 rounded text-slate-400">{m}</span>
                          ))}
                          {template.modules.length > 3 && <span className="text-[8px] px-1.5 py-0.5 bg-slate-800 rounded text-slate-400">+{template.modules.length - 3}</span>}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* 6. CORE INPUTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">App Name</label>
              <Input 
                value={appName}
                onChange={(e) => setAppName(e.target.value)}
                placeholder="VD: MASTER AI PRO"
                className="bg-slate-900/50 border-slate-800 focus:border-amber-500 h-14 rounded-xl text-sm font-bold uppercase tracking-widest"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">User Idea</label>
              <Input 
                value={userIdea}
                onChange={(e) => setUserIdea(e.target.value)}
                placeholder="VD: APP TƯ VẤN LUẬT"
                className="bg-slate-900/50 border-slate-800 focus:border-amber-500 h-14 rounded-xl text-sm font-bold uppercase tracking-widest"
              />
            </div>
          </div>
        </div>

        {/* --- RIGHT: MEGA PROMPT TERMINAL --- */}
        <div className="lg:col-span-5">
          <div className="sticky top-32 space-y-6">
            <div className="relative bg-black border border-slate-800 rounded-[2rem] overflow-hidden shadow-2xl group">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent shadow-[0_0_15px_#f59e0b] animate-scan z-20"></div>
              
              <div className="p-6 border-b border-slate-800 bg-slate-900/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/40"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40"></div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-2">Mega Prompt Terminal</span>
                </div>
                <Badge variant="outline" className="text-[8px] border-amber-500/30 text-amber-500 uppercase">V6.0 Quantum</Badge>
              </div>

              <ScrollArea className="h-[500px] p-6 bg-[#020202]">
                <div className="font-mono text-[11px] leading-relaxed text-amber-500/80 whitespace-pre-wrap">
                  <span className="text-slate-600"># SYSTEM_PERSONA: ARCHITECT_MASTER_AI</span><br/>
                  <span className="text-slate-600"># MODE: {activeTab.toUpperCase()}</span><br/>
                  <span className="text-slate-600"># LAYOUT: {PREDEFINED_LAYOUTS[layoutTemplate].name.toUpperCase()}</span><br/>
                  <span className="text-slate-600"># STATUS: READY_TO_GENERATE</span><br/><br/>
                  {megaPrompt}
                </div>
              </ScrollArea>

              <div className="p-6 bg-slate-900/30 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500">
                  <Terminal size={12} />
                  <span>{selectedItemIds.length} MODULES ACTIVE</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" onClick={handleClear} className="text-slate-500 hover:text-red-500">
                    <Trash2 size={18} />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={handleCopy} className="text-slate-500 hover:text-amber-500">
                    <Copy size={18} />
                  </Button>
                </div>
              </div>
            </div>

            <Button 
              disabled={isLoading || !selectedCategory}
              onClick={() => onGenerate(megaPrompt, designStyle, layoutTemplate)}
              className="w-full h-20 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 hover:scale-[1.02] transition-all rounded-[2rem] shadow-[0_20px_40px_rgba(245,158,11,0.3)] group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
              <div className="relative flex items-center justify-center gap-4">
                {isLoading ? (
                  <>
                    <div className="w-6 h-6 border-4 border-black/20 border-t-black rounded-full animate-spin"></div>
                    <span className="text-lg font-black text-black tracking-[0.2em] uppercase">ĐANG ĐÚC KIẾN TRÚC...</span>
                  </>
                ) : (
                  <>
                    <Crown size={24} className="text-black group-hover:rotate-12 transition-transform" />
                    <span className="text-lg font-black text-black tracking-[0.2em] uppercase">ĐÚC BẢN VẼ MASTER</span>
                    <ChevronRight size={24} className="text-black group-hover:translate-x-2 transition-transform" />
                  </>
                )}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
