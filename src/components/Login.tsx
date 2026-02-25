import { motion, AnimatePresence } from "motion/react";
import { Globe, MessageSquare, X, HelpCircle, LayoutGrid } from "lucide-react";
import { useState, ReactNode } from "react";

interface LoginProps {
  onClose: () => void;
}

export default function Login({ onClose }: LoginProps) {
  const [referral, setReferral] = useState("");
  const [showWalletModal, setShowWalletModal] = useState(false);

  return (
    <div className="fixed inset-0 z-[100] bg-[#050508] flex flex-col items-center justify-center p-4">
      {/* Top Language Selector */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/60 text-xs font-bold tracking-widest">
        <Globe className="w-4 h-4" />
        <span>EN</span>
      </div>

      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 p-2 text-white/40 hover:text-white transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Main Login Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-xl bg-transparent border border-white/20 rounded-xl p-8 md:p-12 relative overflow-hidden"
      >
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight uppercase">
            Connect Wallet
          </h1>
          
          <p className="text-lg text-white/80 leading-relaxed mb-12 max-w-md">
            Connect your crypto wallet to start mining Evumus tokens and earning rewards in our decentralized ecosystem.
          </p>

          <div className="space-y-6">
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">
                Referral Address
              </label>
              <input
                type="text"
                value={referral}
                onChange={(e) => setReferral(e.target.value)}
                placeholder="Enter referrer's wallet address"
                className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>

            <button 
              onClick={() => setShowWalletModal(true)}
              className="w-full py-5 bg-[#d1e9ff] text-black font-black text-2xl flex items-center justify-center rounded-lg hover:bg-white transition-all active:scale-[0.98]"
            >
              &gt;&gt;&gt;
            </button>
          </div>
        </div>
      </motion.div>

      {/* Wallet Connection Modal Overlay */}
      <AnimatePresence>
        {showWalletModal && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-[360px] bg-[#141414] rounded-[24px] overflow-hidden shadow-2xl border border-white/5"
            >
              {/* Modal Header */}
              <div className="px-6 py-4 flex items-center justify-between border-b border-white/5">
                <HelpCircle className="w-5 h-5 text-white/40 cursor-pointer hover:text-white transition-colors" />
                <span className="text-sm font-bold text-white">Connect Wallet</span>
                <X 
                  className="w-5 h-5 text-white/40 cursor-pointer hover:text-white transition-colors" 
                  onClick={() => setShowWalletModal(false)}
                />
              </div>

              {/* Wallet List */}
              <div className="p-4 space-y-2">
                <WalletOption 
                  name="WalletConnect" 
                  icon={<img src="https://app.evumus.com/b580a1b4-d39c-41e6-a4f1-a87a9f84f756" className="w-full h-full" />}
                  badge="QR CODE"
                />
                <WalletOption 
                  name="Binance Wallet" 
                  icon={<img src="https://registry.walletconnect.org/v2/logo/md/9359415f-ba44-4f27-a09c-05386920f000" className="w-full h-full" />}
                />
                <WalletOption 
                  name="MetaMask" 
                  icon={<img src="https://registry.walletconnect.org/v2/logo/md/c57ca71f-02f7-4228-9851-9d5672417a00" className="w-full h-full" />}
                />
                <WalletOption 
                  name="All Wallets" 
                  icon={<div className="w-full h-full bg-blue-600 rounded-lg flex items-center justify-center"><LayoutGrid className="w-5 h-5 text-white" /></div>}
                  badge="360+"
                />
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 flex items-center justify-center gap-2 bg-white/[0.02]">
                <span className="text-[10px] text-white/40 uppercase font-bold">UX by</span>
                <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/5 border border-white/10">
                  <span className="text-[10px] text-white font-bold">.</span>
                  <span className="text-[10px] text-white/40">/</span>
                  <span className="text-[10px] text-white font-bold">reown</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Bottom Chat Icon */}
      <div className="absolute bottom-8 right-8">
        <button className="w-14 h-14 bg-[#1e50ff] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <MessageSquare className="w-6 h-6 text-white fill-white" />
        </button>
      </div>
    </div>
  );
}

function WalletOption({ name, icon, badge }: { name: string; icon: ReactNode; badge?: string }) {
  return (
    <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors group">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl overflow-hidden bg-zinc-800 flex items-center justify-center">
          {icon}
        </div>
        <span className="text-sm font-bold text-white group-hover:text-white transition-colors">{name}</span>
      </div>
      {badge && (
        <span className="px-2 py-0.5 rounded bg-blue-600/20 text-blue-400 text-[8px] font-black uppercase tracking-widest">
          {badge}
        </span>
      )}
    </button>
  );
}
