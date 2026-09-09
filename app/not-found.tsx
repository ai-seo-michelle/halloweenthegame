import Link from 'next/link';
import { ArrowRight, Home } from 'lucide-react';
import { SiteFooter } from '@/components/site/SiteFooter';
import { SiteHeader } from '@/components/site/SiteHeader';
import { popularGuides, guidePath } from '@/lib/guides';

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-200">
          404
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-stone-50">
          This guide is not in Haddonfield yet
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-300">
          The page may have moved, or it may be a future guide that still needs
          verified in-game information before it can be published.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-orange-400 px-5 py-3 text-base font-bold text-[#160f09] transition hover:bg-orange-300"
          >
            <Home aria-hidden="true" className="h-5 w-5" />
            Back home
          </Link>
          <Link
            href="/halloween-the-game-how-to-escape"
            className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-white/15 bg-white/7 px-5 py-3 text-base font-bold text-stone-100 transition hover:bg-white/12"
          >
            Open escape guide
            <ArrowRight aria-hidden="true" className="h-5 w-5" />
          </Link>
        </div>
        <section className="mt-12 grid gap-3 sm:grid-cols-2">
          {popularGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={guidePath(guide.slug)}
              className="rounded-[8px] border border-white/10 bg-white/[0.045] p-4 transition hover:border-orange-300/45 hover:bg-orange-500/10"
            >
              <span className="text-sm font-semibold text-stone-100">
                {guide.h1}
              </span>
            </Link>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
