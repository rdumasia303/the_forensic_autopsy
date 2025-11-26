import React, { useState, useEffect, useCallback, useRef } from 'react';
import { X, Bike, Dice1, Gamepad2, MousePointer, Trophy, Skull, AlertTriangle, Home, Coins, TrendingUp, Baby, Briefcase, Zap } from 'lucide-react';

// ============================================
// GAME 1: THE TAPER RATE DELIVEROO SIMULATOR
// ============================================
const DeliverooSimulator = ({ onClose }: { onClose: () => void }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bikePosition, setBikePosition] = useState(50);
  const [grossEarnings, setGrossEarnings] = useState(0);
  const [netIncome, setNetIncome] = useState(0);
  const [energy, setEnergy] = useState(100);
  const [gameOver, setGameOver] = useState(false);
  const [deliveries, setDeliveries] = useState(0);
  const [showTaxman, setShowTaxman] = useState(false);
  const [message, setMessage] = useState('');
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);

  const startGame = () => {
    setIsPlaying(true);
    setGrossEarnings(0);
    setNetIncome(0);
    setEnergy(100);
    setGameOver(false);
    setDeliveries(0);
    setBikePosition(50);
  };

  const doDelivery = useCallback(() => {
    if (gameOver || !isPlaying) return;
    
    const deliveryValue = 10;
    setGrossEarnings(prev => prev + deliveryValue);
    setDeliveries(prev => prev + 1);
    
    // Apply the brutal tax math
    const incomeTax = deliveryValue * 0.20; // 20%
    const ni = deliveryValue * 0.08; // 8%
    const remaining = deliveryValue - incomeTax - ni; // £7.20
    const taperClawback = remaining * 0.55; // 55% of remaining
    const actualNet = remaining - taperClawback; // £3.24
    
    setNetIncome(prev => prev + actualNet);
    setEnergy(prev => Math.max(0, prev - 15));
    setShowTaxman(true);
    setMessage(`Earned £10 → Kept £${actualNet.toFixed(2)}`);
    
    setTimeout(() => {
      setShowTaxman(false);
      setMessage('');
    }, 1500);
    
    // Bike gets heavier
    setBikePosition(prev => Math.max(20, prev - 5));
  }, [gameOver, isPlaying]);

  useEffect(() => {
    if (isPlaying && !gameOver) {
      gameLoopRef.current = setInterval(() => {
        setEnergy(prev => {
          const newEnergy = prev - 2;
          if (newEnergy <= 0) {
            setGameOver(true);
            return 0;
          }
          return newEnergy;
        });
        setBikePosition(prev => Math.max(10, prev - 1));
      }, 500);
    }
    
    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };
  }, [isPlaying, gameOver]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space' && isPlaying && !gameOver) {
        e.preventDefault();
        doDelivery();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [doDelivery, isPlaying, gameOver]);

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-900 border-2 border-acid-green max-w-2xl w-full max-h-[90vh] overflow-auto">
        {/* Header */}
        <div className="bg-acid-green text-black p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bike size={24} />
            <span className="font-display font-bold uppercase">The Taper Rate Deliveroo Simulator</span>
          </div>
          <button onClick={onClose} className="hover:bg-black/20 p-1"><X size={20} /></button>
        </div>

        <div className="p-6 space-y-6">
          {!isPlaying ? (
            <div className="text-center space-y-6">
              <div className="text-4xl md:text-6xl">🚴</div>
              <h3 className="font-display font-bold text-2xl text-white">Welcome to the Gig Economy!</h3>
              <p className="text-zinc-400 font-receipt text-sm max-w-md mx-auto">
                You're a Universal Credit claimant trying to reach the Poverty Line. 
                Pedal hard! But remember: the 55% taper rate means every £1 you earn 
                costs you 55p in lost benefits.
              </p>
              <div className="bg-zinc-950 border border-zinc-700 p-4 text-left font-mono text-xs space-y-1">
                <p><span className="text-acid-green">CONTROLS:</span> Press SPACEBAR to complete a delivery</p>
                <p><span className="text-acid-green">GOAL:</span> Reach the poverty line (spoiler: you can't)</p>
                <p><span className="text-blood-red">WARNING:</span> 55% taper + 20% tax + 8% NI = keep £3.24 per £10</p>
              </div>
              <button 
                onClick={startGame}
                className="px-8 py-4 bg-acid-green text-black font-display font-bold uppercase hover:bg-white transition-colors"
              >
                Start Pedaling
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                <div className="bg-zinc-950 border border-zinc-700 p-3 text-center">
                  <div className="text-xs text-zinc-500">Gross Earned</div>
                  <div className="text-xl font-bold text-white">£{grossEarnings.toFixed(0)}</div>
                </div>
                <div className="bg-zinc-950 border border-blood-red p-3 text-center">
                  <div className="text-xs text-zinc-500">Actually Kept</div>
                  <div className="text-xl font-bold text-blood-red">£{netIncome.toFixed(2)}</div>
                </div>
                <div className="bg-zinc-950 border border-zinc-700 p-3 text-center">
                  <div className="text-xs text-zinc-500">Deliveries</div>
                  <div className="text-xl font-bold text-white">{deliveries}</div>
                </div>
                <div className="bg-zinc-950 border border-orange-500 p-3 text-center">
                  <div className="text-xs text-zinc-500">Energy</div>
                  <div className="text-xl font-bold text-orange-500">{energy}%</div>
                </div>
              </div>

              {/* Game Area */}
              <div className="relative bg-zinc-950 border border-zinc-700 h-48 overflow-hidden">
                {/* Road */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-zinc-800 border-t-4 border-dashed border-yellow-500"></div>
                
                {/* Poverty Line (always off screen) */}
                <div className="absolute right-[-100px] top-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-acid-green flex items-center justify-center">
                  <span className="text-xs font-bold rotate-90 whitespace-nowrap">POVERTY LINE</span>
                </div>

                {/* Bike */}
                <div 
                  className="absolute bottom-16 transition-all duration-300 text-4xl"
                  style={{ left: `${bikePosition}%` }}
                >
                  🚴
                </div>

                {/* Taxman */}
                {showTaxman && (
                  <div className="absolute top-4 right-4 animate-bounce bg-blood-red text-white px-3 py-2 font-mono text-xs">
                    💀 -£6.76 CLAWED BACK
                  </div>
                )}

                {/* Gas meter monster */}
                <div className="absolute bottom-16 left-4 text-3xl animate-pulse">
                  👾
                  <span className="text-[8px] block text-center">COST OF<br/>LIVING</span>
                </div>

                {/* Message */}
                {message && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 px-4 py-2 text-acid-green font-mono text-sm">
                    {message}
                  </div>
                )}
              </div>

              {/* Energy Bar */}
              <div className="space-y-1">
                <div className="text-xs text-zinc-500 font-mono">UNIVERSAL CREDIT STANDARD ALLOWANCE (ENERGY)</div>
                <div className="h-4 bg-zinc-950 border border-zinc-700">
                  <div 
                    className="h-full bg-gradient-to-r from-blood-red via-orange-500 to-acid-green transition-all"
                    style={{ width: `${energy}%` }}
                  ></div>
                </div>
              </div>

              {/* Controls hint & Mobile Button */}
              <div className="space-y-3">
                <div className="text-center text-zinc-500 font-mono text-xs animate-pulse hidden md:block">
                  [ PRESS SPACEBAR TO DELIVER ] [ EARN £10, KEEP £3.24 ]
                </div>
                <button
                  onClick={doDelivery}
                  disabled={gameOver}
                  className="md:hidden w-full px-6 py-4 bg-acid-green text-black font-display font-bold uppercase hover:bg-white transition-colors disabled:opacity-50"
                >
                  🚴 DELIVER (EARN £10, KEEP £3.24)
                </button>
              </div>

              {/* Game Over */}
              {gameOver && (
                <div className="bg-blood-red/20 border border-blood-red p-6 text-center space-y-4">
                  <div className="text-4xl">💀</div>
                  <h4 className="font-display font-bold text-xl text-blood-red">GAME OVER: BURNOUT</h4>
                  <p className="text-zinc-400 font-receipt text-sm">
                    You completed {deliveries} deliveries. You earned £{grossEarnings} gross but only kept £{netIncome.toFixed(2)}.
                  </p>
                  <p className="text-acid-green font-mono text-xs">
                    EFFECTIVE EARNINGS: £{(netIncome / (deliveries || 1)).toFixed(2)} per delivery
                  </p>
                  <div className="pt-4 border-t border-zinc-700">
                    <p className="text-xs text-zinc-500 font-mono">
                      🏆 LEADERBOARD: 1. Asset Owners (didn't play) 2. Dividend Recipients (didn't play) 3. You (tried)
                    </p>
                  </div>
                  <button onClick={startGame} className="px-6 py-2 bg-acid-green text-black font-bold">
                    Try Again (It Won't Help)
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ============================================
// GAME 2: SNAKES AND LADDERS - THE £60K TRAP
// ============================================
const SnakesAndLadders = ({ onClose }: { onClose: () => void }) => {
  const [salary, setSalary] = useState(45000);
  const [position, setPosition] = useState(0);
  const [lastRoll, setLastRoll] = useState(0);
  const [messages, setMessages] = useState<string[]>([]);
  const [emtr, setEmtr] = useState(32);
  const [gameWon, setGameWon] = useState(false);
  const [hasKids, setHasKids] = useState(true);
  const [hasStudentLoan, setHasStudentLoan] = useState(true);

  const calculateEMTR = (sal: number) => {
    let rate = 20 + 8; // Base: Income Tax + NI
    if (sal > 50270) rate += 20; // Higher rate kicks in (additional 20%)
    if (sal > 50000 && sal < 60000 && hasKids) rate += 20; // HICBC
    if (hasStudentLoan && sal > 27295) rate += 9; // Student loan
    return Math.min(rate, 100);
  };

  const rollDice = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    const payRise = roll * 500; // £500-£3000 pay rise
    setLastRoll(roll);
    
    const newSalary = salary + payRise;
    const newMessages: string[] = [`🎲 You rolled a ${roll}! Pay rise: +£${payRise}`];
    
    // Check for snakes
    if (newSalary > 50270 && salary <= 50270) {
      newMessages.push('🐍 SNAKE: You hit the 40% Higher Rate threshold!');
    }
    if (newSalary > 50000 && salary <= 50000 && hasKids) {
      newMessages.push('🐍 SNAKE: High Income Child Benefit Charge activated!');
    }
    if (newSalary > 27295 && salary <= 27295 && hasStudentLoan) {
      newMessages.push('🐍 SNAKE: Student Loan deductions begin!');
    }
    
    setSalary(newSalary);
    setPosition(prev => Math.min(prev + roll, 100));
    setEmtr(calculateEMTR(newSalary));
    setMessages(newMessages);
  };

  const salarySacrifice = () => {
    if (salary > 50000) {
      setSalary(49999);
      setEmtr(calculateEMTR(49999));
      setGameWon(true);
      setMessages(['🪜 LADDER: Salary Sacrifice activated! You went BACKWARDS to escape the trap!']);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 md:p-4">
      <div className="bg-zinc-900 border-2 border-orange-500 max-w-2xl w-full max-h-[95vh] overflow-y-auto">
        <div className="bg-orange-500 text-black p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Dice1 size={24} />
            <span className="font-display font-bold uppercase">Snakes & Ladders: The £60k Trap</span>
          </div>
          <button onClick={onClose} className="hover:bg-black/20 p-1"><X size={20} /></button>
        </div>

        <div className="p-6 space-y-6">
          {/* Player Setup */}
          <div className="bg-zinc-950 border border-zinc-700 p-4 space-y-4">
            <div className="flex items-center gap-4">
              <div className="text-4xl">👔</div>
              <div>
                <h3 className="font-display font-bold text-white">You are "Gary"</h3>
                <p className="text-xs text-zinc-500">A middle manager who just got promoted</p>
              </div>
            </div>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-sm text-zinc-400">
                <input type="checkbox" checked={hasKids} onChange={e => setHasKids(e.target.checked)} className="accent-orange-500" />
                <Baby size={16} /> Two kids
              </label>
              <label className="flex items-center gap-2 text-sm text-zinc-400">
                <input type="checkbox" checked={hasStudentLoan} onChange={e => setHasStudentLoan(e.target.checked)} className="accent-orange-500" />
                📚 Student Loan
              </label>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
            <div className="bg-zinc-950 border border-zinc-700 p-4 text-center">
              <div className="text-xs text-zinc-500">Current Salary</div>
              <div className="text-2xl font-bold text-white">£{salary.toLocaleString()}</div>
            </div>
            <div className="bg-zinc-950 border border-zinc-700 p-4 text-center">
              <div className="text-xs text-zinc-500">Last Roll</div>
              <div className="text-2xl font-bold text-white">{lastRoll || '-'}</div>
            </div>
            <div className={`bg-zinc-950 border p-4 text-center ${emtr > 60 ? 'border-blood-red' : emtr > 40 ? 'border-orange-500' : 'border-acid-green'}`}>
              <div className="text-xs text-zinc-500">Marginal Tax Rate</div>
              <div className={`text-2xl font-bold ${emtr > 60 ? 'text-blood-red' : emtr > 40 ? 'text-orange-500' : 'text-acid-green'}`}>{emtr}%</div>
            </div>
          </div>

          {/* Game Board Visual */}
          <div className="bg-zinc-950 border border-zinc-700 p-4">
            <div className="relative h-8 bg-zinc-800 rounded overflow-hidden">
              {/* Danger zones */}
              <div className="absolute left-[55%] right-[33%] top-0 bottom-0 bg-orange-500/30 border-x border-orange-500" title="£50k-£60k Death Zone"></div>
              
              {/* Position marker */}
              <div 
                className="absolute top-0 bottom-0 w-6 bg-acid-green flex items-center justify-center text-black font-bold transition-all duration-500"
                style={{ left: `${Math.min((salary - 40000) / 300, 100)}%` }}
              >
                👔
              </div>
              
              {/* Threshold markers */}
              <div className="absolute left-[34%] top-0 bottom-0 w-0.5 bg-blood-red" title="£50,270"></div>
              <div className="absolute left-[67%] top-0 bottom-0 w-0.5 bg-acid-green" title="£60,000"></div>
            </div>
            <div className="flex justify-between text-[10px] text-zinc-500 mt-1 font-mono">
              <span>£40k</span>
              <span className="text-blood-red">£50,270 (40%)</span>
              <span className="text-acid-green">£60k (HICBC ends)</span>
              <span>£70k</span>
            </div>
          </div>

          {/* Messages */}
          <div className="bg-zinc-950 border border-zinc-700 p-4 min-h-[80px] font-mono text-sm space-y-1">
            {messages.length === 0 ? (
              <p className="text-zinc-500">Roll the dice to get a pay rise...</p>
            ) : (
              messages.map((msg, i) => (
                <p key={i} className={msg.includes('🐍') ? 'text-blood-red' : msg.includes('🪜') ? 'text-acid-green' : 'text-zinc-300'}>
                  {msg}
                </p>
              ))
            )}
          </div>

          {/* EMTR Warning */}
          {emtr > 60 && (
            <div className="bg-blood-red/20 border border-blood-red p-4 text-center animate-pulse">
              <p className="text-blood-red font-display font-bold text-xl">
                🎉 CONGRATULATIONS! YOU ARE PAYING {emtr}% MARGINAL TAX! 🎉
              </p>
              <p className="text-xs text-zinc-400 mt-2">
                A millionaire pays 45%. A dividend investor pays 39%. You pay {emtr}%.
              </p>
            </div>
          )}

          {/* Win State */}
          {gameWon && (
            <div className="bg-acid-green/20 border border-acid-green p-6 text-center space-y-2">
              <p className="text-acid-green font-display font-bold text-xl">🏆 YOU WIN! (Sort of)</p>
              <p className="text-zinc-300 font-receipt text-sm">
                You are now poorer on paper, but richer in reality.
              </p>
              <p className="text-acid-green font-mono text-xs">BRITAIN IS WORKING! ™</p>
            </div>
          )}

          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <button 
              onClick={rollDice}
              disabled={gameWon}
              className="flex-1 px-6 py-4 bg-orange-500 text-black font-display font-bold uppercase hover:bg-orange-400 transition-colors disabled:opacity-50"
            >
              🎲 Roll for Pay Rise
            </button>
            <button 
              onClick={salarySacrifice}
              disabled={salary <= 50000 || gameWon}
              className="flex-1 px-6 py-4 bg-zinc-700 text-white font-display font-bold uppercase hover:bg-zinc-600 transition-colors disabled:opacity-50"
            >
              🪜 Salary Sacrifice (Go Backwards)
            </button>
          </div>

          <p className="text-center text-xs text-zinc-600 font-mono">
            The only winning move is to earn less. Welcome to fiscal policy.
          </p>
        </div>
      </div>
    </div>
  );
};

// ============================================
// GAME 3: PATHWAYS TO NOWHERE
// ============================================
const PathwaysToNowhere = ({ onClose }: { onClose: () => void }) => {
  const [stage, setStage] = useState<'intro' | 'jobs' | 'coach' | 'sanctioned'>('intro');
  const [timer, setTimer] = useState(10);
  const [bankBalance, setBankBalance] = useState(350);
  const [coachMessages, setCoachMessages] = useState(0);
  const [newsIndex, setNewsIndex] = useState(0);

  const newsItems = [
    "Government moves SEND deficit to central spreadsheet. Problem solved.",
    "OBR forecasts 200,000 will return to work. Source: vibes.",
    "Minister: 'We believe in the dignity of work' (from second home).",
    "Universal Credit sanctions up 40%. Poverty down 0%.",
    "Work Capability Assessment outsourced to AI trained on Ayn Rand.",
  ];

  useEffect(() => {
    if (stage === 'jobs') {
      const interval = setInterval(() => {
        setTimer(prev => {
          if (prev <= 1) {
            setStage('sanctioned');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [stage]);

  useEffect(() => {
    const newsInterval = setInterval(() => {
      setNewsIndex(prev => (prev + 1) % newsItems.length);
    }, 4000);
    return () => clearInterval(newsInterval);
  }, []);

  const talkToCoach = () => {
    setStage('coach');
    const messages = [
      "The OBR forecasts you will find work. Why are you defying the forecast?",
      "Have you tried not having a disability?",
      "Your condition is listed as 'temporary' in our system. Since 2019.",
      "I see you haven't applied to any warehouses today.",
      "The computer says you're fit for work. The computer is never wrong."
    ];
    setCoachMessages(prev => (prev + 1) % messages.length);
  };

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-900 border-2 border-zinc-500 max-w-2xl w-full max-h-[90vh] overflow-auto">
        <div className="bg-zinc-600 text-white p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Briefcase size={24} />
            <span className="font-display font-bold uppercase">Pathways to Nowhere™</span>
          </div>
          <button onClick={onClose} className="hover:bg-black/20 p-1"><X size={20} /></button>
        </div>

        {/* News Ticker */}
        <div className="bg-blood-red text-white py-1 px-4 font-mono text-xs overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            📰 BREAKING: {newsItems[newsIndex]}
          </div>
        </div>

        <div className="p-6 space-y-6">
          {stage === 'intro' && (
            <div className="text-center space-y-6">
              <div className="text-6xl">🏢</div>
              <h3 className="font-display font-bold text-2xl text-white">Welcome to the Job Centre</h3>
              <div className="bg-zinc-950 border border-zinc-700 p-4 text-left font-mono text-sm space-y-2">
                <p className="text-zinc-400">CLAIMANT PROFILE:</p>
                <p className="text-white">• Condition: Severe mobility impairment</p>
                <p className="text-white">• Status: "Fit for Work" (computer says)</p>
                <p className="text-white">• Mission: Find suitable employment</p>
                <p className="text-blood-red">• Warning: Sanction timer active</p>
              </div>
              <button 
                onClick={() => setStage('jobs')}
                className="px-8 py-4 bg-zinc-600 text-white font-display font-bold uppercase hover:bg-zinc-500"
              >
                Enter the System
              </button>
            </div>
          )}

          {stage === 'jobs' && (
            <div className="space-y-6">
              {/* Timer */}
              <div className="flex justify-between items-center bg-blood-red/20 border border-blood-red p-3">
                <span className="text-blood-red font-mono text-sm">⚠️ SANCTION TIMER</span>
                <span className="text-blood-red font-bold text-2xl">{timer}s</span>
              </div>

              {/* Bank Balance */}
              <div className="bg-zinc-950 border border-zinc-700 p-3 flex justify-between items-center">
                <span className="text-zinc-500 font-mono text-sm">Bank Balance:</span>
                <span className="text-white font-bold">£{bankBalance.toFixed(2)}</span>
              </div>

              {/* Job Listings */}
              <div className="space-y-4">
                <h4 className="font-display font-bold text-white">Available Positions:</h4>
                
                <div className="bg-zinc-950 border border-zinc-700 p-4 opacity-50 cursor-not-allowed">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-bold text-white">Warehouse Picker</h5>
                      <p className="text-xs text-zinc-500">Amazon Fulfilment Centre</p>
                    </div>
                    <span className="text-xs bg-blood-red/20 text-blood-red px-2 py-1">UNSUITABLE</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-2">Requirement: Must lift 25kg boxes repeatedly</p>
                  <p className="text-xs text-blood-red">❌ Your condition prevents this</p>
                </div>

                <div className="bg-zinc-950 border border-zinc-700 p-4 opacity-50 cursor-not-allowed">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-bold text-white">Delivery Driver</h5>
                      <p className="text-xs text-zinc-500">Deliveroo / UberEats</p>
                    </div>
                    <span className="text-xs bg-blood-red/20 text-blood-red px-2 py-1">UNSUITABLE</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-2">Requirement: Valid driving licence, own vehicle</p>
                  <p className="text-xs text-blood-red">❌ Your medication prevents driving</p>
                </div>

                <div className="bg-zinc-950 border border-zinc-700 p-4 opacity-50 cursor-not-allowed">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-bold text-white">Data Entry (Remote)</h5>
                      <p className="text-xs text-zinc-500">Work From Home</p>
                    </div>
                    <span className="text-xs bg-orange-500/20 text-orange-500 px-2 py-1">POSSIBLE</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-2">Status: 40,000 applicants</p>
                  <p className="text-xs text-orange-500">⏳ Application queue: 8 months</p>
                </div>
              </div>

              <button 
                onClick={talkToCoach}
                className="w-full px-6 py-3 bg-zinc-700 text-white font-display font-bold uppercase hover:bg-zinc-600"
              >
                🤖 Speak to Work Coach
              </button>
            </div>
          )}

          {stage === 'coach' && (
            <div className="space-y-6">
              <div className="bg-zinc-950 border border-zinc-700 p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">🤖</div>
                  <div>
                    <h4 className="font-bold text-white">WORK COACH AI v2.3</h4>
                    <p className="text-xs text-zinc-500">Powered by OBR Forecasts</p>
                  </div>
                </div>
                <div className="bg-zinc-900 border border-zinc-600 p-4">
                  <p className="text-zinc-300 font-mono text-sm">
                    {[
                      "The OBR forecasts you will find work. Why are you defying the forecast?",
                      "Have you tried not having a disability?",
                      "Your condition is listed as 'temporary' in our system. Since 2019.",
                      "I see you haven't applied to any warehouses today.",
                      "The computer says you're fit for work. The computer is never wrong."
                    ][coachMessages]}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <button onClick={talkToCoach} className="flex-1 px-4 py-2 bg-zinc-700 text-white font-mono text-sm">
                  "But I can't physically—"
                </button>
                <button onClick={talkToCoach} className="flex-1 px-4 py-2 bg-zinc-700 text-white font-mono text-sm">
                  "The jobs aren't suitable"
                </button>
              </div>
              <p className="text-center text-xs text-zinc-600">Your inputs are being ignored.</p>
              <button 
                onClick={() => setStage('jobs')}
                className="w-full px-6 py-3 bg-blood-red text-white font-display font-bold uppercase"
              >
                Return to Job Search ({timer}s remaining)
              </button>
            </div>
          )}

          {stage === 'sanctioned' && (
            <div className="text-center space-y-6">
              <div className="text-6xl animate-pulse">🚨</div>
              <h3 className="font-display font-bold text-2xl text-blood-red">SANCTIONED</h3>
              <div className="bg-blood-red/20 border border-blood-red p-4">
                <p className="text-zinc-300 font-receipt">
                  You failed to apply for a suitable job within the time limit.
                </p>
                <p className="text-blood-red font-bold text-xl mt-4">Bank Balance: £0.00</p>
              </div>
              <div className="bg-zinc-950 border border-zinc-700 p-4 text-left font-mono text-xs space-y-1">
                <p className="text-zinc-500">SYSTEM LOG:</p>
                <p className="text-zinc-400">• Claimant refused to apply for warehouse role</p>
                <p className="text-zinc-400">• Claimant "claimed" medical exemption</p>
                <p className="text-zinc-400">• Sanction applied per DWP guidelines</p>
                <p className="text-acid-green">• OBR forecast remains unchanged ✓</p>
              </div>
              <button 
                onClick={() => { setStage('intro'); setTimer(10); setBankBalance(350); }}
                className="px-8 py-4 bg-zinc-600 text-white font-display font-bold uppercase"
              >
                Restart (Nothing Changes)
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ============================================
// GAME 4: THE ASSET IDLE CLICKER
// ============================================
const AssetIdleClicker = ({ onClose }: { onClose: () => void }) => {
  const [houseValue, setHouseValue] = useState(850000);
  const [pension, setPension] = useState(420000);
  const [isa, setIsa] = useState(280000);
  const [time, setTime] = useState(0);
  const [events, setEvents] = useState<string[]>([]);
  const [millennialBurnout, setMillennialBurnout] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 1);
      
      // Assets grow automatically
      setHouseValue(prev => prev * 1.00007); // ~2.6% annual
      setPension(prev => prev * 1.00013); // ~4.8% annual (triple lock)
      setIsa(prev => prev * 1.00015); // ~5.5% annual
      setMillennialBurnout(prev => Math.min(prev + 0.5, 100));
      
      // Random events
      if (Math.random() < 0.02) {
        const eventList = [
          { text: "Budget 2025 Announced", house: 2000, pension: 5000, isa: 3000 },
          { text: "Interest Rate Cut", house: 15000, pension: 8000, isa: 12000 },
          { text: "QE Announced", house: 25000, pension: 15000, isa: 20000 },
          { text: "Housing Crisis Deepens", house: 10000, pension: 0, isa: 0 },
          { text: "Triple Lock Preserved", house: 0, pension: 12000, isa: 0 },
          { text: "Council Tax Up £200", house: -200, pension: 0, isa: 0 },
        ];
        const event = eventList[Math.floor(Math.random() * eventList.length)];
        setEvents(prev => [event.text, ...prev.slice(0, 4)]);
        setHouseValue(prev => prev + event.house);
        setPension(prev => prev + event.pension);
        setIsa(prev => prev + event.isa);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  const totalWealth = houseValue + pension + isa;
  const wealthGain = totalWealth - 1550000;

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-900 border-2 border-acid-green max-w-2xl w-full max-h-[90vh] overflow-auto">
        <div className="bg-acid-green text-black p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MousePointer size={24} />
            <span className="font-display font-bold uppercase">The Asset Idle Clicker</span>
          </div>
          <button onClick={onClose} className="hover:bg-black/20 p-1"><X size={20} /></button>
        </div>

        <div className="p-6 space-y-6">
          {/* The Setup */}
          <div className="bg-zinc-950 border border-zinc-700 p-4 flex items-center gap-4">
            <div className="text-4xl">🧓</div>
            <div>
              <h3 className="font-display font-bold text-white">You are a Boomer Landlord</h3>
              <p className="text-xs text-zinc-500">Location: Conservatory, Surrey</p>
              <p className="text-xs text-acid-green">Action required: None</p>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-acid-green/10 border border-acid-green p-4 text-center">
            <p className="text-acid-green font-mono text-sm">
              🎮 INSTRUCTIONS: Do absolutely nothing. Don't click. Don't move. Just watch.
            </p>
          </div>

          {/* Asset Counters */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-zinc-950 border border-zinc-700 p-4 text-center">
              <Home className="text-zinc-500 mx-auto mb-2" size={24} />
              <div className="text-xs text-zinc-500">House Value</div>
              <div className="text-xl font-bold text-white font-mono">£{Math.floor(houseValue).toLocaleString()}</div>
              <div className="text-[10px] text-acid-green">+2.6%/yr</div>
            </div>
            <div className="bg-zinc-950 border border-zinc-700 p-4 text-center">
              <Coins className="text-zinc-500 mx-auto mb-2" size={24} />
              <div className="text-xs text-zinc-500">State Pension Pot</div>
              <div className="text-xl font-bold text-white font-mono">£{Math.floor(pension).toLocaleString()}</div>
              <div className="text-[10px] text-acid-green">+4.8%/yr (Triple Lock)</div>
            </div>
            <div className="bg-zinc-950 border border-zinc-700 p-4 text-center">
              <TrendingUp className="text-zinc-500 mx-auto mb-2" size={24} />
              <div className="text-xs text-zinc-500">ISA Balance</div>
              <div className="text-xl font-bold text-white font-mono">£{Math.floor(isa).toLocaleString()}</div>
              <div className="text-[10px] text-acid-green">TAX FREE</div>
            </div>
          </div>

          {/* Total Wealth */}
          <div className="bg-zinc-950 border-2 border-acid-green p-6 text-center">
            <div className="text-xs text-zinc-500 mb-2">TOTAL WEALTH (NO EFFORT REQUIRED)</div>
            <div className="text-4xl font-black text-acid-green font-mono">£{Math.floor(totalWealth).toLocaleString()}</div>
            <div className="text-sm text-white mt-2">
              Gained: <span className="text-acid-green">+£{Math.floor(wealthGain).toLocaleString()}</span> while doing nothing
            </div>
          </div>

          {/* Event Log */}
          <div className="bg-zinc-950 border border-zinc-700 p-4">
            <div className="text-xs text-zinc-500 mb-2">EVENT LOG</div>
            <div className="space-y-1 font-mono text-xs">
              {events.length === 0 ? (
                <p className="text-zinc-600">Waiting for events... (your wealth grows regardless)</p>
              ) : (
                events.map((event, i) => (
                  <p key={i} className={i === 0 ? 'text-acid-green' : 'text-zinc-500'}>
                    {i === 0 ? '→' : '  '} {event}
                  </p>
                ))
              )}
            </div>
          </div>

          {/* The Millennial */}
          <div className="bg-blood-red/10 border border-blood-red p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-zinc-500">MILLENNIAL BURNOUT METER</span>
              <span className="text-xs text-blood-red">{millennialBurnout.toFixed(0)}%</span>
            </div>
            <div className="h-2 bg-zinc-800 rounded overflow-hidden">
              <div 
                className="h-full bg-blood-red transition-all"
                style={{ width: `${millennialBurnout}%` }}
              ></div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xl">{millennialBurnout > 80 ? '🔥' : millennialBurnout > 50 ? '😰' : '😓'}</span>
              <span className="text-xs text-zinc-500">
                (Working 3 jobs to pay your rent. Their wealth: £{Math.floor(millennialBurnout * 50).toLocaleString()})
              </span>
            </div>
          </div>

          {/* Win State */}
          {wealthGain > 50000 && (
            <div className="bg-acid-green/20 border border-acid-green p-6 text-center space-y-2">
              <Trophy className="text-acid-green mx-auto" size={40} />
              <p className="text-acid-green font-display font-bold text-xl">🏆 MEDAL UNLOCKED 🏆</p>
              <p className="text-white font-mono text-sm">"Ideal Fiscal Sustainability Achieved"</p>
              <p className="text-xs text-zinc-500">
                You gained £{Math.floor(wealthGain).toLocaleString()} by existing. The system works! (for you)
              </p>
            </div>
          )}

          {/* Time Counter */}
          <div className="text-center text-zinc-600 font-mono text-xs">
            Time elapsed: {Math.floor(time / 10)}s | Clicks required: 0 | Effort: None
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// MAIN EXPORT: Game Launcher
// ============================================
export const useEasterEggs = () => {
  const [activeGame, setActiveGame] = useState<string | null>(null);
  
  const openGame = (game: string) => setActiveGame(game);
  const closeGame = () => setActiveGame(null);
  
  return { activeGame, openGame, closeGame };
};

export const GameLauncher = ({ activeGame, onClose }: { activeGame: string | null, onClose: () => void }) => {
  if (!activeGame) return null;
  
  switch (activeGame) {
    case 'deliveroo': return <DeliverooSimulator onClose={onClose} />;
    case 'snakes': return <SnakesAndLadders onClose={onClose} />;
    case 'pathways': return <PathwaysToNowhere onClose={onClose} />;
    case 'idle': return <AssetIdleClicker onClose={onClose} />;
    default: return null;
  }
};

export default function EasterEggGames() {
  const [activeGame, setActiveGame] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div className="text-center border-b border-zinc-800 pb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-acid-green text-black font-display font-bold text-xs mb-4 transform rotate-1 animate-pulse">
          <Gamepad2 size={16} />
          <span>SECRET ARCADE UNLOCKED</span>
          <Gamepad2 size={16} />
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-4">
          THE <span className="text-acid-green">FISCAL</span> ARCADE
        </h2>
        <p className="text-zinc-400 font-mono text-sm">
          Four games. Zero winners. 100% accurate to OBR data.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Game 1 */}
        <button 
          onClick={() => setActiveGame('deliveroo')}
          className="bg-zinc-950 border border-acid-green p-6 text-left hover:bg-acid-green/10 transition-colors group"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-acid-green/20 border border-acid-green group-hover:animate-bounce">
              <Bike className="text-acid-green" size={24} />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-lg">Taper Rate Deliveroo Simulator</h3>
              <p className="text-xs text-zinc-500 font-mono">GENRE: 8-BIT ENDLESS RUNNER</p>
            </div>
          </div>
          <p className="text-sm text-zinc-400 font-receipt">
            Pedal hard! Earn £10, keep £3.24. The 55% taper rate makes your bike heavier with every delivery.
          </p>
          <p className="text-xs text-acid-green font-mono mt-4">[ CLICK TO PLAY ]</p>
        </button>

        {/* Game 2 */}
        <button 
          onClick={() => setActiveGame('snakes')}
          className="bg-zinc-950 border border-orange-500 p-6 text-left hover:bg-orange-500/10 transition-colors group"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-orange-500/20 border border-orange-500 group-hover:animate-bounce">
              <Dice1 className="text-orange-500" size={24} />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-lg">Snakes & Ladders: The £60k Trap</h3>
              <p className="text-xs text-zinc-500 font-mono">GENRE: RIGGED BOARD GAME</p>
            </div>
          </div>
          <p className="text-sm text-zinc-400 font-receipt">
            You're Gary, a middle manager with 2 kids. Roll for a pay rise and watch your marginal rate hit 71%.
          </p>
          <p className="text-xs text-orange-500 font-mono mt-4">[ CLICK TO PLAY ]</p>
        </button>

        {/* Game 3 */}
        <button 
          onClick={() => setActiveGame('pathways')}
          className="bg-zinc-950 border border-zinc-500 p-6 text-left hover:bg-zinc-500/10 transition-colors group"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-zinc-500/20 border border-zinc-500 group-hover:animate-bounce">
              <Briefcase className="text-zinc-400" size={24} />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-lg">Pathways to Nowhere™</h3>
              <p className="text-xs text-zinc-500 font-mono">GENRE: DYSTOPIAN JOB SIMULATOR</p>
            </div>
          </div>
          <p className="text-sm text-zinc-400 font-receipt">
            You're disabled. The OBR says you'll find work. The Work Coach ignores you. The timer is ticking.
          </p>
          <p className="text-xs text-zinc-400 font-mono mt-4">[ CLICK TO PLAY ]</p>
        </button>

        {/* Game 4 */}
        <button 
          onClick={() => setActiveGame('idle')}
          className="bg-zinc-950 border border-acid-green p-6 text-left hover:bg-acid-green/10 transition-colors group"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-acid-green/20 border border-acid-green group-hover:animate-bounce">
              <MousePointer className="text-acid-green" size={24} />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-lg">The Asset Idle Clicker</h3>
              <p className="text-xs text-zinc-500 font-mono">GENRE: IDLE GAME (THE WINNING MOVE)</p>
            </div>
          </div>
          <p className="text-sm text-zinc-400 font-receipt">
            You're a boomer in Surrey. Do nothing. Watch your assets grow. The millennial burns out paying your rent.
          </p>
          <p className="text-xs text-acid-green font-mono mt-4">[ CLICK TO PLAY ]</p>
        </button>

      </div>

      {/* Game Modals */}
      {activeGame === 'deliveroo' && <DeliverooSimulator onClose={() => setActiveGame(null)} />}
      {activeGame === 'snakes' && <SnakesAndLadders onClose={() => setActiveGame(null)} />}
      {activeGame === 'pathways' && <PathwaysToNowhere onClose={() => setActiveGame(null)} />}
      {activeGame === 'idle' && <AssetIdleClicker onClose={() => setActiveGame(null)} />}
    </div>
  );
}
