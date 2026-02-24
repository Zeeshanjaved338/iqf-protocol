import React from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  Globe, 
  ChevronDown, 
  Send, 
  Twitter,
  Rocket
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-[#050505] py-32 overflow-hidden border-t border-white/5">
      {/* Background Animated Graphic (Blockchain/Network Concept) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Central Core Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full" />

        {/* Recreating the Circular Network from Image 1 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
          <svg width="1000" height="1000" viewBox="0 0 1000 1000" className="opacity-40">
            {/* Rotating Rings */}
            <motion.circle
              cx="500" cy="500" r="120"
              fill="none" stroke="rgba(34, 211, 238, 0.2)" strokeWidth="1" strokeDasharray="10 5"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              cx="500" cy="500" r="160"
              fill="none" stroke="rgba(168, 85, 247, 0.2)" strokeWidth="1" strokeDasharray="5 10"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />

            {/* Network Lines & Nodes */}
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30) * (Math.PI / 180);
              const x1 = 500 + Math.cos(angle) * 180;
              const y1 = 500 + Math.sin(angle) * 180;
              const x2 = 500 + Math.cos(angle) * 450;
              const y2 = 500 + Math.sin(angle) * 450;

              return (
                <React.Fragment key={i}>
                  <motion.line
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="rgba(34, 211, 238, 0.15)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: i * 0.1 }}
                  />
                  {/* Outer Nodes */}
                  <motion.circle
                    cx={x2} cy={y2} r="3"
                    fill="#22d3ee"
                    animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                  />
                  {/* Connecting Web */}
                  {[...Array(3)].map((_, j) => {
                    const nextAngle = ((i + 1) * 30 + j * 5) * (Math.PI / 180);
                    const nx = 500 + Math.cos(nextAngle) * (300 + j * 50);
                    const ny = 500 + Math.sin(nextAngle) * (300 + j * 50);
                    return (
                      <line
                        key={j}
                        x1={x2} y1={y2} x2={nx} y2={ny}
                        stroke="rgba(34, 211, 238, 0.05)"
                        strokeWidth="0.5"
                      />
                    );
                  })}
                </React.Fragment>
              );
            })}
          </svg>
        </div>

        {/* Blockchain Hex Grid (Image 2 Concept) - Expanded */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" className="w-full h-full">
            <pattern id="hex-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M 50 0 L 100 25 L 100 75 L 50 100 L 0 75 L 0 25 Z"
                fill="none"
                stroke="rgba(168, 85, 247, 0.5)"
                strokeWidth="1"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#hex-grid)" />
          </svg>
        </div>

        {/* Floating Hexagons */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 border border-purple-500/20 rounded-xl"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              rotate: "45deg"
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [45, 55, 45],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center">
        {/* Language Selector Top Right */}
         <div className="absolute top-0 right-8">
        </div> 

        {/* Join Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/5 border border-cyan-500/20 mb-8"
        >
          <Rocket className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Join the AI Revolution</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-white text-center mb-12 leading-tight"
        >
          Ready to own <br />
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            AI Future?
          </span>
        </motion.h2>

        {/* Join Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-10 py-4 rounded-xl bg-zinc-900 border border-cyan-500/30 text-white font-bold tracking-widest flex items-center gap-3 shadow-[0_0_30px_rgba(34,211,238,0.1)] hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] hover:border-cyan-500 transition-all"
        >
          <span>Join Us</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>

        {/* Social Links */}
        <div className="flex items-center gap-6 mt-16">
          <motion.a
            href="#"
            whileHover={{ y: -5, scale: 1.1 }}
            className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all"
          >
            <Send className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ y: -5, scale: 1.1 }}
            className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-purple-400 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all"
          >
            <Twitter className="w-5 h-5" />
          </motion.a>
        </div>

        {/* Copyright */}
        <div className="mt-24 pt-8 border-t border-white/5 w-full text-center">
          <p className="text-[10px] font-medium text-zinc-600 uppercase tracking-[0.3em]">
            © 2024 EVUMUS AI • ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;