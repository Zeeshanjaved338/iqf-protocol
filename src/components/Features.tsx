import { motion } from "motion/react";
import { Zap, Globe, Lock, Cpu } from "lucide-react";

const features = [
  {
    title: "Ultra-Fast Execution",
    description: "Built on a high-throughput architecture capable of processing thousands of transactions per second with sub-second finality.",
    icon: Zap,
  },
  {
    title: "Decentralized AI",
    description: "Integrate AI agents directly into smart contracts, enabling autonomous decision-making and intelligent automation.",
    icon: Cpu,
  },
  {
    title: "Global Scalability",
    description: "A sharded network design that scales horizontally as more participants join the ecosystem.",
    icon: Globe,
  },
  {
    title: "Privacy First",
    description: "Advanced zero-knowledge proofs ensure that your data and transactions remain private while being verifiable.",
    icon: Lock,
  },
];

export default function Features() {
  return (
    <section id="intelligence" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-brand-emerald mb-4">Core Technology</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Built for the next generation of the internet.</h3>
            <p className="text-white/50 text-lg mb-12 leading-relaxed">
              Evumus Protocol combines the security of blockchain with the power of artificial intelligence to create a truly autonomous digital economy.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-brand-emerald" />
                  </div>
                  <h4 className="font-bold">{feature.title}</h4>
                  <p className="text-sm text-white/40">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="aspect-square rounded-3xl glass overflow-hidden flex items-center justify-center p-12">
              {/* Abstract Visual Representing AI/Blockchain */}
              <div className="relative w-full h-full">
                <motion.div 
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-brand-emerald/20 rounded-full"
                />
                <motion.div 
                  initial={{ rotate: 0 }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, ease: "linear" }}
                  className="absolute inset-8 border-2 border-dashed border-blue-500/20 rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-brand-emerald/20 blur-3xl rounded-full animate-pulse" />
                  <Cpu className="w-16 h-16 text-brand-emerald relative z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
