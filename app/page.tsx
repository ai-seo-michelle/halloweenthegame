import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  DoorOpen,
  Map,
  Radio,
  Route,
  Shield,
  Target,
  UserRound,
} from 'lucide-react';
import { SiteFooter } from '@/components/site/SiteFooter';
import { SiteHeader } from '@/components/site/SiteHeader';
import {
  guidePages,
  guidePath,
  homeMetadata,
  latestGuides,
  michaelCluster,
  popularGuides,
  survivorCluster,
} from '@/lib/guides';
import { absoluteUrl, siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: homeMetadata.title,
  description: homeMetadata.description,
  alternates: {
    canonical: absoluteUrl('/'),
  },
  openGraph: {
    title: homeMetadata.title,
    description: homeMetadata.description,
    url: absoluteUrl('/'),
    siteName: siteConfig.name,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: homeMetadata.title,
    description: homeMetadata.description,
  },
};

const iconMap = {
  'halloween-the-game-how-to-escape': DoorOpen,
  'halloween-the-game-objectives': Target,
  'halloween-the-game-maps': Map,
  'halloween-the-game-characters': UserRound,
  'halloween-the-game-survivors': Shield,
  'halloween-the-game-escape-routes': Route,
  'halloween-the-game-how-to-call-police': Radio,
  'halloween-the-game-items': BookOpen,
  'halloween-the-game-michael-myers': Target,
  'halloween-the-game-michael-myers-abilities': Target,
  'halloween-the-game-walkthrough': BookOpen,
};

