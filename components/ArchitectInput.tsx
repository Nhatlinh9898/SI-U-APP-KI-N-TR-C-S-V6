

import React, { useState, useEffect, useMemo } from 'react';
import { Sparkles, ArrowRight, Command, Grid, Zap, PenTool, Image as ImageIcon, Terminal, Cpu, LayoutGrid, Layers, Copy, Check, Briefcase, Home, TrendingUp, Megaphone, Heart, Share2, BookOpen, Sun, Cpu as TechIcon, ShoppingCart, Coffee, Palette, Scale, Users, Rocket, Mic2, Sprout, Shirt, Smile, Dog, Car, Newspaper, ScrollText, FlaskConical, Quote, Code2, Gamepad2, Music, Clapperboard, Camera, Box, Landmark, Palette as ArtIcon, Film, Gamepad, Trees, Feather, Gem, Ghost, Eye, Droplets, Plane, PenTool as DrawIcon, Activity, Key, CheckSquare, Square, Trash2, ChevronDown, ChevronUp, UserRound, ShoppingBag, Wand2, Armchair, MapPin, Trophy, Waves, Brush, Pencil, CarFront, Diamond, Utensils, Baby, HeartHandshake, Stamp, Shapes, Leaf, Package, ScanFace, Type, Lightbulb, Star, Play, Infinity, Maximize, Minimize, Ratio, XCircle, ArrowUp } from 'lucide-react';
import { 
  CONTENT_SUGGESTIONS, 
  IMAGE_SUGGESTIONS, 
  CONTENT_CATEGORIES,
  IMAGE_CATEGORIES,
  generateCombinedPrompt
} from '../constants';

interface Props {
  onGenerate: (idea: string) => void;
  isLoading: boolean;
}

// --- GOD MODE COLOR SYSTEM ---
const getCategoryStyle = (catId: string) => {
  // GOLD / WEALTH
  if (['biz', 'invest', 'realestate', 'jewelry', 'cars', 'cars_img', 'watch'].includes(catId)) {
    return {
      text: 'text-amber-300',
      bg: 'bg-gradient-to-br from-amber-500/20 to-yellow-900/20',
      border: 'border-amber-500/50',
      glow: 'shadow-[0_0_30px_rgba(245,158,11,0.2)]',
      gradient: 'from-[#FFD700] via-[#FDB931] to-[#9E7C0F]', // Gold Gradient
      ring: 'ring-amber-500/40'
    };
  }
  // NEON CYAN / TECH
  if (['tech', 'code', 'startup', 'cyberpunk', 'game', 'game_script', 'drone', '3d'].includes(catId)) {
    return {
      text: 'text-cyan-300',
      bg: 'bg-gradient-to-br from-cyan-500/20 to-blue-900/20',
      border: 'border-cyan-500/50',
      glow: 'shadow-[0_0_30px_rgba(34,211,238,0.2)]',
      gradient: 'from-[#00FFFF] via-[#00CED1] to-[#008B8B]', // Electric Cyan
      ring: 'ring-cyan-500/40'
    };
  }
  // VELVET ROSE / PASSION
  if (['love', 'wedding', 'fashion', 'fashion_txt', 'beauty', 'makeup', 'parenting', 'baby', 'family'].includes(catId)) {
    return {
      text: 'text-rose-300',
      bg: 'bg-gradient-to-br from-rose-500/20 to-pink-900/20',
      border: 'border-rose-500/50',
      glow: 'shadow-[0_0_30px_rgba(251,113,133,0.2)]',
      gradient: 'from-[#FF0080] via-[#FF66B2] to-[#C71585]', // Deep Rose
      ring: 'ring-rose-500/40'
    };
  }
  // MYSTIC PURPLE / CREATIVE
  if (['creative', 'art', 'music', 'cinema', 'movie', 'abstract', 'fantasy', 'magic', 'tarot', 'spirit', 'philosophy'].includes(catId)) {
    return {
      text: 'text-fuchsia-300',
      bg: 'bg-gradient-to-br from-fuchsia-500/20 to-purple-900/20',
      border: 'border-fuchsia-500/50',
      glow: 'shadow-[0_0_30px_rgba(232,121,249,0.2)]',
      gradient: 'from-[#E0B0FF] via-[#DA70D6] to-[#800080]', // Amethyst
      ring: 'ring-fuchsia-500/40'
    };
  }
  // EMERALD / LIFE
  if (['health', 'nature', 'agri', 'food', 'pets', 'sprout', 'garden', 'tea'].includes(catId)) {
    return {
      text: 'text-emerald-300',
      bg: 'bg-gradient-to-br from-emerald-500/20 to-green-900/20',
      border: 'border-emerald-500/50',
      glow: 'shadow-[0_0_30px_rgba(52,211,153,0.2)]',
      gradient: 'from-[#50C878] via-[#00FF7F] to-[#228B22]', // Emerald
      ring: 'ring-emerald-500/40'
    };
  }
  // SAPPHIRE / PRO
  if (['law', 'edu', 'news', 'hr', 'science', 'history', 'doc'].includes(catId)) {
    return {
      text: 'text-blue-300',
      bg: 'bg-gradient-to-br from-blue-500/20 to-indigo-900/20',
      border: 'border-blue-500/50',
      glow: 'shadow-[0_0_30px_rgba(96,165,250,0.2)]',
      gradient: 'from-[#4169E1] via-[#1E90FF] to-[#00008B]', // Sapphire
      ring: 'ring-blue-500/40'
    };
  }
  // DEFAULT / PLATINUM
  return {
    text: 'text-slate-300',
    bg: 'bg-gradient-to-br from-slate-500/20 to-gray-900/20',
    border: 'border-slate-500/50',
    glow: 'shadow-none',
    gradient: 'from-[#E5E4E2] via-[#C0C0C0] to-[#A9A9A9]', // Platinum
    ring: 'ring-slate-500/40'
  };
};

