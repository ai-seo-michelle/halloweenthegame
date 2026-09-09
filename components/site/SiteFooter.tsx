import Link from 'next/link';
import { guidePages, guidePath } from '@/lib/guides';
import { siteConfig } from '@/lib/site-config';

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#070706]">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-[8px] border border-orange-400/50 bg-[#17110d] font-mono text-xs font-bold text-orange-300">
              HG
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-100">
              {siteConfig.shortName}
            </span>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-stone-400">
            {siteConfig.disclaimer}
          </p>
          <p className="mt-4 text-sm text-stone-500">
            Last updated: {siteConfig.lastUpdated}. Information marked pending
            verification should be checked against current in-game text and
            official patch notes.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-200">
            Guide Index
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-1">
            {guidePages.slice(0, 8).map((guide) => (
              <li key={guide.slug}>
                <Link
                  className="text-sm text-stone-400 transition hover:text-orange-200"
                  href={guidePath(guide.slug)}
                >
                  {guide.h1}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
