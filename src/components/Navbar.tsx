import { motion } from "motion/react";
import { Menu, X, ArrowRight, Globe, ChevronDown, Share2, Check } from "lucide-react";
import { useState } from "react";

export default function Navbar({ onConnect }: { onConnect?: () => void }) {
   const [isOpen, setIsOpen] = useState(false);
   const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
           {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.name}
              </a> 
            ))} 
            
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium hover:bg-white/10 transition-all text-white">
                <Globe className="w-3.5 h-3.5 text-brand-purple" />
                English
                <ChevronDown className="w-3 h-3 text-white/40" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          
        </div>
      </div>

      {/* Mobile Nav */}
    </nav>
  );
}
