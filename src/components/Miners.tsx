import { motion } from "motion/react";
import { Settings, Palette, Box, Sparkles, ArrowRight, Zap, Coins, Database, Activity, BarChart3, Cpu, Check, Trophy, ShoppingBag, Target, Hash, Flag, Briefcase, Globe, ChevronDown } from "lucide-react";
import { useState } from "react";

const StatBar = ({ label, value, percentage, color, icon: Icon }: any) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Icon className={`w-4 h-4 ${color}`} />
        <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">{label}</span>
      </div>
      <span className="text-sm font-bold font-mono">{value}</span>
    </div>
    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`h-full rounded-full ${color.replace('text-', 'bg-')}`}
      />
    </div>
  </div>
);

const ModuleCard = ({ title, sub, current, total, benefit, color, isSelected, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`w-full bg-white/5 border rounded-2xl p-5 flex flex-col gap-4 transition-all group relative overflow-hidden ${
      isSelected 
        ? 'border-brand-emerald/50 bg-brand-emerald/5 shadow-[0_0_20px_rgba(0,242,255,0.15)]' 
        : 'border-white/10 hover:border-white/20'
    }`}
  >
    {isSelected && (
      <div className="absolute inset-0 bg-gradient-to-br from-brand-emerald/5 to-transparent pointer-events-none" />
    )}
    <div className="text-center relative z-10">
      <h5 className={`font-bold text-sm mb-1 transition-colors ${isSelected ? 'text-brand-emerald' : ''}`}>{title}</h5>
      <p className="text-[10px] text-white/40">{sub}</p>
    </div>
    <div className="space-y-2 relative z-10 w-full">
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-500 ${color}`} 
          style={{ width: `${(current / total) * 100}%` }} 
        />
      </div>
      <div className="flex items-center justify-between text-[10px] font-mono">
        <span className="text-white/40">{current}/{total}</span>
        <span className={color.replace('bg-', 'text-')}>{benefit}</span>
      </div>
    </div>
  </button>
);

const ActionCard = ({ title, sub, points, icon: Icon, color }: any) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:bg-white/10 transition-all cursor-pointer group">
    <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform`}>
      <Icon className={`w-6 h-6 ${color}`} />
    </div>
    <div>
      <h5 className="font-bold text-sm mb-1">{title}</h5>
      <p className="text-[10px] text-white/30">{sub}</p>
    </div>
    <span className={`text-xs font-bold ${color}`}>{points}</span>
  </div>
);