const getCategoryIcon = (catId: string, isContent: boolean) => {
  let IconComponent = Layers;
  
  if (isContent) {
    switch (catId) {
      case 'biz': IconComponent = Briefcase; break;
      case 'realestate': IconComponent = Home; break;
      case 'invest': IconComponent = TrendingUp; break;
      case 'marketing': IconComponent = Megaphone; break;
      case 'health': IconComponent = Activity; break;
      case 'social': IconComponent = Share2; break;
      case 'edu': IconComponent = BookOpen; break;
      case 'spirit': IconComponent = Sun; break;
      case 'tech': IconComponent = TechIcon; break;
      case 'ecom': IconComponent = ShoppingCart; break;
      case 'travel': IconComponent = Plane; break;
      case 'creative': IconComponent = Palette; break;
      case 'law': IconComponent = Scale; break;
      case 'hr': IconComponent = Users; break;
      case 'startup': IconComponent = Rocket; break;
      case 'event': IconComponent = Mic2; break;
      case 'agri': IconComponent = Sprout; break;
      case 'fashion_txt': IconComponent = Shirt; break;
      case 'love': IconComponent = Heart; break;
      case 'parenting': IconComponent = Smile; break;
      case 'pets': IconComponent = Dog; break;
      case 'cars': IconComponent = Car; break;
      case 'news': IconComponent = Newspaper; break;
      case 'history': IconComponent = ScrollText; break;
      case 'science': IconComponent = FlaskConical; break;
      case 'philosophy': IconComponent = Quote; break;
      case 'code': IconComponent = Code2; break;
      case 'game_script': IconComponent = Gamepad2; break;
      case 'music': IconComponent = Music; break;
      case 'cinema': IconComponent = Clapperboard; break;
      default: IconComponent = Layers;
    }
  } else {
    switch (catId) {
      case 'portrait': IconComponent = UserRound; break;
      case 'fashion': IconComponent = Shirt; break;
      case 'product': IconComponent = ShoppingBag; break;
      case 'arch': IconComponent = Landmark; break;
      case 'art': IconComponent = Palette; break;
      case 'movie': IconComponent = Clapperboard; break;
      case 'game': IconComponent = Gamepad2; break;
      case 'anime': IconComponent = Sparkles; break;
      case 'nature': IconComponent = Leaf; break;
      case 'logo': IconComponent = Stamp; break;
      case 'wedding': IconComponent = HeartHandshake; break;
      case 'family': IconComponent = Users; break;
      case 'baby': IconComponent = Baby; break;
      case 'food': IconComponent = Utensils; break;
      case 'jewelry': IconComponent = Diamond; break;
      case 'cars_img': IconComponent = CarFront; break;
      case 'cyberpunk': IconComponent = Zap; break;
      case 'fantasy': IconComponent = Wand2; break;
      case 'horror': IconComponent = Ghost; break;
      case 'abstract': IconComponent = Shapes; break;
      case 'interior': IconComponent = Armchair; break;
      case 'macro': IconComponent = Eye; break;
      case 'street': IconComponent = MapPin; break;
      case 'sports': IconComponent = Trophy; break;
      case 'underwater': IconComponent = Waves; break;
      case 'drone': IconComponent = Plane; break;
      case '3d': IconComponent = Box; break;
      case 'oil': IconComponent = Brush; break;
      case 'sketch': IconComponent = Pencil; break;
      case 'tattoo': IconComponent = PenTool; break;
      default: IconComponent = ImageIcon;
    }
  }

  return <IconComponent size={28} strokeWidth={1.5} />;
};

