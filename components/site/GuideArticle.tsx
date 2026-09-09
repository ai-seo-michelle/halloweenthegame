import Link from 'next/link';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  Info,
} from 'lucide-react';
import { JsonLd } from '@/components/site/JsonLd';
import {
  GuidePage,
  getRelatedGuides,
  guidePath,
  sourceLinks,
} from '@/lib/guides';
import { absoluteUrl, siteConfig } from '@/lib/site-config';

function buildJsonLd(guide: GuidePage) {
  const pageUrl = absoluteUrl(guidePath(guide.slug));
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: absoluteUrl('/'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Guides',
        item: absoluteUrl('/#popular-guides'),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: guide.h1,
        item: pageUrl,
      },
    ],
  };

  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.h1,
    description: guide.metaDescription,
    mainEntityOfPage: pageUrl,
    datePublished: siteConfig.lastUpdatedIso,
    dateModified: siteConfig.lastUpdatedIso,
    inLanguage: 'en-US',
    keywords: [guide.targetKeyword, ...(guide.secondaryKeywords ?? [])],
    author: {
      '@type': 'Organization',
      name: siteConfig.shortName,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.shortName,
    },
  };

  const faq = guide.faq.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: guide.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null;

  return faq ? [breadcrumb, article, faq] : [breadcrumb, article];
}

