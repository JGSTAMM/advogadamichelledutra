import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Scale,
  Briefcase,
  Baby,
  Users,
  GraduationCap,
  MessageCircle,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Links Rápidos & Atendimento | Dra. Michelle Dutra • Advogada (OAB/RS 136.947)",
  description:
    "Central oficial de links rápidos e agendamento de consulta da Dra. Michelle Dutra (OAB/RS 136.947). Direito do Trabalho, Direitos da Gestante, Inventários e FIES.",
  alternates: {
    canonical: "/bio",
  },
};

const WHATSAPP_NUMBER = "5551996049104";

function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const BIO_WHATSAPP_LINKS = {
  geral: getWhatsAppUrl(
    "Olá, Dra. Michelle! Vim pelo link da sua bio no Instagram e gostaria de agendar uma consulta jurídica."
  ),
  gestante: getWhatsAppUrl(
    "Olá, Dra. Michelle! Vim pela sua bio do Instagram e preciso de orientação sobre Direitos da Gestante / Estabilidade."
  ),
  trabalhista: getWhatsAppUrl(
    "Olá, Dra. Michelle! Vim pela sua bio do Instagram e gostaria de avaliar minha Rescisão / Horas Extras / Férias / Vínculo."
  ),
  familia: getWhatsAppUrl(
    "Olá, Dra. Michelle! Vim pela sua bio do Instagram e gostaria de informações sobre Inventário / Direito de Família."
  ),
  fies: getWhatsAppUrl(
    "Olá, Dra. Michelle! Vim pela sua bio do Instagram e preciso de assessoria jurídica especializada em FIES."
  ),
};

const HIGHLIGHTS = [
  {
    label: "Trabalhista",
    href: BIO_WHATSAPP_LINKS.trabalhista,
    icon: Briefcase,
  },
  {
    label: "Gestantes",
    href: BIO_WHATSAPP_LINKS.gestante,
    icon: Baby,
  },
  {
    label: "Inventários",
    href: BIO_WHATSAPP_LINKS.familia,
    icon: Users,
  },
  {
    label: "FIES",
    href: BIO_WHATSAPP_LINKS.fies,
    icon: GraduationCap,
  },
  {
    label: "Atendimento",
    href: BIO_WHATSAPP_LINKS.geral,
    icon: MessageCircle,
  },
];

