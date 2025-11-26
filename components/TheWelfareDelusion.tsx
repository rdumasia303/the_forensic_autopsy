import React from 'react';
import { Accessibility, Briefcase, MapPin, TrendingDown, AlertTriangle, Clock, Building2, Search, Ban, Calculator } from 'lucide-react';

export default function TheWelfareDelusion() {
  return (
    <div className="space-y-16">
      
      {/* Header */}
      <div className="text-center border-b border-zinc-800 pb-8">
        <div className="inline-block px-3 py-1 bg-blood-red text-white font-display font-bold text-xs mb-4 transform -rotate-1">
          SUPPLY-SIDE MAGICAL THINKING
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4">
          THE <span className="text-blood-red">WELFARE</span> DELUSION
        </h2>
        <p className="font-display text-zinc-400 max-w-3xl mx-auto text-lg">
          "We want the disabled and long-term sick to work." <br/>
          <span className="text-white font-bold">Great. Where are the jobs?</span>
        </p>
      </div>

      {/* The Core Problem */}
      <div className="bg-zinc-900 border-2 border-blood-red p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-4 right-4 text-8xl opacity-5">🎭</div>
        
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-blood-red/20 border border-blood-red">
              <Accessibility className="text-blood-red" size={32} />
            </div>
            <div>
              <h3 className="font-display font-bold text-3xl text-white uppercase">The Get Britain Working Plan</h3>
              <p className="text-blood-red font-mono text-sm">£240M TO PUSH PEOPLE INTO... WHAT EXACTLY?</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="text-xs font-mono text-acid-green uppercase">THE POLICY (PARA 5.67-5.82)</div>
              <ul className="space-y-3 text-sm text-zinc-400 font-receipt">
                <li className="flex items-start gap-2">
                  <span className="text-blood-red mt-1">▸</span>
                  <span>Tighten Work Capability Assessment criteria</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blood-red mt-1">▸</span>
                  <span>Reduce "Limited Capability for Work" (LCW) awards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blood-red mt-1">▸</span>
                  <span>More frequent reassessments for disability benefits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blood-red mt-1">▸</span>
                  <span>£240m for "employment support" and "health interventions"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blood-red mt-1">▸</span>
                  <span>Target: Reduce economic inactivity by 1 million</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-zinc-950 border border-zinc-800 p-6">
              <div className="text-xs font-mono text-blood-red uppercase mb-4">THE ASSUMPTION</div>
              <p className="text-lg text-zinc-300 font-receipt leading-relaxed mb-4">
                "If we push people off benefits, they will find jobs."
              </p>
              <div className="text-xs font-mono text-zinc-500 uppercase mb-4">THE REALITY</div>
              <p className="text-lg text-white font-receipt leading-relaxed">
                "There are <span className="text-blood-red font-bold">900,000 job vacancies</span> and 
                <span className="text-blood-red font-bold"> 2.8 million economically inactive</span> due to long-term sickness.
                Even if every vacancy was filled, 1.9 million people remain without options."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Math Doesn't Math */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="font-display font-bold text-2xl text-white uppercase mb-2">The Math Doesn't Math</h3>
          <p className="text-zinc-500 font-mono text-xs">DEMAND-SIDE REALITY CHECK</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="bg-zinc-950 border border-zinc-800 p-6 text-center">
            <Search className="text-zinc-600 mx-auto mb-4" size={40} />
            <div className="text-4xl font-black text-white font-mono mb-2">900k</div>
            <div className="text-xs text-zinc-500 uppercase font-mono mb-4">JOB VACANCIES (UK)</div>
            <p className="text-xs text-zinc-400 font-receipt">
              Down from 1.3m peak. Falling every quarter. Many are part-time, zero-hours, or require specific skills.
            </p>
          </div>

          <div className="bg-zinc-950 border border-blood-red p-6 text-center">
            <Accessibility className="text-blood-red mx-auto mb-4" size={40} />
            <div className="text-4xl font-black text-blood-red font-mono mb-2">2.8m</div>
            <div className="text-xs text-zinc-500 uppercase font-mono mb-4">LONG-TERM SICK (INACTIVE)</div>
            <p className="text-xs text-zinc-400 font-receipt">
              Record high. Up 700k since 2019. Mental health, chronic conditions, NHS waiting lists.
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 p-6 text-center">
            <Ban className="text-zinc-600 mx-auto mb-4" size={40} />
            <div className="text-4xl font-black text-zinc-400 font-mono mb-2">1.9m</div>
            <div className="text-xs text-zinc-500 uppercase font-mono mb-4">THE GAP</div>
            <p className="text-xs text-zinc-400 font-receipt">
              Even in fantasy land where every vacancy is perfectly matched, 1.9m people have nowhere to go.
            </p>
          </div>

        </div>

        <div className="bg-blood-red/10 border border-blood-red p-6 text-center">
          <p className="text-lg text-zinc-200 font-receipt">
            The government's plan assumes <span className="text-blood-red font-bold">infinite demand for labour</span>. 
            Reality has <span className="text-white font-bold">finite vacancies</span> and 
            <span className="text-white font-bold"> falling job creation</span>.
          </p>
        </div>
      </div>

      {/* The Type of Jobs Available */}
      <div className="bg-zinc-900 border border-zinc-800 p-8 space-y-8">
        <div className="flex items-center gap-4">
          <Briefcase className="text-acid-green" size={32} />
          <div>
            <h3 className="font-display font-bold text-2xl text-white uppercase">What Jobs Exist?</h3>
            <p className="text-zinc-500 font-mono text-xs">NOT THE KIND SUITABLE FOR DISABLED OR LONG-TERM SICK</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          
          <div className="space-y-4">
            <div className="text-xs font-mono text-acid-green uppercase">TOP VACANCY SECTORS (ONS)</div>
            <div className="space-y-3">
              <div className="bg-zinc-950 border border-zinc-700 p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-zinc-300 font-receipt">Hospitality & Catering</span>
                  <span className="text-acid-green font-mono text-sm">140k vacancies</span>
                </div>
                <p className="text-xs text-zinc-500">Long hours, physical work, low pay, zero-hours contracts. Suitable for chronic fatigue? No.</p>
              </div>
              <div className="bg-zinc-950 border border-zinc-700 p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-zinc-300 font-receipt">Health & Social Care</span>
                  <span className="text-acid-green font-mono text-sm">165k vacancies</span>
                </div>
                <p className="text-xs text-zinc-500">Physically demanding, emotionally draining, requires training. Suitable for mental health issues? No.</p>
              </div>
              <div className="bg-zinc-950 border border-zinc-700 p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-zinc-300 font-receipt">Retail</span>
                  <span className="text-acid-green font-mono text-sm">85k vacancies</span>
                </div>
                <p className="text-xs text-zinc-500">Standing all day, customer-facing, weekend work. Suitable for mobility issues? No.</p>
              </div>
              <div className="bg-zinc-950 border border-zinc-700 p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-zinc-300 font-receipt">Warehousing & Logistics</span>
                  <span className="text-acid-green font-mono text-sm">75k vacancies</span>
                </div>
                <p className="text-xs text-zinc-500">Heavy lifting, targets, night shifts. Suitable for anyone with a health condition? Laughable.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-xs font-mono text-blood-red uppercase">THE MISMATCH</div>
            <div className="bg-zinc-950 border border-blood-red p-6 space-y-4">
              <p className="text-sm text-zinc-300 font-receipt leading-relaxed">
                <span className="text-white font-bold">Top reasons for economic inactivity:</span>
              </p>
              <ul className="space-y-2 text-sm text-zinc-400 font-receipt">
                <li className="flex items-center gap-2">
                  <span className="text-blood-red">▸</span> Mental health conditions (anxiety, depression)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blood-red">▸</span> Chronic pain / musculoskeletal issues
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blood-red">▸</span> Long COVID effects
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blood-red">▸</span> Waiting for NHS treatment (7m+ backlog)
                </li>
              </ul>
              <div className="pt-4 border-t border-zinc-800">
                <p className="text-sm text-zinc-300 font-receipt">
                  <span className="text-blood-red font-bold">Available jobs require:</span> Physical fitness, long hours, flexibility, customer-facing skills.
                </p>
                <p className="text-sm text-white font-receipt mt-2">
                  <span className="text-blood-red font-bold">Spot the mismatch?</span>
                </p>
              </div>
            </div>

            <div className="bg-acid-green/10 border border-acid-green p-4">
              <div className="text-xs text-acid-green font-bold mb-2">WHAT WOULD ACTUALLY HELP:</div>
              <ul className="space-y-1 text-xs text-zinc-300 font-receipt">
                <li>• Remote/flexible work mandates</li>
                <li>• Part-time role creation incentives</li>
                <li>• NHS backlog clearance (£billions needed)</li>
                <li>• Employer disability support subsidies</li>
              </ul>
              <p className="text-xs text-acid-green mt-2 font-mono">BUDGET ALLOCATION: £240M (0.02% OF SPENDING)</p>
            </div>
          </div>

        </div>
      </div>

      {/* The 68% Trap Returns */}
      <div className="bg-zinc-950 border-2 border-orange-500 p-8 space-y-6">
        <div className="flex items-center gap-4">
          <Calculator className="text-orange-500" size={32} />
          <div>
            <h3 className="font-display font-bold text-2xl text-white uppercase">Even If They Find Work...</h3>
            <p className="text-orange-500 font-mono text-xs">THE UC TAPER AWAITS</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-sm text-zinc-400 font-receipt leading-relaxed">
              A disabled person who finds part-time work faces the same <span className="text-orange-500 font-bold">68% effective marginal tax rate</span> as everyone else on Universal Credit.
            </p>
            <div className="bg-zinc-900 border border-zinc-700 p-4">
              <div className="text-xs text-zinc-500 mb-2">SCENARIO: DISABLED PERSON WORKS 16HRS @ £12/HR</div>
              <div className="space-y-2 text-sm font-receipt">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Gross earnings</span>
                  <span className="text-white">£192/week</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Tax + NICs (~12%)</span>
                  <span className="text-blood-red">-£23</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">UC taper (55% of net)</span>
                  <span className="text-blood-red">-£93</span>
                </div>
                <div className="flex justify-between border-t border-zinc-700 pt-2">
                  <span className="text-zinc-300 font-bold">Net gain from working</span>
                  <span className="text-orange-500 font-bold">£76/week</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-zinc-500 font-receipt">
              That's <span className="text-orange-500 font-bold">£4.75/hour effective wage</span> for someone who overcame health barriers to work. Below minimum wage in practice.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-blood-red/10 border border-blood-red p-6 h-full flex flex-col justify-center">
              <div className="text-center space-y-4">
                <AlertTriangle className="text-blood-red mx-auto" size={48} />
                <p className="text-lg text-zinc-200 font-receipt leading-relaxed">
                  "Get Britain Working" means pushing disabled people into jobs that 
                  <span className="text-blood-red font-bold"> don't exist</span>, and if they find one, 
                  <span className="text-blood-red font-bold"> keeping 32p of every pound earned</span>.
                </p>
                <p className="text-sm text-zinc-500 font-mono">
                  THIS IS NOT A POLICY. IT'S PERFORMANCE ART.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Geographic Mismatch */}
      <div className="bg-zinc-900 border border-zinc-800 p-8 space-y-6">
        <div className="flex items-center gap-4">
          <MapPin className="text-acid-green" size={32} />
          <div>
            <h3 className="font-display font-bold text-2xl text-white uppercase">The Geographic Problem</h3>
            <p className="text-zinc-500 font-mono text-xs">JOBS ARE IN LONDON. SICK PEOPLE AREN'T.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="text-xs font-mono text-acid-green uppercase mb-2">HIGHEST ECONOMIC INACTIVITY (SICKNESS)</div>
            <div className="space-y-2">
              {[
                { region: 'Wales', rate: '27%' },
                { region: 'North East', rate: '25%' },
                { region: 'North West', rate: '24%' },
                { region: 'Yorkshire', rate: '23%' },
                { region: 'West Midlands', rate: '22%' },
              ].map((item) => (
                <div key={item.region} className="flex justify-between items-center bg-zinc-950 p-3">
                  <span className="text-zinc-400 font-receipt">{item.region}</span>
                  <span className="text-blood-red font-mono font-bold">{item.rate}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-mono text-acid-green uppercase mb-2">HIGHEST JOB VACANCY RATES</div>
            <div className="space-y-2">
              {[
                { region: 'London', rate: '4.2%' },
                { region: 'South East', rate: '3.1%' },
                { region: 'East of England', rate: '2.9%' },
                { region: 'South West', rate: '2.7%' },
                { region: 'Scotland', rate: '2.5%' },
              ].map((item) => (
                <div key={item.region} className="flex justify-between items-center bg-zinc-950 p-3">
                  <span className="text-zinc-400 font-receipt">{item.region}</span>
                  <span className="text-acid-green font-mono font-bold">{item.rate}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-zinc-950 border border-zinc-700 p-4 text-center">
          <p className="text-sm text-zinc-400 font-receipt">
            The government's plan: Move disabled people from <span className="text-blood-red">Blackpool</span> to 
            <span className="text-acid-green"> London</span>? Pay their rent? Provide accessible housing?
          </p>
          <p className="text-xs text-zinc-600 mt-2 font-mono">BUDGET ALLOCATION FOR RELOCATION SUPPORT: £0</p>
        </div>
      </div>

      {/* The Verdict */}
      <div className="bg-zinc-950 border-2 border-white p-8 md:p-12">
        <div className="text-center space-y-6">
          <div className="text-6xl">🎪</div>
          <h3 className="font-display font-bold text-3xl text-white uppercase">The Welfare Verdict</h3>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-xl text-zinc-300 font-receipt leading-relaxed">
              "Get Britain Working" is not an employment policy. It's a <span className="text-blood-red font-bold">benefit-cutting exercise</span> dressed up in the language of aspiration.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 pt-6">
              <div className="bg-zinc-900 border border-zinc-700 p-4 text-center">
                <div className="text-2xl font-mono text-blood-red font-bold">0</div>
                <div className="text-xs text-zinc-500">Jobs Created</div>
              </div>
              <div className="bg-zinc-900 border border-zinc-700 p-4 text-center">
                <div className="text-2xl font-mono text-blood-red font-bold">£3bn</div>
                <div className="text-xs text-zinc-500">Benefits Cut (Target)</div>
              </div>
              <div className="bg-zinc-900 border border-zinc-700 p-4 text-center">
                <div className="text-2xl font-mono text-blood-red font-bold">2.8m</div>
                <div className="text-xs text-zinc-500">People Abandoned</div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-zinc-800">
            <p className="text-zinc-500 font-mono text-sm">
              <span className="text-white font-bold">THE QUIET PART:</span> If we can't find jobs for the healthy, 
              we certainly can't find them for the sick. But we can stop paying them.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
