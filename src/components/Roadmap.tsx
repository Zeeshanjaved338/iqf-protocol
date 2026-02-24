import { motion } from "motion/react";

const steps = [
  {
    phase: "Phase 01",
    title: "Genesis",
    status: "Completed",
    items: ["Protocol Whitepaper", "Core Engine Development", "Seed Round Completion"],
  },
  {
    phase: "Phase 02",
    title: "Expansion",
    status: "In Progress",
    items: ["Testnet Launch", "Developer SDK Release", "Community Governance Alpha"],
  },
  {
    phase: "Phase 03",
    title: "Ecosystem",
    status: "Upcoming",
    items: ["Mainnet V1.0", "AI Agent Marketplace", "Cross-chain Integration"],
  },
  {
    phase: "Phase 04",
    title: "Sovereignty",
    status: "Upcoming",
    items: ["Full DAO Transition", "Global Node Network", "Institutional Partnerships"],
  },
];

export default function Roadmap() {
  return (
    <section id="governance" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-brand-emerald mb-4">The Journey</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Protocol Roadmap</h3>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div key={step.phase} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`p-8 rounded-3xl glass border border-white/5 ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-brand-emerald">{step.phase}</span>
                      <span className={`text-[10px] uppercase tracking-widest px-2 py-1 rounded border ${step.status === 'Completed' ? 'border-emerald-500/50 text-emerald-400' : 'border-white/10 text-white/40'}`}>
                        {step.status}
                      </span>
                    </div>
                    <h4 className="text-2xl font-bold mb-6">{step.title}</h4>
                    <ul className="space-y-3">
                      {step.items.map((item) => (
                        <li key={item} className="text-sm text-white/50 flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-brand-emerald" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full glass border border-white/10 bg-brand-dark">
                  <div className={`w-3 h-3 rounded-full ${step.status === 'Completed' ? 'bg-brand-emerald' : 'bg-white/20'}`} />
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
