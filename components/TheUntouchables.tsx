import React from 'react';
import { Landmark, Scale, TrendingUp, Home, Coins, PiggyBank, Crown, Users, Calculator, AlertTriangle } from 'lucide-react';

export default function TheUntouchables() {
  return (
    <div className="space-y-16">
      
      {/* Header */}
      <div className="text-center border-b border-zinc-800 pb-8">
        <div className="inline-block px-3 py-1 bg-white text-black font-display font-bold text-xs mb-4 transform rotate-1">
          THE SACRED COWS
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4">
          THE <span className="text-acid-green">UNTOUCHABLES</span>
        </h2>
        <p className="font-display text-zinc-400 max-w-3xl mx-auto text-lg">
          Why every Chancellor—Red, Blue, or Yellow—refuses to touch the one thing that could actually fix the books: 
          <span className="text-white font-bold"> Unearned Income.</span>
        </p>
      </div>

      {/* The Core Thesis */}
      <div className="bg-zinc-900 border-2 border-acid-green p-8 md:p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-acid-green/5 via-transparent to-transparent"></div>
        
        <div className="relative z-10 space-y-8">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-acid-green/20 border border-acid-green">
              <Scale className="text-acid-green" size={32} />
            </div>
            <div>
              <h3 className="font-display font-bold text-3xl text-white uppercase">The r {'>'} g Problem</h3>
              <p className="text-acid-green font-mono text-sm">PIKETTY'S INEQUALITY ENGINE, UK EDITION</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg text-zinc-300 font-receipt leading-relaxed">
                When the return on capital (<span className="text-acid-green font-bold">r</span>) exceeds the growth rate of the economy (<span className="text-acid-green font-bold">g</span>), 
                wealth concentrates automatically. The rich get richer <span className="text-white font-bold">by doing nothing</span>.
              </p>
              <p className="text-sm text-zinc-400 font-receipt leading-relaxed">
                This Budget taxes <span className="text-blood-red font-bold">effort</span> (wages, work, entrepreneurship) at up to 71% marginal rates, 
                while <span className="text-acid-green font-bold">sitting on assets</span> is taxed at 18-24% (CGT) or 0% (primary residence).
              </p>
            </div>
            
            <div className="bg-zinc-950 border border-zinc-800 p-6">
              <div className="text-xs font-mono text-zinc-500 uppercase mb-4">The UK Tax Rate Hierarchy</div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">UC claimant taking extra shift</span>
                  <span className="text-blood-red font-bold">68%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Parent @ £70k (HICBC zone)</span>
                  <span className="text-blood-red font-bold">62%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Graduate earning £50k</span>
                  <span className="text-orange-500 font-bold">51%</span>
                </div>
                <div className="flex justify-between items-center border-t border-zinc-700 pt-3">
                  <span className="text-zinc-400">Selling shares (CGT)</span>
                  <span className="text-acid-green font-bold">24%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Dividend income (higher rate)</span>
                  <span className="text-acid-green font-bold">39.35%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Second home sale (CGT)</span>
                  <span className="text-acid-green font-bold">24%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Inheriting £1m (with reliefs)</span>
                  <span className="text-acid-green font-bold">~10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Three Sacred Cows */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="font-display font-bold text-2xl text-white uppercase mb-2">The Three Sacred Cows</h3>
          <p className="text-zinc-500 font-mono text-xs">THINGS NO CHANCELLOR WILL EVER TOUCH</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Sacred Cow 1: Second Homes & Investment Property */}
          <div className="bg-zinc-950 border-2 border-acid-green p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-10">
              <Home size={80} />
            </div>
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-acid-green/10 border border-acid-green">
                  <Home className="text-acid-green" size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-white uppercase">Second Homes & BTL</h4>
                  <p className="text-xs text-acid-green font-mono">CGT RATE: 24% (vs 45% income tax)</p>
                </div>
              </div>

              <div className="space-y-4 text-sm font-receipt">
                <p className="text-zinc-400">
                  Sell a second home for £500k profit? <span className="text-acid-green font-bold">24% CGT</span>. <br/>
                  Earn £500k via work? <span className="text-blood-red font-bold">45% tax</span>. <br/>
                  <span className="text-zinc-600 text-xs italic">(Primary residence relief is fine—but why is investment property taxed at half the rate of work?)</span>
                </p>
                <div className="bg-zinc-900 border border-zinc-800 p-4">
                  <div className="text-xs text-zinc-500 mb-2">THE GAP</div>
                  <p className="text-zinc-300">
                    Equalising CGT with income tax on <span className="text-white font-bold">second homes and investment property</span> would raise ~<span className="text-white font-bold">£14bn/year</span>.
                  </p>
                </div>
                <p className="text-zinc-500 text-xs">
                  <span className="text-blood-red font-bold">WHY UNTOUCHABLE:</span> Buy-to-let landlords. Holiday home owners. "Aspirational" voters with second properties.
                </p>
              </div>
            </div>
          </div>

          {/* Sacred Cow 2: Wealth Tax */}
          <div className="bg-zinc-950 border-2 border-white p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-10">
              <Crown size={80} />
            </div>
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/10 border border-white">
                  <Crown className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-white uppercase">Annual Wealth Tax</h4>
                  <p className="text-xs text-zinc-400 font-mono">STATUS: VERBOTEN</p>
                </div>
              </div>

              <div className="space-y-4 text-sm font-receipt">
                <p className="text-zinc-400">
                  A 1% annual tax on net wealth above £10m would raise <span className="text-white font-bold">£10-15bn/year</span>.
                </p>
                <div className="bg-zinc-900 border border-zinc-800 p-4">
                  <div className="text-xs text-zinc-500 mb-2">THE MATH</div>
                  <p className="text-zinc-300">
                    UK has ~175,000 individuals with £10m+ net worth. 
                    Total wealth: <span className="text-white font-bold">£1.5 trillion</span>.
                  </p>
                </div>
                <p className="text-zinc-500 text-xs">
                  <span className="text-blood-red font-bold">WHY UNTOUCHABLE:</span> "Capital flight" fear. Donors. Media owners. The Overton Window.
                </p>
              </div>
            </div>
          </div>

          {/* Sacred Cow 3: Land Value Tax */}
          <div className="bg-zinc-950 border-2 border-orange-500 p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-10">
              <Landmark size={80} />
            </div>
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-orange-500/10 border border-orange-500">
                  <Landmark className="text-orange-500" size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-white uppercase">Land Value Tax</h4>
                  <p className="text-xs text-orange-500 font-mono">THE ECONOMIST'S DREAM</p>
                </div>
              </div>

              <div className="space-y-4 text-sm font-receipt">
                <p className="text-zinc-400">
                  Tax the unimproved value of land—can't be avoided, can't flee. <span className="text-orange-500 font-bold">Milton Friedman</span> called it "the least bad tax."
                </p>
                <div className="bg-zinc-900 border border-zinc-800 p-4">
                  <div className="text-xs text-zinc-500 mb-2">POTENTIAL YIELD</div>
                  <p className="text-zinc-300">
                    UK land value: <span className="text-white font-bold">£5 trillion</span>. 
                    A 0.5% LVT = £25bn/year.
                  </p>
                </div>
                <p className="text-zinc-500 text-xs">
                  <span className="text-blood-red font-bold">WHY UNTOUCHABLE:</span> Hits landowners (incl. farmers). Requires revaluation. NIMBY nuclear bomb.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* The Comparison Calculator */}
      <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-12 space-y-8">
        <div className="flex items-center gap-4">
          <Calculator className="text-acid-green" size={32} />
          <div>
            <h3 className="font-display font-bold text-2xl text-white uppercase">The Alternative Universe</h3>
            <p className="text-zinc-500 font-mono text-xs">WHAT THEY COULD HAVE DONE INSTEAD</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="space-y-6">
            <div className="text-xs font-mono text-blood-red uppercase mb-2">THIS BUDGET (REALITY)</div>
            <div className="space-y-3">
              <div className="bg-zinc-950 border border-blood-red p-4 flex justify-between items-center">
                <span className="text-zinc-400 text-sm">Fiscal Drag (frozen thresholds)</span>
                <span className="text-blood-red font-bold">£67bn</span>
              </div>
              <div className="bg-zinc-950 border border-blood-red p-4 flex justify-between items-center">
                <span className="text-zinc-400 text-sm">Employer NICs hike</span>
                <span className="text-blood-red font-bold">£25bn</span>
              </div>
              <div className="bg-zinc-950 border border-blood-red p-4 flex justify-between items-center">
                <span className="text-zinc-400 text-sm">Pension salary sacrifice raid</span>
                <span className="text-blood-red font-bold">£4.7bn</span>
              </div>
              <div className="bg-zinc-950 border border-blood-red p-4 flex justify-between items-center">
                <span className="text-zinc-400 text-sm">Student loan threshold freeze</span>
                <span className="text-blood-red font-bold">£5.6bn</span>
              </div>
            </div>
            <div className="pt-4 border-t border-zinc-700">
              <div className="flex justify-between items-center">
                <span className="text-zinc-300 font-bold">Total from WORKERS</span>
                <span className="text-blood-red font-bold text-xl">~£100bn+</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-xs font-mono text-acid-green uppercase mb-2">ALTERNATIVE (WEALTH-BASED)</div>
            <div className="space-y-3">
              <div className="bg-zinc-950 border border-acid-green p-4 flex justify-between items-center">
                <span className="text-zinc-400 text-sm">1% wealth tax on £10m+ assets</span>
                <span className="text-acid-green font-bold">£15bn</span>
              </div>
              <div className="bg-zinc-950 border border-acid-green p-4 flex justify-between items-center">
                <span className="text-zinc-400 text-sm">CGT equalised for second homes & shares</span>
                <span className="text-acid-green font-bold">£14bn</span>
              </div>
              <div className="bg-zinc-950 border border-acid-green p-4 flex justify-between items-center">
                <span className="text-zinc-400 text-sm">0.5% Land Value Tax</span>
                <span className="text-acid-green font-bold">£25bn</span>
              </div>
              <div className="bg-zinc-950 border border-acid-green p-4 flex justify-between items-center">
                <span className="text-zinc-400 text-sm">Equalise CGT with income tax</span>
                <span className="text-acid-green font-bold">£14bn</span>
              </div>
            </div>
            <div className="pt-4 border-t border-zinc-700">
              <div className="flex justify-between items-center">
                <span className="text-zinc-300 font-bold">Total from WEALTH</span>
                <span className="text-acid-green font-bold text-xl">~£70bn</span>
              </div>
            </div>
          </div>

        </div>

        <div className="bg-acid-green/10 border border-acid-green p-6 text-center">
          <p className="text-zinc-200 font-receipt leading-relaxed">
            The wealth-based alternative would raise <span className="text-acid-green font-bold">~£70bn</span> while 
            <span className="text-white font-bold"> not touching a single worker's payslip</span>. 
            No fiscal drag. No NICs hike. No pension raid. No student loan freeze.
          </p>
          <p className="text-acid-green font-mono text-xs mt-4">
            BUT IT WOULD REQUIRE TAXING SECOND HOMES, SHARES, LAND, AND INHERITANCE LIKE WE TAX WORK.
          </p>
        </div>
      </div>

      {/* The Political Reality */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="bg-blue-900/20 border border-blue-500 p-6 space-y-4 relative overflow-hidden">
          <div className="absolute -right-2 -top-2 text-5xl opacity-10">💎</div>
          <div className="text-blue-400 font-display font-bold text-lg">CONSERVATIVES</div>
          <div className="text-[10px] text-blue-400/60 font-mono mb-2">// CAPITAL'S FIRST XI</div>
          <p className="text-sm text-zinc-400 font-receipt">
            "Wealth taxes destroy aspiration and cause capital flight."
          </p>
          <p className="text-xs text-zinc-500">
            <span className="text-blue-400 font-bold">FUNCTION:</span> Represent Capital directly. No pretense needed.
          </p>
          <div className="text-[10px] text-blue-400/60 font-mono pt-2 border-t border-blue-900">
            AT LEAST THEY'RE HONEST ABOUT WHO THEY SERVE.
          </div>
        </div>

        <div className="bg-red-900/20 border border-red-500 p-6 space-y-4 relative overflow-hidden">
          <div className="absolute -right-2 -top-2 text-5xl opacity-10">🎭</div>
          <div className="flex items-center gap-2">
            <div className="text-red-400 font-display font-bold text-lg line-through decoration-2">LABOUR</div>
            <div className="text-white font-display font-bold text-sm bg-red-500 px-2 py-0.5">CAPITAL™</div>
          </div>
          <div className="text-[10px] text-red-400/60 font-mono mb-2">// CAPITAL'S B-TEAM</div>
          <p className="text-sm text-zinc-400 font-receipt">
            "We won't introduce a wealth tax. We are pro-business and pro-growth."
          </p>
          <p className="text-xs text-zinc-500">
            <span className="text-red-400 font-bold">FUNCTION:</span> Make workers vote for Capital's interests while feeling progressive.
          </p>
          <div className="text-[10px] text-red-400/60 font-mono pt-2 border-t border-red-900">
            THE CRUELEST TRICK: HOPE IN RED PACKAGING.
          </div>
        </div>

        <div className="bg-yellow-900/20 border border-yellow-500 p-6 space-y-4 relative overflow-hidden">
          <div className="absolute -right-2 -top-2 text-5xl opacity-10">🧘</div>
          <div className="text-yellow-400 font-display font-bold text-lg">LIB DEMS</div>
          <div className="text-[10px] text-yellow-400/60 font-mono mb-2">// CAPITAL'S CONSCIENCE</div>
          <p className="text-sm text-zinc-400 font-receipt">
            "We support fairer taxation..." (said quietly at dinner parties)
          </p>
          <p className="text-xs text-zinc-500">
            <span className="text-yellow-400 font-bold">FUNCTION:</span> Let wealthy liberals feel ethical without changing anything.
          </p>
          <div className="text-[10px] text-yellow-400/60 font-mono pt-2 border-t border-yellow-900">
            YOGA FOR THE ASSET-OWNING CLASS.
          </div>
        </div>

        <div className="bg-cyan-900/20 border border-cyan-400 p-6 space-y-4 relative overflow-hidden">
          <div className="absolute -right-4 -top-4 text-6xl opacity-10">👆</div>
          <div className="text-cyan-400 font-display font-bold text-lg">REFORM UK</div>
          <div className="text-[10px] text-cyan-400/60 font-mono mb-2">// CAPITAL'S ATTACK DOG</div>
          <p className="text-sm text-zinc-400 font-receipt">
            "It's not the billionaires—it's the immigrants and the woke blob!"
          </p>
          <p className="text-xs text-zinc-500">
            <span className="text-cyan-400 font-bold">FUNCTION:</span> Redirect working-class rage away from Capital, toward the powerless.
          </p>
          <div className="text-[10px] text-cyan-400/60 font-mono pt-2 border-t border-cyan-900">
            FARAGE'S BACKERS = THE BILLIONAIRES. 👉🚤
          </div>
        </div>

      </div>

      {/* The Uniparty on Capital */}
      <div className="bg-zinc-900 border-2 border-white p-6 md:p-8">
        <div className="text-center mb-6">
          <h4 className="font-display font-bold text-2xl text-white uppercase">
            🎪 THE UNIPARTY ON CAPITAL
          </h4>
          <p className="text-xs text-zinc-500 font-mono mt-2">DIFFERENT ROSETTES, SAME SPREADSHEET</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-700">
                <th className="text-left py-3 px-4 text-zinc-500 font-mono text-xs">POLICY</th>
                <th className="text-center py-3 px-2 text-blue-400 font-mono text-xs">CON</th>
                <th className="text-center py-3 px-2 text-red-400 font-mono text-xs">LAB</th>
                <th className="text-center py-3 px-2 text-yellow-400 font-mono text-xs">LD</th>
                <th className="text-center py-3 px-2 text-cyan-400 font-mono text-xs">REF</th>
              </tr>
            </thead>
            <tbody className="font-receipt">
              <tr className="border-b border-zinc-800">
                <td className="py-3 px-4 text-zinc-400">Wealth Tax</td>
                <td className="text-center py-3 px-2 text-blood-red">❌</td>
                <td className="text-center py-3 px-2 text-blood-red">❌</td>
                <td className="text-center py-3 px-2 text-yellow-500">🤫</td>
                <td className="text-center py-3 px-2 text-blood-red">❌</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-3 px-4 text-zinc-400">Land Value Tax</td>
                <td className="text-center py-3 px-2 text-blood-red">❌</td>
                <td className="text-center py-3 px-2 text-blood-red">❌</td>
                <td className="text-center py-3 px-2 text-yellow-500">🤫</td>
                <td className="text-center py-3 px-2 text-blood-red">❌</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-3 px-4 text-zinc-400">CGT = Income Tax</td>
                <td className="text-center py-3 px-2 text-blood-red">❌</td>
                <td className="text-center py-3 px-2 text-blood-red">❌</td>
                <td className="text-center py-3 px-2 text-blood-red">❌</td>
                <td className="text-center py-3 px-2 text-blood-red">❌</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-3 px-4 text-zinc-400">Primary Residence CGT</td>
                <td className="text-center py-3 px-2 text-blood-red">❌</td>
                <td className="text-center py-3 px-2 text-blood-red">❌</td>
                <td className="text-center py-3 px-2 text-blood-red">❌</td>
                <td className="text-center py-3 px-2 text-blood-red">❌</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-3 px-4 text-zinc-400">Fiscal Drag (freeze thresholds)</td>
                <td className="text-center py-3 px-2 text-acid-green">✅</td>
                <td className="text-center py-3 px-2 text-acid-green">✅</td>
                <td className="text-center py-3 px-2 text-yellow-500">🤷</td>
                <td className="text-center py-3 px-2 text-acid-green">✅</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-zinc-400">Blame someone else</td>
                <td className="text-center py-3 px-2 text-zinc-500">Labour</td>
                <td className="text-center py-3 px-2 text-zinc-500">Tories</td>
                <td className="text-center py-3 px-2 text-zinc-500">Both</td>
                <td className="text-center py-3 px-2 text-zinc-500">Immigrants</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-zinc-400 font-receipt">
            <span className="text-white font-bold">CONSENSUS:</span> Tax work. Protect wealth. Argue about everything else.
          </p>
        </div>
      </div>

      {/* Reform Special Callout */}
      <div className="bg-cyan-950/30 border-2 border-cyan-400 p-6 md:p-8 relative overflow-hidden">
        <div className="absolute top-4 right-4 text-4xl animate-bounce">🎯</div>
        <div className="space-y-4">
          <h4 className="font-display font-bold text-xl text-cyan-400 uppercase">
            🚨 The Reform Party Masterclass in Misdirection
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="text-xs font-mono text-cyan-400 uppercase">WHAT THEY SHOUT ABOUT</div>
              <ul className="space-y-2 text-sm text-zinc-400 font-receipt">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">▸</span> Immigration (cost: disputed £4-8bn)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">▸</span> "Woke civil service" (savings: £0)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">▸</span> Foreign aid (£15bn total)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">▸</span> BBC license fee (£3.7bn)
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="text-xs font-mono text-blood-red uppercase">WHAT THEY NEVER MENTION</div>
              <ul className="space-y-2 text-sm text-zinc-400 font-receipt">
                <li className="flex items-center gap-2">
                  <span className="text-blood-red">▸</span> Primary residence CGT exemption: <span className="text-white font-bold">£35bn</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blood-red">▸</span> Non-dom tax avoidance: <span className="text-white font-bold">£3.2bn</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blood-red">▸</span> CGT vs Income Tax gap: <span className="text-white font-bold">£14bn</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blood-red">▸</span> IHT agricultural relief abuse: <span className="text-white font-bold">£1.8bn</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-4 border-t border-cyan-900/50">
            <p className="text-sm text-zinc-400 font-receipt">
              <span className="text-cyan-400 font-bold">THE GRIFT:</span> Convince working-class voters that immigrants took their wages, 
              while their donors—who actually suppressed those wages through asset hoarding and rent extraction—get tax cuts. 
              <span className="text-white font-bold"> It's not a bug. It's the business model.</span>
            </p>
          </div>
        </div>
      </div>

      {/* The Verdict */}
      <div className="bg-zinc-950 border-2 border-blood-red p-8 md:p-12">
        <div className="text-center space-y-6">
          <AlertTriangle className="text-blood-red mx-auto" size={48} />
          <h3 className="font-display font-bold text-3xl text-white uppercase">The Bipartisan Consensus</h3>
          
          <p className="text-xl text-zinc-300 font-receipt max-w-2xl mx-auto leading-relaxed">
            Both major parties have agreed: <span className="text-blood-red font-bold">workers will pay</span>. 
            The only debate is whether to call it "responsible" (Labour) or "necessary" (Tories).
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto pt-6 border-t border-zinc-800">
            <div className="space-y-2">
              <div className="text-xs text-acid-green font-mono uppercase">WHAT THEY TELL YOU</div>
              <p className="text-sm text-zinc-400 font-receipt">
                "We can't tax wealth because it would drive investment away and harm growth."
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-xs text-blood-red font-mono uppercase">WHAT THEY MEAN</div>
              <p className="text-sm text-zinc-400 font-receipt">
                "The people who own assets also own newspapers, fund campaigns, and vote in marginal seats. You don't."
              </p>
            </div>
          </div>

          <div className="pt-6">
            <p className="text-zinc-500 font-mono text-xs">
              This Budget is proof that <span className="text-white font-bold">r {'>'} g</span> is not just an economic observation. 
              It's a <span className="text-blood-red font-bold">policy choice</span>.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
