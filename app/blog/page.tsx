import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BookOpen, Clock, MessageCircle } from "lucide-react";
import { BLOG_ARTICLES } from "./articles-data";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://advogadamichelledutra.vercel.app";

export const metadata: Metadata = {
  title: "Blog Jurídico: Trabalho, Gestante e FIES",
  description:
    "Artigos e guias práticos sobre Direito do Trabalho, estabilidade da gestante, rescisão, horas extras, férias, inventários e FIES por Dra. Michelle Dutra.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${SITE_URL}/blog`,
    title: "Blog Jurídico | Dra. Michelle Dutra • Advogada (OAB/RS 136.947)",
    description:
      "Informação jurídica clara para o seu dia a dia: rescisão trabalhista, estabilidade da gestante, horas extras, férias, inventários e FIES.",
  },
};

export default function BlogIndexPage() {
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog/#blog`,
    url: `${SITE_URL}/blog`,
    name: "Blog Jurídico — Dra. Michelle Dutra | Advogada (OAB/RS 136.947)",
    description:
      "Artigos educativos e guias de direitos sobre Direito do Trabalho, Direitos da Gestante, Família e Sucessões e FIES.",
    inLanguage: "pt-BR",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    blogPost: BLOG_ARTICLES.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      description: article.metaDescription,
      datePublished: article.publishedAt,
      url: `${SITE_URL}/blog/${article.slug}`,
      author: {
        "@type": "Person",
        name: "Dra. Michelle Dutra",
        identifier: "OAB/RS 136.947",
      },
    })),
  };

  return (
    <div className="min-h-dvh flex flex-col bg-[#FAF6F2] text-[#3A1F18]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Header Editorial do Blog */}
      <header className="sticky top-0 z-40 glass-nav border-b border-[#C88A76]/30">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#582126] hover:text-[#1A1615] transition-colors py-2"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.75} />
            <span>Voltar para o Site Principal</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-xs font-medium text-[#3A1F18]/75">
              Dra. Michelle Dutra • OAB/RS 136.947
            </span>
            <a
              href="https://wa.me/5551996049104?text=Ol%C3%A1%2C%20Dra.%20Michelle!%20Vim%20pelo%20seu%20Blog%20Jur%C3%ADdico%20e%20gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[40px] px-4 py-2 rounded-full bg-[#582126] hover:bg-[#41161A] text-[#FAF6F2] text-xs font-semibold inline-flex items-center gap-1.5 border border-[#C5A059]/35 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#E2C68D]" />
              <span>Agendar Consulta</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4">
          {/* Hero do Blog */}
          <div className="max-w-3xl mb-12 pb-8 border-b border-[#C88A76]/40">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#582126] mb-2.5 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#582126]" strokeWidth={1.6} />
              <span>BLOG JURÍDICO • INFORMAÇÃO PARA O SEU DIA A DIA</span>
            </p>
            <h1
              className="font-serif font-semibold text-[#1A1615] leading-[1.1] mb-4"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
            >
              Artigos, Guias de Direitos & Orientações Práticas
            </h1>
            <p className="text-sm sm:text-base text-[#3A1F18]/85 leading-relaxed">
              Conteúdos educativos elaborados pela{" "}
              <strong className="text-[#1A1615]">
                Dra. Michelle Dutra (OAB/RS 136.947)
              </strong>{" "}
              para ajudar você a compreender seus direitos com clareza,
              estratégia e segurança jurídica.
            </p>
          </div>

          {/* Grid de Artigos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BLOG_ARTICLES.map((article, idx) => (
              <article
                key={article.slug}
                className={`rounded-3xl bg-[#F3ECE4] border border-[#C88A76]/45 p-6 sm:p-7 flex flex-col justify-between transition-all hover:border-[#582126]/60 hover:shadow-md ${
                  idx === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 mb-4 border-b border-[#C88A76]/35 text-xs">
                    <span className="font-bold uppercase tracking-[0.2em] text-[#582126]">
                      {article.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[#3A1F18]/75">
                      <Clock className="w-3.5 h-3.5 text-[#C88A76]" />
                      {article.readingTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1A1615] leading-snug mb-3">
                    <Link
                      href={`/blog/${article.slug}`}
                      className="hover:text-[#582126] transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-[#3A1F18]/90 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>

                  {/* Bloco de Resposta Rápida */}
                  <div className="p-4 rounded-2xl bg-[#FAF6F2] border-l-4 border-[#582126] text-xs sm:text-sm text-[#1A1615] leading-relaxed mb-5">
                    <strong className="block text-[11px] uppercase tracking-[0.16em] text-[#582126] mb-1">
                      Síntese Jurídica:
                    </strong>
                    {article.directAnswer}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#C88A76]/35 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-medium text-[#3A1F18]/75">
                    {article.pillars}
                  </span>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="min-h-[44px] px-4 py-2 rounded-xl bg-[#582126] hover:bg-[#41161A] text-[#FAF6F2] text-xs font-semibold inline-flex items-center gap-2 transition-colors"
                  >
                    <span>Ler artigo completo</span>
                    <ArrowUpRight className="w-4 h-4 text-[#E2C68D]" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* Footer Compacto do Blog */}
      <footer className="bg-[#1A1615] text-[#FAF6F2] border-t border-[#C5A059]/30 py-8">
        <div className="mx-auto max-w-5xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F3ECE4]/80">
          <p>
            © {new Date().getFullYear()} Dra. Michelle Dutra • Advogada (OAB/RS
            136.947)
          </p>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-white underline underline-offset-4">
              Site Institucional
            </Link>
            <Link href="/bio" className="hover:text-white underline underline-offset-4">
              Hub Bio-Link
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
