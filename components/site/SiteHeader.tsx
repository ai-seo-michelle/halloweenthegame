import { siteConfig } from '@/lib/site-config';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#090908]/92 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="/"
          className="flex min-w-0 items-center gap-3 text-offwhite transition hover:text-white"
          aria-label="Haddonfield Guide home"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[8px] border border-orange-400/50 bg-[#17110d] font-mono text-sm font-bold text-orange-300 shadow-[0_0_24px_rgba(230,112,32,0.22)]">
            HG
          </span>
          <span className="truncate text-sm font-semibold uppercase tracking-[0.18em]">
            {siteConfig.shortName}
          </span>
        </a>
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 md:flex"
        >
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-[8px] px-3 py-2 text-sm font-medium text-stone-300 transition hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="/halloween-the-game-how-to-escape"
          className="hidden rounded-[8px] border border-orange-300/45 bg-orange-500/12 px-3 py-2 text-sm font-semibold text-orange-100 transition hover:bg-orange-500/20 sm:inline-flex"
        >
          Escape Guide
        </a>
      </div>
    </header>
  );
}
