import React, { useState, useEffect } from 'react';
import { ArchitectInput } from './components/ArchitectInput';
import { BlueprintDisplay } from './components/BlueprintDisplay';
import { generateBlueprint } from './services/geminiService';
import { AppBlueprint, DesignStyle } from './types';
import { 
  Crown, Sparkles, Star, Facebook, Phone, Gift, Heart, ShieldCheck, Lock, 
  ChevronRight, ScanFace, KeyRound, Unlock, Fingerprint, Atom, Globe2,
  History, Trash2, LayoutDashboard, LogOut, Menu, X, LogIn, Search as SearchIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Toaster, toast } from 'sonner';
import { Button } from './components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './components/ui/sheet';
import { ScrollArea } from './components/ui/scroll-area';
import { Badge } from './components/ui/badge';
import { Input } from './components/ui/input';
import { 
  auth, 
  db, 
  googleProvider, 
  signInWithPopup, 
  onAuthStateChanged, 
  collection, 
  addDoc, 
  query, 
  where, 
  orderBy, 
  onSnapshot, 
  serverTimestamp,
  handleFirestoreError,
  OperationType,
  User,
  deleteDoc,
  doc,
  getDocs
} from './firebase';

// --- LOGIN SCREEN COMPONENT (SIÊU CẤP VIP PRO EDITION) ---
const LoginScreen: React.FC = () => {
  const [passcode, setPasscode] = useState('');
  const [isPasscodeValid, setIsPasscodeValid] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePasscodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      if (passcode.toLowerCase() === 'sieuvip') {
        setIsPasscodeValid(true);
        setLoading(false);
        toast.success("Mã VIP hợp lệ. Vui lòng xác thực danh tính.");
      } else {
        setError(true);
        setLoading(false);
        setPasscode('');
        toast.error("Mã truy cập không chính xác.");
      }
    }, 1200);
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Chào mừng Master quay trở lại.");
    } catch (err) {
      console.error(err);
      toast.error("Xác thực thất bại. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden font-sans"
    >
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-[#020205]"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] bg-[radial-gradient(circle,_rgba(245,158,11,0.15)_0%,_rgba(0,0,0,0)_70%)] animate-pulse-slow"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-amber-500/10 rounded-full animate-spin-slow"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-dashed border-amber-500/10 rounded-full animate-reverse-spin"></div>
         
         <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-twinkle delay-100"></div>
         <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-amber-200 rounded-full animate-twinkle delay-300"></div>
         <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-twinkle delay-700"></div>
      </div>

      <div className="relative z-10 w-full max-w-[500px] px-4">
         <div className="absolute -inset-[2px] bg-gradient-to-br from-amber-400 via-transparent to-amber-600 rounded-[2.5rem] opacity-70 blur-sm"></div>
         
         <div className="relative bg-[#0a0a0a]/90 backdrop-blur-3xl border border-amber-500/30 rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_100px_rgba(245,158,11,0.2)] overflow-hidden group">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-b from-amber-500/10 to-transparent pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_15px_#f59e0b] animate-scan z-20"></div>

            <div className="flex flex-col items-center text-center space-y-10 relative z-30">
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
                     <h2 className="text-[10px] md:text-xs font-bold text-amber-500/60 tracking-[0.5em] uppercase">
                        CỔNG KẾT NỐI
                     </h2>
                     <h1 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-amber-300 to-amber-600 uppercase tracking-wider drop-shadow-sm leading-tight">
                        APP ĐA VŨ TRỤ<br/>
                        <span className="text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">SIÊU CẤP VIP PRO</span>
                     </h1>
                  </div>
               </div>

               <AnimatePresence mode="wait">
                 {!isPasscodeValid ? (
                   <motion.form 
                     key="passcode"
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: 20 }}
                     onSubmit={handlePasscodeSubmit} 
                     className="w-full space-y-6"
                   >
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

                      <button 
                        type="submit"
                        disabled={loading}
                        className="w-full relative group/btn overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 rounded-2xl transition-all duration-300 group-hover/btn:scale-105 group-hover/btn:shadow-[0_0_40px_rgba(245,158,11,0.6)]"></div>
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
                   </motion.form>
                 ) : (
                   <motion.div 
                     key="google"
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     className="w-full space-y-6"
                   >
                      <button 
                        onClick={handleGoogleLogin}
                        disabled={loading}
                        className="w-full relative group/btn overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-white rounded-2xl transition-all duration-300 group-hover/btn:scale-105 group-hover/btn:shadow-[0_0_40px_rgba(255,255,255,0.3)]"></div>
                        <div className="relative px-8 py-5 flex items-center justify-center gap-3">
                           {loading ? (
                              <>
                                 <ScanFace size={20} className="text-black animate-spin" />
                                 <span className="text-sm font-black text-black tracking-[0.2em] uppercase">ĐANG KẾT NỐI...</span>
                              </>
                           ) : (
                              <>
                                 <LogIn size={20} className="text-black" />
                                 <span className="text-sm font-black text-black tracking-[0.2em] uppercase">XÁC THỰC GOOGLE</span>
                              </>
                           )}
                        </div>
                      </button>
                      <p className="text-[10px] font-bold text-amber-500/40 uppercase tracking-widest">Yêu cầu tài khoản Master được ủy quyền</p>
                   </motion.div>
                 )}
               </AnimatePresence>

               <div className="h-6">
                 {error && (
                   <div className="flex items-center gap-2 text-red-500 animate-shake justify-center">
                      <ShieldCheck size={14} />
                      <span className="text-[10px] font-black tracking-[0.2em] uppercase">MÃ TRUY CẬP TỪ CHỐI</span>
                   </div>
                 )}
               </div>

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
    </motion.div>
  );
};