function GuideCard({
  guide,
  compact = false,
}: {
  guide: (typeof guidePages)[number];
  compact?: boolean;
}) {
  const Icon = iconMap[guide.slug as keyof typeof iconMap] ?? BookOpen;

  return (
    <Link
      href={guidePath(guide.slug)}
      className="group flex h-full flex-col rounded-[8px] border border-white/10 bg-white/[0.045] p-5 transition hover:-translate-y-0.5 hover:border-orange-300/45 hover:bg-white/[0.07]"
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="grid h-10 w-10 place-items-center rounded-[8px] border border-white/10 bg-black/25 text-orange-200">
          <Icon aria-hidden="true" className="h-5 w-5" />
        </span>
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 text-stone-500 transition group-hover:translate-x-1 group-hover:text-orange-200"
        />
      </div>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
        {guide.category}
      </p>
      <h3 className="mt-2 text-lg font-semibold leading-tight text-stone-50">
        {guide.h1}
      </h3>
      {!compact ? (
        <p className="mt-3 text-sm leading-6 text-stone-400">
          {guide.quickAnswer}
        </p>
      ) : null}
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 opacity-35">
            <div className="h-full w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:52px_52px]" />
          </div>
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-orange-300/25" />
          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-10 sm:min-h-[calc(100svh-170px)] sm:px-6 lg:grid-cols-[1.06fr_0.94fr] lg:px-8">
            <div className="min-w-0 max-w-3xl">
              <p className="mb-5 inline-flex rounded-[8px] border border-orange-300/30 bg-orange-500/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">
                Unofficial fan guide
              </p>
              <h1 className="max-w-full text-[2.35rem] font-semibold leading-tight tracking-normal text-stone-50 sm:max-w-4xl sm:text-6xl sm:leading-[0.98] lg:text-7xl">
                <span className="block">Halloween:</span>
                <span className="block">The Game Guides</span>
              </h1>
              <p className="mt-6 max-w-2xl text-2xl font-medium leading-snug text-stone-200 sm:text-3xl">
                Survive Haddonfield. Or become the Boogeyman.
              </p>
              <p className="mt-5 max-w-full text-base leading-8 text-stone-400 sm:max-w-2xl sm:text-lg">
                Fast, careful guides for Heroes of Haddonfield, Michael Myers,
                maps, objectives, escape routes, police contact, items, and The
                Night He Came Home story mode.
              </p>
              <div className="mt-8 flex max-w-full flex-col gap-3 sm:flex-row">
                <Link
                  href="/halloween-the-game-survivors"
                  className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-orange-400 px-5 py-3 text-base font-bold text-[#160f09] transition hover:bg-orange-300"
                >
                  <Shield aria-hidden="true" className="h-5 w-5" />
                  Survive as a Hero
                </Link>
                <Link
                  href="/halloween-the-game-michael-myers"
                  className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-white/15 bg-white/7 px-5 py-3 text-base font-bold text-stone-100 transition hover:bg-white/12"
                >
                  <Target aria-hidden="true" className="h-5 w-5" />
                  Play as Michael Myers
                </Link>
              </div>
            </div>
            <div className="hidden rounded-[8px] border border-white/10 bg-[#120f0c]/82 p-4 shadow-2xl shadow-black/35 lg:block">
              <div className="border-b border-white/10 px-2 pb-3 font-mono text-xs uppercase tracking-[0.18em] text-stone-500">
                Haddonfield field board
              </div>
              <div className="grid gap-3 pt-4">
                {popularGuides.map((guide, index) => (
                  <Link
                    key={guide.slug}
                    href={guidePath(guide.slug)}
                    className="group grid min-w-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-[8px] border border-white/10 bg-black/18 p-3 transition hover:border-orange-300/45 hover:bg-orange-500/10"
                  >
                    <span className="font-mono text-xs text-orange-200">
                      0{index + 1}
                    </span>
                    <span className="min-w-0 text-sm font-semibold text-stone-100">
                      {guide.h1}
                    </span>
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 text-stone-500 transition group-hover:translate-x-1 group-hover:text-orange-200"
                    />
                  </Link>
                ))}
              </div>
              <p className="mt-4 rounded-[8px] border border-emerald-300/20 bg-emerald-400/8 px-3 py-3 text-sm leading-6 text-stone-300">
                This site avoids invented stats, route recipes, and ability
                numbers. Unverified mechanics are marked clearly until current
                evidence is available.
              </p>
            </div>
          </div>
        </section>

        <section
          id="popular-guides"
          className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
        >
          <div className="mb-7 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div className="min-w-0">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-200">
                Choose Your Side
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-stone-50 sm:text-3xl">
                Start with the problem you have now
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-stone-400">
              Each guide opens with a quick answer first, then tables,
              verification notes, common mistakes, and related guides.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <GuideCard guide={survivorCluster[0]} />
            <GuideCard guide={michaelCluster[0]} />
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="mb-7 flex items-center justify-between gap-4">
              <h2 className="text-3xl font-semibold text-stone-50">
                Popular Guides
              </h2>
              <Link
                href="/halloween-the-game-characters"
                className="hidden text-sm font-semibold text-orange-200 hover:text-orange-100 sm:inline"
              >
                View character guide
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {popularGuides.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} compact />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
              Survive Haddonfield
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-stone-50">
              Hero objective cluster
            </h2>
            <div className="mt-6 grid gap-3">
              {survivorCluster.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} compact />
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-200">
              Become the Boogeyman
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-stone-50">
              Michael Myers cluster
            </h2>
            <div className="mt-6 grid gap-3">
              {michaelCluster.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} compact />
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#100d0a]">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">
                Story Mode
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-stone-50">
                The Night He Came Home
              </h2>
            </div>
            <GuideCard
              guide={guidePages.find((guide) => guide.slug === 'halloween-the-game-walkthrough')!}
            />
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-7 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-200">
                Latest
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-stone-50">
                Recently Updated Guides
              </h2>
            </div>
            <p className="text-sm text-stone-500">
              Last updated: {siteConfig.lastUpdated}
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {latestGuides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} compact />
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
          <div className="rounded-[8px] border border-white/10 bg-white/[0.045] p-5 text-sm leading-6 text-stone-400">
            <strong className="text-stone-200">Fan site disclaimer:</strong>{' '}
            {siteConfig.disclaimer}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
