import { motion } from "motion/react";

const stats = [
  { label: "Total Value Locked", value: "$1.2B+" },
  { label: "Active Nodes", value: "4,200+" },
  { label: "Community Members", value: "150K+" },
  { label: "AI Agents Deployed", value: "25K+" },
];

export default function Community() {
  return (
    <section id="ecosystem" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-emerald/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="glass p-12 md:p-20 rounded-[40px] border border-white/10 text-center">
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-brand-emerald mb-4">The Network</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-12">Join the Revolution.</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-10 py-5 bg-brand-emerald text-black font-bold rounded-full hover:scale-105 transition-all">
              Become a Validator
            </button>
            <button className="w-full sm:w-auto px-10 py-5 glass text-white font-bold rounded-full hover:bg-white/10 transition-all">
              Join Discord
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
