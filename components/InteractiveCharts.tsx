import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, BarChart3, PieChart, Zap, Users, Coins, Home, GraduationCap, Briefcase } from 'lucide-react';

// Animated bar component
const AnimatedBar = ({ 
  value, 
  maxValue, 
  color, 
  label, 
  amount,
  delay = 0 
}: { 
  value: number; 
  maxValue: number; 
  color: string; 
  label: string;
  amount: string;
  delay?: number;
}) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth((value / maxValue) * 100);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, maxValue, delay]);

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs">
        <span className="text-zinc-400 font-receipt">{label}</span>
        <span className={`font-bold font-mono ${color.includes('red') ? 'text-blood-red' : color.includes('green') ? 'text-acid-green' : 'text-white'}`}>
          {amount}
        </span>
      </div>
      <div className="h-8 bg-zinc-900 border border-zinc-700 relative overflow-hidden">
        <div 
          className={`h-full ${color} transition-all duration-1000 ease-out relative`}
          style={{ width: `${width}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
};

// Interactive EMTR Calculator
export const EMTRCalculator = () => {
  const [salary, setSalary] = useState(70000);
  const [hasKids, setHasKids] = useState(true); // Has 2 kids
  const [hasStudentLoan, setHasStudentLoan] = useState(true);
  const [onUC, setOnUC] = useState(false); // Universal Credit recipient
  
  const calculateEMTR = () => {
    let emtr = 0;
    let breakdown: string[] = [];
    let warnings: string[] = [];
    
    // Free childcare cliff edge: £100k threshold
    // Lose 30 hours/week free childcare worth £65-200/week = £3,380 - £10,400/year
    // Using mid-estimate of ~£6,500/year for 2 kids
    // PLUS you hit the Personal Allowance taper (60% effective rate from £100k-£125k)
    // At £99k net after tax: ~£64,900
    // At £100k you lose £6.5k childcare AND hit 60% tax zone
    // From £100k-£125k you face: 40% income tax + 2% NI + 20% PA taper = 62% 
    // Plus the lost £6.5k childcare spread over that income
    // You need to earn to ~£118k gross to match £99k net + childcare
    if (hasKids && salary >= 99000 && salary <= 118000) {
      emtr = 100; // Over 100% - you're going backwards
      breakdown.push('🚨 CHILDCARE CLIFF (lose £6.5-10k at £100k) + 60% PA taper trap');
      warnings.push(`CHILDCARE CLIFF EDGE: At £${(salary/1000).toFixed(0)}k you're WORSE OFF than at £99k. Need ~£118k to break even!`);
    }
    
    // UC recipients have a completely different (worse) situation
    if (onUC && salary < 50000) {
      // Base tax on lower incomes
      if (salary > 12570) {
        emtr += 20;
        breakdown.push('20% Income Tax');
      }
      // NICs
      if (salary > 12570) {
        emtr += 8;
        breakdown.push('8% NICs');
      }
      // The killer: 55% UC taper on net income
      // On gross, this works out to ~55% of the remaining 72p = 40p lost
      // So effective rate on gross is about 40% from UC taper alone
      emtr += 40; // UC taper effect on gross
      breakdown.push('~40% UC taper (55% of net)');
      
      return { emtr: Math.min(emtr, 100), breakdown, warnings };
    }
    
    // Base income tax
    if (salary > 125140) {
      emtr += 45;
      breakdown.push('45% Income Tax (Additional)');
    } else if (salary > 50270) {
      emtr += 40;
      breakdown.push('40% Income Tax (Higher)');
    } else if (salary > 12570) {
      emtr += 20;
      breakdown.push('20% Income Tax (Basic)');
    }
    
    // Employee NICs
    if (salary > 12570 && salary <= 50270) {
      emtr += 8;
      breakdown.push('8% NICs');
    } else if (salary > 50270) {
      emtr += 2;
      breakdown.push('2% NICs (above UEL)');
    }
    
    // HICBC taper - NOW £60k-£80k (changed in this budget!)
    if (hasKids && salary >= 60000 && salary <= 80000) {
      // Lose 1% of child benefit per £200 over £60k
      // With 2 kids (~£2,200/yr benefit), this is ~11% effective marginal rate
      emtr += 11;
      breakdown.push('~11% HICBC clawback (2 kids)');
    }
    
    // Student loan (Plan 2 or later)
    if (hasStudentLoan && salary > 27295) {
      emtr += 9;
      breakdown.push('9% Student Loan (Plan 2+)');
    }
    
    // Personal allowance taper (60% trap)
    if (salary >= 100000 && salary <= 125140) {
      emtr += 20; // Effective extra 20% from losing PA
      breakdown.push('+20% PA taper (60% trap)');
    }
    
    return { emtr: Math.min(emtr, 100), breakdown, warnings };
  };

  const { emtr, breakdown, warnings } = calculateEMTR();

  const getEmoji = () => {
    if (emtr >= 70) return '💀';
    if (emtr >= 60) return '😱';
    if (emtr >= 50) return '😰';
    if (emtr >= 40) return '😐';
    return '😊';
  };

  return (
    <div className="bg-zinc-950 border-2 border-acid-green p-6 space-y-6">
      <div className="flex items-center gap-3">
        <Zap className="text-acid-green" />
        <h4 className="font-display font-bold text-lg text-white uppercase">EMTR Calculator</h4>
        <span className="text-xs text-zinc-500 font-mono">(INTERACTIVE)</span>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="text-xs font-mono text-zinc-400 block mb-2">YOUR SALARY: £{salary.toLocaleString()}</label>
          <input 
            type="range" 
            min="15000" 
            max="150000" 
            step="1000"
            value={salary}
            onChange={(e) => setSalary(Number(e.target.value))}
            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-acid-green"
          />
          <div className="flex justify-between text-[10px] text-zinc-600 mt-1">
            <span>£15k</span>
            <span>£150k</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <label className="flex items-center gap-2 text-xs text-zinc-400 cursor-pointer bg-zinc-900 p-2 border border-zinc-800 hover:border-zinc-600">
            <input 
              type="checkbox" 
              checked={onUC}
              onChange={(e) => { setOnUC(e.target.checked); if(e.target.checked) setSalary(25000); }}
              className="accent-blood-red"
            />
            <Users size={14} className="text-blood-red" />
            On Universal Credit (2 kids)
          </label>
          <label className="flex items-center gap-2 text-xs text-zinc-400 cursor-pointer bg-zinc-900 p-2 border border-zinc-800 hover:border-zinc-600">
            <input 
              type="checkbox" 
              checked={hasKids}
              onChange={(e) => setHasKids(e.target.checked)}
              className="accent-orange-500"
              disabled={onUC}
            />
            <Users size={14} className="text-orange-500" />
            Has 2 kids (Child Benefit + childcare)
          </label>
          <label className="flex items-center gap-2 text-xs text-zinc-400 cursor-pointer bg-zinc-900 p-2 border border-zinc-800 hover:border-zinc-600 col-span-2">
            <input 
              type="checkbox" 
              checked={hasStudentLoan}
              onChange={(e) => setHasStudentLoan(e.target.checked)}
              className="accent-acid-green"
              disabled={onUC}
            />
            <GraduationCap size={14} />
            Student loan (Plan 2+)
          </label>
        </div>
      </div>
      
      <div className={`border p-6 text-center ${emtr >= 100 ? 'bg-black border-blood-red animate-pulse' : 'bg-zinc-900 border-zinc-700'}`}>
        <div className="text-6xl mb-2">{getEmoji()}</div>
        <div className="text-xs font-mono text-zinc-500 mb-2">YOUR EFFECTIVE MARGINAL TAX RATE</div>
        <div className={`text-5xl font-black font-mono ${emtr >= 100 ? 'text-blood-red animate-pulse' : emtr >= 60 ? 'text-blood-red' : emtr >= 50 ? 'text-orange-500' : 'text-acid-green'}`}>
          {emtr >= 100 ? '100%+' : `${emtr}%`}
        </div>
        <p className="text-xs text-zinc-500 mt-4 font-receipt">
          For every extra £1 you earn, you keep <span className={`font-bold ${emtr >= 100 ? 'text-blood-red' : emtr >= 60 ? 'text-blood-red' : 'text-white'}`}>
            {emtr >= 100 ? 'NOTHING (you go backwards!)' : `${(100 - emtr)}p`}
          </span>
        </p>
        
        {/* Breakdown */}
        <div className="mt-4 pt-4 border-t border-zinc-800 text-left">
          <div className="text-[10px] text-zinc-600 font-mono mb-2">BREAKDOWN:</div>
          <div className="space-y-1">
            {breakdown.map((item, i) => (
              <div key={i} className="text-xs text-zinc-500 font-receipt flex items-center gap-2">
                <span className="text-acid-green">▸</span> {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Cliff edge warnings */}
      {warnings.length > 0 && (
        <div className="bg-blood-red border-2 border-white p-6 space-y-3 animate-pulse">
          <div className="text-4xl text-center">⚠️ CLIFF EDGE DETECTED ⚠️</div>
          {warnings.map((warning, i) => (
            <p key={i} className="text-base text-white font-receipt font-bold text-center">
              {warning}
            </p>
          ))}
          <div className="bg-black border border-white p-4 mt-3">
            <p className="text-sm text-white font-mono text-center">
              You are literally <span className="text-acid-green font-bold">BETTER OFF EARNING LESS</span>. 
              Drop salary to £99k via pension contributions = keep childcare + get 40% tax relief. <br/>
              <span className="text-zinc-400 text-xs mt-2 block">The £100k cliff costs you £6.5-10k in childcare. Combined with 60% tax trap, you don't break even until ~£118k.</span>
            </p>
          </div>
        </div>
      )}
      
      {emtr >= 60 && !warnings.length && (
        <div className="bg-blood-red/10 border border-blood-red p-4 text-center">
          <p className="text-sm text-blood-red font-receipt">
            🚨 CONGRATULATIONS! You've found a tax trap! 🚨
          </p>
          <p className="text-xs text-zinc-400 mt-2">
            {onUC && "You're on Universal Credit. The 55% taper means work barely pays."}
            {salary >= 100000 && salary <= 125140 && !onUC && "You're in the 60% personal allowance taper zone."}
            {salary >= 60000 && salary <= 80000 && hasKids && !onUC && "You're in the HICBC clawback zone (£60-80k)."}
            {emtr >= 70 && !onUC && "You're experiencing the full horror of stacked marginal rates."}
          </p>
        </div>
      )}
      
      {onUC && (
        <div className="bg-zinc-900 border border-zinc-700 p-3 text-center">
          <p className="text-xs text-zinc-500 font-mono">
            💡 UC recipients face 68% EMTR even at low incomes. The Budget removed the 2-child limit but kept the 55% taper. More people trapped, not freed.
          </p>
        </div>
      )}
    </div>
  );
};

// Who Pays What Chart
export const WhoPaysWhatChart = () => {
  const [hoveredBar, setHoveredBar] = useState<string | null>(null);
  
  const data = [
    { label: 'UC claimant + extra shift', rate: 68, color: 'bg-blood-red', type: 'worker' },
    { label: 'Parent @ £70k (HICBC+SL)', rate: 62, color: 'bg-blood-red', type: 'worker' },
    { label: '£100-125k earner (PA taper)', rate: 62, color: 'bg-blood-red', type: 'worker' },
    { label: 'Graduate @ £50k', rate: 51, color: 'bg-orange-500', type: 'worker' },
    { label: 'Employee @ £30k', rate: 28, color: 'bg-yellow-500', type: 'worker' },
    { label: 'Landlord (rental income)', rate: 45, color: 'bg-purple-500', type: 'capital' },
    { label: 'Share seller (CGT)', rate: 24, color: 'bg-acid-green', type: 'capital' },
    { label: 'Second home sale (CGT)', rate: 24, color: 'bg-acid-green', type: 'capital' },
  ];

  return (
    <div className="bg-zinc-950 border border-zinc-800 p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BarChart3 className="text-white" />
          <h4 className="font-display font-bold text-lg text-white uppercase">Who Pays What</h4>
        </div>
        <div className="flex gap-4 text-xs">
          <span className="flex items-center gap-1"><Users size={12} className="text-blood-red" /> Workers</span>
          <span className="flex items-center gap-1"><Coins size={12} className="text-acid-green" /> Capital</span>
        </div>
      </div>
      
      <div className="space-y-3">
        {data.map((item, i) => (
          <div 
            key={item.label}
            className="relative"
            onMouseEnter={() => setHoveredBar(item.label)}
            onMouseLeave={() => setHoveredBar(null)}
          >
            <AnimatedBar 
              value={item.rate} 
              maxValue={80} 
              color={item.color}
              label={item.label}
              amount={`${item.rate}%`}
              delay={i * 100}
            />
            {hoveredBar === item.label && (
              <div className="absolute -right-2 top-0 transform translate-x-full bg-zinc-800 border border-zinc-700 p-2 text-xs z-10 whitespace-nowrap">
                {item.type === 'worker' ? (
                  <span className="text-blood-red">💼 Taxing effort</span>
                ) : (
                  <span className="text-acid-green">🏦 Taxing wealth (barely)</span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="border-t border-zinc-800 pt-4 text-center">
        <p className="text-xs text-zinc-500 font-receipt">
          Hover over bars • <span className="text-blood-red">Red = effort taxed</span> • <span className="text-acid-green">Green = wealth (un)taxed</span>
        </p>
      </div>
    </div>
  );
};

// Fiscal Drag Over Time
export const FiscalDragTimeline = () => {
  const [year, setYear] = useState(2028);
  
  const data: Record<number, { threshold: number; avgSalary: number; draggedIn: number }> = {
    2021: { threshold: 12570, avgSalary: 31285, draggedIn: 0 },
    2022: { threshold: 12570, avgSalary: 32760, draggedIn: 1200000 },
    2023: { threshold: 12570, avgSalary: 34200, draggedIn: 2100000 },
    2024: { threshold: 12570, avgSalary: 35400, draggedIn: 2800000 },
    2025: { threshold: 12570, avgSalary: 36800, draggedIn: 3400000 },
    2026: { threshold: 12570, avgSalary: 38200, draggedIn: 4100000 },
    2027: { threshold: 12570, avgSalary: 39600, draggedIn: 4700000 },
    2028: { threshold: 12570, avgSalary: 41100, draggedIn: 5200000 },
    2029: { threshold: 12570, avgSalary: 42700, draggedIn: 5800000 },
  };
  
  const currentData = data[year];
  const inflationAdjustedThreshold = Math.round(12570 * Math.pow(1.03, year - 2021));

  return (
    <div className="bg-zinc-950 border border-zinc-800 p-6 space-y-6">
      <div className="flex items-center gap-3">
        <TrendingDown className="text-blood-red" />
        <h4 className="font-display font-bold text-lg text-white uppercase">The Fiscal Drag Machine</h4>
      </div>
      
      <div>
        <label className="text-xs font-mono text-zinc-400 block mb-2">SELECT YEAR: {year}</label>
        <input 
          type="range" 
          min="2021" 
          max="2029" 
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blood-red"
        />
        <div className="flex justify-between text-[10px] text-zinc-600 mt-1">
          <span>2021 (frozen)</span>
          <span>2029 (still frozen)</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-zinc-900 border border-zinc-700 p-4 text-center">
          <div className="text-xs text-zinc-500 mb-1">FROZEN THRESHOLD</div>
          <div className="text-2xl font-mono text-blood-red">£{currentData.threshold.toLocaleString()}</div>
          <div className="text-[10px] text-zinc-600 mt-1">unchanged since 2021</div>
        </div>
        <div className="bg-zinc-900 border border-zinc-700 p-4 text-center">
          <div className="text-xs text-zinc-500 mb-1">SHOULD BE (WITH INFLATION)</div>
          <div className="text-2xl font-mono text-acid-green">£{inflationAdjustedThreshold.toLocaleString()}</div>
          <div className="text-[10px] text-zinc-600 mt-1">if indexed to CPI</div>
        </div>
      </div>
      
      <div className="bg-blood-red/10 border border-blood-red p-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-zinc-400">People dragged into higher bands:</span>
          <span className="text-xl font-mono text-blood-red font-bold">+{(currentData.draggedIn / 1000000).toFixed(1)}m</span>
        </div>
        <div className="w-full bg-zinc-800 h-3 mt-2 relative overflow-hidden">
          <div 
            className="h-full bg-blood-red transition-all duration-500"
            style={{ width: `${(currentData.draggedIn / 6000000) * 100}%` }}
          />
        </div>
        <p className="text-xs text-zinc-500 mt-2 text-center">
          Every year the threshold stays frozen, ~600k more workers pay higher rates than intended
        </p>
      </div>
    </div>
  );
};

// The r > g Visualizer
export const RvsGVisualizer = () => {
  const [years, setYears] = useState(10);
  
  const wageGrowth = 2.5; // Average wage growth %
  const assetGrowth = 7; // Average asset return %
  
  const wageValue = Math.round(100 * Math.pow(1 + wageGrowth/100, years));
  const assetValue = Math.round(100 * Math.pow(1 + assetGrowth/100, years));

  return (
    <div className="bg-zinc-950 border-2 border-white p-6 space-y-6">
      <div className="flex items-center gap-3">
        <TrendingUp className="text-acid-green" />
        <h4 className="font-display font-bold text-lg text-white uppercase">r {'>'} g: The Inequality Engine</h4>
      </div>
      
      <p className="text-sm text-zinc-400 font-receipt">
        £100 invested in <span className="text-blood-red">wages</span> vs <span className="text-acid-green">assets</span> over time:
      </p>
      
      <div>
        <label className="text-xs font-mono text-zinc-400 block mb-2">YEARS: {years}</label>
        <input 
          type="range" 
          min="1" 
          max="30" 
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
          className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="text-center">
          <div className="text-xs text-zinc-500 mb-2 flex items-center justify-center gap-2">
            <Users size={14} /> WAGE INCOME (g)
          </div>
          <div className="text-4xl font-mono text-blood-red font-bold">£{wageValue}</div>
          <div className="text-xs text-zinc-600 mt-1">@ {wageGrowth}%/year</div>
          <div className="mt-2 text-sm text-blood-red">
            +£{wageValue - 100} gain
          </div>
        </div>
        <div className="text-center">
          <div className="text-xs text-zinc-500 mb-2 flex items-center justify-center gap-2">
            <Home size={14} /> ASSET WEALTH (r)
          </div>
          <div className="text-4xl font-mono text-acid-green font-bold">£{assetValue}</div>
          <div className="text-xs text-zinc-600 mt-1">@ {assetGrowth}%/year</div>
          <div className="mt-2 text-sm text-acid-green">
            +£{assetValue - 100} gain
          </div>
        </div>
      </div>
      
      <div className="bg-zinc-900 border border-zinc-700 p-4 text-center">
        <div className="text-xs text-zinc-500 mb-1">WEALTH GAP AFTER {years} YEARS</div>
        <div className="text-3xl font-mono text-white font-bold">
          £{assetValue - wageValue}
        </div>
        <p className="text-xs text-zinc-500 mt-2">
          The asset owner is <span className="text-acid-green font-bold">{Math.round((assetValue/wageValue - 1) * 100)}%</span> richer 
          without lifting a finger
        </p>
      </div>
      
      {years >= 20 && (
        <div className="bg-acid-green/10 border border-acid-green p-3 text-center animate-pulse">
          <p className="text-sm text-acid-green font-receipt">
            🎯 This is why dynastic wealth accumulates. <br/>
            <span className="text-white">Work can never catch up.</span>
          </p>
        </div>
      )}
    </div>
  );
};

// Main export combining all charts
export default function InteractiveCharts() {
  return (
    <div className="space-y-16">
      <div className="text-center border-b border-zinc-800 pb-8">
        <div className="inline-block px-3 py-1 bg-acid-green text-black font-display font-bold text-xs mb-4">
          INTERACTIVE
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4">
          PLAY WITH THE <span className="text-blood-red">NUMBERS</span>
        </h2>
        <p className="font-display text-zinc-400 max-w-2xl mx-auto">
          Don't trust our analysis? Calculate your own marginal tax rate. Watch fiscal drag eat your wages. 
          See how <span className="text-acid-green">r {'>'} g</span> compounds over time.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <EMTRCalculator />
        <WhoPaysWhatChart />
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <FiscalDragTimeline />
        <RvsGVisualizer />
      </div>
    </div>
  );
}
