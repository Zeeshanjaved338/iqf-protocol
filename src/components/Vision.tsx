import { motion } from "motion/react";
import { Zap, Target, Bot, Activity, Cpu, Network } from "lucide-react";

const DashboardMetric = ({ label, value, icon: Icon, color }: any) => (
  <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-1">
    <div className="flex items-center justify-between">
      <span className="text-[10px] uppercase tracking-widest text-white/40">{label}</span>
      <Icon className={`w-3 h-3 ${color}`} />
    </div>
    <div className="text-sm font-bold">{value}</div>
  </div>
);

export default function Vision() {
  return (
    <section id="vision" className="py-24 relative overflow-hidden bg-[#0a0a0c]">
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Main Background Image - Matching the user's request (Cubes/Tech) */}
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-20 mix-blend-screen" 
          style={{ filter: 'hue-rotate(220deg) brightness(0.8)' }}
        />
        
        {/* Glowing Blobs for Depth */}
        <div className="absolute top-1/4 right-0 w-[50vw] h-[50vw] bg-brand-purple/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-[40vw] h-[40vw] bg-brand-emerald/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '-2s' }} />
        
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: Dashboard UI */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full lg:max-w-[550px]"
          >
            <div className="glass rounded-[32px] border border-white/10 p-6 shadow-2xl overflow-hidden relative">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-2 py-1 rounded bg-brand-emerald/10 border border-brand-emerald/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse" />
                    <span className="text-[10px] font-mono text-brand-emerald font-bold">LIVE</span>
                  </div>
                  <span className="text-[10px] font-mono text-white/40 tracking-widest uppercase">Evumus Systems V3.1.4</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-4 gap-3 mb-8">
                <DashboardMetric label="ACC" value="98.5%" icon={Target} color="text-brand-emerald" />
                <DashboardMetric label="LAT" value="11.9 ms" icon={Zap} color="text-brand-purple" />
                <DashboardMetric label="THR" value="840.5 /s" icon={Activity} color="text-blue-400" />
                <DashboardMetric label="EFF" value="97.5%" icon={Cpu} color="text-purple-400" />
              </div>

              {/* Charts Row */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {/* Neural Stream */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-white/40">Neural Stream</span>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 rounded-full bg-brand-emerald" />
                      <div className="w-1 h-1 rounded-full bg-brand-emerald/40" />
                    </div>
                  </div>
                  <div className="h-32 flex items-end gap-1">
                    {[40, 70, 45, 90, 65, 80, 50, 95, 75, 60, 85, 40].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ delay: i * 0.05 }}
                        className="flex-1 bg-gradient-to-t from-brand-emerald/20 to-brand-emerald rounded-t-sm"
                      />
                    ))}
                  </div>
                </div>

                {/* Protocol Matrix */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-white/40">Protocol Matrix</span>
                    <span className="text-[10px] font-mono text-white/20">SEC</span>
                  </div>
                  <div className="h-32 flex items-center justify-center relative">
                    {/* Radar Chart SVG */}
                    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
                      <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
                      <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
                      <path d="M50 10 L50 90 M10 50 L90 50" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
                      <polygon 
                        points="50,20 80,40 70,70 30,70 20,40" 
                        fill="rgba(168, 85, 247, 0.2)" 
                        stroke="#a855f7" 
                        strokeWidth="1"
                      />
                      {/* Points */}
                      <circle cx="50" cy="20" r="1.5" fill="#a855f7" />
                      <circle cx="80" cy="40" r="1.5" fill="#a855f7" />
                      <circle cx="70" cy="70" r="1.5" fill="#a855f7" />
                      <circle cx="30" cy="70" r="1.5" fill="#a855f7" />
                      <circle cx="20" cy="40" r="1.5" fill="#a855f7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom Info */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <span className="text-[8px] uppercase tracking-widest text-white/20 mb-1">Active Nodes</span>
                    <div className="flex items-center gap-2">
                      <Network className="w-3 h-3 text-brand-purple" />
                      <span className="text-sm font-bold">12</span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className={`w-1 h-1 rounded-full ${i < 3 ? 'bg-brand-emerald' : 'bg-white/10'}`} />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-white/30">
                  <Activity className="w-3 h-3 text-brand-emerald" />
                  <span className="text-brand-purple">AI MARKETER</span>
                  <span>→ analyzing_campaign_roi(data) +127% conversion</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="inline-block px-4 py-1.5 rounded-full glass border border-white/10 mb-8">
                <span className="text-xs font-bold tracking-widest uppercase text-brand-purple">The Vision</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                Earning the <span className="text-gradient-purple">Future</span> <br />
                Not Just Finances
              </h2>

              <div className="space-y-6 text-lg text-white/60 leading-relaxed">
                <p>
                  This isn't just another token. This is the <span className="text-brand-emerald font-semibold">genesis of a synthetic workforce</span>. 
                  A system where your participation doesn't just grant access - it creates the foundation for a fully autonomous economy.
                </p>
                <p>
                  Through <span className="text-brand-purple font-semibold">collective intelligence</span>, we are engineering a living ecosystem that learns, adapts, and evolves. 
                  Every prediction strengthens the network. Every action fuels the revolution.
                </p>
              </div>
            </motion.div>

            {/* Quote Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass rounded-3xl p-8 border border-white/10 mb-12 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-2xl md:text-3xl font-bold leading-snug">
                "When AI controls jobs, those who own the infrastructure <span className="text-gradient-purple">own the future.</span>"
              </p>
            </motion.div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Miners", sub: "Fuel the Network", icon: Zap, color: "text-brand-purple", bg: "bg-brand-purple/10" },
                { title: "Predictions", sub: "Shape Reality", icon: Target, color: "text-brand-emerald", bg: "bg-brand-emerald/10" },
                { title: "AI Employees", sub: "Earn Forever", icon: Bot, color: "text-brand-purple", bg: "bg-brand-purple/10" },
              ].map((card, i) => (
                <motion.div 
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="glass rounded-2xl p-6 border border-white/5 flex flex-col items-center text-center group hover:border-white/20 transition-all"
                >
                  <div className={`w-12 h-12 ${card.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <card.icon className={`w-6 h-6 ${card.color}`} />
                  </div>
                  <h4 className="font-bold mb-1">{card.title}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-white/30">{card.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
