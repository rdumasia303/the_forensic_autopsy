import React from 'react';
import { Search, Fingerprint, Lock, Coins, ArrowDown, Users, Building2, Wallet, TrendingDown, AlertCircle, Calculator } from 'lucide-react';

export default function TheWageRaid() {
  return (
    <div className="space-y-24">
      
      {/* Section Header */}
      <div className="text-center space-y-6">
        <div className="inline-flex items-center gap-4 text-blood-red">
          <Fingerprint size={40} />
          <span className="font-display font-bold tracking-widest text-sm">CASE FILE: THE TRIPLE TAP</span>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
          THE GREAT BRITISH<br/>
          <span className="text-blood-red">WAGE RAID</span>
        </h2>
        
        <p className="text-lg text-zinc-400 font-receipt leading-relaxed max-w-2xl mx-auto">
          You didn't vote for a tax rise. It wasn't in the manifesto. It happens automatically while you sleep.
          Three mechanisms. One target: your payslip.
        </p>
      </div>

      {/* ========================================== */}
      {/* PART 1: FISCAL DRAG - THE SILENT HEIST */}
      {/* ========================================== */}
      <div className="relative py-16 border-y border-zinc-800 bg-concrete overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 px-4">
          
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-blood-red text-white font-display font-bold text-xs transform -rotate-1">
                MECHANISM 1: FISCAL DRAG
              </div>
              <h3 className="text-4xl font-black text-white tracking-tighter">
                THE SILENT <span className="text-zinc-600">PICKPOCKET</span>
              </h3>
              <p className="text-zinc-400 font-receipt leading-relaxed">
                The Chancellor isn't just freezing thresholds; she's raiding your future self to pay for your present misery.
                Extended to <span className="text-blood-red font-bold">2031</span>.
              </p>
            </div>

            {/* Crime Stats Box */}
            <div className="p-6 bg-zinc-900 border border-zinc-800 space-y-4 transform -rotate-1">
              <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                <span className="font-mono text-xs text-zinc-500">EVIDENCE LOCKER A</span>
                <span className="font-mono text-xs text-blood-red">EXTENDED TO 2031</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-bold text-white">5.2M</div>
                  <div className="text-[10px] uppercase text-zinc-500">New Taxpayers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">4.8M</div>
                  <div className="text-[10px] uppercase text-zinc-500">Dragged to 40% Rate</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            {/* The Penalty Notice (Fiscal Drag) */}
            <div className="bg-yellow-50 text-zinc-900 p-8 shadow-2xl transform rotate-1 max-w-lg mx-auto relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-zinc-900 rounded-full"></div>
              <div className="border-4 border-zinc-900 p-6 h-full">
                <div className="flex justify-between items-start mb-8 border-b-2 border-zinc-900 pb-4">
                  <div>
                    <h3 className="font-display font-bold text-2xl uppercase">Penalty Charge</h3>
                    <p className="text-xs font-mono uppercase">Notice To Owner</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-xl">£67bn</div>
                    <div className="text-xs font-mono">ANNUALLY</div>
                  </div>
                </div>

                <div className="space-y-4 font-receipt text-sm">
                  <div className="flex justify-between">
                    <span className="uppercase font-bold">Contravention:</span>
                    <span>Existing during inflation</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="uppercase font-bold">Personal Allowance Loss:</span>
                    <span className="text-blood-red font-bold">£4,900</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="uppercase font-bold">Higher Rate Loss:</span>
                    <span className="text-blood-red font-bold">£20,100</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t-2 border-dashed border-zinc-400">
                  <p className="text-xs text-zinc-600 font-mono">
                    OBR confirms thresholds frozen since 2021. Real-terms cut of 25% to tax-free allowance.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================== */}
      {/* PART 2: EMPLOYER NICs PASS-THROUGH */}
      {/* ========================================== */}
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-block px-3 py-1 bg-orange-500 text-black font-display font-bold text-xs transform rotate-1">
            MECHANISM 2: EMPLOYER NICs
          </div>
          <h3 className="text-4xl font-black text-white tracking-tighter">
            THE <span className="text-orange-500">WAGE SUPPRESSION</span> MACHINE
          </h3>
          <p className="text-zinc-400 font-mono text-sm max-w-2xl mx-auto">
            HOW "EMPLOYER TAXES" LAND ON <span className="text-orange-500">YOUR PAYSLIP</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          
          {/* Left: The Myth */}
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="text-zinc-500" size={32} />
                <h4 className="font-display font-bold text-white text-xl">THE POLITICAL FICTION</h4>
              </div>
              
              <div className="space-y-4 text-sm font-receipt">
                <p className="text-zinc-400 leading-relaxed">
                  When politicians increase "Employer National Insurance," they frame it as a tax on businesses.
                  The headline reads: <span className="text-white italic">"Companies to pay more."</span>
                </p>
                
                <div className="bg-zinc-950 border border-zinc-700 p-4">
                  <p className="text-zinc-300 text-xs leading-relaxed">
                    The average voter hears this and thinks: <span className="text-acid-green font-bold">"Good! 
                    Make the corporations pay!"</span>
                  </p>
                </div>

                <p className="text-zinc-400 leading-relaxed">
                  But corporations don't pay taxes. <span className="text-white font-bold">People</span> pay taxes.
                  And when you tax a company's ability to hire people, those people pay the price.
                </p>
              </div>
            </div>

            <div className="bg-orange-500/10 border border-orange-500 p-6">
              <div className="font-display font-bold text-white mb-3">THE OBR ADMISSION</div>
              <p className="text-sm text-zinc-300 font-receipt leading-relaxed italic">
                "Firms pass on... the recent rise in employer National Insurance contributions (NICs) to real wages."
              </p>
              <p className="text-xs text-zinc-500 font-mono mt-2">
                Para 1.7, 2.42 - OBR Economic and Fiscal Outlook
              </p>
            </div>
          </div>

          {/* Right: The Mechanism */}
          <div className="space-y-6">
            <div className="bg-zinc-950 border border-orange-500 p-6">
              <div className="flex items-center gap-3 mb-4">
                <ArrowDown className="text-orange-500" size={32} />
                <h4 className="font-display font-bold text-white text-xl">THE PASS-THROUGH</h4>
              </div>

              <div className="space-y-4">
                {/* Flow Diagram */}
                <div className="space-y-4 font-mono text-xs">
                  
                  <div className="bg-zinc-900 border-l-4 border-blood-red p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-blood-red font-bold">STEP 1:</span>
                      <span className="text-white">Government increases Employer NICs</span>
                    </div>
                    <p className="text-zinc-400 ml-16">
                      Every worker now costs the company more money to employ
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <ArrowDown className="text-zinc-600" size={24} />
                  </div>

                  <div className="bg-zinc-900 border-l-4 border-orange-500 p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-orange-500 font-bold">STEP 2:</span>
                      <span className="text-white">Company adjusts total labour costs</span>
                    </div>
                    <p className="text-zinc-400 ml-16">
                      They have a budget. NICs went up. Something else must go down.
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <ArrowDown className="text-zinc-600" size={24} />
                  </div>

                  <div className="bg-zinc-900 border-l-4 border-acid-green p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-acid-green font-bold">STEP 3:</span>
                      <span className="text-white">Your wage growth slows</span>
                    </div>
                    <p className="text-zinc-400 ml-16">
                      The pay rise you would have gotten is smaller or doesn't happen
                    </p>
                  </div>

                </div>

                <div className="border-t border-zinc-800 pt-4">
                  <div className="bg-blood-red/20 border border-blood-red p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Wallet className="text-blood-red" size={20} />
                      <span className="text-white font-bold text-sm">THE FORECAST</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-3">
                      <div>
                        <div className="text-2xl font-black text-white">2.25%</div>
                        <div className="text-xs text-zinc-400">Nominal Wage Growth (from 2027)</div>
                      </div>
                      <div>
                        <div className="text-2xl font-black text-blood-red">{'↓'}</div>
                        <div className="text-xs text-zinc-400">Down from previous forecasts</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-zinc-800">
          <div className="bg-zinc-950 border border-zinc-800 p-6 text-center">
            <Users className="text-zinc-600 mx-auto mb-3" size={32} />
            <div className="text-3xl font-black text-white mb-1">100%</div>
            <div className="text-xs text-zinc-500 uppercase">Of tax incidence on humans</div>
          </div>
          
          <div className="bg-zinc-950 border border-zinc-800 p-6 text-center">
            <Building2 className="text-zinc-600 mx-auto mb-3" size={32} />
            <div className="text-3xl font-black text-white mb-1">0%</div>
            <div className="text-xs text-zinc-500 uppercase">Of tax paid by buildings</div>
          </div>
          
          <div className="bg-zinc-950 border border-blood-red p-6 text-center">
            <Wallet className="text-blood-red mx-auto mb-3" size={32} />
            <div className="text-3xl font-black text-white mb-1">76%</div>
            <div className="text-xs text-zinc-500 uppercase">Passed to workers (OBR estimate)</div>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* PART 3: SALARY SACRIFICE RAID */}
      {/* ========================================== */}
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-block px-3 py-1 bg-acid-green text-black font-display font-bold text-xs transform -rotate-1">
            MECHANISM 3: PENSION PENALTY
          </div>
          <h3 className="text-4xl font-black text-white tracking-tighter">
            THE <span className="text-acid-green">SALARY SACRIFICE</span> TRAP
          </h3>
          <p className="text-zinc-400 font-mono text-sm">
            SAVING FOR RETIREMENT: <span className="text-blood-red">NOW A CRIME</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: The Problem */}
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 p-6 space-y-4">
              <div className="flex items-center gap-3 text-blood-red">
                <AlertCircle size={24} />
                <h4 className="font-display font-bold text-lg">THE ATTACK ON PRUDENCE</h4>
              </div>
              
              <div className="space-y-4 text-sm text-zinc-400 font-receipt">
                <p>
                  Salary sacrifice was one of the last tax-efficient ways for workers to save for retirement.
                  You agree to sacrifice part of your salary, it goes straight into your pension, and you avoid
                  paying National Insurance on that amount.
                </p>
                <p>
                  <span className="text-white font-bold">From April 2029</span>, the government will charge
                  Employer and Employee NICs on any salary-sacrificed pension contributions <span className="text-white font-bold">above £2,000</span>.
                </p>
                <p className="text-acid-green">
                  Translation: They claim the relief "disproportionately benefits higher earners." In reality, it hits middle management hard.
                </p>
              </div>
            </div>

            <div className="bg-blood-red/10 border border-blood-red p-6 space-y-3">
              <div className="font-display font-bold text-white text-lg">THE NUMBERS</div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-black text-white">£4.7bn</div>
                  <div className="text-xs text-zinc-400 uppercase">Total Revenue (2029-30)</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white">76%</div>
                  <div className="text-xs text-zinc-400 uppercase">Cost Passed to Workers</div>
                </div>
              </div>
              <p className="text-xs text-zinc-400 font-mono">
                Source: OBR Economic and Fiscal Outlook, Para 3.31
              </p>
            </div>
          </div>

          {/* Right: The Calculation */}
          <div className="space-y-6">
            <div className="bg-zinc-950 border border-acid-green p-6 space-y-6">
              <div className="flex items-center gap-3 text-acid-green">
                <Calculator size={24} />
                <h4 className="font-display font-bold text-lg">HOW YOU GET HIT</h4>
              </div>

              <div className="space-y-4 font-mono text-sm">
                <div className="space-y-2">
                  <div className="text-zinc-500 text-xs">SCENARIO: You earn £50,000</div>
                  <div className="bg-zinc-900 p-4 space-y-2 border-l-4 border-acid-green">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Your salary sacrifice:</span>
                      <span className="text-white">£5,000/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Amount above £2,000:</span>
                      <span className="text-white">£3,000</span>
                    </div>
                    <div className="flex justify-between border-t border-zinc-800 pt-2">
                      <span className="text-zinc-400">New NICs charge (12%):</span>
                      <span className="text-blood-red font-bold">£360/year</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-zinc-800 pt-4">
                  <div className="text-zinc-500 text-xs mb-2">BUT WAIT, THERE'S MORE...</div>
                  <div className="bg-zinc-900 p-4 space-y-2 text-xs">
                    <p className="text-zinc-400">
                      The OBR confirms employers will pass on 76% of their increased costs to you via:
                    </p>
                    <ul className="space-y-1 text-zinc-300 ml-4">
                      <li>{'→'} 50% through <span className="text-white font-bold">lower employer pension contributions</span></li>
                      <li>{'→'} 50% through <span className="text-white font-bold">lower wages and bonuses</span></li>
                    </ul>
                    <div className="pt-2 border-t border-zinc-800 text-blood-red font-bold">
                      You pay twice: Direct tax + Indirect wage cut
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Seizure Notice */}
            <div className="bg-red-50 text-zinc-900 p-6 shadow-2xl transform -rotate-1 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blood-red rounded-full"></div>
              <div className="border-4 border-double border-blood-red p-4 relative overflow-hidden">
                <div className="flex justify-between items-start mb-4 border-b-2 border-blood-red pb-3">
                  <div className="flex items-center gap-2 text-blood-red">
                    <Lock size={20} />
                    <div>
                      <h5 className="font-display font-bold text-lg uppercase">Notice of Seizure</h5>
                      <p className="text-[10px] font-mono uppercase">Ref: Salary Sacrifice</p>
                    </div>
                  </div>
                  <div className="text-right text-blood-red">
                    <div className="font-bold text-lg">£4.7bn</div>
                    <div className="text-xs font-mono">CONFISCATED</div>
                  </div>
                </div>

                <p className="text-xs font-receipt italic mb-3">
                  "From April 2029, we are raiding your pension contributions above £2,000."
                </p>

                <div className="text-center">
                  <span className="inline-block border-2 border-blood-red text-blood-red font-black uppercase px-2 py-1 transform -rotate-6 text-sm">
                    PAY TWICE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Forensic Note */}
        <div className="bg-zinc-900/50 border border-zinc-700 p-6">
          <p className="text-sm text-zinc-400 font-receipt leading-relaxed">
            <span className="text-acid-green font-bold">FORENSIC NOTE:</span> This policy specifically
            targets middle-income workers trying to boost retirement savings. High earners already max
            out their allowances. Low earners can't afford to sacrifice. The £2,000 threshold is
            precisely calibrated to extract maximum revenue from those making £30k-£70k.
          </p>
          <div className="mt-4 pt-4 border-t border-zinc-800">
            <p className="text-xs text-zinc-500 font-mono">
              <span className="text-white font-bold">WHAT THEY COULD HAVE DONE:</span> A 1% wealth tax on assets over £10m would have raised the same amount. They chose to raid your pension instead because you are easier to bully than the ultra-rich.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* FINAL SUMMARY BOX */}
      {/* ========================================== */}
      <div className="bg-zinc-950 border-2 border-blood-red p-8 md:p-12">
        <div className="text-center space-y-6">
          <h3 className="font-display font-bold text-3xl text-white uppercase">THE TRIPLE TAP SUMMARY</h3>
          
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="border-l-4 border-blood-red pl-4 py-2">
              <div className="text-xs text-blood-red font-mono uppercase mb-2">Mechanism 1</div>
              <div className="text-lg font-bold text-white mb-1">Fiscal Drag</div>
              <p className="text-sm text-zinc-400">£67bn annually from frozen thresholds</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <div className="text-xs text-orange-500 font-mono uppercase mb-2">Mechanism 2</div>
              <div className="text-lg font-bold text-white mb-1">Employer NICs</div>
              <p className="text-sm text-zinc-400">76% passed through to your wages</p>
            </div>
            <div className="border-l-4 border-acid-green pl-4 py-2">
              <div className="text-xs text-acid-green font-mono uppercase mb-2">Mechanism 3</div>
              <div className="text-lg font-bold text-white mb-1">Pension Penalty</div>
              <p className="text-sm text-zinc-400">£4.7bn raided from salary sacrifice</p>
            </div>
          </div>

          <div className="pt-6 border-t border-zinc-700">
            <p className="text-zinc-400 font-receipt text-sm max-w-2xl mx-auto">
              Three mechanisms, one target. They don't need to announce a tax rise—they just need 
              to wait for inflation to do the work. <span className="text-white font-bold">The greatest trick 
              the Treasury ever pulled was convincing you this wasn't a tax increase.</span>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
