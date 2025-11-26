import React, { useState } from 'react';
import Hero from './components/Hero';
import TheFixVsReality from './components/TheFixVsReality';
import TheWageRaid from './components/TheWageRaid';
import TheTaxTraps from './components/TheTaxTraps';
import TheWelfareDelusion from './components/TheWelfareDelusion';
import TheHousingDelusion from './components/TheHousingDelusion';
import TheUntouchables from './components/TheUntouchables';
import InteractiveCharts from './components/InteractiveCharts';
import TheFinalParadox from './components/TheFinalParadox';
import EasterEggGames from './components/EasterEggGames';
import Verdict from './components/Verdict';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-void text-zinc-200 selection:bg-blood-red selection:text-white overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noisy-net.png')]"></div>
      <div className="scanline"></div>
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 pb-32">
          
          {/* THE VERDICT - Lead with the punchline */}
          <section id="verdict" className="scroll-mt-24">
            <Verdict />
          </section>

          {/* GAMES - Interactive fun near the top */}
          <section id="arcade" className="scroll-mt-24">
            <EasterEggGames />
          </section>

          {/* INTERACTIVE - Let them discover their own horror */}
          <section id="calculator" className="scroll-mt-24">
            <InteractiveCharts />
          </section>

          {/* THE EVIDENCE - Build the case */}
          <section id="reality-check" className="scroll-mt-24">
            <TheFixVsReality />
          </section>
          
          <section id="wage-raid" className="scroll-mt-24">
            <TheWageRaid />
          </section>

          <section id="tax-traps" className="scroll-mt-24">
            <TheTaxTraps />
          </section>

          <section id="welfare" className="scroll-mt-24">
            <TheWelfareDelusion />
          </section>

          <section id="housing" className="scroll-mt-24">
            <TheHousingDelusion />
          </section>

          {/* THE THESIS - Why it's all connected */}
          <section id="untouchables" className="scroll-mt-24">
            <TheUntouchables />
          </section>

          {/* THE META - Why this matters */}
          <section id="final-paradox" className="scroll-mt-24">
            <TheFinalParadox />
          </section>
        </div>
      </main>
      
      <footer className="border-t border-zinc-800 py-12 text-center text-zinc-500 font-mono text-xs space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blood-red/10 border border-blood-red text-blood-red font-display text-sm tracking-widest uppercase mb-4">
          ★ NOVEMBER 2025 UK BUDGET SPECIAL ★
        </div>
        <p>BASED ON OFFICIAL OBR ECONOMIC & FISCAL OUTLOOK // 26 NOVEMBER 2025</p>
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-zinc-600 italic">
            "This site is not affiliated with any political party. We believe that whether the rosette is Blue, Red, or Yellow, the spreadsheet remains the same. We do not blame the clowns; we audit the circus."
          </p>
        </div>
        <p className="text-acid-green">⚡ BUILT WITH AI // THE FUTURE IS AUDITING THE PAST ⚡</p>
      </footer>
    </div>
  );
}