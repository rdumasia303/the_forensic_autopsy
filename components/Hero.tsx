import React from 'react';
import { ArrowDown, FileWarning, Wand2, TrendingDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden border-b border-zinc-800 bg-void pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-void to-void"></div>
      
      {/* Special Banner */}
      <div className="absolute top-20 left-0 w-full bg-blood-red text-white font-display font-bold text-center py-2 text-sm uppercase tracking-widest transform -rotate-1 z-20 animate-pulse-slow">
        ★ NOVEMBER 2025 UK BUDGET SPECIAL ★
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto mt-10">
        
        {/* Budget Edition Badge */}
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 border border-acid-green bg-acid-green/10 text-acid-green font-mono text-xs tracking-widest uppercase">
          <span>OBR ECONOMIC & FISCAL OUTLOOK // 26 NOV 2025</span>
        </div>
        
        {/* Warning Label */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-blood-red/50 bg-blood-red/5 text-blood-red font-display text-sm tracking-widest uppercase animate-pulse-slow">
          <FileWarning size={16} />
          <span>Warning: Contains traces of math and reality</span>
        </div>
        
        {/* Main Title */}
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-6 text-white mix-blend-difference">
          MANAGED<br/>
          <span className="text-zinc-400 md:text-transparent md:bg-clip-text md:bg-gradient-to-b md:from-zinc-200 md:to-zinc-600">DECLINE</span>
        </h1>

        {/* Subtitle Tagline */}
        <div className="flex items-center justify-center gap-2 text-zinc-500 font-receipt text-sm md:text-lg uppercase tracking-widest mb-4">
          <TrendingDown size={16} />
          <span>We do not blame the clowns; we audit the circus.</span>
          <TrendingDown size={16} />
        </div>
        
        {/* AI Credits */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <span className="px-3 py-1 bg-zinc-800 border border-zinc-700 text-zinc-400 font-mono text-[10px] uppercase tracking-wider">Gemini 3.0 Pro</span>
          <span className="text-zinc-600">×</span>
          <span className="px-3 py-1 bg-zinc-800 border border-zinc-700 text-zinc-400 font-mono text-[10px] uppercase tracking-wider">Claude Opus 4.5</span>
          <span className="text-zinc-600">×</span>
          <span className="px-3 py-1 bg-zinc-800 border border-zinc-700 text-zinc-400 font-mono text-[10px] uppercase tracking-wider">GPT-5.1</span>
          <span className="text-zinc-600">+</span>
          <span className="px-3 py-1 bg-blood-red/20 border border-blood-red text-blood-red font-mono text-[10px] uppercase tracking-wider">Someone who is r {'>'} g and finds it disgraceful</span>
        </div>
        
        {/* Description */}
        <div className="max-w-2xl mx-auto space-y-6 mb-16">
          <p className="text-xl md:text-2xl text-zinc-400 font-receipt bg-zinc-900/50 p-6 border border-zinc-800 transform rotate-1">
            "The patient has been stabilized. Unfortunately, we had to remove the vital organs to pay for the bandages."
          </p>
          
          <div className="grid grid-cols-3 gap-4 text-xs font-mono text-zinc-600 border-t border-zinc-800 pt-6">
            <div>
              <span className="block text-zinc-400 mb-1">AUDITOR</span>
              WEARY
            </div>
            <div>
              <span className="block text-zinc-400 mb-1">POLITICS</span>
              NONE
            </div>
            <div>
              <span className="block text-zinc-400 mb-1">MATH</span>
              BRUTAL
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">Based on OBR Economic & Fiscal Outlook (Nov 2025)</span>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-700">
        <ArrowDown size={24} />
      </div>
    </div>
  );
}