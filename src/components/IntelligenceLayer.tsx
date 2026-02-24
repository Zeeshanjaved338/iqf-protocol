import { motion } from "motion/react";
import { Brain, Cpu, Network, Zap } from "lucide-react";

const FeatureItem = ({ icon: Icon, title, description }: any) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex gap-6 group"
  >
    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-emerald/10 flex items-center justify-center border border-brand-emerald/20 group-hover:bg-brand-emerald/20 transition-all">
      <Icon className="w-6 h-6 text-brand-emerald" />
    </div>
    <div>
      <h4 className="text-lg font-bold mb-2 group-hover:text-brand-emerald transition-colors">{title}</h4>
      <p className="text-white/50 text-sm leading-relaxed max-w-md">
        {description}
      </p>
    </div>
  </motion.div>
);

export default function IntelligenceLayer() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#0a0a0c]">
      {/* Background Image - Neural Network Style */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-screen"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1920')`,
            filter: 'hue-rotate(180deg) brightness(0.8)' 
          }}
        />
        {/* Gradient Overlays for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-[#0a0a0c]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border border-brand-emerald/20 w-fit"
            >
              <div className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-emerald">Neural Infrastructure</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-black tracking-tighter leading-tight"
            >
              The <span className="text-gradient-cyan">Intelligence</span> <br />
              Layer of Web3
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg leading-relaxed max-w-xl"
            >
              Evumus Protocol isn't just a blockchain; it's a living, breathing neural network. 
              Our architecture enables autonomous agents to communicate, learn, and execute 
              complex workflows with zero human intervention.
            </motion.p>

            <div className="flex flex-col gap-10 mt-4">
              <FeatureItem 
                icon={Brain}
                title="Cognitive Consensus"
                description="Our unique consensus mechanism leverages AI validation to ensure every transaction is not just valid, but optimized for the network's goals."
              />
              <FeatureItem 
                icon={Network}
                title="Plexus Routing"
                description="Dynamic data routing inspired by neural pathways, ensuring sub-millisecond latency for inter-agent communication."
              />
              <FeatureItem 
                icon={Cpu}
                title="Edge Intelligence"
                description="Deploying lightweight AI models directly to the edge, enabling real-time decision making without centralized bottlenecks."
              />
            </div>
          </div>

          {/* Right Visual - Abstract Data Visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square glass rounded-[40px] border border-white/10 p-12 relative overflow-hidden group">
              {/* Animated Grid Lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px]" />
              
              {/* Central Core */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-brand-emerald/20 blur-3xl rounded-full animate-pulse" />
                  <Zap className="w-16 h-16 text-brand-emerald drop-shadow-[0_0_15px_rgba(0,242,255,0.5)]" />
                  
                  {/* Orbiting Nodes */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ rotate: i * 45 }}
                      animate={{ rotate: (i * 45) + 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-[-40px] pointer-events-none"
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-emerald shadow-[0_0_10px_rgba(0,242,255,0.8)]" />
                    </motion.div>
                  ))}
                </div>

                {/* Outer Ring */}
                <div className="absolute inset-0 border-2 border-dashed border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
              </div>

              {/* Data Stream Overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Network Throughput</span>
                  <span className="text-[10px] font-mono text-brand-emerald">98.4% Efficiency</span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "98.4%" }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="h-full bg-brand-emerald glow-cyan"
                  />
                </div>
              </div>
            </div>

            {/* Floating Accents */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-purple/20 blur-[80px] rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-emerald/20 blur-[80px] rounded-full" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
