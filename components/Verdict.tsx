import React from 'react';
import { ScrollText, ExternalLink } from 'lucide-react';

export default function Verdict() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-zinc-50 text-zinc-900 p-8 md:p-16 shadow-2xl relative overflow-hidden">
        {/* Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <ScrollText size={400} />
        </div>

        <div className="border-4 border-double border-zinc-900 p-8 relative z-10">
          
          <div className="text-center border-b-2 border-zinc-900 pb-8 mb-8">
            <h2 className="font-serif text-4xl md:text-6xl font-black tracking-tighter mb-2 uppercase">
              Certificate of Death
            </h2>
            <p className="font-receipt text-sm uppercase tracking-widest text-zinc-600">
              Registry of Broken Promises // 26 November 2025
            </p>
          </div>

          <div className="space-y-8 font-receipt">
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <span className="block text-xs font-bold uppercase mb-1 text-zinc-500">Deceased</span>
                <div className="border-b border-zinc-400 pb-1 text-xl font-bold">THE UK MIDDLE CLASS</div>
              </div>
              <div>
                <span className="block text-xs font-bold uppercase mb-1 text-zinc-500">Time of Death</span>
                <div className="border-b border-zinc-400 pb-1 text-xl">14:30 GMT, Budget Day</div>
              </div>
            </div>

            <div>
              <span className="block text-xs font-bold uppercase mb-1 text-zinc-500">Cause of Death (Primary)</span>
              <div className="border-b border-zinc-400 pb-2 text-lg">
                <span className="font-bold text-red-700">Cowardice on Capital.</span> Cross-party refusal to tax wealth (Land, Investment Property, Shares, Inheritance) at rates comparable to work. £67 billion extracted via fiscal drag on wages. £0 from a Land Value Tax. £0 from equalising CGT with income tax on second homes and shares.
              </div>
            </div>

            <div>
              <span className="block text-xs font-bold uppercase mb-1 text-zinc-500">Cause of Death (Secondary)</span>
              <div className="border-b border-zinc-400 pb-2 text-lg">
                <span className="font-bold text-red-700">Structural Cruelty.</span> The poor are not "helped" — they are trapped in a 68% marginal rate prison. The middle are squeezed at 62%. The wealthy pay 24% on share sales, 24% on second homes, 20% on dividends—while workers pay 45%+. This is policy, not accident.
              </div>
            </div>

            <div className="bg-zinc-100 p-6 border border-zinc-300 mt-8">
              <span className="block text-xs font-bold uppercase mb-4 text-zinc-500 text-center">Coroner's Verdict</span>
              <p className="text-center font-serif text-xl italic leading-relaxed text-zinc-800">
                "Death by a thousand threshold freezes. The victim was told they were being protected while being bled dry. No party offered an alternative. All were complicit."
              </p>
            </div>

            <div className="grid grid-cols-4 gap-4 text-center pt-8 border-t border-zinc-300">
              <div>
                <div className="text-xs uppercase text-zinc-500">Tax Burden</div>
                <div className="font-bold text-2xl text-red-700">38.3%</div>
                <div className="text-[10px] text-zinc-400">Highest since 1948</div>
              </div>
              <div>
                <div className="text-xs uppercase text-zinc-500">Fiscal Drag</div>
                <div className="font-bold text-2xl text-red-700">£67bn</div>
                <div className="text-[10px] text-zinc-400">Stolen via frozen thresholds</div>
              </div>
              <div>
                <div className="text-xs uppercase text-zinc-500">Wealth Tax</div>
                <div className="font-bold text-2xl text-green-700">£0</div>
                <div className="text-[10px] text-zinc-400">Capital remains sacred</div>
              </div>
              <div>
                <div className="text-xs uppercase text-zinc-500">Political Courage</div>
                <div className="font-bold text-2xl">404</div>
                <div className="text-[10px] text-zinc-400">Not found</div>
              </div>
            </div>

          </div>

          <div className="mt-12 flex justify-between items-end">
            <div className="text-xs text-zinc-500 font-mono">
              REF: OBR EFO NOV-2025
            </div>
            <div className="text-center">
              <div className="font-handwriting text-3xl mb-2 transform -rotate-6 text-blue-900">Office for Budget Responsibility</div>
              <div className="border-t border-zinc-900 w-48 pt-1 text-xs uppercase">Signed Under Duress</div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Call to Action */}
      <div className="mt-8 bg-zinc-900 border-2 border-acid-green p-6 md:p-8 text-center space-y-4">
        <h3 className="font-display font-bold text-xl text-white uppercase">What Now?</h3>
        <p className="text-zinc-400 font-receipt text-sm max-w-2xl mx-auto">
          This site won't change the Budget. But it might change how you vote. 
          Ask your MP one question: <span className="text-acid-green font-bold">"Why is my work taxed at 62% and their share sales at 24%?"</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a 
            href="https://www.writetothem.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-acid-green text-black font-display font-bold text-sm hover:bg-acid-green/80 transition-colors"
          >
            WRITE TO YOUR MP <ExternalLink size={16} />
          </a>
          <a 
            href="https://obr.uk/efo/economic-and-fiscal-outlook-november-2025/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 text-white font-display font-bold text-sm hover:bg-zinc-700 transition-colors border border-zinc-600"
          >
            READ THE FULL OBR REPORT <ExternalLink size={16} />
          </a>
        </div>
        <p className="text-xs text-zinc-600 font-mono pt-2">
          Don't trust us. Read the source. Do the maths. Then get angry.
        </p>
      </div>
    </div>
  );
}