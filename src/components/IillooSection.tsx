import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, ShieldCheck, Rocket, Sparkles, Terminal, Globe, Zap, Flame, TrendingUp, Wallet, BarChart3 } from "lucide-react";

const APPS = [
  {
    prompt: "Design a Web3 gaming platform",
    type: "gaming",
    preview: (
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-widest">Your Tokens</span>
          <span className="text-xs font-black text-brand-purple">1,247 GAME</span>
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 via-transparent to-brand-emerald/20 z-0" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
            <div className="w-12 h-12 rounded-full bg-brand-purple/20 flex items-center justify-center mb-4">
              <Flame className="w-6 h-6 text-brand-purple" />
            </div>
            <h4 className="text-xl font-black mb-2">Arena Battle</h4>
            <p className="text-[10px] text-white/40 uppercase tracking-widest mb-6">Stake tokens to enter</p>
            <button className="px-8 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
              Play Now
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: Rocket, label: "Rewards", color: "text-brand-emerald" },
            { icon: Zap, label: "Power", color: "text-brand-purple" },
            { icon: Globe, label: "Items", color: "text-blue-400" }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col items-center gap-2">
              <item.icon className={`w-4 h-4 ${item.color}`} />
              <span className="text-[8px] font-bold uppercase tracking-widest text-white/60">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    prompt: "Create a DeFi dashboard with real-time crypto prices",
    type: "defi",
    preview: (
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-black uppercase tracking-widest">Portfolio</span>
          <span className="text-xs font-black text-brand-emerald">$24,587.32</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { symbol: "BTC", price: "$1956.50", change: "+5.32%", color: "text-brand-purple" },
            { symbol: "ETH", price: "$4939.76", change: "+3.79%", color: "text-brand-emerald" },
            { symbol: "SOL", price: "$4216.37", change: "+10.25%", color: "text-blue-400" },
            { symbol: "USDC", price: "$1636.00", change: "+3.20%", color: "text-white/60" }
          ].map((coin, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-white/40">{coin.symbol}</span>
                <span className="text-[8px] font-bold text-brand-emerald">{coin.change}</span>
              </div>
              <div className={`text-lg font-black ${coin.color}`}>{coin.price}</div>
              <div className="text-[8px] text-white/20 font-mono">0.7774 {coin.symbol}</div>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Wallet className="w-4 h-4 text-brand-purple" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Connected Wallet</span>
          </div>
          <span className="text-[8px] font-mono text-white/40">0x71C...3E4</span>
        </div>
      </div>
    )
  },
  {
    prompt: "Build an NFT marketplace with wallet integration",
    type: "nft",
    preview: (
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-black uppercase tracking-widest">Featured Collections</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { name: "Cosmic Apes", floor: "3.81 ETH", img: "https://picsum.photos/seed/ape/200/200" },
            { name: "Cyber Punks", floor: "0.66 ETH", img: "https://picsum.photos/seed/punk/200/200" },
            { name: "Meta Dragons", floor: "4.30 ETH", img: "https://picsum.photos/seed/dragon/200/200" },
            { name: "Space NFTs", floor: "3.64 ETH", img: "https://picsum.photos/seed/space/200/200" }
          ].map((nft, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group/nft">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={nft.img} 
                  alt={nft.name} 
                  className="w-full h-full object-cover group-hover/nft:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/nft:opacity-100 transition-opacity" />
              </div>
              <div className="p-3 space-y-1">
                <div className="text-[10px] font-bold truncate">{nft.name}</div>
                <div className="flex justify-between items-center">
                  <span className="text-[8px] text-white/40 uppercase">Floor</span>
                  <span className="text-[8px] font-black text-brand-purple">{nft.floor}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
];

export default function IillooSection() {
  const [appIndex, setAppIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const fullText = APPS[appIndex].prompt;
    const words = fullText.split(" ");
    const currentWords = displayText.split(" ").filter(w => w !== "");
    
    if (isTyping) {
      if (currentWords.length < words.length) {
        timeout = setTimeout(() => {
          setDisplayText(words.slice(0, currentWords.length + 1).join(" "));
        }, 200);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 3000);
      }
    } else {
      timeout = setTimeout(() => {
        setAppIndex((prev) => (prev + 1) % APPS.length);
        setDisplayText("");
        setIsTyping(true);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, appIndex]);

  return (
    <section className="relative py-32 overflow-hidden bg-[#0a0a0c]">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-emerald/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-purple">No-Code Web3 Builder</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tighter mb-6"
          >
            <span className="text-gradient-purple">iilloo</span>
          </motion.h2>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-8"
          >
            Build Any Web3 App Instantly
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-white/60 text-lg md:text-xl font-medium"
          >
            Like Lovable, but for blockchain. AI-powered smart contracts, automated testing, one-click deployment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: IDE/App Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main IDE Window */}
            <div className="glass rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="bg-white/5 px-4 py-3 border-bottom border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-purple" />
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">IQF Systems v3.1.4</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Prompt Input */}
                <div className="bg-white/5 rounded-xl border border-white/10 p-4 flex items-center gap-3 h-14">
                  <Sparkles className="w-4 h-4 text-brand-emerald" />
                  <div className="flex-1 text-sm font-medium text-white/80">
                    {displayText}
                    {isTyping && <span className="inline-block w-1.5 h-4 bg-brand-emerald ml-0.5 animate-pulse" />}
                  </div>
                </div>

                {/* App Preview Window */}
                <div className="bg-[#0a0a0c] rounded-xl border border-white/10 overflow-hidden min-h-[400px] relative">
                  <div className="bg-white/5 px-4 py-2 border-bottom border-white/5 flex items-center gap-4">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    </div>
                    <div className="bg-white/5 px-3 py-0.5 rounded-full text-[8px] text-white/40 font-mono">
                      app.iilloo.xyz
                    </div>
                  </div>
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={appIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                    >
                      {APPS[appIndex].preview}
                    </motion.div>
                  </AnimatePresence>

                  {/* Floating building indicator - Moved inside */}
                  <div className="absolute bottom-4 right-4 bg-brand-dark/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-2xl z-20">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse" />
                    <span className="text-[8px] font-bold uppercase tracking-widest text-white/60">Building...</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Features */}
          <div className="space-y-12">
            <div className="space-y-8">
              <FeatureItem 
                icon={Cpu}
                title="Instant Creation"
                description="Describe your Web3 app in natural language. Watch AI generate smart contracts, UI, and tests in real-time."
                color="text-brand-emerald"
              />
              <FeatureItem 
                icon={ShieldCheck}
                title="Auto-Audited"
                description="Every smart contract is automatically tested and audited for security vulnerabilities before deployment."
                color="text-brand-purple"
              />
              <FeatureItem 
                icon={Rocket}
                title="One-Click Deploy"
                description="Deploy to any blockchain network instantly. No configuration, no DevOps, no hassle."
                color="text-blue-400"
              />
            </div>

            {/* Powered by Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-[32px] border border-white/10 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex gap-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-emerald p-px">
                  <div className="w-full h-full rounded-2xl bg-brand-dark flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-brand-purple" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Powered by</div>
                  <h4 className="text-2xl font-black mb-4">IQF AI Network</h4>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Every app built on iilloo is powered by the IQF token ecosystem, creating value for miners and token holders.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon: Icon, title, description, color }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex gap-6 group"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
        <Icon className={`w-6 h-6 ${color}`} />
      </div>
      <div>
        <h4 className="text-2xl font-black mb-2 group-hover:text-white transition-colors">{title}</h4>
        <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