const HexTheme = ({ theme, isSelected, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center gap-4 group transition-all ${isSelected ? 'scale-105' : 'hover:scale-105'}`}
  >
    <div className={`relative w-24 h-24 flex items-center justify-center transition-all ${isSelected ? 'p-1 rounded-2xl border-2 border-brand-emerald glow-cyan' : ''}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
        <defs>
          <linearGradient id={`grad-${theme.name.replace(' ', '-')}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={theme.colors[0]} />
            <stop offset="100%" stopColor={theme.colors[1]} />
          </linearGradient>
        </defs>
        <path 
          d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" 
          fill={`url(#grad-${theme.name.replace(' ', '-')})`} 
        />
        <circle cx="50" cy="50" r="15" fill="#0a0a0c" />
      </svg>
      {isSelected && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-brand-emerald flex items-center justify-center shadow-lg">
            <Check className="w-5 h-5 text-black font-bold" />
          </div>
        </div>
      )}
    </div>
    <span className={`text-xs font-bold tracking-tight transition-colors ${isSelected ? 'text-brand-emerald' : 'text-white/40 group-hover:text-white'}`}>
      {theme.name}
    </span>
  </button>
);

export default function Miners() {
  const [activeTab, setActiveTab] = useState("Upgrade");
  const [selectedTheme, setSelectedTheme] = useState("Neon Cyber");
  const [selectedModule, setSelectedModule] = useState("Power");
  const [uniqueTag, setUniqueTag] = useState("");
  const [isDetectingCommunity, setIsDetectingCommunity] = useState(false);
  const [detectedCommunity, setDetectedCommunity] = useState<string | null>(null);
  const [isSpecializationOpen, setIsSpecializationOpen] = useState(false);
  const [selectedSpecialization, setSelectedSpecialization] = useState("Unassigned");

  const specializations = [
    "AI Engineer",
    "Web3 Developer",
    "Data Scientist",
    "Cybersecurity",
    "Marketing Specialist",
    "Sales Professional",
    "Trader",
    "Creative Director"
  ];

  const handleDetectCommunity = () => {
    setIsDetectingCommunity(true);
    setTimeout(() => {
      setIsDetectingCommunity(false);
      setDetectedCommunity("Neural Nexus Alpha");
    }, 2000);
  };

  const tabs = [
    { name: "Upgrade", icon: Settings },
    { name: "Visuals", icon: Palette },
    { name: "Modules", icon: Box },
    { name: "Effects", icon: Sparkles },
  ];

  const themes = [
    { name: "Neon Cyber", colors: ["#00f2ff", "#a855f7"] },
    { name: "Quantum Gold", colors: ["#fbbf24", "#f59e0b"] },
    { name: "Chrome Silver", colors: ["#94a3b8", "#e2e8f0"] },
    { name: "Reactor Red", colors: ["#ef4444", "#b91c1c"] },
    { name: "Neural Green", colors: ["#22c55e", "#15803d"] },
    { name: "Void Purple", colors: ["#8b5cf6", "#4c1d95"] },
  ];

  return (
    <section className="py-24 relative bg-[#0a0a0c] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full glass border border-white/10 mb-8"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-brand-purple">The Miners</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight"
          >
            Your Gateway <br />
            <span className="text-gradient-purple drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">To The Entire Ecosystem</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-white/50 text-lg leading-relaxed"
          >
            The only way to collect coins - 60% of supply locked in mining. Evumus miners are 
            more than just distribution mechanisms. Your exclusive access to predictions, AI 
            builders, and automated workflows - customize, upgrade, and unlock through one 
            core asset.
          </motion.p>
        </div>

        {/* Miner Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: 3D Miner Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            {/* Tier Badge */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20">
              <div className="relative w-24 h-24 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-brand-purple drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                  <path d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M50 10 L85 28 L85 72 L50 90 L15 72 L15 28 Z" fill="rgba(168,85,247,0.1)" stroke="currentColor" strokeWidth="1" />
                </svg>
                <div className="relative z-10 text-center">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">Tier</div>
                  <div className="text-4xl font-black text-white">1</div>
                </div>
              </div>
            </div>

            {/* Isometric Cube Visual - Refined to match screenshot */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 animate-float flex items-center justify-center">
              {/* Glow behind the cube */}
              <div className="absolute inset-0 bg-brand-purple/20 blur-[100px] rounded-full opacity-50" />
              
              <div className="relative w-64 h-72">
                {/* Top Face */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#1a1a1e] border-2 border-brand-purple/50 rounded-2xl transform rotate-x-60 rotate-z-45 shadow-[0_0_30px_rgba(168,85,247,0.4)] z-10 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-emerald/20" />
                  <div className="w-24 h-24 border border-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-[10px] font-black font-mono text-white/40">IQF SYSTEM</span>
                  </div>
                </div>

                {/* Front Left Face (Fan) */}
                <div className="absolute top-24 left-0 w-40 h-48 bg-[#0d0d0f] border-l-2 border-b-2 border-brand-purple/60 rounded-bl-2xl transform skew-y-[25deg] z-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border-[6px] border-white/5 bg-black/60 flex items-center justify-center relative overflow-hidden group shadow-[inset_0_0_20px_rgba(168,85,247,0.2)]">
                    {/* Fan Blades - More detailed */}
                    <motion.div 
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1.5, ease: "linear" }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      {[...Array(12)].map((_, i) => (
                        <div 
                          key={i} 
                          className="absolute w-1.5 h-14 bg-gradient-to-t from-brand-emerald/40 via-brand-purple/40 to-transparent origin-bottom"
                          style={{ transform: `rotate(${i * 30}deg) translateY(-50%)` }}
                        />
                      ))}
                    </motion.div>
                    {/* Fan Center - Pink Glow */}
                    <div className="w-12 h-12 rounded-full bg-[#1a1a1e] border-2 border-brand-purple/50 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(168,85,247,0.6)]">
                      <div className="w-4 h-4 rounded-full bg-brand-purple animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Front Right Face (Bars) */}
                <div className="absolute top-24 right-0 w-40 h-48 bg-[#0d0d0f] border-r-2 border-b-2 border-brand-emerald/60 rounded-br-2xl transform skew-y-[-25deg] z-0 p-10 flex justify-center gap-4">
                  {[...Array(4)].map((_, i) => (
                    <div 
                      key={i} 
                      className="h-full w-3 bg-brand-emerald/30 rounded-full border border-brand-emerald/50 shadow-[0_0_20px_rgba(0,242,255,0.4)]"
                      style={{ 
                        opacity: 1 - (i * 0.1),
                        boxShadow: '0 0 15px rgba(0, 242, 255, 0.5)'
                      }}
                    />
                  ))}
                </div>

                {/* Neon Edge Highlights */}
                <div className="absolute top-[88px] left-1/2 -translate-x-1/2 w-px h-48 bg-gradient-to-b from-brand-purple to-brand-emerald z-20 opacity-50" />
              </div>
              
              {/* Base Shadow/Glow */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-64 h-12 bg-brand-purple/20 blur-2xl rounded-[100%] transform -rotate-x-60" />
            </div>
          </motion.div>

          {/* Right: Stats & Controls */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <h3 className="text-4xl md:text-5xl font-black tracking-tight">Basic Miner</h3>

            {/* Tabs */}
            <div className="glass p-1 rounded-2xl border border-white/10 flex gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold transition-all ${
                    activeTab === tab.name 
                      ? 'bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 glow-cyan' 
                      : 'text-white/40 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Content Panel */}
            <div className="glass rounded-3xl border border-white/10 p-8 relative overflow-hidden min-h-[500px]">
              {/* Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
              
              <div className="relative z-10">
                {activeTab === "Upgrade" && (
                  <div className="flex flex-col gap-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
                        <span className="text-[10px] font-mono text-brand-emerald font-bold tracking-widest uppercase">System Active</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1 rounded bg-white/5 border border-white/10">
                        <Cpu className="w-3 h-3 text-white/40" />
                        <span className="text-[10px] font-mono text-white/60">1/5</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <StatBar label="Mining Power" value="50" percentage={50} color="text-brand-emerald" icon={Zap} />
                      <StatBar label="Max Claims" value="10" percentage={30} color="text-brand-purple" icon={Coins} />
                      <StatBar label="Supply Cap" value="100K" percentage={70} color="text-orange-400" icon={Database} />
                      <StatBar label="Mining Efficiency" value="50%" percentage={50} color="text-pink-400" icon={Activity} />
                      
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <BarChart3 className="w-4 h-4 text-blue-400" />
                          <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Network Priority</span>
                        </div>
                        <div className="flex gap-1.5">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className={`h-4 w-2 rounded-sm ${i === 0 ? 'bg-blue-400 glow-cyan' : 'bg-white/5'}`} />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5">
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />
                        <p className="text-[10px] font-mono text-brand-emerald tracking-widest uppercase">
                          Entry point to the ecosystem. Start your mining journey.
                        </p>
                      </div>

                      <button className="w-full py-5 rounded-2xl bg-gradient-to-r from-brand-emerald to-brand-purple text-black font-black text-sm tracking-widest uppercase flex items-center justify-center gap-3 hover:scale-[1.02] transition-all group">
                        /// Upgrade to Tier 2
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === "Visuals" && (
                  <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-3">
                      <Palette className="w-5 h-5 text-brand-emerald" />
                      <h4 className="text-lg font-bold">Choose Color Theme</h4>
                    </div>

                    <div className="grid grid-cols-3 gap-y-12 gap-x-4">
                      {themes.map((theme) => (
                        <HexTheme 
                          key={theme.name}
                          theme={theme}
                          isSelected={selectedTheme === theme.name}
                          onClick={() => setSelectedTheme(theme.name)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "Modules" && (
                  <div className="flex flex-col gap-10">
                    {/* Active Modules Section */}
                    <div className="flex flex-col gap-6">
                      <div className="flex items-center gap-3">
                        <Settings className="w-5 h-5 text-brand-emerald" />
                        <h4 className="text-xs font-bold tracking-widest uppercase">Select Active Module</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <ModuleCard 
                          title="Efficiency" 
                          sub="Cooler system reduces fees" 
                          current={65} 
                          total={100} 
                          benefit="-15% Fee Reduction" 
                          color="bg-brand-emerald" 
                          isSelected={selectedModule === "Efficiency"}
                          onClick={() => setSelectedModule("Efficiency")}
                        />
                        <ModuleCard 
                          title="Power" 
                          sub="Increases HashPower output" 
                          current={80} 
                          total={150} 
                          benefit="+12% HashPower" 
                          color="bg-orange-400" 
                          isSelected={selectedModule === "Power"}
                          onClick={() => setSelectedModule("Power")}
                        />
                        <ModuleCard 
                          title="Durability" 
                          sub="Extends maximum claims" 
                          current={45} 
                          total={120} 
                          benefit="+2 Max Claims" 
                          color="bg-brand-purple" 
                          isSelected={selectedModule === "Durability"}
                          onClick={() => setSelectedModule("Durability")}
                        />
                      </div>
                    </div>

                    {/* Module Tasks Section */}
                    <div className="flex flex-col gap-6">
                      <div className="flex items-center gap-3">
                        <Trophy className="w-5 h-5 text-orange-400" />
                        <h4 className="text-xs font-bold tracking-widest uppercase">
                          {selectedModule ? `Earn Points for ${selectedModule} Module` : 'Select a Module First'}
                        </h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <ActionCard 
                          title="Complete Tasks" 
                          sub="Share, refer, engage" 
                          points="+15 pts" 
                          icon={Target} 
                          color="text-brand-emerald" 
                        />
                        <ActionCard 
                          title="Win Predictions" 
                          sub="Stake on events" 
                          points="+40 pts" 
                          icon={Trophy} 
                          color="text-brand-emerald" 
                        />
                        <ActionCard 
                          title="Purchase Boost" 
                          sub="Instant acceleration" 
                          points="+100 pts" 
                          icon={ShoppingBag} 
                          color="text-brand-purple" 
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "Effects" && (
                  <div className="flex flex-col gap-8 h-full">
                    {!isSpecializationOpen ? (
                      <>
                        <p className="text-[10px] font-mono text-white/60 tracking-tight">
                          Aminer truly yours: personalized to match both your aesthetic style and your performance goals. 
                          <span className="inline-block w-1 h-3 bg-brand-emerald ml-1 animate-pulse" />
                        </p>

                        {/* Unique Tag */}
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center gap-2">
                            <Hash className="w-4 h-4 text-brand-emerald" />
                            <h4 className="text-[10px] font-bold tracking-widest uppercase">Unique Tag</h4>
                            <span className="text-[10px] text-white/20 font-normal lowercase tracking-normal">· Exclusively reserved for your miner</span>
                          </div>
                          <div className="w-full h-14 glass rounded-xl border border-white/10 flex items-center px-6 group focus-within:border-brand-emerald/50 transition-all">
                            <input 
                              type="text"
                              value={uniqueTag}
                              onChange={(e) => setUniqueTag(e.target.value.slice(0, 12))}
                              placeholder="Enter unique tag (max 12 chars)"
                              className="bg-transparent w-full h-full outline-none text-xs font-bold tracking-widest uppercase placeholder:text-white/20"
                            />
                          </div>
                        </div>

                        {/* Community */}
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center gap-2">
                            <Flag className="w-4 h-4 text-brand-emerald" />
                            <h4 className="text-[10px] font-bold tracking-widest uppercase">Community</h4>
                            <span className="text-[10px] text-white/20 font-normal lowercase tracking-normal">· Unlock exclusive rewards by representing your origin</span>
                          </div>
                          <button 
                            onClick={handleDetectCommunity}
                            disabled={isDetectingCommunity}
                            className="w-full h-14 glass rounded-xl border border-brand-emerald/40 flex items-center justify-center gap-3 group hover:bg-brand-emerald/5 transition-all relative overflow-hidden"
                          >
                            {isDetectingCommunity && (
                              <motion.div 
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{ duration: 1.5, ease: "linear" }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-emerald/20 to-transparent"
                              />
                            )}
                            <Globe className={`w-4 h-4 text-brand-emerald ${isDetectingCommunity ? 'animate-spin' : ''}`} />
                            <span className="text-xs font-bold text-brand-purple tracking-widest uppercase">
                              {isDetectingCommunity ? 'AI Detecting Community...' : detectedCommunity ? `Origin: ${detectedCommunity}` : 'Reveal Your Community Origin'}
                            </span>
                          </button>
                        </div>
                      </>
                    ) : (
                      <div className="flex-1 min-h-[350px]" />
                    )}

                    {/* Specialization */}
                    <div className="flex flex-col gap-4 relative mt-auto">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-brand-emerald" />
                        <h4 className="text-[10px] font-bold tracking-widest uppercase">Specialization</h4>
                        <span className="text-[10px] text-white/20 font-normal lowercase tracking-normal">· Select cognitive enhancement path for unique specialization bonus</span>
                      </div>
                      
                      {/* Specialization Dropdown */}
                      {isSpecializationOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute bottom-full mb-2 left-0 right-0 bg-[#0a0a0c] rounded-2xl border border-brand-emerald/30 z-50 overflow-hidden shadow-2xl"
                        >
                          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
                          <div className="p-4 border-b border-white/5 bg-white/5">
                            <span className="text-[10px] uppercase tracking-widest text-white/40">Choose your specialization</span>
                          </div>
                          <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
                            {specializations.map((spec) => (
                              <button
                                key={spec}
                                onClick={() => {
                                  setSelectedSpecialization(spec);
                                  setIsSpecializationOpen(false);
                                }}
                                className="w-full px-6 py-4 text-left text-xs font-bold tracking-widest uppercase hover:bg-brand-emerald/10 hover:text-brand-emerald transition-colors border-b border-white/5 last:border-0"
                              >
                                {spec}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      <div 
                        onClick={() => setIsSpecializationOpen(!isSpecializationOpen)}
                        className={`w-full h-16 glass rounded-xl border relative overflow-hidden group cursor-pointer transition-all ${
                          isSpecializationOpen ? 'border-brand-emerald shadow-[0_0_20px_rgba(0,242,255,0.2)]' : 'border-white/10 hover:border-brand-emerald/30'
                        }`}
                      >
                        {/* Animated Glow Overlay */}
                        <div className="absolute inset-0 bg-brand-emerald/5 animate-pulse pointer-events-none" />
                        
                        {/* Grid Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
                        <div className="absolute inset-0 border-x-2 border-brand-emerald/20 mx-4" />
                        
                        <div className="relative z-10 h-full flex items-center justify-between px-8">
                          <div className="flex items-center gap-3">
                            <span className="text-brand-emerald text-xs">◇</span>
                            <span className="text-xs font-bold tracking-[0.2em] uppercase">{selectedSpecialization}</span>
                            <span className="text-brand-emerald text-xs">◇</span>
                          </div>
                          <ChevronDown className={`w-4 h-4 text-brand-emerald transition-transform ${isSpecializationOpen ? 'rotate-180' : ''}`} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
