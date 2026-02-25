import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const CountdownBox = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="w-16 h-20 md:w-20 md:h-24 glass rounded-2xl flex items-center justify-center border border-white/10 relative group overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="text-3xl md:text-4xl font-bold tracking-tight text-white">{value}</span>
      {/* Glow effect */}
      <div className="absolute -inset-[1px] rounded-2xl border border-brand-emerald/30 blur-[2px] pointer-events-none" />
    </div>
    <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 mt-2">{label}</span>
  </div>
);

export default function Hero({ onEnterProtocol }: { onEnterProtocol?: () => void }) {
  const [timeLeft, setTimeLeft] = useState({ d: "33", h: "05", m: "15", s: "37" });

  // Simple countdown logic simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const s = parseInt(prev.s);
        if (s > 0) return { ...prev, s: (s - 1).toString().padStart(2, '0') };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToVision = () => {
    const visionSection = document.getElementById('vision');
    if (visionSection) {
      visionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-40 overflow-hidden bg-[#0a0a0c]">
      {/* Background Particles & Texture */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated Stars/Particles */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30" />
        
        {/* Wavy Texture at bottom - Multiple Layers for Depth */}
        <div className="absolute bottom-0 left-0 right-0 h-[80vh] pointer-events-none">
          {/* Main Wave Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/40 via-brand-purple/10 to-transparent" />
          
          {/* Simulated Wavy Lines/Texture - Increased Density */}
          <div className="absolute bottom-0 left-0 right-0 h-full opacity-30 mix-blend-screen overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0 }}
                animate={{ 
                  x: [0, -50, 0],
                  y: [0, 10, 0]
                }}
                transition={{ 
                  duration: 8 + i, 
                  ease: "easeInOut" 
                }}
                className="absolute bottom-0 left-[-10%] w-[120%] h-[300px] border-t border-brand-purple/20 rounded-[100%] blur-[2px]"
                style={{ 
                  bottom: `${i * 25 - 50}px`,
                  opacity: 1 - (i * 0.08),
                  transform: `rotate(${i * 1.5 - 5}deg)`
                }}
              />
            ))}
          </div>
        </div>

        {/* Scanlines Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] pointer-events-none opacity-20" />

        {/* Bottom Fade Out */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0a0a0c] to-transparent z-[5]" />

        {/* Floating Blobs */}
        <div className="absolute -bottom-40 -left-40 w-[80vw] h-[80vw] bg-brand-purple/15 blur-[120px] rounded-full animate-float" />
        <div className="absolute -bottom-40 -right-40 w-[60vw] h-[60vw] bg-brand-emerald/10 blur-[120px] rounded-full animate-float" style={{ animationDelay: '-3s' }} />
        
        {/* Grid Overlay - More pronounced */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center flex flex-col items-center">
        {/* Protocol Activation Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-12"
        >
          <span className="text-sm font-medium text-white/80">
            Protocol Activation <span className="text-brand-purple font-bold">29 March</span>
          </span>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex gap-4 md:gap-6 mb-16"
        >
          <CountdownBox value={timeLeft.d} label="D" />
          <CountdownBox value={timeLeft.h} label="H" />
          <CountdownBox value={timeLeft.m} label="M" />
          <CountdownBox value={timeLeft.s} label="S" />
        </motion.div>

        {/* Logo & Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-6 mb-8"
        >
          {/* Star Icon */}
          <div className="relative w-16 h-16 md:w-24 md:h-24">
            <div className="absolute inset-0 bg-brand-purple/20 blur-2xl rounded-full" />
            <svg viewBox="0 0 100 100" className="w-full h-full text-white drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              <path 
                fill="currentColor" 
                d="M50 0L55 35L90 40L60 55L70 90L50 70L30 90L40 55L10 40L45 35Z" 
                className="animate-pulse"
              />
            </svg>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-gradient-purple">
            Evumus AI
          </h1>
        </motion.div>

        {/* Heading Section 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            The Future is Predictable<span className="text-brand-purple">|</span>
          </h2>
          <div className="space-y-2 text-lg md:text-xl font-medium text-white/70">
            <p>Where AI meets <span className="text-brand-emerald">Web3</span>.</p>
            <p>Where predictions become <span className="text-brand-purple">power</span>.</p>
            <p>Where AI Employees <span className="text-[#0ea5e9]">build your future</span>.</p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
        >
          <button 
            onClick={onEnterProtocol}
            className="group relative px-8 py-4 bg-brand-dark rounded-xl border border-brand-emerald/50 text-white font-bold transition-all hover:glow-cyan"
          >
            <div className="absolute inset-0 bg-brand-emerald/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            <span className="relative flex items-center gap-2">
              Enter the Protocol <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button 
            onClick={scrollToVision}
            className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-all"
          >
            Explore Vision
          </button>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-3 gap-12 md:gap-24 border-t border-white/5 pt-12"
        >
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-brand-purple">100%</div>
            <div className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Decentralized</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white flex items-center justify-center gap-2">
              <span className="text-4xl leading-none">∞</span>
            </div>
            <div className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Intelligence</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-brand-purple">0</div>
            <div className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Limits</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-10 h-10 rounded-full glass flex items-center justify-center border border-white/10 animate-bounce">
          <ChevronDown className="w-5 h-5 text-white/40" />
        </div>
      </motion.div>
    </section>
  );
}
