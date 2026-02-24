import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Coins, Repeat, Users, Shield, Zap, Trophy, Plus, X, Calendar, TrendingUp, TrendingDown, ShieldCheck, Lock, BarChart3, ChevronRight } from "lucide-react";

const PredictionModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass rounded-[32px] border border-white/10 p-6 md:p-10 shadow-2xl custom-scrollbar"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Left Column: Prediction Window (3/5) */}
              <div className="lg:col-span-3 space-y-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-purple/20 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-brand-purple" />
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">Prediction Window</span>
                  <div className="ml-auto px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 flex items-center gap-2">
                    <Trophy className="w-3 h-3 text-brand-purple" />
                    <span className="text-[10px] font-bold text-brand-purple uppercase">Creator Mode</span>
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
                  Will BTC reach $1M By year 2030?
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-white/40">
                    <Calendar className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Timeline</span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-black">2030</div>
                    <div className="relative h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-emerald w-[40%]" />
                      <div className="absolute top-1/2 left-[40%] -translate-y-1/2 w-4 h-4 rounded-full bg-orange-400 border-2 border-brand-dark shadow-[0_0_10px_rgba(251,146,60,0.5)]" />
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-white/20">
                      <span>2025</span>
                      <span>2050</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-brand-emerald/5 border border-brand-emerald/20 flex items-center justify-between group cursor-pointer hover:bg-brand-emerald/10 transition-all">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-4 h-4 text-brand-emerald" />
                      <span className="font-bold text-xs uppercase tracking-widest">Yes</span>
                    </div>
                    <span className="text-2xl font-black">53%</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-brand-purple/5 border border-brand-purple/20 flex items-center justify-between group cursor-pointer hover:bg-brand-purple/10 transition-all">
                    <div className="flex items-center gap-3">
                      <TrendingDown className="w-4 h-4 text-brand-purple" />
                      <span className="font-bold text-xs uppercase tracking-widest">No</span>
                    </div>
                    <span className="text-2xl font-black">47%</span>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-6">
                  <div className="flex items-center gap-2 text-white/40">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Creator Profile</span>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                        <Trophy className="w-3 h-3" /> Credibility Score
                      </div>
                      <div className="text-xl font-black">7.8/10</div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                        <Lock className="w-3 h-3" /> Volume Cap Limit
                      </div>
                      <div className="text-xl font-black">500K</div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-6 relative overflow-hidden">
                  <div className="flex justify-between relative z-10">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                        <Users className="w-3 h-3" /> Votes
                      </div>
                      <div className="text-xl font-black flex items-center gap-2">
                        3,897 <span className="text-[10px] text-brand-emerald">↑</span>
                      </div>
                    </div>
                    <div className="space-y-1 text-right">
                      <div className="flex items-center gap-2 justify-end text-[10px] font-bold text-white/30 uppercase tracking-widest">
                        <Coins className="w-3 h-3" /> Staked Volume
                      </div>
                      <div className="text-xl font-black">134.3K</div>
                    </div>
                  </div>
                  
                  {/* Wave Chart */}
                  <div className="h-24 w-full relative">
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 100">
                      <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        d="M0,50 C50,20 100,80 150,50 C200,20 250,80 300,50 C350,20 400,50 L400,100 L0,100 Z"
                        fill="url(#waveGradient)"
                        className="opacity-20"
                      />
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        d="M0,50 C50,20 100,80 150,50 C200,20 250,80 300,50 C350,20 400,50"
                        stroke="#a855f7"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex justify-between text-[8px] font-mono text-white/20 uppercase tracking-widest">
                    <span>10 days ago</span>
                    <span className="text-brand-purple font-bold">53% Yes</span>
                    <span>Now</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Rewards (2/5) */}
              <div className="lg:col-span-2 space-y-6">
                <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 space-y-8 h-full flex flex-col">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-brand-emerald" />
                    <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-white/60">Your Rewards</h3>
                  </div>

                  <div className="grid grid-cols-1 gap-4 flex-1">
                    <div className="p-4 rounded-2xl bg-brand-emerald/5 border border-brand-emerald/20 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Coins className="w-4 h-4 text-brand-emerald" />
                        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Volume Cap Limit</span>
                      </div>
                      <span className="text-lg font-black text-brand-emerald">+2.5K</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-brand-purple/5 border border-brand-purple/20 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <ShieldCheck className="w-4 h-4 text-brand-purple" />
                        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Credibility Score</span>
                      </div>
                      <span className="text-lg font-black text-brand-purple">+12%</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-blue-400/5 border border-blue-400/20 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Plus className="w-4 h-4 text-blue-400" />
                        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Available Windows</span>
                      </div>
                      <span className="text-lg font-black text-blue-400">+3</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Trophy className="w-4 h-4 text-white/40" />
                        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Trusted Creator</span>
                      </div>
                      <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Unlocked</span>
                    </div>
                  </div>

                  <button className="w-full py-5 bg-brand-emerald text-brand-dark font-black uppercase tracking-[0.2em] rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(0,242,255,0.3)]">
                    <Sparkles className="w-5 h-5" />
                    Make Prediction
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const BenefitItem = ({ icon: Icon, title, description, theme }: any) => {
  const themeStyles: any = {
    emerald: "hover:border-brand-emerald/30 hover:bg-brand-emerald/5 group-hover:text-brand-emerald",
    purple: "hover:border-brand-purple/30 hover:bg-brand-purple/5 group-hover:text-brand-purple",
    blue: "hover:border-blue-400/30 hover:bg-blue-400/5 group-hover:text-blue-400",
  };

  const iconStyles: any = {
    emerald: "text-brand-emerald",
    purple: "text-brand-purple",
    blue: "text-blue-400",
  };

  const dotStyles: any = {
    emerald: "bg-brand-emerald",
    purple: "bg-brand-purple",
    blue: "bg-blue-400",
  };

  return (
    <div className={`flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 transition-all group cursor-pointer ${themeStyles[theme]}`}>
      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
        <Icon className={`w-5 h-5 transition-colors ${iconStyles[theme]}`} />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h4 className="font-bold text-sm transition-colors">{title}</h4>
          <div className={`w-1.5 h-1.5 rounded-full ${dotStyles[theme]} group-hover:animate-pulse`} />
        </div>
        <p className="text-[10px] text-white/40 mt-0.5 group-hover:text-white/60 transition-colors">{description}</p>
      </div>
    </div>
  );
};

