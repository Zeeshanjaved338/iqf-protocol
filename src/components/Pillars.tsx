import { motion } from "motion/react";
import { Coins, Brain, Shield } from "lucide-react";

const pillars = [
  {
    title: "Economy",
    description: "A community-driven economic model designed for sustainable growth and fair distribution of value.",
    icon: Coins,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    title: "Intelligence",
    description: "Collective intelligence powered by decentralized AI agents and human collaboration.",
    icon: Brain,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    title: "Governance",
    description: "Transparent, decentralized decision-making processes that empower every participant.",
    icon: Shield,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
];

export default function Pillars() {
  return (
    <section id="economy" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-brand-emerald mb-4">The Architecture</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight">Three Pillars of <br />Digital Sovereignty</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group p-8 rounded-3xl glass hover:bg-white/10 transition-all duration-500 border border-white/5"
            >
              <div className={`w-14 h-14 ${pillar.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <pillar.icon className={`w-7 h-7 ${pillar.color}`} />
              </div>
              <h4 className="text-2xl font-bold mb-4">{pillar.title}</h4>
              <p className="text-white/50 leading-relaxed">
                {pillar.description}
              </p>
              <div className="mt-8 pt-8 border-t border-white/5">
                <button className="text-sm font-bold flex items-center gap-2 group-hover:text-brand-emerald transition-colors">
                  Learn More 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