function MonogramCrestBioSVG({ className = "w-9 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 6L56 10V33C56 50.5 44.2 61.5 32 67C19.8 61.5 8 50.5 8 33V6Z"
        stroke="#C5A059"
        strokeWidth="2"
        fill="#1A1615"
      />
      <path
        d="M11.5 9.2L52.5 12.6V32.8C52.5 48.2 42.1 58 32 63.2C21.9 58 11.5 48.2 11.5 32.8V9.2Z"
        stroke="#C5A059"
        strokeOpacity="0.45"
        strokeWidth="0.9"
      />
      <path
        d="M21 18C28 13.5 44 16 45 28.5C46 40 33 44.5 20 42"
        stroke="#E2C68D"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M19 42L21 20L31.5 38.5L41.5 21.5V43"
        stroke="#C5A059"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 46V57M27.5 57H36.5M25 49.2H39"
        stroke="#E2C68D"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M25 49.2L22.8 53.5H27.2L25 49.2ZM39 49.2L36.8 53.5H41.2L39 49.2Z"
        stroke="#C5A059"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BioLinkPage() {
  return (
    <div className="relative min-h-dvh bg-[#1A1615] text-[#FAF6F2] overflow-hidden selection:bg-[#C5A059] selection:text-[#1A1615]">
      {/* Luzes de Ambiência Luxury (Borgonha & Ouro Suave) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 w-[480px] h-[340px] rounded-full bg-[#582126]/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-[#C5A059]/8 blur-3xl"
      />

      <main className="relative z-10 max-w-[440px] mx-auto min-h-screen px-4 pt-7 pb-24 flex flex-col justify-between">
        <div>
          {/* =================================================================
              1. HEADER DO PERFIL (FIEL AO INSTAGRAM + BRASÃO)
              ================================================================= */}
          <header className="flex flex-col items-center text-center mb-6">
            {/* Avatar Circular com Anel Duplo Dourado (#C5A059) e Badge Balança */}
            <div className="relative mb-4">
              <div className="p-1 rounded-full bg-gradient-to-tr from-[#9D7B38] via-[#E2C68D] to-[#C5A059] shadow-xl shadow-black/50">
                <div className="p-1 rounded-full bg-[#1A1615]">
                  <div className="relative w-26 h-26 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-[#C5A059]/60 bg-[#3B3B3B]">
                    <Image
                      src="/images/dra-michelle-dutra.png"
                      alt="Dra. Michelle Dutra | Advogada (OAB/RS 136.947)"
                      fill
                      priority
                      unoptimized
                      sizes="112px"
                      className="object-cover object-[center_14%] scale-[1.18]"
                    />
                  </div>
                </div>
              </div>

              {/* Badge de Verificado / Balança da Justiça */}
              <div
                title="Inscrição Verificada OAB/RS 136.947"
                className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#582126] to-[#3A1F18] border-2 border-[#C5A059] flex items-center justify-center shadow-md"
              >
                <Scale className="w-4 h-4 text-[#E2C68D]" strokeWidth={1.85} />
              </div>
            </div>

            {/* Nome & Credencial */}
            <h1 className="font-serif text-2xl sm:text-[28px] font-semibold text-[#FAF6F2] tracking-wide leading-tight mb-1">
              Dra. Michelle Dutra | Advogada
            </h1>
            <p className="text-xs text-[#E2C68D] font-medium leading-relaxed max-w-[340px] mb-3">
              <strong className="font-semibold text-white">OAB/RS 136.947</strong>{" "}
              • Pós-graduada em Direito do Trabalho e Família/Sucessões.
            </p>

            {/* Badges em Linha */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-3.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6F2]/8 border border-[#C5A059]/40 text-[11px] font-medium text-[#FAF6F2]">
                <span>⭐ 5,0 no Google (17 avaliações)</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#582126]/60 border border-[#C5A059]/35 text-[11px] font-medium text-[#FAF6F2]">
                <span>🇧🇷 Atendimento em todo o Brasil</span>
              </span>
            </div>

            {/* Bio Curta Editorial */}
            <p className="font-serif italic text-base sm:text-lg text-[#DFB4A4] tracking-wide">
              “Advocacia com estratégia, clareza e propósito.”
            </p>
          </header>

          {/* =================================================================
              2. PÍLULAS DE DESTAQUES RÁPIDOS (HIGHLIGHTS DO INSTAGRAM)
              ================================================================= */}
          <section aria-label="Destaques de Atuação" className="mb-6">
            <div className="flex items-center justify-between gap-2 px-1 py-2 overflow-x-auto no-scrollbar">
              {HIGHLIGHTS.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-1.5 shrink-0 min-w-[64px]"
                  >
                    <div className="p-[2px] rounded-full bg-gradient-to-tr from-[#9D7B38] via-[#E2C68D] to-[#C5A059] transition-transform duration-200 group-hover:scale-105 group-active:scale-95">
                      <div className="w-13 h-13 rounded-full bg-[#582126] border-2 border-[#1A1615] flex items-center justify-center text-[#E2C68D] group-hover:bg-[#722D33] transition-colors">
                        <IconComponent className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                    </div>
                    <span className="text-[11px] font-medium text-[#F3ECE4]/90 group-hover:text-[#E2C68D] transition-colors">
                      {item.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </section>

          {/* =================================================================
              3. STACK DE BOTÕES DE ALTA CONVERSÃO (min-h-[56px])
              ================================================================= */}
          <section aria-label="Links Principais" className="space-y-3 mb-7">
            {/* BOTÃO 1: DESTAQUE PRINCIPAL COM SHIMMER DOURADO/VINHO */}
            <a
              href={BIO_WHATSAPP_LINKS.geral}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer group w-full min-h-[68px] p-4 rounded-2xl bg-gradient-to-r from-[#582126] via-[#6B282E] to-[#582126] text-[#FAF6F2] border-2 border-[#C5A059] shadow-lg shadow-[#582126]/30 flex items-center justify-between gap-3"
            >
              <div className="min-w-0 text-left">
                <span className="flex items-center gap-2 text-sm sm:text-[15px] font-bold text-white leading-snug">
                  <span>💬 Agendar Consulta Jurídica Agora</span>
                </span>
                <span className="block text-xs text-[#E2C68D] font-medium mt-0.5">
                  Atendimento on-line imediato via WhatsApp
                </span>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#FAF6F2]/12 border border-[#C5A059]/50 flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-4 h-4 text-[#E2C68D]" strokeWidth={2} />
              </div>
            </a>

            {/* BOTÃO 2: DIREITOS DA GESTANTE */}
            <a
              href={BIO_WHATSAPP_LINKS.gestante}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full min-h-[62px] p-3.5 sm:p-4 rounded-2xl bg-[#FAF6F2] hover:bg-white text-[#1A1615] border border-[#C5A059]/55 shadow-sm flex items-center justify-between gap-3 transition-all hover:-translate-y-0.5 active:scale-[0.99]"
            >
              <div className="min-w-0 text-left">
                <span className="block text-sm font-bold text-[#582126] leading-snug">
                  🤰 Direitos da Gestante & Estabilidade
                </span>
                <span className="block text-[11px] sm:text-xs text-[#3A1F18]/85 mt-0.5">
                  Demissão na gravidez, aviso-prévio e licença-maternidade
                </span>
              </div>
              <ChevronRight
                className="w-5 h-5 text-[#582126] shrink-0 transition-transform group-hover:translate-x-0.5"
                strokeWidth={1.85}
              />
            </a>

            {/* BOTÃO 3: DIREITO DO TRABALHO */}
            <a
              href={BIO_WHATSAPP_LINKS.trabalhista}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full min-h-[62px] p-3.5 sm:p-4 rounded-2xl bg-[#F3ECE4] hover:bg-[#FAF6F2] text-[#1A1615] border border-[#C88A76]/55 shadow-sm flex items-center justify-between gap-3 transition-all hover:-translate-y-0.5 active:scale-[0.99]"
            >
              <div className="min-w-0 text-left">
                <span className="block text-sm font-bold text-[#1A1615] leading-snug">
                  ⚖️ Rescisão, Horas Extras, Férias e Vínculo
                </span>
                <span className="block text-[11px] sm:text-xs text-[#3A1F18]/85 mt-0.5">
                  Conferência de verbas rescisórias e trabalho sem carteira
                </span>
              </div>
              <ChevronRight
                className="w-5 h-5 text-[#582126] shrink-0 transition-transform group-hover:translate-x-0.5"
                strokeWidth={1.85}
              />
            </a>

            {/* BOTÃO 4: FAMÍLIA E SUCESSÕES */}
            <a
              href={BIO_WHATSAPP_LINKS.familia}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full min-h-[62px] p-3.5 sm:p-4 rounded-2xl bg-[#F3ECE4] hover:bg-[#FAF6F2] text-[#1A1615] border border-[#C88A76]/55 shadow-sm flex items-center justify-between gap-3 transition-all hover:-translate-y-0.5 active:scale-[0.99]"
            >
              <div className="min-w-0 text-left">
                <span className="block text-sm font-bold text-[#1A1615] leading-snug">
                  🏛️ Inventários e Direito de Família
                </span>
                <span className="block text-[11px] sm:text-xs text-[#3A1F18]/85 mt-0.5">
                  Inventário judicial, extrajudicial e partilha de bens
                </span>
              </div>
              <ChevronRight
                className="w-5 h-5 text-[#582126] shrink-0 transition-transform group-hover:translate-x-0.5"
                strokeWidth={1.85}
              />
            </a>

            {/* BOTÃO 5: ESPECIALISTA EM FIES */}
            <a
              href={BIO_WHATSAPP_LINKS.fies}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full min-h-[62px] p-3.5 sm:p-4 rounded-2xl bg-[#F3ECE4] hover:bg-[#FAF6F2] text-[#1A1615] border border-[#C88A76]/55 shadow-sm flex items-center justify-between gap-3 transition-all hover:-translate-y-0.5 active:scale-[0.99]"
            >
              <div className="min-w-0 text-left">
                <span className="block text-sm font-bold text-[#1A1615] leading-snug">
                  📋 Assessoria Especializada em FIES
                </span>
                <span className="block text-[11px] sm:text-xs text-[#3A1F18]/85 mt-0.5">
                  Análise de contratos e demandas do Financiamento Estudantil
                </span>
              </div>
              <ChevronRight
                className="w-5 h-5 text-[#582126] shrink-0 transition-transform group-hover:translate-x-0.5"
                strokeWidth={1.85}
              />
            </a>

            {/* BOTÃO 6: NAVEGAÇÃO INTERNA (GUIAS RÁPIDOS & SITE COMPLETO) */}
            <Link
              href="/#guias"
              className="group w-full min-h-[62px] p-3.5 sm:p-4 rounded-2xl bg-[#241E1C] hover:bg-[#2E2522] text-[#FAF6F2] border border-[#C5A059]/45 shadow-sm flex items-center justify-between gap-3 transition-all hover:-translate-y-0.5 active:scale-[0.99]"
            >
              <div className="min-w-0 text-left">
                <span className="block text-sm font-semibold text-[#E2C68D] leading-snug">
                  📖 Ler Guias Rápidos de Direitos (FAQ) & Site Completo
                </span>
                <span className="block text-[11px] sm:text-xs text-[#F3ECE4]/80 mt-0.5">
                  Acesse conteúdos educativos e conheça o escritório
                </span>
              </div>
              <ChevronRight
                className="w-5 h-5 text-[#C5A059] shrink-0 transition-transform group-hover:translate-x-0.5"
                strokeWidth={1.85}
              />
            </Link>
          </section>
        </div>

        {/* ===================================================================
            4. CARD DE LOCALIZAÇÃO & HORÁRIOS + MINI-FOOTER
            =================================================================== */}
        <footer className="space-y-4 pt-2">
          <div className="p-3.5 rounded-2xl bg-[#241E1C]/90 border border-[#C5A059]/30 text-center">
            <p className="text-[11px] sm:text-xs text-[#F3ECE4]/90 leading-relaxed">
              📍 <strong className="text-white">Escritório Físico:</strong> Centro,
              Torres/RS{" "}
              <span className="text-[#C5A059] mx-1" aria-hidden="true">
                |
              </span>{" "}
              🌐 <strong className="text-white">Atendimento Digital:</strong> Todo o
              Brasil
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-1.5 pt-1">
            <MonogramCrestBioSVG className="w-9 h-10" />
            <div className="flex items-center gap-2 text-xs font-medium text-[#E2C68D]">
              <a
                href="https://www.instagram.com/advogadamichelledutra/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline underline-offset-4 transition-colors"
              >
                @advogadamichelledutra
              </a>
              <span className="text-[#C5A059]/50" aria-hidden="true">
                •
              </span>
              <span>OAB/RS 136.947</span>
            </div>
            <p className="text-[11px] font-serif italic text-[#DFB4A4]/80">
              “Informação para o seu dia a dia • Cada caso merece atenção”
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
