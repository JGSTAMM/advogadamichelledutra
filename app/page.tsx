import Image from "next/image";
import {
  Scale,
  Briefcase,
  Baby,
  Users,
  GraduationCap,
  CheckCircle2,
  ArrowUpRight,
  ChevronDown,
  ShieldCheck,
  Sparkles,
  BookOpen,
  Plane,
  Heart,
  Clock,
  MapPin,
  FileCheck2,
  MessageCircle,
  Star,
} from "lucide-react";

const WHATSAPP_NUMBER = "5551996049104";

function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const WHATSAPP_LINKS = {
  geral: getWhatsAppUrl(
    "Olá, Dra. Michelle! Vim pelo seu site/Instagram e gostaria de agendar uma consulta jurídica."
  ),
  rescisao: getWhatsAppUrl(
    "Olá, Dra. Michelle! Vim pelo acesso rápido do seu site e gostaria de avaliar minha rescisão / direitos trabalhistas."
  ),
  gestante: getWhatsAppUrl(
    "Olá, Dra. Michelle! Vim pelo seu site e preciso de orientação sobre Direitos da Gestante / Estabilidade."
  ),
  inventario: getWhatsAppUrl(
    "Olá, Dra. Michelle! Vim pelo seu site e gostaria de informações sobre Inventário / Direito de Família e Sucessões."
  ),
  fies: getWhatsAppUrl(
    "Olá, Dra. Michelle! Vim pelo seu site e preciso de assessoria jurídica relacionada ao FIES."
  ),
};

/* ==========================================================================
   ILUSTRAÇÕES VETORIAIS EXCLUSIVAS (CONTINUOUS LINE ART & BRASÃO MD)
   Fiéis à estética dos carrosséis do Instagram e ao brasão dourado 3D
   ========================================================================== */

function MonogramCrestSVG({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Escudo Clássico */}
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
      {/* Arco Superior do Monograma D */}
      <path
        d="M21 18C28 13.5 44 16 45 28.5C46 40 33 44.5 20 42"
        stroke="#E2C68D"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Monograma M & D Entrelaçados */}
      <path
        d="M19 42L21 20L31.5 38.5L41.5 21.5V43"
        stroke="#C5A059"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Balança da Justiça na Base do Brasão */}
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

function ContinuousLineRescisaoSVG({ className = "w-36 h-28" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Círculo Orgânico Terracota/Rose */}
      <circle cx="156" cy="64" r="44" fill="#DFB4A4" fillOpacity="0.55" />
      {/* Traço Contínuo: Maleta + Documento + Caneta */}
      <path
        d="M6 128C28 128 45 123 64 123L88 94L138 112L112 138L64 123"
        stroke="#8C5847"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Linhas do Documento */}
      <path
        d="M88 103L118 113M83 110L113 120M78 117L104 126"
        stroke="#8C5847"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Caneta */}
      <path
        d="M104 130L129 102C131 100 134 102 132 105L108 132L102 134L104 130Z"
        stroke="#582126"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      {/* Maleta Executiva em Continuous Line */}
      <path
        d="M116 96V64C116 59 120 56 125 56H178C183 56 187 60 187 65V112C187 116 183 119 179 119H134"
        stroke="#8C5847"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M139 56V48C139 44 143 41 148 41H156C161 41 165 44 165 48V56"
        stroke="#8C5847"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M116 74C136 82 167 82 187 74"
        stroke="#8C5847"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <rect
        x="146"
        y="74"
        width="11"
        height="13"
        rx="2"
        stroke="#582126"
        strokeWidth="1.35"
        fill="#FAF6F2"
      />
      <path
        d="M187 112C198 112 206 116 216 115"
        stroke="#8C5847"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ContinuousLineGestanteSVG({ className = "w-32 h-36" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 190"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Círculo Orgânico Terracota fiel ao post "Descobri a gravidez após a demissão" */}
      <circle cx="72" cy="126" r="38" fill="#C88A76" fillOpacity="0.58" />
      {/* Silhueta Gestante em Traço Fino Contínuo */}
      <path
        d="M95 24C84 23 76 31 76 41C76 46 78 51 75 56C73 59 71 60 72 62C73 64 75 64 75 66C75 68 74 70 76 72C79 75 85 74 89 71C92 68 95 74 92 82C88 90 77 96 71 106C62 120 55 137 59 155C62 167 71 176 80 182"
        stroke="#582126"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Coque e Fios Soltos Delicados */}
      <path
        d="M95 24C106 24 114 32 113 42C119 42 124 47 123 54C122 61 115 64 109 62C106 67 99 70 94 68"
        stroke="#8C5847"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      {/* Braço Acariciando a Barriga */}
      <path
        d="M104 82C114 86 118 98 116 114C114 128 106 142 96 149C86 155 74 152 69 146C66 142 70 137 77 139"
        stroke="#582126"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M115 118C117 138 115 160 110 182"
        stroke="#8C5847"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ContinuousLineHorasExtrasSVG({ className = "w-32 h-24" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Círculo Orgânico Terracota fiel ao post "Horas extras: você sabe o que conferir?" */}
      <circle cx="138" cy="58" r="38" fill="#C88A76" fillOpacity="0.52" />
      {/* Relógio Analógico */}
      <circle
        cx="116"
        cy="66"
        r="34"
        stroke="#3A1F18"
        strokeWidth="1.4"
        fill="#FAF6F2"
        fillOpacity="0.65"
      />
      <circle cx="116" cy="66" r="29" stroke="#8C5847" strokeWidth="1" />
      <path
        d="M116 42V46M116 86V90M92 66H96M136 66H140M104 54L116 66L130 52"
        stroke="#582126"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Caderno Espiral + Caneta */}
      <path
        d="M12 114C34 114 52 111 66 111L92 92L130 108L98 130L62 113"
        stroke="#3A1F18"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M88 102L112 112M82 108L106 118"
        stroke="#8C5847"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path
        d="M114 128L142 110C144 109 146 111 144 113L117 131L111 132L114 128Z"
        stroke="#582126"
        strokeWidth="1.3"
      />
    </svg>
  );
}

/* ==========================================================================
   DADOS ESTRUTURADOS DE CONTEÚDO REAL DA CLIENTE
   ========================================================================== */

