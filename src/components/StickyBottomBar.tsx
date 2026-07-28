import React from 'react';
import { Sparkles, Phone, ArrowRight, Zap, Calculator } from 'lucide-react';

interface StickyBottomBarProps {
  onOpenApplication: () => void;
  onOpenCalculator: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({
  onOpenApplication,
  onOpenCalculator
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-[#0a0b0d]/95 backdrop-blur-xl border-t border-[#c5a47e]/20 py-3 px-4 shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Info & Seat Badge & Pricing summary */}
        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#1e1a12] via-[#2a2318] to-[#1e1a12] border border-[#c5a47e]/40 shadow-[0_0_12px_rgba(197,164,126,0.25)]">
            <span className="relative flex h-2.5 w-2.5 items-center justify-center shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5a47e] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c5a47e]"></span>
            </span>
            <span className="text-[#c5a47e] font-extrabold shrink-0">
              선착순 마감임박
            </span>
          </div>

          <span className="hidden sm:inline-block text-gray-300 font-semibold">
            <strong className="inline-flex items-center gap-1.5 text-[#f7e7ce] font-extrabold bg-gradient-to-r from-[#ffe8c6] via-[#c5a47e] to-[#ffe8c6] bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_10px_rgba(197,164,126,0.8)]">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-bounce shrink-0" />
              국취제 연계시 매월 최대 80만원씩 지원
            </strong>
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">


          <a
            href="tel:1800-5027"
            className="p-2 sm:px-3 sm:py-2 rounded-xl bg-[#151720] text-gray-300 hover:text-white border border-white/10 text-xs font-semibold flex items-center gap-1"
          >
            <Phone className="w-3.5 h-3.5 text-[#c5a47e]" />
            <span className="hidden sm:inline">1800-5027</span>
          </a>

          <button
            onClick={onOpenApplication}
            className="px-5 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold text-xs sm:text-sm tracking-wide shadow-lg shadow-yellow-500/40 flex items-center gap-1.5 active:scale-95 transition-all whitespace-nowrap animate-pulse hover:animate-none shadow-[0_0_20px_rgba(250,204,21,0.6)]"
          >
            <span>지금 바로 교육문의</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
