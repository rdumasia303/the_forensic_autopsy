import React from 'react';
import { Home, TrendingUp, AlertTriangle, Lock, Percent, Building } from 'lucide-react';

const HousingCard = ({ title, children, className = "" }: { title: string, children: React.ReactNode, className?: string }) => (
  <div className={`bg-zinc-950 border border-zinc-800 p-6 md:p-8 ${className}`}>
    <h3 className="font-display font-bold text-xl text-white uppercase mb-6">{title}</h3>
    {children}
  </div>
);

export default function TheHousingDelusion() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-acid-green/10 border border-acid-green text-acid-green font-mono text-xs">
          <Home size={14} />
          <span>SECTOR ANALYSIS: HOUSING</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
          THE HOUSING <span className="text-acid-green">DELUSION</span>
        </h2>
        <p className="text-xl text-zinc-400 font-receipt max-w-3xl leading-relaxed">
          The British economy is effectively a property market with a small GDP attached to it. 
          The Budget attempts to tax the symptoms of this disease while aggressively protecting the cause.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* The Zombie Forecast */}
        <HousingCard title="The Zombie Forecast (Table A.3)">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-zinc-900 border border-zinc-700">
                <TrendingUp className="text-zinc-500" size={24} />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-zinc-400 font-receipt">
                  The OBR forecasts house price growth that barely matches inflation. This is the "soft landing" fantasy:
                </p>
                <div className="grid grid-cols-3 gap-4 py-4">
                  <div className="text-center">
                    <div className="text-xs text-zinc-500 uppercase mb-1">2025</div>
                    <div className="text-xl font-bold text-white">+2.1%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-zinc-500 uppercase mb-1">2026</div>
                    <div className="text-xl font-bold text-white">+2.6%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-zinc-500 uppercase mb-1">2027</div>
                    <div className="text-xl font-bold text-white">+2.8%</div>
                  </div>
                </div>
                <div className="bg-zinc-900 p-4 border-l-2 border-acid-green">
                  <p className="text-xs text-zinc-300">
                    <span className="text-acid-green font-bold">REALITY CHECK:</span> In real terms (adjusted for inflation), this is stagnation. 
                    The government is terrified of negative equity (which kills banks) and terrified of a boom (which kills voters). 
                    Result: <span className="text-white">Managed Stagnation.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </HousingCard>

        {/* The Rental Attack */}
        <HousingCard title="The Rental Attack (Para 3.79)">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blood-red/10 border border-blood-red">
                <AlertTriangle className="text-blood-red" size={24} />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-zinc-400 font-receipt">
                  The OBR explicitly warns that the Stamp Duty hike on second homes (to 5%) will backfire on tenants.
                </p>
                <div className="bg-zinc-900 p-4 border border-zinc-800 italic text-zinc-300 text-sm font-serif">
                  "...reduce returns to private landlords and will reduce the supply of rental property... risks a steady long-term rise in rents."
                </div>
                <div className="pt-2">
                  <p className="text-xs text-blood-red font-bold uppercase">The Consequence:</p>
                  <p className="text-sm text-zinc-400 mt-1">
                    Landlords sell up. Supply drops. Rents rise. The state collects the transaction tax (SDLT) while the tenant pays the price in higher monthly rent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </HousingCard>

      </div>

      {/* Buy Borrow Die Analysis */}
      <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5">
          <Building size={200} />
        </div>
        
        <div className="relative z-10 space-y-8">
          <div className="max-w-2xl">
            <h3 className="font-display font-bold text-3xl text-white mb-4">THE "BUY, BORROW, DIE" AUDIT</h3>
            <p className="text-zinc-400 font-receipt">
              For decades, the wealthy used a simple strategy: Buy assets, Borrow against them (tax-free), Die (and pass them on). 
              How does this Budget impact the holy trinity of wealth preservation?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            {/* BUY */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-orange-500">
                <Home size={24} />
                <h4 className="font-bold font-display text-lg">1. BUY</h4>
              </div>
              <div className="h-px w-full bg-zinc-800"></div>
              <div className="space-y-2">
                <div className="inline-block px-2 py-1 bg-orange-500/10 text-orange-500 text-xs font-bold border border-orange-500/20">
                  STATUS: HOSTILE
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  SDLT surcharge on second homes raised to 5%. 
                  Commercial property values threatened by business rate uncertainty. 
                  <span className="text-white block mt-2">Verdict: The entry fee just went up.</span>
                </p>
              </div>
            </div>

            {/* BORROW */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-acid-green">
                <Percent size={24} />
                <h4 className="font-bold font-display text-lg">2. BORROW</h4>
              </div>
              <div className="h-px w-full bg-zinc-800"></div>
              <div className="space-y-2">
                <div className="inline-block px-2 py-1 bg-acid-green/10 text-acid-green text-xs font-bold border border-acid-green/20">
                  STATUS: SURVIVING
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  No Wealth Tax introduced. You can still borrow against assets tax-free. 
                  The only constraint is high interest rates (bond market vigilantes), not the taxman.
                  <span className="text-white block mt-2">Verdict: Still the golden loophole.</span>
                </p>
              </div>
            </div>

            {/* DIE */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-blood-red">
                <Lock size={24} />
                <h4 className="font-bold font-display text-lg">3. DIE</h4>
              </div>
              <div className="h-px w-full bg-zinc-800"></div>
              <div className="space-y-2">
                <div className="inline-block px-2 py-1 bg-blood-red/10 text-blood-red text-xs font-bold border border-blood-red/20">
                  STATUS: UNDER ATTACK
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Pensions brought into Inheritance Tax (Para 2.32). 
                  Agricultural & Business Relief capped at £1m. 
                  The "die with a fat pension pot" strategy is dead.
                  <span className="text-white block mt-2">Verdict: The state wants its cut at the end.</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Moral Hazard Section */}
      <div className="border-l-4 border-zinc-700 pl-6 py-2">
        <h4 className="text-zinc-500 font-mono text-xs uppercase mb-2">THE MORAL HAZARD</h4>
        <p className="text-lg text-zinc-300 font-receipt italic">
          "We have financialized shelter to the point where a 10% drop in house prices is a national emergency, 
          but a 10% rise in homelessness is a statistic."
        </p>
      </div>

    </div>
  );
}
