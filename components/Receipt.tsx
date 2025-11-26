import React from 'react';

interface ReceiptItem {
  label: string;
  value: string;
  highlight?: boolean;
}

interface ReceiptProps {
  title: string;
  date: string;
  items: ReceiptItem[];
  totalLabel: string;
  totalValue: string;
  footerMessage?: string;
  barcode?: boolean;
  className?: string;
  stain?: boolean;
}

export default function Receipt({ title, date, items, totalLabel, totalValue, footerMessage, barcode = true, className = "", stain = false }: ReceiptProps) {
  return (
    <div className={`relative w-full max-w-sm mx-auto bg-paper text-ink font-receipt p-6 shadow-2xl transform transition-transform hover:rotate-1 ${className} jagged-bottom jagged-top`}>
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-thermal opacity-10 pointer-events-none"></div>
      {stain && <div className="absolute top-10 right-4 w-16 h-16 bg-yellow-900/10 rounded-full blur-xl pointer-events-none"></div>}
      
      {/* Header */}
      <div className="text-center mb-6 border-b-2 border-dashed border-ink/20 pb-4">
        <div className="w-12 h-12 mx-auto mb-2 border-2 border-ink rounded-full flex items-center justify-center">
          <span className="font-bold text-xl">£</span>
        </div>
        <h3 className="font-bold text-lg uppercase tracking-widest">{title}</h3>
        <p className="text-xs opacity-60 mt-1 uppercase">Official Invoice of Misery</p>
        <p className="text-xs opacity-60 mt-1 font-mono">{date}</p>
      </div>

      {/* Items */}
      <div className="space-y-3 mb-6 text-sm">
        {items.map((item, idx) => (
          <div key={idx} className={`flex justify-between items-start ${item.highlight ? 'font-bold bg-ink/5 py-1 -mx-2 px-2' : ''}`}>
            <span className="uppercase max-w-[70%] leading-tight">{item.label}</span>
            <span className="font-mono">{item.value}</span>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="border-t-2 border-dashed border-ink/20 pt-4 mb-6">
        <div className="flex justify-between items-end">
          <span className="font-bold text-xl uppercase">{totalLabel}</span>
          <span className="font-bold text-2xl font-mono">{totalValue}</span>
        </div>
        <p className="text-[10px] uppercase mt-2 opacity-50 text-center">* Includes non-optional optimism surcharge</p>
      </div>

      {/* Footer */}
      {footerMessage && (
        <div className="text-center text-xs mb-6 font-bold uppercase leading-relaxed">
          {footerMessage}
        </div>
      )}

      {/* Barcode */}
      {barcode && (
        <div className="mt-4">
          <div className="h-12 w-full bg-[url('https://www.transparenttextures.com/patterns/barcode.png')] bg-repeat-x opacity-80"></div>
          <p className="text-center text-[10px] font-mono mt-1 tracking-[0.5em]">404-HOPE-NOT-FOUND</p>
        </div>
      )}
    </div>
  );
}