const FloatingCard = ({ icon: Icon, title, description, color, delay = 0, x = 0, y = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    animate={{ 
      y: [y, y - 15, y],
    }}
    transition={{ 
      duration: 4, 
      repeat: Infinity, 
      repeatType: "reverse", 
      ease: "easeInOut",
      delay 
    }}
    className="absolute glass p-4 rounded-2xl border border-white/10 flex items-center gap-4 min-w-[180px] z-20"
    style={{ left: x, top: y }}
  >
    <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center`}>
      <Icon className={`w-5 h-5 ${color}`} />
    </div>
    <div>
      <h5 className="font-bold text-xs">{title}</h5>
      <p className="text-[10px] text-white/40">{description}</p>
    </div>
  </motion.div>
);

export default function CreatorBenefits() {
  const [showPrediction, setShowPrediction] = useState(false);

  return (
    <section className="relative py-32 overflow-hidden bg-[#0a0a0c]">
      {/* Background Image - Neural Network Style */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1920')`,
            filter: 'hue-rotate(180deg) brightness(0.6)' 
          }}
        />
        {/* Gradient Overlays for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c] via-transparent to-[#0a0a0c]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-transparent to-[#0a0a0c]" />
        
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Creator Benefits & Floating Cards (5/12) */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 md:p-10 rounded-[40px] border border-white/10 relative overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-10">
                <Sparkles className="w-6 h-6 text-brand-emerald" />
                <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-white/60">Creator Benefits</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
              </div>

              <div className="flex flex-col gap-4">
                <BenefitItem 
                  icon={Coins}
                  title="Volume Rewards"
                  description="Earn extra based on trading volume"
                  theme="emerald"
                />
                <BenefitItem 
                  icon={Repeat}
                  title="Remix Events"
                  description="Copy popular windows, add your twist"
                  theme="purple"
                />
                <BenefitItem 
                  icon={Users}
                  title="Build Communities"
                  description="Connect audiences across markets"
                  theme="blue"
                />
              </div>
            </motion.div>

            {/* Floating Cards - Staggered Layout like the screenshot */}
            <div className="relative h-[300px] w-full">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="glass p-4 rounded-2xl border border-white/10 flex items-center gap-4 w-[200px] absolute left-0 top-10 hover:border-brand-purple/30 hover:bg-brand-purple/5 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-5 h-5 text-brand-purple" />
                </div>
                <div className="flex-1">
                  <h5 className="font-bold text-xs group-hover:text-brand-purple transition-colors">Zero Risk</h5>
                  <p className="text-[10px] text-white/40 group-hover:text-white/60 transition-colors">Keep all your assets</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="glass p-4 rounded-2xl border border-white/10 flex items-center gap-4 w-[200px] absolute left-[220px] top-0 hover:border-brand-emerald/30 hover:bg-brand-emerald/5 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Shield className="w-5 h-5 text-brand-emerald" />
                </div>
                <div className="flex-1">
                  <h5 className="font-bold text-xs group-hover:text-brand-emerald transition-colors">Build Trust</h5>
                  <p className="text-[10px] text-white/40 group-hover:text-white/60 transition-colors">Unlock higher limits</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="glass p-4 rounded-2xl border border-white/10 flex items-center gap-4 w-[200px] absolute left-[180px] top-[140px] hover:border-blue-400/30 hover:bg-blue-400/5 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-400/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Trophy className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h5 className="font-bold text-xs group-hover:text-blue-400 transition-colors">Win Rewards</h5>
                  <p className="text-[10px] text-white/40 group-hover:text-white/60 transition-colors">Miners, boosts & time cuts</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Content or Prediction Window (7/12) */}
          <div className="lg:col-span-7 relative min-h-[600px]">
            <AnimatePresence mode="wait">
              {!showPrediction ? (
                <motion.div
                  key="cta"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="h-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
                >
                  <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-8">
                    Design Your <br />
                    <span className="text-white">Own</span> <br />
                    <span className="text-gradient-purple">Prediction</span> <br />
                    <span className="text-gradient-cyan">Windows</span>
                  </h2>

                  <div className="relative inline-block group">
                    <button 
                      onClick={() => setShowPrediction(true)}
                      className="px-8 py-4 bg-brand-dark border border-brand-emerald/50 rounded-xl text-white font-bold transition-all hover:glow-cyan flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      Create Window
                      <Sparkles className="w-4 h-4" />
                    </button>
                    <div className="absolute -inset-1 bg-brand-emerald/20 blur-xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    
                    <motion.div 
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -bottom-16 left-1/2 -translate-x-1/2 hidden md:block"
                    >
                      <svg width="40" height="60" viewBox="0 0 40 60" fill="none" className="text-brand-emerald/40">
                        <path d="M20 50L20 10M20 10L10 20M20 10L30 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="prediction"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="glass rounded-[32px] border border-white/10 p-8 shadow-2xl space-y-8"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-purple/20 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-brand-purple" />
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">Prediction Window</span>
                    <div className="ml-auto px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 flex items-center gap-2">
                      <Trophy className="w-3 h-3 text-brand-purple" />
                      <span className="text-[10px] font-bold text-brand-purple uppercase">Creator Mode</span>
                    </div>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
                    Will BTC reach $1M By year 2030?
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-white/40">
                      <Calendar className="w-4 h-4" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Timeline</span>
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-black">2030</div>
                      <div className="relative h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-emerald w-[40%]" />
                        <div className="absolute top-1/2 left-[40%] -translate-y-1/2 w-4 h-4 rounded-full bg-orange-400 border-2 border-brand-dark shadow-[0_0_10px_rgba(251,146,60,0.5)]" />
                      </div>
                      <div className="flex justify-between text-[10px] font-mono text-white/20">
                        <span>2025</span>
                        <span>2050</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-brand-emerald/5 border border-brand-emerald/20 flex items-center justify-between group cursor-pointer hover:bg-brand-emerald/10 transition-all">
                      <div className="flex items-center gap-3">
                        <TrendingUp className="w-4 h-4 text-brand-emerald" />
                        <span className="font-bold text-xs uppercase tracking-widest">Yes</span>
                      </div>
                      <span className="text-2xl font-black">53%</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-brand-purple/5 border border-brand-purple/20 flex items-center justify-between group cursor-pointer hover:bg-brand-purple/10 transition-all">
                      <div className="flex items-center gap-3">
                        <TrendingDown className="w-4 h-4 text-brand-purple" />
                        <span className="font-bold text-xs uppercase tracking-widest">No</span>
                      </div>
                      <span className="text-2xl font-black">47%</span>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-brand-emerald/5 border border-brand-emerald/20 space-y-6">
                    <div className="flex items-center gap-2 text-brand-emerald/60">
                      <ShieldCheck className="w-4 h-4" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Creator Profile</span>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                          <Trophy className="w-3 h-3 text-brand-emerald/40" /> Credibility Score
                        </div>
                        <div className="text-xl font-black">7.8/10</div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                          <Lock className="w-3 h-3 text-brand-emerald/40" /> Volume Cap Limit
                        </div>
                        <div className="text-xl font-black">500K</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-brand-purple/5 border border-brand-purple/20 space-y-6 relative overflow-hidden">
                    <div className="flex justify-between relative z-10">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                          <Users className="w-3 h-3 text-brand-purple/40" /> Votes
                        </div>
                        <div className="text-xl font-black flex items-center gap-2">
                          12,440 <span className="text-[10px] text-brand-emerald">↑</span>
                        </div>
                      </div>
                      <div className="space-y-1 text-right">
                        <div className="flex items-center gap-2 justify-end text-[10px] font-bold text-white/30 uppercase tracking-widest">
                          <Coins className="w-3 h-3 text-brand-purple/40" /> Staked Volume
                        </div>
                        <div className="text-xl font-black">250K</div>
                      </div>
                    </div>
                    
                    <div className="h-24 w-full relative">
                      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 100">
                        <motion.path
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 2, ease: "easeInOut" }}
                          d="M0,50 C50,20 100,80 150,50 C200,20 250,80 300,50 C350,20 400,50 L400,100 L0,100 Z"
                          fill="url(#waveGradient2)"
                          className="opacity-20"
                        />
                        <motion.path
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, ease: "easeInOut" }}
                          d="M0,50 C50,20 100,80 150,50 C200,20 250,80 300,50 C350,20 400,50"
                          stroke="#a855f7"
                          strokeWidth="3"
                          fill="none"
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient id="waveGradient2" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#a855f7" />
                            <stop offset="100%" stopColor="transparent" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="flex justify-between text-[8px] font-mono text-white/20 uppercase tracking-widest">
                      <span>10 days ago</span>
                      <span className="text-brand-purple font-bold">53% Yes</span>
                      <span>Now</span>
                    </div>
                  </div>

                  <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 space-y-8">
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-brand-emerald" />
                      <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-white/60">Your Rewards</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-brand-emerald/5 border border-brand-emerald/20 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Coins className="w-4 h-4 text-brand-emerald" />
                          <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Volume Cap Limit</span>
                        </div>
                        <span className="text-lg font-black text-brand-emerald">+2.5K</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-brand-purple/5 border border-brand-purple/20 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <ShieldCheck className="w-4 h-4 text-brand-purple" />
                          <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Credibility Score</span>
                        </div>
                        <span className="text-lg font-black text-brand-purple">+12%</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-blue-400/5 border border-blue-400/20 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Plus className="w-4 h-4 text-blue-400" />
                          <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Available Windows</span>
                        </div>
                        <span className="text-lg font-black text-blue-400">+3</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Trophy className="w-4 h-4 text-white/40" />
                          <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Trusted Creator</span>
                        </div>
                        <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Unlocked</span>
                      </div>
                    </div>

                    <button className="w-full py-5 bg-brand-dark border border-brand-emerald/50 text-white font-black uppercase tracking-[0.2em] rounded-2xl hover:glow-cyan transition-all flex items-center justify-center gap-3">
                      <Sparkles className="w-5 h-5" />
                      Make Prediction
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
