import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  MessageCircle,
  Scale,
} from "lucide-react";
import { BLOG_ARTICLES, getArticleBySlug } from "../articles-data";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://advogadamichelledutra.vercel.app";

export function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Artigo não encontrado",
    };
  }

  return {
    title: {
      absolute: article.metaTitle,
    },
    description: article.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/blog/${article.slug}`,
    },
    openGraph: {
      type: "article",
      locale: "pt_BR",
      url: `${SITE_URL}/blog/${article.slug}`,
      title: article.metaTitle,
      description: article.metaDescription,
      publishedTime: article.publishedAt,
      authors: ["Dra. Michelle Dutra (OAB/RS 136.947)"],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const whatsappUrl = `https://wa.me/5551996049104?text=${encodeURIComponent(
    article.whatsappMessage
  )}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/blog/${article.slug}/#article`,
    mainEntityOfPage: `${SITE_URL}/blog/${article.slug}`,
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    inLanguage: "pt-BR",
    author: {
      "@type": "Person",
      name: "Dra. Michelle Dutra",
      jobTitle: "Advogada (OAB/RS 136.947)",
      url: `${SITE_URL}/`,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };

  return (
    <div className="min-h-dvh flex flex-col bg-[#FAF6F2] text-[#3A1F18]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Top Navigation */}
      <header className="sticky top-0 z-40 glass-nav border-b border-[#C88A76]/30">
        <div className="mx-auto max-w-4xl px-4 h-16 flex items-center justify-between gap-3">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#582126] hover:text-[#1A1615] transition-colors py-2"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.75} />
            <span>Todos os Artigos do Blog</span>
          </Link>

          <Link
            href="/"
            className="text-xs font-medium text-[#3A1F18]/80 hover:text-[#582126] transition-colors"
          >
            Ir para o Site Principal →
          </Link>
        </div>
      </header>

      <main className="flex-1 py-10 sm:py-16">
        <article className="mx-auto max-w-3xl px-4">
          {/* Meta Header */}
          <div className="mb-8 pb-6 border-b border-[#C88A76]/40">
            <div className="flex flex-wrap items-center gap-2.5 text-xs mb-3">
              <span className="font-bold uppercase tracking-[0.2em] text-[#582126]">
                {article.category}
              </span>
              <span className="text-[#C88A76]" aria-hidden="true">
                •
              </span>
              <span className="inline-flex items-center gap-1 text-[#3A1F18]/75">
                <Clock className="w-3.5 h-3.5 text-[#C88A76]" />
                {article.readingTime}
              </span>
              <span className="text-[#C88A76]" aria-hidden="true">
                •
              </span>
              <span className="text-[#3A1F18]/75">{article.pillars}</span>
            </div>

            <h1
              className="font-serif font-semibold text-[#1A1615] leading-[1.12] mb-5"
              style={{ fontSize: "clamp(1.85rem, 4.2vw, 2.85rem)" }}
            >
              {article.title}
            </h1>

            {/* Autoria */}
            <div className="flex items-center gap-3 text-xs text-[#3A1F18]/85">
              <div className="w-9 h-9 rounded-full bg-[#582126] text-[#E2C68D] flex items-center justify-center font-serif font-bold text-sm">
                MD
              </div>
              <div>
                <p className="font-semibold text-[#1A1615]">
                  Por Dra. Michelle Dutra • Advogada (OAB/RS 136.947)
                </p>
                <p className="text-[#3A1F18]/70">
                  Pós-graduada em Direito do Trabalho e Direito de Família e
                  Sucessões
                </p>
              </div>
            </div>
          </div>

          {/* Resposta Direta (Otimizada para GEO / LLMs) */}
          <section
            aria-label="Resposta Direta"
            className="p-5 sm:p-6 rounded-2xl bg-[#F3ECE4] border-l-4 border-[#582126] mb-8"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#582126] mb-1.5">
              Resumo Direto • O que você precisa saber
            </p>
            <p className="text-sm sm:text-base text-[#1A1615] leading-relaxed font-medium">
              {article.directAnswer}
            </p>
          </section>

          {/* Seções de Conteúdo do Artigo */}
          <div className="space-y-8 mb-10">
            {article.sections.map((sec) => (
              <section key={sec.heading} className="space-y-3.5">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1A1615] leading-snug">
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-sm sm:text-base text-[#3A1F18]/90 leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
                {sec.bullets && (
                  <ul className="space-y-2.5 pt-2">
                    {sec.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#F3ECE4]/70 border border-[#C88A76]/35 text-xs sm:text-sm text-[#1A1615]"
                      >
                        <CheckCircle2
                          className="w-4 h-4 text-[#582126] shrink-0 mt-0.5"
                          strokeWidth={1.75}
                        />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Checklist Semântico */}
          <section
            aria-label="Checklist Prático"
            className="rounded-3xl bg-[#F3ECE4] border border-[#C88A76]/45 p-6 sm:p-7 mb-10"
          >
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#1A1615] mb-4 flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#582126]" strokeWidth={1.6} />
              <span>Checklist de Conferência Jurídica</span>
            </h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {article.checklist.map((item) => (
                <div
                  key={item.term}
                  className="p-3.5 rounded-xl bg-[#FAF6F2] border border-[#C88A76]/30"
                >
                  <dt className="text-xs font-bold text-[#582126] mb-1">
                    {item.term}
                  </dt>
                  <dd className="text-xs text-[#3A1F18]/90 leading-relaxed">
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {/* CTA de Conversão do Artigo */}
          <div className="rounded-3xl bg-[#1A1615] text-[#FAF6F2] p-6 sm:p-8 border-2 border-[#C5A059]/45">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C5A059] mb-1.5">
              CADA CASO MERECE ATENÇÃO
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-white mb-2">
              Ficou com dúvida sobre o que se aplica ao seu caso?
            </h2>
            <p className="text-xs sm:text-sm text-[#F3ECE4]/85 leading-relaxed mb-5">
              Converse diretamente com a Dra. Michelle Dutra (OAB/RS 136.947)
              para uma análise individualizada dos seus documentos e prazos.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer min-h-[50px] px-6 py-3 rounded-xl bg-[#582126] hover:bg-[#722D33] text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2.5 border border-[#C5A059]/50"
            >
              <MessageCircle className="w-4 h-4 text-[#E2C68D]" />
              <span>Solicitar Análise pelo WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 text-[#E2C68D]" />
            </a>
          </div>
        </article>
      </main>
    </div>
  );
}
