import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-jakarta",
});

const SITE_URL = "https://advogadamichelledutra.com.br";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAF6F2",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Dra. Michelle Dutra | Advogada (OAB/RS 136.947) • Trabalhista, Gestantes, Inventários e FIES",
    template: "%s | Dra. Michelle Dutra • Advogada",
  },
  description:
    "Advocacia com estratégia, clareza e propósito. Soluções jurídicas seguras e personalizadas em Direito do Trabalho, Direitos da Gestante, Família e Sucessões (Inventários) e FIES. Atendimento on-line humanizado em todo o Brasil.",
  keywords: [
    "Dra. Michelle Dutra",
    "Michelle Dutra Advogada",
    "OAB/RS 136.947",
    "Advogada Trabalhista Online",
    "Direitos da Gestante Advogada",
    "Estabilidade da Gestante",
    "Demissão na Gravidez",
    "Rescisão Trabalhista Conferência",
    "Advogada Inventários",
    "Direito de Família e Sucessões",
    "Advogada Especialista em FIES",
    "Advogada Torres RS",
  ],
  authors: [{ name: "Dra. Michelle Dutra", url: "https://www.instagram.com/advogadamichelledutra/" }],
  creator: "Dra. Michelle Dutra | OAB/RS 136.947",
  publisher: "Dra. Michelle Dutra Advocacia",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Dra. Michelle Dutra | Advocacia",
    title: "Dra. Michelle Dutra | Advogada (OAB/RS 136.947) — Estratégia, Clareza e Propósito",
    description:
      "Direito do Trabalho, Direitos da Gestante, Família e Sucessões (Inventários) e FIES. Avaliação 5 estrelas no Google e atendimento on-line em todo o Brasil.",
    images: [
      {
        url: "/images/dra-michelle-apresentacao.png",
        width: 1200,
        height: 900,
        alt: "Dra. Michelle Dutra — Advogada OAB/RS 136.947",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Michelle Dutra | Advogada (OAB/RS 136.947)",
    description:
      "Soluções jurídicas seguras, estratégicas e personalizadas em Direito do Trabalho, Direitos da Gestante, Inventários e FIES. Atendimento on-line em todo o Brasil.",
    images: ["/images/dra-michelle-apresentacao.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const legalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LegalService", "Attorney"],
  "@id": `${SITE_URL}/#attorney`,
  name: "Dra. Michelle Dutra",
  alternateName: "Michelle Dutra | Advogada (OAB/RS 136.947)",
  description:
    "Advocacia com estratégia, clareza e propósito. Soluções jurídicas seguras, estratégicas e personalizadas em Direito do Trabalho, Direitos da Gestante, Família e Sucessões e FIES. Atendimento on-line humanizado para todo o Brasil.",
  url: SITE_URL,
  image: `${SITE_URL}/images/dra-michelle-dutra.png`,
  logo: `${SITE_URL}/images/brasao-michelle-dutra.png`,
  telephone: "+55-51-99604-9104",
  priceRange: "$$",
  identifier: {
    "@type": "PropertyValue",
    name: "OAB/RS",
    value: "136.947",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Inscrição na Ordem dos Advogados do Brasil",
    recognizedBy: {
      "@type": "Organization",
      name: "Ordem dos Advogados do Brasil — Seccional Rio Grande do Sul (OAB/RS)",
    },
    identifier: "OAB/RS 136.947",
  },
  areaServed: "BR",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. José Luís de Freitas, 255 - Centro",
    addressLocality: "Torres",
    addressRegion: "RS",
    postalCode: "95560-000",
    addressCountry: "BR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "17",
    reviewCount: "17",
  },
  knowsAbout: [
    "Direito do Trabalho",
    "Direitos da Gestante",
    "Estabilidade Gestacional",
    "Rescisão Trabalhista",
    "Direito de Família e Sucessões",
    "Inventários",
    "FIES",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Faculdade Dom Alberto",
    alternateName: "FDA",
  },
  sameAs: ["https://www.instagram.com/advogadamichelledutra/"],
};

const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "O contrato terminou. O que preciso conferir na minha rescisão?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O valor depende da modalidade (pedido de demissão, dispensa sem justa causa ou acordo). É essencial conferir: motivo do desligamento nos documentos, datas de admissão e saída, parcelas devidas, descontos e depósitos do FGTS. Em regra, o pagamento das verbas rescisórias deve ocorrer em até 10 dias contados do término do contrato.",
      },
    },
    {
      "@type": "Question",
      name: "Estou grávida. Posso ser demitida? Até quando vai a estabilidade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A gestante possui proteção contra demissão sem justa causa desde a confirmação da gravidez até 5 meses após o parto (contados do nascimento do bebê, e não do retorno ao trabalho). A estabilidade só é afastada em caso de falta grave devidamente comprovada (justa causa).",
      },
    },
    {
      "@type": "Question",
      name: "Descobri a gravidez após a demissão. Perdi o direito à estabilidade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não necessariamente. O ponto principal é verificar se a concepção já existia durante o contrato de trabalho ou mesmo durante o aviso-prévio (inclusive indenizado). Recomenda-se guardar exames, ultrassons, aviso-prévio e termo de rescisão para análise jurídica.",
      },
    },
    {
      "@type": "Question",
      name: "Horas extras: o que conferir no registro de ponto e contracheque?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Verifique se o ponto reflete o horário real trabalhado, se as horas extras constam no contracheque com adicional de, no mínimo, 50% (ou percentual superior previsto em norma coletiva) e se o banco de horas respeita as regras de compensação e prazos legais.",
      },
    },
    {
      "@type": "Question",
      name: "Quais são as regras de prazo, pagamento e divisão das férias?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Após 12 meses de trabalho (período aquisitivo), o empregado tem direito a até 30 dias de férias nos 12 meses seguintes, com pagamento realizado até 2 dias antes do início acrescido de 1/3 constitucional. Podem ser divididas em até 3 períodos (sendo um de no mínimo 14 dias corridos e os demais de no mínimo 5 dias cada).",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(legalServiceJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqPageJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#FAF6F2] text-[#3A1F18] selection:bg-[#582126] selection:text-[#FAF6F2]">
        {children}
      </body>
    </html>
  );
}

