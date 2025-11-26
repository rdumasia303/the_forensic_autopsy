import React from 'react';
import { AlertTriangle, Baby, GraduationCap, PiggyBank, Banknote, TrendingDown, Percent } from 'lucide-react';

const TrapCard = ({ icon: Icon, title, subtitle, emtr, description, breakdown, verdict, color = 'blood-red' }: {
  icon: any,
  title: string,
  subtitle: string,
  emtr: string,
  description: string,
  breakdown: string[],
  verdict: string,
  color?: 'blood-red' | 'acid-green' | 'orange'
}) => {
  const borderColor = color === 'blood-red' ? 'border-blood-red' : color === 'acid-green' ? 'border-acid-green' : 'border-orange-500';
  const textColor = color === 'blood-red' ? 'text-blood-red' : color === 'acid-green' ? 'text-acid-green' : 'text-orange-500';
  const bgColor = color === 'blood-red' ? 'bg-blood-red/10' : color === 'acid-green' ? 'bg-acid-green/10' : 'bg-orange-500/10';
  
  return (
    <div className={`bg-zinc-950 border ${borderColor} p-6 md:p-8 relative overflow-hidden`}>
      <div className="absolute top-4 right-4">
        <div className={`${bgColor} ${textColor} border ${borderColor} px-3 py-2 font-mono text-xs`}>
          <span className="block text-[10px] text-zinc-500 uppercase">Effective Marginal Rate</span>
          <span className="text-2xl font-black">{emtr}</span>
        </div>
      </div>
      
      <div className="space-y-6 pr-24">
        <div className="flex items-start gap-4">
          <div className={`p-3 ${bgColor} border ${borderColor}`}>
            <Icon className={textColor} size={24} />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-white uppercase">{title}</h3>
            <p className="text-xs text-zinc-500 font-mono uppercase">{subtitle}</p>
          </div>
        </div>

        <p className="text-sm text-zinc-400 font-receipt leading-relaxed">
          {description}
        </p>

        <div className="bg-zinc-900 border border-zinc-800 p-4 space-y-2">
          <div className="text-xs text-zinc-500 font-mono uppercase mb-3">The Math</div>
          {breakdown.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-xs font-mono">
              <span className={textColor}>→</span>
              <span className="text-zinc-300">{item}</span>
            </div>
          ))}
        </div>

        <div className={`${bgColor} border-l-2 ${borderColor} p-4`}>
          <p className="text-xs text-zinc-300 font-receipt">
            <span className={`${textColor} font-bold`}>THE STUPIDITY:</span> {verdict}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function TheTaxTraps() {
  return (
    <div className="space-y-16">
      <div className="text-center md:text-left border-b border-zinc-800 pb-8">
        <div className="inline-block px-3 py-1 bg-blood-red text-white font-display font-bold text-xs mb-4 transform -rotate-1">
          HOSTILE BY DESIGN
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4">
          THE <span className="text-blood-red">MARGINAL</span> RATE MASSACRE
        </h2>
        <p className="font-display text-zinc-400 max-w-3xl text-lg">
          The Effective Marginal Tax Rate (EMTR) is what you actually lose from every extra £1 earned.
          This Budget has created a system that punishes effort at almost every income level.
        </p>
      </div>

      {/* The Big Three Traps */}
      <div className="space-y-8">
        
        <TrapCard 
          icon={Baby}
          title="The 'Work Doesn't Pay' Trap"
          subtitle="Universal Credit Recipients"
          emtr="68%"
          color="blood-red"
          description="A single parent just above the income disregard faces a combined rate higher than a millionaire (45%). The Budget made benefits MORE generous without fixing the taper rate, making the poverty trap deeper and wider."
          breakdown={[
            "20% Income Tax",
            "8% National Insurance",
            "55% UC Withdrawal on the remaining 72p (≈ 40p)",
            "Result: Keep roughly 32p of every £1 earned"
          ]}
          verdict="The Budget removes the two-child limit (good) but keeps the 55% taper rate (catastrophic). More people are now trapped in a system where work literally doesn't pay. The OBR confirms this REDUCES labour supply (Box 3.2)."
        />

        <TrapCard 
          icon={Baby}
          title="The 'Squeezed Middle' Death Zone"
          subtitle="Parents Earning £60k-£80k"
          emtr="62%"
          color="orange"
          description="The HICBC taper was 'reformed' from £50-60k to £60-80k. Sounds better? The trap is now WIDER (£20k range vs £10k). With two kids, you lose 1% of Child Benefit per £200 over £60k. Stack this with 40% tax, 2% NICs, and 9% student loan = 62%+ marginal rate."
          breakdown={[
            "40% Income Tax (Higher Rate)",
            "2% National Insurance",
            "9% Student Loan (Plan 2, threshold frozen at £27k)",
            "~11% HICBC Clawback (1% per £200 over £60k, 2 kids)"
          ]}
          verdict="The 'reform' moved the trap but made it wider. A parent with student loan in this band keeps 38p of every extra £1. A landlord with rental income keeps 55p. A house seller keeps 100p."
        />

        <TrapCard 
          icon={GraduationCap}
          title="The Graduate Grind"
          subtitle="Anyone with a Student Loan"
          emtr="51%+"
          color="acid-green"
          description="Freezing the Plan 2 repayment threshold at £29,385 is a stealth tax hike. In real terms (wage inflation), graduates face a 9% marginal tax on top of everything else, effectively forever."
          breakdown={[
            "20% or 40% Income Tax",
            "8% or 2% National Insurance",
            "9% Student Loan Repayment (frozen threshold)",
            "Combined: Up to 51% before any benefit clawbacks"
          ]}
          verdict="A graduate earning £35k has a higher marginal tax rate than someone living off capital gains. The Budget cements this as the permanent reality for an entire generation."
        />

      </div>

      {/* The ISA Stupidity */}
      <div className="bg-zinc-900 border-2 border-acid-green p-8 space-y-6">
        <div className="flex items-start gap-4">
          <PiggyBank className="text-acid-green flex-shrink-0" size={40} />
          <div>
            <h3 className="font-display font-bold text-2xl text-white uppercase">The ISA "Stupidity"</h3>
            <p className="text-xs text-zinc-500 font-mono uppercase">A Tax on Financial Illiteracy</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="text-xs text-zinc-500 font-mono uppercase">The Policy (Para 4.228)</div>
            <p className="text-sm text-zinc-400 font-receipt leading-relaxed">
              From April 2027, the <span className="text-white font-bold">Cash ISA limit is slashed to £12,000</span>. 
              The overall ISA limit remains £20,000. The intent is to force people to invest in "British Growth" (equities).
            </p>
            <div className="bg-zinc-950 border border-zinc-800 p-4">
              <div className="text-xs text-blood-red font-bold mb-2">THE LOOPHOLE:</div>
              <p className="text-xs text-zinc-400">
                A Stocks & Shares ISA can hold <span className="text-acid-green font-bold">Money Market Funds</span> or 
                Short-Term Gilt Funds. These are effectively cash equivalents paying near-Bank Rate interest.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-xs text-zinc-500 font-mono uppercase">The Reality</div>
            <div className="space-y-3">
              <div className="bg-acid-green/10 border border-acid-green p-4">
                <div className="text-xs text-acid-green font-bold mb-1">SOPHISTICATED INVESTORS:</div>
                <p className="text-xs text-zinc-300">
                  Open a S&S ISA, buy a GBP Money Market Fund, get near-cash returns on the full £20,000 allowance. Problem solved.
                </p>
              </div>
              <div className="bg-blood-red/10 border border-blood-red p-4">
                <div className="text-xs text-blood-red font-bold mb-1">NORMAL PEOPLE:</div>
                <p className="text-xs text-zinc-300">
                  See their Cash ISA capped at £12k and pay tax on interest above that. Punished for not knowing fund structures.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-zinc-800">
          <p className="text-xs text-zinc-500 font-mono">
            <span className="text-acid-green font-bold">VERDICT:</span> This policy achieves zero economic benefit (money in MMFs isn't "productive capital") but penalizes savers who don't understand the workaround. It is the perfect metaphor for this Budget.
          </p>
        </div>
      </div>

      {/* The Other Stupidities */}
      <div className="space-y-6">
        <h3 className="font-display font-bold text-2xl text-white">Other Tax Code Stupidities</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          
          <div className="bg-zinc-950 border border-zinc-800 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Banknote className="text-zinc-500" size={24} />
              <h4 className="font-display font-bold text-white">The Car Wash SWAT Team</h4>
            </div>
            <p className="text-xs text-zinc-400 font-receipt leading-relaxed">
              A "dedicated hidden economy team" to target hand car washes and nail bars (Para 4.70). 
              Chasing cash-in-hand businesses is notoriously low-yield. 
              Meanwhile, multinational transfer pricing abuse (costing billions) gets a "consultation."
            </p>
            <p className="text-[10px] text-blood-red font-mono">PERFORMATIVE ENFORCEMENT</p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="text-zinc-500" size={24} />
              <h4 className="font-display font-bold text-white">Vaping Duty Stamps</h4>
            </div>
            <p className="text-xs text-zinc-400 font-receipt leading-relaxed">
              Physical "duty stamps" (like on alcohol) for vape liquid (Para 4.138).
              The admin cost of printing/tracking stamps on millions of tiny 10ml bottles will decimate the legal SME vape market
              and hand a monopoly to big tobacco.
            </p>
            <p className="text-[10px] text-blood-red font-mono">BIG TOBACCO BAILOUT</p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <TrendingDown className="text-zinc-500" size={24} />
              <h4 className="font-display font-bold text-white">The "Post-Departure" Chase</h4>
            </div>
            <p className="text-xs text-zinc-400 font-receipt leading-relaxed">
              Taxing dividends received during "temporary non-residence" (Para 4.225).
              This tells people: "If you leave, don't come back for at least 5 years, or we bill you for the years you were gone."
            </p>
            <p className="text-[10px] text-blood-red font-mono">TALENT REPELLENT</p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Percent className="text-zinc-500" size={24} />
              <h4 className="font-display font-bold text-white">Salary Sacrifice Sabotage</h4>
            </div>
            <p className="text-xs text-zinc-400 font-receipt leading-relaxed">
              The £2,000 cap creates a "kink" in incentives, discouraging more than £166/month into pensions.
              The OBR admits they've factored in "Employer Evasion" (Para 3.32) because the policy is so clunky that employers will scrap it entirely.
            </p>
            <p className="text-[10px] text-blood-red font-mono">SELF-DEFEATING</p>
          </div>

        </div>
      </div>

      {/* The Verdict Box */}
      <div className="bg-zinc-900 border-2 border-white p-8">
        <div className="text-center space-y-6">
          <h3 className="font-display font-bold text-3xl text-white uppercase">A System Hostile to Social Mobility</h3>
          
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="border-l-2 border-blood-red pl-4">
              <div className="text-xs text-blood-red font-mono uppercase mb-2">If You're Poor</div>
              <p className="text-sm text-zinc-400">The 55% taper rate traps you. Work doesn't pay.</p>
            </div>
            <div className="border-l-2 border-orange-500 pl-4">
              <div className="text-xs text-orange-500 font-mono uppercase mb-2">If You're Middle Class</div>
              <p className="text-sm text-zinc-400">Fiscal drag + Student Loan + HICBC traps you. Aspiration is punished.</p>
            </div>
            <div className="border-l-2 border-acid-green pl-4">
              <div className="text-xs text-acid-green font-mono uppercase mb-2">If You're Prudent</div>
              <p className="text-sm text-zinc-400">Salary Sacrifice cap + ISA changes trap you. Saving is penalized.</p>
            </div>
          </div>

          <div className="pt-6 border-t border-zinc-700">
            <p className="text-zinc-400 font-receipt text-sm max-w-2xl mx-auto">
              The only people NOT trapped are those with existing large capital piles who can live off the 20% Capital Gains rate.
              <span className="text-white font-bold"> If you are smart and rich enough to play the system, you are fine. If you are an ordinary worker trying to save cash, you lose.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