// --- MAIN APP COMPONENT ---
const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [blueprint, setBlueprint] = useState<AppBlueprint | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefining, setIsRefining] = useState(false);
  const [history, setHistory] = useState<AppBlueprint[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentStyle, setCurrentStyle] = useState<DesignStyle>('futuristic');

  const filteredHistory = history.filter(item => {
    const appName = item?.summary?.app_name || '';
    const industry = item?.summary?.industry || '';
    const query = searchQuery.toLowerCase();
    return appName.toLowerCase().includes(query) || industry.toLowerCase().includes(query);
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsAuthReady(true);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) {
      setHistory([]);
      return;
    }

    const q = query(
      collection(db, 'blueprints'),
      where('userId', '==', user.uid),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map(doc => doc.data() as AppBlueprint);
      setHistory(docs);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'blueprints');
    });

    return () => unsubscribe();
  }, [user]);

  const handleGenerate = async (idea: string, style: DesignStyle, template: string) => {
    if (!user) return;
    setIsLoading(true);
    setBlueprint(null);
    setCurrentStyle(style);
    try {
      const data = await generateBlueprint(idea, style, template);
      
      // Ensure summary and app_name exist
      if (!data.summary) {
        data.summary = {
          app_name: idea.substring(0, 50) || 'Untitled App',
          app_slogan: '',
          app_type: 'custom',
          industry: '',
          target_user: '',
          main_goal: ''
        };
      } else if (!data.summary.app_name) {
        data.summary.app_name = idea.substring(0, 50) || 'Untitled App';
      }

      // Save to Firestore
      const blueprintData = {
        ...data,
        userId: user.uid,
        createdAt: serverTimestamp()
      };

      await addDoc(collection(db, 'blueprints'), blueprintData);
      
      setBlueprint(data);
      toast.success("Kiến trúc đã được đúc và lưu trữ thành công!");
    } catch (error) {
      console.error(error);
      toast.error("Lỗi khi đúc kiến trúc. Vui lòng thử lại.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefine = async (feedback: string) => {
    if (!user || !blueprint) return;
    setIsRefining(true);
    try {
      const updatedData = await generateBlueprint(
        blueprint.summary.app_name, 
        currentStyle,
        'ai_auto', // Refine usually doesn't need to force template again unless specified
        blueprint,
        feedback
      );

      if (!updatedData.summary) {
        updatedData.summary = {
          app_name: blueprint.summary.app_name || 'Untitled App',
          app_slogan: '',
          app_type: 'custom',
          industry: '',
          target_user: '',
          main_goal: ''
        };
      } else if (!updatedData.summary.app_name) {
        updatedData.summary.app_name = blueprint.summary.app_name || 'Untitled App';
      }

      const blueprintData = {
        ...updatedData,
        userId: user.uid,
        createdAt: serverTimestamp()
      };

      await addDoc(collection(db, 'blueprints'), blueprintData);
      setBlueprint(updatedData);
      toast.success("Kiến trúc đã được tinh chỉnh thành công!");
    } catch (error) {
      console.error(error);
      toast.error("Lỗi khi tinh chỉnh kiến trúc.");
    } finally {
      setIsRefining(false);
    }
  };

  const clearHistory = async () => {
    if (!user) return;
    if (!window.confirm("Bạn có chắc chắn muốn xóa toàn bộ lịch sử kiến trúc?")) return;
    
    try {
      const q = query(collection(db, 'blueprints'), where('userId', '==', user.uid));
      const querySnapshot = await getDocs(q);
      
      const deletePromises = querySnapshot.docs.map(document => 
        deleteDoc(doc(db, 'blueprints', document.id))
      );
      
      await Promise.all(deletePromises);
      toast.success("Đã xóa sạch lịch sử kiến trúc.");
    } catch (err) {
      console.error(err);
      toast.error("Lỗi khi xóa lịch sử.");
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setBlueprint(null);
      toast.info("Đã đăng xuất an toàn.");
    } catch (err) {
      toast.error("Lỗi khi đăng xuất.");
    }
  };

  if (!isAuthReady) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <>
        <LoginScreen />
        <Toaster position="top-center" richColors theme="dark" />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-amber-500/30">
      <Toaster position="top-right" richColors theme="dark" />
      
      {/* --- NAVIGATION BAR --- */}
      <nav className="sticky top-0 z-40 w-full bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 px-6 py-4">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-amber-500/10 rounded-lg border border-amber-500/20">
              <Crown className="text-amber-500" size={24} />
            </div>
            <div>
              <h1 className="text-lg font-black tracking-tighter uppercase leading-none">NGUYỄN NHẬT LINH</h1>
              <span className="text-[10px] font-bold text-amber-500/60 tracking-[0.3em] uppercase">ARCHITECT PRO</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger render={
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-amber-500 hover:bg-amber-500/10">
                  <History size={20} />
                </Button>
              } />
              <SheetContent className="bg-slate-950 border-slate-800 text-slate-200 w-[400px] sm:w-[540px]">
                <SheetHeader className="border-b border-slate-800 pb-4 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <SheetTitle className="text-slate-200 flex items-center gap-2">
                      <History size={18} className="text-amber-500" />
                      LỊCH SỬ KIẾN TRÚC
                    </SheetTitle>
                    {history.length > 0 && (
                      <Button variant="ghost" size="sm" onClick={clearHistory} className="text-red-500 hover:text-red-400 hover:bg-red-500/10">
                        <Trash2 size={14} className="mr-2" /> XÓA HẾT
                      </Button>
                    )}
                  </div>
                  <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
                    <Input 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Tìm kiếm dự án..."
                      className="bg-slate-900 border-slate-800 pl-10 h-10 text-xs"
                    />
                  </div>
                </SheetHeader>
                <ScrollArea className="h-[calc(100vh-180px)] pr-4">
                  {filteredHistory.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-64 text-slate-600 space-y-4">
                      <History size={48} strokeWidth={1} />
                      <p className="text-sm font-medium">Không tìm thấy kiến trúc nào.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {filteredHistory.map((item, idx) => (
                        <div 
                          key={idx} 
                          onClick={() => setBlueprint(item)}
                          className="group p-4 bg-slate-900/50 border border-slate-800 rounded-xl cursor-pointer hover:border-amber-500/50 hover:bg-slate-900 transition-all"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-bold text-slate-200 group-hover:text-amber-400 transition-colors">{item.summary.app_name}</h4>
                            <Badge variant="outline" className="text-[9px] border-slate-700">{item.summary.industry}</Badge>
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-2 italic">"{item.summary.app_slogan}"</p>
                        </div>
                      ))}
                    </div>
                  )}
                </ScrollArea>
              </SheetContent>
            </Sheet>

            <div className="h-8 w-[1px] bg-slate-800 mx-2"></div>
            
            <Button 
              variant="ghost" 
              onClick={handleLogout}
              className="text-slate-400 hover:text-red-500 hover:bg-red-500/10 gap-2"
            >
              <LogOut size={18} />
              <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">ĐĂNG XUẤT</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="pt-12">
        <AnimatePresence mode="wait">
          {!blueprint ? (
            <motion.div 
              key="input"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-16 space-y-4">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 12 }}
                  className="inline-block p-4 bg-amber-500/10 rounded-2xl border border-amber-500/20 mb-4"
                >
                  <Sparkles className="text-amber-500" size={40} />
                </motion.div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">
                  KIẾN TRÚC SƯ ĐA VŨ TRỤ
                </h2>
                <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base font-medium tracking-wide">
                  Hệ thống AI tối thượng thiết kế bản vẽ ứng dụng, UI schema và prompt engine <br className="hidden md:block" />
                  dựa trên triết lý thực chiến của Nguyễn Nhật Linh.
                </p>
              </div>
              <ArchitectInput onGenerate={handleGenerate} isLoading={isLoading} />
            </motion.div>
          ) : (
            <motion.div 
              key="display"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-8 z-10">
                <Button 
                  onClick={() => setBlueprint(null)}
                  variant="outline"
                  className="bg-slate-950/80 backdrop-blur-md border-slate-700 hover:border-amber-500 text-slate-400 hover:text-amber-500 rounded-full px-8 py-6 shadow-2xl"
                >
                  <LayoutDashboard className="mr-2" size={18} />
                  QUAY LẠI BẢNG ĐIỀU KHIỂN
                </Button>
              </div>
              <BlueprintDisplay 
                data={blueprint} 
                onRefine={handleRefine}
                isRefining={isRefining}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* --- LOADING OVERLAY --- */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-md"
          >
            <div className="relative w-32 h-32 mb-8">
              <div className="absolute inset-0 border-4 border-amber-500/20 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-t-amber-500 rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Crown className="text-amber-500 animate-pulse" size={40} />
              </div>
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-xl font-black tracking-[0.3em] text-white uppercase">ĐANG ĐÚC KIẾN TRÚC...</h3>
              <p className="text-slate-500 font-mono text-xs animate-pulse">V6.0 QUANTUM ENGINE IS PROCESSING</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- FOOTER --- */}
      <footer className="mt-24 border-t border-slate-800/50 py-12 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <div className="flex items-center gap-4">
            <Facebook size={20} />
            <Phone size={20} />
            <Gift size={20} />
            <Heart size={20} />
          </div>
          <p className="text-[10px] font-mono tracking-widest uppercase">
            NGUYỄN NHẬT LINH AI • ARCHITECT V6 • ALL RIGHTS RESERVED
          </p>
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-green-500" />
            <span className="text-[10px] font-bold uppercase tracking-widest">SECURED BY IMPERIUM</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
