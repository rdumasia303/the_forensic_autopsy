import React, { useState, useEffect } from 'react';
import { Skull } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 border-b border-white/10 ${scrolled ? 'bg-void/90 backdrop-blur-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 font-mono font-bold text-blood-red tracking-tighter">
          <Skull size={24} />
          <div className="flex flex-col">
            <span className="text-xl">FORENSIC_AUTOPSY</span>
            <span className="text-[10px] text-acid-green tracking-widest">// NOV 2025 BUDGET EDITION</span>
          </div>
        </div>
        <div className="hidden md:flex gap-4 font-mono text-[11px] text-zinc-400">
          <a href="#verdict" className="hover:text-blood-red transition-colors font-bold">VERDICT</a>
          <a href="#arcade" className="hover:text-yellow-400 transition-colors">🕹️ GAMES</a>
          <a href="#calculator" className="hover:text-acid-green transition-colors">📊 CALC</a>
          <a href="#wage-raid" className="hover:text-acid-green transition-colors">WAGE RAID</a>
          <a href="#tax-traps" className="hover:text-acid-green transition-colors">TAX TRAPS</a>
          <a href="#welfare" className="hover:text-acid-green transition-colors">WELFARE</a>
          <a href="#untouchables" className="hover:text-acid-green transition-colors">r {'>'} g</a>
          <a href="#final-paradox" className="hover:text-acid-green transition-colors">META</a>
        </div>
      </div>
    </nav>
  );
}