export function GuideArticle({ guide }: { guide: GuidePage }) {
  const relatedGuides = getRelatedGuides(guide);

  return (
    <>
      <JsonLd data={buildJsonLd(guide)} />
      <main>
        <section className="border-b border-white/10 bg-[#0d0b09]">
          <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-stone-500">
              <Link href="/" className="hover:text-orange-200">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/#popular-guides" className="hover:text-orange-200">
                Guides
              </Link>
              <span className="mx-2">/</span>
              <span className="text-stone-300">{guide.h1}</span>
            </nav>
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-200 transition hover:text-orange-100"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              Back to guide index
            </Link>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
              <div>
                <p className="mb-4 inline-flex rounded-[8px] border border-orange-300/30 bg-orange-500/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">
                  {guide.category}
                </p>
                <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-stone-50 sm:text-5xl">
                  {guide.h1}
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-300">
                  {guide.deck}
                </p>
              </div>
              <aside className="rounded-[8px] border border-white/10 bg-white/[0.045] p-5">
                <div className="flex items-start gap-3 text-sm text-stone-300">
                  <CalendarDays
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-orange-200"
                  />
                  <div>
                    <p className="font-semibold text-stone-100">
                      Last updated
                    </p>
                    <p>{siteConfig.lastUpdated}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-start gap-3 text-sm text-stone-300">
                  <Info
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-emerald-200"
                  />
                  <div>
                    <p className="font-semibold text-stone-100">
                      Version note
                    </p>
                    <p>
                      Launch-window public information. Mechanics marked
                      pending verification should be checked against current
                      in-game text.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
          <article className="min-w-0">
            <section className="rounded-[8px] border border-orange-300/30 bg-orange-500/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-200">
                Quick Answer
              </p>
              <p className="mt-3 text-lg leading-8 text-stone-100">
                {guide.quickAnswer}
              </p>
            </section>

            <section className="mt-8 rounded-[8px] border border-white/10 bg-white/[0.045] p-5">
              <h2 className="text-2xl font-semibold text-stone-50">
                Core Takeaways
              </h2>
              <ul className="mt-4 grid gap-3">
                {guide.keyPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-stone-300">
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 shrink-0 text-emerald-200"
                    />
                    <span className="leading-7">{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-stone-50">
                Core Steps
              </h2>
              <ol className="mt-4 grid gap-3">
                {guide.steps.map((step, index) => (
                  <li
                    key={step}
                    className="grid grid-cols-[auto_1fr] gap-4 rounded-[8px] border border-white/10 bg-white/[0.04] p-4"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-[8px] bg-orange-400 font-mono text-sm font-bold text-[#160f09]">
                      {index + 1}
                    </span>
                    <span className="pt-0.5 leading-7 text-stone-300">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </section>

            {guide.table ? (
              <section className="mt-8 overflow-hidden rounded-[8px] border border-white/10 bg-[#120f0c]">
                <div className="border-b border-white/10 p-5">
                  <h2 className="text-2xl font-semibold text-stone-50">
                    {guide.table.heading}
                  </h2>
                  {guide.table.intro ? (
                    <p className="mt-2 text-sm leading-6 text-stone-400">
                      {guide.table.intro}
                    </p>
                  ) : null}
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[640px] text-left text-sm">
                    <thead className="bg-white/[0.045] text-xs uppercase tracking-[0.14em] text-stone-500">
                      <tr>
                        {guide.table.headers.map((header) => (
                          <th key={header} className="px-4 py-3 font-semibold">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {guide.table.rows.map((row) => (
                        <tr key={row.join('|')}>
                          {row.map((cell, index) => (
                            <td
                              key={`${cell}-${index}`}
                              className="px-4 py-4 align-top leading-6 text-stone-300"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            ) : null}

            <div className="guide-prose mt-8 grid gap-8">
              {guide.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-semibold text-stone-50">
                    {section.heading}
                  </h2>
                  <div className="mt-4 grid gap-4">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets ? (
                    <ul className="mt-4 grid gap-2">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="leading-7 text-stone-300">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            <section className="mt-8 rounded-[8px] border border-white/10 bg-white/[0.045] p-5">
              <div className="flex items-center gap-3">
                <AlertTriangle
                  aria-hidden="true"
                  className="h-5 w-5 text-orange-200"
                />
                <h2 className="text-2xl font-semibold text-stone-50">
                  Common Mistakes And Notes
                </h2>
              </div>
              <ul className="mt-4 grid gap-3">
                {guide.mistakes.map((mistake) => (
                  <li key={mistake} className="leading-7 text-stone-300">
                    {mistake}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-stone-50">FAQ</h2>
              <div className="mt-4 grid gap-3">
                {guide.faq.map((item) => (
                  <details
                    key={item.question}
                    className="rounded-[8px] border border-white/10 bg-white/[0.04] p-4"
                  >
                    <summary className="cursor-pointer text-base font-semibold text-stone-100">
                      {item.question}
                    </summary>
                    <p className="mt-3 leading-7 text-stone-300">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-stone-50">
                Related Guides
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {relatedGuides.map((related) => (
                  <Link
                    key={related.slug}
                    href={guidePath(related.slug)}
                    className="group rounded-[8px] border border-white/10 bg-white/[0.04] p-4 transition hover:border-orange-300/45 hover:bg-orange-500/10"
                  >
                    <span className="text-sm font-semibold text-stone-100">
                      {related.h1}
                    </span>
                    <span className="mt-3 flex items-center gap-2 text-sm text-orange-200">
                      Open guide
                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 transition group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </article>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="rounded-[8px] border border-white/10 bg-white/[0.045] p-5">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-400">
                Page Focus
              </h2>
              <p className="mt-3 text-sm leading-6 text-stone-300">
                Target keyword: {guide.targetKeyword}
              </p>
              {guide.secondaryKeywords?.length ? (
                <p className="mt-2 text-sm leading-6 text-stone-400">
                  Also covers: {guide.secondaryKeywords.join(', ')}
                </p>
              ) : null}
            </section>
            <section className="rounded-[8px] border border-white/10 bg-white/[0.045] p-5">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-400">
                Verification Notes
              </h2>
              <ul className="mt-3 grid gap-3">
                {guide.sourceNotes.map((note) => (
                  <li key={note} className="text-sm leading-6 text-stone-300">
                    {note}
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-[8px] border border-white/10 bg-white/[0.045] p-5">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-400">
                Source Links
              </h2>
              <ul className="mt-3 grid gap-3">
                {sourceLinks.map((source) => (
                  <li key={source.href}>
                    <a
                      href={source.href}
                      rel="noreferrer"
                      target="_blank"
                      className="inline-flex items-center gap-2 text-sm text-orange-200 transition hover:text-orange-100"
                    >
                      {source.label}
                      <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </main>
    </>
  );
}
