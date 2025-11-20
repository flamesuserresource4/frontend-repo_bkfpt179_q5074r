import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md px-4 py-3 sm:py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-fuchsia-500 to-cyan-400 shadow-lg shadow-cyan-500/20" />
            <div>
              <p className="text-sm leading-none text-slate-300">ForBrandFactory</p>
              <p className="text-xs text-slate-400">Pvt Limited</p>
            </div>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#capabilities" className="text-sm text-slate-300 hover:text-white transition-colors">Capabilities</a>
            <a href="#value" className="text-sm text-slate-300 hover:text-white transition-colors">Value</a>
            <a href="#systems" className="text-sm text-slate-300 hover:text-white transition-colors">Systems</a>
            <a href="#contact" className="text-sm text-slate-300 hover:text-white transition-colors">Contact</a>
          </div>

          <button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10 transition md:hidden">
            <Menu size={18} />
            Menu
          </button>
        </div>
      </nav>
    </header>
  );
}
