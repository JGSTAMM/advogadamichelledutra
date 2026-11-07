"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function ModeSwitcher() {
  const pathname = usePathname();
  const isBio = pathname?.startsWith("/bio");

  return (
    <div
      role="navigation"
      aria-label="Alternar modo de visualização"
      className={`fixed left-1/2 -translate-x-1/2 z-50 w-max max-w-[94vw] transition-all duration-300 ${
        isBio ? "bottom-4" : "bottom-[78px] md:bottom-5"
      }`}
    >
      <div className="p-1.5 rounded-full glass-dark border border-[#C5A059]/55 shadow-2xl shadow-black/50 flex items-center gap-1">
        <Link
          href="/"
          className={`min-h-[38px] px-3.5 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide flex items-center gap-1.5 transition-all ${
            !isBio
              ? "bg-gradient-to-r from-[#582126] to-[#722D33] text-[#FAF6F2] border border-[#C5A059]/65 shadow-sm"
              : "text-[#F3ECE4]/75 hover:text-white hover:bg-white/5 border border-transparent"
          }`}
          aria-current={!isBio ? "page" : undefined}
        >
          <span aria-hidden="true">🌐</span>
          <span>Ver Site Completo</span>
        </Link>

        <Link
          href="/bio"
          className={`min-h-[38px] px-3.5 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide flex items-center gap-1.5 transition-all ${
            isBio
              ? "bg-gradient-to-r from-[#582126] to-[#722D33] text-[#FAF6F2] border border-[#C5A059]/65 shadow-sm"
              : "text-[#F3ECE4]/75 hover:text-white hover:bg-white/5 border border-transparent"
          }`}
          aria-current={isBio ? "page" : undefined}
        >
          <span aria-hidden="true">📱</span>
          <span>Ver Hub Bio-Link</span>
        </Link>
      </div>
    </div>
  );
}
