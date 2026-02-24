import { motion } from "motion/react";
import { Brain, ShieldCheck, TrendingUp, PlusCircle, Infinity } from "lucide-react";

const FeatureCard = ({ title, description, stat, statLabel, icon: Icon }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass p-8 rounded-3xl border border-white/10 hover:border-brand-purple/30 transition-all group relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    
    <div className="relative z-10">
      <div className="flex items-start justify-between mb-8">
        <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 flex items-center justify-center border border-brand-purple/20 group-hover:scale-110 transition-transform">
          <Icon className="w-6 h-6 text-brand-purple" />
        </div>
        <div className="text-right">
          <div className="text-2xl font-black text-brand-purple leading-none">{stat}</div>
          <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest mt-1">{statLabel}</div>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-purple transition-colors">{title}</h3>
      <p className="text-white/50 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  </motion.div>
);

export default function PredictMe() {
  return (
    <section className="py-24 relative bg-[#0a0a0c] overflow-hidden">
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-purple/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-emerald/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '-2s' }} />
        
        {/* Floating Voxels (Simulated with CSS) */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 0, rotate: 0, opacity: 0.1 }}
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 10, 0],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ 
                duration: 5 + i, 
                ease: "easeInOut",
                delay: i * 0.5
              }}
              className="absolute w-24 h-24 border border-white/5 rounded-2xl bg-white/2"
              style={{ 
                top: `${20 + (i * 15)}%`, 
                left: `${10 + (i * 15)}%`,
                transform: 'rotateX(45deg) rotateZ(45deg)'
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full glass border border-white/10 mb-8"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-brand-purple">PredictMe.AI</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight"
          >
            Your <span className="text-gradient-purple">Insight</span> <br />
            Is Your <span className="text-gradient-purple">Power</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-white/50 text-lg leading-relaxed"
          >
            Create your own prediction windows on world events. Make yes/no predictions. 
            Win to unlock miner upgrades and reduced staking time. Never lose your assets.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard 
            title="AI Training Ground"
            stat="24/7"
            statLabel="Learning"
            icon={Brain}
            description="Every prediction trains the AI. Every forecast shapes the protocol. Your predictions aren't just guesses—they're training data for a superintelligent system."
          />
          <FeatureCard 
            title="No-Loss Participation"
            stat="100%"
            statLabel="Assets Protected"
            icon={ShieldCheck}
            description="Stake to participate in prediction windows. Win to reduce staking duration and unlock miner boosts. Lose to extend the period—your assets are always protected."
          />
          <FeatureCard 
            title="Trust & Reputation"
            stat="∞"
            statLabel="Growth Potential"
            icon={TrendingUp}
            description="Accurate forecasts build your reputation. High reputation unlocks better protocol benefits, validation power, and improved limits on trusted events."
          />
          <FeatureCard 
            title="Create Own Events"
            stat="∞"
            statLabel="Event Freedom"
            icon={PlusCircle}
            description="Launch prediction windows on any topic, or clone and adjust existing ones. With smart AI verification and top predictor support, the system autonomously validates results. Earn additional benefits based on your event's volume."
          />
        </div>

      </div>
    </section>
  );
}
