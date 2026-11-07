"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function ModeSwitcher() {
  const pathname = usePathname();
  const isBio = pathname?.startsWith("/bio");

  return (
    <div
      role="navigation"
      aria-label="Alternar entre Site Completo e Hub Bio-Link"
      className="w-full bg-[#120F0E] border-b border-[#C5A059]/35 py-1.5 px-3 z-50"
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between gap-2">
        <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-medium text-[#E2C68D]/85">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
          Visualização das 2 Páginas Independentes:
        </span>

        <div className="mx-auto sm:mx-0 p-1 rounded-full bg-[#1A1615] border border-[#C5A059]/45 flex items-center gap-1">
          <Link
            href="/"
            className={`min-h-[32px] px-3.5 py-1 rounded-full text-[11px] font-semibold tracking-wide flex items-center gap-1.5 transition-all ${
              !isBio
                ? "bg-[#582126] text-[#FAF6F2] border border-[#C5A059]/60 shadow-xs"
                : "text-[#F3ECE4]/70 hover:text-white border border-transparent"
            }`}
            aria-current={!isBio ? "page" : undefined}
          >
            <span aria-hidden="true">🌐</span>
            <span>Página 1: Site Institucional (/)</span>
          </Link>

          <Link
            href="/bio"
            className={`min-h-[32px] px-3.5 py-1 rounded-full text-[11px] font-semibold tracking-wide flex items-center gap-1.5 transition-all ${
              isBio
                ? "bg-[#582126] text-[#FAF6F2] border border-[#C5A059]/60 shadow-xs"
                : "text-[#F3ECE4]/70 hover:text-white border border-transparent"
            }`}
            aria-current={isBio ? "page" : undefined}
          >
            <span aria-hidden="true">📱</span>
            <span>Página 2: Link da Bio (/bio)</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