export const ArchitectInput: React.FC<Props> = ({ onGenerate, isLoading }) => {
  const [activeTab, setActiveTab] = useState<'content' | 'image'>('content');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedItemIds, setSelectedItemIds] = useState<Set<string>>(new Set());
  const [copiedPrompt, setCopiedPrompt] = useState<boolean>(false);
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState<boolean>(true);
  
  const [appName, setAppName] = useState<string>(""); 
  const [userIdea, setUserIdea] = useState<string>("");

  const categories = activeTab === 'content' ? CONTENT_CATEGORIES : IMAGE_CATEGORIES;
  const allSuggestions = activeTab === 'content' ? CONTENT_SUGGESTIONS : IMAGE_SUGGESTIONS;
  
  useEffect(() => {
    if (categories.length > 0) setActiveCategory(categories[0].id);
    setSelectedItemIds(new Set()); 
    setIsSuggestionsOpen(true);
    setUserIdea(""); 
  }, [activeTab]);

  const filteredSuggestions = activeCategory ? allSuggestions.filter(s => s.categoryId === activeCategory) : allSuggestions;

  const selectedItems = useMemo(() => {
    return allSuggestions.filter(item => selectedItemIds.has(item.id));
  }, [selectedItemIds, allSuggestions]);

  const megaPrompt = useMemo(() => {
    return generateCombinedPrompt(selectedItems, activeTab, appName, userIdea, undefined, undefined);
  }, [selectedItems, activeTab, appName, userIdea]);

  const toggleSelection = (id: string) => {
    const newSet = new Set(selectedItemIds);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelectedItemIds(newSet);
  };

  const clearSelection = () => setSelectedItemIds(new Set());

  const handleCopyPrompt = () => {
    if (!megaPrompt) return;
    navigator.clipboard.writeText(megaPrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const handleRunIdea = () => {
    const promptElement = document.getElementById('mega-prompt-container');
    if (promptElement) {
      promptElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      promptElement.classList.add('ring-4', 'ring-white/50', 'scale-[1.02]');
      setTimeout(() => {
        promptElement.classList.remove('ring-4', 'ring-white/50', 'scale-[1.02]');
      }, 500);
    }
  };

  return (
    <div className="w-full max-w-[1800px] mx-auto space-y-12 animate-fadeIn px-6 pb-32 relative">
      
      {/* 1. INFINITY DOCK SWITCHER */}
      <div className="flex justify-center mb-16 relative z-30">
        <div className="relative group">
           {/* Ambient Glow */}
           <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] blur-[60px] rounded-full transition-all duration-700 ${activeTab === 'content' ? 'bg-cyan-500/30' : 'bg-amber-500/30'}`}></div>
           
           <div className="bg-[#030303]/80 backdrop-blur-2xl p-2 rounded-full border border-white/10 flex gap-2 shadow-[0_20px_60px_rgba(0,0,0,0.9)] relative overflow-hidden ring-1 ring-white/5">
             
             {/* CONTENT AI BUTTON */}
             <button 
                onClick={() => setActiveTab('content')} 
                className={`relative px-12 py-6 rounded-full flex items-center gap-4 transition-all duration-500 group/btn overflow-hidden ${activeTab === 'content' ? 'bg-black border border-cyan-500/50 shadow-[inset_0_0_20px_rgba(6,182,212,0.2)]' : 'hover:bg-white/5 border border-transparent'}`}
             >
                {activeTab === 'content' && <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-50"></div>}
                <div className={`p-3 rounded-full transition-all duration-500 ${activeTab === 'content' ? 'bg-cyan-500 text-black shadow-[0_0_20px_cyan]' : 'bg-gray-800 text-gray-400 group-hover/btn:text-gray-200'}`}>
                   <PenTool size={24} strokeWidth={2} />
                </div>
                <div className="text-left">
                   <span className={`block text-[10px] font-bold tracking-[0.3em] uppercase ${activeTab === 'content' ? 'text-cyan-400' : 'text-gray-500'}`}>ĐỘNG CƠ V6.0</span>
                   <span className={`block text-xl font-black tracking-tighter uppercase ${activeTab === 'content' ? 'text-white' : 'text-gray-400'}`}>CONTENT AI</span>
                </div>
             </button>

             {/* DIVIDER */}
             <div className="w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent my-4"></div>

             {/* IMAGE 8K BUTTON */}
             <button 
                onClick={() => setActiveTab('image')} 
                className={`relative px-12 py-6 rounded-full flex items-center gap-4 transition-all duration-500 group/btn overflow-hidden ${activeTab === 'image' ? 'bg-black border border-amber-500/50 shadow-[inset_0_0_20px_rgba(245,158,11,0.2)]' : 'hover:bg-white/5 border border-transparent'}`}
             >
                {activeTab === 'image' && <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-50"></div>}
                <div className={`p-3 rounded-full transition-all duration-500 ${activeTab === 'image' ? 'bg-amber-500 text-black shadow-[0_0_20px_orange]' : 'bg-gray-800 text-gray-400 group-hover/btn:text-gray-200'}`}>
                   <ImageIcon size={24} strokeWidth={2} />
                </div>
                <div className="text-left">
                   <span className={`block text-[10px] font-bold tracking-[0.3em] uppercase ${activeTab === 'image' ? 'text-amber-400' : 'text-gray-500'}`}>ĐỘNG CƠ V28.0</span>
                   <span className={`block text-xl font-black tracking-tighter uppercase ${activeTab === 'image' ? 'text-white' : 'text-gray-400'}`}>HÌNH ẢNH 8K</span>
                </div>
             </button>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 2xl:grid-cols-12 gap-10">
        
        {/* LEFT COLUMN: CONTROL CENTER (8 cols) */}
        <div className="2xl:col-span-8 space-y-8 flex flex-col">
           
           {/* A. INPUT MATRIX */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* App Name Input - Obsidian Glass */}
              <div className="group relative">
                 <div className={`absolute -inset-0.5 rounded-[2rem] bg-gradient-to-r opacity-30 blur transition duration-500 group-hover:opacity-70 ${activeTab === 'content' ? 'from-cyan-600 to-blue-600' : 'from-amber-600 to-red-600'}`}></div>
                 <div className="relative h-full bg-[#050505] p-6 rounded-[2rem] border border-white/10 flex flex-col gap-4 overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                       <Type size={100} strokeWidth={0.5} />
                    </div>
                    <div className="flex items-center gap-4 z-10">
                       <div className={`p-3 rounded-xl border border-white/10 ${activeTab === 'content' ? 'bg-cyan-950/30 text-cyan-400' : 'bg-amber-950/30 text-amber-400'}`}>
                          <Layers size={24} />
                       </div>
                       <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">ĐỊNH DANH ỨNG DỤNG</label>
                    </div>
                    <input 
                      type="text" 
                      value={appName}
                      onChange={(e) => setAppName(e.target.value)}
                      placeholder="NHẬP TÊN APP MONG MUỐN..."
                      className="w-full bg-transparent text-2xl font-black text-white placeholder-gray-800 outline-none border-none p-0 focus:ring-0 uppercase tracking-tight z-10"
                    />
                 </div>
              </div>

              {/* Idea Input - Obsidian Glass */}
              <div className="group relative">
                 <div className={`absolute -inset-0.5 rounded-[2rem] bg-gradient-to-r opacity-30 blur transition duration-500 group-hover:opacity-70 ${activeTab === 'content' ? 'from-blue-600 to-cyan-600' : 'from-red-600 to-amber-600'}`}></div>
                 <div className="relative h-full bg-[#050505] p-6 rounded-[2rem] border border-white/10 flex flex-col gap-4 overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                       <Lightbulb size={100} strokeWidth={0.5} />
                    </div>
                    <div className="flex items-center justify-between z-10">
                       <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl border border-white/10 ${activeTab === 'content' ? 'bg-cyan-950/30 text-cyan-400' : 'bg-amber-950/30 text-amber-400'}`}>
                              <Sparkles size={24} />
                          </div>
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Ý TƯỞNG CỐT LÕI</label>
                       </div>
                       <button onClick={handleRunIdea} className={`p-3 rounded-xl transition-all hover:scale-105 active:scale-95 ${activeTab === 'content' ? 'bg-cyan-600 text-white shadow-[0_0_15px_cyan]' : 'bg-amber-600 text-white shadow-[0_0_15px_orange]'}`}>
                          <Play size={18} fill="currentColor" />
                       </button>
                    </div>
                    <input 
                      type="text" 
                      value={userIdea}
                      onChange={(e) => setUserIdea(e.target.value)}
                      placeholder="MÔ TẢ Ý TƯỞNG CỦA BẠN..."
                      className="w-full bg-transparent text-xl font-medium text-gray-300 placeholder-gray-800 outline-none border-none p-0 focus:ring-0 z-10"
                    />
                 </div>
              </div>
           </div>

           {/* B. HOLOGRAPHIC VAULT (Category Selection) */}
          <div className="relative group/vault">
            <div className="absolute -inset-[1px] bg-gradient-to-b from-white/10 to-transparent rounded-[2.5rem] pointer-events-none"></div>
            <div className="bg-[#080808] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
                
                {/* Vault Header */}
                <div className="flex items-center justify-between mb-8">
                   <div className="flex items-center gap-3">
                      <div className="w-1.5 h-8 bg-gradient-to-b from-white to-gray-600 rounded-full"></div>
                      <h3 className="text-sm font-black text-white uppercase tracking-[0.3em]">
                        KHO DỮ LIỆU <span className="text-gray-600">///</span> CHỦ ĐỀ
                      </h3>
                   </div>
                   <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                   </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 max-h-[400px] overflow-y-auto custom-scrollbar pr-2 relative z-10">
                  {categories.map((cat) => {
                    const isActive = activeCategory === cat.id;
                    const style = getCategoryStyle(cat.id);
                    
                    return (
                      <button 
                        key={cat.id} 
                        onClick={() => setActiveCategory(cat.id)} 
                        className={`relative group/item h-28 rounded-2xl border transition-all duration-500 ease-out flex flex-col items-center justify-center gap-3 overflow-hidden ${isActive ? `bg-black border-transparent ${style.ring} ring-1` : 'bg-[#0f0f0f] border-white/5 hover:bg-[#151515] hover:border-white/10'}`}
                      >
                          {/* Active Background Effect */}
                          {isActive && (
                            <>
                              <div className={`absolute inset-0 bg-gradient-to-b ${style.gradient} opacity-10`}></div>
                              <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]`}></div>
                              <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r ${style.gradient} shadow-[0_0_20px_currentColor]`}></div>
                            </>
                          )}
                          
                          {/* Icon */}
                          <div className={`relative z-10 transition-transform duration-500 ${isActive ? `scale-110 ${style.text} drop-shadow-[0_0_10px_currentColor]` : 'text-gray-600 group-hover/item:text-gray-400 scale-100'}`}>
                            {getCategoryIcon(cat.id, activeTab === 'content')}
                          </div>
                          
                          <span className={`relative z-10 text-[9px] font-black uppercase tracking-wider text-center leading-tight transition-colors ${isActive ? 'text-white' : 'text-gray-600 group-hover/item:text-gray-400'}`}>
                            {cat.name}
                          </span>
                      </button>
                    );
                  })}
                </div>
            </div>
          </div>
          
          {/* D. QUANTUM MODULES (Sub-topics) */}
          <div className="bg-[#080808]/80 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden flex-grow mb-20 transition-all duration-500">
             {/* Background Grid Pattern */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>
             
             <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-6 relative z-10">
               <div className="flex items-center gap-6">
                 {/* Dynamic Category Pill */}
                 {activeCategory && (() => {
                    const style = getCategoryStyle(activeCategory);
                    return (
                      <div className={`px-4 py-2 rounded-lg bg-black border ${style.border} flex items-center gap-3 shadow-lg`}>
                        <div className={`w-2 h-2 rounded-full ${style.bg} ${style.glow} animate-pulse`}></div>
                        <span className={`text-xs font-bold uppercase tracking-widest ${style.text}`}>{categories.find(c => c.id === activeCategory)?.name}</span>
                      </div>
                    );
                 })()}
                 
                 <div className="h-8 w-[1px] bg-white/10"></div>

                 <div>
                   <h3 className="text-sm font-black text-white uppercase tracking-[0.2em] flex items-center gap-2">
                     MODULE ĐÃ KÍCH HOẠT <span className="bg-white/10 text-white px-2 py-0.5 rounded text-[10px]">{filteredSuggestions.length}</span>
                   </h3>
                 </div>
               </div>
               
               <div className="flex gap-2">
                 <button 
                  onClick={() => setIsSuggestionsOpen(true)}
                  className={`px-4 py-2 rounded-lg border flex items-center gap-2 transition-all text-[10px] font-bold uppercase tracking-wider ${isSuggestionsOpen ? 'bg-white/10 text-white border-white/20' : 'bg-black text-gray-500 border-white/10 hover:bg-white/5'}`}
                 >
                   <Maximize size={14} /> MỞ RỘNG
                 </button>
                 <button 
                  onClick={() => setIsSuggestionsOpen(false)}
                  className={`px-4 py-2 rounded-lg border flex items-center gap-2 transition-all text-[10px] font-bold uppercase tracking-wider ${!isSuggestionsOpen ? 'bg-red-500/20 text-red-400 border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.2)]' : 'bg-black text-gray-500 border-white/10 hover:bg-white/5'}`}
                 >
                   <Minimize size={14} /> THU GỌN
                 </button>
               </div>
             </div>
             
             {isSuggestionsOpen && (
               <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-h-[600px] overflow-y-auto custom-scrollbar pr-2 relative z-10 animate-fadeIn">
                  {filteredSuggestions.slice(0, 24).map((item) => {
                    const isSelected = selectedItemIds.has(item.id);
                    const style = getCategoryStyle(item.categoryId);
                    
                    const activeCard = `bg-[#0A0A0A] border-${style.text.split('-')[1]}-500/50 shadow-[0_0_20px_rgba(0,0,0,0.8)]`;
                    const inactiveCard = 'bg-[#0A0A0A] border-white/5 hover:border-white/20 hover:bg-[#111]';
                    
                    return (
                      <div 
                        key={item.id} 
                        onClick={() => toggleSelection(item.id)}
                        className={`cursor-pointer group relative p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${isSelected ? activeCard : inactiveCard}`}
                      >
                         {/* Selection Indicator */}
                         <div className={`w-1 h-full absolute left-0 top-0 bottom-0 rounded-l-2xl transition-all ${isSelected ? `bg-${style.text.split('-')[1]}-500` : 'bg-transparent'}`}></div>

                         <div className={`shrink-0 p-2.5 rounded-xl ${isSelected ? `bg-${style.text.split('-')[1]}-500/20 text-${style.text.split('-')[1]}-300` : 'bg-white/5 text-gray-600 group-hover:text-gray-400'}`}>
                           {getCategoryIcon(item.categoryId, activeTab === 'content')}
                         </div>
                         
                         <div className="flex-grow pt-1">
                            <h4 className={`text-xs font-bold leading-relaxed uppercase tracking-wide transition-colors ${isSelected ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                              {item.title}
                            </h4>
                            {isSelected && <div className={`h-[1px] w-full mt-3 bg-gradient-to-r ${style.gradient} opacity-50`}></div>}
                         </div>

                         <div className={`self-center ${isSelected ? style.text : 'text-gray-800'}`}>
                            {isSelected ? <CheckSquare size={16} /> : <Square size={16} />}
                         </div>
                      </div>
                    )
                  })}
               </div>
             )}
          </div>

        </div>

        {/* RIGHT COLUMN: MEGA PROMPT TERMINAL (4 cols) */}
        <div className="2xl:col-span-4 flex flex-col h-full">
           
           <div id="mega-prompt-container" className="sticky top-8 bg-[#020202] rounded-[2.5rem] border border-white/10 flex-grow flex flex-col shadow-2xl relative overflow-hidden group h-[85vh] transition-all duration-300">
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>
              
              {/* Top Neon Bar */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${activeTab === 'content' ? 'from-cyan-500 via-white to-cyan-500 shadow-[0_0_20px_cyan]' : 'from-amber-500 via-white to-amber-500 shadow-[0_0_20px_orange]'} z-20`}></div>
              
              {/* Header */}
              <div className="relative z-10 flex justify-between items-center p-8 border-b border-white/5 bg-[#050505]/90 backdrop-blur-md">
                 <div className="flex items-center gap-4">
                   <div className={`w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 ${activeTab === 'content' ? 'bg-cyan-900/20 text-cyan-400' : 'bg-amber-900/20 text-amber-400'}`}>
                      <Terminal size={20} />
                   </div>
                   <div>
                      <h3 className="text-sm font-black text-white tracking-[0.2em] uppercase">LÕI LƯỢNG TỬ</h3>
                      <div className="flex items-center gap-2 mt-1">
                         <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                         <p className="text-[9px] text-green-500 font-mono">HỆ THỐNG SẴN SÀNG</p>
                      </div>
                   </div>
                 </div>
                 {selectedItems.length > 0 && (
                     <button onClick={clearSelection} className="group flex items-center gap-2 px-3 py-1.5 rounded-lg border border-red-900/30 bg-red-950/10 text-red-500 hover:bg-red-500 hover:text-white transition-all">
                       <Trash2 size={14} /> <span className="text-[9px] font-bold uppercase">XÓA</span>
                     </button>
                   )}
              </div>

              {/* Terminal Content */}
              <div className="relative z-10 flex-grow bg-[#050505] p-0 overflow-hidden flex flex-col">
                 {megaPrompt && (appName || selectedItems.length > 0 || userIdea) ? (
                   <div className="h-full overflow-y-auto custom-scrollbar p-6 space-y-4 font-mono text-sm leading-loose">
                      <div className="flex items-center gap-2 text-gray-500 text-[10px] uppercase tracking-widest border-b border-white/5 pb-2 mb-4">
                        <span>/// DỮ LIỆU ĐẦU RA LÚC {new Date().toLocaleTimeString()}</span>
                      </div>
                      
                      <div className={activeTab === 'content' ? 'text-cyan-100/90' : 'text-amber-100/90'}>
                         {megaPrompt.split('\n').map((line, i) => (
                           <div key={i} className="flex gap-4">
                              <span className="text-gray-800 select-none w-6 text-right shrink-0">{i+1}</span>
                              <span className="whitespace-pre-wrap">{line}</span>
                           </div>
                         ))}
                      </div>
                      
                      {/* Blinking Cursor */}
                      <div className={`w-2 h-4 ${activeTab === 'content' ? 'bg-cyan-500' : 'bg-amber-500'} animate-pulse mt-2`}></div>
                   </div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center text-gray-800 space-y-8 opacity-50">
                      <div className="relative">
                         <div className="absolute inset-0 bg-white/5 blur-xl rounded-full animate-pulse"></div>
                         <LayoutGrid size={100} strokeWidth={0.5} />
                      </div>
                      <div className="text-center space-y-2">
                        <p className="text-xs font-black tracking-[0.3em] text-gray-600">ĐANG CHỜ LỆNH NHẬP...</p>
                        <p className="text-[9px] font-mono text-gray-700">VUI LÒNG CẤU HÌNH MODULE ĐỂ KHỞI CHẠY</p>
                      </div>
                   </div>
                 )}
              </div>

              {/* Footer Status Only (Button Moved to Float) */}
              <div className="relative z-10 p-4 bg-[#050505] border-t border-white/5">
                 <div className="flex justify-between text-[8px] font-mono text-gray-600 uppercase tracking-widest px-1">
                    <span>KẾT NỐI BẢO MẬT</span>
                    <span>THIỆN MASTER AI © 2024</span>
                 </div>
              </div>
           </div>
        </div>

      </div>

      {/* --- FLOATING ACTION DOCK (STICKY BOTTOM - THE ULTIMATE EXPERIENCE) --- */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4 animate-fadeInUp pointer-events-none">
         <div className="pointer-events-auto bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 rounded-full p-2 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-center justify-between gap-6 ring-1 ring-white/5 group hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:bg-black">
            
            {/* Status Info */}
            <div className="pl-6 flex items-center gap-4">
               <div className={`w-2 h-2 rounded-full animate-pulse ${activeTab === 'content' ? 'bg-cyan-500' : 'bg-amber-500'}`}></div>
               <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">MODULE KÍCH HOẠT</span>
                  <span className={`text-sm font-black tracking-widest ${activeTab === 'content' ? 'text-cyan-400' : 'text-amber-400'}`}>
                    {selectedItems.length.toString().padStart(2, '0')} <span className="text-gray-600 text-[10px] font-medium">/ 24</span>
                  </span>
               </div>
            </div>

            {/* Vertical Divider */}
            <div className="w-[1px] h-8 bg-white/10"></div>

            {/* Floating Action Button */}
            <button 
              onClick={handleCopyPrompt}
              disabled={!megaPrompt || (!appName && selectedItems.length === 0 && !userIdea)}
              className={`relative px-10 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-lg flex items-center gap-3 transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed overflow-hidden ${activeTab === 'content' ? 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)]' : 'bg-amber-500 text-black hover:bg-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.4)]'}`}
            >
               {/* Shine Effect */}
               <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-700 ease-in-out"></div>
               
               {copiedPrompt ? <Check size={18} strokeWidth={3} /> : <Copy size={18} strokeWidth={3} />} 
               <span>{copiedPrompt ? "ĐÃ SAO CHÉP!" : "TẠO SIÊU PROMPT"}</span>
            </button>
         </div>
      </div>

    </div>
  );
};