const QUICK_HUB_LINKS = [
  {
    id: "hub-rescisao",
    category: "DIREITO DO TRABALHO",
    title: "Avaliar Rescisão e Verbas Trabalhistas",
    subtitle: "Prazos de 10 dias • FGTS • Vínculo • Horas Extras",
    href: WHATSAPP_LINKS.rescisao,
    anchor: "#area-trabalho",
    icon: Briefcase,
    highlight: false,
  },
  {
    id: "hub-gestante",
    category: "PROTEÇÃO MATERNIDADE",
    title: "Direitos da Gestante e Estabilidade",
    subtitle: "Demissão na gravidez ou aviso-prévio • Licença",
    href: WHATSAPP_LINKS.gestante,
    anchor: "#area-gestante",
    icon: Baby,
    highlight: true,
  },
  {
    id: "hub-inventario",
    category: "FAMÍLIA E SUCESSÕES",
    title: "Inventários Judiciais e Extrajudiciais",
    subtitle: "Planejamento sucessório • Partilha de bens com empatia",
    href: WHATSAPP_LINKS.inventario,
    anchor: "#area-familia",
    icon: Users,
    highlight: false,
  },
  {
    id: "hub-fies",
    category: "FINANCIAMENTO ESTUDANTIL",
    title: "Assessoria Especializada em FIES",
    subtitle: "Análise contratual e demandas do financiamento",
    href: WHATSAPP_LINKS.fies,
    anchor: "#area-fies",
    icon: GraduationCap,
    highlight: false,
  },
];

