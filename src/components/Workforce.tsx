"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";

import { 
  TrendingUp, 
  Code, 
  Shield, 
  Wrench, 
  MessageSquare, 
  Palette, 
  BarChart3,
  Cpu,
  Infinity as InfinityIcon,
  Zap,
  ChevronLeft,
  ChevronRight,
  Brain,
  Users,
  Scale,
  Globe
} from "lucide-react";

export const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "with you";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setIndex(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505] text-white px-4 pt-20">
      {/* Background Grid/Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050505] to-[#050505]"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            AI Employees
          </span>
          <br />
          <span className="inline-block">
            That Work <span className="text-purple-400/80">{text}</span>
            <span className="animate-pulse">|</span>
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-zinc-400 mb-2 max-w-2xl mx-auto"
        >
          While AI replaces human jobs, you'll own the AI working as a replacement.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl font-medium text-cyan-400"
        >
          You earn while AI works.
        </motion.p>

        {/* Animated Central Graphic - Recreated from User Image */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
          className="mt-16 relative w-full max-w-2xl mx-auto aspect-video flex items-center justify-center"
        >
          {/* Background Code Elements */}
          <div className="absolute top-0 left-1/4 text-[10px] font-mono text-purple-500/40 tracking-widest whitespace-nowrap">
            D 0xBEEF 0xCAFE 0xFACE 0x1337 0xABCD
          </div>
          <div className="absolute bottom-10 right-1/4 text-[10px] font-mono text-cyan-500/40 tracking-widest">
            11011010 101100
          </div>

          {/* Glowing Background Elements */}
          <div className="absolute inset-0 bg-purple-500/5 blur-[120px] rounded-full"></div>
          <div className="absolute inset-0 bg-cyan-500/5 blur-[100px] rounded-full scale-75"></div>

          {/* Tilted Panel Container with Image */}
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotateY: [-15, -10, -15],
              rotateX: [5, 10, 5]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative w-80 h-96 preserve-3d group"
          >
            {/* Main Image Graphic */}
            <motion.div 
              animate={{ 
                rotateZ: [0, 2, 0, -2, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <img 
                src="https://evumus-2saj.vercel.app/assets/ai-monolith-CF6PiYJB.png" 
                alt="AI Futuristic Panel"
                className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(34,211,238,0.3)] rounded-xl"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Glows to match the image style */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 pointer-events-none rounded-xl"></div>
              
              {/* Central Circular Animation Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-40 h-40 border border-cyan-500/20 rounded-full flex items-center justify-center"
                >
                  <div className="w-32 h-32 border border-purple-500/20 rounded-full"></div>
                </motion.div>
              </div>
            </motion.div>

            {/* Corner Accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-purple-400 rounded-br-lg shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
          </motion.div>

          {/* Side Bars - Left (Cyan) */}
          <div className="absolute left-[10%] top-1/2 -translate-y-1/2 flex flex-col gap-2 items-end">
            <motion.div animate={{ width: [20, 40, 20] }} transition={{ duration: 2, repeat: Infinity }} className="h-1.5 bg-cyan-500/60 rounded-full" />
            <motion.div animate={{ width: [30, 50, 30] }} transition={{ duration: 2.5, repeat: Infinity }} className="h-1.5 bg-cyan-500/40 rounded-full" />
            <motion.div animate={{ width: [25, 45, 25] }} transition={{ duration: 2.2, repeat: Infinity }} className="h-1.5 bg-cyan-500/20 rounded-full" />
          </div>

          {/* Side Bars - Right (Purple) */}
          <div className="absolute right-[10%] top-1/2 -translate-y-1/2 flex flex-col gap-2 items-start">
            <motion.div animate={{ width: [20, 40, 20] }} transition={{ duration: 2.1, repeat: Infinity }} className="h-1.5 bg-purple-500/60 rounded-full" />
            <motion.div animate={{ width: [30, 50, 30] }} transition={{ duration: 2.6, repeat: Infinity }} className="h-1.5 bg-purple-500/40 rounded-full" />
            <motion.div animate={{ width: [25, 45, 25] }} transition={{ duration: 2.3, repeat: Infinity }} className="h-1.5 bg-purple-500/20 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const employees = [
  {
    id: 1,
    title: "Strategy",
    icon: <Brain className="w-6 h-6 text-cyan-400" />,
    description: "Data-driven decisions",
    status: "Formulating plans...",
    color: "cyan"
  },
  {
    id: 2,
    title: "Marketing",
    icon: <TrendingUp className="w-6 h-6 text-cyan-400" />,
    description: "Autonomous campaigns",
    status: "Analyzing campaign ROI...",
    color: "cyan"
  },
  {
    id: 3,
    title: "Engineering",
    icon: <Code className="w-6 h-6 text-cyan-400" />,
    description: "Self-coding systems",
    status: "Optimizing performance...",
    color: "cyan"
  },
  {
    id: 4,
    title: "Security",
    icon: <Shield className="w-6 h-6 text-cyan-400" />,
    description: "Real-time protection",
    status: "Blocking threats...",
    color: "cyan"
  },
  {
    id: 5,
    title: "Product",
    icon: <Wrench className="w-6 h-6 text-cyan-400" />,
    description: "User-driven evolution",
    status: "Building roadmaps...",
    color: "cyan"
  },
  {
    id: 6,
    title: "Sales",
    icon: <MessageSquare className="w-6 h-6 text-cyan-400" />,
    description: "24/7 conversion",
    status: "Closing deals...",
    color: "cyan"
  },
  {
    id: 7,
    title: "Design",
    icon: <Palette className="w-6 h-6 text-cyan-400" />,
    description: "Infinite creativity",
    status: "Creating mockups...",
    color: "cyan"
  },
  {
    id: 8,
    title: "Analytics",
    icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
    description: "Perfect insights",
    status: "Processing data...",
    color: "cyan"
  },
  {
    id: 9,
    title: "HR",
    icon: <Users className="w-6 h-6 text-cyan-400" />,
    description: "Talent acquisition",
    status: "Screening candidates...",
    color: "cyan"
  },
  {
    id: 10,
    title: "Legal",
    icon: <Scale className="w-6 h-6 text-cyan-400" />,
    description: "Compliance automation",
    status: "Reviewing contracts...",
    color: "cyan"
  },
  {
    id: 11,
    title: "Global",
    icon: <Globe className="w-6 h-6 text-cyan-400" />,
    description: "Market expansion",
    status: "Localizing content...",
    color: "cyan"
  }
];

const EmployeeCard = ({ employee }: { employee: typeof employees[0]; key?: React.Key }) => {
  const [statusText, setStatusText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setStatusText(employee.status.slice(0, i));
      i++;
      if (i > employee.status.length) i = 0;
    }, 150);
    return () => clearInterval(interval);
  }, [employee.status]);

  return (
    <motion.div
      animate={{ 
        scale: [1, 0.99, 1],
      }}
      transition={{ 
        duration: 5, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      whileHover={{ 
        y: -5, 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="relative min-w-[260px] h-[300px] bg-[#0a0a0a] border border-white/5 rounded-xl p-6 flex flex-col items-start justify-between group cursor-pointer overflow-hidden transition-all hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
    >
      {/* Background Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon Container */}
      <div className="relative w-full flex justify-center mb-4">
        <div className="relative w-16 h-16 rounded-xl bg-zinc-900/50 border border-white/10 flex items-center justify-center overflow-hidden">
          {/* Inner Grid for Icon */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#22d3ee20_1px,transparent_1px),linear-gradient(to_bottom,#22d3ee20_1px,transparent_1px)] bg-[size:8px_8px]"></div>
          {employee.icon}
          
          {/* Corner accents */}
          <div className="absolute top-1 right-1 w-1 h-1 border-t border-r border-cyan-400/30" />
          <div className="absolute bottom-1 left-1 w-1 h-1 border-b border-l border-cyan-400/30" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full space-y-1">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-bold text-white tracking-tight">{employee.title}</h3>
          <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-zinc-800/50 border border-white/10">
            <span className="text-[7px] font-bold text-cyan-400 uppercase">AI</span>
            <span className="text-[7px] font-medium text-zinc-500 uppercase">Employee</span>
          </div>
        </div>
        <p className="text-[11px] text-zinc-500 font-medium">{employee.description}</p>
      </div>

      {/* Status Bar */}
      <div className="relative z-10 w-full pt-4">
        <div className="flex items-center gap-2 text-[10px] font-mono text-cyan-400/90">
          <div className="w-2 h-2 rounded-full bg-cyan-500/80 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
          <span className="truncate">{statusText}</span>
          <span className="animate-pulse">|</span>
        </div>
      </div>

      {/* Card Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:20px_20px]"></div>
    </motion.div>
  );
};

export const EmployeeHub = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-white tracking-widest uppercase mb-6"
        >
          AI Employees Hub
        </motion.h2>
        
        <div className="flex flex-wrap items-center justify-center gap-8 text-[10px] md:text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">
          <div className="flex items-center gap-2 group cursor-default">
            <InfinityIcon className="w-4 h-4 text-cyan-500 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-cyan-400 transition-colors">Connections</span>
          </div>
          <div className="w-px h-4 bg-zinc-800" />
          <div className="flex items-center gap-2 group cursor-default">
            <Zap className="w-4 h-4 text-yellow-500 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-yellow-400 transition-colors">Processing</span>
          </div>
          <div className="w-px h-4 bg-zinc-800" />
          <div className="flex items-center gap-2 group cursor-default">
            <Cpu className="w-4 h-4 text-purple-500 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-purple-400 transition-colors">99.9% Uptime</span>
          </div>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full group/carousel">
        {/* Navigation Buttons */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full bg-zinc-900/90 border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-500 transition-all shadow-[0_0_20px_rgba(34,211,238,0.1)]"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
        </div>
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full bg-zinc-900/90 border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-500 transition-all shadow-[0_0_20px_rgba(34,211,238,0.1)]"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Cards Scroll */}
        <div 
          ref={scrollRef}
          className="flex gap-8 px-4 md:px-8 overflow-x-auto pb-16 no-scrollbar scroll-smooth"
        >
          {employees.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
};
const Community = () => {
  return (
    <>
      <Hero />
      <EmployeeHub />
    </>
  );
};

export default Community;