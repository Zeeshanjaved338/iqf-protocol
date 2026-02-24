import { Twitter, Github, MessageSquare, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-emerald rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">E</span>
              </div>
              <span className="text-xl font-bold tracking-tighter">EVUMUS</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              The engine for perpetual innovation. Building the architecture for the next generation of digital economies.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-emerald hover:text-black transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-emerald hover:text-black transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-emerald hover:text-black transition-all">
                <MessageSquare className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-emerald hover:text-black transition-all">
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-bold mb-6">Protocol</h5>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-brand-emerald transition-colors">Economy</a></li>
              <li><a href="#" className="hover:text-brand-emerald transition-colors">Intelligence</a></li>
              <li><a href="#" className="hover:text-brand-emerald transition-colors">Governance</a></li>
              <li><a href="#" className="hover:text-brand-emerald transition-colors">Whitepaper</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6">Ecosystem</h5>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-brand-emerald transition-colors">Developers</a></li>
              <li><a href="#" className="hover:text-brand-emerald transition-colors">Grants</a></li>
              <li><a href="#" className="hover:text-brand-emerald transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-brand-emerald transition-colors">Brand Assets</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6">Newsletter</h5>
            <p className="text-sm text-white/40 mb-4">Stay updated with the latest protocol developments.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-brand-emerald transition-colors"
              />
              <button className="px-4 py-2 bg-white text-black text-sm font-bold rounded-lg hover:bg-brand-emerald transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} Evumus Protocol. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-white/20">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