const FAQ_ITEMS = [
  {
    id: "faq-rescisao",
    category: "DIREITO DO TRABALHO",
    question: "O contrato terminou. O que preciso conferir na minha rescisão?",
    directAnswer:
      "O valor depende da modalidade (pedido de demissão, dispensa sem justa causa ou acordo). É essencial conferir: motivo do desligamento nos documentos, datas de admissão e saída, parcelas devidas, descontos e depósitos do FGTS. Em regra, o pagamento das verbas rescisórias deve ocorrer em até 10 dias contados do término do contrato.",
    pillars: "Valores • Documentos • Prazos",
    checklist: [
      {
        term: "Motivo do desligamento",
        detail: "Conferir se a modalidade registrada no TRCT reflete a realidade do encerramento.",
      },
      {
        term: "Datas e período contratual",
        detail: "Verificar datas de admissão, aviso-prévio (trabalhado ou indenizado) e baixa.",
      },
      {
        term: "Parcelas, descontos e FGTS",
        detail: "Analisar saldo de salário, férias + 1/3, 13º proporcional, extrato do FGTS e multa rescisória.",
      },
      {
        term: "Prazo legal de pagamento",
        detail: "Até 10 dias corridos contados a partir do término do contrato (Art. 477, § 6º da CLT).",
      },
    ],
    ctaLabel: "Conferir minha rescisão com a Dra. Michelle",
    ctaHref: WHATSAPP_LINKS.rescisao,
  },
  {
    id: "faq-gestante-estabilidade",
    category: "DIREITOS DA GESTANTE",
    question: "Estou grávida. Posso ser demitida? Até quando vai a estabilidade?",
    directAnswer:
      "A gestante possui proteção contra demissão sem justa causa desde a confirmação da gravidez até 5 meses após o parto (contados do nascimento do bebê, e não do retorno ao trabalho). A estabilidade só é afastada em caso de falta grave devidamente comprovada (justa causa).",
    pillars: "Estabilidade • Licença-Maternidade • Convenção Coletiva",
    checklist: [
      {
        term: "Atenção à contagem do prazo",
        detail: "São 5 meses após o nascimento do bebê, e não 5 meses após o retorno da licença-maternidade.",
      },
      {
        term: "Diferença entre os direitos",
        detail: "Licença-maternidade é o período de afastamento; estabilidade é a garantia do emprego contra dispensa arbitrária.",
      },
      {
        term: "Proteção ampliada",
        detail: "A convenção ou acordo coletivo da sua categoria pode prever uma proteção ainda maior.",
      },
    ],
    ctaLabel: "Tirar dúvida sobre estabilidade gestacional",
    ctaHref: WHATSAPP_LINKS.gestante,
  },
  {
    id: "faq-gravidez-apos-demissao",
    category: "DIREITOS DA GESTANTE",
    question: "Descobri a gravidez após a demissão. Perdi o direito à estabilidade?",
    directAnswer:
      "Não necessariamente. O ponto principal é verificar se a concepção já existia durante o contrato de trabalho ou mesmo durante o aviso-prévio (inclusive indenizado). Recomenda-se guardar exames, ultrassons, aviso-prévio e termo de rescisão para análise jurídica.",
    pillars: "Exames • Aviso-Prévio Indenizado • Provas Documentais",
    checklist: [
      {
        term: "Data da concepção vs. Data da descoberta",
        detail: "O desconhecimento da gravidez pelo empregador ou pela própria gestante no ato da dispensa não afasta o direito.",
      },
      {
        term: "Gravidez no aviso-prévio",
        detail: "A proteção legal alcança também a gestação iniciada no curso do aviso-prévio trabalhado ou indenizado.",
      },
      {
        term: "O que separar imediatamente",
        detail: "Exames laboratoriais, primeiro ultrassom com idade gestacional, comunicado de aviso-prévio e TRCT.",
      },
    ],
    ctaLabel: "Analisar datas do meu caso pelo WhatsApp",
    ctaHref: WHATSAPP_LINKS.gestante,
  },
  {
    id: "faq-horas-extras",
    category: "DIREITO DO TRABALHO",
    question: "Horas extras: o que conferir no registro de ponto e contracheque?",
    directAnswer:
      "Verifique se o ponto reflete o horário real trabalhado, se as horas extras constam no contracheque com adicional de, no mínimo, 50% (ou percentual superior previsto em norma coletiva) e se o banco de horas respeita as regras de compensação e prazos legais.",
    pillars: "Jornada • Registro de Ponto • Banco de Horas",
    checklist: [
      {
        term: "Fidelidade do ponto",
        detail: "O cartão de ponto deve corresponder exatamente ao horário real de entrada, intervalo e saída.",
      },
      {
        term: "Adicional mínimo de 50%",
        detail: "Conferir no holerite o pagamento com adicional mínimo de 50% (ou superior na convenção coletiva) e seus reflexos.",
      },
      {
        term: "Validade do banco de horas",
        detail: "Verificar se o empregado consegue acompanhar o saldo e se os prazos legais de compensação são respeitados.",
      },
    ],
    ctaLabel: "Avaliar jornada e horas extras",
    ctaHref: WHATSAPP_LINKS.rescisao,
  },
  {
    id: "faq-ferias",
    category: "DIREITO DO TRABALHO",
    question: "Quais são as regras de prazo, pagamento e divisão das férias?",
    directAnswer:
      "Após 12 meses de trabalho (período aquisitivo), o empregado tem direito a até 30 dias de férias nos 12 meses seguintes, com pagamento realizado até 2 dias antes do início acrescido de 1/3 constitucional. Podem ser divididas em até 3 períodos (sendo um de no mínimo 14 dias corridos e os demais de no mínimo 5 dias cada).",
    pillars: "Prazo • Pagamento + 1/3 • Fracionamento",
    checklist: [
      {
        term: "Período aquisitivo e concessivo",
        detail: "Adquiridas após 12 meses de contrato e concedidas dentro dos 12 meses subsequentes.",
      },
      {
        term: "Antecedência do pagamento",
        detail: "A remuneração das férias + 1/3 constitucional deve ser paga até 2 dias antes do início do descanso.",
      },
      {
        term: "Regra de divisão em até 3 períodos",
        detail: "Havendo concordância do empregado, um período não pode ser inferior a 14 dias corridos e os demais não podem ser inferiores a 5 dias corridos cada.",
      },
    ],
    ctaLabel: "Consultar irregularidades nas férias",
    ctaHref: WHATSAPP_LINKS.rescisao,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-dvh flex flex-col bg-[#FAF6F2] text-[#3A1F18] pb-24 md:pb-0">
      {/* =====================================================================
          A. TOP BAR & NAVBAR FLUTUANTE (GLASSMORPHISM)
          ===================================================================== */}
      <div className="bg-[#1A1615] text-[#FAF6F2] border-b border-[#C5A059]/25">
        <div className="mx-auto max-w-6xl px-4 py-2 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 font-medium tracking-wide">
            <span aria-hidden="true" className="text-sm">
              🇧🇷
            </span>
            <span>Atendimento On-line em todo o Brasil</span>
            <span className="hidden sm:inline text-[#C5A059]">•</span>
            <span className="hidden sm:inline text-[#DFB4A4]">
              Sede em Torres/RS
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] sm:text-xs text-[#E2C68D]">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              OAB/RS 136.947
            </span>
            <span aria-hidden="true" className="text-[#C5A059]/50">
              |
            </span>
            <a
              href="https://www.instagram.com/advogadamichelledutra/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              @advogadamichelledutra
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 glass-nav border-b border-[#C88A76]/30 transition-all">
        <div className="mx-auto max-w-6xl px-4 h-18 flex items-center justify-between gap-3">
          {/* Brand Monogram + Name */}
          <a
            href="#topo"
            className="group flex items-center gap-3 min-h-[48px] py-1 focus:outline-none"
            aria-label="Dra. Michelle Dutra — Advogada OAB/RS 136.947 — Início"
          >
            <MonogramCrestSVG className="w-10 h-11 shrink-0 transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-semibold tracking-wide text-[#1A1615] leading-tight">
                Dra. Michelle Dutra
              </span>
              <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#582126]">
                Advogada • OAB/RS 136.947
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Navegação Principal"
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#3A1F18]/90"
          >
            <a
              href="#areas-de-atuacao"
              className="hover:text-[#582126] transition-colors py-2"
            >
              Áreas de Atuação
            </a>
            <a
              href="#sobre"
              className="hover:text-[#582126] transition-colors py-2"
            >
              Sobre a Dra. Michelle
            </a>
            <a
              href="#hub-direitos"
              className="hover:text-[#582126] transition-colors py-2"
            >
              Guias de Direitos & FAQ
            </a>
          </nav>

          {/* Quick WhatsApp CTA */}
          <a
            href={WHATSAPP_LINKS.geral}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-4 sm:px-5 rounded-full bg-[#582126] hover:bg-[#41161A] text-[#FAF6F2] text-xs sm:text-sm font-semibold tracking-wide shadow-sm border border-[#C5A059]/35 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#E2C68D] shrink-0" strokeWidth={1.75} />
            <span>Atendimento</span>
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </header>

      <main id="topo" className="flex-1">
        {/* ===================================================================
            B. HERO SECTION (FOCO EM CONVERSÃO IMEDIATA + BIO-LINK HUB)
            =================================================================== */}
        <section
          aria-labelledby="hero-heading"
          className="relative overflow-hidden pt-6 pb-14 sm:py-16 lg:py-20 border-b border-[#C88A76]/35"
        >
          {/* Elemento Decorativo Orgânico de Fundo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#DFB4A4]/25 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 -left-28 w-72 h-72 rounded-full bg-[#C88A76]/15 blur-3xl"
          />

          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Coluna Esquerda: Proposta de Valor Institucional */}
              <div className="lg:col-span-7 flex flex-col items-start">
                {/* Badge de Prova Social + Atendimento Nacional */}
                <div className="flex flex-wrap items-center gap-2.5 mb-5">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECE4] border border-[#C5A059]/45 text-xs font-semibold text-[#3A1F18] shadow-2xs">
                    <span className="tracking-tighter text-amber-500" aria-hidden="true">
                      ⭐⭐⭐⭐⭐
                    </span>
                    <span>Avaliação 5 Estrelas no Google</span>
                    <span className="text-[#582126]/75 font-normal hidden xs:inline">
                      (17 avaliações)
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#582126]/8 border border-[#582126]/20 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#582126]">
                    🇧🇷 Todo o Brasil
                  </span>
                </div>

                {/* Label Editorial */}
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#582126] mb-2.5 flex items-center gap-2">
                  <span className="w-6 h-[1px] bg-[#C88A76]" aria-hidden="true" />
                  DRA. MICHELLE DUTRA • OAB/RS 136.947
                </p>

                {/* Headline Principal Fluida */}
                <h1
                  id="hero-heading"
                  className="font-serif font-semibold text-[#1A1615] tracking-tight leading-[1.08] mb-5"
                  style={{ fontSize: "clamp(2.25rem, 5.2vw, 3.85rem)" }}
                >
                  Advocacia com{" "}
                  <span className="editorial-underline italic font-medium text-[#582126]">
                    estratégia
                  </span>
                  , clareza e propósito.
                </h1>

                {/* Subheadline */}
                <p
                  className="text-[#3A1F18]/90 leading-relaxed mb-6 max-w-2xl font-normal"
                  style={{ fontSize: "clamp(1rem, 1.8vw, 1.15rem)" }}
                >
                  Soluções jurídicas seguras, estratégicas e personalizadas em{" "}
                  <strong className="font-semibold text-[#1A1615]">
                    Direito do Trabalho
                  </strong>
                  ,{" "}
                  <strong className="font-semibold text-[#582126]">
                    Direitos da Gestante
                  </strong>
                  ,{" "}
                  <strong className="font-semibold text-[#1A1615]">
                    Família e Sucessões
                  </strong>{" "}
                  e{" "}
                  <strong className="font-semibold text-[#1A1615]">FIES</strong>.
                  Atendimento on-line humanizado para todo o Brasil.
                </p>

                {/* Linha Divisória Fina com Pontos de Separação (Assinatura Visual do Feed) */}
                <div className="w-full py-3.5 mb-7 border-y border-[#C88A76]/40 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-medium text-[#3A1F18]/85">
                  <div className="flex items-center flex-wrap gap-x-2.5 gap-y-1">
                    <span>Valores</span>
                    <span className="text-[#C88A76]" aria-hidden="true">
                      •
                    </span>
                    <span>Documentos</span>
                    <span className="text-[#C88A76]" aria-hidden="true">
                      •
                    </span>
                    <span>Prazos</span>
                    <span className="text-[#C88A76]" aria-hidden="true">
                      •
                    </span>
                    <span className="text-[#582126] font-semibold">
                      Orientação Preventiva e Contenciosa
                    </span>
                  </div>
                  <span className="italic font-serif text-base text-[#582126]">
                    “Cada caso merece atenção.”
                  </span>
                </div>

                {/* CTAs Principais da Landing Page */}
                <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-7">
                  {/* 1. Botão Primário (Efeito Shimmer) */}
                  <a
                    href={WHATSAPP_LINKS.geral}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shimmer min-h-[54px] px-7 py-3.5 rounded-2xl bg-[#582126] hover:bg-[#41161A] text-[#FAF6F2] font-semibold text-sm sm:text-base flex items-center justify-center gap-3 shadow-md shadow-[#582126]/20 border border-[#C5A059]/45"
                  >
                    <MessageCircle
                      className="w-5 h-5 text-[#E2C68D] shrink-0"
                      strokeWidth={1.75}
                    />
                    <span>Agendar Consulta pelo WhatsApp</span>
                    <ArrowUpRight
                      className="w-4 h-4 text-[#E2C68D] shrink-0"
                      strokeWidth={2}
                    />
                  </a>

                  {/* 2. Botão Secundário Institucional */}
                  <a
                    href="#areas-de-atuacao"
                    className="min-h-[54px] px-6 py-3.5 rounded-2xl bg-[#F3ECE4] hover:bg-[#E5D9CD]/75 text-[#3A1F18] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2.5 border border-[#C88A76]/50 transition-colors text-center"
                  >
                    <Scale
                      className="w-4 h-4 text-[#582126] shrink-0"
                      strokeWidth={1.6}
                    />
                    <span>Conhecer Áreas de Atuação</span>
                  </a>
                </div>

                {/* Destaques Institucionais Rápidos */}
                <div className="w-full grid grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-2xl bg-[#F3ECE4]/75 border border-[#C88A76]/35">
                    <p className="font-serif text-xl sm:text-2xl font-bold text-[#582126]">
                      100%
                    </p>
                    <p className="text-[11px] text-[#3A1F18]/85 leading-snug">
                      Atendimento Digital em todo o Brasil
                    </p>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#F3ECE4]/75 border border-[#C88A76]/35">
                    <p className="font-serif text-xl sm:text-2xl font-bold text-[#582126]">
                      5,0 ★
                    </p>
                    <p className="text-[11px] text-[#3A1F18]/85 leading-snug">
                      Nota Máxima no Google Reviews
                    </p>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#F3ECE4]/75 border border-[#C88A76]/35">
                    <p className="font-serif text-xl sm:text-2xl font-bold text-[#582126]">
                      4 Áreas
                    </p>
                    <p className="text-[11px] text-[#3A1F18]/85 leading-snug">
                      Trabalho, Gestante, Família e FIES
                    </p>
                  </div>
                </div>
              </div>

              {/* Coluna Direita: Retrato Editorial + Superfície de Contraste Clássica */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Moldura Editorial com Superfície #1A1615 e Detalhes #C5A059 */}
                  <div className="relative rounded-[2rem] overflow-hidden bg-[#1A1615] border-2 border-[#C5A059]/45 shadow-xl">
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#3B3B3B]">
                      <Image
                        src="/images/dra-michelle-dutra.png"
                        alt="Dra. Michelle Dutra — Advogada inscrita na OAB/RS 136.947"
                        fill
                        priority
                        unoptimized
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                        className="object-cover object-[center_18%] scale-[1.12]"
                      />
                      {/* Gradiente Suave na Base para Leitura do Card */}
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-[#1A1615] via-[#1A1615]/25 to-transparent"
                      />
                    </div>

                    {/* Assinatura Institucional Sobreposta na Base */}
                    <div className="relative p-5 sm:p-6 bg-[#1A1615]/95 border-t border-[#C5A059]/30 text-[#FAF6F2]">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C5A059]">
                            ATENDIMENTO HUMANIZADO & ESTRATÉGICO
                          </p>
                          <p className="font-serif text-2xl font-semibold text-white">
                            Dra. Michelle Dutra
                          </p>
                        </div>
                        <MonogramCrestSVG className="w-11 h-12 shrink-0" />
                      </div>
                      <p className="text-xs text-[#F3ECE4]/85 leading-relaxed mb-3">
                        Pós-graduada em Direito do Trabalho e Processo do Trabalho •
                        Pós-graduada em Direito de Família e Sucessões • Especialista
                        em FIES.
                      </p>
                      <div className="pt-3 border-t border-[#C5A059]/20 flex items-center justify-between text-[11px] text-[#E2C68D]">
                        <span>OAB/RS 136.947</span>
                        <span>•</span>
                        <span>Consulta 100% On-line ou Presencial</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            C. ÁREAS DE ATUAÇÃO (BENTO GRID / CARDS INTERATIVOS MOBILE-FIRST)
            =================================================================== */}
        <section
          id="areas-de-atuacao"
          aria-labelledby="areas-heading"
          className="py-14 sm:py-20 scroll-mt-20 border-b border-[#C88A76]/35"
        >
          <div className="mx-auto max-w-6xl px-4">
            {/* Cabeçalho Editorial da Seção */}
            <div className="max-w-3xl mb-10 sm:mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#582126] mb-2.5 flex items-center gap-2.5">
                <span className="w-8 h-[1px] bg-[#C88A76]" aria-hidden="true" />
                ESPECIALIDADES JURÍDICAS
              </p>
              <h2
                id="areas-heading"
                className="font-serif font-semibold text-[#1A1615] leading-[1.12] mb-4"
                style={{ fontSize: "clamp(1.85rem, 4vw, 2.85rem)" }}
              >
                Atuação técnica e acolhedora nas decisões que impactam sua vida.
              </h2>
              <p className="text-sm sm:text-base text-[#3A1F18]/85 leading-relaxed">
                Cada situação jurídica exige análise minuciosa de documentos,
                prazos e provas. Conheça as 4 frentes de atuação do escritório:
              </p>
            </div>

            {/* Bento Grid Mobile-First */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
              {/* CARD 1: DIREITO DO TRABALHO (Bento 7 cols) */}
              <article
                id="area-trabalho"
                className="md:col-span-7 rounded-3xl bg-[#F3ECE4] border border-[#C88A76]/45 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden scroll-mt-24"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-[#C88A76]/40">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#582126]">
                      DIREITO DO TRABALHO
                    </span>
                    <span className="text-xs font-medium text-[#3A1F18]/75">
                      Valores • Documentos • Prazos
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center mb-5">
                    <div className="sm:col-span-8">
                      <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1A1615] leading-tight mb-3">
                        Defesa dos seus direitos do contrato à rescisão.
                      </h3>
                      <p className="text-sm text-[#3A1F18]/90 leading-relaxed">
                        Análise completa para garantir que nenhuma verba trabalhista,
                        jornada extraordinária ou período sem registro seja ignorado.
                      </p>
                    </div>
                    <div className="sm:col-span-4 flex justify-center sm:justify-end">
                      <ContinuousLineRescisaoSVG className="w-36 h-28" />
                    </div>
                  </div>

                  {/* Tópicos de Atuação Trabalhista */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-xs sm:text-sm text-[#3A1F18]">
                    {[
                      "Rescisão contratual e conferência de verbas rescisórias (prazo de 10 dias)",
                      "Reconhecimento de vínculo empregatício (trabalho sem carteira assinada)",
                      "Salário “por fora”: análise de valor recebido, frequência e reflexos nas verbas",
                      "Horas extras (adicional mínimo de 50%), registro de ponto e banco de horas",
                      "Férias: regras de prazo aquisitivo/concessivo, pagamento + 1/3 e divisão",
                      "FGTS não depositado, rescisão indireta e indenizações trabalhistas",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 bg-[#FAF6F2]/85 p-3 rounded-xl border border-[#C88A76]/30"
                      >
                        <CheckCircle2
                          className="w-4 h-4 text-[#582126] shrink-0 mt-0.5"
                          strokeWidth={1.75}
                        />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#C88A76]/40 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs italic font-serif text-[#582126] sm:text-sm">
                    “Ficou com dúvida sobre algum valor? Busque orientação.”
                  </span>
                  <a
                    href={WHATSAPP_LINKS.rescisao}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[48px] px-5 py-2.5 rounded-xl bg-[#582126] hover:bg-[#41161A] text-[#FAF6F2] text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-colors"
                  >
                    <span>Avaliar Caso Trabalhista</span>
                    <ArrowUpRight className="w-4 h-4 text-[#E2C68D]" />
                  </a>
                </div>
              </article>

              {/* CARD 2: DIREITOS DA GESTANTE — DESTAQUE ESPECIAL (Bento 5 cols) */}
              <article
                id="area-gestante"
                className="md:col-span-5 rounded-3xl bg-[#582126] text-[#FAF6F2] border-2 border-[#C5A059]/55 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-lg scroll-mt-24"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-[#DFB4A4]/25">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E2C68D]">
                      DIREITOS DA GESTANTE
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/45 text-[10px] font-semibold uppercase tracking-wider text-[#E2C68D]">
                      Destaque Especial
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-3 mb-4">
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white leading-tight">
                      Proteção à maternidade e estabilidade no emprego.
                    </h3>
                    <div className="bg-[#FAF6F2] rounded-2xl p-2 shrink-0 border border-[#C5A059]/40">
                      <ContinuousLineGestanteSVG className="w-16 h-20" />
                    </div>
                  </div>

                  <p className="text-sm text-[#F3ECE4]/90 leading-relaxed mb-5">
                    A descoberta da gravidez não deve vir acompanhada do medo de
                    perder o emprego. Atuação especializada para proteger a mãe e o
                    bebê:
                  </p>

                  <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-[#FAF6F2]">
                    <li className="flex items-start gap-2.5 bg-[#1A1615]/35 p-3 rounded-xl border border-[#DFB4A4]/20">
                      <ShieldCheck
                        className="w-4 h-4 text-[#E2C68D] shrink-0 mt-0.5"
                        strokeWidth={1.75}
                      />
                      <span>
                        <strong>Estabilidade provisória:</strong> desde a confirmação
                        da gravidez até <strong>5 meses após o parto</strong> (contados
                        do nascimento do bebê).
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 bg-[#1A1615]/35 p-3 rounded-xl border border-[#DFB4A4]/20">
                      <ShieldCheck
                        className="w-4 h-4 text-[#E2C68D] shrink-0 mt-0.5"
                        strokeWidth={1.75}
                      />
                      <span>
                        <strong>Demissão na gestação ou aviso-prévio:</strong> mesmo
                        que a gravidez seja descoberta após a demissão ou no
                        aviso-prévio indenizado.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 bg-[#1A1615]/35 p-3 rounded-xl border border-[#DFB4A4]/20">
                      <ShieldCheck
                        className="w-4 h-4 text-[#E2C68D] shrink-0 mt-0.5"
                        strokeWidth={1.75}
                      />
                      <span>
                        <strong>Licença-maternidade e indenização:</strong> defesa em
                        casos de dispensa indevida, reintegração ou indenização do
                        período estabilitário.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#DFB4A4]/25">
                  <a
                    href={WHATSAPP_LINKS.gestante}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shimmer w-full min-h-[48px] px-5 py-3 rounded-xl bg-[#FAF6F2] hover:bg-white text-[#582126] text-xs sm:text-sm font-bold inline-flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <Baby className="w-4 h-4 text-[#582126]" strokeWidth={1.75} />
                    <span>Falar sobre Direitos da Gestante</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </article>

              {/* CARD 3: DIREITO DE FAMÍLIA E SUCESSÕES (Bento 6 cols) */}
              <article
                id="area-familia"
                className="md:col-span-6 rounded-3xl bg-[#FAF6F2] border border-[#C88A76]/45 p-6 sm:p-8 flex flex-col justify-between shadow-2xs scroll-mt-24"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-[#C88A76]/40">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#582126]">
                      FAMÍLIA E SUCESSÕES
                    </span>
                    <span className="text-xs font-medium text-[#3A1F18]/75">
                      Inventários • Partilha • Empatia
                    </span>
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#F3ECE4] border border-[#C88A76]/45 flex items-center justify-center text-[#582126] shrink-0">
                      <Scale className="w-6 h-6" strokeWidth={1.4} />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-[#1A1615] leading-tight mb-2">
                        Inventários Judiciais, Extrajudiciais e Direito de Família.
                      </h3>
                      <p className="text-sm text-[#3A1F18]/85 leading-relaxed">
                        Planejamento e condução de inventários, partilha de bens e
                        demandas familiares com escuta ativa, sensibilidade e
                        segurança jurídica para preservar o patrimônio e a paz
                        familiar.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-5 text-xs sm:text-sm">
                    <div className="p-3 rounded-xl bg-[#F3ECE4]/70 border border-[#C88A76]/30">
                      <strong className="block text-[#1A1615] mb-0.5">
                        Inventário Extrajudicial
                      </strong>
                      <span className="text-[#3A1F18]/80 text-xs">
                        Condução ágil em cartório quando há consenso entre os
                        herdeiros.
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F3ECE4]/70 border border-[#C88A76]/30">
                      <strong className="block text-[#1A1615] mb-0.5">
                        Inventário Judicial & Família
                      </strong>
                      <span className="text-[#3A1F18]/80 text-xs">
                        Defesa estratégica de quinhões, regularização de bens e
                        soluções familiares.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#C88A76]/40 flex items-center justify-between gap-3">
                  <span className="text-xs text-[#3A1F18]/75 font-medium">
                    Pós-graduada em Direito de Família e Sucessões
                  </span>
                  <a
                    href={WHATSAPP_LINKS.inventario}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[48px] px-4 py-2.5 rounded-xl bg-[#F3ECE4] hover:bg-[#582126] hover:text-[#FAF6F2] text-[#582126] border border-[#C88A76]/50 text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-colors shrink-0"
                  >
                    <span>Consultar Inventário</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </article>

              {/* CARD 4: ESPECIALISTA EM FIES (Bento 6 cols) */}
              <article
                id="area-fies"
                className="md:col-span-6 rounded-3xl bg-[#FAF6F2] border border-[#C88A76]/45 p-6 sm:p-8 flex flex-col justify-between shadow-2xs scroll-mt-24"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-[#C88A76]/40">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#582126]">
                      DIREITO EDUCACIONAL & BANCÁRIO
                    </span>
                    <span className="text-xs font-medium text-[#3A1F18]/75">
                      Contratos • Aditamentos • Renegociação
                    </span>
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#F3ECE4] border border-[#C88A76]/45 flex items-center justify-center text-[#582126] shrink-0">
                      <GraduationCap className="w-6 h-6" strokeWidth={1.4} />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-[#1A1615] leading-tight mb-2">
                        Especialista em Financiamento Estudantil (FIES).
                      </h3>
                      <p className="text-sm text-[#3A1F18]/85 leading-relaxed">
                        Assessoria jurídica especializada em contratos e demandas
                        relacionadas ao FIES, garantindo suporte técnico para
                        estudantes e profissionais formados diante de entraves
                        contratuais ou operacionais.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-5 text-xs sm:text-sm">
                    <div className="p-3 rounded-xl bg-[#F3ECE4]/70 border border-[#C88A76]/30">
                      <strong className="block text-[#1A1615] mb-0.5">
                        Análise de Contratos FIES
                      </strong>
                      <span className="text-[#3A1F18]/80 text-xs">
                        Verificação de cláusulas, cobranças, aditamentos e
                        transferências.
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F3ECE4]/70 border border-[#C88A76]/30">
                      <strong className="block text-[#1A1615] mb-0.5">
                        Demandas Administrativas e Judiciais
                      </strong>
                      <span className="text-[#3A1F18]/80 text-xs">
                        Estratégia personalizada para destravar direitos ligados ao
                        financiamento.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#C88A76]/40 flex items-center justify-between gap-3">
                  <span className="text-xs text-[#3A1F18]/75 font-medium">
                    Atendimento 100% digital em todo o país
                  </span>
                  <a
                    href={WHATSAPP_LINKS.fies}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[48px] px-4 py-2.5 rounded-xl bg-[#F3ECE4] hover:bg-[#582126] hover:text-[#FAF6F2] text-[#582126] border border-[#C88A76]/50 text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-colors shrink-0"
                  >
                    <span>Analisar Caso FIES</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ===================================================================
            D. SEÇÃO "SOBRE A DRA. MICHELLE DUTRA" (AUTORIDADE + HUMANIZAÇÃO)
            =================================================================== */}
        <section
          id="sobre"
          aria-labelledby="sobre-heading"
          className="py-14 sm:py-20 bg-[#F3ECE4] border-b border-[#C88A76]/35 scroll-mt-20"
        >
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Coluna Visual: Apresentação + Brasão Dourado Oficial */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-3xl overflow-hidden border border-[#C88A76]/50 bg-[#FAF6F2] shadow-md">
                  <div className="relative aspect-[4/4.3] w-full overflow-hidden bg-[#3B3B3B]">
                    <Image
                      src="/images/dra-michelle-dutra.png"
                      alt="Prazer, Michelle Dutra! Advogada OAB/RS 136.947"
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-cover object-[center_18%] scale-[1.12]"
                    />
                  </div>
                  <div className="p-5 bg-[#FAF6F2] border-t border-[#C88A76]/35 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="font-serif text-xl font-semibold text-[#3A1F18]">
                        “Prazer, Michelle Dutra!”
                      </p>
                      <p className="text-xs text-[#582126] font-medium">
                        OAB/RS 136.947 • Faculdade Dom Alberto (2021)
                      </p>
                    </div>
                    <a
                      href="https://www.instagram.com/advogadamichelledutra/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#582126]/10 hover:bg-[#582126] text-[#582126] hover:text-[#FAF6F2] text-xs font-semibold transition-colors"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3.5 h-3.5 shrink-0"
                        aria-hidden="true"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                      <span>@advogadamichelledutra</span>
                    </a>
                  </div>
                </div>

                {/* Card do Brasão Oficial 3D */}
                <div className="rounded-2xl bg-[#1A1615] text-[#FAF6F2] p-4 border border-[#C5A059]/40 flex items-center gap-4">
                  <div className="relative w-20 h-16 rounded-xl overflow-hidden shrink-0 border border-[#C5A059]/30">
                    <Image
                      src="/images/brasao-michelle-dutra.png"
                      alt="Brasão Oficial Michelle Dutra Advogada"
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
                      COMPROMISSO ÉTICO
                    </p>
                    <p className="font-serif text-lg font-medium text-white leading-snug">
                      “Advogar é perceber que horas de estudo podem mudar a história
                      de alguém.”
                    </p>
                  </div>
                </div>
              </div>

              {/* Coluna de Conteúdo: Credenciais Semânticas + Filosofia + Toque Humano */}
              <div className="lg:col-span-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#582126] mb-2.5 flex items-center gap-2.5">
                  <span className="w-8 h-[1px] bg-[#C88A76]" aria-hidden="true" />
                  SOBRE A ADVOGADA
                </p>

                <h2
                  id="sobre-heading"
                  className="font-serif font-semibold text-[#1A1615] leading-[1.12] mb-4"
                  style={{ fontSize: "clamp(1.9rem, 4vw, 2.9rem)" }}
                >
                  Responsabilidade técnica, escuta acolhedora e dedicação a cada
                  detalhe.
                </h2>

                <p className="text-sm sm:text-base text-[#3A1F18]/90 leading-relaxed mb-6">
                  Inscrita na <strong>OAB/RS sob o nº 136.947</strong> e graduada em
                  Direito pela <strong>Faculdade Dom Alberto (FDA) em 2021</strong>,
                  a Dra. Michelle Dutra atua com foco em soluções jurídicas seguras,
                  estratégicas e personalizadas, sempre com responsabilidade,
                  comprometimento e atendimento com empatia.
                </p>

                {/* Lista de Definição Semântica (<dl>, <dt>, <dd>) para GEO / Crawlers */}
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-7">
                  <div className="p-4 rounded-2xl bg-[#FAF6F2] border border-[#C88A76]/40">
                    <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#582126] mb-1">
                      Inscrição & Formação
                    </dt>
                    <dd className="text-sm font-semibold text-[#1A1615]">
                      OAB/RS 136.947 • Graduada em Direito pela Faculdade Dom Alberto
                      (FDA — 2021)
                    </dd>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAF6F2] border border-[#C88A76]/40">
                    <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#582126] mb-1">
                      Pós-Graduação Trabalhista
                    </dt>
                    <dd className="text-sm font-semibold text-[#1A1615]">
                      Pós-graduada em Direito do Trabalho e Processo do Trabalho
                    </dd>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAF6F2] border border-[#C88A76]/40">
                    <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#582126] mb-1">
                      Pós-Graduação Sucessória
                    </dt>
                    <dd className="text-sm font-semibold text-[#1A1615]">
                      Pós-graduada em Direito de Família e Sucessões (Inventários)
                    </dd>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAF6F2] border border-[#C88A76]/40">
                    <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#582126] mb-1">
                      Filosofia de Atendimento
                    </dt>
                    <dd className="text-sm font-semibold text-[#1A1615]">
                      “Cada caso merece atenção.” Atendimento com empatia em todo o
                      Brasil
                    </dd>
                  </div>
                </dl>

                {/* Toque Humano (Pills Sutis Fiel ao Post "Sobre mim:") */}
                <div className="mb-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3A1F18]/75 mb-3">
                    Além dos processos • Quem é a Michelle:
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF6F2] border border-[#C88A76]/50 text-xs sm:text-sm font-medium text-[#3A1F18]">
                      <BookOpen
                        className="w-4 h-4 text-[#582126]"
                        strokeWidth={1.5}
                      />
                      Sempre em busca de conhecimento
                    </span>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF6F2] border border-[#C88A76]/50 text-xs sm:text-sm font-medium text-[#3A1F18]">
                      <Plane className="w-4 h-4 text-[#582126]" strokeWidth={1.5} />
                      Apaixonada por viagens
                    </span>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF6F2] border border-[#C88A76]/50 text-xs sm:text-sm font-medium text-[#3A1F18]">
                      <Heart className="w-4 h-4 text-[#582126]" strokeWidth={1.5} />
                      Apaixonada por cachorros
                    </span>
                  </div>
                </div>

                {/* CTA da Seção Sobre */}
                <div className="pt-5 border-t border-[#C88A76]/40 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-[#3A1F18]">
                    <Star
                      className="w-4 h-4 text-amber-500 fill-amber-500"
                      aria-hidden="true"
                    />
                    <span>
                      <strong>Nota 5,0 no Google</strong> • Atendimento próximo e
                      transparente
                    </span>
                  </div>
                  <a
                    href={WHATSAPP_LINKS.geral}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[48px] px-6 py-3 rounded-xl bg-[#582126] hover:bg-[#41161A] text-[#FAF6F2] text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-colors"
                  >
                    <span>Agendar Atendimento com a Dra. Michelle</span>
                    <ArrowUpRight className="w-4 h-4 text-[#E2C68D]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            E. HUB DE DIREITOS & PERGUNTAS FREQUENTES (MOTOR DE GEO & SEO)
            =================================================================== */}
        <div id="guias" className="scroll-mt-20" />
        <section
          id="hub-direitos"
          aria-labelledby="hub-direitos-heading"
          className="py-14 sm:py-20 bg-[#FAF6F2] scroll-mt-20"
        >
          <div className="mx-auto max-w-4xl px-4">
            {/* Cabeçalho com Ilustração Contínua */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#C88A76]/40">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#582126] mb-2.5 flex items-center gap-2.5">
                  <span className="w-8 h-[1px] bg-[#C88A76]" aria-hidden="true" />
                  INFORMAÇÃO PARA O SEU DIA A DIA
                </p>
                <h2
                  id="hub-direitos-heading"
                  className="font-serif font-semibold text-[#1A1615] leading-[1.12]"
                  style={{ fontSize: "clamp(1.85rem, 4vw, 2.75rem)" }}
                >
                  Hub de Direitos & Perguntas Frequentes
                </h2>
                <p className="text-sm sm:text-base text-[#3A1F18]/85 mt-2 max-w-2xl">
                  Guias rápidos elaborados pela Dra. Michelle Dutra para esclarecer
                  as dúvidas mais comuns sobre rescisão, gravidez, horas extras e
                  férias:
                </p>
              </div>
              <ContinuousLineHorasExtrasSVG className="w-36 h-24 shrink-0 hidden sm:block" />
            </div>

            {/* Lista de Acordeões Nativos (<details>/<summary>) Otimizados para GEO */}
            <div className="space-y-4">
              {FAQ_ITEMS.map((faq, index) => (
                <article
                  key={faq.id}
                  id={faq.id}
                  className="rounded-3xl bg-[#F3ECE4]/85 border border-[#C88A76]/45 overflow-hidden transition-colors hover:border-[#582126]/45"
                >
                  <details className="group" open={index === 0}>
                    <summary className="cursor-pointer select-none p-5 sm:p-6 flex items-start justify-between gap-4 min-h-[64px]">
                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#582126]">
                            {faq.category}
                          </span>
                          <span className="text-[#C88A76]" aria-hidden="true">
                            •
                          </span>
                          <span className="text-[11px] font-medium text-[#3A1F18]/75">
                            {faq.pillars}
                          </span>
                        </div>
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#1A1615] leading-snug">
                          {faq.question}
                        </h3>
                      </div>

                      <span
                        aria-hidden="true"
                        className="faq-chevron w-9 h-9 rounded-full bg-[#FAF6F2] border border-[#C88A76]/50 flex items-center justify-center text-[#582126] shrink-0 mt-1 transition-all duration-200"
                      >
                        <ChevronDown className="w-4 h-4" strokeWidth={2} />
                      </span>
                    </summary>

                    <div className="faq-content px-5 pb-6 sm:px-6 sm:pb-7 pt-2 border-t border-[#C88A76]/30">
                      {/* Bloco de Resposta Direta Semântica (Extração Imediata para IAs / GEO) */}
                      <p className="text-sm sm:text-base text-[#1A1615] leading-relaxed bg-[#FAF6F2] p-4 rounded-2xl border-l-4 border-[#582126] mb-5 font-normal">
                        {faq.directAnswer}
                      </p>

                      {/* Lista Semântica de Verificação (<dl>/<dt>/<dd>) */}
                      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                        {faq.checklist.map((point) => (
                          <div
                            key={point.term}
                            className="p-3.5 rounded-xl bg-[#FAF6F2]/75 border border-[#C88A76]/30"
                          >
                            <dt className="text-xs font-bold text-[#582126] mb-1 flex items-center gap-1.5">
                              <span
                                className="w-1.5 h-1.5 rounded-full bg-[#C88A76]"
                                aria-hidden="true"
                              />
                              {point.term}
                            </dt>
                            <dd className="text-xs text-[#3A1F18]/90 leading-relaxed">
                              {point.detail}
                            </dd>
                          </div>
                        ))}
                      </dl>

                      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                        <span className="text-xs text-[#3A1F18]/75 italic">
                          Cada caso possui particularidades que exigem análise
                          documental individualizada.
                        </span>
                        <a
                          href={faq.ctaHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="min-h-[48px] px-4 py-2.5 rounded-xl bg-[#582126] hover:bg-[#41161A] text-[#FAF6F2] text-xs font-semibold inline-flex items-center gap-2 transition-colors"
                        >
                          <MessageCircle
                            className="w-4 h-4 text-[#E2C68D]"
                            strokeWidth={1.75}
                          />
                          <span>{faq.ctaLabel}</span>
                        </a>
                      </div>
                    </div>
                  </details>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            BANNER DE CONVERSÃO FINAL ANTES DO FOOTER
            =================================================================== */}
        <section
          aria-labelledby="cta-final-heading"
          className="py-12 sm:py-16 bg-[#F3ECE4] border-t border-[#C88A76]/40"
        >
          <div className="mx-auto max-w-5xl px-4">
            <div className="rounded-[2rem] bg-[#1A1615] text-[#FAF6F2] p-6 sm:p-10 lg:p-12 border-2 border-[#C5A059]/45 shadow-xl relative overflow-hidden">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C5A059] mb-2">
                    ATENDIMENTO ON-LINE EM TODO O BRASIL 🇧🇷
                  </p>
                  <h2
                    id="cta-final-heading"
                    className="font-serif text-2xl sm:text-4xl font-semibold text-white leading-tight mb-3"
                  >
                    Precisa de orientação jurídica segura para o seu caso?
                  </h2>
                  <p className="text-sm sm:text-base text-[#F3ECE4]/85 leading-relaxed">
                    Envie uma mensagem pelo WhatsApp para agendar sua consulta e
                    entender com clareza quais direitos e medidas se aplicam à sua
                    situação.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                  <a
                    href={WHATSAPP_LINKS.geral}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shimmer min-h-[54px] px-6 py-3.5 rounded-2xl bg-[#582126] hover:bg-[#722D33] text-white font-semibold text-sm flex items-center justify-center gap-2.5 border border-[#C5A059]/55 shadow-md"
                  >
                    <MessageCircle
                      className="w-5 h-5 text-[#E2C68D]"
                      strokeWidth={1.75}
                    />
                    <span>Falar com a Dra. Michelle</span>
                  </a>
                  <p className="text-center text-[11px] text-[#E2C68D]">
                    WhatsApp Oficial: (51) 99604-9104
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================================
          F. FOOTER COMPLETO + CONFORMIDADE ÉTICA OAB
          ===================================================================== */}
      <footer className="bg-[#1A1615] text-[#FAF6F2] border-t border-[#C5A059]/30 pt-12 pb-28 md:pb-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#C5A059]/20">
            {/* Identidade & Frase Assinatura */}
            <div className="md:col-span-5 space-y-3">
              <div className="flex items-center gap-3">
                <MonogramCrestSVG className="w-11 h-12 shrink-0" />
                <div>
                  <p className="font-serif text-xl font-semibold text-white tracking-wide">
                    MICHELLE DUTRA
                  </p>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C5A059]">
                    • ADVOGADA • OAB/RS 136.947
                  </p>
                </div>
              </div>
              <p className="font-serif italic text-lg text-[#DFB4A4]">
                “Informação para o seu dia a dia • Cada caso merece atenção”
              </p>
              <p className="text-xs text-[#F3ECE4]/75 leading-relaxed max-w-sm">
                Advocacia com estratégia, clareza e propósito em Direito do
                Trabalho, Direitos da Gestante, Direito de Família e Sucessões
                (Inventários) e FIES.
              </p>
            </div>

            {/* Links Rápidos */}
            <div className="md:col-span-3 space-y-2.5 text-xs">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C5A059] mb-3">
                Navegação
              </p>
              <ul className="space-y-2 text-[#F3ECE4]/80">
                <li>
                  <a
                    href="/bio"
                    className="hover:text-white transition-colors"
                  >
                    Hub Bio-Link do Instagram (/bio)
                  </a>
                </li>
                <li>
                  <a
                    href="#area-trabalho"
                    className="hover:text-white transition-colors"
                  >
                    Direito do Trabalho & Rescisão
                  </a>
                </li>
                <li>
                  <a
                    href="#area-gestante"
                    className="hover:text-white transition-colors"
                  >
                    Direitos da Gestante & Estabilidade
                  </a>
                </li>
                <li>
                  <a
                    href="#area-familia"
                    className="hover:text-white transition-colors"
                  >
                    Família, Sucessões e Inventários
                  </a>
                </li>
                <li>
                  <a
                    href="#area-fies"
                    className="hover:text-white transition-colors"
                  >
                    Assessoria Especializada em FIES
                  </a>
                </li>
              </ul>
            </div>

            {/* Canais de Atendimento & Endereço */}
            <div className="md:col-span-4 space-y-2.5 text-xs text-[#F3ECE4]/85">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C5A059] mb-3">
                Atendimento & Contato
              </p>
              <p className="flex items-start gap-2">
                <Clock
                  className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <span>
                  <strong>Atendimento On-line em todo o Brasil</strong> mediante
                  agendamento pelo WhatsApp.
                </span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin
                  className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <span>
                  R. José Luís de Freitas, 255 - Centro, Torres - RS, 95560-000
                </span>
              </p>
              <p className="flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-[#C5A059] shrink-0"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <a
                  href="https://www.instagram.com/advogadamichelledutra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline underline-offset-4"
                >
                  @advogadamichelledutra
                </a>
              </p>
            </div>
          </div>

          {/* Aviso de Conformidade Ética da OAB */}
          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-[#F3ECE4]/65 leading-relaxed">
            <p className="max-w-3xl">
              <strong>Aviso de Conformidade Ética (OAB):</strong> Este site possui
              caráter exclusivamente informativo e educacional, em estrita
              observância ao Código de Ética e Disciplina da Ordem dos Advogados do
              Brasil (Provimento nº 205/2021 do Conselho Federal da OAB). O conteúdo
              aqui publicado não substitui consulta jurídica formal.
            </p>
            <p className="shrink-0 text-[#C5A059]/90">
              © {new Date().getFullYear()} Dra. Michelle Dutra • OAB/RS 136.947
            </p>
          </div>
        </div>
      </footer>

      {/* =====================================================================
          BARRA FIXA MOBILE (STICKY BOTTOM ACTION BAR < 768px)
          ===================================================================== */}
      <div className="fixed bottom-0 inset-x-0 z-50 md:hidden p-3 glass-dark border-t border-[#C5A059]/35 shadow-2xl">
        <div className="mx-auto max-w-md flex items-center justify-between gap-3">
          <div className="flex flex-col min-w-0 pl-1">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Atendimento On-line
            </span>
            <span className="text-xs font-medium text-[#FAF6F2] truncate">
              Dra. Michelle • OAB/RS 136.947
            </span>
          </div>

          <a
            href={WHATSAPP_LINKS.geral}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer min-h-[48px] px-4 py-2.5 rounded-xl bg-[#582126] text-[#FAF6F2] font-semibold text-xs flex items-center justify-center gap-2 border border-[#C5A059]/50 shrink-0 shadow-md"
          >
            <MessageCircle
              className="w-4 h-4 text-[#E2C68D] shrink-0"
              strokeWidth={1.9}
            />
            <span>Falar com a Dra. Michelle Agora</span>
          </a>
        </div>
      </div>
    </div>
  );
}
