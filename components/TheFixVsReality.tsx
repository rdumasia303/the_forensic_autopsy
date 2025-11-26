import React from 'react';
import { AlertTriangle, TrendingDown, Ghost, Skull, ThumbsDown, CheckCircle2, Bomb } from 'lucide-react';

const VerdictCard = ({ title, fix, reality, verdict, rating }: { title: string, fix: string, reality: string, verdict: string, rating: 'PASS' | 'FAIL' | 'MEH' }) => {
  const ratingColor = rating === 'PASS' ? 'text-acid-green border-acid-green' : rating === 'FAIL' ? 'text-blood-red border-blood-red' : 'text-orange-400 border-orange-400';
  
  return (
    <div className="relative border border-zinc-800 bg-zinc-900/20 backdrop-blur-sm overflow-hidden hover:border-zinc-600 transition-all duration-500 group">
      <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
        {rating === 'PASS' ? <CheckCircle2 size={64} /> : rating === 'FAIL' ? <Skull size={64} /> : <Ghost size={64} />}
      </div>

      <div className="p-8 relative z-10">
        <div className="flex justify-between items-start mb-8">
          <h3 className="text-2xl font-black tracking-tight uppercase max-w-[70%]">{title}</h3>
          <div className={`font-display font-bold text-xl border-2 px-3 py-1 transform rotate-3 ${ratingColor}`}>
            {rating}
          </div>
        </div>

        <div className="space-y-8 font-receipt text-sm">
          <div className="relative pl-6 border-l-2 border-zinc-700">
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-zinc-900 border-2 border-zinc-700 rounded-full"></div>
            <div className="text-xs font-display text-zinc-500 uppercase mb-2">The Gov's Pitch</div>
            <p className="text-zinc-300 italic">"{fix}"</p>
          </div>

          <div className="relative pl-6 border-l-2 border-blood-red">
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-void border-2 border-blood-red rounded-full animate-pulse"></div>
            <div className="text-xs font-display text-blood-red uppercase mb-2">The Cold Reality</div>
            <p className="text-white font-bold">{reality}</p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-zinc-800/50">
          <span className="font-mono text-[10px] text-zinc-600 uppercase block mb-2">Forensic Summary</span>
          <p className="text-zinc-400 font-mono text-xs leading-relaxed">
            <span className="text-acid-green">{'>>>'}</span> {verdict}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function TheFixVsReality() {
  return (
    <div className="space-y-16">
      <div className="text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4">
          VIBE CHECK: <span className="text-blood-red">FAILED</span>
        </h2>
        <p className="font-display text-zinc-500 max-w-2xl">
          We cross-referenced the Government's press release with the OBR's spreadsheet. The results are... concerning.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <VerdictCard 
          title="The 'Fiscal Black Hole'"
          rating="MEH"
          fix="Deficit falls from 4.5% to 1.9%. Debt stabilizes at 96%."
          reality="They stabilized the patient by draining all their blood. Technical solvency achieved by extracting record cash from your wallet."
          verdict="Solves the Treasury's math problem. Creates a cash-flow crisis for everyone else."
        />
        
        <VerdictCard 
          title="Child Poverty"
          rating="PASS"
          fix="Removing the two-child limit costs £3bn."
          reality="Actually works. 450,000 kids lifted out of poverty. The central 'moral' plank designed to pacify the left."
          verdict="The one unambiguous win. A massive transfer of wealth that actually fixes destitution."
        />

        <VerdictCard 
          title="Public Services"
          rating="FAIL"
          fix="Record cash injection for departments."
          reality="Spending FALLS as share of GDP. NHS growth (2.4%) is stagnation. Prisons/Courts face 3.3% cuts."
          verdict="A holding pattern. You will still wait 3 weeks to see a GP who will tell you there's no medicine."
        />

        <VerdictCard 
          title="Growth & Productivity"
          rating="FAIL"
          fix="An 'Investment Budget' for the future."
          reality="Growth DOWNGRADED. Productivity FLAT (1%). Investment WEAKER. OBR: 'Despite several substantial downgrades since 2010.'"
          verdict="The catastrophic failure. We aren't making enough stuff to justify higher wages. Taxing jobs (Employer NICs) made this harder."
        />
      </div>

      {/* The Hidden Bombs */}
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <Bomb className="text-blood-red" size={32} />
          <h3 className="font-display font-bold text-2xl text-white uppercase">The Hidden Bombs</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-zinc-950 border-2 border-blood-red p-6 space-y-4">
            <div className="text-xs font-mono text-blood-red uppercase">THE £19BN FRAGILITY</div>
            <p className="text-sm text-zinc-400 font-receipt">
              If wage growth is <span className="text-white font-bold">just 1.8% lower</span> than forecast, the Budget loses £19 billion. The £22bn surplus evaporates.
            </p>
            <div className="text-xs text-zinc-600 font-mono">OBR Para 1.28</div>
          </div>
          
          <div className="bg-zinc-950 border-2 border-blood-red p-6 space-y-4">
            <div className="text-xs font-mono text-blood-red uppercase">THE STOCK MARKET GAMBLE</div>
            <p className="text-sm text-zinc-400 font-receipt">
              If equities fall 35% (a normal correction), the deficit increases by <span className="text-white font-bold">£26 billion</span>. Your fiscal headroom is invested in the S&P 500.
            </p>
            <div className="text-xs text-zinc-600 font-mono">OBR Para 7.30-7.34</div>
          </div>
          
          <div className="bg-zinc-950 border-2 border-acid-green p-6 space-y-4">
            <div className="text-xs font-mono text-acid-green uppercase">THE COMPOSITION SCAM</div>
            <p className="text-sm text-zinc-400 font-receipt">
              GDP down. Productivity down. But tax take UP. Why? Because wages (taxed at 40%) grew while profits (taxed at 17%) fell. <span className="text-acid-green font-bold">More tax from less activity.</span>
            </p>
            <div className="text-xs text-zinc-600 font-mono">OBR Box 2.1</div>
          </div>
          
          <div className="bg-zinc-950 border-2 border-orange-500 p-6 space-y-4">
            <div className="text-xs font-mono text-orange-500 uppercase">THE STUDENT LOAN PONZI</div>
            <p className="text-sm text-zinc-400 font-receipt">
              <span className="text-white font-bold">£26bn</span> in new loans this year. <span className="text-white font-bold">73%</span> will never be repaid. It's counted as government "investment" but the write-off is a fiscal time-bomb they're kicking down the road.
            </p>
            <div className="text-xs text-zinc-600 font-mono">OBR Table 4.3</div>
          </div>
        </div>
      </div>
    </div>
  );
}