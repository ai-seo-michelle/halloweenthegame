export const siteConfig = {
  name: 'Halloween: The Game Fan Guide',
  shortName: 'Haddonfield Guide',
  domain: 'https://halloweenthegame.info',
  description:
    'Independent fan-made guides for Halloween: The Game, with quick answers for survivors, Michael Myers, maps, objectives, items, and story mode.',
  disclaimer:
    'This is an independent fan-made guide and is not affiliated with or endorsed by IllFonic, Gun Interactive, Compass International Pictures, or the Halloween rights holders. All trademarks belong to their respective owners.',
  lastUpdated: 'September 9, 2026',
  lastUpdatedIso: '2026-09-09',
  analytics: {
    googleAnalyticsId: 'G-C2J3X9C7Z5',
    googleSearchConsoleVerification: '',
  },
  nav: [
    { label: 'Guides', href: '/#popular-guides' },
    { label: 'Survivors', href: '/halloween-the-game-survivors' },
    { label: 'Michael Myers', href: '/halloween-the-game-michael-myers' },
    { label: 'Maps', href: '/halloween-the-game-maps' },
    { label: 'Walkthrough', href: '/halloween-the-game-walkthrough' },
  ],
};

export function absoluteUrl(path = '/') {
  if (path === '/') {
    return siteConfig.domain;
  }

  return `${siteConfig.domain}${path.startsWith('/') ? path : `/${path}`}`;
}
