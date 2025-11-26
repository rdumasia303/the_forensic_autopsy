import React from 'react';
import { Cpu, Skull, Clock, Brain, Sparkles, Zap } from 'lucide-react';

export default function TheFinalParadox() {
  return (
    <div className="space-y-16">
      
      {/* Header */}
      <div className="text-center border-b border-zinc-800 pb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-acid-green text-black font-display font-bold text-xs mb-6 transform -rotate-1">
          <Sparkles size={16} />
          <span>META: WHY THIS SITE EXISTS</span>
          <Sparkles size={16} />
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4">
          THE <span className="text-acid-green">FINAL</span> PARADOX
        </h2>
      </div>

      {/* The Meta Reveal */}
      <div className="bg-zinc-900 border-2 border-acid-green p-8 md:p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-acid-green/5 via-transparent to-transparent"></div>
        
        <div className="relative z-10 space-y-8">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-acid-green/20 border border-acid-green">
              <Zap className="text-acid-green" size={32} />
            </div>
            <div>
              <h3 className="font-display font-bold text-3xl text-white uppercase">The Uncomfortable Truth</h3>
              <p className="text-acid-green font-mono text-sm">THIS SITE WAS BUILT IN MINUTES. THE BUDGET TOOK MONTHS.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg text-zinc-300 font-receipt leading-relaxed">
                One person with AI just <span className="text-acid-green font-bold">out-analysed the Treasury</span>. 
                Not because they're smarter. Because the tools have changed.
              </p>
              <p className="text-sm text-zinc-400 font-receipt leading-relaxed">
                This site forensically dissected a 200-page OBR document, exposed the £67bn fiscal drag, graphed the EMTRs, 
                found every trap—and delivered it in a format that doesn't require an economics degree.
              </p>
            </div>
            
            <div className="bg-zinc-950 border border-zinc-800 p-6">
              <div className="text-xs font-mono text-zinc-500 uppercase mb-4">The Comparison</div>
              <div className="space-y-3 text-sm font-receipt">
                <div className="flex justify-between text-zinc-400">
                  <span>Treasury headcount</span>
                  <span className="text-white">2,000+ staff</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>OBR verification</span>
                  <span className="text-white">Weeks</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Media deep-dive</span>
                  <span className="text-white">Days</span>
                </div>
                <div className="flex justify-between text-zinc-400 border-t border-zinc-700 pt-3">
                  <span>This site</span>
                  <span className="text-acid-green font-bold">Minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Real Point */}
      <div className="bg-zinc-950 border-2 border-white p-8 md:p-12">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-3">
            <Brain className="text-acid-green" size={40} />
            <Skull className="text-blood-red" size={40} />
          </div>
          
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white uppercase leading-tight">
            The Budget taxes <span className="text-blood-red">intelligence</span> (your work)<br/>
            to fund a State that refuses to use <span className="text-acid-green">intelligence</span> (AI).
          </h3>

          <div className="max-w-2xl mx-auto space-y-4 text-zinc-400 font-receipt">
            <p>
              They raised Employer NICs (punishing hiring). They froze thresholds (punishing effort). 
              They kept CGT low (rewarding sitting on assets).
            </p>
            <p>
              Meanwhile: <span className="text-white">the NHS runs on fax machines</span>. Planning decisions take years. 
              HMRC can't process basic queries.
            </p>
          </div>

          <div className="pt-8 border-t border-zinc-800 max-w-3xl mx-auto">
            <div className="bg-acid-green/10 border border-acid-green p-6">
              <p className="text-acid-green font-display font-bold text-lg">
                This website isn't just satirizing the Budget.
              </p>
              <p className="text-white font-receipt mt-2">
                It's demonstrating the obsolescence of the institutions that wrote it.
              </p>
              <p className="text-zinc-500 font-mono text-xs mt-4">
                The future is auditing the past. And the past is not amused.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Build Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-zinc-950 border border-zinc-800 p-6 text-center">
          <div className="text-3xl font-black text-acid-green mb-1">AI</div>
          <div className="text-xs text-zinc-500 uppercase">Powered</div>
        </div>
        <div className="bg-zinc-950 border border-zinc-800 p-6 text-center">
          <div className="text-3xl font-black text-white mb-1">1</div>
          <div className="text-xs text-zinc-500 uppercase">Person</div>
        </div>
        <div className="bg-zinc-950 border border-zinc-800 p-6 text-center">
          <div className="text-3xl font-black text-white mb-1">200+</div>
          <div className="text-xs text-zinc-500 uppercase">Pages Parsed</div>
        </div>
        <div className="bg-zinc-950 border border-blood-red p-6 text-center">
          <div className="text-3xl font-black text-blood-red mb-1">∞</div>
          <div className="text-xs text-zinc-500 uppercase">Civil Servants Worried</div>
        </div>
      </div>

    </div>
  );
}
